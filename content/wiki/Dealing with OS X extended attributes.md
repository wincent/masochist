---
tags: hfs macos wiki
---

Files with extended attributes show up with `@` at the end of their mode string in the output of `ls -l`.

See what the attributes are with: `ls -l@`

Delete an attribute with `xattr -d [attr] [file...]` (eg. `xattr -d com.apple.quarantine *.crt`)

Print info about an attribute (for example the app that created it) with `xattr -p [attr] [file..]`.
