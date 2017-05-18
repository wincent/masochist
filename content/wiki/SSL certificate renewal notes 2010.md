---
tags: nginx ssl wiki
---

My previous [SSL](/wiki/SSL) certificate was a [RapidSSL](/wiki/RapidSSL)-issued certificate, and I'm going with the same (cheapest) reseller that I did last time (see "[SSL certificate renewal notes 2008](/wiki/SSL_certificate_renewal_notes_2008)"): [ServerTastic](http://www.servertastic.com/) (a 5-year renewal for $50, or $10 per year).

I have two certificates for wincent.com and rails.wincent.com which both expire 23 january 2010. I'll be letting the certificate for rails.wincent.com expire as the domain is not actively used anymore and only redirects to wincent.com.

I also have a [RapidSSL](/wiki/RapidSSL) certificate for secure.wincent.com but that doesn't expire until 23 May 2013 so I won't be renewing that one just yet (and in fact, by the time 2013 comes around the domain is unlikely to be in active use anyway).

The basic process for renewal is:

1.  Go to servertastic
2.  Go through the checkout process
3.  Receive email with link to page where you submit your CSR (Certificate Signing Request)
4.  Generate the CSR and paste it into the web page from the previous step
5.  Receive another email requesting approval to generate a new certificate
6.  Install the new certificate

# Generating the CSR

Instructions for how to do this appear [here](http://www.rapidssl.com/freessl/freessl-csr.html), and for [Apache](/wiki/Apache) with [mod\_ssl](/wiki/mod_ssl) specifically [here](http://www.rapidssl.com/resources/csr/apache_mod_ssl.htm).

    cd path/to/ssl/certs/and/keys
    # for my older certs, which were only used with Apache this was a subdirectory of:
    #   /etc/httpd
    # for the newer certs, which are principally for use with nginx, this was a subdir of:
    #   /usr/local/nginx/conf

    # move old CSR out the way
    cd certs
    mv wincent.com.csr wincent.com.csr.rapidssl.2009

    # create a new CSR
    openssl req -new -key ../keys/wincent.com.key -out wincent.com.csr.rapidssl.2010

    # review the new CSR, comparing it against the previous one for correctness
    openssl req -noout -text -in wincent.com.csr.rapidssl.2010
    openssl req -noout -text -in wincent.com.csr.rapidssl.2009

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
    Locality Name (eg, city) [Newbury]:Glenelg South
    Organization Name (eg, company) [My Company Ltd]:wincent.com
    Organizational Unit Name (eg, section) []:
    Common Name (eg, your name or your server's hostname) []:wincent.com
    Email Address []:win@wincent.com

    Please enter the following 'extra' attributes
    to be sent with your certificate request
    A challenge password []:
    An optional company name []:

# The checkout process

This time I'll be renewing for a full 5-years in order to get the maximum discount. The total cost is US$50 (€34.89).

# Installing the new certificate

## nginx

    # make backup of old certificate
    cp wincent.com.crt wincent.com.crt.rapidssl.2009

    # copy new certificate (from RapidSSL email) into new file
    vim wincent.com.crt.rapidssl.2010

    # from here on will use a symbolic link to point to the latest cert
    rm wincent.com.crt
    ln -s wincent.com.crt.rapidssl.2010 wincent.com.crt

    # make sure that nginx likes the new cert
    /usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf

    # first find out the PID of the nginx master process
    ps auxwww|grep nginx

    # go live with new cert by instructing nginx to re-read it's config
    kill -HUP 32101

Visting a secure [URL](/wiki/URL) confirms that the new certificate is valid until 9 February 2015.

## [Sendmail](/wiki/Sendmail), [Cyrus](/wiki/Cyrus), [Apache](/wiki/Apache)

This certificate isn't actually used by any of these services, so no action is required.

For an example of an update involving this service, see "[SSL certificate renewal notes 2008](/wiki/SSL_certificate_renewal_notes_2008)".
