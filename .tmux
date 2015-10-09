#!/bin/sh

set -e

tmux new-session -d -s masochist -n vim

# 1. Main window: vim, server, shell.
tmux send-keys -t masochist:vim "vim -c CommandT" Enter
tmux split-window -t masochist:vim -h -c app
tmux send-keys -t masochist:vim.right "npm run start" Enter
tmux split-window -t masochist:vim.2
tmux send-keys -t masochist:vim.bottom-right "git st" Enter

# 2. General shell use.
tmux new-window -t masochist

# 3. Wikiserve.
tmux new-window -t masochist -c wikiserve -n wikiserve
tmux send-keys -t masochist:wikiserve "bundle exec unicorn" Enter

# 4. Content.
tmux new-window -t masochist -c ../masochist-pages -n content

tmux attach -t masochist:vim.left
