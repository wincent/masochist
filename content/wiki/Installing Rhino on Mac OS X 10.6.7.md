---
tags: rhino os.x wiki
---

```shell
$ curl -O ftp://ftp.mozilla.org/pub/mozilla.org/js/rhino1_7R2.zip # from http://www.mozilla.org/rhino/download.html
$ unzip rhino1_7R2.zip
$ sudo cp rhino1_7R2/js.jar /Library/Java/Extensions/
```

Create a wrapper script at `/usr/local/bin/rhino`:

```bash
#!/bin/sh
java org.mozilla.javascript.tools.shell.Main $@
```
