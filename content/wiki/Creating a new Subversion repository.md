---
tags: subversion wiki
---

# Creating the repository

This is the procedure I use for creating a new repository on the remote (public, Internet) machine. Information about the procedure I use on my local machine, see [Creating a new Subversion repository:Local machine](/wiki/Creating_a_new_Subversion_repository%3aLocal_machine).

    sudo -u svn svnadmin create /var/lib/svn/repositories/project-name

Set up appropriate access permissions:

    sudo nano /var/lib/svn/repositories/project-name/conf/svnserve.conf

For example:

    anon-access = read
    auth-access = write
    password-db = passwd
    realm = project-name repository

And configure username and password pairs:

    # may be able to copy a passwd file from an existing repository as a starting point
    sudo -u svn cp /var/lib/svn/repositories/other-project-name/conf/passwd \
                   /var/lib/svn/repositories/project-name/conf/passwd 
    # edit the passwd file by hand if necessary
    sudo nano /var/lib/svn/repositories/project-name/conf/passwd

For example:

    username = password

Finally, tighten the permissions on the `passwd` file:

    sudo chmod 600 /var/lib/svn/repositories/project-name/conf/passwd

Optionally install a post-commit hook script, using a hook script from another repository as a starting point:

    sudo -u svn cp /var/lib/svn/repositories/other-project-name/hooks/post-commit \
                   /var/lib/svn/repositories/project-name/hooks/post-commit
    sudo chmod 700 /var/lib/svn/repositories/project-name/hooks/post-commit
    sudo nano /var/lib/svn/repositories/project-name/hooks/post-commit

Then create repository content as described below (create `branches`, `tags` and `trunk` and perform initial import) or migrate repository content from existing repository as described in [Repository migration](/wiki/Repository_migration).

# Initial import

    mkdir trunk tags branches
    mv "project-files" trunk/
    svn import svn+ssh://svn.wincent.com/project-name

# Initial checkout of working copy

    mkdir pre-import
    mv branches tags trunk pre-import/
    svn co svn+ssh://svn.wincent.com/project-name/trunk trunk
