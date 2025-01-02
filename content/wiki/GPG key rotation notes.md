---
tags: wiki gpg
title: GPG key rotation notes
---

# Executive summary

-   **Have one primary key per "identity".** That generally means one tied to your personal email address and one tied to your work address. (We want the work one separate so it can be revoked if you leave your job.)
-   **Keep an expiry date on your primary key(s).** This is a "dead-person switch"; you can change the expiry date at will — there is no need to generate a new key.
-   **Keep the primary key(s) "offline".** As in, keep them in 1Password, and keep only the subkeys on your system(s).
-   **It's ok to have your subkeys on multiple machines.** If you must revoke a key, do it. You will need to put a new subkey on all machines. That's ok. Don't try to use a separate identity for each machine; use your personal identity on all personal machines and your work identity on all work machines.
-   **Use the default encryption subkey.** GPG will make an encryption subkey by default when you create your primary key; just use that. When the subkey expires, then you will create a new encryption subkey.
-   **Create a signing subkey if you need to.** A primary key _is_ a signing key, but because you're storing it offline, you need to generate a signing subkey if (and only if) you need to sign things. Like encryption subkeys, this should have an expiry date; you can periodically issue a new signing subkey.[^work]
-   **Synchronize expiry dates to reduce maintenance burden.** Line up the expiry dates on all the keys so that you can refresh them all at the same time. That generally means updating the expiry on your personal and work primary keys, and generating new encryption (and possibly signing) subkeys. 2 years is a good expiry interval (not too often to be burdensome, not so infrequent that you forget how to update.)

