---
tags: subversion git
---

I used to host a number of public [Subversion](/wiki/Subversion) repositories for [open source](/wiki/open_source) projects at svn.wincent.com. Due to long-standing dissatisfaction with Subversion's inadequate support for [branching](/wiki/branching) and [merging](/wiki/merging), in early 2007 I started using [SVK](/wiki/SVK) locally as an additional layer while maintaining the server-side infrastructure.

But although SVK is very good, it is written in [Perl](/wiki/Perl) and has proved to be quite slow. SVK's local mirroring eliminates the network bottleneck for some operations, but still proves to be quite slow overall. [Git](/wiki/Git) on the other hand delivers most of the advantages of SVK (see "[Git advantages](/wiki/Git_advantages)" and "[SVK advantages](/wiki/SVK_advantages)") but additionally offers unrivalled speed for most operations, is more powerful and more robust in my judgement, and offers excellent documentation (see "[Git documentation](/wiki/Git_documentation)" on par or better than Subversion's and far in advance of SVK's).

Although Git, like SVK, can be used as a gateway to/from a central Subversion server, I've decided to simplify my infrastructure by eventually *replacing* my existing Subversion repositories with Git ones rather than just layering Git over the top.

Once the initial set-up is done (describe below) migrating additional repositories is very easy. The basic pattern for a shallow (no-history) import is:

    # For *public* repositories:
    # on the remote (public) machine:
    # create a new bare repository
    cd /pub/git/path_to_public_repositories
    sudo -u git mkdir repo.git
    cd repo.git
    sudo -H -u git git --bare init
    sudo -u git touch git-daemon-export-ok

    # Alternatively, for private repositories:
    cd /pub/git/path_private_repositories
    sudo -u git mkdir repo.git
    cd repo.git
    sudo -H u git git --bare init

    # on the local (private) machine:
    # create a new empty repository and prepare the initial commit
    svn export svn://svn.example.com/repo/trunk repo
    cd repo
    git init
    git add .
    git commit -s

    # actually push
    git remote add origin git.example.com:/pub/git/path_to_public_repositories/repo.git
    git config branch.master.remote origin
    git config branch.master.merge refs/heads/master
    git push --all

    # add a tag corresponding to Subversion revision number (eg r79)
    git tag -s r79
    git push --tags

    # now, back on the remote machine:
    # for *public* repositories, set up gitweb
    cd path_to_repo
    echo "Description of this repository" | sudo -u git tee description
    echo "repository.git Owner+Name+<owner@example.com>" | sudo -u git tee -a /pub/git/conf/gitweb-projects
    echo "git://git.example.com/repository.git" | sudo -u git tee cloneurl

# Preliminaries

The standard location for repositories served by `git-daemon` (see `man git-daemon`) is inside `/pub/git` so I began by creating the `/pub` directory:

    cd /
    sudo mkdir pub

Seeing as I was planning on locking down access with `git-shell` (see `man git-shell`) I added the appropriate line into my `/etc/shells` list:

    sudo -s

    # tailor according to where you installed git-shell
    echo "/usr/local/bin/git-shell" >> /etc/shells

I then created a `git` user and set its shell to `/usr/local/bin/git-shell`, disabled login (that is, in the `/etc/shadow` file the `git` user should have only a `*` in its password field), and set its home directory to `/pub/git`; seeing as I used [Webmin](/wiki/Webmin) the home directory and corresponding `git` group were automatically set up for me.

Then for some once-only global set-up for git user:

    # turn on new 1.5 features which break backwards compatibility
    sudo -H -u git git config --global core.legacyheaders false
    sudo -H -u git git config --global repack.usedeltabaseoffset true

I also had to add this to `/etc/services`:

    git             9418/tcp                        # Git version control system

And add this file, `/etc/xinetd.d/git`:

    service git
    {
            port = 9418
            socket_type = stream
            protocol = tcp
            user = git
            server = /usr/local/bin/git-daemon
            server_args = --inetd --base-path=/pub/git/path_to_public_repos -- /pub/git/path_to_public_repos
            type = UNLISTED
            wait = no
            max_load = 5
            instances = 5
    }

