---
tags: gpg
cache_breaker: 1
---

# Export a public key

```shell
$ gpg --export -a win@wincent.com
```

Sample output [here](/snippets/122).

# List info about keys in the keyring

## Public keys

```shell
$ gpg --list-public-keys
```

## Private keys

```shell
$ gpg --list-secret-keys
```

# List fingerprint info about keys in keyring

```shell
$ gpg --fingerprint
```

# Deleting keys from a keyring

## Deleting a private key

**Note**: This is generally something you'd want to do with extreme caution.

```shell
$ gpg --delete-secret-key "John Tester <john@example.com>"
```

## Deleting a public key

```shell
$ gpg --delete-key "John Tester <john@example.com>"
```

# Uploading a public key to a key server

## Uploading to a specific server

Here the "key ID" is the one you can find in the output of `gpg --list-keys`, prefixed with `0x`:

```shell
$ gpg --keyserver pgp.mit.edu --send-keys 0x134D9429
gpg: sending key 134D9429 to hkp server pgp.mit.edu
```

## Letting `gpg` choose a default server

```shell
$ gpg --send-keys 0x134D9429
gpg: sending key 134D9429 to hkp server keys.gnupg.net
```

## Further reading on key servers

-   <http://pgp.mit.edu/faq.html>

# Importing a key from a key server

```shell
$ gpg --keyserver pgp.mit.edu --recv-keys 0x134D9429 
gpg: requesting key 134D9429 from hkp server pgp.mit.edu
gpg: key 134D9429: "Wincent Colaiuta <win@wincent.com>" not changed
gpg: Total number processed: 1
gpg:              unchanged: 1
```

# Setting preferences on an existing key in the key ring

(As described [here](http://www.apache.org/dev/openpgp.html#sha1).)

```shell
$ gpg --edit-key 134D9429
gpg> showpref
gpg> setpref SHA512 SHA384 SHA256 SHA224 AES256 AES192 AES CAST5 ZLIB BZIP2 ZIP gpg> save
$ gpg --send-keys 134D9429 # upload new public key to keyserver
```

# Generate revocation certificates

```shell
$ gpg --output revoke-37BAF280.asc --armor --gen-revoke 37BAF280
$ gpg --output revoke-134D9429.asc --armor --gen-revoke 134D9429
$ gpg -c revoke-134D9429.asc # encrypt revocation cert
$ gpg -c revoke-37BAF280.asc # encrypt revocation cert
$ rm revoke-*.asc            # destroy plaintext (use `srm` if you have it)
$ chmod 400 revoke-*         # ideally, should move certs "offsite" to secure location
```

# Transitioning from an older key to a newer key

For example, to change key length, or because a key's expiry is approaching. See [this page](http://www.apache.org/dev/key-transition.html) for great detail on the subject.

We'll generate a new key, set its trust to "ultimate", set it as our default, and sign the new key with the old.

```shell
$ gpg --gen-key                                  # generate new key
$ gpg --edit-key 37BAF280                        # trust, showprefs
$ vim ~/.gnupg/gpg.conf                          # set default-key to 37BAF280
$ gpg --default-key 1BD985E7 --sign-key 37BAF280 # sign new with old
$ gpg --list-sigs 134D9429 37BAF280              # confirm sigs
$ gpg --send-keys 134D9429 37BAF280              # send both keys to server
```

# Changing the password on an existing private key

```shell
$ gpg --edit-key user@example.com # at prompt: `passwd`, then `quit`
```

# See also

-   Another cheat sheet: <http://irtfweb.ifa.hawaii.edu/~lockhart/gpg/gpg-cs.html>

