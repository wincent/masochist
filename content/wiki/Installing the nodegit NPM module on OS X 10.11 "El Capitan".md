---
tags: node el.capitan os.x git javascript
---

My first naive attempt at this (`npm install --save nodegit`) didn't work, so I had to install the Xcode "Command Line Tools" first:

```shell
$ xcode-select --install
```

After that, a simple `npm install --save nodegit` worked.

# See also

-   [nodegit \#728](https://github.com/nodegit/nodegit/issues/728): "Error configuring libssh2 - cannot find OpenSSL or Libgcrypt".

