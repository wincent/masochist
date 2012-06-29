---
tags: gnome
---

Best suggestion for this I've seen so far is [here](http://wujingyue.blogspot.com/2012/06/let-ubuntu-gnome-terminal-support-256.html):

> Most instructions online tell you to add an extra line "export TERM=xterm-256color" in your .bashrc file in order to support 256 colors. However, this extra line sometimes creates problems because environment variable "TERM" should be reported by the terminal instead of the shell. For instance, "tmux" usually sets TERM to be "screen-256color" in order to better support special keys such as "Home" and "End". However, the extra line "export TERM=xterm-256color" would overwrite tmux's terminal type and create annoying issues such as the home key not working. Therefore, what I would suggest is to set the terminal type in the command of your gnome-terminal (Profile Preferences =&gt; Title and Command =&gt; Run a custom command instead of my shell). For example, if you are using bash, set the command to be "env TERM=xterm-256color /bin/bash".
