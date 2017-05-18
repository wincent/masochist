---
tags: rails wiki
cache_breaker: 1
---

This article is about [Rails "gotchas"](/wiki/Rails_%22gotchas%22): things that may be puzzling or confounding if you don't know about them. Beware that this is a long-lived document and the behaviour in some or all of these "gotchas" might have changed since they were originally written.

## Overlong `text` fields get silently truncated when written to [MySQL](/wiki/MySQL)

If you use the `text` type in your migrations, this will map to the `TEXT` column type in your [MySQL](/wiki/MySQL) database, which has a limit of about 65535 bytes.

When you save a record with more than 65535 bytes in that attribute it will be silently truncated to that length and you won't be given any warning. You will lose data.

The moral of the story is:

> If you think (or care) that a user might submit more than 64KB of content for such an attribute, you should set up a validation so that they'll be notified of the problem if they ever exceed the limit.

Adding more validations is adding more overhead and slowing you down, but it's better than silently throwing away data.

The other lesson you might want to take home from this is that if you really do want to accept more than 64KB in your attributes then you'll need to explicitly use the `MEDIUMTEXT` column type. It's [MySQL](/wiki/MySQL)-specific, but in any application of decent size you've probably already been forced down the path of using some MySQL-specific stuff anyway.

You'll still want to use validations, of course, because the `MEDIUMTEXT` column type allows you more space than you'd really want to make available (enough for it to be abused).

I'm writing about this "gotcha" because it's something I ran into in January 2009 (surprised it took me that long). For more details see [ticket \#1190](/issues/1190).

## The `cookies` hash is not actually a hash

> `[C]ookies` isn't a `Hash`, although the `cookies` method does return a `CookieJar` object, which extends `Hash`. `CookieJar` mangles the expected `Hash` methods of `[]` and `[]=` with these gotchas:
>
> -   The `CookieJar` object does not represent one set of cookies, it represents 2 sets: the incoming cookies from the browser, and the outgoing cookies that will be sent back to the client
> -   `cookies[:key]` gets you the incoming cookies from the client
> -   `cookies[:key]=` value sets outgoing cookies that will be sent back to the client
> -   ... all of which mean that `cookies[:its] = "1999"` will not allow you to retrieve that value with `cookies[:its]`.

Source: "Rails Cookies Mangles the Hash Interface", <http://www.40withegg.com/2007/1/5/rails-cookies-mangles-the-hash-interface/>

## Beware of returning `false` from a `before_filter`

See ["before\_filter" in Ruby on Rails](/wiki/%22before_filter%22_in_Ruby_on_Rails).

## Validation

Validation is quite a tricky subject. As an example see, "[Validating passphrases with Ruby on Rails](/wiki/Validating_passphrases_with_Ruby_on_Rails)". In that article I describe the order in which `:save`, `:create` and `:update` validations are applied (probably not the order you think it is), as well as note some of the tricky issues that can crop up validating virtual attributes.

## Reserved MySQL column/model attribute names

See [Reserved MySQL column/Rails model attribute names](/wiki/Reserved_MySQL_column%2fRails_model_attribute_names).
