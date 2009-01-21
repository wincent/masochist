---
tags: ack
cache_breaker: 1
---

## Links

-   <http://search.cpan.org/dist/ack/>: official site
-   <http://cpanratings.perl.org/dist/ack>: comments and reviews
-   <http://www.perladvent.org/2006/5/>: a fairly detailed review with screenshots

## The `.ackrc` file

I like to pipe output through the pager by default, so I set up an `~/.ackrc` file with this:

    --pager=less

Add a `haml` type. Without this your `.haml` files won't get scanned unless you pass `--all`. Now they will be scanned by default (and you can do `ack --haml` and `ack --nohaml` to scope the search as well):

    --type-set=haml=.haml

## See also

-   My first-time install notes: "[Installing Ack 1.86 on Mac OS X Leopard 10.5.5](/wiki/Installing_Ack_1.86_on_Mac_OS_X_Leopard_10.5.5)"

