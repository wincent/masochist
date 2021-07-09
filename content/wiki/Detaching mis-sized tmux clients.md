---
tags: wiki tmux
title: Detaching mis-sized tmux clients
---

As per my question [here](https://github.com/tmux/tmux/issues/964), sometimes I need to detach zombie/stale tmux clients that are forcing the view to have a size other the screen on which I am currently using.

This seems to do the trick:

```bash
tmux detach-client -a
```
