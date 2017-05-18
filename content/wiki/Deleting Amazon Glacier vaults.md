---
tags: aws amazon glacier wiki
cache_breaker: 1
---

Amazon Glacier vaults are notoriously hard to delete, because they can't be deleted until empty, getting a list of their contents is a multi-hour operation, and they can grow to be immensely large, requiring a lot of time to actually delete the contained archives.

For this purpose, I use the `mt-aws-glacier` tool.

# Installing the tool

This is how I installed the tool on my [OS X](/wiki/OS_X) [Mavericks](/wiki/Mavericks) box:

```shell
$ sudo cpan -i JSON::XS
$ sudo cpan -i Bundle::LWP # this is the p5-libwww-perl mentioned in the README
$ sudo cpan -i App::MtAws
```

Remember to recoil in horror as you realize that this pollutes `/usr/local/bin` (which [Homebrew](/wiki/Homebrew) prefers to keep all to itself).

# Prepare your credentials

```shell
$ cat > glacier.cfg <<HEREDOC
key=YOURKEY
secret=YOURSECRET
region=us-east-1
protocol=http
HEREDOC
```

# Prepare a list of vaults to be deleted

```shell
$ VAULTS="somevault
someothervault
yetanothervault
onemorevault"
```

# Request a list of archives in each vault

```shell
$ echo $VAULTS | while read VAULT; do
  echo "'$VAULT'"
  mtglacier retrieve-inventory --config glacier.cfg --vault $VAULT
done
```

# Download the inventory

After 4 or 5 hours, you should be able to download the requested inventories:

```shell
$ echo $VAULTS | while read VAULT; do
  echo "'$VAULT'"
  mtglacier download-inventory --config glacier.cfg --vault $VAULT --new-journal $VAULT-journal.log
done
```

**Note:** If you have to retry this step at any point remember to delete your `*-journal.log` files; `mtglacier` will complain if you don't.

# Delete the archives from the vaults

```shell
$ echo $VAULTS | while read VAULT; do
  echo "'$VAULT'"
  mtglacier purge-vault --config glacier.cfg --vault $VAULT --journal $VAULT-journal.log
done
```

# Delete the vaults

Supposedly you might have to wait 24-48 hours before doing this, but I suspect it may work immediately:

```shell
$ echo $VAULTS | while read VAULT; do
  echo "'$VAULT'"
  mtglacier delete-vault $VAULT --config glacier.cfg
done
```

# Cleaning up after yourself

```shell
$ rm glacier.cfg *-journal.log
```

# General observations

In my case I had about 700k archives and 8 vaults to delete, and it took about 3 days in all. I had to restart the operation two or three times, re-requesting the inventories (and waiting hours before they were ready) each time.
