---
tags: wiki tmux
---

I think this issue is likely fixed in new versions of tmux, but sometimes when I have to use tmux on a machine with an older version of tmux installed I still run into this.

- I originally reported this here: https://github.com/tmux/tmux/issues/298
- I think it is likely the same issue as reported here: https://github.com/tmux/tmux/issues/507

The symptoms are that tmux seems to be alive (you can switch panes, create new panes etc) but you can't type anything (no other visual updates appear).

The thing that has worked for me is:

- Detach (`<prefix>-d`).
- Reattach with `-d` switch.

Other commenters on the most recent issue suggested detaching the sending `SIGCONT` to the tmux process and/or hitting Control-Q (to deactivate flow control), but that didn't work for me,and I've [turned off flow control anyway](https://github.com/wincent/wincent/commit/59f1b46117bf235348df48c42c73e8b63efe8a94).