[^work]: ~~On my work machine, I don't use a signing key and I don't sign Git commits (I don't even _have_ a signing subkey). This is because most of my work is done on Codespaces, and getting GPG keys working there is a speed bump I'd rather avoid at this time (writing this in June 2022). For my personal machines, I do have a signing key.~~ This is no longer true; I have signing keys on both work and personal machines (but I still don't sign commits on Codespaces).

At the moment, I have two active GPG keys:

- [`4282ED4A05CC894D53A541C3F962DC1A1941CCC4`](https://keyserver.ubuntu.com/pks/lookup?search=4282ED4A05CC894D53A541C3F962DC1A1941CCC4&fingerprint=on&op=index), associated with my personal email address (`greg@hurrell.net`).
- [`CA35A4528D888CDF264D0A2A4838AEDCA8CE883C`](https://keyserver.ubuntu.com/pks/lookup?search=CA35A4528D888CDF264D0A2A4838AEDCA8CE883C&fingerprint=on&op=index), associated with my work email address (`greg.hurrell@datadoghq.com`).

I have those set up with the major repository hosts (eg. GitHub, GitLab, BitBucket, Codeberg, and Source Hut) so that they can display signed commits and tags as verified. Additionally, I have some older[^older] keys registered that I previously used to sign objects:

- [`62106B56923F3481`](https://keyserver.ubuntu.com/pks/lookup?search=62106B56923F3481&fingerprint=on&op=index), associated with my a previous work email address (`wincent@github.com`).
- [`6F252437134D9429`](https://keyserver.ubuntu.com/pks/lookup?search=6F252437134D9429&fingerprint=on&op=index), associated with another old address (`win@wincent.com`); this one expired on 2017-07-07, and one of the oldest objects I can find signed with that was [the Command-T 1.8 release tag](https://github.com/wincent/command-t/releases/tag/1.8) back in March 2014 (in [the 1.9 release tag](https://github.com/wincent/command-t/releases/tag/1.9) in May 2014 you can see I switched to my `F962DC1A1941CCC4`/`greg@hurrell.net` key).
- [`6B746F3C37BAF280`](https://keyserver.ubuntu.com/pks/lookup?search=6B746F3C37BAF280&fingerprint=on&op=index), also associated with `win@wincent.com`; it is set to expire on 2024-01-12, and I can't actually find any example objects that I ever signed with this one, but I am keeping it around just in case[^think].

[^older]: These ones are only registered with GitHub, because it is the main source host. Only one of them is registered with Source Hut (for some reason, it let me add `6B746F3C37BAF280` but rejects `6F252437134D9429`). Neither is registered with Codeberg (because Codeberg either requires me to verify the key by using it to sign a challenge — and I don't have the private key handy right now — or by adding `win@wincent.com` as a verified email address, which I don't want to do because I retired that one from circulation a while ago.) GitLab rejects both keys as invalid, ~~and BitBucket doesn't support GPG keys at all despite there being [a ticket open for it](https://jira.atlassian.com/browse/BCLOUD-3166) for over 12 year now[^finally]~~.

[^finally]: As of 2025, it appears that BitBucket finally supports GPG keys...

[^think]: If I had to guess, I'd say I probably created this second key in some past time when I thought I should have one key per machine, instead of one key per identity.

**Note:** Throughout this document I use a mix of fingerprints (eg. `4282ED4A05CC894D53A541C3F962DC1A1941CCC4` and `CA35A4528D888CDF264D0A2A4838AEDCA8CE883C`) and long key IDs (eg. `F962DC1A1941CCC4` and `4838AEDCA8CE883C`), but not short key IDs (eg. `1941CCC4` and `A8CE883C`). The difference between these is [explained here](https://security.stackexchange.com/a/84281).

# Example creation and rotation procedures

## Bringing a new `greg.hurrell@datadoghq.com` key into the rotation

Create a new key:

```
$ gpg --full-generate-key
Please select what kind of key you want:
   (9) ECC (sign and encrypt) *default*
Your selection? 9
Please select which elliptic curve you want:
   (1) Curve 25519 *default*
Your selection? 1
Please specify how long the key should be valid.
Key is valid for? (0) 365
Key expires at Wed  4 Jun 14:36:51 2025 CEST
gpg: revocation certificate stored as '/Users/greg.hurrell/.gnupg/openpgp-revocs.d/CA35A4528D888CDF264D0A2A4838AEDCA8CE883C.rev'
public and secret key created and signed.

pub   ed25519 2024-06-04 [SC] [expires: 2025-06-04]
      CA35A4528D888CDF264D0A2A4838AEDCA8CE883C
uid                      Greg Hurrell <greg.hurrell@datadoghq.com>
sub   cv25519 2024-06-04 [E] [expires: 2025-06-04]
```

Give the revocation certificate a better name, after grabbing the long hex-formatted key ID (`0x4838AEDCA8CE883C`) with `gpg --list-keys --keyid-format 0xlong`:

```
$ cd ~/.gnupg/openpgp-revocs.d
$ mv CA35A4528D888CDF264D0A2A4838AEDCA8CE883C.rev \
   'greg.hurrell@datadoghq.com GPG key revocation certificate for key 0x4838AEDCA8CE883C.rev'
```

After stashing it in 1Password, delete it:

```
rm 'greg.hurrell@datadoghq.com GPG key revocation certificate for key 0x4838AEDCA8CE883C.rev'
```

Create a new signing subkey (I don't need to create an encryption subkey) because you get one by default:

```
$ gpg --edit-key CA35A4528D888CDF264D0A2A4838AEDCA8CE883C
gpg> addkey
Please select what kind of key you want:
  (10) ECC (sign only)
Your selection? 10
Please select which elliptic curve you want:
   (1) Curve 25519 *default*
Your selection? 1
Please specify how long the key should be valid.
Key is valid for? (0) 365
Key expires at Wed  4 Jun 15:01:58 2025 CEST
Is this correct? (y/N) y
Really create? (y/N) y
gpg> quit
Save changes? (y/N) y
```

Temporarily import my `greg@hurrell.net` key on this machine (by grabbing it from 1Password) and then:

```
gpg --import "$HOME/Downloads/greg@hurrell.net GPG key 0xF962DC1A1941CCC4 expires 2024-06-14.asc"
```

Use that to sign the new key:

```
gpg --default-key 0xF962DC1A1941CCC4 --sign-key CA35A4528D888CDF264D0A2A4838AEDCA8CE883C
```

Let's export the new keys; first, a public key for uploading to GitHub:

```
gpg --export --armor --output 0x4838AEDCA8CE883C.pub.asc 0x4838AEDCA8CE883C
```

And export the private key (which includes subkeys) for 1Password:

```
gpg --export-secret-keys --armor --output 0x4838AEDCA8CE883C.asc 0x4838AEDCA8CE883C
```

Seeing as we're here, we're going to do key rotation and expiry update on the `greg@hurrell.net` key (specifically, we set the expiry on the primary key to 365 days, then we add new signing and encryption subkeys):

```
$ gpg --edit-key 4282ED4A05CC894D53A541C3F962DC1A1941CCC4
gpg> expire
Changing expiration time for the primary key.
Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
Key is valid for? (0) 365
Key expires at Wed  4 Jun 15:12:03 2025 CEST
gpg: WARNING: Your encryption subkey expires soon.
gpg: You may want to change its expiration date too.
gpg> addkey
Please select what kind of key you want:
  (10) ECC (sign only)
Your selection? 10
Please select which elliptic curve you want:
   (1) Curve 25519 *default*
Your selection? 1
Please specify how long the key should be valid.
Key is valid for? (0) 365
Key expires at Wed  4 Jun 15:13:33 2025 CEST
Is this correct? (y/N) y
Really create? (y/N) y
gpg> addkey
Please select what kind of key you want:
  (12) ECC (encrypt only)
Your selection? 12
Please select which elliptic curve you want:
   (1) Curve 25519 *default*
Your selection? 1
Please specify how long the key should be valid.
Key is valid for? (0) 365
Key expires at Wed  4 Jun 15:14:03 2025 CEST
Is this correct? (y/N) y
Really create? (y/N) y
gpg> quit
Save changes? (y/N) y
```

Now we export public versions for use in GitHub (and GitLab, and Source Hut, and Codeberg) and the private version for safe storage in 1Password:

```
gpg --export --armor --output 0xF962DC1A1941CCC4.pub.asc 0xF962DC1A1941CCC4
gpg --export-secret-keys --armor --output 0xF962DC1A1941CCC4.asc 0xF962DC1A1941CCC4
```

We update the key in these places:

-   [GitHub GPG settings](https://github.com/settings/gpg/new)
-   [GitLab GPG settings](https://gitlab.com/-/profile/gpg_keys)
-   [BitBucket GPG settings](https://bitbucket.org/account/settings/gpg-keys)
-   [Source Hut key settings](https://meta.sr.ht/keys)
-   [Codeberg key settings](https://codeberg.org/user/settings/keys)

We try to update my dotfiles secrets, but that fails at first with:

```
[error] `gpg --armor --quiet --batch --no-tty --yes --recipient 'greg@hurrell.net' --recipient 'greg.hurrell@datadoghq.com' --output - --encrypt` exited with status 2
gpg: EF8C0848A6F8A84D: There is no assurance this key belongs to the named user
gpg: [stdin]: encryption failed: Unusable public key
```

So, set trust level to ultimate:

```
gpg --edit-key 4282ED4A05CC894D53A541C3F962DC1A1941CCC4
gpg --edit-key CA35A4528D888CDF264D0A2A4838AEDCA8CE883C
```

Then:

```
bin/git-cipher init
bin/git-cipher unlock
bin/git-cipher init --force
```

Verify that things got re-encrypted with:

```
gpg --list-packets .git-cipher/secrets.json.asc
```

Send new keys to keyservers (note that you might have to grab an IPv4 address for `keyserver.ubuntu.com` and use that if you get "No route to host" on the first try:

```
gpg --send-keys --keyserver keyserver.ubuntu.com CA35A4528D888CDF264D0A2A4838AEDCA8CE883C
gpg --send-keys --keyserver 185.125.188.27 CA35A4528D888CDF264D0A2A4838AEDCA8CE883C
gpg --send-keys --keyserver pgp.mit.edu CA35A4528D888CDF264D0A2A4838AEDCA8CE883C

gpg --send-keys --keyserver keyserver.ubuntu.com 4282ED4A05CC894D53A541C3F962DC1A1941CCC4
gpg --send-keys --keyserver 185.125.188.27 4282ED4A05CC894D53A541C3F962DC1A1941CCC4
gpg --send-keys --keyserver pgp.mit.edu 4282ED4A05CC894D53A541C3F962DC1A1941CCC4
```

Now we're going to remove the `greg@hurrell.net` key, as it should no longer be needed:

```
gpg --delete-secret-keys F962DC1A1941CCC4
```

And we're going to take the primary `greg.hurrell@datadoghq.com` key offline — **NOTE:** Say "yes" to delete the primary secret key but "no" to delete the subkeys:

```
gpg --delete-secret-keys 4838AEDCA8CE883C
```

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

-   Normally, when you create a key you get a `sec` (secret) primary key which is also a signing key (usage `SC`: `S` for signing and `C` for primary). By default a `ssb` (subkey) key is also generated, with usage `E` (encryption).
-   Here we see no `sec`, only a `pub` (public) key, which is the public part of the primary key; usage `SC` means signing/primary key; the private part of this key is offline in 1Password.
-   `ssb` is the standard sub-key, usage `E` means encryption.

So, our goal then is to:

1. Import the private primary key from 1Password.
2. Bump the expiry date on it.
3. Generate a new signing subkey with a matching expiry date.
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

Repeat the `addkey` command to create a new signing subkey as well. This time, you'll choose:

```
   (4) RSA (sign only)
```

Now, publish:

```bash
gpg --send-keys 0x62106B56923F3481
gpg --send-keys --keyserver pgp.mit.edu 0x62106B56923F3481
gpg --send-keys --keyserver keyserver.ubuntu.com 0x62106B56923F3481
```

Note, if you see a failure to send like this:

```
gpg: keyserver send failed: End of file
```

You may be seeing [a DNS failure as described here](https://unix.stackexchange.com/a/673325/140622); one solution is to look up the IP addresses and use those instead:

```
dig +short keyserver.ubuntu.com | head -n1
gpg --send-keys --keyserver 162.213.33.9 0x62106B56923F3481
dig +short pgp.mit.edu | head -n1
dig +short cryptonomicon.mit.edu | head -n1
gpg --send-keys --keyserver 18.9.60.141 0x62106B56923F3481
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

Which we paste into:

-   [GitHub GPG settings](https://github.com/settings/gpg/new)
-   [GitLab GPG settings](https://gitlab.com/-/profile/gpg_keys)
-   [BitBucket GPG settings](https://bitbucket.org/account/settings/gpg-keys)
-   [Source Hut key settings](https://meta.sr.ht/keys)
-   [Codeberg key settings](https://codeberg.org/user/settings/keys) (additionally, Codeberg offers you the ability to "verify" the key by using it to sign a token).

**Note:** You have to delete the old version of the key from the UI _first_ before adding the new version in GitHub, GitLab, and Codeberg, otherwise they declare it is a duplicate. Source Hut is the odd one out here, letting you add the new version of the key without deleting the old one.

You can then discard the file:

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
     created: 2021-06-04  expires: 2024-06-14  usage: SC
     trust: ultimate      validity: ultimate
ssb  rsa4096/424385B611E36E91
     created: 2021-06-04  expired: 2022-06-04  usage: E
ssb  rsa4096/A81880D9C0B03264
     created: 2022-06-11  expired: 2023-06-11  usage: E
ssb  rsa4096/9F6B84B5B1E9955E
     created: 2022-06-20  expired: 2023-06-11  usage: S
ssb  rsa4096/CA4586F711EDDDF6
     created: 2023-06-15  expires: 2024-06-14  usage: E
ssb  rsa4096/568F2553F25CB8CF
     created: 2023-06-15  expires: 2024-06-14  usage: S
[ultimate] (1). Greg Hurrell <wincent@github.com>
```

-   We see `pub` (public) instead of `sec` (secret), indicating that our primary secret key is now offline.
-   We see our expired and unexpired `E` (encryption) subkeys, as well as our expired and unexpired `S` (signing) subkeys.

The main reason I even have this key is so that I can encrypt and decrypt sensitive dotfiles in public repos, so let's test that out.

Inspect state in the GPG agent with `gpg-connect-agent 'keyinfo --list' /bye`:

```
S KEYINFO 65E2EC218B70472DE703EE591DD04665E6C3D311 D - - - C - - -
S KEYINFO B608A117C14AF4CEC5C5CC299048DA3B1D95AC6C D - - - C - - -
S KEYINFO E4E775C7F78DBF4872E72E4C58B1A35B253259ED D - - - P - - -
S KEYINFO 52577084CEE4B10AC7E75601C6BB9D8D15C883BC D - - - P - - -
OK
```

We'll test this out by re-encrypting the secrets using `bin/git-cipher init`. If you see an error like this:

```
gpg: error retrieving 'greg@hurrell.net' via WKD: No data
gpg: greg@hurrell.net: skipped: No data
gpg: [stdin]: encryption failed: No data
```

it may be concealing [the real underlying issue behind a misleading error message](https://unix.stackexchange.com/questions/405599/gpg-error-retrieving-meexample-com-via-wkd#comment725629_405599), which is that the `greg@hurrell.net` subkey is now expired. (If you do the rotation _before_ the expiry, you won't see this error, but if you do, you'll have to rotate the keys on the personal laptop (see below) and _then_ do the test.)

## Rotating my `greg@hurrell.net` keys

Starting on my personal laptop, examine the current state of the key:

```shell
$ gpg --edit-key greg@hurrell.net

Secret subkeys are available.

gpg: checking the trustdb
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
gpg: depth: 0  valid:   2  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 2u
gpg: next trustdb check due at 2024-05-17
pub  rsa4096/F962DC1A1941CCC4
     created: 2014-05-20  expires: 2024-05-17  usage: SC
     trust: ultimate      validity: ultimate
ssb  rsa4096/FF08BAF685DCF99C
     created: 2014-05-20  expires: 2024-05-17  usage: E
ssb  rsa4096/3F73F6C4DFC3A0FA
     created: 2021-06-04  expired: 2022-06-04  usage: S
[ultimate] (1). Greg Hurrell <greg@hurrell.net>
```

Primary key is offline — only the public (`pub`) part is online — so pull the offline copy out of 1Password and import it:

```shell
$ gpg --import 'greg@hurrell.net GPG key 0xF962DC1A1941CCC4 expires 2024-05-17.asc'
gpg: key F962DC1A1941CCC4: "Greg Hurrell <greg@hurrell.net>" not changed
gpg: key F962DC1A1941CCC4: secret key imported
gpg: Total number processed: 1
gpg:              unchanged: 1
gpg:       secret keys read: 1
gpg:   secret keys imported: 1
gpg:  secret keys unchanged: 1
```

Compare output of `gpg --edit-key greg@hurrell.net`, and see that `pub` (public) has now changed to `sec` (secret):

```
Secret key is available.

sec  rsa4096/F962DC1A1941CCC4
     created: 2014-05-20  expires: 2024-05-17  usage: SC
     trust: ultimate      validity: ultimate
ssb  rsa4096/FF08BAF685DCF99C
     created: 2014-05-20  expires: 2024-05-17  usage: E
ssb  rsa4096/3F73F6C4DFC3A0FA
     created: 2021-06-04  expired: 2022-06-04  usage: S
[ultimate] (1). Greg Hurrell <greg@hurrell.net>
```

Reset the expiry of the primary to synchronize it with work key (ie. 1 year):

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
Key expires at Sun 11 Jun 19:53:50 2023 CEST
Is this correct? (y/N) y

sec  rsa4096/F962DC1A1941CCC4
     created: 2014-05-20  expires: 2023-06-11  usage: SC
     trust: ultimate      validity: ultimate
ssb  rsa4096/FF08BAF685DCF99C
     created: 2014-05-20  expires: 2024-05-17  usage: E
ssb  rsa4096/3F73F6C4DFC3A0FA
     created: 2021-06-04  expired: 2022-06-04  usage: S
[ultimate] (1). Greg Hurrell <greg@hurrell.net>
```

Create a new signing subkey to replace the expired one:

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
Your selection? 4
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
Key expires at Sun 11 Jun 19:54:58 2023 CEST
Is this correct? (y/N) y
Really create? (y/N) y
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.

sec  rsa4096/F962DC1A1941CCC4
     created: 2014-05-20  expires: 2023-06-11  usage: SC
     trust: ultimate      validity: ultimate
ssb  rsa4096/FF08BAF685DCF99C
     created: 2014-05-20  expires: 2024-05-17  usage: E
ssb  rsa4096/3F73F6C4DFC3A0FA
     created: 2021-06-04  expired: 2022-06-04  usage: S
ssb  rsa4096/70516DBB88E4F779
     created: 2022-06-11  expires: 2023-06-11  usage: S
[ultimate] (1). Greg Hurrell <greg@hurrell.net>
```

Create a new encryption subkey to replace the existing one — it is not expired yet, but we'll take the opportunity to sync up with my work key by having a key that expires on the same date:

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
Key expires at Sun 11 Jun 19:56:23 2023 CEST
Is this correct? (y/N) y
Really create? (y/N) y
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.

sec  rsa4096/F962DC1A1941CCC4
     created: 2014-05-20  expires: 2023-06-11  usage: SC
     trust: ultimate      validity: ultimate
ssb  rsa4096/FF08BAF685DCF99C
     created: 2014-05-20  expires: 2024-05-17  usage: E
ssb  rsa4096/3F73F6C4DFC3A0FA
     created: 2021-06-04  expired: 2022-06-04  usage: S
ssb  rsa4096/70516DBB88E4F779
     created: 2022-06-11  expires: 2023-06-11  usage: S
ssb  rsa4096/F3B7FB88B7466831
     created: 2022-06-11  expires: 2023-06-11  usage: E
[ultimate] (1). Greg Hurrell <greg@hurrell.net>

gpg> save
```

Publish:

```bash
gpg --send-keys 0xF962DC1A1941CCC4
gpg --send-keys --keyserver pgp.mit.edu 0xF962DC1A1941CCC4
gpg --send-keys --keyserver keyserver.ubuntu.com 0xF962DC1A1941CCC4
```

Export the public key, including the subkeys, for use in GitHub:

```bash
gpg --export --armor --output 0xF962DC1A1941CCC4.pub.asc 0xF962DC1A1941CCC4
```

After pasting that into the [GitHub GPG settings](https://github.com/settings/gpg/new), [GitLab GPG settings](https://gitlab.com/-/profile/gpg_keys), [BitBucket GPG settings](https://bitbucket.org/account/settings/gpg-keys), [Source Hut key settings](https://meta.sr.ht/keys), and [Codeberg key settings](https://codeberg.org/user/settings/keys), replacing the previous copy (ie. delete the old one, then add the new one; only Source Hut lets you do it in the opposite order because the other pages complain that the key is a duplicate), we can discard the file:

```bash
rm 0xF962DC1A1941CCC4.pub.asc
```

Dump everything for storage in 1Password (when storing, tag the item with `gpg` and archive the expired key):

```shell
gpg --export-secret-keys --armor --output 'greg@hurrell.net GPG key 0xF962DC1A1941CCC4 expires 2023-06-11.asc' 0xF962DC1A1941CCC4
```

After storing in 1Password, delete from local filesystem:

```bash
shred -u \
  greg@hurrell.net\ GPG\ key\ 0xF962DC1A1941CCC4\ expires\ 2023-06-11.asc \
  greg@hurrell.net\ GPG\ key\ 0xF962DC1A1941CCC4\ expires\ 2024-05-17.asc
```

Delete from local keyring:

```
# Say "yes" to deleting the primary secret key, but not the subkeys.
# Do this outside of tmux, to avoid it bugging out.
gpg --delete-secret-keys greg@hurrell.net
```

Review final result with `gpg --edit-key greg@hurrell.net`:

```
Secret subkeys are available.

pub  rsa4096/F962DC1A1941CCC4
     created: 2014-05-20  expires: 2023-06-11  usage: SC
     trust: ultimate      validity: ultimate
ssb  rsa4096/FF08BAF685DCF99C
     created: 2014-05-20  expires: 2024-05-17  usage: E
ssb  rsa4096/3F73F6C4DFC3A0FA
     created: 2021-06-04  expired: 2022-06-04  usage: S
ssb  rsa4096/70516DBB88E4F779
     created: 2022-06-11  expires: 2023-06-11  usage: S
ssb  rsa4096/F3B7FB88B7466831
     created: 2022-06-11  expires: 2023-06-11  usage: E
[ultimate] (1). Greg Hurrell <greg@hurrell.net>
```

As a test, we'll re-encrypt my dotfiles, but first, inspect state of the GPG agent with `gpg-connect-agent 'keyinfo --list' /bye`:

```
S KEYINFO F72941DFCE9B41F3FDEF46000858514A22278F94 D - - - P - - -
S KEYINFO 0551973D09041D9CF62AD9DF6F5FA53321C4FB02 D - - - P - - -
S KEYINFO 5148CD9FB4E523100232C9B2B4CC4E12312D59F1 D - - - P - - -
S KEYINFO F4B40B7FEF3FC9B99A94E317C202E33A8A5B79F9 D - - - P - - -
OK
```

Via `gpg --list-keys --keyid-format=long --with-keygrip --with-fingerprint`, we can ascertain that the `F72941...` keygrip corresponds to my new encryption subkey, `055197...` corresponds to my new signing subkey, `F4B40B...` is my previous signing subkey, and I have no idea what `5148CD...` corresponds to.

Anyway, onto the dotfiles; before we start, let's get my latest work keys seeing as I just updated those on my work machine but my personal laptop doesn't have them:

```shell
$ gpg --recv-keys 0x62106B56923F3481

gpg: key 62106B56923F3481: "Greg Hurrell <wincent@github.com>" 2 new signatures
gpg: key 62106B56923F3481: "Greg Hurrell <wincent@github.com>" 1 new subkey
gpg: Total number processed: 1
gpg:            new subkeys: 1
gpg:         new signatures: 2
```

Now for the real deal:

```shell
$ cd $DOTFILES

$ bin/git-cipher ls # Make sure I have no local changes.

$ bin/git-cipher init # Dry run: should see something like this:
preserving existing secrets
[warning] using default --recipients value of greg@hurrell.net,wincent@github.com; pass something else to override
[warning] not writing $DOTFILES/.git-cipher/secrets.json.asc because it already exists; re-run with --force to override

$ bin/git-cipher init --force # Real deal.
```

Confirm the secrets have been re-encrypted with the new key:

```shell
$ gpg --list-packets .git-cipher/secrets.json.asc
gpg: encrypted with rsa4096 key, ID A81880D9C0B03264, created 2022-06-11
      "Greg Hurrell <wincent@github.com>"
gpg: encrypted with rsa4096 key, ID F3B7FB88B7466831, created 2022-06-11
      "Greg Hurrell <greg@hurrell.net>"
...
```

Commit the changed files. Because we have a signing key already set up we can confirm that the right signing subkey was used. First remind myself of the keyid; apparently, [using short IDs is bad](https://evil32.com/), so we use the long form:

```shell
$ gpg --list-secret-keys --keyid-format=long
/Users/wincent/.gnupg/pubring.kbx
---------------------------------
sec#  rsa4096/F962DC1A1941CCC4 2014-05-20 [SC] [expires: 2023-06-11]
      4282ED4A05CC894D53A541C3F962DC1A1941CCC4
uid                 [ultimate] Greg Hurrell <greg@hurrell.net>
ssb   rsa4096/FF08BAF685DCF99C 2014-05-20 [E] [expires: 2024-05-17]
ssb   rsa4096/70516DBB88E4F779 2022-06-11 [S] [expires: 2023-06-11]
ssb   rsa4096/F3B7FB88B7466831 2022-06-11 [E] [expires: 2023-06-11]
```

You can either:

-   Make the commit with an explicit ID; eg. `git commit -S4282ED4A05CC894D53A541C3F962DC1A1941CCC4` (note the explicit use of the primary key ID, even though it is offline — Git/GPG know to select the last-created signing subkey ID instead, which would be ID `70516DBB88E4F779`).
-   In my testing, `git commit -S` with no argument works too; GPG guesses the right default secret key.
-   Skip the `-S` entirely because we have `git config --global commit.gpgSign true` set.

This test shows that the right (primary) key is automatically chosen:

```shell
$ echo hello | gpg -s
gpg: using "1941CCC4" as default secret key for signing
...
```

Verify the commit is good; note the correct key (the most recently created signing subkey) was automatically used:

```shell
$ git verify-commit HEAD
gpg: Signature made Sat 11 Jun 20:41:43 2022 CEST
gpg:                using RSA key C7C225A18975180C4485A1E070516DBB88E4F779
gpg: Good signature from "Greg Hurrell <greg@hurrell.net>" [ultimate]
```

The same info can be seen with `git show --show-signature`:

```
commit d64c9be31a42678b668434968cfa09be21e498f9 (HEAD -> main)
gpg: Signature made Sat 11 Jun 20:41:43 2022 CEST
gpg:                using RSA key C7C225A18975180C4485A1E070516DBB88E4F779
gpg: Good signature from "Greg Hurrell <greg@hurrell.net>" [ultimate]
Author: Greg Hurrell <greg@hurrell.net>
Date:   Sat Jun 11 20:40:07 2022 +0200

    chore: update encrypted files with new key

...
```

Push [the update](https://github.com/wincent/wincent/commit/d64c9be31a42678b668434968cfa09be21e498f9) to GitHub.

Now, two minor follow-ups:

First, just as we pulled in the new work keys onto the personal machine, we should pull the new personal keys onto the work machine:

```shell
$ gpg --recv-keys 0xF962DC1A1941CCC4
gpg: key F962DC1A1941CCC4: "Greg Hurrell <greg@hurrell.net>" 3 new signatures
gpg: key F962DC1A1941CCC4: "Greg Hurrell <greg@hurrell.net>" 2 new subkeys
gpg: Total number processed: 1
gpg:            new subkeys: 2
gpg:         new signatures: 3
```

Similarly, on my Linux desktop machine I need to do the related changes:

```shell
$ gpg --recv-keys 0x62106B56923F3481 0xF962DC1A1941CCC4
```

That will pull the public parts down; we need to get the secret parts out of 1Password:

```
$ gpg --import 'greg@hurrell.net GPG key 0xF962DC1A1941CCC4 expires 2023-06-11.asc'
$ gpg --delete-secret-keys greg@hurrell.net # Delete primary secret key, keep subkeys
$ rm 'greg@hurrell.net GPG key 0xF962DC1A1941CCC4 expires 2023-06-11.asc'
$ cd $DOTFILES
$ git pull
$ git show --show-signature # See signature get verified.
$ bin/git-cipher decrypt # See we can still decrypt files.
```

# Older notes

## Details

My current key isn't expiring until 2024-05-17, but I wanted to leave some notes here to remind me that the next time I transition to a new key I should create the master key without an expiry date and instead produce a key revocation certificate stored in a "safe location" (might be in a 1Password vault or printed on paper in a safe somewhere).

> The expiry date is no reasonable mechanism to protect the primary key, and you should have a revocation certificate at hand.

Actually, I'm persuaded by [this argument](https://riseup.net/en/security/message-security/openpgp/best-practices#use-a-strong-primary-key) that:

> People think that they don't want their keys to expire, but you actually do. Why? Because you can always extend your expiration date, even after it has expired! This "expiration" is actually more of a safety valve or "dead-person switch" that will automatically trigger at some point.

So what I am going to do is:

-   (Preliminary: clean out old private primary keys)
-   Leave the expiry date on my current primary key.
-   Generate a revocation certificate and store it somewhere pretty safe (eg. 1Password).
-   Optionally, create a new subkey for encryption (note: [primary key is a signing key, and an encryption subkey is automatically generated](https://wiki.debian.org/Subkeys), so can actually just use that).
-   Create a revocation certificate for that too, for good measure (again, in 1Password).
-   Store my primary key offline (again, in somewhere like 1Password).
-   Update primary key expiry date before it expires.
-   When expiry date on encryption subkey expires, rotate that (don't need to extend that one; can just rotate).

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
