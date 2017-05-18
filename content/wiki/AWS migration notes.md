---
tags: aws wiki
cache_breaker: 1
---

Notes made while migrating from [INetU](/wiki/INetU) to [Amazon Web Services](/wiki/Amazon_Web_Services).

-   Allocate 2 new Elastic IPs:
    -   184.73.234.210
    -   184.73.232.208
-   Set up `A` records in [Nettica](/wiki/Nettica) DNS for the IPs:
    -   184.73.234.210: zenyatta.unixhosts.net
    -   184.73.232.208: mondatta.unixhosts.net
-   Adjust "generalpurpose" security group to allow traffic on the following ports:
    -   icmp -1 (ping)
    -   tcp 22 (SSH)
    -   tcp 80 (HTTP)
    -   tcp 443 (HTTPS)
    -   tcp 143 (IMAP)
    -   tcp 993 (Secure IMAP)
    -   tcp 110 (POP3)
    -   tcp 995 (Secure POP3)
    -   tcp 25 (SMTP)
    -   tcp 465 (SMTPS)
    -   tcp/udp 3690 (Subversion)
    -   tcp 9418 (Git)
-   Create a "rails" security group for use with standalone [Rails](/wiki/Rails) instances, allowing traffic on these ports:
    -   icmp -1 (ping)
    -   tcp 80 (HTTP)
    -   tcp 443 (HTTPS)
-   Launch a new instance based on "Basic Fedora Core 8" AMI using "generalpurpose" security group
-   Associate elastic IP (zenyatta) with new instance
