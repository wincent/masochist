---
tags: gpg wiki
---

I use a [GPG](/wiki/GPG) key to make signed tags in [Git](/wiki/Git) repositories. To change the passphrase I first bring up the interactive menu:

```shell
$ gpg --edit-key user@example.com
```

And then enter `passwd` and follow the prompts.
