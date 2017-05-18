---
tags: vim snow.leopard wiki
---

If you don't have [Mercurial](/wiki/Mercurial) you can download it from: <http://mercurial.selenic.com/downloads>

```shell
$ hg clone https://vim.googlecode.com/hg/ vim
$ cd vim
$ hg update vim73
$ CONF_OPT_RUBY=--enable-rubyinterp make
$ src/vim --version
$ sudo make install
```

**Note:** if you decide to rebuild with new build settings it is not enough to do `make clean`; you must actually do `make distclean` in order to force `configure` to be re-run and pick up the new settings
