---
tags: ssl wiki
cache_breaker: 1
---

**Note:** I'm no longer maintaining these renewal notes, as I now have the whole process pretty much automated via [Ansible](/wiki/Ansible) (I just run a script to generate a new CSR, then dump the signed certificate from the CA into my Ansible configs repo and tell Ansible to install it).

I didn't do a very good job of taking notes on this one (actually, I took notes, but then mistakenly trashed the file).

The main point to note here was the need to produce a new certificate bundle, replacing the old root cert. (Chrome was fine without the bundle, but Amazon Cloudfront was not.) The order matters.

From [this page](https://knowledge.rapidssl.com/support/ssl-certificate-support/index?page=content&id=AR1548):

1.  Server certificate
2.  Primary intermediate CA cert
3.  Secondary intermediate CA cert
4.  [Root CA cert](http://www.geotrust.com/resources/root_certificates/certificates/GeoTrust_Global_CA.pem)

For more detail, see the similar notes from "[SSL certificate renewal notes 2010](/wiki/SSL_certificate_renewal_notes_2010)".
