---
tags: stunnel wiki
---

# Background

In May last year I decided to secure access to my [SMTP](/wiki/SMTP), [POP3](/wiki/POP3) and [IMAP](/wiki/IMAP) services (see the [| original article](http://wincent.com/a/knowledge-base/archives/2006/05/ssh_tunneling_a.php)). I dismissed using [Stunnel](/wiki/Stunnel) and instead decided to configure dedicated servers for [Secure SMTP](/wiki/Secure_SMTP), [POP3S](/wiki/POP3S) and [IMAPS](/wiki/IMAPS). At the time I wrote:

> I didn't actually try using \[stunnel\] but it seems like a viable option. Basically, the stunnel process serves as a wrapper for the insecure protocol. For example, you fire up stunnel on the server and get it to listen to port 993 (the standard port for IMAPS), and it forwards incoming, encrypted connections to the real IMAP process running on the server (not encrypted). You then set up your local mail client to communicate with SSL to the appropriate ports.&lt;br /&gt; &lt;br /&gt; I chose not to use this method because I didn't want to have to meddle too much with the server configuration (for example, configuring the stunnel-wrapped servers to automatically start up at the correct runlevels). Furthermore, it is not clear to me whether it is possible to offer both secure and insecure access at the same time (which would be useful, for example, if you wanted to allow users to access via either IMAP or IMAPS during the transition period).

# The advantage of using [Stunnel](/wiki/Stunnel) for [SMTP](/wiki/SMTP)

I later discovered not only one, but two drawbacks, to my decision to eschew [Stunnel](/wiki/Stunnel).

Firstly, I observed information leakage across the boundaries of my internal [LAN](/wiki/LAN). This is a necessary evil required by [RFC 2821](/wiki/RFC_2821); the connecting mail client must send a host name or address along with it's `EHLO` message. This is described in [| this article](http://wincent.com/a/about/wincent/weblog/archives/2007/01/information_lea.php).

Secondly, after switching to a new [ISP](/wiki/ISP), [Jazztel](/wiki/Jazztel), I discovered that the `Received` headers in all my outgoing mails had ugly "may be forged" warnings in them because the [Jazztel](/wiki/Jazztel)'s administrators have a broken [DNS](/wiki/DNS) set-up in which they don't provide reverse look-up for clients with dynamic IPs. In fact, [Jazztel](/wiki/Jazztel) doesn't even provide reverse lookups for some of their *static* [IP](/wiki/IP)s; even their own nameserver's IP address doesn't reverse resolve. One of the few [Jazztel](/wiki/Jazztel) addresses which does resolve in both directions is www.jazztel.es.

These "may be forged" warnings are undesirable because they may increase the likelihood of false positives when outgoing messages hit spam filters elsewhere. One of the reasons for running one's own mail server is precisely to avoid this kind of problem, but in this case my ISP was thwarting my plans. Switching to [Stunnel](/wiki/Stunnel) would allow me to avoid at least one of these issues (the unwanted "may be forged" warnings).

# Procedure

As the only service affected by this issue is [Secure SMTP](/wiki/Secure_SMTP) I decided to leave my other existing arrangements in place. This includes the existing [Secure SMTP](/wiki/Secure_SMTP) arrangement which allows clients to connect on the standard [SMTP](/wiki/SMTP) port, port 25, and "upgrade" their connection to encrypted transport using `STARTTLS`.

I would set up [Stunnel](/wiki/Stunnel) to listen on port 465, the "unofficial" [SMTP over SSL](/wiki/SMTP_over_SSL) port, and forward connections to the [Sendmail](/wiki/Sendmail) daemon. The use of port 465 technically conflicts (see [| this Wikipedia article](http://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers)) but in this case if it's good enough for [Gmail](/wiki/Gmail) it's good enough for me.

This was a conservative plan because it afforded me with the option to jump back to the old configuration.

## Initial [Stunnel](/wiki/Stunnel) setup

[Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux) already comes with [Stunnel](/wiki/Stunnel) installed so this was a configuration and set-up problem, not an installation problem. In fact, one of the major reasons why I decided to go ahead with the switch to [Stunnel](/wiki/Stunnel) was knowing that the software had official vendor support.

The default configuration example file (`/etc/stunnel/stunnel.conf-sample`) only requires a few modifications:

    cd /etc/stunnel
    sudo cp stunnel.conf-sample stunnel.conf

I basically commented out all services except for [Secure SMTP](/wiki/Secure_SMTP):

    <nowiki>[ssmtp]</nowiki>
    accept  = 465
    connect = 25

I changed the `cert` value from the default:

    cert = /usr/etc/stunnel/mail.pem

To point at the directory where I already have my certificates and private keys stored on the disk. As per the [Stunnel](/wiki/Stunnel) manual page I made sure the private key came first in the file followed by the certificate, separated by a blank line. My initial testing showed that I had to include the signing certificate authority's certificate at the bottom of this file, as was the case when setting up [IMAPS](/wiki/IMAPS) and other services.

The default configuration runs [Stunnel](/wiki/Stunnel) in a [chroot](/wiki/chroot) jail. Also by default it does not verify client certificates and so there's no need to copy any certificates inside the jail and `CApath` can be commented out (it is commented out by default).

To make the [chroot](/wiki/chroot) as secure as possible I created a new, unprivileged user and group without any login privileges just for [Stunnel](/wiki/Stunnel). I created the jail directory, changed ownership to the [Stunnell](/wiki/Stunnell) user/group, and set permissions of `700` on it.

## Running [Stunnel](/wiki/Stunnel) in test mode

First of all I took my local mail client offline. I then added a couple of temporary options to the configuration file:

    # testing only
    debug = debug
    foreground = yes

And started up [Stunnel](/wiki/Stunnel) as follows:

    sudo -H stunnel path_to_conf_file

In another window I used `tail -f` to observe what was being appended to my `maillog`.

    openssl s_client -connect host:465

## Running [Stunnel](/wiki/Stunnel) with the help of [Xinetd](/wiki/Xinetd)

In the final version I decided to run [Stunnel](/wiki/Stunnel) on demand using [Xinetd](/wiki/Xinetd). In part I was motivated to do this by the provision for managing this in the "SSL Tunnel" section of [Webmin](/wiki/Webmin).

-   Service name: SSMTP (service names may not include spaces)
-   TCP port: 465
-   Active?: Yes
-   Connect to remote host: Yes
-   Remote hostname: localhost
-   Remote port: 25

This decision renders my earlier preparation (creating the [Stunnel](/wiki/Stunnel) user and group, and setting up the [chroot](/wiki/chroot) jail) useless, but one consolation is that with this set-up [Stunnel](/wiki/Stunnel) can log using the [syslog](/wiki/syslog) facility.

## Configuring the local Mail client to use [SMTP over SSL](/wiki/SMTP_over_SSL)

If every is set up correctly, all that's required to get the mail client to use the new set up is to change the port that it connects on from 25 to 465.

Apparently there is a bug in [Mail.app](/wiki/Mail.app) that requires you to re-enter your passwords when you change the port from 25 to 465. When you first change the port number it will *appear* that your password remains intact, but if you click "OK" and then later go back to look at your outgoing server configuration you'll see that your password field has been wiped, so you'll need to re-enter it. This should be a once-only process.

## Final testing

After the transition was complete I performed testing at two levels to verify that everything was working:

1.  Manually as described in the article, "[Testing services with telnet](/wiki/Testing_services_with_telnet)".
2.  Using my mail client, [Mail.app](/wiki/Mail.app).

### Headers

#### Before

    Received: from [192.168.1.128] (102.115.217.87.dynamic.jazztel.es [87.217.115.102] (may be forged))

#### After

    Received: from [192.168.1.128] (localhost [127.0.0.1])
