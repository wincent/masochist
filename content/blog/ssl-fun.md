---
title: SSL fun
tags: blog
---

It was [just brought to my attention](http://fukamachi.org/wp/2007/01/04/ssl-scam-now-slightly-cheaper/) that [RapidSSL](http://www.rapidssl.com/index_ssl.htm) is running [a promotion](http://www.rapidssl.com/ssl-certificate-products/ssl-certificate-replace.htm) where you can extend your current [SSL]{} certificate for free by one year when you switch over from [Comodo](http://www.comodogroup.com/).

Great. My existing Comodo-supplied certificate, the one that backs the [Wincent online store](https://secure.wincent.com/a/store/), is due to expire on 15 April 2007, so by switching to RapidSSL I can bump the expiry date back to 15 April 2008 for free. Furthermore, as noted in the article linked to above, there are [competitive renewal deals](http://www.servertastic.com/store/product.asp?numRecordPosition=1&P_ID=222) offered by RapidSSL resellers like [ServerTastic](http://www.servertastic.com/index.asp). At the time of writing you can get your SSL certificate for as little as $10 per year.

Better still, RapidSSL certificates are directly signed by a root certificate rather than requiring an intermediate certificate chain. Although it makes no real difference for end users this is a [big deal](http://gagravarr.org/writing/openssl-certs/personal.shtml) for you if you're an administrator because it makes your set-up so much easier.

> In some cases, the CA which signed your certificate is not a root CA, but is a CA signed by a CA (or signed by a CA who was signed by a CA who is a root CA, etc.) This is often known as a chained certificate, or a ca-bundle.
>
> What makes things tricky is that the remote client will look at your certificate, and try to verify it against the root CAs it knows about. If there is an intermediate CA between you and the CA the client knows about, it will need this certificate to sucessfully verify your certificate. As such, the server needs to not only provide clients with its own certificate, but also those of the intermediate CAs.

When I set up secure IMAP and POP access for the first time it was actually quite a tricky process because I had to not only ensure that I provided my server with my certificate, the signing certificate, and my private key, but I also had to make sure that the items were in the right order. This was entirely a trial-and-error process as I couldn't find any information about it on the web. In the end I found that the required order was:

1.  Private key
2.  Certificate
3.  Signing certificate

Any other order and things simply didn't work. With RapidSSL, however, all of this is a non-issue. The certificate is directly signed by a well-known root certificate, so it should be a drop-in replacement for HTTPS, IMAP, POP and whatever other service you wish to use it with.





#### Update

RapidSSL took a few hours to actually issue the certificate. Note the difference between the old, chained certificate:

![](/system/images/legacy/old-cert.png)

And the new, root-signed certificate:

![](/system/images/legacy/new-cert.png)

Also nice to see that they in fact extended the expiry date by more than a year, adding on a few additional weeks (to 5 May 2008) for free.

Installing the certificate was fairly easy; I made some notes about it [here](http://www.wincent.com/knowledge-base/Installing_a_new_SSL_certificate).
