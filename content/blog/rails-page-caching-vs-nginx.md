---
title: Rails page caching vs nginx
tags: rails nginx blog
cache_breaker: 1
---

Just ran into a surprising conflict between [the "canonical", recommended way](http://brainspl.at/nginx.conf.txt) of setting up [nginx](/wiki/nginx) to take advantage of [Rails](/wiki/Rails) page caching, and Rails RESTful routes.

### How caching works

          # this is the meat of the rails page caching config
          # it adds .html to the end of the url and then checks
          # the filesystem for that file. If it exists, then we
          # rewite the url to have explicit .html on the end 
          # and then send it on its way to the next config rule.
          # if there is no file on the fs then it sets all the 
          # necessary headers and proxies to our upstream mongrels
          if (-f $request_filename.html) {
            rewrite (.*) $1.html break;
          }

The basic idea is that if you request `/products`, nginx will first check to see if there is a `/products.html` file on the disk. If so, that gets served up directly and nginx doesn't even touch Rails. Very fast. On the other hand, if it's not there then nginx connects upstream to your Rails app.

On the Rails side, you serve these requests when they come in, and anything that you want to page cache you just write out the page to `/products.html` where you know nginx will pick it up next time around.

So, up till now I'd never been bitten by the inherent conflict between this method and Rails RESTful routes. Basically because I'd only ever cached [Atom](/wiki/Atom) feeds up til now, and that meant that my cached feeds were being written to `/products.atom`.

### The problem

Well, today I set up page caching for the [HTML](/wiki/HTML) format for the first time and I ran into problems.

1.  Request `/products` for first time.
2.  `/products.html` is written out to disk.
3.  Visit `/products/new`, fill out the form, and click "Submit".
4.  The browser makes a POST request to the `/products` URL.
5.  nginx checks to see if `/products.html` exists, and it does, but POSTing to a static HTML file on disk doesn't make any sense, so it returns a 405 "Not Allowed" error.

In other words, once you've page-cached the HTML for the "index" action, you can no longer perform the "create" action.

### Solutions

What are our options here?

-   Forget about page-caching the HTML format of the "index" action?
-   Set up some alternative, non-RESTful route for performing the "create" action?
-   Make nginx only check for on-disk files for GET requests?

Of those three options, the latter one leaps off the page as the most desirable one.

I check the [nginx wiki](http://wiki.codemongers.com/NginxHttpRewriteModule#if) and with a sense of relief see that the rewrite module can indeed check to see what the request method is (POST, GET etc).

But it turns out that the `if` directive can't be nested, and it doesn't support `&&` or `and`, which would allow you to combine the two conditions that you are interested in:

1.  That the request method is GET; and
2.  That there exists a cached HTML version of the resource on disk.

In other words, this won't work:

    if (-f $request_filename and $request_method = GET) {
      rewrite (.*) $1.html break;
    }

Nor this:

    if (-f $request_filename && $request_method = GET) {
      rewrite (.*) $1.html break;
    }

And neither will this:

    if ($request_method = GET) {
      if (-f $request_filename) {
        rewrite (.*) $1.html break;
      }
    }

I found a [couple](http://marc.info/?l=nginx&m=120127273709362&w=2) of [workarounds](http://markmail.org/message/bso6kcjwav72m4nx) out there, but most of them looked pretty horrid. In the end [this](http://forum.slicehost.com/comments.php?DiscussionID=2087) is what gave me the inspiration I needed. I later also found [this one](http://wiki.codemongers.com/NginxRewriteMultiCondExample) which evidently has its uses.

My final solution looks something like this:

    if (-f $request_filename) {
      break;
    }

    # cached pages
    set $cache_extension '';
    if ($request_method = GET) {
      set $cache_extension '.html';
    }

    # the above is a hack because nginx doesn't allow nested or ANDed ifs
    if (-f $request_filename$cache_extension) {
      rewrite (.*) $1.html break;
    }

    # everything else goes to the mongrel cluster
    if (!-f $request_filename) {
      proxy_pass http://mongrels;
      break;
    }

So yes, there is a bit of repetition in there for non-GET requests because we end up checking for the existence of the same file twice; but GET requests turn out to be the most common by far (probably about 99% of all requests) so it's not such a huge problem.

But even with the repetition, at least we don't have any unsightly fake `location` blocks in there.

The only remaining question, and it's one which I've always had with the original config, is whether that last `!-f` check is required. After all, we are checking for the existence of `$request_filename` *yet again* there (even if it's phrased in terms of non-existence). Could we not just move the `proxy_pass` directive outside the scope of the `if` block and be done with it?

### Update

A little experimentation and it looks like that last `!-f` check can indeed be omitted. The final `break` can probably go too. At least it seems to work that way in local testing.
