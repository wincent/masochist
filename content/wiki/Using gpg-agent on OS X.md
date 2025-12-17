---
tags: gpg wiki
title: Using gpg-agent on OS X
---

Below are the historical notes I made when using GnuPG version 1. With GnuPG version 2, `gpg-agent` is bundled with the `gnupg` Homebrew formula and my main use case for it nowadays is signing [Git] or [Jujutsu] objects (commits and tags). It mostly works out of the box, but for reference, here is my [`~/.gnupg/gpg-agent.conf`](https://github.com/wincent/wincent/blob/a0e322d0226cdc2489512b0085181b8b89e11a1b/aspects/dotfiles/templates/.gnupg/gpg-agent.conf.erb), my associated [`~/.config/git/config`](https://github.com/wincent/wincent/blob/a0e322d0226cdc2489512b0085181b8b89e11a1b/aspects/dotfiles/templates/.config/git/config.erb), and my [`~/.config/jj/config.toml](https://github.com/wincent/wincent/blob/a0e322d0226cdc2489512b0085181b8b89e11a1b/aspects/dotfiles/templates/.config/jj/config.toml.erb) (note: all of those are templates used to dynamically produce the actual configuration files).

# Appendix: Historical notes

I just started using `gpg-agent` for the first time on [OS X](/wiki/OS_X). Coming from my familiarity with `ssh-agent` and `ssh-add`, there were some surprises.

## Installation

If you use [Homebrew](/wiki/Homebrew), it's easy:

```shell
$ brew install gpg-agent
```

But note, there is no [man](/wiki/man) page ([here](http://linux.die.net/man/1/gpg-agent) is one I found online), and for the `gpg-preset-passphrase` tool there is no man page I could find at all (other than [this document](http://www.gnupg.org/documentation/manuals/gnupg-devel/gpg_002dpreset_002dpassphrase.html)).

## Use

The reason I started investigating this is so I could do batch encryption and decryption from a within a shell script.

### Encryption

Here the command I want to run is something like:

```shell
$ gpg -a -q --batch --no-tty --yes -r example@example.com -o $FILE.encrypted -e $FILE
```

Encryption is done with the public key, so you don't need to enter a passphrase, but I was nevertheless getting derailed by a prompt:

    It is NOT certain that the key belongs to the person named
    in the user ID.  If you *really* know what you are doing,
    you may answer the next question with yes.

I believe the cause is that my key pair was generated on another machine, and when I switched machines, it lost its trust settings. They can be restored (to "ultimate" trust) with:

```shell
$ gpg --edit-key example@example.com
```

and then entering `trust` at the prompt, entering and confirming the desired trust level (`5`) and then issuing a `quit`.

### Decryption

Decryption requires the private key, so to avoid entering a passphrase repeatedly, I wanted to use `gpg-agent`.

Specifically, the kind of command I wanted to run was like:

```shell
$ gpg -q --yes --batch --no-tty --use-agent -o $OUTFILE -d $INFILE
```

Note the `--use-agent` switch which instructs `gpg` to try and use `gpg-agent`.

To make this work, we either need to do:

```shell
$ eval $(gpg-agent --daemon --allow-preset-passphrase)
```

Or:

```shell
$ eval $(gpg-agent --daemon)
```

(Which requires us to add `allow-preset-passphrase` in `~/.gnupg/gpg-agent.conf`.

This all works without the `allow-preset-passphrase` stuff, but the `gpg-agent` is configured to remember passphrases for only 600 seconds, unlike `ssh-agent`. It is possible to increase that time span with the `--default-cache-ttl` and `--max-cache-ttl` settings, but if you want to make it permanent you need to use the `gpg-preset-passphrase` tool.

This is where it gets tricky. As I said above, there is no man page. Furthermore, the tool is not installed in your `$PATH` by default, but can be found at `/usr/local/opt/gpg-agent/libexec/gpg-preset-passphrase` when installed via Homebrew.

Finally, you need a `KEYGRIP`, which [this mailing list post](http://lists.gnupg.org/pipermail/gnupg-users/2010-January/037876.html) informs us is actually the fingerprint of the key, and not just the fingerprint, but the subkey fingerprint, which you can display with the arcane `gpg --fingerprint --fingerprint` command.

```shell
$ KEYGRIP=$(gpg --fingerprint --fingerprint example@example.com | grep fingerprint | tail -1 | cut -d= -f2 | sed -e 's/ //g')
$ /usr/local/opt/gpg-agent/libexec/gpg-preset-passphrase --preset $KEYGRIP
```

That "remembers" passphrase for the given key. Note that whatever you type into standard in will be echoed directly to the screen without obfuscation, so be careful.

You can get the agent to "forget" the passphrase with:

```shell
$ /usr/local/opt/gpg-agent/libexec/gpg-preset-passphrase --forget $KEYGRIP
```

<!-- References -->

[Git]: /wiki/Git
[Jujutsu]: /wiki/Jujutsu