Finally I had to get `xinetd` to re-read its configuration by sending it a `SIGHUP`.

# [SSH](/wiki/SSH) set up

While anonymous, read-only access is provided by the `git-daemon`, write access for developers takes place over [SSH](/wiki/SSH). As I am the only contributor on these projects at this stage the set-up is quite straight forward as there are no tricky permissions or shared repository concerns to worry about.

First of all, on my local machine I generated a public/private key pair for authentication:

    ssh-keygen -t dsa -f ~/.ssh/id_dsa_git
    chmod 400 ~/.ssh/id_dsa_git

I copied the public key to the remote machine, adding a corresponding entry to the `~/.ssh/authorized_keys` file in the `git` user home directory.

    no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty ssh-dss AAAAB...CkiWA== wincent@example.com (git)

On local machine, in `~/.ssh/config` add:

    Host git.example.com
      IdentityFile ~/.ssh/id_dsa_git
      HostName git.example.com
      User git

I also added the key to the list of keys managed by `ssh-agent` so that I wouldn't have to repeatedly enter my password. If this is all correctly set-up you should be able to perform a `ssh git.example.com` and see this error:

    fatal: What do you think I am? A shell?

This is not actually a bad thing; the error message demonstrates that you were able to log in via public key authentication (good) and that you were given only restricted access thanks to `git-shell` (again, a good thing).

If this doesn't work the first thing to check should be the permissions on your remote (and local) `~/.ssh` directory and its contents. I recommend permissions of 500 on the directory and 400 on the contents.

# Importing from the Subversion repository

