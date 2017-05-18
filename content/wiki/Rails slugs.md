---
tags: rails wiki
cache_breaker: 1
---

# Opinions on [Rails](/wiki/Rails) [URLs](/wiki/URLs) and slugs

## "Transparent opaque changeable permanent URLs"

[Aristotle Pagaltzis](http://plasmasturm.org/about/) [argues](http://plasmasturm.org/log/358/) that:

-   [URLs](/wiki/URLs) should never change, and so unique id numbers in [URLs](/wiki/URLs) are good: slugs based on titles aren't so good because the title can be edited, thus breaking the [URL](/wiki/URL)
-   [URLs](/wiki/URLs) are valuable for search engine ranking, and so meaningful words in the slug are a good idea
-   These conflicting priorities can be reconciled by starting the slug with an opaque, constant component (the id) and appending a meaningiful, title-derived textual component, yielding [URLs](/wiki/URLs) like:

<http://example.com/123-pink-elephants>

-   The web application should ignore the textual component and use only the id in deciding what to render; for example, the following [URL](/wiki/URL) is equivalent:

<http://example.com/123-blue-elephants>

-   These latter [URLs](/wiki/URLs) should use a [HTTP](/wiki/HTTP) 301 status code (permanent redirect) to send the browser to the definitive, non-changing version of the [URL](/wiki/URL)

## "How to get more literal URLs and still use IDs"

The [official Rails weblog](http://weblog.rubyonrails.org/) echoes this position in [this article](http://weblog.rubyonrails.org/2007/2/4/how-to-get-more-literal-urls-and-still-use-ids), where it is recommended that [URLs](/wiki/URLs) like this one be used:

<http://example.com/123-blue-elephants>

Commenters on that post add the following opinions:

-   That [URLs](/wiki/URLs) beginning with strings like `123-` are ugly and a [URL](/wiki/URL) like <http://example.com/blue-elephants> would be preferable
-   That a less ugly alternative is to use the id as a separate path component (as in <http://example.com/123/blue-elephants>); there is no problem with having two articles with the same title using this method, but searching only on the textual part of the permalink requires the textual part to be unique
-   Using the full-title to derive the slug can lead to titles that are too long
-   People are "too obsessed" with "pretty" [URLs](/wiki/URLs) and "normal users" don't pay attention
-   There are instances ([wikis](/wiki/wikis) for example) where "hackable" [URLs](/wiki/URLs) add value

## "SEO Optimization of URLs in Rails with to\_param"

Referenced by the above article is [this post](http://jroller.com/page/obie?entry=seo_optimization_of_urls_in) by [Obie Fernandez](http://jroller.com/page/obie) which explains the technical details behind getting [URL](/wiki/URL) permalinks to work as previously advocated.

Points of interest:

-   [Rails](/wiki/Rails) calls `to_param` when processing incoming parameters; in the case of `ActiveRecord` it returns the `id` as a string (`"1"`, `"2"` etc, or `nil` if no `id` is set yet).
-   You can therefore override the `to_param` method in your [models](/wiki/models) to return something else other than the plain id; for example: `"#{id}-#{name.gsub(/[^a-z0-9]+/i, '-')}"` (but note that that won't catch accented characters).
-   If you use RESTful route helpers, then this override will be picked up automatically.
-   If you instead manually construct links using `link_to` then you must remember to pass the model object (`@user`, for example) instead of just the `id` (`@user.id`) otherwise your `to_param` override will have no effect.
-   [Rails](/wiki/Rails) calls `to_i` when searching by `id`, so a `find` message like `User.find('1-john')` will actually use [SQL](/wiki/SQL) like `SELECT * FROM users WHERE (users.id = 1)`.

Commenters add:

-   A normalizer for converting to [ASCII](/wiki/ASCII) prior to auto-generating slugs: <http://www.ruby-forum.com/topic/94688>
-   [Normalization](http://jroller.com/page/obie?entry=seo_optimization_of_urls_in#comment10) using the [Unicode](/wiki/Unicode) module

## "URLs on Rails"

[This](http://www.notsostupid.com/blog/2006/07/07/urls-on-rails/) is an older article by [Sebastian Delmont](http://www.zonageek.com/) on the subject, linked to by Obie Fernandez.

Nothing new to see there, although the commenters do provide a couple of ways of handling accented characters in the textual portion of the slug:

-   Using an [explicit lookup and substitution](http://www.notsostupid.com/blog/2006/07/07/urls-on-rails/#comment-4373)
-   Using `CGI::escape`: <http://pastie.textmate.org/66219>

## "Search Engine Friendly URLs with Ruby on Rails"

[A summary](http://gabrito.com/post/search-engine-friendly-urls-in-rails) of approaches and plug-ins for implementing so-called "search engine friendly" [URLs](/wiki/URLs):

-   acts\_as\_sluggable: <http://tore.darell.no/pages/5-acts-as-sluggable>
-   acts\_as\_urlnameable: <http://gabriel.gironda.org/articles/2006/03/09/acts_as_urlnameable-released>
-   acts\_as\_slugable: <http://multi-up.ca/code/>
-   acts\_as\_friendly\_param: <http://www.chrisfarms.com/2007/2/11/seo-friendly-urls-in-rails>
-   permalink\_fu: <http://mephistoblog.com/2007/1/14/improved-url-escaping-for-permalinks>

## "Even better looking URLs with permalink\_fu"

Source: <http://www.seoonrails.com/even-better-looking-urls-with-permalink_fu>

## "SEO for Ruby on Rails"

Source: <http://www.tonyspencer.com/2007/01/26/seo-for-ruby-on-rails/>

## "Blank Slate"

While not specifically related to [Rails](/wiki/Rails), [John Gruber](/wiki/John_Gruber) has [this to say](http://daringfireball.net/2007/03/blank_slate) on slugs:

> Yes, even URLs are designed. When I started DF in August 2002, nearly all Movable Type-powered weblogs used URLs such as: <http://example.com/archives/003495.html>, where the number is a unique sequential identifier for each entry generated by Movable Type. Almost nothing in such URLs is useful.
>
> -   The word “archives” is superfluous.
> -   The number is meaningful only to the software, not to the reader. Additionally, this structure makes it difficult to switch to different software while continuing to use the same URLs.
> -   The .html extension is unsightly and needless.
>
> DF’s article URLs look like this: /2007/03/blank\_slate, following a very simple and self-evident pattern: /year/month/slug. I considered the perhaps more obvious /year/month/date/slug, but decided against it. Including the day of the month would add three extra characters to each URL, and add very little useful information – monthly granularity is good enough in the long run for a web site where I seldom publish more than one article on any given day (unless I wished to repeat the same slug line within the same month, which strikes me as counter to the purpose of including a slug within the URL). The year, month, and slug provide useful context – just by looking at the URL alone, you know when it was written and perhaps have a rough idea what it is about. I can usually look at one of DF’s URLs and remember which specific article it refers to.

# My take

I personally don't like [URLs](/wiki/URLs) which jam together an opaque identifier and a human-readable slug. I think they're ugly. When I first saw [URLs](/wiki/URLs) of this type, I thought, "Who was this designed for? A computer or a human being?"; in trying to simultaneously please both target audiences these [URLs](/wiki/URLs) only succeed in looking unclean.

I am also wary because implementing such [URLs](/wiki/URLs) requires knowledge of an internal implementation detail in [Rails](/wiki/Rails); if [Rails](/wiki/Rails) changes in the future you may need to jump through hoops to get your [URLs](/wiki/URLs) working again.

This last reason alone is enough to stop me from implementing these "[SEO](/wiki/SEO)-friendly" [URLs](/wiki/URLs), although admittedly the fact that [37signals](/wiki/37signals) uses them (example, <http://www.37signals.com/svn/posts/247-calling-all-basecamp-customers-in-nyc-or-chicago>) makes it unlikely that [Rails](/wiki/Rails) will be introducing a breaking change in the future.

Above all, I have a lot of faith in [Google](/wiki/Google)'s ability to index the best content without needing keywords in the [URL](/wiki/URL) to locate it; there are plenty of other ways in which you can make your pages easy to index that don't require you making uncomfortable compromises about your [URL](/wiki/URL) design.

So given a choice between numeric IDs and number-plus-text, I will opt for numeric IDs. Take [this post](http://gabrito.com/post/search-engine-friendly-urls-in-rails) for example, where the author sustains that this:

<http://gearandboats.com/forums/1-boats/topics/51-fantasia-35-mark-ii-cruiser>

Is an improvement over this:

<http://gearandboats.com/forums/1/topics/51>

I personally think the latter is much, much better. Dynamic, user-provided content like forums really isn't a field that I consider ripe for [search engine optimization](/wiki/search_engine_optimization).

I also agree with John Gruber that every element of the site should be designed, and that includes the slugs. This especially applies to things like [weblog](/wiki/weblog) posts; unlike forums, [weblog](/wiki/weblog) posts should have some kind of permanence. I don't think the slug should be automatically generated; I think the user should take some time thinking about what they want it to be (and so the threat of your [URLs](/wiki/URLs) changing goes away).

So for me I think the optimal solution is:

-   Use numeric IDs in your [URLs](/wiki/URLs).
-   Allow the user to tailor a textual slug if he or she so desires; this should only be in appropriate sections of your site (weblog posts) and only when the user wants to take the time to do it.
-   Textual slugs should be optional.
-   Textual slugs should be unique.
-   Textual slugs should be permanent.

I also don't care too much about [SEO](/wiki/SEO). I believe that if your content is good then you'll get a high ranking. But I do think it is important to strive for human readable [URLs](/wiki/URLs) on important articles (stuff that you expect to get linked to a lot) because many humans will mouse over a link and make a decision about whether to click on it based on what they see the destination [URL](/wiki/URL) is.

## Implementation details

The solution I'm recommending here requires that [models](/wiki/models) with slugs should have a slug column in the database. The slug should be guaranteed unique in that model. The model should have a `to_param` method that returns the slug if it is available, otherwise falls back to the `id`. The model should have a `find_by_id_or_slug` method (or similar) so that both numeric and slug-based [URLs](/wiki/URLs) will automatically work. This could fairly easily be factored into a plug-in for use by multiple models. Ideally, because you want your slugs to be permanent, only the superuser should be allowed to change them once set. Similarly, it would be nice to have a mechanism to redirect from old slugs to new slugs in the event of a change (once again the uniqueness requirement would dictate that no old slug names collided with any current slug names).
