---
tags: git vim wiki
cache_breaker: 1
---

[git-vim](/wiki/git-vim) is a plugin that provides access to some [Git](/wiki/Git) functionality from within [Vim](/wiki/Vim).

# Where to get it

-   <http://github.com/motemen/git-vim/tree/master>

I have a fork of the official repo, with some patches to fix some minor issues:

-   <http://github.com/wincent/git-vim/tree/master>

# Installation

    git clone git://github.com/motemen/git-vim.git git-vim.git
    cd git-vim.git
    cp plugin/git.vim ~/.vim/plugin/
    cp syntax/git-* ~/.vim/syntax/

# Use

## Key mappings

The README at [the official repo](http://github.com/motemen/git-vim/tree/master) provides a full list, but here are some of the most useful key mappings:

-   `<leader>gd`: calls `:GitDiff` with no args (shows unstaged changes; same as `git diff`)
-   `<leader>gD`: calls `:GitDiff --cached` (shows staged changes; same as `git diff --cached`)
-   `<leader>gs`: calls `:GitStatus` (`git status`)
-   `<leader>gl`: calls `:GitLog` (calls `git log` *for the current file*; to get the repo-wide log you have to manually do `:GitLog HEAD`)
-   `<leader>ga`: calls `:GitAdd` with no args (stages the current file using `git add`)
-   `<leader>gA`: calls `:GitAdd` with filename completion (stages the specified file using `git add`)
-   `<leader>gc`: calls `:GitCommit` (same as `git commit`; ***but note*** that *if you have no staged changes then it will assume `git commit -a`*)

In practice I use `:GitCommit -s` to sign off my commits; `<leader>gc` is really only good for "throw-away" commits because it produces commits without signoffs.

## Commands

In addition to the commands already mentioned above, some of the more useful ones include:

-   `:Git <args>`: arbitrary [Git](/wiki/Git) command
-   `:GitCheckout <args>`: useful for resetting individual files to the `HEAD` state (eg. `:GitCheckout HEAD -- foo.c`)

There are also a bunch of other commands that I can't really see myself using from within [Vim](/wiki/Vim) (`:GitPull`, `:GitPullRebase`, `:GitPush`, `:GitCatFile` and so on).

Note that commands like `:GitDiff` and `:GitCheckout` complete [Git](/wiki/Git) commits.
