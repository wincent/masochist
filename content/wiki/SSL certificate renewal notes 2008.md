---
tags: ssl
cache_breaker: 1
---

My previous [SSL](/wiki/SSL) certificate was a [RapidSSL](/wiki/RapidSSL)-issued certificate, and the cheapest reseller I could find at time of renewal (late April 2008) was [ServerTastic](http://www.servertastic.com/) (a 5-year renewal for $50, or $10 per year).

The basic process for renewal is:

1.  Go to servertastic
2.  Go through the checkout process
3.  Receive email with link to page where you submit your CSR (Certificate Signing Request)
4.  Generate the CSR and paste it into the web page from the previous step
5.  Receive another email requesting approval to generate a new certificate
6.  Install the new certificate

## Generating the CSR

Instructions for how to do this appear [here](http://www.rapidssl.com/freessl/freessl-csr.html), and for [Apache](/wiki/Apache) with [mod\_ssl](/wiki/mod_ssl) specifically [here](http://www.rapidssl.com/resources/csr/apache_mod_ssl.htm).

    cd path/to/ssl/certs/and/keys

    # move old CSR out the way
    mv secure.wincent.com.csr.rapidssl secure.wincent.com.csr.rapidssl.2007

    # create a new CSR
    openssl req -new -key server.key -out secure.wincent.com.csr.rapidssl.2008

    # review the new CSR, comparing it against the previous one for correctness
    openssl req -noout -text -in secure.wincent.com.csr.rapidssl.2008
    openssl req -noout -text -in secure.wincent.com.csr.rapidssl.2007

Here is how I answered the questions during CSR generation:

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
    Common Name (eg, your name or your server's hostname) []:secure.wincent.com
    Email Address []:win@wincent.com

    Please enter the following 'extra' attributes
    to be sent with your certificate request
    A challenge password []:
    An optional company name []:

## Installing the new certificate

### Apache

[RapidSSL](/wiki/RapidSSL) provides [installation instructions](http://www.rapidssl.com/ssl-certificate-support/install-ssl-certificate/apache_apache_ssl.htm) for [Apache](/wiki/Apache) running [mod\_ssl](/wiki/mod_ssl).

    # move old certificate backup out of the way
    mv secure.wincent.com.crt.rapidssl secure.wincent.com.crt.rapidssl.2007

    # put the new certificate where Apache expects to find it
    cp secure.wincent.com.crt.rapidssl.2008 secure.wincent.com.crt

    # go live with the new certificate
    apachectl configtest
    apachectl graceful

Visting a secure [URL](/wiki/URL) confirms that the new certificate is valid until 23 May 2013.

### Sendmail

    cd /etc/pki/tls/certs

    # move old backup out the way
    mv sendmail.pem.rapidssl sendmail.pem.rapidssl.2007

    # install new certificate
    cp /path/to/secure.wincent.com.crt.rapidssl.2008 sendmail.pem.rapidssl.2008
    cp sendmail.pem.rapidssl.2008 sendmail.pem

    # go live with the new certificate
    service sendmail restart

I first did some elementary testing from [Mail.app](/wiki/Mail.app) using the "Connection Inspector" window. I then followed this up with a [telnet](/wiki/telnet)-style test:

    openssl s_client -starttls pop -connect secure.wincent.com:25

### Cyrus

    cd /etc/pki/cyrus-imapd

    # make backup
    cp cyrus-imapd.pem cyrus-imapd.pem.rapidssl.2007

    # install new certificate, ensuring correct permissions
    cp /etc/pki/tls/certs/sendmail.pem.rapidssl.2008 cyrus-imapd.pem.rapidssl.2008
    chown cyrus:mail cyrus-imapd.pem.rapidssl.200*
    cp cyrus-imapd.pem.rapidssl.2008 cyrus-imapd.pem

    # go live with the new certificate
    service cyrus-imapd restart

Again, I tested using [Mail.app](/wiki/Mail.app) and also did the following tests in the [Terminal](/wiki/Terminal):

    # test secure IMAP
    openssl s_client -connect secure.wincent.com:993

    # test secure POP
    openssl s_client -connect secure.wincent.com:995
