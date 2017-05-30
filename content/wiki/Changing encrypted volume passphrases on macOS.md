---
tags: wiki os.x
---

I backup to multiple external volumes and occasionally have cause to change the passphrases, but can never remember how to do it because Apple makes it ridiculously obtuse.

# Encrypted `.dmg` file

```shell
hdiutil chpass path/to/image.dmg
```

# Encrypted CoreStorage volume

```shell
diskutil coreStorage changeVolumePassphrase $UUID
```

Get the `$UUID` by mounting the volume and inspecting the output of `diskutil cs list`. You're looking for the "Logical Volume" UUID at the bottom of the output:

```
+-- Logical Volume Group 12345678
    =========================================================
    Name:         Nemesio
    Status:       Online
    Size:         3679412224 B (3.7 GB)
    Free Space:   4096 B (4.1 KB)
    |
    +-< Physical Volume 12345678
    |   ----------------------------------------------------
    |   Index:    0
    |   Disk:     disk2s2
    |   Status:   Online
    |   Size:     3679412224 B (3.7 GB)
    |
    +-> Logical Volume Family 12345678
        ----------------------------------------------------------
        Encryption Type:         AES-XTS
        Encryption Status:       Unlocked
        Conversion Status:       Converting (forward)
        High Level Queries:      Not Fully Secure
        |                        Passphrase Required
        |                        Accepts New Users
        |                        Has Visible Users
        |                        Has Volume Key
        |
        +-> Logical Volume 12345678
            ---------------------------------------------------
            Disk:                  disk4
            Status:                Online
            Size (Total):          3343863808 B (3.3 GB)
            Conversion Progress:   60%
            Revertible:            Yes (unlock and decryption required)
            LV Name:               Nemesio
            Volume Name:           Nemesio
            Content Hint:          Apple_HFSX
```
