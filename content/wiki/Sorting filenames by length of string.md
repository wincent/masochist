---
tags: wiki
title: Sorting filenames by length of string
---

I say "filenames" but is really could be any string.

Motivating use case: figuring out where the cut-off point is for filepaths in a Git repo overflowing the maximum permitted length on a Windows file system ([example CI failure here](https://github.com/liferay/liferay-frontend-projects/pull/260/checks?check_run_id=1496145140)).

```sh
git ls-files | perl -e 'print sort { length($b) <=> length($a) } <>'
```

Via: [Stack Overflow](https://stackoverflow.com/a/9872959/2103996)
