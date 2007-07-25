---
title: Upgrading MovableType with the help of Git
---

Just got this query via email and thought I'd post my answer here for others to see:

> I've recently switched from using [svn](http://www.wincent.com/knowledge-base/svn) to [git](http://www.wincent.com/knowledge-base/git), and I'm about to switch from using [WordPress](http://www.wincent.com/knowledge-base/WordPress) to [MovableType](http://www.wincent.com/knowledge-base/MovableType) too.
>
> I've read your previous blog posts on upgrading WordPress using svn, and they were really helpful.
>
> It'll be great if you could write an article on upgrading MovableType using git for us newbies.





The reason why I never used to upgrade my Movable Type via Subversion is that [Six Apart](http://www.wincent.com/knowledge-base/Six%20Apart) (the makers of Movable Type) don't provide public access to their [version control system](http://www.wincent.com/knowledge-base/version%20control%20system); they instead distribute new releases of Movable Type as tarballs or zip archives.

As such, it wasn't possible to update an existing, customized install using Subversion (see "[Upgrading WordPress using Subversion](http://www.wincent.com/knowledge-base/Upgrading%20WordPress%20using%20Subversion)"). I did make some notes on making the upgrade as smooth as possible with the aid of things like [Interarchy](http://www.wincent.com/knowledge-base/Interarchy)'s "mirror upload" feature (see "[Movable Type upgrade notes](http://www.wincent.com/knowledge-base/Movable%20Type%20upgrade%20notes)"), but it was never going to be as convenient as a Subversion-based upgrade.

But Git is a distributed version control system so it offers the possibility of doing some tricks that you just can't do with Subversion.

I haven't tried this out yet, it is untested, but I think that you might be able to use the following workflow:

-   Grab the Movable Type source, extract the archive, and use it to initialize a brand new Git repository.

<!-- -->

    unzip MT-first-version.zip
    mv MT-first-version mt_vendor
    cd mt_vendor
    git init
    git add .
    git commit

-   Perform your customizations on a separate branch in a separate, cloned repository:

<!-- -->

    cd ..
    git clone mt_vendor mt_mine
    cd mt_mine
    git co -b my_custom_install --track

-   Whenever a new release comes out update the repository by extracting the archive, overwriting all the old files (but leaving the `.git` directory intact) and performing a `git commit -a`.

<!-- -->

    # switch back to vendor repo
    cd ../mt_vendor

    # remove all the files from the previous version
    rm -r *

    # extract the new files
    unzip MT-new-version.zip
    mv MT-new-version/* .
    rmdir MT-new-version
    rm MT-new-version.zip

    # commit changes
    git commit -a

-   Now merge the changes into your customized install

<!-- -->

    cd ../mt_mine
    git pull origin master

I'm not sure whether this is better than the download/extract/upload cycle, but merging with Git should be much more straightforward than merging with your [SFTP](http://www.wincent.com/knowledge-base/SFTP) client... Of course, it would still be a lot easier if Six Apart offered Subversion, Git or even [CVS](http://www.wincent.com/knowledge-base/CVS) access to a repository containing the public releases.
