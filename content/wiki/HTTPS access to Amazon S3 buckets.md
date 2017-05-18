---
tags: aws s3 wiki
cache_breaker: 1
---

Amazon [S3](/wiki/S3) maintains [SSL](/wiki/SSL) certificates for:

-   `s3.amazonaws.com`
-   `*.s3.amazonaws.com`

Note that as far as the wildcard certificate is concerned, most (many? all?) browsers expect the wildcard subdomain to be a single word (ie. "foo") and not a string of words separated by dots (ie. "foo.example.com"), which is a common naming pattern for S3 buckets.

Remember also that the following three forms of bucket addressing all refer to the same resource:

-   `s3.amazonaws.com/[BUCKET]/[KEY]`
-   `[BUCKET].s3.amazonaws.com/[KEY]`
-   `[BUCKET AS CNAME ALIAS]/[KEY]` (ie. `[BUCKET AS CNAME ALIAS]` is an alias for `[BUCKET].s3.amazonaws.com`)

For example, these are all equivalent:

-   `s3.amazonaws.com/my.fancy.s3.alias.example.com/foo/bar.gz`
-   `my.fancy.s3.alias.example.com.s3.amazonaws.com/foo/bar.gz`
-   `my.fancy.s3.alias.example.com/foo/bar.gz`

This means that if you want to provide SSL access to a resource, only one of those [URLs](/wiki/URLs) is going to work without triggering a browser warning about the certificate (ie. the one beginning with `s3.amazonaws.com`).

So you have two options here:

-   Either always use the working URL of the form `https://s3.amazonaws.com/[BUCKET]/[KEY]`
-   Set up a bucket name that is a single word without any periods

The latter option may be trickier as the bucket name may already be taken.

In my case I have s3.wincent.com set up as a CNAME alias for s3.wincent.com.s3.amazonaws.com, and this works fine for HTTP requests using URLs of the form `http://s3.wincent.com/[KEY]`.

For HTTPS requests I have a different bucket set up, "wincent", which means I can use URLs of the form `https://wincent.s3.amazonaws.com/[KEY]`, or of course, `https://s3.amazonaws.com/wincent/[KEY]`.

I can also issue requests for items in the "s3.wincent.com" bucket over HTTPS using URLs of the form `https://s3.amazonaws.com/s3.wincent.com/[KEY]`.
