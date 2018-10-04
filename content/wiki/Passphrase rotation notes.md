---
tags: wiki
---

This probably won't be of much interest to anybody, but keeping these notes here for my own use. There are a few different passphrases that I may want to rotate from time to time:

1. **1Password master pass:** I found that when I changed this on macOS, the change wasn't immediately visible on my iOS client, even when I deleted and reinstalled that client. After a few minutes or after entering my passphrase on the Mac again (I'm not sure which one of these was responsible), I was able to log in to the iOS client using the new password.
2. **SSH private key pass:** `ssh-keygen -f ~/.ssh/$PRIVATE_KEY_FILE -p`
3. **macOS login pass:** System Preferences &raquo; Users & Groups &raquo; Change Password...
4. **Backup volume passphrases:**
    * An HFS+ backup volume on a USB stick: Using "Change Password..." in the Disk Utility "File" menu.
    * An AFPS backup volume on an external drive: Using "Change Password..." in the Disk Utility "File" menu.
    * A disk image on disk: `hdiutil chpass ~/Backups/$PATH_TO.sparseimage`
5. **GPG private keys:** `gpg --edit-key user@example.com` (at the interactive prompt: `passwd`, then `save`).
