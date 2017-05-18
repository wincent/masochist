---
tags: svk wiki
---

If you have the [Subversion](/wiki/Subversion) [Perl](/wiki/Perl) bindings installed then you can install [SVK](/wiki/SVK) with the following:

    sudo perl -MCPAN -e 'install SVK'

If you don't have the bindings installed then you will need to build them. In my case I still had my [Subversion](/wiki/Subversion) 1.4.3 source distribution lying around and so was able to `cd` into it and do the following:

    cd subversion-1.4.3
    make swig-pl
    make check-swig-pl
    sudo make install-swig-pl

# See also

-   Alternate installation instructions: <http://www.bieberlabs.com/wordpress/archives/2004/11/30/using-svk>
