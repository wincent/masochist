---
title: Information leakage from the LAN when sending with Mail.app
tags: blog
---

I was curious to find out why the internal IP address of my Mac OS X machine on my LAN was being leaked into the headers of all my outgoing email messages. Basically, all messages included a header that began like this:

    Received: from [192.168.1.128] (external.host.name [w.x.y.z])

Where `external.host.name` was the name corresponding to the external (world-facing) address of my ADSL modem/router and `w.x.y.z` was the IP address. Now there is no real way of concealing the external address, nor any justification for doing so, but why was the internal address being leaked?





I confirmed that mail received from friends running Mail.app on Mac OS X also included the IP address of their internal networks, yet when I checked the headers produced by a different Mac OS X client (Entourage) the IP address wasn't present.

So in order to get to the bottom of this I decided to rule out Mail.app and connect directly to my server using the command line as [described here](http://www.wincent.com/knowledge-base/Testing_services_with_telnet).

#### The verdict

It turns out that whatever value you send in the `EHLO` command during the `SMTP` session gets included in the header. That means that Mail.app is issuing a command like this when sending mail:

    EHLO 192.168.1.128

The question is, why? Wouldn't it be better to send `localhost`? What's the justification for this information leakage (however trivial and harmless) across the boundary of the LAN? I suspect that the answer lies in the depths of [RFC 2821](http://www.ietf.org/rfc/rfc2821.txt)...

#### Update

The relevant text from the RFC looks to be:

> The domain name given in the EHLO command MUST BE either a primary host name (a domain name that resolves to an A RR) or, if the host has no name, an address literal

So it looks like Apple is in conformance with the RFC and Entourage is not; still, I wish they'd send `127.0.0.1` instead.
