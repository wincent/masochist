---
tags: rails wiki
---

[Rails](/wiki/Rails) allows you to set up your routes (in `config/routes.rb`) so that one or more resources are nested inside another resource.

# Example

Consider a forum application with a `forums` resource routed as follows:

    map.resources :forums

Different forums could be viewed using [URLs](/wiki/URLs) like:

-   <http://example.com/forums/11>
-   <http://example.com/forums/28>

Now, imagine that forums can have multiple topics, and topics can have multiple posts:

    map.resources :topics
    map.resources :posts

Individual topics could be viewed as follows:

-   <http://example.com/topics/19>
-   <http://example.com/topics/56>

And individual posts like this:

-   <http://example.com/posts/20>
-   <http://example.com/posts/34>

You can define nested routes as follows, in recognition of the fact that posts belong to topics, and topics belong to forums:

    map.resources :forums do |forum|
      forum.resources :topics do |topic|
        topic.resources :posts
      end
    end

This in turn enables [URLs](/wiki/URLs) like these:

-   <http://example.com/forums/2/topics/5>
-   <http://example.com/forums/11/topics/5/posts/12>

Note that the [URL](/wiki/URL) reflects the relationship that each entity has to its containing "parent". As far as I can tell, this is the only benefit that nested routes bring.

# Verdict

Personally, I am not such a big fan of nested resources. I think they introduce too much additional complexity in your controller logic, which increases the scope for bugs, and in return offer little benefit. They redundantly encode information in the [URL](/wiki/URL), making it unnecessarily longer. Nested routes are more complex and therefore harder to test, which increases the likelihood that they either won't be tested at all or they'll be tested inadequately or inaccurately.

## Uniqueness

Note that the `id`s at each level must be unique: it is not possible for forum `1` and forum `2` to both have a topic with an `id` of `1`. This leads to [URLs](/wiki/URLs) like this one in which the very first post in a new topic can have an `id` like `3366`:

-   <http://example.com/forums/2/topics/122/posts/3366>

Given that the post `id` is clearly unique within the application I would rather just go directly to it with a [URL](/wiki/URL) like this one:

-   <http://example.com/posts/3366>

In this way redundant information is eliminated from the [URL](/wiki/URL) and it is kept shorter.

The longer [URL](/wiki/URL) is also more brittle because if a moderator ever decides to move a topic to a different forum the old [URL](/wiki/URL) will no longer work.

## Discoverability

Another problem with nested resources is that the [URLs](/wiki/URLs) don't lend themselves to casual exploration. By way of example, consider a topic like this:

-   <http://example.com/forums/3/topics/135>

It would be nice to look at that [URL](/wiki/URL), wonder what the previous topic might be, and manually edit the [URL](/wiki/URL) to read:

-   <http://example.com/forums/3/topics/134>

This will only work if `topic` number `134` belongs to `forum` number `3`, something which may not necessarily be true.

Depending on your stand-point, this lack of discoverability may actually be a feature ([security through obscurity](/wiki/security_through_obscurity) of sorts), but for me it is a point against nested routes.

## Testability

Because non-nested routing is simpler it is also easier to test.
