---
tags: nginx ssl wiki
cache_breaker: 1
---

I just got two new SSL certificates for use with wincent.com and rails.wincent.com.

## Generating new private keys

Rather than using the old private key that I had previously used with my secure.wincent.com certificate (documented in "[SSL certificate renewal notes 2008](/wiki/SSL_certificate_renewal_notes_2008)"), I decided to generate a new key:

    $ sudo -s
    # mkdir keys certs
    # cd keys
    # openssl genrsa -des3 -out wincent.com.key 1024

## Generating a certificate signing request

    # openssl req -new -key wincent.com.key -out ../certs/wincent.com.csr

This is how I answered the questions:

    You are about to be asked to enter information that will be incorporated
    into your certificate request.
    What you are about to enter is what is called a Distinguished Name or a DN.
    There are quite a few fields but you can leave some blank
    For some fields there will be a default value,
    If you enter '.', the field will be left blank.
    -----
    Country Name (2 letter code) [GB]:AU
    State or Province Name (full name) [Berkshire]:South Australia
    Locality Name (eg, city) [Newbury]:Rundle Mall
    Organization Name (eg, company) [My Company Ltd]:wincent.com
    Organizational Unit Name (eg, section) []:
    Common Name (eg, your name or your server's hostname) []:wincent.com
    Email Address []:win@wincent.com

    Please enter the following 'extra' attributes
    to be sent with your certificate request
    A challenge password []:
    An optional company name []

Inspect the CSR:

    # openssl req -noout -text -in ../certs/wincent.com.csr 

## Getting the actual signed certificate

Follow issuer's instructions (basically, go to their website and past in the CSR):

    # cat ../certs/wincent.com.csr 

Once you get the signed certificate, copy and paste it into a file:

    # nano ../certs/wincent.com.crt

Copy and paste their root certificate as well:

    # nano ../certs/rapidssl.root.crt

## One more time...

Now repeat all the same steps, this time for rails.wincent.com:

    # openssl genrsa -des3 -out rails.wincent.com.key 1024
    # openssl req -new -key rails.wincent.com.key -out ../certs/rails.wincent.com.csr
    # openssl req -noout -text -in ../certs/rails.wincent.com.csr
    # cat ../certs/rails.wincent.com.csr 
    # nano ../certs/rails.wincent.com.crt

## See also

-   [Generating self-signed SSL certificates for use with nginx](/wiki/Generating_self-signed_SSL_certificates_for_use_with_nginx)
-   [SSL certificate renewal notes 2010](/wiki/SSL_certificate_renewal_notes_2010) (see [SSL certificate renewal notes](/wiki/SSL_certificate_renewal_notes) for potentially more up-to-date resources)
