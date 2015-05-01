---
tags: ssl
cache_breaker: 1
---

-   Clients check the Common Name (CN), but also the Subject Alternative Names (SAN)
-   The CN should be included in among the SANs
-   This can be used to allow a single IP to support multiple domain aliases (unlike a wildcard certificate, the alternate names need not just be subdomains of the same parent domain); normally you need a separate IP per certificate because at the time the certificate is used the only unencrypted information the server has is the requested IP address
-   As you'd expect given the CA racket, getting a cert with SANs is much more expensive — an order of magnitude more — than getting a simple cert (for example, [SAN-capable Thawte certs](http://www.thawte.com/ssl/san-uc-ssl-certificates/index.html) start at around $199/year); a comparison list can be found [here](https://cheapsslsecurity.com/sslproducts/sansslcertificates.html) with prices starting at just under $100/year and [this page](http://ssl.certificatesforexchange.com/ssl/ssl-certificate.aspx) has prices starting at $60/year; overall the cheapest I've seen is <http://certificatesforexchange.com/>
-   For an example of a SAN certificate in the wild, inspect the certificate from <https://www.facebook.com>, or this website

# Source

-   <http://stackoverflow.com/questions/5935369/ssl-how-do-common-names-cn-and-subject-alternative-names-san-work-together>

# See also

-   <http://en.wikipedia.org/wiki/SubjectAltName>
-   <http://en.wikipedia.org/wiki/Wildcard_certificate>

