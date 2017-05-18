---
tags: gems wiki
---

A `.gem` package is a `.tar` archive containing:

-   a `.tar.gz` archive of contents; and
-   a `.gz` file containing metadata (in [YAML](/wiki/YAML) format)
-   a `.gz` file containing checksums (also in [YAML](/wiki/YAML) format)

To break out the outer archive:

```shell
$ tar xvf somegem-0.0.1.gem
x metadata.gz
x data.tar.gz
x checksums.yaml.gz
```

To inspect or break out the metadata:

```shell
$ zless metadata.gz
$ gunzip metadata.gz
```

To inspect or break out the checksums:

```shell
$ zless checksums.yaml.gz
$ gunzip checksums.yaml.gz
```

To extract the contents:

```shell
$ tar xzvf data.tar.gz
```
