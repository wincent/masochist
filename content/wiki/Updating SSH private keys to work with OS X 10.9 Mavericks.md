---
tags: ssh macos mavericks wiki
---

```shell
$ cp id_rsa{,.bak}
$ chmod +w id_rsa id_rsa.pub
$ openssl rsa -in id_rsa -out id_rsa         # decrypt in place
$ openssl rsa -in id_rsa -aes256 -out id_rsa # encrypt in place
$ ssh-keygen -y -f id_rsa > id_rsa.pub       # regen public key
$ chmod 400 id_rsa id_rsa.pub
```

# Source

-   <http://apple.stackexchange.com/questions/106107/cannot-unlock-password-protected-ssh-key-in-os-x-mavericks>
