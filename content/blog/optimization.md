---
title: Beware of cute optimizations bearing gifts
tags: command.t c
fb: https://www.facebook.com/glh/posts/10153216194746307
twitter: https://twitter.com/wincent/status/704567011288838145
---

I have [a side project](https://github.com/wincent/command-t) whose main feature is performance. Everything else is secondary. It's a fuzzy file finder for [Vim], designed to be the fastest way of opening files even in enormous repos with as many as a million files in them. I use it dozens &mdash; sometimes hundreds &mdash; of times a day, and each time I use it it saves me seconds. Given that I work in large repos, living without it would be hard to do.

I've been sharpening this particular axe for six years now. The low-hanging fruit has long since been scooped up. At this point, wins of 1% are gratefully seized. 5% wins are a cause for celebration. In this post I want to look at some of these optimizations (part I), including one particularly beguiling one which was actually a long-standing bug (part II) and another which delivered a startling 10x boost even after six years of optimization (part III).

# Part I: How to make a fast fuzzy search

Let's start by looking at how Command-T got fast initially. We start with a fuzzy matching algorithm hand-tuned to work well with file paths: it knows that certain characters (after slashes, dots, and underscores for example) are more important, and it knows that humans expect contiguous runs of characters to score highly.

## Write it in C

This is the "cheat" option. Instead of laboring to make your Vimscript plug-in fast, you write the performance-critical core in C and wrap that in Ruby ([Python would work too](https://github.com/JazzCore/ctrlp-cmatcher)) because using a scripting language with a portable C extension layer is how you can get C code into Vim. Finally, you interface with Vim via a thin Vimscript layer.

Alas, this makes your plug-in hard to install, but if "everything else is secondary" to performance, then ease of installation has to take a back seat.

## Match better

It's not all about raw speed. If you have 500,000 files to sift through, you of course want to do it as quickly as possible, but you also want to make sure that you rank the files in the right order. Your search term might match hundreds or thousands of files, and "the best" matches (a fuzzy concept in itself) need to be at the top, or the user experience _will_ be slow. And frustrating to boot.

To this end, Command-T burns some of those hard-won cycles computing not just the match score for every file; it actually computes all possible match scores (ie. based on the different possible positions within the search string at which each given character can match) and then uses the best one. This maximizes the likelihood of putting what the user was looking for up front and center.

## Memoize

Exhaustively computing all possible match scores means the algorithm is doing a *lot* more work. In fact, done naively, the algorithm can exhibit extreme degenerate behavior searching for a needle like "aaaaaaaaaaa" in a haystack like "aaaaaaaaaaaaaaaaaaaaaa". Make strings like that long enough and you'll witness the heat death of the universe before the search finishes running.

Fortunately, a dynamic programming approach using memoization allows us to handle even those "pathological" inputs with ease.

## Parallelize

Let's put those fancy multi-core computers to use and split the work up across threads. Given, say, 8 cores, we can divide the search space up into 8 chunks, map over them, and then reduce back into a single list of results.

## Debounce user input

Smoke and mirrors this one. Give the illusion of better performance by improving the responsiveness of the UI. We allow the user to debounce their input, such that if they quickly type "foobar" (in, say, 50ms), we search only for "foobar" and not for "f", then "fo", then "foo", then "foob" and so on.

Keep optimizing long enough, however, and you won't even need debouncing...

## Faster scanners

At this point the finding algorithm is blazing fast, and the bottleneck is actually looking at the filesystem to get the list of candidates. Sure, we can cache the file listing between searches, but we want that initial scan to be quick too. Instead of relying on Ruby, let users pick a `find` (a fast C executable) or `git`-based scanner. On a very large repo, the move from Ruby to `find` can drop scan time from 15s to 4s.

## Watchman

Better still, use [Watchman](https://facebook.github.io/watchman/). This monitors the file-system continuously, and maintains an up-to-date in-memory index of all files. Querying this is faster than either `find` or `git`.

## Binary protocol

Watchman speaks a compact, fast binary protocol, that is easy to encode and decode. Teach Command-T to use that instead of bloated and slow JSON. With this, even on a total cold start, we're looking at initial scan times of less than a second.

# Search smarter

Let users search using "smart case" to narrow down the search results more quickly. This means searches are case-insensitive by default, until the user includes at least one uppercase letter in the search term, at which point they become case-sensitive. This kind of rapid filtering is useful because it reduces the number of files we (and the user) have to process.

# More recent sharpenings of the axe

By this point we have the fastest fuzzy file finding on the block, and the number of options for further optimization are shrinking. This takes us up to version 3.0.2, the current release version as I write this. Here are the benchmark numbers for a number of representative data sets:

```
                        user     system      total        real
pathological        2.580000   0.010000   2.590000 (  2.589704)
command-t           2.070000   0.000000   2.070000 (  2.079982)
chromium (subset)   3.650000   0.180000   3.830000 (  1.790363)
chromium (whole)   24.210000   0.060000  24.270000 (  9.096863)
```

"Pathological" here refers to those "aaaa" vs "aaaaaaa" type search scenarios that I mentioned earlier, "command-t" is a typical small project, "chromium (subset)" is around the 10k file mark, and "chromium (whole)" around half a million files. These timings are produced by [a benchmark script](https://github.com/wincent/command-t/blob/master/bin/benchmarks/matcher.rb) that does many thousands of searches.

A couple of things to note. One is how the "user" CPU time is some multiple of "real" (wall-clock) time, evidencing the parallelism of the search. The other is how these numbers have evolved over time, simultaneously getting faster even as we fix small bugs that required us to tighten up some loop holes and short-cuts in the name of correctness. To illustrate this, here are the results from version 1.6 (the first version to use parallelized search):

```
                        user     system      total        real
pathological        0.070000   0.000000   0.070000 (  0.070763)
command-t           2.260000   0.010000   2.270000 (  2.271704)
chromium (subset)   9.700000   0.170000   9.870000 (  3.013519)
chromium (whole)   51.960000   0.070000  52.030000 ( 13.503562)
```

You can see that it was doing a lot more work (note the "user" time in the "chromium (whole)" scenario), and a fair chunk of this was showing up in wall-clock time. Also note the much quicker "pathological" times, enabled only by a bug that made the search unfairly cheap. Nevertheless, 1.6 was very fast in its own right. It's just that a few years later, we'd made things faster still.

So, 3.0.2 represents the culmination of a substantial series of improvements, and I was doubtful that much low-hanging fruit remained, until a colleague of mine, Hanson Wang, came along and ported the Command-T algorithm to C++ and wrapped it in [a Node module](https://github.com/hansonw/fuzzy-native), adding a few optimizations of his own.

## Prescan

The first and most important of these is a prescan step, which stops us from engaging in the expensive exhaustive matching process at all for strings that can't possibly match. Implementing this technique, the "chromium (whole)" benchmark wall-clock time dropped by about 21% on my machine, which is a huge win considering that we were starting from an already optimized base.

## Rightmost match locations

The second is taking advantage of the prescan step to record rightmost-possible match locations for each character in the needle. If we do our prescan from right to left, then capturing this information is essentially "free", and we can use it to terminate our scoring searches early. It's hard to judge the effect of this change because of variations between runs, but it could be as much as a 5% win.

## Bitmasks

Finally, we can compute a bitmask representing all the characters used in the "needle" string, and another for each "haystack" string. We can use these and a simple logical `&` (`AND`) operation in subsequent searches to quickly skip over strings that can't possibly match. When I implemented this one, I saw small wins at best, well within the bounds of statistical noise and no more than 1%. Later on, however, after other optimizations eliminated one bottleneck and exposed another, I reran the tests with and without bitmask short-circuiting and saw some healthier gains, albeit still pretty variable ones.

## Floats, floats everywhere

By using floats instead of doubles, we can eek out a bit more performance at the cost of some (harmless) loss in precision. By the time I applied this optimization, I'd already found the big 10x win that I previously alluded to (more on this below), so the bottlenecks had once again shifted, and the switch from double to float led to another 22% speed boost.

# Part II: The dastardly bug

So, with all this optimization work, I was spending a fair bit of time looking over the code very closely, and one part of it caught my eye. The memoization data structure used to enable our dynamic programming approach consists of a matrix of dimensions `needle_len` by `haystack_len`. In this, we essentially record information to answer the question, "What is the best score I have (and can obtain) if I match needle character `i` at haystack position `j`?".

One part of the code looked wrong. I remember that it looked wrong when I originally wrote it too. But the tests all passed, and the benchmarks regressed when I "fixed" it, so I decided to leave it in. I managed to convince myself that it was right, as I'll explain below. It wasn't right, though. It was wrong. In a fairly harmless way, admittedly, but still wrong.

Let's dig into what was happening.

We want to store a matrix of `needle_len` rows and `haystack_len` columns so that we can look up the previously computed values for "match of `needle_idx` at `haystack_idx`".

Assume `needle_len` and `haystack_len` are 5 and 10 respectively, our 2D grid looks like the following. Given a `needle_idx` and a `haystack_idx`, we can index into this co-ordinate space:

```
    haystack_idx
 0 1 2 3 4 5 6 7 8 9
+-------------------+
| | | | | | | | | | | 0
---------------------
| | | | | | | | | | | 1
---------------------
| | | | | | | | | | | 2   needle_idx
---------------------
| | | | | | | | | | | 2
---------------------
| | | | | | | | | | | 3
+-------------------+
```

Note, however, that we know there are some cells in the matrix that cannot possibly represent valid matches, because the needle couldn't entirely fit. Let's mark these with an "octothorpe" (`#`):

```
    haystack_idx
 0 1 2 3 4 5 6 7 8 9
+-------------------+
| | | | | | |#|#|#|#| 0
---------------------
|#| | | | | | |#|#|#| 1
---------------------
|#|#| | | | | | |#|#| 2   needle_idx
---------------------
|#|#|#| | | | | | |#| 2
---------------------
|#|#|#|#| | | | | | | 3
+-------------------+
```

Observe that this wasted space is equal to `needle_len ^ 2 - needle_len` (a valid assumption because `needle_len` is always smaller than or equal to `haystack_len`, otherwise our search would short circuit before we even got to the memoization stage). The reason the space relationship here is quadratic can be intuited from the diagram, where you can see how the two triangles in opposite corners could be used to form a square, were it not for the missing slice of length `needle_len`.

Also note that we don't actually store a real 2-dimensional array here but rather a single array of size `needle_len * haystack_len`, meaning that a small matrix like this one:

```
+-----+
|A|B|C|
-------
|D|E|F|
-------
|G|H|I|
+-----+
```

Actually gets stored in memory as:

```
+-----------------+
|A|B|C|D|E|F|G|H|I|
+-----------------+
```

The math we could use to go from a `haystack_idx`/`needle_idx` pair to an index into this underlying 1-dimensional array could be something like:

```
const index = needle_idx * haystack_len + needle_idx;
```

Or, if we wanted our table to be rotated by 90 degrees (with `needle_idx` down the side):

```
const index = haystack_idx * needle_len + haystack_idx;
```

But note that in the code we're doing neither of those but instead:

```
const index = needle_idx * needle_len + haystack_idx;
```

This has a very interesting property of filling up the cells as follows:

- Assume cells contain values "A" through "Z" and then "a" through "d" (ie. the 30 valid values):

```
label needle haystack cell         label needle haystack cell
       idx     idx                        idx     idx
  A     0       0      0             P     0       5      5
  B     0       1      1             Q     1       5      10
  C     1       1      6             R     2       5      15
  D     0       2      2             S     3       5      20
  E     1       2      7             T     4       5      25
  F     2       2      12            U     1       6      11
  G     0       3      3             V     2       6      16
  H     1       3      8             W     3       6      21
  I     2       3      13            X     4       6      26
  J     3       3      1             Y     2       7      17
  K     0       4      4             Z     3       7      22
  L     1       4      9             a     4       7      27
  M     2       4      14            b     3       8      23
  N     3       4      19            c     4       8      28
  O     4       4      24            d     4       9      29

 0 1 2 3 4 5 6 7 8 9
+-------------------+
|A|B|D|G|K|P|C|E|H|L| 0
---------------------
|Q|U|F|I|M|R|V|Y|J|N| 1
---------------------
|S|W|Z|b|O|T|X|a|c|d| 2
---------------------
|#|#|#|#|#|#|#|#|#|#| 2
---------------------
|#|#|#|#|#|#|#|#|#|#| 3
+-------------------+
```

Note that even the largest values for `needle_idx` and `haystack_idx` do not place us anywhere in the bottom 2 rows, so we can actually avoid allocating them entirely. When `needle_idx` is `needle_len - 1` (ie. the last character in the needle) and `haystack_idx` is `haystack_len - 1` (ie. the last character in the haystack) our index into the one-dimensional storage array is `4 * 5 + 9`, which is 29, and corresponds to the cell containing "d" in the diagram above.

```
 0 1 2 3 4 5 6 7 8 9
+-------------------+
|A|B|D|G|K|P|C|E|H|L| 0
---------------------
|Q|U|F|I|M|R|V|Y|J|N| 1
---------------------
|S|W|Z|b|O|T|X|a|c|d| 2
+-------------------+
```

So, if we have a `needle_len` by `haystack_len` grid and corresponding set of values (ie. 5 by 10, or 50 cells in this example), how is it that we are writing to and reading from only a subset of 30 cells (3 rows of 10 cells each) without any collisions? The answer lies in excluding the illegal combinations where the needle cannot fit, which we mentioned above. With this formula for cell assignment, the invalid cells all get packed into the bottom two rows (marked with `#`). These correspond to the triangles in the corners of the original diagrams above.

As an additional optimization, note that we do a prescan which provides us with information about the rightmost possible location for the final match of the needle string with the haystack. This means that instead of using `haystack_len` to figure out the range of positions at the end of the haystack that some needle characters could not possibly occupy, we can use a potentially lower `rightmost_match_p` value. For each additional unit that `rightmost_match_p` is below `haystack_len - 1`, we can cross out another section from our grid, meaning that we allocate even less memory:

```
 0 1 2 3 4 5 6 7 8 9
+-------------------+
|A|B|D|G|C|E|H|K|F|I| 0
---------------------
|L|O|J|M|P|R|N|Q|S|T| 1
+-------------------+
```

(Note that we haven't just eliminated the row here, we've also rearranged the letters. I'll show how this was derived later on.)

One way to visualize what's happening here is to go back to our original diagram and number the cells as follows, based on the tabulation we made earlier:

```
    haystack_idx
 0 1 2 3 4 5 6 7 8 9
+-------------------+
|A|B|D|G|K|P|#|#|#|#| 0
---------------------
|#|C|E|H|L|Q|U|#|#|#| 1
---------------------
|#|#|F|I|M|R|V|Y|#|#| 2  needle_idx
---------------------
|#|#|#|J|N|S|W|Z|b|#| 3
---------------------
|#|#|#|#|O|T|X|a|c|d| 4
+-------------------+
```

In other words we fill in from top to bottom, and left to right, avoiding cells which we know should be marked with a "#".

Now imagine "chopping off" the corner triangles leaving only the rhomboidal
section which contains valid values:

```
+-----------+
|A|B|D|G|K|P|
---------------
  |C|E|H|L|Q|U|
  ---------------
    |F|I|M|R|V|Y|
    ---------------
      |J|N|S|W|Z|b|
      ---------------
        |O|T|X|a|c|d|
        +-----------+
```

And then "straightening" the shape back up into a rectangle using a shear
transformation:

```
+-----------+
|A|B|D|G|K|P|
-------------
|C|E|H|L|Q|U|
-------------
|F|I|M|R|V|Y|
-------------
|J|N|S|W|Z|b|
-------------
|O|T|X|a|c|d|
+-----------+
```

And finally encoding the rectangle using a one-dimensional array:

```
+-----------------------------------------------------------+
|A|B|D|G|K|P|C|E|H|L|Q|U|F|I|M|R|V|Y|J|N|S|W|Z|b|O|T|X|a|c|d|
+-----------------------------------------------------------+
```

If we additionally apply the `rightmost_match_p`-based trimming that we discussed above, our intermediate states can be reduced to something like:

```
    haystack_idx
 0 1 2 3 4 5 6 7 8 9
+-------------------+
|A|B|D|G|#|#|#|#|#|#| 0
---------------------
|#|C|E|H|K|#|#|#|#|#| 1
---------------------
|#|#|F|I|L|O|#|#|#|#| 2  needle_idx
---------------------
|#|#|#|J|M|P|R|#|#|#| 3
---------------------
|#|#|#|#|N|Q|S|T|#|#| 4
+-------------------+
```

Here our `rightmost_match_p` enforces a lower ceiling (by 2) beneath the one provide by `haystack_len - 1`, which means that we have 10 more cells that become invalid and are marked with "#". Moving on, we get:

```
+-------+
|A|B|D|G|
---------
|C|E|H|K|
---------
|F|I|L|O|
---------
|J|M|P|R|
---------
|N|Q|S|T|
+-------+
```

And finally:

```
+---------------------------------------+
|A|B|D|G|C|E|H|K|F|I|L|O|J|M|P|R|N|Q|S|T|
+---------------------------------------+
```

Which corresponds to the chart from earlier when I first introduced the `rightmost_match_p` concept.

These smaller arrays reduce memory usage and may be more likely to fit within a CPU cache. Whether the non-linear access pattern during the execution of the algorithm works well with the cache is an open question, although my benchmarking suggests that the format is working well.

## There is something wrong with this picture

Of course there is! Consider needle length 5, haystack length 100. Observe the following collisions with the formula:

```
needle_idx * needle_len + haystack_idx =     x
    0           5            80       =     80
    1           5            75       =     80
    2           5            70       =     80
    3           5            65       =     80
    4           5            60       =     80
```

That's 5 `(needle_idx, haystack_idx)` tuples all competing for the same cell, and the first one to memoize (write) to it will effectively preclude all the others from doing so. This is just one example. It's trivial to come up with others.

In hindsight, of course, it should have been obvious. The dimensions that I picked for my diagrams just happened to work out, even though the fundamental idea was wrong. I should have known this: it's obvious that as our haystack grows longer relative to our needle, and our matrix becomes more and more elongated, that the relative area taken up by those "unmatchable" triangle regions becomes a smaller and smaller proportion of the total. The only way to get the storage wins predicted by the formula would be to incur some (and perhaps many) collisions.

> The moral of the story: even when you think you know something, test your hypotheses with multiple different probes. In this case I should have listened to my spider sense. An additional test case or two would have caught this quickly.

With all those collisions you can expect a faster run because of all the (spurious) cache hits. But I think in practice it didn't matter much at all because the matrix is still sparse enough that hits were pretty rare. Either that, or I had a compensating bug somewhere else. Some support is leant to theory that collisions were rare, or the impact of them on scoring was relatively low, because I was never aware of any noticeable ranking bugs, despite this bug being out in the wild for several years.

# Part III: Saving the best for last

But let's not end on a down note.

After finding and fixing the memoization bug, I discovered a 10x speed boost. Probably the single largest win I've ever seen in the history of the project, and especially surprising given how much low-hanging fruit had already been scooped up.

## Heaps

Heaps are one of my favorite data structures. They're easy to understand, remember and implement, and a great example of how you can implement a higher-order utility (like a priority queue or a sorting algorithm) on top of something lower-level like a simple binary tree. They feel like a great fit for C, where they can be [easily and efficiently implemented on top of an underlying array](https://github.com/wincent/command-t/blob/master/ruby/command-t/heap.c).

I immediately thought of heaps when I ran the benchmark suite under a profiler and saw that `qsort` was taking up about half the time in the run. Tim Roughgarden of Stanford University [says](https://www.coursera.org/course/algo) that the `O(n log n)` nature of comparison sorts is cheap enough that you can often consider it to be "free" within the context of a long-running algorithm. But clearly, make `n` large enough and the rest of the code fast enough, and that `O(n log n)` will eventually dominate your costs.

One reason it's a bottleneck in Command-T is because, not only is `n` large, the sort is serial, occurring on a single thread at the end once all the worker threads have done their scoring. How can we use heaps to make this better?

The basic idea is as follows. Instead of sorting `n` files after they've all been scored, let's use a fixed-size min heap for each worker thread. Workers, in parallel, insert items into the heap as they go. They maintain a fixed size &mdash; let's call it `l` for the "limit" count of top-ranking files that we want to show to the user &mdash; by immediately extracting after each insertion. This has the effect of keeping the heap at or below size `l`, containing the highest-scoring matches seen so far at any given point in time, and providing us with a quick way to throw away the lowest-scoring item whenever we need to make an insertion.

So, if we have `m` threads, we're replacing our serial `O(n log n)` sort with `O(m log l)` parallel insertions and extractions, followed by a final sort of `O(ml log ml)`. Note that `l` is dwarfed by `n` in a large repo, so ends up being far fewer operations (even assuming a ridiculously optimized standard library `qsort` implementation). I did some back-of-the-napkin calculations estimating the potential of this approach, and concluded that in a repo with half-a-million files, a limit `l` of 32, and 8 (`m`) threads, we could be looking at reducing the total number of operations from around 10 million to about 1 million. Clearly, "operations" here is a vaguely defined term, but the delta here was promising enough to warrant exploring.

Furthermore, because we can peek at the bottom of each heap in constant time, we can entirely skip the `O(log l)` insert-plus-extract operation in many cases, replacing it with an `O(1)` peek for many of the `m/n` files that each worker thread must process.

I built this out, and the numbers were pleasing:

```
                        user     system      total        real
pathological        0.200000   0.000000   0.200000 (  0.197547)
command-t           1.250000   0.010000   1.260000 (  1.265484)
chromium (subset)   0.960000   0.130000   1.090000 (  0.217825)
chromium (whole)    3.850000   0.020000   3.870000 (  0.533365)
```

That's an order of magnitude faster than what we had before, and what we had before had already seen some recent double-digit percentage speed-ups. This is a powerful testament to the desirability of using the right data structure for the job, and also a couple of optimization truisms:

> If you want to go fast, first try doing less work before trying to do your work faster.
>
> Profile in order to know where your bottlenecks lie.

# Future work

I'd still like to find some low-hanging fruit, but I suspect that from here on all wins will be hard fought and won. But this is a game that I enjoy playing, so that's fine.

Time to move on to instruction-level profiling and start porting bits of this sucker to hand-tweaked assembly. Wish me luck.

<small><em>Discuss: [Facebook](https://www.facebook.com/glh/posts/10153216194746307) - [Twitter](https://twitter.com/wincent/status/704567011288838145)</em></small>

[Vim]: /wiki/vim
