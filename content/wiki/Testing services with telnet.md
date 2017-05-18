---
tags: smtp imap wiki
cache_breaker: 1
---

# Testing [SMTP](/wiki/SMTP)

For added security, I use authenticated [SMTP](/wiki/SMTP) for sending mail, using the `LOGIN` mechanism. This requires that first I had to [Base64](/wiki/Base64) encode my username and password:

    perl -MMIME::Base64 -e 'print encode_base64("username");'
    perl -MMIME::Base64 -e 'print encode_base64("password");'

For example, to test [SMTP](/wiki/SMTP) you could use something like:

    telnet mail.example.com 25
    EHLO 127.0.0.1
    AUTH LOGIN
    (Base-64 encoded username)
    (Base-64 encoded password)
    MAIL FROM: <user1@example.com>
    RCPT TO: <user2@example.com>
    DATA
    FROM: <user1@example.com>
    Mail test, please ignore.
    .
    QUIT

As [documented here](http://www.sendmail.org/~ca/email/starttls.html), to test [secure SMTP](/wiki/secure_SMTP) you would need to use [openssl](/wiki/openssl) instead of [telnet](/wiki/telnet):

    openssl s_client -starttls smtp -connect host:port

Where `port` is most likely `25`. In the case of [SMTP over SSL](/wiki/SMTP_over_SSL) (not using `STARTTLS`) you would use:

    openssl s_client -connect host:port

In this latter case `port` is most likely to be `465`.

But note that, [as commented here](http://www.forbiddenweb.org/topic/78761/index.html), any line beginning with `R` will trigger a renegotiation of the [SSL/TLS](/wiki/SSL%2fTLS) session so you must enter:

     RCPT TO:

And not:

    RCPT TO:

You can also suppress this behavior by passing in the `-ign_eof` switch.

## Alternative host and port syntax

It is possible to pass in the host and port options explicitly:

```shell
$ openssl s_client -host smtp.gmail.com -port 587 -starttls smtp
```

# Testing [IMAP](/wiki/IMAP)

[This page](http://bobpeers.com/technical/telnet_imap.php) offers a nice overview.

# See also

-   [This page](http://www.unixreview.com/documents/s=9700/ur0504l/ur0504l.html) has lots of examples on how you can use [telnet](/wiki/telnet) to manually test various services \[February 2010, the link is now dead\].
