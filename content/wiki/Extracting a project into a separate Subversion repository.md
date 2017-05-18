---
tags: wiki
---

This is a more conservative approach than that detailed in the Subversion book. Instead of dumping and using `svndumpfilter` to include only the relevant paths, we dump the repository, load the entire repository, and then delete excluded portions by hand:

    sudo -s
    cd /var/lib/svn/repositories
    svnadmin dump repository-name > respository-name.dump
    sudo -u svn svnadmin create project-name
    nano project-name/conf/svnserve.conf 
    nano project-name/conf/passwd 
    chmod 600 project-name/conf/passwd 
    sudo -u svn svnadmin load --ignore-uuid project-name < repository-name.dump

After loading in the new contents (with a different [UUID](/wiki/UUID)) it's necessary to massage the repository into the desired shape:

    svn ls svn://svn.wincent.com/project-name/tags
    svn rm svn://svn.wincent.com/project-name/tags/unwanted-tag
