---
tags: leopard git updates wiki
cache_breaker: 1
---

# Local update

Notes made while updating to [Git](/wiki/Git) 1.6.4 on [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) 10.5.7:

    # working from a clone of the official upstream Git repo
    git fetch
    git tag -v v1.6.4

    # note: "git co" is an alias that I made for "git checkout"
    git co v1.6.4
    make clean
    make prefix=/usr/local test
    sudo make prefix=/usr/local install

    # inspect the changes in the Bash completion script and update it
    diff -u ~/.git-completion.sh contrib/completion/git-completion.bash
    cp contrib/completion/git-completion.bash ~/.git-completion.sh

    # the pre-built man pages
    sudo make prefix=/usr/local quick-install-man

    # go back to the master branch rather than hanging around on a detached head
    git co master

# Remote update

I initially didn't plan on applying this update to the remote server, but in the course of investigating other problems (see "[fatal: protocol error: bad line length character](/wiki/fatal%3a_protocol_error%3a_bad_line_length_character)") I decided to update.

Initial attempt at building using a procedure similar to last time (see "[Updating to Git 1.6.3.3](/wiki/Updating_to_Git_1.6.3.3)") failed:

```shell
$ ./configure --without-curl --without-tcltk --without-expat
configure: Setting lib to 'lib' (the default)
configure: Will try -pthread then -lpthread to enable POSIX Threads.
configure: CHECKS for site configuration
configure: CHECKS for programs
checking for cc... cc
checking for C compiler default output file name... a.out
checking whether the C compiler works... yes
checking whether we are cross compiling... no
checking for suffix of executables... 
checking for suffix of object files... o
checking whether we are using the GNU C compiler... yes
checking whether cc accepts -g... yes
checking for cc option to accept ANSI C... none needed
checking if linker supports -R... no
checking if linker supports -Wl,-rpath,... yes
checking for gar... no
checking for ar... ar
checking for gtar... gtar
checking for asciidoc... no
configure: CHECKS for libraries
checking for SHA1_Init in -lcrypto... yes
checking for curl_global_init in -lcurl... no
checking for XML_ParserCreate in -lexpat... yes
checking for iconv in -lc... yes
checking for deflateBound in -lz... yes
checking for socket in -lc... yes
configure: CHECKS for header files
checking how to run the C preprocessor... cc -E
checking for egrep... grep -E
checking for ANSI C header files... yes
checking for sys/types.h... yes
checking for sys/stat.h... yes
checking for stdlib.h... yes
checking for string.h... yes
checking for memory.h... yes
checking for strings.h... yes
checking for inttypes.h... yes
checking for stdint.h... yes
checking for unistd.h... yes
checking sys/select.h usability... yes
checking sys/select.h presence... yes
checking for sys/select.h... yes
checking for old iconv()... no
configure: CHECKS for typedefs, structures, and compiler characteristics
checking for struct dirent.d_ino... yes
checking for struct dirent.d_type... yes
checking for struct sockaddr_storage... yes
checking for struct addrinfo... yes
checking for getaddrinfo... yes
checking for library containing getaddrinfo... none required
checking whether formatted IO functions support C99 size specifiers... yes
checking whether system succeeds to read fopen'ed directory... no
checking whether snprintf() and/or vsnprintf() return bogus value... no
configure: CHECKS for library functions
checking for strcasestr... yes
checking for library containing strcasestr... none required
checking for memmem... yes
checking for library containing memmem... none required
checking for strlcpy... no
checking for uintmax_t... yes
checking for strtoumax... yes
checking for library containing strtoumax... none required
checking for setenv... yes
checking for library containing setenv... none required
checking for unsetenv... yes
checking for library containing unsetenv... none required
checking for mkdtemp... yes
checking for library containing mkdtemp... none required
checking Checking for POSIX Threads with '-pthread'... yes
configure: creating ./config.status
config.status: creating config.mak.autogen
$ make test
GIT_VERSION = 1.6.4
    * new build flags or prefix
    CC fast-import.o
    CC abspath.o
    CC alias.o
    CC alloc.o
    CC archive.o
    CC archive-tar.o
    CC archive-zip.o
    CC attr.o
    CC base85.o
    CC bisect.o
    CC blob.o
    CC branch.o
    CC bundle.o
    CC cache-tree.o
    CC color.o
    CC combine-diff.o
    CC commit.o
    CC config.o
    CC connect.o
    CC convert.o
    CC copy.o
    CC csum-file.o
    CC ctype.o
    CC date.o
    CC decorate.o
    CC diffcore-break.o
    CC diffcore-delta.o
    CC diffcore-order.o
    CC diffcore-pickaxe.o
    CC diffcore-rename.o
    CC diff-delta.o
    CC diff-lib.o
    CC diff-no-index.o
    CC diff.o
    CC dir.o
    CC editor.o
    CC entry.o
    CC environment.o
    CC exec_cmd.o
    CC fsck.o
    CC graph.o
    CC grep.o
    CC hash.o
    CC help.o
    CC ident.o
    CC levenshtein.o
    CC list-objects.o
    CC ll-merge.o
    CC lockfile.o
    CC log-tree.o
    CC mailmap.o
    CC match-trees.o
    CC merge-file.o
    CC merge-recursive.o
    CC name-hash.o
    CC object.o
    CC pack-check.o
    CC pack-refs.o
    CC pack-revindex.o
    CC pack-write.o
    CC pager.o
    CC parse-options.o
    CC patch-delta.o
    CC patch-ids.o
    CC path.o
    CC pkt-line.o
    CC preload-index.o
    CC pretty.o
    CC progress.o
    CC quote.o
    CC reachable.o
    CC read-cache.o
    CC reflog-walk.o
    CC refs.o
    CC remote.o
    CC rerere.o
    CC revision.o
    CC run-command.o
    CC server-info.o
    CC setup.o
    CC sha1-lookup.o
    CC sha1_file.o
    CC sha1_name.o
    CC shallow.o
    CC sideband.o
    CC sigchain.o
    CC strbuf.o
    CC string-list.o
    CC symlinks.o
    CC tag.o
    CC trace.o
    CC transport.o
    CC tree-diff.o
    CC tree.o
    CC tree-walk.o
    CC unpack-trees.o
    CC usage.o
    CC userdiff.o
    CC utf8.o
    CC walker.o
    CC wrapper.o
    CC write_or_die.o
    CC ws.o
    CC wt-status.o
    CC xdiff-interface.o
    CC thread-utils.o
    CC compat/basename.o
    CC compat/strlcpy.o
    CC compat/mkstemps.o
    AR libgit.a
    CC xdiff/xdiffi.o
    CC xdiff/xprepare.o
    CC xdiff/xutils.o
    CC xdiff/xemit.o
    CC xdiff/xmerge.o
    CC xdiff/xpatience.o
    AR xdiff/lib.a
    LINK git-fast-import
/usr/bin/ld: cannot find -lgen
collect2: ld returned 1 exit status
make: *** [git-fast-import] Error 1
```

