---
tags: wiki gpg
title: GPG key rotation notes
---

My current key isn't expiring until 2024-05-17, but I wanted to leave some notes here to remind me that the next time I transition to a new key I should create the master key without an expiry date and instead produce a key revocation certificate stored in a "safe location" (might be in a 1Password vault or printed on paper in a safe somewhere).

> The expiry date is no reasonable mechanism to protect the primary key, and you should have a revocation certificate at hand.

Actually, I'm persuaded by [this argument](https://riseup.net/en/security/message-security/openpgp/best-practices#use-a-strong-primary-key) that:

> People think that they don't want their keys to expire, but you actually do. Why? Because you can always extend your expiration date, even after it has expired! This "expiration" is actually more of a safety valve or "dead-man switch" that will automatically trigger at some point.

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

# Process

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
# actually re-import th subkeys aftewards. We can just delete the corresponding
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
gpg-connect-agent killagent /bye # Keys still there after restart.
gpg-connect-agent 'delete_key E103527BC818CE252F3C7494A0AB8D1D8D6322C7' /bye
gpg-connect-agent 'delete_key 0551973D09041D9CF62AD9DF6F5FA53321C4FB02' /bye
gpg-connect-agent 'delete_key 5148CD9FB4E523100232C9B2B4CC4E12312D59F1' /bye

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
gpg-connect-agent 'keyinfo --list' /bye
gpg-connect-agent 'delete_key 0551973D09041D9CF62AD9DF6F5FA53321C4FB02' /bye
gpg-connect-agent 'delete_key 5148CD9FB4E523100232C9B2B4CC4E12312D59F1' /bye
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
# TODO: write steps here, because I need to get pinentry and the agent
# working on this machine.
```

One thing to note about all this, at least from the perspective of GitHub (at the time of writing), if you revoke any key (subkey or otherwise), _or_ if a key expires, [commits/tags signed with it no longer show up as verified](https://github.com/isaacs/github/issues/1099). FWIW, that sounds about right to me. If a key is revoked, I personally think that means all bets are off and GitHub is right not to show it as verified (it may even want to show the signing key as revoked, although I don't know if that is possible). If a key expires, that's another story, but it is technically difficult to distinguish between "immutable object signed and verified before key expired" and "immutable object _ostensibly_ signed before expiry but received _after_ it"; ie. GitHub can't really know (and nobody can with certainty) when the commit was made. It can only know that it was signed with a key and that the key currently has a specific expiry date.

It seems that using non-expiring keys makes the problem mostly go away. You lose your "dead man's switch" though. On the balance, I think I probably still prefer expiring keys. For example, if I die and stop extending the expiry dates, and my commits/tags start showing up as unverified, that probably makes sense.

I am probably going to let subkeys expire and add new ones. If I wanted to extend a subkey expiry date, I would do:

```
gpg --edit-key 0xF962DC1A1941CCC4
> key 1 # ie. edit subkey 1
> expire
```

# See also

-   [My Twitter thread discussing this](https://twitter.com/wincent/status/1049976519978864640)
-   [Why expiry dates on master keys don't improve security](https://security.stackexchange.com/questions/14718/does-openpgp-key-expiration-add-to-security/79386#79386) (answer on Stack Exchange from [Jens Erat](https://superuser.com/users/102155/jens-erat)).
-   [Notes on key transitions in general](https://superuser.com/questions/613859/how-to-migrate-my-old-pgp-key-to-a-more-secure-algorithm/613926#613926) (again from Jens Erat).
-   [Examples of key transition statements](https://github.com/thenaterhood/gpg-key-transition-statements)
-   [Passphrase rotation notes](/wiki/Passphrase_rotation_notes)
