---
tags: aws wiki
cache_breaker: 1
---

`aws` is a simplified [command line](/wiki/command_line) interface to [Amazon Web Services](/wiki/Amazon_Web_Services).

# Official website

-   <http://timkay.com/aws/>
-   <http://github.com/timkay/aws>

# Installation

To install to the `bin` directory in your home directory:

```shell
$ curl timkay.com/aws/aws -o ~/bin/aws
$ chmod +x ~/bin/aws
```

# MIME types

If you have an appropriate `/etc/mime.types` file the `aws` tool will automatically set the correct `Content-Type` for you based on the file extension. I have a very brief MIME types file that covers the basic file types that I expect to be distributing using Amazon S3:

    application/octet-stream  bin dmg img iso pkg
    application/ogg ogg
    application/pdf pdf
    application/x-bzip2 bz2
    application/x-gzip  gz tgz
    application/x-tar tar
    application/zip zip
    audio/mpeg  mp3
    image/gif gif
    image/jpeg  jpeg
    image/png png
    text/plain  txt
    video/mpeg  mpeg mpg
    video/quicktime mov

# Uploading

The main bucket I use for public distribution via [HTTP](/wiki/HTTP) is `s3.wincent.com`. (See "[HTTPS access to Amazon S3 buckets](/wiki/HTTPS_access_to_Amazon_S3_buckets)" for info on distribution via [HTTPS](/wiki/HTTPS).)

"Objects" uploaded into the bucket (really files) are identified by textual keys. Keys can have path-like names to give the appearance of hierarchical organization, but in reality buckets are just shallow/flat collections. This means that the following "paths" all refer to objects in the "top" (and *only*) level in the bucket:

-   `synergy/releases/synergy-4.3.zip`
-   `wikitext/releases/wikitext-2.0.gem.bz2`
-   `publications/novel.pdf`

As an example, to upload `synergy-4.4.zip` into the appropriate bucket:

```shell
$ aws put s3.wincent.com/synergy/releases/synergy-4.4.zip /local/path/to/Synergy4.4.zip
$ aws put s3.wincent.com/synergy/releases/synergy-4.4.zip?acl --public
```

The second line is necessary to override the default ACL (which only allows the owner access to the object but nobody else).

# See also

-   [Deleting old Amazon EBS snapshots](/wiki/Deleting_old_Amazon_EBS_snapshots): the `aws` tool is about 10 to 20 times faster than Amazon's Java-based [command line](/wiki/command_line) tools for batch jobs such as deleting snapshots
