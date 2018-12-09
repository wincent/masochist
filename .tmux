#!/bin/sh

set -e

if tmux has-session -t=masochist 2> /dev/null; then
  tmux attach -t masochist
  exit
fi

tmux new-session -d -s masochist -n vim  -x $(tput cols) -y $(tput lines)

# 1. Main window: vim, server, shell.
tmux send-keys -t masochist:vim "vim -c CommandTBoot" Enter
tmux split-window -t masochist:vim -h
tmux send-keys -t masochist:vim.right "vendor/bin/yarn start" Enter
tmux split-window -t masochist:vim.2
tmux send-keys -t masochist:vim.bottom-right "git st" Enter

# 2. General shell use.
tmux new-window -t masochist

# 3. Content.
tmux new-window -t masochist -c "$PWD/content" -n content
tmux send-keys -t masochist:content "vim -c CommandTBoot" Enter

tmux split-window -t masochist:content -h -c "$PWD/content"
tmux send-keys -t masochist:content.right "git st" Enter

tmux attach -t masochist:vim.left
