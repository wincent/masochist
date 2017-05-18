---
tags: wiki
---

[OpenID](/wiki/OpenID) is a decentralized authentication system that provides an alternative to login systems that use username/password combinations.

Anyone can set up an [OpenID](/wiki/OpenID) server. I've done this for my identity at <http://wincent.colaiuta.net/> as described in the article, "[Setting up a single-user OpenID server](/wiki/Setting_up_a_single-user_OpenID_server)".

# Trust

It is important to realize that there is no trust implicit in the [OpenID](/wiki/OpenID) authentication model. That is, when I sign in with "wincent.colaiuta.net" the system ensures that I am the person who *controls* that [URL](/wiki/URL), but it says nothing about *who* that person is. An independent verification is required if you want to know that the controller of a given [URL](/wiki/URL) really is who they claim to be: in the current example you could go to <http://wincent.colaiuta.net/> and make a judgement based on what you find there, but the truth is that there is not much content that would enable you to do so. Just as there is nothing stopping a third-party from creating an account on a forum with a username like `WincentColaiuta`, there is no reason why a third-party couldn't register a domain name like wincentcolaiuta.eu or any other similar-sounding name and use that as an [OpenID](/wiki/OpenID) [URL](/wiki/URL).

As such, [OpenID](/wiki/OpenID) "identities" should always be taken with a grain of salt. Picking authoritative [URLs](/wiki/URLs) is a starting point (for example, in my case the most "authoritative" [URL](/wiki/URL) I could have chosen would be simply wincent.com, but I wanted to have my full name in the [URL](/wiki/URL)), but one should always bear in mind the lack of trust (intentionally) designed into the system.

# See also

-   Official site: <http://openid.net/>
-   [Wikipedia](/wiki/Wikipedia) article on [OpenID](/wiki/OpenID): <http://en.wikipedia.org/wiki/OpenID>
