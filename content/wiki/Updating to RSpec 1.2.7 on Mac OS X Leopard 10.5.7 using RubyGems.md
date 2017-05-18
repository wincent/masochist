---
tags: leopard rspec updates wiki
---

# Installing

Given that the rspec-rails gem depends on the rspec gem, you can install both by doing `sudo gem install rspec-rails`:

```shell
$ sudo gem install rspec-rails
Password:
**************************************************

  Thank you for installing rspec-1.2.7

  Please be sure to read History.rdoc and Upgrade.rdoc
  for useful information about this release.

**************************************************
**************************************************

  Thank you for installing rspec-rails-1.2.7.1

  If you are upgrading, do this in each of your rails apps
  that you want to upgrade:

    $ ruby script/generate rspec

  Please be sure to read History.rdoc and Upgrade.rdoc
  for useful information about this release.

**************************************************
Successfully installed rspec-1.2.7
Successfully installed rspec-rails-1.2.7.1
2 gems installed
Installing ri documentation for rspec-1.2.7...
Installing ri documentation for rspec-rails-1.2.7.1...
Installing RDoc documentation for rspec-1.2.7...
Installing RDoc documentation for rspec-rails-1.2.7.1...
```

# Updating the [FastRI](/wiki/FastRI) index

```shell
$ fastri-server -b
Building index.
Indexed:
* 7747 methods
* 1370 classes/modules
Needed 2.355369 seconds
```
