---
tags: ssl wiki
cache_breaker: 1
---

**Note:** I'm no longer maintaining these renewal notes, as I now have the whole process pretty much automated via [Ansible](/wiki/Ansible) (I just run a script to generate a new CSR, then dump the signed certificate from the CA into my Ansible configs repo and tell Ansible to install it).

# Certificate authorities

-   Free certificates (and some paid options): <http://cert.startcom.org/>
-   Cheapest paid certificates:
    -   <http://www.servertastic.com/>
    -   <http://namecheap.com/>
-   Cheapest SAN certificates:
    -   <http://certificatesforexchange.com/>

# Articles

-   [Installing a new SSL certificate](/wiki/Installing_a_new_SSL_certificate)
-   Renewal notes from specific years:
    -   [SSL certificate renewal notes 2013](/wiki/SSL_certificate_renewal_notes_2013) (nginx; wincent.com)
    -   [SSL certificate renewal notes 2012](/wiki/SSL_certificate_renewal_notes_2012) (Apache, Cyrus, sendmail; secure.wincent.com)
    -   [SSL certificate renewal notes 2010](/wiki/SSL_certificate_renewal_notes_2010) (nginx; wincent.com)
    -   [SSL certificate renewal notes 2008](/wiki/SSL_certificate_renewal_notes_2008) (Apache, Cyrus, sendmail; secure.wincent.com)
-   [Getting new SSL certificates for use with nginx](/wiki/Getting_new_SSL_certificates_for_use_with_nginx)
