---
tags: wiki git
---

On macOS, `git config credential.helper` defaults to "osxkeychain". The first time you use a tool like `git-send-email` and get prompted for a password, it will be stored in the keychain as an item of kind "Internet password", name "smtp.example.com", account "you@example.com", where "smtp://smtp.example.com:587", and access control "Confirm before allowing access" for the `git-credential-osxkeychain` executable.

# See also

* Upstream docs: https://git-scm.com/docs/gitcredentials
