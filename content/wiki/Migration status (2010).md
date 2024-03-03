---
tags: site wiki
cache_breaker: 1
title: Migration status (2010)
---

This page is a migration checksheet where I am keeping notes on the status of the server move from [INetU](/wiki/INetU) to [AWS](/wiki/AWS). It is based on the similar page that I made two years ago for the [Rackspace](/wiki/Rackspace)-to-[INetU](/wiki/INetU) migration ("[Migration status (2008)](/wiki/Migration_status_%282008%29)").

## [DNS](/wiki/DNS)

-   all domains and subdomains switched to new servers; **TODO:** inspect with [dig](/wiki/dig) and possibly [dnswalk](/wiki/dnswalk) to confirm that everything is correct

## [Email](/wiki/Email)

-   active accounts and aliases transferred; tests show that incoming and outgoing mail is working on both the general purpose and the [Rails](/wiki/Rails) instance

## Special pages

-   Product activation: working
-   Automated license code mailing at purchase time: working
