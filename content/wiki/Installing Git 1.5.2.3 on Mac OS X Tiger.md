---
tags: git wiki
---

These notes were made while installing [Git](/wiki/Git) for the first time (version 1.5.2.3 is the latest version at the time of writing) on [Mac OS X](/wiki/Mac_OS_X) [Tiger](/wiki/Tiger).

The only dependency I had no choice but to install was the Expat library. Building and installing the documentation, however, has one "[nightmare dependency](http://utsl.gen.nz/talks/git-svn/intro.html#getting)" (asciidoc) and being the masochist that I am, I decided to try installing that as well.

    # get source for Expat dependency from:
    # http://sourceforge.net/projects/expat/
    wget http://surfnet.dl.sourceforge.net/sourceforge/expat/expat-2.0.1.tar.gz

    # extract
    tar xzvf expat-2.0.1.tar.gz
    cd expat-2.0.1

    # build
    ./configure
    make
    make check
    sudo make install

    # get source for asciidoc dependency from:
    # http://www.methods.co.nz/asciidoc/
    wget http://www.methods.co.nz/asciidoc/asciidoc-8.2.1.tar.gz

    # extract
    tar xzvf asciidoc-8.2.1.tar.gz
    cd asciidoc-8.2.1

    # install (requires Python 2.3 or later)
    sudo ./install.sh

    # test (should generate doc/asciidoc.html)
    rm doc/asciidoc.html
    asciidoc doc/asciidoc.txt

    # grab the source from the Git homepage:
    # http://git.or.cz/
    wget http://kernel.org/pub/software/scm/git/git-1.5.2.3.tar.bz2

    # extract source
    tar xjvf git-1.5.2.3.tar.bz2
    cd git-1.5.2.3

    # build
    make prefix=/usr/local ASCIIDOC8=YesPlease all doc

