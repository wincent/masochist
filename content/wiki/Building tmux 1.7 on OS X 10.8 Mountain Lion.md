---
tags: tmux wiki
---

This is considerably simpler than building it on [CentOS](/wiki/CentOS) 5.8 (see [Building tmux 1.7 on CentOS 5.8](/wiki/Building_tmux_1.7_on_CentOS_5.8)) and simpler than it was on older versions of the OS (see [Building tmux 1.5 on Mac OS X Lion 10.7.2](/wiki/Building_tmux_1.5_on_Mac_OS_X_Lion_10.7.2)):

```shell
$ curl -LO http://downloads.sourceforge.net/tmux/tmux-1.7.tar.gz
$ tar xzvf tmux-1.7.tar.gz
$ cd tmux-1.7
$ ./configure && make && sudo make install
```
