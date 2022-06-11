---
tags: wiki gpg
title: GPG key rotation notes
---

# Executive summary

- **Have one primary key per "identity".** That generally means one tied to your personal email address and one tied to your work address. (We want the work one separate so it can be revoked if you leave your job.)
- **Keep an expiry date on your primary key(s).** This is a "dead-person switch"; you can change the expiry date at will — there is no need to generate a new key.
- **Keep the primary key(s) "offline".** As in, keep them in 1Password, and keep only the subkeys on your system(s).
- **It's ok to have your subkeys on multiple machines.** If you must revoke a key, do it. You will need to put a new subkey on all machines. That's ok. Don't try to use a separate identity for each machine; use your personal identity on all personal machines and your work identity on all work machines.
- **Use the default encryption subkey.** GPG will make an encryption subkey by default when you create your primary key; just use that. When the subkey expires, then you will create a new encryption subkey.
- **Create a signing subkey if you need to.** A primary key _is_ a signing key, but because you're storing it offline, you need to generate a signing subkey if (and only if) you need to sign things. Like encryption subkeys, this should have an expiry date; you can periodically issue a new signing subkey.[^work]
- **Synchronize expiry dates to reduce maintenance burden.** Line up the expiry dates on all the keys so that you can refresh them all at the same time. That generally means updating the expiry on your personal and work primary keys, and generating new encryption (and possibly signing) subkeys. 2 years is a good expiry interval (not too often to be burdensome, not so infrequent that you forget how to update.)

