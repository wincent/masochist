---
tags: rvm macos wiki
cache_breaker: 1
---

Follow the instructions from <https://rvm.beginrescueend.com/rvm/install/>:

```shell
$ bash < <(curl -s https://rvm.beginrescueend.com/install/rvm)
```

In my `.bash_profile` I have:

```bash
if [[ -s $HOME/.rvm/scripts/rvm ]]; then
  source $HOME/.rvm/scripts/rvm
else
  # make Bundler do passwordless installs to a sandbox rather than to the system
  export BUNDLE_PATH=~/.bundle
fi
```

The goal here is that when [RVM](/wiki/RVM) is available, we use that, and when it isn't we tell Bundler to install into a shared area inside my home directory. That way I never have to do gem installations with root privileges.

Upon re-sourcing the `.bash_profile` you can do:

```shell
$ rvm list known
$ rvm install 1.8.7
$ which ruby
$ rvm use 1.8.7
$ which ruby
```
