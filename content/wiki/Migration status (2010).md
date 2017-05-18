---
tags: site wiki
cache_breaker: 1
---

This page is a migration checksheet where I am keeping notes on the status of the server move from [INetU](/wiki/INetU) to [AWS](/wiki/AWS). It is based on the similar page that I made two years ago for the [Rackspace](/wiki/Rackspace)-to-[INetU](/wiki/INetU) migration ("[Migration status (2008)](/wiki/Migration_status_%282008%29)").

## [DNS](/wiki/DNS)

-   all domains and subdomains switched to new servers; **TODO:** inspect with [dig](/wiki/dig) and possibly [dnswalk](/wiki/dnswalk) to confirm that everything is correct

## [Email](/wiki/Email)

-   active accounts and aliases transferred; tests show that incoming and outgoing mail is working on both the general purpose and the [Rails](/wiki/Rails) instance

## [Rails](/wiki/Rails)

-   <https://wincent.com/blog>: working

## [Apache](/wiki/Apache)

-   [HTTP](/wiki/HTTP) pages; random sample tested and working:
    -   <http://wincent.com/a/products/synergy-classic/>
    -   <http://wincent.com/a/about/>
    -   <http://wincent.com/a/news/archives/2008/03/final_server_mi.php>

Note that those pages actually redirect to www.wincent.com, something which is required now that Apache is running on an entirely different machine now from the rest of the site and therefore needs a different domain name.

-   [HTTPS](/wiki/HTTPS) pages; random sample tested and working:
    -   <https://secure.wincent.com/a/store/>
    -   <https://secure.wincent.com/a/products/synergy-classic/purchase/>
    -   <https://secure.wincent.com/a/products/winswitch/donate/>

## Dynamic "placeholders"

Formerly dynamic parts of the site which either have been migrated over to the new [Rails](/wiki/Rails)-based site or have static placeholders in place.

-   <http://forums.wincent.com/>
    -   redirects to: <http://wincent.com/forums/>
-   <http://bugs.wincent.com/>
    -   redirects to: <http://wincent.com/issues/>
-   <http://lists.wincent.com/>
    -   redirects to: <http://wincent.com/a/support/lists/> (static placeholder in place)
-   <http://kbase.wincent.com/> ([wiki](/wiki/wiki))
    -   redirects to <http://wincent.com/wiki/>
    -   static mirror of old content available at: <http://kbase.wincent.com/old/>

## Static content

-   Old [Movable Type](/wiki/Movable_Type)-based [Knowledge Base](/wiki/Knowledge_Base): <http://wincent.com/a/knowledge-base/>
    -   looks to be intact
-   <http://wincent.org/> (news page)
    -   redirects to: <http://wincent.com/blog/>
    -   old posts still online at: <http://wincent.com/a/news/> (content looks intact)
-   <http://colaiuta.net/> (personal web log)
    -   redirects to: <http://wincent.com/blog/>
    -   old posts still online at: <http://wincent.com/a/about/wincent/weblog/> (content looks intact)
-   <http://wincent.com/> (main product page)
    -   currently redirects to <https://wincent.com/> (blog)
    -   ideally will want it to redirect to products listing (used to redirect to <http://wincent.com/a/products/> but will wait until the Rails-based product listing is ready and substitute that for the blog)

## Dynamic pages

-   Download links (for example, <http://wincent.com/download.php?item=SynergyJaguar.dmg>): working
-   <http://wincent.com/a/contact/mail/> (contact form): working
-   <https://secure.wincent.com/a/support/registration/form.php> (lost license code form):
    -   products released prior to April 2005 (in original database): working
    -   products released April 2005 and later (in newer database): working
-   <http://wincent.com/a/support/update-address/> (change of email address form): working
-   <https://secure.wincent.com/a/support/tickets/> (support tickets)
    -   redirects to: <http://wincent.com/issues/new/>

## Protected pages

-   <https://secure.wincent.com/a/products/install/licensees/> (Install licensees area): working

## Special pages

-   Product activation: working
-   Automated license code mailing at purchase time: working

## Redirects and aliases

-   <http://www.wincent.com/> -&gt; <http://www.wincent.com/a/products>
-   <http://atosym.wincent.com/> -&gt; <http://wincent.com/a/products/atosym/>
-   <http://bansshee.com/> -&gt; no longer registered
-   <http://www.bansshee.com/> -&gt; no longer registered
-   <http://bansshee.net/> -&gt; no longer registered
-   <http://www.bansshee.net/> -&gt; no longer registered
-   <http://bansshee.org/> -&gt; no longer registered
-   <http://www.bansshee.org/> -&gt; no longer registered
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
-   <http://us.wincent.com/> -&gt; dropped
-   <http://walrus.wincent.com/> -&gt; <http://wincent.com/a/products/walrus/>
-   <http://wincent.org/> -&gt; <http://wincent.com/a/news/>
-   <http://www.wincent.org/> -&gt; <http://wincent.com/a/news/>
-   <http://winswitch.wincent.com/> -&gt; <http://wincent.com/a/products/winswitch/>
-   <http://wincent.com/a/products/winhex/> -&gt; <http://wincent.com/a/products/hextrapolate/>

These redirects take you from [HTTP](/wiki/HTTP) [URLs](/wiki/URLs) to [HTTPS](/wiki/HTTPS) ones where appropriate:

-   <http://wincent.com/a/store/> -&gt; <https://secure.wincent.com/a/store/>
-   <http://wincent.com/a/support/registration/> -&gt; <https://secure.wincent.com/a/support/registration/>
-   <http://wincent.com/a/support/tickets/> -&gt; currently redirects to new [Rails](/wiki/Rails) app
-   <http://wincent.com/a/products/install/licensees/> -&gt; <https://secure.wincent.com/a/products/install/licensees/>
-   <http://wincent.com/a/products/synergy-classic/purchase/> -&gt; <https://secure.wincent.com/a/products/synergy-classic/purchase/>
-   <http://wincent.com/a/products/winswitch/donate/> -&gt; <https://secure.wincent.com/a/products/winswitch/donate/>

## Directory indices

These directories should allow index listings:

-   <http://wincent.com/lgpl/> (working)
-   <http://wincent.com/gpl/> (working)
