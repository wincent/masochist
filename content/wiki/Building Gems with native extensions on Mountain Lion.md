---
tags: gem mountain.lion homebrew gcc
cache_breaker: 1
---

So with the update to [Mountain Lion](/wiki/Mountain_Lion) most attempts to build [RubyGems](/wiki/RubyGems) with native components fail spectacularly with variants of the form:

    make: /usr/bin/gcc-4.2: No such file or directory

Not wanting to sink endless hours into diagnosing and working around the problem, I have temporarily suppressed my natural loathing of [OS X](/wiki/OS_X) package management tools and followed the instructions [here](http://cczona.com/blog/2012/07/fix-for-make-usrbingcc-4-2-no-such-file-or-directory/):

```shell
$ su [admin-user]
$ ruby <(curl -fsSk https://raw.github.com/mxcl/homebrew/go)
$ brew doctor
$ brew tap homebrew/dupes
$ sudo ln -s /usr/local/bin/gcc-4.2 /usr/bin/gcc-4.2
```

This unblocks me for now. Moving forward my preference is to achieve this without relying on Homebrew (the fact that it wants to mess with the ownership and permissions on `/usr/local/` horrifies me).

# Update

After a while I revisited this topic and uninstalled Homebrew to see if the issue was resolved or not:

```shell
$ cd /usr/local
$ sudo rm -rf Cellar
$ sudo brew prune # perms were "messed up", needed to use sudo
$ sudo rm -rf Cellar Library bin/brew share/man/man1/brew.1 .gitignore README.md /Library/Caches/Homebrew
```

I then tried uninstalling and reinstalling some gems with native extensions; things seem to be working (this is on [OS X](/wiki/OS_X) 10.8.2 [Mountain Lion](/wiki/Mountain_Lion), with [Xcode](/wiki/Xcode) 4.6 installed).

If it turns out that things break again in the future, a simple symlink as suggested in these Stack Overflow posts is probably sufficient:

-   <http://stackoverflow.com/questions/9027772>
-   <http://stackoverflow.com/questions/12256616>

