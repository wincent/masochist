---
tags: wiki
cache_breaker: 1
---

## History

The [Knowledge Base](/wiki/Knowledge_Base) is a collection of useful information that I compile about topics of interest to a technical audience, particularly [Mac OS X](/wiki/Mac_OS_X) users and developers. It was originally published as a series of entries in a [Movable Type](/wiki/Movable_Type)-backed [weblog](/wiki/weblog) at <http://wincent.com/a/knowledge-base/> (but note that that [URL](/wiki/URL) may well be defunct by the time you read this; I will provide a static mirror at some point so that the content doesn't go away forever).

I used the [weblog](/wiki/weblog) format from November 2004 through to August 2006, but it was a poor fit for this type of information which would better be organized in a [wiki](/wiki/wiki). So from August 2006 through to early 2008 I maintained a new version of the [Knowledge Base](/wiki/Knowledge_Base) using a [MediaWiki](/wiki/MediaWiki) installation at [kbase.wincent.com](http://kbase.wincent.com/). During this time the Knowledge Base accumulated hundreds of pages of information.

When the [wincent.com](http://wincent.com/) site redesign went live in April 2008 the old [Knowledge Base](/wiki/Knowledge_Base) was replaced with the custom [wiki](/wiki/wiki) that you're reading right now. A static mirror of the old [MediaWiki](/wiki/MediaWiki) content will continue to be available at <http://kbase.wincent.com/old/> while requests for <http://kbase.wincent.com/> will be redirected to this wiki.

In addition, the old content was exported from the [MediaWiki](/wiki/MediaWiki) installation via an [XML](/wiki/XML) dump and imported into the new [wiki](/wiki/wiki). The export/import was fairly straightforward and *most* of the content has made it through with only minor glitches or omissions, largely due to the fact that the [wikitext](/wiki/wikitext) markup used in the new wiki was designed from the beginning with a large degree of MediaWiki compatibility in mind.

As time permits I intend to clean up the old content in a couple of key areas:

-   [Markup](/wiki/Markup): [MediaWiki](/wiki/MediaWiki) sometimes needed additional markup like `<br />` tags to produce the desired layout, but the `<br />` tag is neither needed nor supported by the new [wikitext](/wiki/wikitext) module; this kind of markup needs to be removed (and I will probably be able to automate this to a certain degree).
-   [Tags](/wiki/Tags): [MediaWiki](/wiki/MediaWiki) used a hierarchical system of categories to organize content, but the new [wiki](/wiki/wiki) uses "[Web 2.0](/wiki/Web_2.0)"-style tags. During the data import categories were automatically converted into tags but many of these will need to be "massaged" by hand because categories and tags, although similar, have slightly different semantics and don't really map perfectly onto one another.

## Naming

In the "[Web 2.0](/wiki/Web_2.0)" spirit the new site strives for simplification in everything. One consequence of this is that the navigation has been trimmed down (the number of links in the navigation bar reduced) and the term "[Knowledge Base](/wiki/Knowledge_Base)" has been dumped in favor of the shorter and less-pretentious "[wiki](/wiki/wiki)".

## Purpose

Here's the original statement of purpose from the old [MediaWiki](/wiki/MediaWiki) installation:

> Many of the articles will be of particular interest to developers although the scope of the [Knowledge Base](/wiki/Knowledge_Base) extends beyond development and even beyond [Mac OS X](/wiki/Mac_OS_X) in many cases. Basically, I try to make a point of recording here useful stuff that I may want to remember in the future. I am making it publicly available because it may be of use to others as well.
>
> Note that the information published here is provided as a free public service without any guarantees or warranties of any kind. I hope that it may prove useful to you but you use this information at your own risk. It is not legal, medical, technical or any other kind of professional advice. See the [disclaimer](/wiki/disclaimer) for more details.
>
> This is the new [wincent.com](/wiki/wincent.com) [Knowledge base](/wiki/Knowledge_base) intended to replace the old Knowledge base at <http://wincent.com/a/knowledge-base/>. The old Knowledge base was powered by [Movable Type](/wiki/Movable_Type) which despite my efforts at organizing things using hierarchical categories was not very well suited to the task (it is, after all, [weblog](/wiki/weblog) software). The new Knowledge base is in [wiki](/wiki/wiki) format, a much better fit for the task at hand, and uses the same [MediaWiki](/wiki/MediaWiki) software that powers [Wikipedia](/wiki/Wikipedia).
>
> The plan is that eventually all content will be migrated from the old Knowledge base to the new one. For the time being the content will remain in place at the old [URL](/wiki/URL) and the links on the rest of the site have not yet been updated to point to this [wiki](/wiki/wiki).
