#!/bin/sh

set -e

if tmux has-session -t masochist 2> /dev/null; then
  tmux attach -t masochist
  exit
fi

tmux new-session -d -s masochist -n vim

# 1. Main window: vim, server, shell.
tmux send-keys -t masochist:vim "vim -c CommandT" Enter
tmux split-window -t masochist:vim -h -c "$PWD/app"
tmux send-keys -t masochist:vim.right "npm run start" Enter
tmux split-window -t masochist:vim.2
tmux send-keys -t masochist:vim.bottom-right "git st" Enter

# 2. General shell use.
tmux new-window -t masochist

# 3. Content.
tmux new-window -t masochist -c "$PWD/../masochist-pages" -n content
tmux send-keys -t masochist:content "vim -c CommandT" Enter
tmux split-window -t masochist:content -h -c "$PWD/../masochist-pages"
tmux send-keys -t masochist:content.right "git st" Enter

tmux attach -t masochist:vim.left
