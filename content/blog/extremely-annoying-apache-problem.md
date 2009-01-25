---
title: Extremely annoying Apache problem
tags: apache
---

I'm trying to roll out [SSL](/wiki/SSL) support for this application, and I've run into a very frustrating roadblock with [Apache](/wiki/Apache).

This was the last place I expected to find problems, seeing as the site isn't even served by Apache at all, but by [nginx](/wiki/nginx).

The problem is as follows:

1.  Apache is binding to the the SSL port, 443, on all IP addresses
2.  There is no way to stop Apache from doing this without completely breaking it

My config has two `Listen` directives in it; first:

    Listen 209.235.192.161:80

For normal [HTTP](/wiki/HTTP) traffic, and later on:

    Listen 443

For [HTTPS](/wiki/HTTPS) traffic.

This second line is the problem. Given that it is not scoped to a particular IP address, Apache binds to all available IPs and prevents [nginx](/wiki/nginx) from listening on port 443.

You would think that the solution would be to change that second line to:

    Listen 209.235.192.161:443

No, I'm afraid that's not right. With that line in place, Apache refuses to start:

    (98)Address already in use: make_sock: could not bind to address 209.235.192.161:443
    no listening sockets available, shutting down
    Unable to open logs

I'm at a total loss to explain why this is the case. If you ask it to bind to all interfaces it says, "Sure, no problem!" but if you ask it to bind to only one it says, "Sorry! Somebody else beat me to it!". The thing is, there *is* no "somebody else", only Apache.

I can confirm that there are no lingering Apache processes hanging around (inspected with `ps auxww | grep httpd`), and no other rogue processes suddenly latching on to port 443 when Apache's back is turned (inspected with `netstat -l`).

I can also confirm that the problem is not that the same IP address appears in two different `Listen` directives, because if I change the port number to something else the Apache starts up without a complaint:

    Listen 209.235.192.161:444

## Update

Looks like the cause was a side-effect of `apachectl graceful`. You need to use `apachectl stop`, wait a while, then do `apachectl start`. Perhaps I should have known, but geez.
