---
title: Putting the "packrat" into PEG: adding memoizing to my Ruby parser generator
tags: blog
---

I've previously written about writing a [basic parser generator](http://www.wincent.com/a/about/wincent/weblog/archives/2007/01/writing_a_parse.php) in Ruby and then [adding support](http://www.wincent.com/a/about/wincent/weblog/archives/2007/02/abstract_syntax.php) for [Abstract Syntax Trees](http://en.wikipedia.org/wiki/Abstract_syntax_tree).

In my [first article](http://www.wincent.com/a/about/wincent/weblog/archives/2007/01/writing_a_parse.php) I noted:

> Although I didn't know it when I started, I was writing a parser generator that would produce a parser based on a [Parsing Expression Grammar](http://en.wikipedia.org/wiki/Parsing_expression_grammar) (PEG).

Parsing Expression Grammars go hand-in-hand with so-called "packrat parsers". Both terms were coined by [Bryan Ford](http://pdos.csail.mit.edu/~baford/packrat/) in the research work he did for his [Masters thesis](http://pdos.csail.mit.edu/~baford/packrat/thesis/). The core idea behind packrat parsers is [memoization](http://en.wikipedia.org/wiki/Memoization), the storage of intermediate parse results to avoid exponential increases in parse time caused by backtracking. Packrat parsers should always be able to operate in linear time (proportional to the length of their input), not exponential time (like ~~some~~ [most regular expression implementations](http://swtch.com/~rsc/regexp/regexp1.html), for instance).

Ruby rocks, and I've got quite a clean Object-Oriented design in my parser generator, so I was able to add automatic, optional memoization in only a few hours today (and most of that time was spent thinking rather than coding). Here are some initial performance numbers.





Memoization avoids exponential backtracking by trading storage (memory use) for speed. Every intermediate parse result is "remembered" in case it is needed again in the future, requiring more and more memory as the size of the input text grows, and also incurring some processing overhead (to "remember" the results and look them up as required). This processing overhead, however, should be roughly linear rather than exponential.

My implementation memoizes all kinds of "results"; perhaps "outcomes" would be a better term. Outcomes may include raised exceptions, thrown symbols, literal strings, arrays, or AST nodes may be returned. What this means is that basically all possible success and failure outcomes are captured.

#### Worst case results

So far I only have worst case results: extremely short inputs from my behaviour specs which don't really ever allow backtracking to get too far out of control. With these inputs parsing is actually slower with memoizing turned on. I'll be updating these results once I've tested with larger inputs.

The "worst of the worst case scenarios" is running the entire spec suite for Walrus. The input texts in the specs at this point in time are extremely small and the grammars used to parse them are also tiny, the minimum possible to be able to test for the desired behaviour. As a result there is relatively little backtracking going on.

There are 180 specs in all. Running all of the specs without memoizing turned on there are 15,585 parse events in all in 2.0 seconds.

When memoizing is turned on the execution time goes up by 25% (to 2.5 seconds) even though the total number of parse events is reduced to 12,183. Of these events, 11,627 were considered to be "new" (never seen before by the memoizer) and were stored in the cache; an additional 556 events were recognized by the memoizer as "seen before" and so the results could be returned from the cache rather than re-performing them. Note that this "short-circuting" didn't just save the 556 events that were identified as "seen before"; there were an additional 3,402 parse events which didn't have to be re-executed because the "short-circuiting" means that subsequent events depending on the 556 matches didn't have to be executed either.

On such small inputs memory usage is still well within reasonable limits so that lack of speed in the memoized parsing is almost entirely due to additional set-up and maintenance costs.

A slightly better test scenario, at least in theory, is running a subset of he spec suit consisting of tests of only the Walrus grammar and excluding the specs for the parser generator itself. These specs are closer to real world usage because the grammar itself is orders of magnitude more complex, although the input texts are still currently very small. Once the grammar is complete I will publish results with much bigger input texts.

The smaller scale test contains only 21 specs. Running them without memoizing turned on yields 12,773 parse events which execute in about 1.37 seconds.

With memoizing turned on the execution time increases by about 30% (to 1.8 seconds). This is slightly worse slow-down than that seen in the full test suite. The total number of parse events is 10,233, a saving of about 20% (similar to in the full test suite). Of these events, 9,693 were considered to be "new" and 540 were recognized by the memoizer as "seen before". The number of "seen before" events was relatively larger in this case (5% compared with 4.5%) and the total number of "short circuited" events (all "seen before" events and their dependent events which would otherwise have been executed) is slightly smaller (24% versus 25%).

#### Limitations

These numbers refer to the initial memoizing implementation, developedin a few hours with absolutely no attempt at optimization. It may be possible to speed up the implementation after profiling and analysis. On the other hand, it may be that the performance numbers change for large inputs.

One of the limitations of this particular packrat implementation is that it is not as granular as it theoretically could be. That is, whereas a theoretical ideal packrat parser would operate at the character level, the current implementation operates at the level of entire tokens (or sequences of tokens). Whereas a character-level implementation would be able to recognize the common roots of strings like "foobar" and "foobaz", the token-level implementation sees them as distinct tokens.

Experimentation would be required to determine whether this is a disadvantage or not. A character-level implementation could pinpoint parslet/coordinate pairs with greater granularity, but it would also require more entries in the memoizing cache and the overhead might be higher because the memoizing code itself would be called more often.

I will post more data when it becomes available.

#### Update: 16 February 2007

Some [more numbers](http://www.wincent.com/a/about/wincent/weblog/archives/2007/02/updated_packrat.php).