[^work]: On my work machine, I don't use a signing key and I don't sign Git commits (I don't even _have_ a signing subkey). This is because most of my work is done on Codespaces, and getting GPG keys working there is a speed bump I'd rather avoid at this time (writing this in June 2022). For my personal machines, I do have a signing key.

# Example rotation procedures

## Rotating my `wincent@github.com` keys

To start with, let's examine the current state of the key:

```shell
$ gpg --edit-key wincent@github.com
```

This shows:

```
Secret subkeys are available.

pub  rsa4096/62106B56923F3481
     created: 2021-06-04  expired: 2022-06-04  usage: SC
     trust: ultimate      validity: expired
ssb  rsa4096/424385B611E36E91
     created: 2021-06-04  expired: 2022-06-04  usage: E
[expired] (1). Greg Hurrell <wincent@github.com>
```

- Normally, when you create a key you get a `sec` (secret) primary key which is also a signing key (usage `SC`: `S` for signing and `C` for primary). By default a `ssb` (subkey) key is also generated, with usage `E` (encryption).
- Here we see no `sec`, only a `pub` (public) key, which is the public part of the primary key; usage `SC` means signing/primary key; the private part of this key is offline in 1Password.
- `ssb` is the standard sub-key, usage `E` means encryption.

So, our goal then is to:

1. Import the private primary key from 1Password.
2. Bump the expiry date on it.
3. (Optional) Generate a new signing subkey with a matching expiry date; I'll be skipping this step on my work machine because I don't sign stuff there, I only encrypt it.
4. Generate a new encryption subkey with a matching expiry date.
5. Publish the updated key to the keyservers.
6. Export the updated primary key from GnuPG (including the subkeys).
7. Back up the updated primary key in 1Password.
8. Take the private part of the primary key offline.

So, with the file from 1Password, import it back into the keyring:

```shell
$ gpg --import 'wincent@github.com GPG key 0x62106B56923F3481 expires 2022-06-04.asc'
gpg: key 62106B56923F3481: "Greg Hurrell <wincent@github.com>" not changed
gpg: key 62106B56923F3481: secret key imported
gpg: Total number processed: 1
gpg:              unchanged: 1
gpg:       secret keys read: 1
gpg:   secret keys imported: 1
gpg:  secret keys unchanged: 1
```

And compare with the previous output of `gpg --edit-key wincent@github.com`:

```
Secret key is available.

sec  rsa4096/62106B56923F3481
     created: 2021-06-04  expired: 2022-06-04  usage: SC
     trust: ultimate      validity: expired
ssb  rsa4096/424385B611E36E91
     created: 2021-06-04  expired: 2022-06-04  usage: E
[expired] (1). Greg Hurrell <wincent@github.com>
```

Note: output is almost identical to the first time, but now the `pub` (public) primary key is now showing up as `sec` (secret) instead.

Now we bump the expiry date on the primary key by 1 year:

```
gpg> expire
Changing expiration time for the primary key.
Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
Key is valid for? (0) 1y
Key expires at Sun 11 Jun 15:21:10 2023 CEST
Is this correct? (y/N) y

sec  rsa4096/62106B56923F3481
     created: 2021-06-04  expires: 2023-06-11  usage: SC
     trust: ultimate      validity: ultimate
ssb  rsa4096/424385B611E36E91
     created: 2021-06-04  expired: 2022-06-04  usage: E
[ultimate] (1). Greg Hurrell <wincent@github.com>

gpg: WARNING: Your encryption subkey expires soon.
gpg: You may want to change its expiration date too.
```

Note the `WARNING` at the end there; in our case, we're going to create a new subkey instead of changing the expiry on the existing one [for a little bit of forward security](https://unix.stackexchange.com/a/177310/140622):

```
gpg> addkey
Please select what kind of key you want:
   (3) DSA (sign only)
   (4) RSA (sign only)
   (5) Elgamal (encrypt only)
   (6) RSA (encrypt only)
  (10) ECC (sign only)
  (12) ECC (encrypt only)
  (14) Existing key from card
Your selection? 6
RSA keys may be between 1024 and 4096 bits long.
What keysize do you want? (3072) 4096
Requested keysize is 4096 bits
Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
Key is valid for? (0) 1y
Key expires at Sun 11 Jun 15:22:40 2023 CEST
Is this correct? (y/N) y
Really create? (y/N) y
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.

sec  rsa4096/62106B56923F3481
     created: 2021-06-04  expires: 2023-06-11  usage: SC
     trust: ultimate      validity: ultimate
ssb  rsa4096/424385B611E36E91
     created: 2021-06-04  expired: 2022-06-04  usage: E
ssb  rsa4096/A81880D9C0B03264
     created: 2022-06-11  expires: 2023-06-11  usage: E
[ultimate] (1). Greg Hurrell <wincent@github.com>

gpg> save
```

Now, publish:

```bash
gpg --send-keys 0x62106B56923F3481
gpg --send-keys --keyserver pgp.mit.edu 0x62106B56923F3481
gpg --send-keys --keyserver keyserver.ubuntu.com 0x62106B56923F3481
```

Now we can export the public key, including the subkeys, for use in GitHub:

```bash
gpg --export --armor --output 0x62106B56923F3481.pub.asc 0x62106B56923F3481
```

This produces a file that looks like this:

```
-----BEGIN PGP PUBLIC KEY BLOCK-----

mQINBGC6kT8BEADYdXxrBAJVRsQUCKTiO7nfCmrvkVWBQ4enU39DsxkdUG1LU3uv
... many more lines ...
Jew5lkkOc3gMW6I0e6ELMHERV6Yfy+HvA2O5/ThU19aOzMnGFkKDFFdQh48bdw==
=K+xm
-----END PGP PUBLIC KEY BLOCK-----
```

Which we paste into our [GitHub GPG Settings](https://github.com/settings/gpg/new), and can discard the file:

```bash
rm 0x62106B56923F3481.pub.asc
```

Now we export again for stashing in 1Password, this time dumping _everything_ including the secret parts:

```bash
gpg --export-secret-keys --armor --output 0x62106B56923F3481.primary.asc 0x62106B56923F3481
```

This one looks similar to the other, but begins and ends with:

```
-----BEGIN PGP PRIVATE KEY BLOCK-----

...

-----END PGP PRIVATE KEY BLOCK-----
```

Before stashing that in 1Password I'm going to give it a more informative name:

```bash
mv 0x62106B56923F3481.primary.asc \
  'wincent@github.com GPG key 0x62106B56923F3481 expires 2023-06-11.asc'
```

Delete from local files from filesystem (using `shred` which I got via Homebrew, although it [doesn't "really make sense for modern systems" with SSDs, FileVault etc](https://superuser.com/questions/617515/using-shred-from-the-command-line)):

```bash
shred -u \
  wincent@github.com\ GPG\ key\ 0x62106B56923F3481\ expires\ 2022-06-04.asc \
  wincent@github.com\ GPG\ key\ 0x62106B56923F3481\ expires\ 2023-06-11.asc
```

Delete from the local keyring:

```bash
# Say "yes" to deleting the primary secret key, but not the subkeys.
# Also note: I've found the dialog here to bug out inside tmux; better
# to run this command in a top-level terminal window instead:
gpg --delete-secret-keys wincent@github.com
```

Review final result with `gpg --edit-key wincent@github.com`:

```
Secret subkeys are available.

pub  rsa4096/62106B56923F3481
     created: 2021-06-04  expires: 2023-06-11  usage: SC
     trust: ultimate      validity: ultimate
ssb  rsa4096/424385B611E36E91
     created: 2021-06-04  expired: 2022-06-04  usage: E
ssb  rsa4096/A81880D9C0B03264
     created: 2022-06-11  expires: 2023-06-11  usage: E
[ultimate] (1). Greg Hurrell <wincent@github.com>
```

- We see `pub` (public) instead of `sec` (secret), indicating that our primary secret key is now offline.
- We see our expired `E` (encryption) subkey as well as our new one.

The main reason I even have this key is so that I can encrypt and decrypt sensitive dotfiles in public repos, so let's test that out. (I don't even have a signing subkey, so uploading the key to GitHub is really just going through the motions for no real reason).

Inspect state in the GPG agent with `gpg-connect-agent 'keyinfo --list' /bye`:

```
S KEYINFO 65E2EC218B70472DE703EE591DD04665E6C3D311 D - - - C - - -
S KEYINFO B608A117C14AF4CEC5C5CC299048DA3B1D95AC6C D - - - C - - -
S KEYINFO E4E775C7F78DBF4872E72E4C58B1A35B253259ED D - - - P - - -
S KEYINFO 52577084CEE4B10AC7E75601C6BB9D8D15C883BC D - - - P - - -
OK
```

As noted in my older notes (below), I'm not actually sure what all those keygrips correspond to. Based on the output of `gpg --list-keys --keyid-format=long --with-keygrip --with-fingerprint`, the `E4E775...` key corresponds to my encryption subkey, but I have no idea what the others are.

```bash
cd $DOTFILES
```

Note that `bin/git-cipher decrypt` still works, but produces a bunch of messages like this:

```
aspects/ssh/templates/.ssh/.config.erb.encrypted -> aspects/ssh/templates/.ssh/config.erb [decrypting ...gpg: Note: secret key 424385B611E36E91 expired at Sat  4 Jun 22:46:55 2022 CEST
```

Re-encrypt everything with the new subkey (`--force` here is because normally this would be a no-op, as the tool bails out if the plain text inputs aren't newer than the encrypted files):

```bash
bin/git-cipher encrypt --force
```

Now see that `bin/git-cipher decrypt` no longer prints the warnings; instead, it prints messages like:

```
aspects/ssh/templates/.ssh/.config.erb.encrypted -> aspects/ssh/templates/.ssh/config.erb [decrypting ... done]
```

And we can see that a sample file has indeed been encrypted with the new key:

```shell
$ gpg --list-packets aspects/ssh/templates/.ssh/.config.erb.encrypted
gpg: encrypted with rsa4096 key, ID A81880D9C0B03264, created 2022-06-11
      "Greg Hurrell <wincent@github.com>"
gpg: encrypted with rsa4096 key, ID FF08BAF685DCF99C, created 2014-05-20
      "Greg Hurrell <greg@hurrell.net>"
...
```

Push [the update](https://github.com/wincent/wincent/commit/f0152a2ee4cf7a3a753392ad8dc70c335ddc1200) to GitHub.

# Older notes

## Details

My current key isn't expiring until 2024-05-17, but I wanted to leave some notes here to remind me that the next time I transition to a new key I should create the master key without an expiry date and instead produce a key revocation certificate stored in a "safe location" (might be in a 1Password vault or printed on paper in a safe somewhere).

> The expiry date is no reasonable mechanism to protect the primary key, and you should have a revocation certificate at hand.

Actually, I'm persuaded by [this argument](https://riseup.net/en/security/message-security/openpgp/best-practices#use-a-strong-primary-key) that:

> People think that they don't want their keys to expire, but you actually do. Why? Because you can always extend your expiration date, even after it has expired! This "expiration" is actually more of a safety valve or "dead-person switch" that will automatically trigger at some point.

So what I am going to do is:

- (Preliminary: clean out old private primary keys for win@wincent.com)
- Leave the expiry date on my current primary key.
- Generate a revocation certificate and store it somewhere pretty safe (eg. 1Password).
- Optionally, create a new subkey for encryption (note: [primary key is a signing key, and an encryption subkey is automatically generated](https://wiki.debian.org/Subkeys), so can actually just use that).
- Create a revocation certificate for that too, for good measure (again, in 1Password).
- Store my primary key offline (again, in somewhere like 1Password).
- Update primary key expiry date before it expires.
- When expiry date on encryption subkey expires, rotate that (don't need to extend that one; can just rotate).

I also would like to have separate keys per machine, but in order to do that, I can't really use subkeys in a convenient way (GnuPG will default to using the newest one). What I could do, is have a _separate primary key_ (different email address) for my work machine, and sign that with the primary key. Or I could just make subkeys with a short expiration date and put them on both machines (that might be easier).

## Process

Ok, this is not necessarily the most direct way to do all this, but it's what I came up with.

```
# See all the things about our secret keys.
gpg --list-secret-keys --keyid-format=long --with-keygrip --with-fingerprint

# Export my old expired key, for copying into 1Password
gpg --export-secret-keys --armor --output 'win@wincent.com GPG key 0x6F252437134D9429 expired 2017-07-07.asc' 0x6F252437134D9429

# After adding the file to 1Password (use `srm` instead of `rm` preferrably).
rm 'win@wincent.com GPG key 0x6F252437134D9429 expired 2017-07-07.asc'
gpg --delete-secret-keys 0x6F252437134D9429

# Going to do the same for my newer, unexpired win@wincent.com key, because I don't use it.
gpg --export-secret-keys --armor --output 'win@wincent.com GPG key 0x6B746F3C37BAF280 expires 2024-01-12.asc' 0x6B746F3C37BAF280

# After adding the file to 1Password.
gpg --delete-secret-keys 0x6B746F3C37BAF280

# Prove that I can reimport it (note: need same passphrase used when exporting)
gpg --import 'win@wincent.com GPG key 0x6B746F3C37BAF280 expires 2024-01-12.asc'

# Final clean-up.
gpg --delete-secret-keys 0x6B746F3C37BAF280
rm 'win@wincent.com GPG key 0x6B746F3C37BAF280 expires 2024-01-12.asc'

# Generate separate identity for work.
gpg --full-generate-key
> (1) RSA and RSA (default)
> What keysize do you want? (3072) 4096
> Key is valid for? (0) 1y
> Real name: Greg Hurrell
> Email address: wincent@github.com
> Comment:

# Note that gpg actually creates a recovaction certificate by default.
# Give it a better name:
cd ~/.gnupg/openpgp-revocs.d
mv 2F4469E0C1FA72AAC0A560C962106B56923F3481.rev \
    'wincent@github.com GPG revocation certificate for key 0x62106B56923F3481.rev'

# After stashing that in 1Password, delete it:
rm 'wincent@github.com GPG revocation certificate for key 0x62106B56923F3481.rev'
cd -

# Sign the new key.
gpg --sign-key 0x62106B56923F3481

# Confirm it was signed.
gpg --list-signatures 0x62106B56923F3481

# Send it to default keyserver, which in my case is
# hkp://keys.gnupg.net via config in ~/.gnupg/gpg.conf:
#
#     keyserver hkp://keys.gnupg.net
#
# and a couple of others:
gpg --send-keys 0x62106B56923F3481
gpg --send-keys --keyserver pgp.mit.edu 0x62106B56923F3481
gpg --send-keys --keyserver keyserver.ubuntu.com 0x62106B56923F3481

# Export it for storage in 1Password, and also so I can get it onto my
# other machine:
gpg --export-secret-keys --armor --output 'wincent@github.com GPG key 0x62106B56923F3481 expires 2022-06-04.asc' 0x62106B56923F3481

# Then remove it from this machine:
rm 'wincent@github.com GPG key 0x62106B56923F3481 expires 2022-06-04.asc'
gpg --delete-secret-keys 0x62106B56923F3481

# Create a key revocation certificate for my main key.
# (Note that I am not going to do that for my win@wincent.com key;
# I'm just going to let that one die off slowly, because I am lazy).
gpg --gen-revoke --output 'greg@hurrell.net GPG revocation certificate for key 0xF962DC1A1941CCC4.rev' 0xF962DC1A1941CCC4
> 0 = No reason specified

# After that is safely in 1Password:
rm 'greg@hurrell.net GPG revocation certificate for key 0xF962DC1A1941CCC4.rev'

# Create a separate signing subkey so I can move my primary key "offline".
gpg --edit-key 0xF962DC1A1941CCC4
gpg> addkey
> (4) RSA (sign only)
> What keysize do you want? (3072) 4096
> Key is valid for? (0) 1y
> save

# So we now have:
#
#     sec  rsa4096/F962DC1A1941CCC4
#          created: 2014-05-20  expires: 2024-05-17  usage: SC
#          trust: ultimate      validity: ultimate
#     ssb  rsa4096/FF08BAF685DCF99C
#          created: 2014-05-20  expires: 2024-05-17  usage: E
#     ssb  rsa4096/3F73F6C4DFC3A0FA
#          created: 2021-06-04  expires: 2022-06-04  usage: S
#
# ie.
# - 0xF962DC1A1941CCC4: "sec" is the primary key
# - 0xFF08BAF685DCF99C: "ssb"/"usage E" is the standard encryption subkey
# - 0x3F73F6C4DFC3A0FA: "ssb"/"usage S" is the newly added signing subkey
#
# Now extract key and subkeys.
#
# First, the public key, which can go to GitHub (https://github.com/settings/keys).
# The UI there shows the primary key ID as well as the ID of the two subkeys:
# Email address:  greg@hurrell.net
# Key ID: F962DC1A1941CCC4
# Subkeys: FF08BAF685DCF99C, 3F73F6C4DFC3A0FA
gpg --export --armor --output 0xF962DC1A1941CCC4.pub.asc 0xF962DC1A1941CCC4

# You can delete this file if you want.
rm 0xF962DC1A1941CCC4.pub.asc

# Second, the secret key (this actually _includes_ the subkeys). This is the thing
# that should be backed up in 1Password.
gpg --export-secret-keys --armor --output 0xF962DC1A1941CCC4.primary.asc 0xF962DC1A1941CCC4

# Finally, just the subkeys. Technically, you don't need to back these up
# separately (because they are included in the above), and you don't need
# to keep this file around on the filesystem to reimport in subsequent steps
# as mention below.
gpg --export-secret-subkeys --armor --output 0xF962DC1A1941CCC4.subkeys.asc 0xF962DC1A1941CCC4

# Seeing as I haven't backed this one up to 1Password yet,
# I can (and must!) do that now and the new subkey will be included in
# the backup (ie. the `--export-secret-keys` one).
mv 0xF962DC1A1941CCC4.primary.asc 'greg@hurrell.net GPG key 0xF962DC1A1941CCC4 expires 2024-05-17.asc'
rm 'greg@hurrell.net GPG key 0xF962DC1A1941CCC4 expires 2024-05-17.asc'

# Most online guides say that we should now delete the primary key and
# re-import the subkeys. But you can say "y" to the prompt to delete the
# primary key and "n" for the subkeys, and that way you don't have to
# actually re-import the subkeys afterwards. We can just delete the corresponding
# backup file, as we didn't need it.
gpg --delete-secret-keys 0xF962DC1A1941CCC4
rm 0xF962DC1A1941CCC4.subkeys.asc

# Check that primary key now shown as "#sec" (offline) and subkeys are
# shown as "ssb" (present):
gpg --list-secret-keys --keyid-format=long --with-keygrip --with-fingerprint

# Note that even though I deleted my primary key, I can still send my new subkey
# to the key servers. You can verify this with:
#
#     http://keys.gnupg.net/ (and search for 0xF962DC1A1941CCC4)
#
# Note that it takes you to a page showing the primary key.
gpg --send-keys 0x3F73F6C4DFC3A0FA
gpg --send-keys --keyserver pgp.mit.edu 0x3F73F6C4DFC3A0FA
gpg --send-keys --keyserver keyserver.ubuntu.com 0x3F73F6C4DFC3A0FA

# In my dotfiles, I re-encrypted my secrets with the new subkey, and then
# proved that I could still decrypt them by clearing the agent:
gpg-connect-agent reloadagent /bye
OK

# See that the keys are not cached in the agent (ie. no "1" before "P").
# The IDs here correspond to keygrips.
gpg-connect-agent 'keyinfo --list' /bye
S KEYINFO E103527BC818CE252F3C7494A0AB8D1D8D6322C7 D - - - P - - -
S KEYINFO 0551973D09041D9CF62AD9DF6F5FA53321C4FB02 D - - - P - - -
S KEYINFO 5148CD9FB4E523100232C9B2B4CC4E12312D59F1 D - - - P - - -
OK

# I'm not actually sure what all those keygrips correspond to:
# E103527BC818CE2... is ???
# 0551973D09041D9... is my encryption subkey
# 5148CD9FB4E5231... is my signing subkey

# Killing agent (and having it auto-restart) does not remove the
# entries. So remove them all by hand.
#
# BEWARE: This not only deletes them from the agent, but also from
# the filesystem (eg. ~/.gnupg/private-keys-v1.d/$KEYGRIP.key), so
# if we do this, we will have to re-import.
gpg-connect-agent killagent /bye # Keys still there after restart.
gpg-connect-agent 'delete_key E103527BC818CE252F3C7494A0AB8D1D8D6322C7' /bye
gpg-connect-agent 'delete_key 0551973D09041D9CF62AD9DF6F5FA53321C4FB02' /bye
gpg-connect-agent 'delete_key 5148CD9FB4E523100232C9B2B4CC4E12312D59F1' /bye

# Now the reimport and cleanup.
gpg --import 'greg@hurrell.net GPG key 0xF962DC1A1941CCC4 expires 2024-05-17.asc'
gpg --delete-secret-keys 0xF962DC1A1941CCC4
rm 'greg@hurrell.net GPG key 0xF962DC1A1941CCC4 expires 2024-05-17.asc'

# Now decrypt. See pinentry prompt for key ID FF08BAF685DCF99C
# (main key ID F962DC1A1941CCC4), and see it actually work.
(cd $DOTFILES && vendor/git-cipher/bin/git-cipher log)

# On my Linux box, where I was already using a copy of my
# greg@hurrell.net key, I can do a similar test. Add the new subkey
# (from 1Password) and delete the primary.
gpg --import 'greg@hurrell.net GPG key 0xF962DC1A1941CCC4 expires 2024-05-17.asc'
gpg --delete-secret-keys 0xF962DC1A1941CCC4
rm 'greg@hurrell.net GPG key 0xF962DC1A1941CCC4 expires 2024-05-17.asc'

# Confirm that primary key is offline ("sec#") and subkeys ("ssb") are present.
gpg --list-secret-keys --keyid-format=long --with-keygrip --with-fingerprint

# Flush agent and do the test. Agent shows the two subkeys with no
# preset password cached. Just to be sure, blow them away and repeat
# the test.
#
# BEWARE: Once again, this deletes the keys on disk and requires a re-import.
gpg-connect-agent 'keyinfo --list' /bye
gpg-connect-agent 'delete_key 0551973D09041D9CF62AD9DF6F5FA53321C4FB02' /bye
gpg-connect-agent 'delete_key 5148CD9FB4E523100232C9B2B4CC4E12312D59F1' /bye
gpg --import 'greg@hurrell.net GPG key 0xF962DC1A1941CCC4 expires 2024-05-17.asc'
gpg --delete-secret-keys 0xF962DC1A1941CCC4
rm 'greg@hurrell.net GPG key 0xF962DC1A1941CCC4 expires 2024-05-17.asc'

# The actual test.
(cd $DOTFILES && vendor/git-cipher/bin/git-cipher log)

# Now, given that I am not planning on using my new github.com key
# to _sign_ anything yet, not going to create a subkey for that yet.
# (I just want to use it to decrypt files from my dotfiles repo.)
#
# On my work machine just need to import the secret key (after grabbing
# it from 1Password), then delete the the primary key, keeping only the
# subkey.
gpg --import 'wincent@github.com GPG key 0x62106B56923F3481 expires 2022-06-04.asc'
gpg --delete-secret-keys 0x62106B56923F3481 # delete primary, keep subkey
rm 'wincent@github.com GPG key 0x62106B56923F3481 expires 2022-06-04.asc'

# Test this again by doing a decryption in my dotfiles repo.
#
# Given ~/.gnupg/gpg-agent.conf:
#
#     allow-preset-passhprase
#
(cd $DOTFILES && vendor/git-cipher/bin/git-cipher log)

# Can also confirm that files are encrypted with the two keys using:
gpg --list-packets $SOME_ENCRYPTED_FILE
gpg: encrypted with 4096-bit RSA key, ID 424385B611E36E91, created 2021-06-04
      "Greg Hurrell <wincent@github.com>"
gpg: encrypted with 4096-bit RSA key, ID FF08BAF685DCF99C, created 2014-05-20
      "Greg Hurrell <greg@hurrell.net>"
...
```

~~One thing to note about all this, at least from the perspective of GitHub (at the time of writing), if you revoke any key (subkey or otherwise), _or_ if a key expires, [commits/tags signed with it no longer show up as verified](https://github.com/isaacs/github/issues/1099). FWIW, that sounds about right to me. If a key is revoked, I personally think that means all bets are off and GitHub is right not to show it as verified (it may even want to show the signing key as revoked, although I don't know if that is possible).~~ If a key expires, that's another story, but it is technically difficult to distinguish between "immutable object signed and verified before key expired" and "immutable object _ostensibly_ signed before expiry but received _after_ it"; ie. GitHub can't really know (and nobody can with certainty) when the commit was made. It can only know that it was signed with a key and that the key currently has a specific expiry date. (Update: As of June 2022, GitHub now [shows signatures as valid even after the signing keys have expired](https://github.blog/changelog/2022-05-31-improved-verification-of-historic-git-commit-signatures/)).

~~It seems that using non-expiring keys makes the problem mostly go away. You lose your "dead person's switch" though. On the balance, I think I probably still prefer expiring keys. For example, if I die and stop extending the expiry dates, and my commits/tags start showing up as unverified, that probably makes sense.~~

I am probably going to let subkeys expire and add new ones. If I wanted to extend a subkey expiry date, I would do:

```
gpg --edit-key 0xF962DC1A1941CCC4
> key 1 # ie. edit subkey 1
> expire
```

## See also

-   [My Twitter thread discussing this](https://twitter.com/wincent/status/1049976519978864640)
-   [Why expiry dates on master keys don't improve security](https://security.stackexchange.com/questions/14718/does-openpgp-key-expiration-add-to-security/79386#79386) (answer on Stack Exchange from [Jens Erat](https://superuser.com/users/102155/jens-erat)).
-   [Notes on key transitions in general](https://superuser.com/questions/613859/how-to-migrate-my-old-pgp-key-to-a-more-secure-algorithm/613926#613926) (again from Jens Erat).
-   [Examples of key transition statements](https://github.com/thenaterhood/gpg-key-transition-statements)
-   [Passphrase rotation notes](/wiki/Passphrase_rotation_notes)
