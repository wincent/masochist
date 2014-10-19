---
tags: git
---

# Delete corrupt objects

This can be useful if basic commands like `git log` and refuse to run.

Repeat this until all the bad objects are gone:

    $ git fsck --full
    error: inflate: data stream error (incorrect header check)
    error: unable to unpack 29d37f9767f6ceb7abefc46bf092393b411f7120 header
    error: inflate: data stream error (incorrect header check)
    fatal: loose object 29d37f9767f6ceb7abefc46bf092393b411f7120 (stored in .git/objects/29/d37f9767f6ceb7abefc46bf092393b411f7120) is corrupt
    zsh: exit 128   git fsck --full
    $ rm .git/objects/29/d37f9767f6ceb7abefc46bf092393b411f7120

# Re-cloning from a good remote

Starting from corrupt repo, "src":

```shell
$ cd ..
$ git clone someremote newsrc
$ cd src
$ mv .git /tmp/bad-git
$ mv ../newsrc/.git .
$ rm -rf ../newsrc
```
