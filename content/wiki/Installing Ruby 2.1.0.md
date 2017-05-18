---
tags: ruby os.x wiki
cache_breaker: 1
---

# On [OS X](/wiki/OS_X) [Mavericks](/wiki/Mavericks) 10.9.1 (using [Homebrew](/wiki/Homebrew))

At the time of writing, [Homebrew](/wiki/Homebrew) hasn't updated to the latest necessary version of ruby-build, so we have to install the latest `HEAD`:

```shell
$ brew unlink ruby-build
$ brew install --HEAD ruby-build
$ rbenv install 2.1.0
```

# On [Fedora](/wiki/Fedora) 8

-   See "[Updating to Ruby 2.1.0 on Fedora 8](/wiki/Updating_to_Ruby_2.1.0_on_Fedora_8)"
