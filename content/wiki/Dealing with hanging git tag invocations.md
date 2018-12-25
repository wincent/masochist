---
tags: wiki git gpg
---

I just tried to create a signed tag with `git tag -s` and found it asking me for the passphrase for the wrong private key because I had a stale `user.email` config in the local `.git/config` file for the repo. After fixing the config, I found that all `git tag -s` attempts were hanging.

The solution was to do a `pkill -9 gpg-agent` to kill the running agent.
