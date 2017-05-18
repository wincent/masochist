---
tags: ssh wiki
---

From <http://martin.kleppmann.com/2013/05/24/improving-security-of-ssh-private-keys.html>:

```shell
$ mv ~/.ssh/id_rsa ~/.ssh/id_rsa.old
$ openssl pkcs8 -topk8 -v2 des3 -in ~/.ssh/id_rsa.old -out ~/.ssh/id_rsa
$ chmod 600 ~/.ssh/id_rsa
```

After checking that the converted key works, delete the old one:

```shell
$ srm ~/.ssh/id_rsa.old
```

See `man pkcs8` for more details.
