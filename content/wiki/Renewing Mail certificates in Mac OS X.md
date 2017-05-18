---
tags: email wiki
cache_breaker: 1
---

# Comodo (new procedure)

-   Using [Safari](/wiki/Safari), go to <http://www.instantssl.com/ssl-certificate-products/free-email-certificate.html>
-   Fill out the short form and submit
-   Check your email for the download link
-   Open downloaded file by double-clicking; it will automatically open in the Keychain Access utility

# Thawte (old procedure)

**Note:** these notes were made back when Thawte used to give out free personal e-mail certificates, and they [pulled the plug](http://www.sslshopper.com/article-thawte-shuts-down-free-email-certificates.html) in late 2009. [Comodo](http://www.instantssl.com/ssl-certificate-products/free-email-certificate.html) seems to have taken up the slack.

These are notes made while renewing my Mail certificates.

-   Using [Firefox](/wiki/Firefox), go to: <http://www.thawte.com/>
-   From the "quick login" pop-up, choose "Personal E-Mail Certificates"
-   Enter your username (your email address) and password (previously used when obtaining initial certificate)
-   Once logged in, click on "certificates" (<https://www.thawte.com/cgi/personal/cert/contents.exe>)
-   Click on "view certificate status" (<https://www.thawte.com/cgi/personal/cert/status.exe>)
-   Click on "request another" (<https://www.thawte.com/cgi/personal/cert/enroll.exe>)
-   Under "X.509 Format Certificates" click the "request" button
-   Select "Mozilla Firefox/Thunderbird, Netscape Communicator/Messenger" and click the "request" button
-   Click the "next" button
-   Select your email address from the list and click the "next" button
-   Click the "next" button
-   In the "Accept Default Extensions" section click the "accept" button
-   Select a 2048 bit key and click the "next" button
-   Click the "finish" button
-   Go back to the certificate manager page (<https://www.thawte.com/cgi/personal/cert/status.exe>)
-   Once the certificate "Status" shows as "issued" click on the "Navigator" link
-   Click the "fetch" button; Firefox should show a sheet confirming that the certificate has been installed
-   Go to the Firefox preferences
-   In the section, "Avanzado", choose "Cifrado" (this is in Spanish; I imagine that in the English version it will be "Advanced" and "Encryption" or similar)
-   Click on the button "Ver certificados" (probably "View certificates")
-   Select the appropriate certificate and press "Copia de seguridad" ("Backup")
-   Delete the exported certificate from the Firefox certificate manager
-   Quit Firefox
-   Drag the exported `p12` certificate to the Keychain Access application
-   Add it to the appropriate keychain; in my case I use a separate keychain for storing email certificates
-   Enter the password used when exporting the certificate, and the password for the keychain
-   Delete the `p12` file

Repeat for any other email addresses.

# See also

-   "How to Set Up Encrypted Mail on Mac OS X": <http://www.macdevcenter.com/pub/a/mac/2003/01/20/mail.html?page=1> (written in 2004 but still useful and adaptable to the current version of [Mac OS X](/wiki/Mac_OS_X))
