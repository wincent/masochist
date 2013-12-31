---
tags: unix shell
---

```shell
$ echo foo | sudo tee $PATH_TO_FILE > /dev/null
```

Note that `sudo echo foo > $PATH_TO_FILE` won't work, because only the `echo` subprocess runs as root; the shell that process the redirection continues to run as the unprivileged user.

Also, note that we still need to redirect the output from `tee` to `/dev/null` (because `tee` will not only write to the file, it will also output redundantly to the standard output).
