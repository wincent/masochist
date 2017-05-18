---
tags: git wiki
cache_breaker: 1
---

`fatal: protocol error: bad line length character` is an error I started seeing when trying to perform `git clone`, `git fetch` or `git pull` from public [Git](/wiki/Git) repositories hosted at git.wincent.com. I am not entirely sure when the problem started but I first noticed it after updating my local Git install to version 1.6.4 (see "[Updating to Git 1.6.4](/wiki/Updating_to_Git_1.6.4)"), with the server still running 1.6.3.3 (see "[Updating to Git 1.6.3.3](/wiki/Updating_to_Git_1.6.3.3)").

# Troubleshooting

First step, try using another version of Git to perform the clone. On the server itself:

```shell
$ git --version
git version 1.6.3.3
$ cd /tmp
$ git clone git://git.wincent.com/WOPublic.git
Initialized empty Git repository in /tmp/WOPublic/.git/
fatal: protocol error: bad line length character
```

So we know it's not a conflict between 1.6.3.3 and 1.6.4. Could be a problem with the 1.6.3.3 server, so let's update the server; see "[Updating to Git 1.6.4](/wiki/Updating_to_Git_1.6.4)" for the full details.

Now we repeat our server-side `clone` test:

```shell
$ git --version
git version 1.6.4
$ git clone git://git.wincent.com/WOPublic.git
Initialized empty Git repository in /tmp/WOPublic/.git/
fatal: protocol error: bad line length character
```

So back to the old drawing board... Try cloning from a different server:

```shell
$ git clone git://github.com/wincent/WOPublic.git
Initialized empty Git repository in /tmp/WOPublic/.git/
remote: Counting objects: 403, done.
remote: Compressing objects: 100% (218/218), done.
remote: Total 403 (delta 242), reused 297 (delta 172)
Receiving objects: 100% (403/403), 153.31 KiB, done.
Resolving deltas: 100% (242/242), done.
```

So we can see here that the problem is almost certainly not on the client side, regardless of whether the client is running 1.6.3.3 and 1.6.4. And we've also established that the problem on the server side was present in 1.6.3.3 just as it is in 1.6.4.

I wanted to see if this affected all repositories or just the one I was working with at that moment ([WOPublic](/wiki/WOPublic)), but it turns out that the message is always the same, even for non-existent repos such as this fictional "xyz" one:

```shell
$ git clone git://git.wincent.com/xyz
Initialized empty Git repository in /private/tmp/xyz/.git/
fatal: protocol error: bad line length character
```

Looks like this is going to be hideously painful, but I am going to try and bisect it. I am not even sure what the last known "good" version was, so I guess I am going to go back through the "major" revisions (1.6.3, 1.6.2, 1.6.1) until I find one that works, then will run `git bisect` from there:

```shell
$ git co v1.6.3
$ make clean
$ NO_CURL=1 NO_EXPAT=1 NO_SVN_TESTS=1 NO_TCLTK=1 make test prefix=/usr/local
$ sudo -s
# NO_CURL=1 NO_EXPAT=1 NO_SVN_TESTS=1 NO_TCLTK=1 make prefix=/usr/local install
```

Ditto for:

-   v1.6.2 (broken)
-   v1.6.1 (works)

That's a relief. We can start the real bisection:

```shell
$ git bisect start v1.6.2 v1.6.1
$ make clean
$ NO_CURL=1 NO_EXPAT=1 NO_SVN_TESTS=1 NO_TCLTK=1 make test prefix=/usr/local
$ sudo -s
# NO_CURL=1 NO_EXPAT=1 NO_SVN_TESTS=1 NO_TCLTK=1 make prefix=/usr/local install
# exit
```

And then `git bisect good` or `git bisect bad`, depending on the result and repeat...

Ultimately, we bisect down to this:

    8e3462837b0ace04357503a3f58802cc2231df29 is first bad commit
    commit 8e3462837b0ace04357503a3f58802cc2231df29
    Author: Steffen Prohaska <prohaska@zib.de>
    Date:   Sun Jan 18 13:00:13 2009 +0100

        Modify setup_path() to only add git_exec_path() to PATH
        
        Searching git programs only in the highest priority location is
        sufficient.  It does not make sense that some of the required
        programs are located at the highest priority location but other
        programs are picked up from a lower priority exec-path.  If
        exec-path is overridden a complete set of commands should be
        provided, otherwise several different versions could get mixed,
        which is likely to cause confusion.
        
        If a user explicitly overrides the default location (by --exec-path
        or GIT_EXEC_PATH), we now expect that all the required programs are
        found there.  Instead of adding the directories "argv_exec_path",
        "getenv(EXEC_PATH_ENVIRONMENT)", and "system_path(GIT_EXEC_PATH)"
        to PATH, we now rely on git_exec_path(), which implements the same
        order, but only returns the highest priority location to search for
        executables.
        
        Accessing only the location with highest priority is also required
        for testing executables built with RUNTIME_PREFIX.  The call to
        system_path() should be avoided if RUNTIME_PREFIX is set and the
        executable is not installed at its final destination.  Because we
        test before installing, we want to avoid calling system_path()
        during tests.  The modifications in this commit avoid calling
        system_path(GIT_EXEC_PATH) if a higher-priority location is
        provided, which is the case when running the tests.
        
        Signed-off-by: Steffen Prohaska <prohaska@zib.de>
        Acked-by: Johannes Sixt <j6t@kdbg.org>
        Signed-off-by: Junio C Hamano <gitster@pobox.com>

This is on a server with Git installed using `prefix=/usr/local`, but `/usr/local/bin` is not in the default `PATH` so the daemon is launched via xinetd with the following settings in `/etc/xinetd.d/git`:

-   `server` is explicitly set to the absolute path, `/usr/local/bin/git`
-   in `server_args`, we pass `--exec-path=/usr/local/bin daemon --inetd` etc

The key paragraph in the commit message for 8e34628 sheds light on what's happening here:

       If a user explicitly overrides the default location (by --exec-path
       or GIT_EXEC_PATH), we now expect that all the required programs are
       found there.  Instead of adding the directories "argv_exec_path",
       "getenv(EXEC_PATH_ENVIRONMENT)", and "system_path(GIT_EXEC_PATH)"
       to PATH, we now rely on git_exec_path(), which implements the same
       order, but only returns the highest priority location to search for
       executables.

So, dropped the explicit `--exec-path` from the `server_args` and the `bad line length character` errors go away. The `git` executable is obviously smart enough to know where the needed binaries are (currently `/usr/local/libexec/git-core`) and so doesn't need the explicit parameter; and in fact, it was something that I only ever added in the first place to fix breakage caused by changes to where the binaries were stored and how they were searched for (see "[Upgrading to Git 1.5.4](/wiki/Upgrading_to_Git_1.5.4)").

# See also

-   Entry on the official [Git](/wiki/Git) [FAQ](/wiki/FAQ) for the `protocol error: bad line length character` message (not really helpful/applicable to this specific case as it applies to [SSH](/wiki/SSH)-based access and I am talking about anonymous public access using the Git protocol): <http://git.or.cz/gitwiki/GitFaq#protocolerror.3Abadlinelengthcharacter>
-   Mailing list thread: <http://kerneltrap.org/mailarchive/git/2007/1/20/236259>
-   [Google search for '"protocol error: bad line length character" git'](http://www.google.com/search?client=safari&rls=en&q=%22protocol+error:+bad+line+length+character%22+git&ie=UTF-8&oe=UTF-8) (currently 209 results at time of writing)