(As an aside, note that I later found out that even passing in the `ASCIIDOC8=YesPlease` compatibility switch didn't yield correct output and I had to downgrade to AsciiDoc 7 as described in "[Setting up the Git documentation build chain on Mac OS X Leopard](/wiki/Setting_up_the_Git_documentation_build_chain_on_Mac_OS_X_Leopard)".)

It turns out that the "nightmare dependency" isn't really asciidoc in itself; it was relatively easy to install as shown above. The real problem comes when the build process expects to find an `xmlto` command:

    xsltproc --xinclude --stringparam html.stylesheet docbook-xsl.css -o user-manual.html http://docbook.sourceforge.net/release/xsl/current/html/docbook.xsl user-manual.xml
    ID recommended on preface: Preface
    rm -f git-add.xml+ git-add.xml
    asciidoc -b docbook -d manpage -f asciidoc.conf \
             -agit_version=1.5.2.3 -o git-add.xml+ git-add.txt
    mv git-add.xml+ git-add.xml
    xmlto -m callouts.xsl man git-add.xml
    make[1]: xmlto: Command not found
    make[1]: *** [git-add.1] Error 127
    rm git-add.xml
    make: *** [doc] Error 2

Note that the Git build itself works but the documentation build fails. It appears that this (`xmlto`) is an unlisted dependency in the Git installation documentation. I found `xmlto` here:

-   <http://cyberelk.net/tim/software/xmlto/>

But it depends on `getoptlong`; although [Mac OS X](/wiki/Mac_OS_X) has it's own, [BSD](/wiki/BSD)-derived `getoptlong`, this doesn't seem to be acceptable to `xmlto`. The [Linux](/wiki/Linux) flavor of `getoptlong` in turn depends on the enormous [GNU](/wiki/GNU) `gettext`.

    # download gettext dependency (required by getopt) from mirror:
    # http://www.gnu.org/software/gettext/
    wget ftp://ftp.ist.utl.pt/pub/GNU/gnu/pub/gnu/gettext/gettext-0.16.1.tar.gz

    # extract
    tar xzvf gettext-0.16.1.tar.gz
    cd gettext-0.16.1

    # build
    ./configure
    make
    make check
    sudo make install

    # download getopt dependency (required by xmlto) from:
    # http://software.frodo.looijaard.name/getopt/
    wget http://software.frodo.looijaard.name/getopt/files/getopt-1.1.4.tar.gz
    tar xzvf getopt-1.1.4.tar.gz
    cd getopt-1.1.4

In order to successfully build `getopt` I had to make a small modification to its `Makefile`:

    47c47
    < LDFLAGS=
    ---
    > LDFLAGS=-lintl

I could then proceed:

    # build
    make

    # install
    sudo make install

    # download xmlto from
    # http://cyberelk.net/tim/data/xmlto/stable/
    wget http://cyberelk.net/tim/data/xmlto/stable/xmlto-0.0.18.tar.bz2

    # extract
    tar xjvf xmlto-0.0.18.tar.bz2
    cd xmlto-0.0.18

    # build
    ./configure
    make
    make check

    # install
    sudo make install

Installation failed with the following error messages:

    mkdir -p -- . /usr/local/man/man1
     /usr/bin/install -c -m 644 man/man1/xmlto.1 /usr/local/man/man1/xmlto.1
    install: man/man1/xmlto.1: No such file or directory
     /usr/bin/install -c -m 644 man/man1/xmlif.1 /usr/local/man/man1/xmlif.1
    install: man/man1/xmlif.1: No such file or directory
    make[1]: *** [install-man1] Error 71
    make: *** [install-am] Error 2

The cause is [apparently](http://cyberelk.net/tim/software/xmlto/):

> This is caused by the absence of correctly configured XML Catalogs on your system. When XML Catalogs are available, URLs are transformed into local file references. In particular, Debian does not provide XML Catalogs. For more information about XML Catalogs see the xsltproc documentation.

In order to set up appropriate XML catalogs:

    # turn on XML catalog debugging
    export XML_DEBUG_CATALOG=1

    # try making again, to gather debugging info
    make

Output:

    Resolve: sysID http://docbook.sourceforge.net/release/xsl/current/manpages/docbook.xsl
    Failed to parse catalog file:///etc/xml/catalog
    Resolve URI http://docbook.sourceforge.net/release/xsl/current/manpages/docbook.xsl
    I/O error : Attempt to load network entity http://docbook.sourceforge.net/release/xsl/current/manpages/docbook.xsl
    warning: failed to load external entity "http://docbook.sourceforge.net/release/xsl/current/manpages/docbook.xsl"
    cannot parse http://docbook.sourceforge.net/release/xsl/current/manpages/docbook.xsl
    Catalogs cleanup
    Free catalog entry

So we start by creating an empty catalog file:

    sudo mkdir /etc/xml
    sudo xmlcatalog --noout --create /etc/xml/catalog

    # install latest version of DocBook XSL sheets
    sudo mkdir -p /usr/local/share/docbook/xsl
    cd /usr/local/share/docbook/xsl
    sudo wget http://docbook.sourceforge.net/release/xsl/1.72.0.tar.bz2
    sudo tar xjvf 1.72.0.tar.bz2

    # add DocBook catalog to local catalog
    sudo xmlcatalog --noout \
         --add 'nextCatalog' '' 'file:///usr/local/share/docbook/xsl/1.72.0/catalog.xml' \
         --create /etc/xml/catalog

Unfortunately after doing this the `xmlto` build still doesn't complete without errors, although the diagnostic messages are different:

    make  all-am
    for xml in xmlif.xml xmlto.xml; do \
      FORMAT_DIR=./format XSL_DIR=./xsl \
       bash ./xmlto -o man/man1 man ./doc/$xml ; \
    done || ( RC=$?; cat ./FAQ; exit $RC )
    Resolve: sysID http://docbook.sourceforge.net/release/xsl/current/manpages/docbook.xsl
    -1610559488 Parsing catalog file:///etc/xml/catalog
    file:///etc/xml/catalog added to file hash
    file:///usr/local/share/docbook/xsl/1.72.0/catalog.xml not found in file hash
    -1610559488 Parsing catalog file:///usr/local/share/docbook/xsl/1.72.0/catalog.xml
    file:///usr/local/share/docbook/xsl/1.72.0/catalog.xml added to file hash
    Using rewriting rule http://docbook.sourceforge.net/release/xsl/current/
    Resolve: pubID -//OASIS//DTD DocBook XML V4.2//EN sysID http://www.oasis-open.org/docbook/xml/4.2/docbookx.dtd
    Resolve URI http://www.oasis-open.org/docbook/xml/4.2/docbookx.dtd
    I/O error : Attempt to load network entity http://www.oasis-open.org/docbook/xml/4.2/docbookx.dtd
    /Users/wincent/trabajo/unversioned/git/xmlto-0.0.18/./doc/xmlif.xml:4: warning: failed to load external entity "http://www.oasis-open.org/docbook/xml/4.2/docbookx.dtd"
       "http://www.oasis-open.org/docbook/xml/4.2/docbookx.dtd">
                                                                ^
    Note: meta source : No productname or alternative       xmlif
    Note: meta source : No refmiscinfo@class=source         xmlif
    Note: meta version: No productnumber or alternative     xmlif
    Note: meta version: No refmiscinfo@class=version        xmlif
    Note: meta manual : No ancestor with title              xmlif
    Note: meta manual : No refmiscinfo@class=manual         xmlif
    Note: Writing xmlif.1
    Catalogs cleanup
    Free catalog entry file:///usr/local/share/docbook/xsl/1.72.0/catalog.xml
    Free catalog entry file:///etc/xml/catalog
    Free catalog entry http://docbook.sourceforge.net/release/xsl/current/
    Free catalog entry http://docbook.sourceforge.net/release/xsl/current/
    Free catalog entry http://docbook.sourceforge.net/release/xsl/1.72.0/
    Free catalog entry http://docbook.sourceforge.net/release/xsl/1.72.0/
    Free catalog entry file:///usr/local/share/docbook/xsl/1.72.0/catalog.xml
    Free catalog entry
    Resolve: sysID http://docbook.sourceforge.net/release/xsl/current/manpages/docbook.xsl
    -1610559488 Parsing catalog file:///etc/xml/catalog
    file:///etc/xml/catalog added to file hash
    file:///usr/local/share/docbook/xsl/1.72.0/catalog.xml not found in file hash
    -1610559488 Parsing catalog file:///usr/local/share/docbook/xsl/1.72.0/catalog.xml
    file:///usr/local/share/docbook/xsl/1.72.0/catalog.xml added to file hash
    Using rewriting rule http://docbook.sourceforge.net/release/xsl/current/
    Resolve: pubID -//OASIS//DTD DocBook XML V4.2//EN sysID http://www.oasis-open.org/docbook/xml/4.2/docbookx.dtd
    Resolve URI http://www.oasis-open.org/docbook/xml/4.2/docbookx.dtd
    I/O error : Attempt to load network entity http://www.oasis-open.org/docbook/xml/4.2/docbookx.dtd
    /Users/wincent/trabajo/unversioned/git/xmlto-0.0.18/./doc/xmlto.xml:3: warning: failed to load external entity "http://www.oasis-open.org/docbook/xml/4.2/docbookx.dtd"
     "http://www.oasis-open.org/docbook/xml/4.2/docbookx.dtd">
                                                              ^
    Note: meta version: No productnumber or alternative     xmlto
    Note: meta version: No refmiscinfo@class=version        xmlto
    Note: Writing xmlto.1
    Catalogs cleanup
    Free catalog entry file:///usr/local/share/docbook/xsl/1.72.0/catalog.xml
    Free catalog entry file:///etc/xml/catalog
    Free catalog entry http://docbook.sourceforge.net/release/xsl/current/
    Free catalog entry http://docbook.sourceforge.net/release/xsl/current/
    Free catalog entry http://docbook.sourceforge.net/release/xsl/1.72.0/
    Free catalog entry http://docbook.sourceforge.net/release/xsl/1.72.0/
    Free catalog entry file:///usr/local/share/docbook/xsl/1.72.0/catalog.xml
    Free catalog entry

Even with these warnings `make check` now passes:

    make  check-TESTS
    PASS: xmlif/test/run-test
    ==================
    All 1 tests passed
    ==================

And `sudo make install` works as well.

But to get a warning-free build I decided to try installing the DocBook 4.2 files as well. I couldn't find a downloadable archive of these so I used `wget` to create a local mirror:

    # create mirror
    cd /usr/local/share/
    sudo mkdir -p docbook/xml
    cd docbook/xml
    sudo wget -r -np -nH -l 0 --cut-dirs=2 http://www.oasis-open.org/docbook/xml/4.2

    # set up catalog reference
    sudo xmlcatalog --noout \
         --add 'nextCatalog' '' 'file:///usr/local/share/docbook/xml/4.2/catalog.xml' \
         --create /etc/xml/catalog

    # now back to xmlto directory
    cd path_to_xmlto_build_directory
    make clean
    make

This seems to yield the closest thing to an error/warning-free build possible:

    make  all-am
    if gcc -DHAVE_CONFIG_H -I. -I. -I.     -g -O2 -MT xmlif/xmlif.o -MD -MP -MF "xmlif/.deps/xmlif.Tpo" -c -o xmlif/xmlif.o `test -f 'xmlif/xmlif.c' || echo './'`xmlif/xmlif.c; \
    then mv -f "xmlif/.deps/xmlif.Tpo" "xmlif/.deps/xmlif.Po"; else rm -f "xmlif/.deps/xmlif.Tpo"; exit 1; fi
    gcc  -g -O2   -o xmlif/xmlif  xmlif/xmlif.o  
    for xml in xmlif.xml xmlto.xml; do \
      FORMAT_DIR=./format XSL_DIR=./xsl \
       bash ./xmlto -o man/man1 man ./doc/$xml ; \
    done || ( RC=$?; cat ./FAQ; exit $RC )
    Note: meta source : No productname or alternative       xmlif
    Note: meta source : No refmiscinfo@class=source         xmlif
    Note: meta version: No productnumber or alternative     xmlif
    Note: meta version: No refmiscinfo@class=version        xmlif
    Note: meta manual : No ancestor with title              xmlif
    Note: meta manual : No refmiscinfo@class=manual         xmlif
    Note: Writing xmlif.1
    Note: meta version: No productnumber or alternative     xmlto
    Note: meta version: No refmiscinfo@class=version        xmlto
    Note: Writing xmlto.1

After again performing the Git documentation build (this time successfully) I was able to proceed with the installation:

    # back to the Git build directory:
    cd path_to_git_build_directory

    # build
    make prefix=/usr/local all doc

    # run tests
    make prefix=/usr/local test

    # install
    sudo make prefix=/usr/local install install-doc

# See also

-   [Installing Git 1.5.2.3 on Red Hat Enterprise Linux](/wiki/Installing_Git_1.5.2.3_on_Red_Hat_Enterprise_Linux)
-   [Installing Git 1.5.2.4 on Mac OS X Leopard](/wiki/Installing_Git_1.5.2.4_on_Mac_OS_X_Leopard)
-   [Setting up the Git documentation build chain on Mac OS X Leopard](/wiki/Setting_up_the_Git_documentation_build_chain_on_Mac_OS_X_Leopard)
