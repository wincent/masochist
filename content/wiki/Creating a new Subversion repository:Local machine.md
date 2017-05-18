---
tags: wiki
---

This is the procedure I use for creating a new repository on my local machine.

# Repository creation

    sudo svnadmin create ~/Developer/svnrep/project-name
    sudo chown -R svn:svn ~/Developer/svnrep/project-name

I've also made a script, `new-repository.sh` as a shortcut for this operation.

# Initial import

    mkdir trunk tags branches
    mv "project-files" trunk/
    svn import http://localhost:8080/svnrep/preoject-name

# Initial checkout of working copy

    mkdir pre-import
    mv branches tags trunk pre-import/
    svn co http://localhost:8080/svnrep/project-name/trunk trunk

# See also

-   [Creating a new Subversion repository](/wiki/Creating_a_new_Subversion_repository)
