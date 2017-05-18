---
tags: tar wiki
cache_breaker: 1
---

# Checking/listing archive contents

For a `tgz` archive:

```shell
$tar -t --gunzip -f archive.tgz
```

or:

```shell
$ tar -tzf archive.tgz
```

For a `tbz2` archive:

```shell
$ tar -tjf archive.tbz2
```

# Copying a directory across filesystems

For example, to move `/home/jenkins` to `/var/lib/jenkins`:

```shell
# cd /var/lib
# mkdir jenkins
# chown jenkins:jenkins jenkins
# cd jenkins
# sudo -u jenkins tar -cpf - /home/jenkins | tar xpf -
```

# Copying the *contents* of a folder into another

```shell
$ tar cpf - -C $SRC_DIR . | tar xpf - -C $DEST_DIR
```

-   `c` → compress
-   `x` → extract
-   `p` → preserve permissions, ownership, attributes, timestamps etc
-   `f directory` → read from/write to file (in this case, `-`, which stands for standard in and standard out)
-   `-C directory` → change into specified directory before proceeding

## See also

-   [unzip cookbook](/wiki/unzip_cookbook)
