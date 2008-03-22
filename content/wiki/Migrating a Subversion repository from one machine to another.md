---
tags: subversion
cache_breaker: 1
---

Notes made while migrating the [Wincent Strings Util](/wiki/Wincent_Strings_Util) repository from the local repository to the public (Internet) repository.

1\. Dump the repository on the local machine:

    sudo svnadmin dump svnrep/project-name > dumpfile

2\. Transfer the dumpfile to the remote machine.

3\. Create a new repository on the remote machine as described in [Creating a new Subversion repository](/wiki/Creating_a_new_Subversion_repository).

4\. Load the dumpfile into the new repository:

    sudo -u svn svnadmin load /var/lib/svn/repositories/project-name < dumpfile

5\. Check out a local working copy from the remote repository:

    svn co svn://svn.wincent.com/project-name/trunk

Alternatively, if an existing local working copy is already up-to-date you can do the following to update it to point at the new remote repository:

    svn switch --relocate http://localhost:8080/svnrep/project-name/trunk \
                          svn://svn.wincent.com/project-name/trunk

# Caveat

It seems that some control characters in filenames can prevent the `svnadmin load` command from working. As an example, in one of my projects I have a number of files with the name "Icon" followed by a carriage return ("\\r" or ASCII 13). I was able to obtain a dump on the local (Mac OS X) machine but when I tried to load the dump on the remote (Red Hat Linux) I got an error:

         * adding path : trunk/Project.xcode/CVS/svnwillbedeleted/wcprops ... done.
    'vnadmin: Invalid control character '0x0d' in path 'trunk/Project.xcode/Icon
     ...[user@host lib]$ Project.xcode/Icon

It is not clear whether the fault lies with `svnadmin`, or with the filesystem used by the Red Hat machine. I know that Subversion has historically had problems with such filenames, but the fact is that the file got into the repository somehow (via Subversion) and it can be checked out from the local server using Subversion. I was unable to find a workaround, and so was forced to remove the offending files from the dump using the `svndumpfilter` tool.

    cat path_to_dump_file | \
             svndumpfilter exclude "trunk/Project.xcode/Icon" > \
             path_to_dump_file.filtered

I then tried switching copies using:

    svn switch svn://svn.wincent.com/project-name/trunk

But was informed by Subversion that:

    svn: 'svn://svn.wincent.com/project-name/trunk'
    is not the same repository as
    'http://localhost:8080/svnrep/project-name'

So I was forced to check out a new copy:

    svn co svn://svn.wincent.com/project-name/trunk

Alternatively, passing the `--relocate` flag would also work.
