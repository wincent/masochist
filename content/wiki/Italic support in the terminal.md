---
tags: iterm wiki
cache_breaker: 1
---

To test for it:

```shell
$ echo -e "\e[3mitalic\e[m"
$ echo `tput sitm`italics`tput ritm` `tput smso`standout`tput rmso`
```
