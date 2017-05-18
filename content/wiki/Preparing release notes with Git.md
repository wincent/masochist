---
tags: git wiki
---

I was wondering what Junio uses to produces the [release notes for Git](http://repo.or.cz/w/git.git?a=blob;f=Documentation/RelNotes-1.5.3.4.txt). Looking at the AsciiDoc source reveals the following:

    exec >/var/tmp/1
    O=v1.5.3.3-6-g0bdcac5
    echo O=`git describe refs/heads/maint`
    git shortlog --no-merges $O..refs/heads/maint

So it turns out there is a nifty tool called `git-shortlog` which does just the right thing if you format your commit messages following the recommended conventions (one line summary followed by a blank line and then an extended description).

It can be used to print out some nice summary information about the number of commits per author:

    git log --pretty=short | git shortlog -s
