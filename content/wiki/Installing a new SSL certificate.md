---
tags: ssl
---

I [recently wrote](http://wincent.com/a/about/wincent/weblog/archives/2007/01/ssl_fun.php) about obtaining a new [SSL](/wiki/SSL) certificate. Here are some notes made during the procedure.

# Generating the Certificate Signing Request

My first step was to generate a new [CSR](/wiki/CSR) (certificate signing request):

    cd /etc/httpd/conf
    sudo -s
    openssl req -new -key ssl.key/server.key -out secure.wincent.com.csr

This was actually a (harmless) mistake as I later discovered that I had used a key other than the one I intended. On receiving the signed certificate I made a backup of what I thought was the old certificate:

    cp ssl.crt/server.crt ssl.crt/server.crt.comodo

# Installing the new certificate for [Apache](/wiki/Apache)

I then installed the new certificate:

    ee ssl.crt/server.crt.rapidssl
    cp ssl.crt/server.crt

After restarting Apache I discovered that the old certificate was still in effect. It turns out that I had stored my certificate elsewhere; but given that you only tend to renew these things once per year (or every worse) it is easy to forget.

So I again backed up the old certificate (this time the right old certificate) and installed the new certificate (this time in the expected location). Apache refused to restart so I quickly reverted and upon investigation noted that in the same location as the old certificate was a different key file; evidently I had used a different key to generate the old [CSR](/wiki/CSR). Like I said, easy to forget these things if you only do them once a year or more.

So I backed up the old key and copied across the actual key I'd used to generate the [CSR](/wiki/CSR). Now [Apache](/wiki/Apache) started and correctly used the new certificate.

# Installing the new certificate for other services

The next step was to do the same for my [IMAPS](/wiki/IMAPS), [POP3S](/wiki/POP3S) and [SMTP](/wiki/SMTP) services. First we must obtain a copy of the root certificate used to sign our certificate:

    wget --no-check-certificate https://www.rapidssl.com/cps/rapidssl_01.cer

Note that ironically I had to pass `--no-check-certificate` because the version of [OpenSSL](/wiki/OpenSSL) which I have installed on my server (which [wget](/wiki/wget) depends on) doesn't know about that root certificate.

## [Sendmail](/wiki/Sendmail)

### Note

This section on [Sendmail](/wiki/Sendmail) was originally written prior to switching to [Stunnel](/wiki/Stunnel) for [Secure SMTP](/wiki/Secure_SMTP). See "[Using Stunnel to secure SMTP transport](/wiki/Using_Stunnel_to_secure_SMTP_transport)" for a description of the changeover. I have yet to do a certificate change with the new arrangement in place, but when I do there should be no need to make any modifications to [Sendmail](/wiki/Sendmail) at all; any changes should be made on the [Stunnel](/wiki/Stunnel) side of things.

For informational purposes only I am leaving the old notes on [Sendmail](/wiki/Sendmail) intact below.

### Old [Sendmail](/wiki/Sendmail) procedure

A quick check of the [sendmail](/wiki/sendmail) configuration revealed the following:

    define(`confCACERT_PATH',`/usr/share/ssl/certs')dnl
    define(`confCACERT',`/usr/share/ssl/certs/ca.crt')dnl
    define(`confSERVER_CERT',`/usr/share/ssl/certs/sendmail.pem')dnl
    define(`confSERVER_KEY',`/usr/share/ssl/certs/sendmail.key')dnl

So as before I made backups of the old files and ensured that each file contained the right thing: `ca.crt` was the just-downloaded root certificate, `sendmail.pem` was the signed certificate, and `sendmail.key` was the key used to generated the [CSR](/wiki/CSR). The validity of the signed certificate could the be tested using a command like this:

    openssl verify -CAfile ca.crt sendmail.pem

Should print:

    sendmail.pem: OK

Restart [sendmail](/wiki/sendmail) so that the changes get picked up:

    service sendmail restart

I am still not entirely sure that the configuration is perfect because on testing the connection via telnet (see "[Testing services with telnet](/wiki/Testing_services_with_telnet)") I get this warning:

    CONNECTED(00000003)
    depth=1 /C=US/O=Equifax Secure Inc./CN=Equifax Secure Global eBusiness CA-1
    verify error:num=19:self signed certificate in certificate chain
    verify return:0
    ---
    Certificate chain
     0 s:/C=AU/O=secure.wincent.com/OU=GT42117481/OU=See www.rapidssl.com/resources/cps (c)07/OU=Domain Control Validated - RapidSSL(R)/CN=secure.wincent.com
       i:/C=US/O=Equifax Secure Inc./CN=Equifax Secure Global eBusiness CA-1
     1 s:/C=US/O=Equifax Secure Inc./CN=Equifax Secure Global eBusiness CA-1
       i:/C=US/O=Equifax Secure Inc./CN=Equifax Secure Global eBusiness CA-1
    ---

All root certificates are self-signed, so I am not sure how to avoid this warning. It seems that the chain is incorrect. Instead of seeing subject and issuer, I see subject and issuer, and then an additional entry wherein the subject and issuer are the same. I thought I would try installing the root certificate in the `CACERT_PATH` where sendmail should look for root certificates by default. This required me to first generate a hash of the certificate subject name:

    openssl x509 -hash -in ca.crt -inform PEM -noout

This will return a hash like `abcd1234` or similar. I could then make a copy of the root certificate using the hash as the name and an extension of `0`.

    cp ca.crt abcd1234.0

A symbolic link would also work. Note that once this is done the verification is considerably simpler (no need to specify a `CAfile`):

    openssl verify sendmail.pem

Once this was verified I tried removing the `ca.crt` but then [sendmail](/wiki/sendmail) [SSL/TLS](/wiki/SSL%2fTLS) capacity didn't work at all. [This page](http://www.technoids.org/wwstarttls.html) contains more information on [SSL/TLS](/wiki/SSL%2fTLS) in [sendmail](/wiki/sendmail), but it doesn't seem to explain why my certificate chain is too long.

Compare this with what happens when I try connecting to a different server:

    $ openssl s_client -starttls smtp -connect smtp.gmail.com:25
    CONNECTED(00000003)
    depth=0 /C=US/ST=California/L=Mountain View/O=Google Inc/CN=smtp.gmail.com
    verify error:num=20:unable to get local issuer certificate
    verify return:1
    depth=0 /C=US/ST=California/L=Mountain View/O=Google Inc/CN=smtp.gmail.com
    verify error:num=27:certificate not trusted
    verify return:1
    depth=0 /C=US/ST=California/L=Mountain View/O=Google Inc/CN=smtp.gmail.com
    verify error:num=21:unable to verify the first certificate
    verify return:1
    ---
    Certificate chain
     0 s:/C=US/ST=California/L=Mountain View/O=Google Inc/CN=smtp.gmail.com
       i:/C=ZA/ST=Western Cape/L=Cape Town/O=Thawte Consulting cc/OU=Certification Services Division/CN=Thawte Premium Server CA/emailAddress=premium-server@thawte.com
    ---

Note that although verification couldn't proceed, there is no repetition in the certificate chain. It merely shows subject and issuer.

This compares with the messages I was initially seeing when I first tested (prior to installing the new `ca.crt`:

    CONNECTED(00000003)
    depth=0 /C=AU/O=secure.wincent.com/OU=GT42117481/OU=See www.rapidssl.com/resources/cps (c)07/OU=Domain Control Validated - RapidSSL(R)/CN=secure.wincent.com
    verify error:num=20:unable to get local issuer certificate
    verify return:1
    depth=0 /C=AU/O=secure.wincent.com/OU=GT42117481/OU=See www.rapidssl.com/resources/cps (c)07/OU=Domain Control Validated - RapidSSL(R)/CN=secure.wincent.com
    verify error:num=27:certificate not trusted
    verify return:1
    depth=0 /C=AU/O=secure.wincent.com/OU=GT42117481/OU=See www.rapidssl.com/resources/cps (c)07/OU=Domain Control Validated - RapidSSL(R)/CN=secure.wincent.com
    verify error:num=21:unable to verify the first certificate
    verify return:1
    ---
    Certificate chain
     0 s:/C=AU/O=secure.wincent.com/OU=GT42117481/OU=See www.rapidssl.com/resources/cps (c)07/OU=Domain Control Validated - RapidSSL(R)/CN=secure.wincent.com
       i:/C=US/O=Equifax Secure Inc./CN=Equifax Secure Global eBusiness CA-1
    ---

Note that this correctly only has one certificate in the chain, but that it fails to verify.

The [sendmail docs](http://www.sendmail.org/~ca/email/starttls.html) say that you should install "*one or more* CA certs in `confCACERT`" and "*zero or more* CA certs in confCACERT\_PATH". This explains why I can't remove `confCACERT` (it requires one or more certificates). Regardless of whether I install anything in `confCACERT_PATH` I still get the too-long chain.

I later received an email offering the following clarification:

> Install zero or more CA certs in `confCACERT_PATH` with (symbolic) links of their hashes pointing to them:
>
>     C=FileName_of_CA_Certificate
>     ln -s $C `openssl x509 -noout -hash < $C`.0

Note that I haven't tested this and I can't remember whether this is an avenue that I tried at the time (although I would have thought that I did seeing as it appears on the documentation that I linked to above). As I noted above, when I could get this to work I switch to another means of securing SMTP transport (see "[Using Stunnel to secure SMTP transport](/wiki/Using_Stunnel_to_secure_SMTP_transport)").

## [IMAPS](/wiki/IMAPS) and [POP3s](/wiki/POP3s)

Unlike [Apache](/wiki/Apache) and [sendmail](/wiki/sendmail), these services don't allow you to configure them to look for separate key and root certificate files (or if they do, I don't know of the configuration options) so I had to concatenate the key with the new certificate (already in [PEM](/wiki/PEM) format). In the past I've found that the ordering of elements is crucial; so I stuck with the order that has worked for me in the past: private key then the certificate:

    cat server.key.rapidssl \
        secure.wincent.com.crt.rapidssl \
        ca.crt.rapidssl > \
        /path/to/certs/imapd.pem.rapidssl

The rest is straightforward:

-   Make a backup of the old [PEM](/wiki/PEM) file(s).
-   `chmod 400` the [PEM](/wiki/PEM) files (the backup and the new one; the old one should already have the right permissions).
-   Drop the new file into place.
-   The same file will work for [POP3S](/wiki/POP3S) as well; on my system the files are named `imapd.pem` and `ipop3d.pem`.

Restart the services so that the changes get picked up:

    service xinetd restart

## See also

-   [SSL certificate renewal notes](/wiki/SSL_certificate_renewal_notes)

