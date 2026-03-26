#!/bin/sh

set -e

if tmux has-session -t=masochist 2> /dev/null; then
  tmux attach -t masochist
  exit
fi

tmux new-session -d -s masochist -n vim -x $(tput cols) -y $(tput lines)

tmux split-window -t masochist:vim -h

tmux send-keys -t masochist:vim.left "vim -c CommandT" Enter

tmux new-window -t masochist -c content -n content

tmux new-window -t masochist -c public -n public

tmux attach -t masochist:vim.right
