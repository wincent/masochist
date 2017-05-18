---
tags: skype wiki
---

Grab the video URL from the local database:

```shell
$ sqlite3 Library/Application\ Support/Skype/$SKYPE_HANDLE/main.db
> select * from VideoMessages;
```

Then retrieve it using `curl`; eg:

```shell
$ curl 'https://example.net/foo.mov' > foo.mov
```