I found [this mailing list thread](http://www.spinics.net/lists/git/msg107834.html), which shows that the breakage was introduced by commit ecc395c:

    commit ecc395c112b45b00df6c8b1e8d665123c1a28bca
    Author: Brandon Casey <casey@nrlssc.navy.mil>
    Date:   Fri Jul 10 12:10:45 2009 -0500

        Makefile: add NEEDS_LIBGEN to optionally add -lgen to compile arguments
        
        Commit 003b33a8 recently added a call to basename().  On IRIX 6.5, this
        function resides in libgen and -lgen is required for the linker.
        
        Update configure.ac too.
        
        Signed-off-by: Brandon Casey <casey@nrlssc.navy.mil>
        Signed-off-by: Junio C Hamano <gitster@pobox.com>

    diff --git a/Makefile b/Makefile
    index 4be508e..6d1a38f 100644
    --- a/Makefile
    +++ b/Makefile
    @@ -61,6 +61,8 @@ all::
     #
     # Define NO_LIBGEN_H if you don't have libgen.h.
     #
    +# Define NEEDS_LIBGEN if your libgen needs -lgen when linking
    +#
     # Define NO_SYS_SELECT_H if you don't have sys/select.h.
     #
     # Define NO_SYMLINK_HEAD if you never want .git/HEAD to be a symbolic link.
    @@ -1019,6 +1021,9 @@ ifdef NEEDS_LIBICONV
     	endif
     	EXTLIBS += $(ICONV_LINK) -liconv
     endif
    +ifdef NEEDS_LIBGEN
    +	EXTLIBS += -lgen
    +endif
     ifdef NEEDS_SOCKET
     	EXTLIBS += -lsocket
     endif
    diff --git a/configure.ac b/configure.ac
    index 1885674..74d0af5 100644
    --- a/configure.ac
    +++ b/configure.ac
    @@ -485,6 +485,12 @@ AC_CHECK_LIB([resolv], [hstrerror],
     AC_SUBST(NEEDS_RESOLV)
     test -n "$NEEDS_RESOLV" && LIBS="$LIBS -lresolv"
     
    +AC_CHECK_LIB([gen], [basename],
    +[NEEDS_LIBGEN=],
    +[NEEDS_LIBGEN=YesPlease])
    +AC_SUBST(NEEDS_LIBGEN)
    +test -n "$NEEDS_LIBGEN" && LIBS="$LIBS -lgen"
    +
     ## Checks for header files.
     AC_MSG_NOTICE([CHECKS for header files])
     #

So I am going to try building without `configure`.

Straight `make` quickly fails with:

    $ make
    /bin/sh: curl-config: command not found
    GIT_VERSION = 1.6.4
    /bin/sh: curl-config: command not found
        * new build flags or prefix
        CC fast-import.o
        CC abspath.o
        CC alias.o
        CC alloc.o
        CC archive.o
        CC archive-tar.o
        CC archive-zip.o
        CC attr.o
        CC base85.o
        CC bisect.o
        CC blob.o
        CC branch.o
        CC bundle.o
        CC cache-tree.o
        CC color.o
        CC combine-diff.o
        CC commit.o
        CC config.o
        CC connect.o
        CC convert.o
        CC copy.o
        CC csum-file.o
        CC ctype.o
        CC date.o
        CC decorate.o
        CC diffcore-break.o
        CC diffcore-delta.o
        CC diffcore-order.o
        CC diffcore-pickaxe.o
        CC diffcore-rename.o
        CC diff-delta.o
        CC diff-lib.o
        CC diff-no-index.o
        CC diff.o
        CC dir.o
        CC editor.o
        CC entry.o
        CC environment.o
        CC exec_cmd.o
        CC fsck.o
        CC graph.o
        CC grep.o
        CC hash.o
        CC help.o
        CC ident.o
        CC levenshtein.o
        CC list-objects.o
        CC ll-merge.o
        CC lockfile.o
        CC log-tree.o
        CC mailmap.o
        CC match-trees.o
        CC merge-file.o
        CC merge-recursive.o
        CC name-hash.o
        CC object.o
        CC pack-check.o
        CC pack-refs.o
        CC pack-revindex.o
        CC pack-write.o
        CC pager.o
        CC parse-options.o
        CC patch-delta.o
        CC patch-ids.o
        CC path.o
        CC pkt-line.o
        CC preload-index.o
        CC pretty.o
        CC progress.o
        CC quote.o
        CC reachable.o
        CC read-cache.o
        CC reflog-walk.o
        CC refs.o
        CC remote.o
        CC rerere.o
        CC revision.o
        CC run-command.o
        CC server-info.o
        CC setup.o
        CC sha1-lookup.o
        CC sha1_file.o
        CC sha1_name.o
        CC shallow.o
        CC sideband.o
        CC sigchain.o
        CC strbuf.o
        CC string-list.o
        CC symlinks.o
        CC tag.o
        CC trace.o
        CC transport.o
    In file included from transport.c:5:
    http.h:6:23: error: curl/curl.h: No such file or directory
    http.h:7:23: error: curl/easy.h: No such file or directory
    In file included from transport.c:5:
    http.h:46: error: expected specifier-qualifier-list before ‘CURLcode’
    http.h:52: error: expected specifier-qualifier-list before ‘CURL’
    http.h:98: error: ‘CURL_ERROR_SIZE’ undeclared here (not in a function)
    http.h: In function ‘missing__target’:
    http.h:103: error: ‘CURLE_FILE_COULDNT_READ_FILE’ undeclared (first use in this function)
    http.h:103: error: (Each undeclared identifier is reported only once
    http.h:103: error: for each function it appears in.)
    http.h:105: error: ‘CURLE_HTTP_NOT_FOUND’ undeclared (first use in this function)
    http.h:107: error: ‘CURLE_FTP_COULDNT_RETR_FILE’ undeclared (first use in this function)
    http.h: At top level:
    http.h:180: error: expected specifier-qualifier-list before ‘CURLcode’
    make: *** [transport.o] Error 1

Trying again with some explicit environment variables:

```shell
$ NO_CURL=1 NO_EXPAT=1 NO_SVN_TESTS=1 NO_TCLTK=1 make test prefix=/usr/local
```

Works. Goodbye [autoconf](/wiki/autoconf). Probably should have been doing it this way all along, seeing as the [Git](/wiki/Git) team explicitly labels autoconf as a second-class citizen.

Now to finish off with the rest of the install:

```shell
$ sudo -s
# NO_CURL=1 NO_EXPAT=1 NO_SVN_TESTS=1 NO_TCLTK=1 make prefix=/usr/local install
```

To install the man pages I need to flesh out the root user's emaciated `PATH`:

```shell
# export PATH=/usr/local/bin:$PATH
# NO_CURL=1 NO_EXPAT=1 NO_SVN_TESTS=1 NO_TCLTK=1 make prefix=/usr/local quick-install-man
```

And now for [gitweb](/wiki/gitweb):

```shell
# make clean
# NO_CURL=1 NO_EXPAT=1 NO_SVN_TESTS=1 NO_TCLTK=1 make \
>        GITWEB_PROJECTROOT=/pub/git/path_to_public_repos \
>        GITWEB_LIST=/pub/git/conf/gitweb-projects \
>        GITWEB_STRICT_EXPORT=1 \
>        GITWEB_CSS="/gitweb.css" \
>        GITWEB_LOGO="/git-logo.png" \
>        GITWEB_FAVICON="/git-favicon.png" \
>        GITWEB_CONFIG="/pub/git/conf/gitweb.conf" \
>        gitweb/gitweb.cgi
# sudo -u git cp gitweb/gitweb.{cgi,css} gitweb/git-*.png /pub/git/public_html/
```

Funnily enough, this breaks the previously working gitweb install (projects listing is empty).

Looks like it needs an explicit `bindir` setting:

```shell
# make clean
# NO_CURL=1 NO_EXPAT=1 NO_SVN_TESTS=1 NO_TCLTK=1 make \
>        GITWEB_PROJECTROOT=/pub/git/path_to_public_repos \
>        GITWEB_LIST=/pub/git/conf/gitweb-projects \
>        GITWEB_STRICT_EXPORT=1 \
>        GITWEB_CSS="/gitweb.css" \
>        GITWEB_LOGO="/git-logo.png" \
>        GITWEB_FAVICON="/git-favicon.png" \
>        GITWEB_CONFIG="/pub/git/conf/gitweb.conf" \
>        bindir=/usr/local/bin \
>        gitweb/gitweb.cgi
# sudo -u git cp gitweb/gitweb.{cgi,css} gitweb/git-*.png /pub/git/public_html/
```
