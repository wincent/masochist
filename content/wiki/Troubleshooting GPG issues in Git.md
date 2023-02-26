---
tags: wiki git gpg
title: Troubleshooting GPG issues in Git
---

I was seeing commits fail with:

```
error: gpg failed to sign the data
fatal: failed to write commit object
```

Running with `GIT_TRACE=1` (eg. `GIT_TRACE=1 git commit ...`) revealed that it was trying to run this command:

```
10:59:49.263641 run-command.c:654       trace: run_command: gpg --status-fd=2 -bsau 'Greg Hurrell <greg@hurrell.net>'
```

ie. it was trying to use the wrong email address.

Some related troubleshooting commands that I ran while investigating (unfortunately, I jotted these down so long ago I can't remember _why_ I was looking into hostname stuff while troubleshooting the GPG issues... 🤦 — maybe it had nothing to do with it):

```
scutil --get ComputerName
scutil --get LocalHostName
scutil --get HostName

sudo scutil --set HostName $NAME

killall gpg-agent
```

Via: [StackExchange, "OS X computer name not matching what shows on terminal"](https://apple.stackexchange.com/a/53042/158927)
