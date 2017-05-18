---
tags: site wiki
cache_breaker: 1
---

This page is a migration checksheet where I am keeping notes on the status of the server move from [Rackspace](/wiki/Rackspace) to [INetU](/wiki/INetU).

## [DNS](/wiki/DNS)

-   last of the domains and subdomains transferred on 28 March 2008; inspected with [dig](/wiki/dig) and everything looks correct

## [Email](/wiki/Email)

-   last of the accounts and aliases transferred on 27 March 2008; tests show that incoming and outgoing mail is working

## [Apache](/wiki/Apache)

-   [HTTP](/wiki/HTTP) pages; random sample tested and working:
    -   <http://wincent.com/a/products/synergy-classic/>
    -   <http://wincent.com/a/about/>
    -   <http://wincent.com/a/news/archives/2008/03/final_server_mi.php>
-   [HTTPS](/wiki/HTTPS) pages; random sample tested and working:
    -   <https://secure.wincent.com/a/store/>
    -   <https://secure.wincent.com/a/products/synergy-classic/purchase/>
    -   <https://secure.wincent.com/a/products/winswitch/donate/>

## Dynamic "placeholders"

Formerly dynamic parts of the site which either have been migrated over to the new [Rails](/wiki/Rails)-based site or have static placeholders in place.

-   <http://forums.wincent.com/>
    -   redirects to: <https://wincent.com/forums/>
-   <http://bugs.wincent.com/>
    -   redirects to: <https://wincent.com/issues/>
-   <http://lists.wincent.com/>
    -   redirects to: <http://wincent.com/a/support/lists/> (static placeholder in place)
-   <http://kbase.wincent.com/> ([wiki](/wiki/wiki))
    -   redirects to <https://wincent.com/wiki/>
    -   static mirror of old content available at: <http://kbase.wincent.com/old/>

## Static content

-   Old [Movable Type](/wiki/Movable_Type)-based [Knowledge Base](/wiki/Knowledge_Base): <http://wincent.com/a/knowledge-base/>
    -   looks to be intact
-   <http://wincent.org/> (news page)
    -   redirects to: <https://wincent.com/blog/>
    -   old posts still online at: <http://wincent.com/a/news/> (content looks intact)
-   <http://colaiuta.net/> (personal web log)
    -   redirects to: <https://wincent.com/blog/>
    -   old posts still online at: <http://wincent.com/a/about/wincent/weblog/> (content looks intact)
-   <http://wincent.com/> (main product page)
    -   redirects to: <http://wincent.com/a/products/> (content looks intact)

## Dynamic pages

-   Download links (for example, <http://wincent.com/download.php?item=SynergyJaguar.dmg>): working
-   <http://wincent.com/a/contact/mail/> (contact form): working
-   <https://secure.wincent.com/a/support/registration/form.php> (lost license code form):
    -   products released prior to April 2005 (in original database): working
    -   products released April 2005 and later (in newer database): working
-   <http://wincent.com/a/support/update-address/> (change of email address form): working
-   <https://secure.wincent.com/a/support/tickets/> (support tickets)
    -   redirects to: <https://wincent.com/issues/new/>

## Protected pages

-   <https://secure.wincent.com/a/products/install/licensees/> (Install licensees area): working

## Special pages

-   Product activation: working
-   Automated license code mailing at purchase time: working

## Redirects and aliases

-   <http://www.wincent.com/> -&gt; <http://wincent.com/>
-   <http://atosym.wincent.com/> -&gt; <http://wincent.com/a/products/atosym/>
-   <http://bansshee.com/> -&gt; <http://wincent.com/a/products/bansshee/>
-   <http://www.bansshee.com/> -&gt; <http://wincent.com/a/products/bansshee/>
-   <http://bansshee.net/> -&gt; <http://wincent.com/a/products/bansshee/>
-   <http://www.bansshee.net/> -&gt; <http://wincent.com/a/products/bansshee/>
-   <http://bansshee.org/> -&gt; <http://wincent.com/a/products/bansshee/>
-   <http://www.bansshee.org/> -&gt; <http://wincent.com/a/products/bansshee/>
-   <http://bugs.wincent.com/> -&gt; <https://wincent.com/bugs/>
-   <http://colaiuta.net/> -&gt; <http://wincent.com/a/about/wincent/weblog/>
-   <http://www.colaiuta.net/> -&gt; <http://wincent.com/a/about/wincent/weblog/>
-   <http://forums.wincent.com/> -&gt; <https://wincent.com/forums/>
-   <http://hextrapolate.wincent.com/> -&gt; <http://wincent.com/a/products/hextrapolate/>
-   <http://winhex.wincent.com/> -&gt; <http://wincent.com/a/products/hextrapolate/>
-   <http://install.wincent.com/> -&gt; <http://wincent.com/a/products/install/>
-   <http://lists.wincent.com/> -&gt; <http://wincent.com/a/support/lists/>
-   <http://renamer.wincent.com/> -&gt; <http://wincent.com/a/products/renamer/>
-   <http://secure.wincent.com/> -&gt; <http://wincent.com/>
-   <http://store.wincent.com/> -&gt; <https://secure.wincent.com/a/store/>
-   <http://strings.wincent.com/> -&gt; <http://wincent.com/a/products/wincent-strings-util/>
-   <http://synergy.wincent.com/> -&gt; <http://wincent.com/a/products/synergy-classic/>
-   <http://synergy.wincent.org/> -&gt; <http://wincent.com/a/products/synergy-classic/>
-   <http://synergyadvance.wincent.com/> -&gt; <http://wincent.com/a/products/synergy-advance/>
-   <http://advance.wincent.com/> -&gt; <http://wincent.com/a/products/synergy-advance/>
-   <http://test.wincent.com/> -&gt; <http://wincent.com/a/products/wotest/>
-   <http://wotest.wincent.com/> -&gt; <http://wincent.com/a/products/wotest/>
-   <http://us.wincent.com/> -&gt; <http://wincent.com/>
-   <http://walrus.wincent.com/> -&gt; <http://wincent.com/a/products/walrus/>
-   <http://wincent.org/> -&gt; <http://wincent.com/a/news/>
-   <http://www.wincent.org/> -&gt; <http://wincent.com/a/news/>
-   <http://winswitch.wincent.com/> -&gt; <http://wincent.com/a/products/winswitch/>

These redirects take you from [HTTP](/wiki/HTTP) [URLs](/wiki/URLs) to [HTTPS](/wiki/HTTPS) ones where appropriate:

-   <http://wincent.com/a/store/> -&gt; <https://secure.wincent.com/a/store/>
-   <http://wincent.com/a/support/registration/> -&gt; <https://secure.wincent.com/a/support/registration/>
-   <http://wincent.com/a/support/tickets/> -&gt; currently redirects to new [Rails](/wiki/Rails) app
-   <http://wincent.com/a/products/install/licensees/> -&gt; <https://secure.wincent.com/a/products/install/licensees/>
-   <http://wincent.com/a/products/synergy-classic/purchase/> -&gt; <https://secure.wincent.com/a/products/synergy-classic/purchase/>
-   <http://wincent.com/a/products/winswitch/donate/> -&gt; <https://secure.wincent.com/a/products/winswitch/donate/>
-   <http://wincent.com/a/products/winhex/> -&gt; <http://wincent.com/a/products/hextrapolate/>

## Directory indices

These directories should allow index listings:

-   <http://wincent.com/lgpl/> (working)
-   <http://wincent.com/gpl/> (working)
