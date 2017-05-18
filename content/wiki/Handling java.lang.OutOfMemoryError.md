---
tags: antlr java wiki
---

While working on an [ANTLR](/wiki/ANTLR) lexer for recognizing [RFC 3986](/wiki/RFC_3986)-compliant [URIs](/wiki/URIs) I ran into the following error:

    Exception in thread "main" java.lang.OutOfMemoryError: Java heap space

[This page](http://hausheer.osola.com/docs/5) reveals how to increase the heap limits; in the following example I pass use the `-Xms` switch to set the starting heap size to 32 MB, and the `-Xmx` switch to set the maximum heap size to 512 MB:

    java -Xms32m -Xmx512m org.antlr.Tool RFC3986.g

It turns out that no amount of memory I can throw at [ANTLR](/wiki/ANTLR) allows it to successfully complete, and I suspect the likely cause is something in my grammar provoking an infinite loop. My post to the [ANTLR](/wiki/ANTLR) mailing list asking about how to troubleshoot this further can be found [here](http://www.antlr.org:8080/pipermail/antlr-interest/2007-June/021088.html).

So even though the `-Xms` and `-Xmx` switches didn't help me in this case, I think they're important things to have in your [Java](/wiki/Java) toolbox.
