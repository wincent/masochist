---
tags: sendmail cyrus smtp imap pop
---

This wasn't too difficult this time around as I had an existing, working setup over at my old host ([Rackspace](/wiki/Rackspace)) on a [RHEL 3](/wiki/RHEL_3) box. Basically, it boiled down to moving across the certificates and keys and updating the configuration files. I tried to make the minimal changes to the files, so rather than changing the configuration files to point at the location where the keys and certificates had resided on the old machine I instead moved and renamed the keys and certificates to match the new locations on the [RHEL 5.1](/wiki/RHEL_5.1) machine.

One complication was that I was moving from the [UW-IMAP](/wiki/UW-IMAP) server to [Cyrus](/wiki/Cyrus), which required some minor adjustments, but on the other hand things were simplified because the [CA](/wiki/CA) certificate bundle that comes with [RHEL 5.1](/wiki/RHEL_5.1) contains more CAs, including my current CA ([RapidSSL](/wiki/RapidSSL)), which meant one less thing to set up.

## Key points

-   make sure permissions are set on the certificate and key file so that [Cyrus](/wiki/Cyrus) can read them

