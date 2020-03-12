---
tags: find grep wiki
---

While finding files containing a string is easy with `grep`, it is non-obvious how to do the opposite and list files which do _not_ contain a given string.

Here's an example, listing all files in the current directory which do _not_ contain the string "ActiveRecord::Base":

```shell
$ find . -type f ! -exec grep -q ActiveRecord::Base {} \; -print
```
