---
title: Internal encoding conversion benchmarks
---

[Ruby](http://www.wincent.com/knowledge-base/Ruby) has a (somewhat justified) reputation for being slow but one of the great things about it is that it is easy to write extensions for it in lightening-fast [C](http://www.wincent.com/knowledge-base/C). Despite the fact that for some time now C has been "the new assembly", extensions written in C integrate remarkably well with Ruby's pure garbage-collected, object-oriented goodness.

I am working on [Rails](http://www.wincent.com/knowledge-base/Rails) application at the moment and pretty much *all* the textual content is going to be entered and stored as [wikitext](http://www.wincent.com/knowledge-base/wikitext), my favorite free-form markup. I could do the parsing in Ruby but I want this to be *fast*, so I didn't even bother prototyping it in Ruby first: I dived straight into C from the beginning, using an [ANTLR](http://www.wincent.com/knowledge-base/ANTLR)-generated lexer (using the C target) and a custom parser/transformer on top of that in hand-coded C.

The core (Java) target of ANTLR itself uses UTF-16 but the C target uses UTF-16's obsolete half-brother, UCS-2. Actually, it apparently uses UTF-32 under the covers but the interface it exposes works with UCS-2. The problem with UCS-2 is that it can't represent all Unicode characters, only a subset of them, because it doesn't have a surrogate mechanism like UTF-16 does. For precisely this reason it is easier to deal with because you have a guarantee that all characters are exactly 16 bits, but it sucks because it means that there are some valid Unicode input strings that you can't convert to UCS-2, which in turn means that your ANTLR-generated C recognizer won't be able to process them. UTF-32 doesn't have this problem because it is both fixed width *and* large enough to represent all of the Unicode codepoints, but the down side is that it takes up a little more space (probably not much of an issue with a wikitext parser, where most slabs of input text aren't ever going to occupy more than a few KB). In any case once the ANTLR C target's [API](http://www.wincent.com/knowledge-base/API) settles down into something stable I'll consider making the switch to UTF-32 if it doesn't require too much work (or I'll just throw the whole ANTLR thing out the window and write a scanner using [Ragel](http://www.wincent.com/knowledge-base/Ragel)).

But I digress. I wanted to talk about benchmarking.





All that stuff about ANTLR was just to background to explain that in my wikitext parser I have to convert from the input encoding (UTF-8) to UCS-2 for internal processing purposes. Then at the end I convert back to UTF-8 and return the results.

I initially did this with the [iconv](http://www.ruby-doc.org/stdlib/libdoc/iconv/rdoc/index.html) module that comes with the Ruby standard library. Then, seeing as it is relatively simple to convert back and forth between UCS-2 and UTF-8 I decided to write some internal conversion methods in pure C, thus eliminating the dependency on iconv and hopefully being faster to boot. If I ever move to UTF-32 the methods will be easily extended.

So I just did some benchmarking to compare the results. I basically converted in both directions with both implementations (the custom internal one and the iconv one), and I tried with four different classes of input: short strings with only ASCII characters in them, short strings with non-ASCII characters, big slabs with only ASCII characters, and big slabs with non-ASCII characters.

Each line in the following tables shows the time taken for 100,000 iterations; the first batch are from the "rehearsal" run and then there's the "real thing":

    Sanity checking: ....
    Rehearsal --------------------------------------------------------------------
    iconv (short ASCII to UCS-2)       0.490000   0.000000   0.490000 (  0.500046)
    internal (short ASCII to UCS-2)    0.120000   0.010000   0.130000 (  0.116604)
    iconv (short UTF-8 to UCS-2)       0.560000   0.000000   0.560000 (  0.561324)
    internal (short UTF-8 to UCS-2)    0.130000   0.000000   0.130000 (  0.140209)
    iconv (longer ASCII to UCS-2)      9.080000   0.030000   9.110000 (  9.222262)
    internal (longer ASCII to UCS-2)   1.240000   0.010000   1.250000 (  1.263230)
    iconv (longer UTF-8 to UCS-2)     12.940000   0.040000  12.980000 ( 13.131333)
    internal (longer UTF-8 to UCS-2)   3.480000   0.020000   3.500000 (  3.548404)
    iconv (short ASCII to UTF-8)       0.500000   0.000000   0.500000 (  0.503098)
    internal (short ASCII to UTF-8)    0.130000   0.000000   0.130000 (  0.159429)
    iconv (short UTF-8 to UTF-8)       0.560000   0.000000   0.560000 (  0.558365)
    internal (short UTF-8 to UTF-8)    0.140000   0.000000   0.140000 (  0.148177)
    iconv (longer ASCII to UTF-8)      9.150000   0.030000   9.180000 (  9.230961)
    internal (longer ASCII to UTF-8)   1.520000   0.000000   1.520000 (  1.563547)
    iconv (longer UTF-8 to UTF-8)     11.840000   0.040000  11.880000 ( 12.011918)
    internal (longer UTF-8 to UTF-8)   4.670000   0.010000   4.680000 (  4.722022)
    ---------------------------------------------------------- total: 56.740000sec

                                           user     system      total        real
    iconv (short ASCII to UCS-2)       0.490000   0.000000   0.490000 (  0.498087)
    internal (short ASCII to UCS-2)    0.110000   0.000000   0.110000 (  0.117257)
    iconv (short UTF-8 to UCS-2)       0.570000   0.000000   0.570000 (  0.570418)
    internal (short UTF-8 to UCS-2)    0.130000   0.010000   0.140000 (  0.145102)
    iconv (longer ASCII to UCS-2)      9.080000   0.020000   9.100000 (  9.217037)
    internal (longer ASCII to UCS-2)   1.240000   0.010000   1.250000 (  1.264873)
    iconv (longer UTF-8 to UCS-2)     12.940000   0.040000  12.980000 ( 13.138847)
    internal (longer UTF-8 to UCS-2)   3.480000   0.010000   3.490000 (  3.526458)
    iconv (short ASCII to UTF-8)       0.500000   0.000000   0.500000 (  0.509422)
    internal (short ASCII to UTF-8)    0.140000   0.000000   0.140000 (  0.147287)
    iconv (short UTF-8 to UTF-8)       0.560000   0.010000   0.570000 (  0.570325)
    internal (short UTF-8 to UTF-8)    0.150000   0.000000   0.150000 (  0.170726)
    iconv (longer ASCII to UTF-8)      9.170000   0.020000   9.190000 (  9.268911)
    internal (longer ASCII to UTF-8)   1.520000   0.010000   1.530000 (  1.554178)
    iconv (longer UTF-8 to UTF-8)     11.840000   0.030000  11.870000 ( 12.044493)
    internal (longer UTF-8 to UTF-8)   4.670000   0.020000   4.690000 (  4.744175)

I was pleasantly surprised at the speed-up. As far as I know, the Ruby Iconv module is just a wrapper for the iconv library (which is written in C, I believe), so I wouldn't expect it to be so slow. And there are no clever optimization tricks in my implementation or shortcuts; it's basically written based on the information [here](http://en.wikipedia.org/wiki/UTF-8) and [here](http://en.wikipedia.org/wiki/UTF-16/UCS-2).

Observations:

-   For short strings the internal implementation is about 4 to 5 times faster
-   For longer strings the gap widens to as much as 7 times faster
-   Unsuprisingly, for both implementations processing input in the ASCII range is faster
-   Slightly more interestingly, for the internal implementation converting *to* UCS-2 is faster than converting *from* it; the fluctuations in the case of the iconv implemenation aren't as clear
