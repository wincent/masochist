---
tags: git
cache_breaker: 1
---

One of the nice design decisions made by the [Git](/wiki/Git) developers is that access control should not be the responsibility of the [SCM](/wiki/SCM) tool. This means that the tool is free to concentrate on doing its job (tracking content), while leaving questions of authentication and authorization in the hands of other tools which are much more flexible and better suited to the job: tools like [SSH](/wiki/SSH), filesystem permissions, [ACLs](/wiki/ACLs), and a host of other mechanisms.

Because Git takes itself out of the access control equation you are free to implement any access policy that you see fit. What at first might seem like a limitation (no access control) turns out to offer an extremely convenient flexibility.

There are many different approaches to controlling access to [Git](/wiki/Git) repositories. Here I cover what I consider to be the two principal, or most useful, approaches.

# Simple access control

In this approach you have two classes of users:

-   Developers: read/write access
-   Users: read-only access

It is very straightforward to provide push (write) access over [SSH](/wiki/SSH) and anonymous read-only access using `git-daemon`.

All repositories are to be owned by the user `git`.

Add each developer's public key to the `.ssh/authorized_keys` file in the `git` users home directory and they'll have write access.

Set up `git-daemon` and by default anonymous users will have read access but not write access because `git-daemon` by design only provides read access.

Two things to note about this system:

-   Write access is shared, meaning that once a developer has write access to a repository he/she has write access to all repositories owned by the `git` user (which typically means all the repositories hosted on the server)
-   It is possible to set up public repositories (for [open source](/wiki/open_source) projects) and private repositories (for closed source projects) on the same server, by specifying which repositories should be exported by `git-daemon`

# Complex access control

What if you want to provide per-repository access control (eg. give developer access to a specific repo only but not others)? Or you want a developer to have read but not write access to a particular private repository?

The solution here is to rely on filesystem permissions. At the most simple level you create your repositories using an appropriate `--shared` option to `git init`. In this way you can add specific users to a `git` or `devel` group on the server. You can basically do anything that you would normally do with filesystem permissions, owners and groups, such as creating specific groups for specific repos and so forth.

For maximum control you can use [ACLs](/wiki/ACLs) and apply them selectively to specific repos. [This page](http://articles.techrepublic.com.com/5100-10878_11-6091748.html) offers an intro to using ACLs to provide fine-grained access control at the repo level, and [this thread](http://serverfault.com/questions/26954/how-do-i-share-a-git-repository-with-multiple-users-on-a-machine) applies that knowledge to the Git context.

Specifically, on a filesytem that supports ACLs such as XFS, or ext2/ext3 with appropriate configuration in `/etc/fstab`:

```shell
# setfacl -R -m g:<group>:rwX repo
# setfacl -R -m d:g:<group>:rwX repo
```

Explanation.

-   `-R`: apply recursively
-   `-m`: modify the ACL
-   `g:<group>`: permissions for group `<group>`
-   `r`: read access
-   `w`: write access
-   `X`: execute permissions, but only if the object is a directory, or already has execute permissions for some user
-   `d:<spec>`: set a default ACL (defined by `<spec>`) to be applied to any new files or directories added to the directory in the future

In other words the first line grants `rwx` permission on all directories, `rw`permission on all files, and `rwx`permission on all files which already had the `x` bit set, to users in group `<group>`.

The second line sets up the same permissions as a default ACL to be applied to any new files created in those directories. As a result of this default application at the OS-level there is no need to use `git init --shared` or otherwise set the `core.sharedRepository` config variable.

Note that if you prefer to manage developers as individuals rather than working with groups, you could subsitute `u` and `<user>` for `g` and `<group>` in the above examples.

To tighten this solution down appropriately, you'll want to make sure that by default only the `git` user has access to top-level directory containing all the repos (ie. `chmod 700` the `git` home directory), and then explicitly grant read access to your webserver user so that [GitWeb](/wiki/GitWeb) will continue to work, and to your developers so that they can access the repositories for which they have permissions.

Granting said access to [GitWeb](/wiki/GitWeb) server process can either be done via ACLs, or perhaps more simply, by using a `SuexecUserGroup git git` setting in your [Apache](/wiki/Apache) config.

## Example: granting read-access to a specific private repository to a specific user

```shell
# useradd -c "John Tester <john.tester@gmail.com>" -b /home -s /usr/bin/git-shell jtester
# cd /home/jtester
# sudo -u jtester mkdir .ssh
# chmod 700 .ssh
# sudo -u jtester vim .ssh/authorized_keys
# cd /path_to_private_repos
# chmod 750 the_repo.git
# setfacl -R -m u:jtester:rX the_repo.git
# setfacl -R -m d:u:jtester:rX the_repo.git
# setfacl -m u:jtester:rX . # read access to /path_to_private_repos
# sudo -u jtester ls -laF .
# vim /etc/shadow # unlock account (replace ! with *)
```

# Even more complex access control

If you want to not only customize access at the repo or developer level, but at the level of specific branches, you'll need to use a hook. Git comes with a nice sample hook called `update-paranoid` that demonstrates how you might do this.

Personally I've never needed or wanted this level of control: in the projects I manage you're either a committer or you're not, and if you're a committer that means you've been granted to the right to commit to the project in any way you please.

# External resources

-   overview of sharing methods (see comment by Jakub Narębski: <http://stackoverflow.com/questions/1662205/how-to-make-a-git-repository-read-only>
-   `update-paranoid` hook: <http://git.kernel.org/?p=git/git.git;a=blob;f=contrib/hooks/update-paranoid;hb=HEAD>
-   another overview: <http://www.jedi.be/blog/2009/05/06/8-ways-to-share-your-git-repository/>