As [noted here](http://utsl.gen.nz/talks/git-svn/intro.html) there are a number of ways to get an existing [Subversion](/wiki/Subversion) repository into [Git](/wiki/Git). Among them, we have:

-   Use `git svn init` to set up a local, two-way mirror of an existing Subversion repository and all its history; this is similar to creating an [SVK](/wiki/SVK) mirror
-   Use `git svnimport` to do a once-off import of an existing Subversion repository and all its history
-   Create a new Git repository and import only the tip of the current trunk from an existing Subversion repository (no history is imported)

I tried the first method first and the import failed half-way through:

    $ git svn init -t tags -b branches -T trunk svn+ssh://svn.example.com/repo
    $ git svn fetch
    ...
    r76 = b5a75a3212b6620ec0a6967275cdfcec4844461d (trunk)
    Malformed network data: Malformed network data at /usr/local/bin/git-svn line 964

Without really knowing the cause of the failure it seemed wise to try another method, and in any case, I didn't really want a two-way gateway but a once-off import so that I could eventually decommission the public Subversion server.

So I then tried the second alternative:

    echo "wincent = Wincent Colaiuta <win@wincent.com>" >> ~/.svn-authors
    git svnimport -i -v -I .gitignore -A ~/.svn-authors -C WOTest svn://svn.example.com/repo

Although this worked on my local ([Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger)) machine, it failed on my remote [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux) machine because it didn't have the necessary prerequisites installed (`SVN::Core` and friends). It had worked on the [Mac OS X](/wiki/Mac_OS_X) box because I had already built the [Subversion](/wiki/Subversion) [Perl](/wiki/Perl) bindings when installing [SVK](/wiki/SVK). I tried to build the bindings on the [Red Hat](/wiki/Red_Hat) box but withot success (see "[Upgrading to Subversion 1.4.4](/wiki/Upgrading_to_Subversion_1.4.4)").

So this left me with two options:

-   Forget importing the history and seed a clean [Git](/wiki/Git) repository with only the tip of the current head
-   Use `git svnimport` to do the set-up on the [Mac OS X](/wiki/Mac_OS_X) box and then transfer the repository over to the [Red Hat](/wiki/Red_Hat) machine

The former was the easiest so that's the approach I tried first. (I latter tried the other approach too and wrote it up in "[Doing a one-off migration from Subversion to Git](/wiki/Doing_a_one-off_migration_from_Subversion_to_Git)").

So, on the remote machine:

    # set up remote repo, bare
    sudo -H -u git mkdir test.git
    cd test.git

    # note that --bare comes before the init subcommand
    # it is equivalent to --git-dir=pwd
    sudo -H -u git git --bare init
    sudo -H -u git touch git-daemon-export-ok

Now on the local machine, create a new empty repository and prepare the initial commit:

    # grab tip of trunk to seed git repo
    svn export svn://svn.example.com/repo/trunk test
    cd test
    git init
    git add .
    git commit -s

    # add a tag corresponding to Subversion revision number
    git tag -s r208

    # actually push
    git push git.example.com:/pub/git/path_to_public_repos/test.git master

Note how the default protocol is [SSH](/wiki/SSH) and it is not necessary to specify it explicitly.

This pushed only the initial contents of the tree, not the tag. I believe if could have included the `--tags` switch to `git push` to have the tag included.

I also decided to set up a mapping from local master to remote master to make these pushes easier in the future. For example, I could set up a file (locally) at `.git/remotes/my_shortcut` with contents like this:

    URL: git.example.com:/pub/git/path_to_public_repos/test.git
    Push: master

And then push the tag (for example) by doing:

    git push my_shortcut r208

I explained this in a write-up to the mailing list [here](http://marc.info/?l=git&m=118437962422071&w=2), and it was clarified that the "new" way of setting up these remote references is to add them to your `.git/config`:

    [remote "origin"]
            url = ssh://git.example.com/pub/git/path_to_public_repos/test
            fetch = +refs/heads/*:refs/remotes/origin/*
    [branch "master"]
            remote = origin
            merge = refs/heads/master

You can get this remote configuration (the same as would be produced by `git clone`) by using the `git remote` command:

    git init
    git remote add origin git.example.com:/pub/git/path_to_public_repos/test.git
    git config branch.master.remote origin
    git config branch.master.merge refs/heads/master

Yet another alternative is to just clone the now-populated remote repository; cloning a totally empty repository won't work but now that it has some content cloning will work fine and doing a `git clone` will automatically set you up to `push` and `pull`:

    git clone ssh://git.example.com/pub/git/path_to_public_repos/test

I later also tried the approach of creating a repository on my local machine with full history, zipping up the repository and transferring it to a remote server, unpacking it and configuring it on the remote server. This approach worked roughly as follows:

    # extract the repository
    cd path_to_git_repositories
    sudo -u git cp ~/walrus.zip .
    sudo -u git unzip walrus.zip 
    sudo rm walrus.zip
    sudo -u git mv walrus/.git Walrus.git
    sudo rm -r walrus

    # repository set-up
    cd Walrus.git
    sudo -u git touch git-daemon-export-ok
    echo "Walrus.git win@wincent.com" | sudo tee -a path_to_conf_dir/gitweb-projects 
    echo "Object-oriented templating system" | sudo tee description 

    # remove local junk
    sudo rm qgit_cache.dat svn2git svn-authors 

    # remove now irrelevant "origin" head
    sudo rm refs/heads/origin

But in the end I decided that instead of keeping the legacy history in the Git repository I preferred to make a clean break and start with a brand new (historyless) repository. I was mostly motivated by:

-   The fact that Git encourages certain conventions for formatting commit messages that I hadn't previously followed in the Subversion era; for example some of my commit messages are too wide and so don't display well in [Gitweb](/wiki/Gitweb)
-   The desire for a clean "psychological break" with the old code and a "fresh start"; the history is still available in the Subversion repository my real attention is focussed on the present codebase, not where it came from
-   A desire to adopt a more disciplined approach in the future

About 3 years later, though, I decided that it wouldn't hurt to keep the old history in the new Git repo after all, under a different branch. This is because I let the legacy Subversion server go offline when I changed my hosting arrangements from [INetU](/wiki/INetU) to [Amazon Web Services](/wiki/Amazon_Web_Services). With no way convenient way to access the old revisions any more, it seemed appropriated to retrospectively import the old history into the Git repo. This is described in the next section:

# Importing Subversion history "after the fact"

According to the `git-svn` man page, `git svn init` and `git svn clone` are designed to work with new/empty Git repositories. My procedure, then, was to create a new Git repo from the Subversion repository, and then `git fetch` from that into the other Git repository.

I had a local [rsync](/wiki/rsync) backup of everything from the old server, including the Subversion repositories, so I could use local `file://` [URLs](/wiki/URLs) for the `git svn clone`:

```shell
$ cd /Seguridad/remote/wincent1.inetu.net/var/lib/svn/repositories
$ git svn clone --stdlayout \
                --no-metadata \
                -A ~/.svn-authors \
                file:///Seguridad/remote/wincent1.inetu.net/var/lib/svn/repositories/Walrus \
                Walrus.git
```

Subversion doesn't have real tags; rather it advises users to create "tags" by copying the desired revision into a subdirectory of `tags` at the top level of the repository. Given that tags should be static, the user should then refrain from ever making changes in that subdirectory.

When Git imports these tags it actually creates branch-like references for them, under `refs/remote/tags` (you can see them with `git branch -r`), in recognition of the fact that in the Subversion model these things aren't actually static but are more like branches.

In my case, however, I always followed the standard `tags`/`branches`/`trunk` layout and I never made changes to my "tags" after creating them, so I wanted to convert these branch-like tags to actual Git tags. I created and used this `tagger.sh` script for this purpose:

    #!/bin/sh

    # modelled after:
    #   http://www.gitready.com/advanced/2009/02/16/convert-git-svn-tag-branches-to-real-tags.html
    #   http://github.com/nothingmuch/git-svn-abandon/blob/master/git-svn-abandon-fix-refs
    git for-each-ref --format='%(refname)' refs/remotes/tags | while read REF; do
      echo "Processing: $REF"
      TAG=${REF#refs/remotes/tags/}
      COMMIT=$(git rev-parse $REF)
      echo "Tag $TAG points to commit $COMMIT"

      MERGE=$(git merge-base refs/remotes/trunk $COMMIT)
      echo "Merge base is $MERGE"

      git show --pretty='format:%s%n%n%b' $COMMIT | \
        env GIT_COMMITTER_NAME="$(git show --pretty='format:%an' $COMMIT)" \
            GIT_COMMITTER_EMAIL="$(git show --pretty='format:%ae' $COMMIT)" \
            GIT_COMMITTER_DATE="$(git show --pretty='format:%ad' $COMMIT)" \
            git tag -a -F - $TAG $MERGE
    done

Having done this, in the real Git repository, I could do the following:

```shell
$ git fetch /Seguridad/remote/wincent1.inetu.net/var/lib/svn/repositories/Walrus.git trunk
$ git branch trunk FETCH_HEAD
$ git fetch --tags /Seguridad/remote/wincent1.inetu.net/var/lib/svn/repositories/Walrus.git trunk
```

# See also

## Articles in this [knowledge base](/wiki/knowledge_base)

-   [Setting up gitweb](/wiki/Setting_up_gitweb)
-   [Git repository maintenance](/wiki/Git_repository_maintenance)
-   [Setting up a brand new public Git repository](/wiki/Setting_up_a_brand_new_public_Git_repository)
-   [Setting up a brand new private Git repository](/wiki/Setting_up_a_brand_new_private_Git_repository)

## External links

-   <http://blog.madduck.net/vcs/2007.07.11_publishing-git-repositories>

# Additional notes

My initial attempts at importing were done on the remote server directly, so I also added this to the `~/.gitconfig` for the `git` user, seeing as I'll be the only one doing commits for the foreseeable future:

    sudo -H -u git git config --global user.email win@wincent.com
    sudo -H -u git git config --global user.name "Wincent Colaiuta"

I suspect that this information is not actually required when pushing from an appropriately configured *local* repository, because the author information from the local repository should be used.
