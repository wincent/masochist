---
tags: ssl wiki
---

Here is how I generated a worthless "throwaway" self-signed [SSL](/wiki/SSL) certificate for use with [nginx](/wiki/nginx) in my staging environment.

    # generate super secret private key
    # (not really, this key and the certificate are "throwaway" items)
    openssl genrsa -des3 -out ssl.key 1024

    # generate the self-signed certificate
    openssl req -new -x509 -nodes -sha1 -days 365 -key ssl.key -out ssl.crt

    # create decrypted version of key so that nginx can be started without a passphrase
    openssl rsa -in ssl.key -out ssl.key.insecure
    chmod 600 ssl.key.insecure

## See also

-   For "real" [SSL](/wiki/SSL) certificates (signed by an issuer that most browsers will recognize), see "[Getting new SSL certificates for use with nginx](/wiki/Getting_new_SSL_certificates_for_use_with_nginx)"
