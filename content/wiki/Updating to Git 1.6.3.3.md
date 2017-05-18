---
tags: leopard red.hat git updates wiki
cache_breaker: 1
---

# Local update

Notes made while updating to [Git 1.6.3.3](/wiki/Git_1.6.3.3) on [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) 10.5.7:

    # working from a clone of the official upstream Git repo
    git fetch
    git tag -v v1.6.3.3

    # note: "git co" is an alias that I made for "git checkout"
    git co v1.6.3.3
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

Note that if you are running on a case-insensitive filesystem like [HFS+](/wiki/HFS%2b) you might run into a message like this when you try to pull, merge or switch branches:

```shell
$ git pull
error: Untracked working tree file 't/t3900/eucJP.txt' would be overwritten by merge.
```

This is because of a change implemented in commit 5ae93df:

    commit 5ae93dfdccfe9457bdb1f54b33c76359f6c3b861
    Author: Brandon Casey <casey@nrlssc.navy.mil>
    Date:   Mon May 18 18:44:38 2009 -0500

        t3900: use ancient iconv names for backward compatibility
        
        Some old iconv implementations do not have many alternate names and/or
        do not match character encoding names case insensitively.  These
        implementations can not tell that utf-8 and UTF-8 are the same encoding
        and fail when trying to do the conversion.  So use the old names, which
        modern implementations still support.
        
        The following conversions were performed:
        
                 utf-8 --> UTF-8
            ISO-8859-1 --> ISO8859-1
                 EUCJP --> eucJP
        
        Also update t9129 and t9500 which make use of the test files in t/t3900.
        
        Signed-off-by: Brandon Casey <casey@nrlssc.navy.mil>
        Signed-off-by: Junio C Hamano <gitster@pobox.com>

The solution is just to blow away the file (note the case difference) and then the merge will work:

```shell
$ rm t/t3900/EUCJP.txt
$ git merge origin/master
```

# Remote update

These notes were made while performing the update on a [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux) 5.3 box.

`make configure` doesn't work, complaining that `curl-config` can't be found. Although the machine definitely does have libcurl (at `/usr/lib/libcurl.so.1`), `curl-config` is nowhere to be found. Seeing as this is used for the [HTTP](/wiki/HTTP) transport mechanism which I don't use on the server, I'll be building with this stuff explicitly switched off.

Another problem was that `autoconf` wasn't present on the system (it was removed by mistake by my hosts), so the first thing we'll do is get it put it back:

```shell
$ sudo yum install autoconf
```

Now we can proceed:

```shell
$ NO_CURL=1 make configure
$ ./configure --without-curl --without-tcltk --without-expat
$ make test
$ sudo make install
$ make clean
$ NO_CURL=1 make configure
$ ./configure
$ make GITWEB_PROJECTROOT=/pub/git/path_to_public_repos \
       GITWEB_LIST=/pub/git/conf/gitweb-projects \
       GITWEB_STRICT_EXPORT=1 \
       GITWEB_CSS="/gitweb.css" \
       GITWEB_LOGO="/git-logo.png" \
       GITWEB_FAVICON="/git-favicon.png" \
       GITWEB_CONFIG="/pub/git/conf/gitweb.conf" \
       gitweb/gitweb.cgi
$ sudo -u git cp gitweb/gitweb.{cgi,css} gitweb/git-*.png /pub/git/public_html/
```

Note that due to path issues, `sudo make quick-install-man` didn't work. I had to actually do this:

```shell
$ sudo -i
# cd path/to/git/checkout
# make quick-install-man
```

There is bit-time link breakage in the new version of [Gitweb](/wiki/Gitweb) (see [ticket \#1347](/issues/1347)), so currently investigating that. **Update:** It required some additional [Apache](/wiki/Apache) rewrite rules, as described in `gitweb/README`.
