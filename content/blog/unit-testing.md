---
title: Unit testing
tags: blog
---

I'm a big fan of [unit testing](http://www.wincent.com/knowledge-base/unit%20testing), and every now and again something happens which confirms my preference.

At the moment I am working on a transformer that uses a third-party library and that library expects [UCS-2](http://www.wincent.com/knowledge-base/UCS-2) input (ugh). So I take my [UTF-8](http://www.wincent.com/knowledge-base/UTF-8) input, convert it to UCS-2, and as I get bits of text back from the library I transform them back into UTF-8.

My code is about 1,200 lines of [C](http://www.wincent.com/knowledge-base/C) and I have almost 900 lines of unit tests written in [Ruby](http://www.wincent.com/knowledge-base/Ruby) so far. The coverage is reasonable at this stage, although I continue to add more and more input variants to the tests.

This morning I decided to take the slightly more efficient approach of minimizing my encoding conversions by doing all operations internally in UCS-2 and performing a once-off conversion on receiving the input text, and another on returning the final output text.

Thanks to the extensive unit tests I was able to make invasive, far-reaching changes throughout the entire source file, effectively ripping out the textual spine of the old version and replacing it with a new version. It was one of those changes that had to be done all at once — incremental conversion was not possible — and the code would be unrunnable while the conversion was in process. Some of the changes involved "blind" [regular expression](http://www.wincent.com/knowledge-base/regular%20expression)-based global find-and-replace operations.

After doing all this I was able to run the unit tests, caught one small error (easily corrected with another mass find-and-replace), and then fire off the tests again to find that everything was working again. This kind of thing would be totally painful without unit tests, but with them it is a breeze. You make edits quicker and with more confidence (fearlessly I would say, especially with the safety net of [version control](http://www.wincent.com/knowledge-base/version%20control) providing you with a quick way of reviewing changes and backing them out if necessary). And you emerge at the end of it confident that you haven't changed the behaviour of your code in any way (other than making it faster, as profiling shows).
