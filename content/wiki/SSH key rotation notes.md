---
tags: wiki ssh
title: SSH key rotation notes
---

I store a detailed copy of these notes (with concrete paths and hostnames etc) on my personal laptop at `~/.ssh/NOTES.md`, but I'm including a somewhat more general version here.

# Policy

-   Use [ED25519](https://en.wikipedia.org/wiki/EdDSA) keys (smaller than, faster than, and at least as secure as, RSA keys).
-   Create one key per machine so that they can be independently revoked if compromised (or, for example, if I switch jobs and have to decommission a work machine).
-   Use the same key for everything (ie. one key that can push to both GitHub and GitLab etc, rather than different keys for different target hosts).
-   Rotate keys once per year, in January, not for security, but for practice (the rotation procedure is complicated enough that I want to prove that I can do it).
-   Use filenames of the form `id_ed25519_$DATE{,.pub}` (eg. `id_ed25519_20230128.pub` etc).
-   Make symlinks at `~/.ssh/id_ed25519` pointing to the real keys so that `ssh` can find/try it by default without needing to explicitly set up `IdentityFile` in the config.
-   Store backups in 1Password.
-   Keep the private keys encrypted (duh).

# Procedure

1.  On work laptop:
    1.  Create new key etc.
        ```
        ssh-add # Make sure old key is in agent; in case we need it to connect to Linux desktop.
        cd ~/.ssh
        ssh-keygen -t ed25519 -f id_ed25519_20240103
        ln -sf id_ed25519_20240103 id_ed25519
        ln -sf id_ed25519_20240103.pub id_ed25519.pub
        rm id_ed25519_2023*
        ```
    2.  Add key files to 1Password, tagged with "ssh", and noting the encryption passphrase[^trick].
    3.  Mark old key files as archived in 1Password.
2.  On personal laptop:
    1.  Create new key etc.
        ```
        ssh-add # Make sure old key is in agent; will need it to connect to Linux desktop and push.
        cd ~/.ssh
        ssh-keygen -t ed25519 -f id_ed25519_20230129
        ln -sf id_ed25519_20230129 id_ed25519
        ln -sf id_ed25519_20230129.pub id_ed25519.pub
        rm id_ed25519_2022*
        ```
    2.  Add key files to 1Password, tagged with "ssh", and noting the encryption passphrase.
    3.  Mark old key files as archived in 1Password.
    4.  SSH to linux desktop and:
        1.  Add new personal laptop and work laptop public keys to `~/.ssh/authorized_keys`.
        2.  Remove old personal laptop and work laptop public keys from `~/.ssh/authorized_keys`.
        3.  Create new key etc
            ```
            ssh-add # Make sure old key is in agent; will need it to connect to Linux desktop.
            cd ~/.ssh
            ssh-keygen -t ed25519 -f id_ed25519_20230129
            ln -sf id_ed25519_20230129 id_ed25519
            ln -sf id_ed25519_20230129.pub id_ed25519.pub
            rm id_ed25519_2022*
            ```
        4.  Add key files to 1Password, tagged with "ssh", and noting the encryption passphrase.
        5.  Mark old key files as archived in 1Password.
    5.  Update the Ansible config that I use to manage my EC2 hosts.
        1.  Copy public keys into `inventory.yml` under `ssh_public_keys`.
        2.  Deploy:
            ```
            ./run install --tags=authorized_keys
            ```
        3.  Manually remove old keys from hosts (Ansible only adds keys, it doesn't remove the old ones).
    6.  Import new personal laptop key into AWS console.
        1. Go to AWS console → EC2 → Key pairs → Actions → Import key pair; note the name must be unique, so append the date.
        2. Note the key ID
        3. Paste the key ID into my `create-instance` script in my Ansible configs.
        4. Remove the old key.
    7.  Rotate my Git backups key.
3.  Add new public keys to, and remove old keys from:
    1.  GitHub (https://github.com/settings/keys) — all "Authentication", not "Signing" keys; note that the work key should be authorized for SSO with the GitHub organization.
    2.  GitLab (https://gitlab.com/-/user_settings/ssh_keys): same keys as GitHub, again just for "Authentication", no expiry dates.
    3.  BitBucket (https://bitbucket.org/account/settings/ssh-keys/): same keys as GitHub.
    4.  Codeberg (https://codeberg.org/user/settings/keys): same keys as GitHub, although we don't make use of the backup key here yet; Codeberg also offers the possibility of "verifying" the keys by using them to sign a challenge.
    5.  Sourcehut (https://meta.sr.ht/keys): same keys as GitHub, although again we aren't making use of backup key here yet.

[^trick]: To make this easy, it's better to just duplicate the existing item and then edit it (you can replace the associated key file); that way, you don't have to set up the tags again, or worry about adding the key to the wrong vault etc.
