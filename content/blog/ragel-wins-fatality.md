---
title: Ragel wins! Fatality!
tags: blog
---

One of my projects is a [fast wikitext-to-HTML translator](http://git.wincent.com/wikitext.git). It's a [Ruby](http://www.wincent.com/knowledge-base/Ruby) extension written in [C](http://www.wincent.com/knowledge-base/C) with speed being one of its top design goals (robustness, predictability and security being the others). I'm working on this because the [Rails](http://www.wincent.com/knowledge-base/Rails) rewrite of this site will use [wikitext markup](http://www.wincent.com/knowledge-base/wikitext%20markup) for basically everything. Rails has a bad reputation for being slow and resource hungry, and that's why one of my primary objectives is speed; I don't want my wikitext parser being a bottleneck.

The translator itself consists of a [hand-coded parser written in C](http://git.wincent.com/wikitext.git?a=blob;f=ext/wikitext.c;h=59eab1da4da6c799ab148c4131d31e8d77c82d5e;hb=HEAD) paired with a scanner/tokenizer/lexer generated from a [grammar specification](http://git.wincent.com/wikitext.git?a=blob;f=ext/Wikitext.g;h=77bc2cc72a65d601843fc759d279a687b3daca81;hb=HEAD).

Up until now the scanner used a [ANTLR](http://www.wincent.com/knowledge-base/ANTLR)-generated lexer using the "C target" (although ANTLR itself is written in Java, it can target multiple languages, including C). The C target is the current speed king among ANTLR targets and is likely to remain so for the foreseeable future. It too is engineered with speed in mind and is quite frugal with resources (for example, when emitting tokens it maintains pointers into the input stream rather than making a copy of the substring for each token).

And the results were quite snappy. But for some time I've had the sneaking suspicion that a [Ragel](http://www.wincent.com/knowledge-base/Ragel)-generated scanner would be faster. I suspected this even though ANTLR uses all sorts of clever tricks like trying to predict which path to take and only backtracking if prediction fails.

You see, Ragel generates simple state machines: the building blocks of regular expressions. Whereas ANTLR is like a complex and unpredictable magic clock, Ragel state machines are totally transparent and predictable. I've spent many months trying to use ANTLR on a number of different projects and in every case *except* for this wikitext translator I've ended up putting it aside because I couldn't divine the incantations required to make it do its black magic. Ragel, on the other hand, is absurdly simple. You can build complex things out of it, but the base components are easily comprehensible. Compared to ANTLR, Ragel is incredibly easy to learn.





### Why Ragel should be better

So I suspected that Ragel might be a bit quicker. No amount of prediction in a predictive lexer can beat a pure state machine, which by definition is going to run in constant time because it simultaneously explores all possible paths. When you add backtracking into the mix (as a result of trying to always favor the longest match) then you lose your constant time but it should still be fast because the state machines themselves are so efficient.

One of Ragel's key advantages is that there is absolutely zero internal function call overhead. This is because the *are* no internal function calls; everything is done with basic [C](http://www.wincent.com/knowledge-base/C) control structures (`for` loops, `gotos`, `case` statements and the like). Once you're in the Ragel machine you can stay there until you've scanned all the text.

Another advantage is that it's trivial to do everything in [UTF-8](http://www.wincent.com/knowledge-base/UTF-8) using Ragel. [ANTLR](http://www.wincent.com/knowledge-base/ANTLR) is a [Java](http://www.wincent.com/knowledge-base/Java) tool and so it uses [UTF-16](http://www.wincent.com/knowledge-base/UTF-16), which means twice the memory most of the time. The C target makes the unfortunate decision of using the obsolete [UCS-2](http://www.wincent.com/knowledge-base/UCS-2) encoding (basically the same as UTF-16 but without surrogates which means that it can't represent all Unicode codepoints and is no longer recommended for use) because that's what maps most easily onto UTF-16. I looked at overriding it to use some other encoding but it looked non-trivial and error prone, and likely to break with every new ANTLR release.

Using UTF-8 with Ragel, on the other hand, should be much more memory efficient. 99% of all input is going to belong to the ASCII subset of UTF-8 anyway, which means that in most situations we'll be using exactly half the memory to process our text. We'll also be avoiding cumbersome and wasteful conversions back and forth between UCS-2 and UTF-8 (all input you get from [Ruby](http://www.wincent.com/knowledge-base/Ruby)/[Rails](http://www.wincent.com/knowledge-base/Rails) is going to be in UTF-8). When we do need to go beyond ASCII it should still be relatively quick. We'll take only a small speed hit because the kind of trivial bit-shuffling required to deal with multi-byte UTF-8 characters is exceedingly fast on modern CPUs.

And apart from performance I think I just wanted to use a tool that I actually understood, and that had a fathomable, deterministic relationship between the grammar you fed in and the recognizer you got out from the other end. And when I say "fathomable", I mean "possible to be understood by a mere user rather than only the author of the generator himself!". So I was tempted to switch to Ragel even if the performance gains where minimal or even non-existent.

Let me give one quick example of how ANTLR can be a difficult beast to tame. Consider this rule for recognizing [URI](http://www.wincent.com/knowledge-base/URI) tokens:

    URI : HTTP URI_CHARS (SPECIAL_URI_CHARS URI_CHARS)*;

This basically says you want to recognize as a URI a sequence that looks like "http", following by a bunch of "URI chars" (things like letters, numbers, and so on). And you also want to include "special URI chars" (things like the period) *provided* that they are followed by more "URI chars".

This is what allows you to correctly tokenize sentences like the following:

> My website is <http://www.wincent.com/>.

You *don't* want that last period to be included in the URI when you turn it into a hyperlink, but you *do* want the first period to be included because it's followed by "com".

Well, it turns out that the above rule won't work in ANTLR. Upon seeing "`SPECIAL_URI_CHARS`" it will try to be clever — *too* clever in this case — and predicts that what it is about to scan is in fact "`SPECIAL_URI_CHARS` followed by `URI_CHARS`". If you feed in a text like the above ANTLR will throw a recognition exception because its prediction turns out to be incorrect.

So you have to write the rule like this using a predicate:

    URI : HTTP URI_CHARS ((SPECIAL_URI_CHARS URI_CHARS)=> (SPECIAL_URI_CHARS URI_CHARS))*;

That last bit says, "recognize `SPECIAL_URI_CHARS` followed by `URI_CHARS`, but only if you've first checked to see that there really are `SPECIAL_URI_CHARS` followed by `URI_CHARS`". In other words, ANTLR scans ahead, and then goes back and rescans the same piece of text again.

It would be nice if you could use ANTLR without having to know these little tricks. But even if you are fortunate enough to know them, you're still in a less than desirable position; backtracking in the event of a failed match is expensive, but this kind of backtracking and *re*-scanning in the case of a successful match seems just plain wrong.

Now let's look at the equivalent rule in Ragel:

    uri = http uri_chars (special_uri_chars uri_chars)* ;

I think that speaks for itself, but I'll make an additional comment anyway. You can look at such a rule and know *exactly* what kind of state machine it maps to. Entirely predictable, and no black magic or fancy prediction logic under the hood.

### The numbers

The initial numbers are in and I couldn't be happier. Ragel has exceeded my wildest expectations.

                                    user     system      total        real
    short slab of ASCII text    0.180000   0.000000   0.180000 (  0.182539)
    short slab of UTF-8 text    0.320000   0.000000   0.320000 (  0.330065)
    longer slab of ASCII text   2.740000   0.000000   2.740000 (  2.792006)
    longer slab of UTF-8 text   5.000000   0.000000   5.000000 (  5.072432)

Each line corresponds to tokenizing a string 100,000 times. The ASCII examples are pure ASCII and represent the "best case" scenario for the scanner while the UTF-8 ones are for a "worst case" one in which the input text is swelled by 34-46% by multibyte characters.

If you look at the slow-down caused as you add more and more multi-byte characters you see it grow proportional to the number of additional bytes. That is: you're looking at a basically constant cost per-byte, regardless of the composition of the input.

So what are we seeing here? 8.24 seconds to tokenize 352 megabytes of input text, which equates to roughly 42.72 megabytes per second on my lowly iMac with its 1.86 GHz Intel Core Duo.

Here's the [initial version](http://git.wincent.com/wikitext.git?a=blob;f=experimental/wikitext_ragel.rl;h=5ab1e2787129acac1d8706fcd53047a4fffd242f;hb=refs/heads/ragel) of the Ragel scanner (although it may have evolved somewhat by the time you read this). As you can see, moving to Ragel comes at a small cost: you're running much "closer to the metal" and concerning yourself with pointers and token structures and the like. In a sense this is one of the things I most like about Ragel; I can actually see what it's doing and control it in every aspect: it's enigma-free.

But the cost brings a benefit too. Check out the corresponding numbers for the ANTLR scanner:

                                    user     system      total        real
    short slab of ASCII text    9.400000   1.870000  11.270000 ( 11.308913)
    short slab of UTF-8 text    8.620000   1.880000  10.500000 ( 10.551956)
    longer slab of ASCII text 132.380000  19.690000 152.070000 (153.296844)
    longer slab of UTF-8 text 116.280000  19.510000 135.790000 (136.788652)

As you can see, Ragel wipes the floor with it. While ANTLR doesn't suffer any speed hit at all when you start using multibyte characters, its absolute processing speed is nearly 38 times slower than that of Ragel. It tokenizes the same input text at a rate of about 1.14 megabytes per second. That sounds pretty good, until you compare it to Ragel's 42+ megabytes per second.

A side note: when I originally published this article I reported figures for Ragel that showed it was "only" 10 times faster than ANTLR; turning on fast goto-driven FSM with the `-G2` switch (as opposed to the default table-driven one) yielded a basically four-fold increase in speed. Now this really starts to get into the "mind-boggling" zone, how Ragel can produce scanners *so* much faster than the equivalent lexers in ANTLR's fastest target language. Can internal function call overhead explain such a large gap?

To be fair to ANTLR, not all of the time in the benchmark is spent inside the ANTLR lexer itself; some of it is spent converting the input from UTF-8 to UCS-2 before feeding it in to the lexer. Seeing as we're only testing how fast the lexer can spit out tokens, we let it off we don't worry about converting back to UTF-8 at the end (in the real, non-benchmark scenario, that *is* a penalty that we'd have to pay).

Is it fair to penalize the ANTLR lexer in this way? I think so; it *is* asking for UCS-2 input after all, so if that's what it wants...

And to put things in perspective, 10% or less of the time in those numbers is due to the encoding conversion. As I said above, modern CPUs are well suited to doing the basic bit-shuffling required to convert to and from UTF-8, and the benchmark is using a hand-coded converter that I wrote in C.

The following table shows the performance of the custom converter (prefixed with `internal`) on the same type and quantity of input. The lines prefixed with `iconv` are for the same conversion, but done using the Iconv library which comes with Ruby. As you can see the internal coding converter is much, much faster, and is really only responsible for a tiny portion of ANTLR's performance problem:

                                               user     system      total        real
    iconv    (short ASCII to UCS-2)        0.520000   0.010000   0.530000 (  0.531411)
    iconv    (short non-ASCII to UCS-2)    0.590000   0.000000   0.590000 (  0.585507)
    iconv    (longer ASCII to UCS-2)      10.770000   0.020000  10.790000 ( 11.009323)
    iconv    (longer non-ASCII to UCS-2)  14.570000   0.030000  14.600000 ( 14.710083)
    internal (short ASCII to UCS-2)        0.110000   0.000000   0.110000 (  0.106386)
    internal (short non-ASCII to UCS-2)    0.150000   0.000000   0.150000 (  0.147468)
    internal (longer ASCII to UCS-2)       1.300000   0.000000   1.300000 (  1.309406)
    internal (longer non-ASCII to UCS-2)   3.700000   0.010000   3.710000 (  3.717417)
    iconv    (short ASCII to UTF-8)        0.520000   0.000000   0.520000 (  0.544404)
    iconv    (short non-ASCII to UTF-8)    0.580000   0.000000   0.580000 (  0.592008)
    iconv    (longer ASCII to UTF-8)      11.810000   0.010000  11.820000 ( 11.858008)
    iconv    (longer non-ASCII to UTF-8)  14.840000   0.020000  14.860000 ( 14.909430)
    internal (short ASCII to UTF-8)        0.130000   0.000000   0.130000 (  0.133868)
    internal (short non-ASCII to UTF-8)    0.180000   0.000000   0.180000 (  0.179611)
    internal (longer ASCII to UTF-8)       2.550000   0.010000   2.560000 (  2.586608)
    internal (longer non-ASCII to UTF-8)   5.280000   0.010000   5.290000 (  5.327419)

### Future

The exciting part is that this is only the beginning. It's commonly held that in any kind of parsing or transformation it's the lexing that takes most of the time, so in one fell swoop I've optimized the biggest performance bottleneck in the transformer.

At the moment I've just made a scanner which spits out tokens one at a time, just like the ANTLR one did, but there will be a further performance improvement when I drop this in in place pf the ANTLR lexer because I'll be able to drop all of the tedious intermediate conversions to and from UCS-2 that I'm currently having to do in the parser.

Further down the track their is scope for even more optimizaton. Ragel machines can have actions embedded at them so I may even eventually decide to dump the whole "lex-then-parse" model entirely and just do all the transformation from inside the lexer, thus shaving off one more piece of overhead.
