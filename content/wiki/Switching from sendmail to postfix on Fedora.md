---
tags: sendmail postfix
---

```shell
# /etc/init.d/sendmail stop
# yum install postfix system-switch-mail
# system-switch-mail-nox
# /etc/init.d/postfix status
# chkconfig postfix on
# chkconfig saslauthd off # sendmail was already off
# chkconfig --list # confirm all is still well
```

To get it to actually work in the context of [EC2](/wiki/EC2), I had to change:

    inet_protocols = all

to:

    inet_protocols = ipv4

in the `/etc/postfix/main.cf` file.
