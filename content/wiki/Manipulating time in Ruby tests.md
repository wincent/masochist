---
tags: ruby testing timecop delorean time.warp wiki
cache_breaker: 1
---

There are lots of possibilities discussed in [this question](http://stackoverflow.com/questions/1215245/ruby-unit-testing-how-to-fake-time-now) on Stack Overflow, "Ruby unit testing: how to fake Time.now?", but basically the answers boil down to:

-   stub `Time.now` manually using your existing test double framework ([RR](/wiki/RR) or whatever)
-   use a specialized time-stubbing library which provides convenience methods for stubbing `Time.now`; examples include:
    -   Delorean: <https://github.com/bebanjo/delorean>
    -   Timecop: <https://github.com/jtrupiano/timecop>
    -   time\_warp: <https://github.com/harvesthq/time-warp>
-   roll your own time-stubbing library
-   set up your test fixtures or factories to create objects with the desired timestamps already in place
-   don't stub; instead refactor your code so that you can pass in the "clock" that will be queried for what the time is

# Comparison of stubbing libraries

Personally I've generally tried to eschew stubbing of a core class like `Time` and have tried to use the "factory" approach. This, however, can get a bit tiresome, depending on how much time-sensitive specs you have to write.

## Delorean

Is a simple library whose implementation consists of a single file about 50 lines long.

It provides the following "cute" [API](/wiki/API) (cute because of the homage to the "Back to the Future" films):

-   `Delorean.time_travel_to` taking a string that will be parsed using the `Chronic` library (eg. "2 seconds ago"), or a `Date` or `Time` instance
-   `Delorean.jump` taking an offset in seconds to move forward or back in time
-   `Delorean.back_to_the_present`

The `#time_travel_to` method takes an optional block that can be used to limit the scope of the stubbing to that block only.

## Timecop

This is arguably the most complex and comprehensive of the stubbing libraries, stubbing not only `Time.now` but also `Date.today` and `DateTime.now` (if and only if `Date` and `DateTime` have been made available via a `require 'date'` beforehand).

The following [API](/wiki/API) methods are provided:

-   `Timecop.freeze` stubs `Time.now` (et al) to always return a fixed (non-advancing) value
-   `Timecop.travel` jumps to the specified time
-   `Timecop.return` restores `Time.now` (et al) to their unmodified behavior

Both `#freeze` and `#travel` take an optional block that can be used to limit the scope of the stubbing to that block only.

Both take a parameter which may be:

-   a `Time`, `DateTime` or `Date` instance
-   a numeric offset in seconds to move forwards (or backwards) in time
-   a year, month, day, hour, minute, second tuple (all values are optional, defaulting to 0 if not present)

## time\_warp

This is probably the simplest of the three, having only one method in the API, `pretend_now_is`, which takes a block and twiddles with the time for the duration of the block.

## Overall evaluation

-   Delorean:
    -   pros: simple implementation
    -   cons: dependency on Chronic gem
-   Timecop:
    -   pros:
        -   shorter method names
        -   no redundancy in the API design (ie. the `#travel` method encompasses the functionality of both the `#time_travel_to` and `#jump` methods in Delorean)
        -   nice coherence in the API design (ie. both `#freeze` and `#travel` take the same kinds of parameters and optional blocks)
        -   more features (eg. `#freeze` method)
        -   more complete coverage of time sources (ie. of `Date.today` and `DateTime.now` in addition to `Time.now`)
    -   cons: more complex implementation
-   time\_warp:
    -   pros: \*sound of crickets\*
    -   cons: extremely limited feature set

While I like the simplicity of the Delorean implementation, I think Timecop has a considerably better API. Despite being more complex, the codebase is still small enough to review in a few minutes and to me it looks to be bug free, so my recommendation for now is to go with Timecop.

# See also

-   partial list of Ruby "time warping" libraries: <http://ruby-toolbox.com/categories/time_warping.html>
-   an example of a "roll your own" library: <http://snippets.dzone.com/posts/show/4776>
