---
tags: lion tmux macos wiki
---

```shell
$ curl -O http://iweb.dl.sourceforge.net/project/tmux/tmux/tmux-1.5/tmux-1.5.tar.gz
$ tar xzf tmux-1.5.tar.gz 
$ cd tmux-1.5
$ export LDFLAGS=-lresolv
$ ./configure
$ make
$ sudo make install
```

# See also

-   <http://dandesousa.com/2011/10/06/installing-and-setting-up-tmux-on-mac-os-lion/>: this is where I found the tip about using `-lresolv`; I don't recommend following the instructions there verbatim, however, as it's not a good idea to build as root (install, yes; build, no) nor is it very satisfying to have to invoke GCC by hand to get the build to finish
