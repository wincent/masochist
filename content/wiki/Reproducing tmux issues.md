---
tags: wiki tmux
title: Reproducing tmux issues
---

# Building from source

As I'm building on macOS, I use the same `./configure` arguments as in [the corresponding Homebrew formula](https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/t/tmux.rb); [as of 2024-08](https://github.com/Homebrew/homebrew-core/blob/f55f805dce72e69ca77d858f07b7f7959525bdfb/Formula/t/tmux.rb) those are as shown below:

```
git clone https://github.com/tmux/tmux.git
cd tmux
sh autogen.sh
./configure --enable-sixel --enable-utf8proc --sysconfdir=/opt/homebrew/etc
make
```

# Spawning a new server with a minimal configuration file

```
touch tmux.conf
./tmux -L test -f tmux.conf
```

- `-f` to specify the file
- `-L` to cause the server to use a distinct socket file from the default (`default`)

# Rereading the configuration file in a running instance

```
tmux source-file tmux.conf
```
