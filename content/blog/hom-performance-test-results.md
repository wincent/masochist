---
title: HOM performance test results
tags: blog
---

The [promised](http://www.wincent.com/a/about/wincent/weblog/archives/2006/11/hom_improvement.php) test results. Totally unscientific and no substitute for proper testing and profiling in a real-world application, but they do give some orientative information. These results are for a completely unoptimized implementation; I won't be optimizing until (and if) a real performance bottleneck is discovered in a real-world application.





#### "If responds" performance

As [noted previously](http://www.wincent.com/a/about/wincent/weblog/archives/2006/11/hom_update.php) this is pretty much a worst case scenario for [HOM](http://www.wincent.com/a/about/wincent/weblog/archives/hom/).

    "If responds" HOM tests (responding case, 1000000 iterations):
        Convenience version                     : Usage: 0.136457/0.001732/0.138189 (user/system/total)
        HOM version                             : Usage: 4.635550/0.185351/4.820901 (user/system/total)
        Traditional version                     : Usage: 0.113658/0.000523/0.114181 (user/system/total)
        Runtime version                         : Usage: 0.122196/0.000995/0.123191 (user/system/total)
        LowLevel version                        : Usage: 0.302503/0.002375/0.304878 (user/system/total)


    "If responds" HOM tests (failing case, 1000000 iterations):
        Convenience version                     : Usage: 0.043667/0.000445/0.044112 (user/system/total)
        HOM version                             : Usage: 6.367694/0.072237/6.439931 (user/system/total)
        Traditional version                     : Usage: 0.061668/0.000463/0.062131 (user/system/total)
        Runtime version                         : Usage: 0.045923/0.000203/0.046126 (user/system/total)
        LowLevel version                        : Usage: 2.208839/0.028339/2.237178 (user/system/total)

Here we see that the HOM version is about 35 times slower than the convenience version (the version I have generally used up to now). The fastest technique is the "traditional" verbose version which explicitly spells everything out (about 42 times faster than HOM).

Those figures are for the case where the target actually does respond. In the case where it doesn't respond the HOM version gets slower (146 times slower than the convenience version) and the other versions get faster. (The exception to this case is the "low level" version — an experimental version which tries to take some short cuts — which gets significantly slower in the non-responding case.)

#### "Collect" performance

    "Collect" HOM tests (tiny array, 1 elements):
        HOM version                             : Usage: 0.000123/0.000053/0.000176 (user/system/total)
        Traditional version                     : Usage: 0.000019/0.000004/0.000023 (user/system/total)
        valueForKey version                     : Usage: 0.000108/0.000085/0.000193 (user/system/total)


    "Collect" HOM tests (small array, 10 elements):
        HOM version                             : Usage: 0.000100/0.000004/0.000104 (user/system/total)
        Traditional version                     : Usage: 0.000045/0.000004/0.000049 (user/system/total)
        valueForKey version                     : Usage: 0.000041/0.000003/0.000044 (user/system/total)


    "Collect" HOM tests (medium array, 100 elements):
        HOM version                             : Usage: 0.000520/0.000032/0.000552 (user/system/total)
        Traditional version                     : Usage: 0.000340/0.000010/0.000350 (user/system/total)
        valueForKey version                     : Usage: 0.000372/0.000038/0.000410 (user/system/total)


    "Collect" HOM tests (big array, 1000 elements):
        HOM version                             : Usage: 0.004483/0.000119/0.004602 (user/system/total)
        Traditional version                     : Usage: 0.003312/0.000079/0.003391 (user/system/total)
        valueForKey version                     : Usage: 0.003191/0.000032/0.003223 (user/system/total)


    "Collect" HOM tests (bigger array, 10000 elements):
        HOM version                             : Usage: 0.044925/0.001108/0.046033 (user/system/total)
        Traditional version                     : Usage: 0.032152/0.000874/0.033026 (user/system/total)
        valueForKey version                     : Usage: 0.030707/0.000699/0.031406 (user/system/total)


    "Collect" HOM tests (biggest array, 100000 elements):
        HOM version                             : Usage: 0.451690/0.017862/0.469552 (user/system/total)
        Traditional version                     : Usage: 0.322217/0.007786/0.330003 (user/system/total)
        valueForKey version                     : Usage: 0.310846/0.007819/0.318665 (user/system/total)

These numbers are pretty much the same as [reported last time](http://www.wincent.com/a/about/wincent/weblog/archives/2006/11/hom_update.php), although there are minor improvements across the board because of lower memory consumption (a new autorelease pool is now created for each test and destroyed before moving on to the next test):

  Array size   HOM relative speed (unoptimized)
  ------------ ----------------------------------
  1            765%
  10           212%
  100          157%
  1000         136%
  10000        139%
  100000       142%

Performance improves as the array size increases, reaching the optimum performance with arrays of about 1,000 elements. After that performance drops off slightly; a possible cause of this is that as the array size increases demand for memory also increases and eventually paging starts to negatively impact the speed.

#### "Select" performance

    "Select" HOM tests (tiny array, 1 elements):
        Select HOM version (1 level)            : Usage: 0.000066/0.000075/0.000141 (user/system/total)
        Chained HOM version (1 level)           : Usage: 0.000044/0.000014/0.000058 (user/system/total)
        Traditonal version (1 level)            : Usage: 0.000010/0.000004/0.000014 (user/system/total)
        valueForKey version (1 level)           : (not possible)
        Select 'where' HOM version (2 levels)   : Usage: 0.000064/0.000025/0.000089 (user/system/total)
        Chained HOM version (2 levels)          : Usage: 0.000039/0.000004/0.000043 (user/system/total)
        Traditional version (2 levels)          : Usage: 0.000012/0.000004/0.000016 (user/system/total)
        valueForKey version (2 levels)          : Usage: 0.000017/0.000004/0.000021 (user/system/total)
        Select HOM version (3 levels)           : (not possible)
        Chained HOM version (3 levels)          : Usage: 0.000067/0.000006/0.000073 (user/system/total)
        Traditional version (3 levels)          : Usage: 0.000028/0.000035/0.000063 (user/system/total)
        valueForKey version (3 levels)          : (skipping)
        Select HOM version (4 levels)           : (not possible)
        Chained HOM version (4 levels)          : Usage: 0.000078/0.000009/0.000087 (user/system/total)
        Traditional version (4 levels)          : Usage: 0.000045/0.000068/0.000113 (user/system/total)
        valueForKey version (4 levels)          : (skipping)
        Select 'first' HOM version              : Usage: 0.000092/0.000009/0.000101 (user/system/total)
        Chained 'first' HOM version             : (not yet implemented)
        Traditional 'first' version             : Usage: 0.000011/0.000005/0.000016 (user/system/total)
        valueForKey 'first' version             : Usage: 0.000016/0.000004/0.000020 (user/system/total)

Doing a "select" HOM on an array of one element is not exactly an optimal usage case, regardless of the technique used, so performance is very similar across the board. The [new "chained" version](http://www.wincent.com/a/about/wincent/weblog/archives/2006/11/hom_improvement.php) of the "select" HOM beats the old version by a significant amount (about twice as fast) and can also do things the original version couldn't do (nesting to 3 or more levels).

The best HOM version is about 4 times slower than the non-HOM version when nesting to 1 level, less than 3 times slower when nesting to 2 levels, and only 16% slower when nesting to 3 levels. At 4 levels of nesting the HOM version pulls in front (about 23% faster).

    "Select" HOM tests (tiny array, 10 elements):
        Select HOM version (1 level)            : Usage: 0.000042/0.000035/0.000077 (user/system/total)
        Chained HOM version (1 level)           : Usage: 0.000039/0.000003/0.000042 (user/system/total)
        Traditonal version (1 level)            : Usage: 0.000011/0.000003/0.000014 (user/system/total)
        valueForKey version (1 level)           : (not possible)
        Select 'where' HOM version (2 levels)   : Usage: 0.000099/0.000015/0.000114 (user/system/total)
        Chained HOM version (2 levels)          : Usage: 0.000126/0.000070/0.000196 (user/system/total)
        Traditional version (2 levels)          : Usage: 0.000047/0.000012/0.000059 (user/system/total)
        valueForKey version (2 levels)          : Usage: 0.000048/0.000004/0.000052 (user/system/total)
        Select HOM version (3 levels)           : (not possible)
        Chained HOM version (3 levels)          : Usage: 0.000142/0.000011/0.000153 (user/system/total)
        Traditional version (3 levels)          : Usage: 0.000047/0.000004/0.000051 (user/system/total)
        valueForKey version (3 levels)          : (skipping)
        Select HOM version (4 levels)           : (not possible)
        Chained HOM version (4 levels)          : Usage: 0.000157/0.000012/0.000169 (user/system/total)
        Traditional version (4 levels)          : Usage: 0.000055/0.000003/0.000058 (user/system/total)
        valueForKey version (4 levels)          : (skipping)
        Select 'first' HOM version              : Usage: 0.000056/0.000004/0.000060 (user/system/total)
        Chained 'first' HOM version             : (not yet implemented)
        Traditional 'first' version             : Usage: 0.000024/0.000004/0.000028 (user/system/total)
        valueForKey 'first' version             : Usage: 0.000041/0.000003/0.000044 (user/system/total)


    "Select" HOM tests (tiny array, 100 elements):
        Select HOM version (1 level)            : Usage: 0.000141/0.000023/0.000164 (user/system/total)
        Chained HOM version (1 level)           : Usage: 0.000185/0.000014/0.000199 (user/system/total)
        Traditonal version (1 level)            : Usage: 0.000044/0.000005/0.000049 (user/system/total)
        valueForKey version (1 level)           : (not possible)
        Select 'where' HOM version (2 levels)   : Usage: 0.000523/0.000009/0.000532 (user/system/total)
        Chained HOM version (2 levels)          : Usage: 0.000806/0.000015/0.000821 (user/system/total)
        Traditional version (2 levels)          : Usage: 0.000328/0.000005/0.000333 (user/system/total)
        valueForKey version (2 levels)          : Usage: 0.000366/0.000026/0.000392 (user/system/total)
        Select HOM version (3 levels)           : (not possible)
        Chained HOM version (3 levels)          : Usage: 0.001032/0.000011/0.001043 (user/system/total)
        Traditional version (3 levels)          : Usage: 0.000414/0.000004/0.000418 (user/system/total)
        valueForKey version (3 levels)          : (skipping)
        Select HOM version (4 levels)           : (not possible)
        Chained HOM version (4 levels)          : Usage: 0.001100/0.000006/0.001106 (user/system/total)
        Traditional version (4 levels)          : Usage: 0.000551/0.000030/0.000581 (user/system/total)
        valueForKey version (4 levels)          : (skipping)
        Select 'first' HOM version              : Usage: 0.000289/0.000006/0.000295 (user/system/total)
        Chained 'first' HOM version             : (not yet implemented)
        Traditional 'first' version             : Usage: 0.000158/0.000004/0.000162 (user/system/total)
        valueForKey 'first' version             : Usage: 0.000334/0.000018/0.000352 (user/system/total)


    "Select" HOM tests (tiny array, 1000 elements):
        Select HOM version (1 level)            : Usage: 0.000728/0.000010/0.000738 (user/system/total)
        Chained HOM version (1 level)           : Usage: 0.001277/0.000027/0.001304 (user/system/total)
        Traditonal version (1 level)            : Usage: 0.000322/0.000006/0.000328 (user/system/total)
        valueForKey version (1 level)           : (not possible)
        Select 'where' HOM version (2 levels)   : Usage: 0.004884/0.000102/0.004986 (user/system/total)
        Chained HOM version (2 levels)          : Usage: 0.007871/0.000101/0.007972 (user/system/total)
        Traditional version (2 levels)          : Usage: 0.003170/0.000042/0.003212 (user/system/total)
        valueForKey version (2 levels)          : Usage: 0.003376/0.000073/0.003449 (user/system/total)
        Select HOM version (3 levels)           : (not possible)
        Chained HOM version (3 levels)          : Usage: 0.010108/0.000185/0.010293 (user/system/total)
        Traditional version (3 levels)          : Usage: 0.004197/0.000038/0.004235 (user/system/total)
        valueForKey version (3 levels)          : (skipping)
        Select HOM version (4 levels)           : (not possible)
        Chained HOM version (4 levels)          : Usage: 0.011156/0.000216/0.011372 (user/system/total)
        Traditional version (4 levels)          : Usage: 0.004753/0.000076/0.004829 (user/system/total)
        valueForKey version (4 levels)          : (skipping)
        Select 'first' HOM version              : Usage: 0.002596/0.000136/0.002732 (user/system/total)
        Chained 'first' HOM version             : (not yet implemented)
        Traditional 'first' version             : Usage: 0.001661/0.000041/0.001702 (user/system/total)
        valueForKey 'first' version             : Usage: 0.003377/0.000109/0.003486 (user/system/total)


    "Select" HOM tests (tiny array, 10000 elements):
        Select HOM version (1 level)            : Usage: 0.007040/0.000169/0.007209 (user/system/total)
        Chained HOM version (1 level)           : Usage: 0.012118/0.000374/0.012492 (user/system/total)
        Traditonal version (1 level)            : Usage: 0.003048/0.000066/0.003114 (user/system/total)
        valueForKey version (1 level)           : (not possible)
        Select 'where' HOM version (2 levels)   : Usage: 0.047590/0.000940/0.048530 (user/system/total)
        Chained HOM version (2 levels)          : Usage: 0.075891/0.001045/0.076936 (user/system/total)
        Traditional version (2 levels)          : Usage: 0.031353/0.000659/0.032012 (user/system/total)
        valueForKey version (2 levels)          : Usage: 0.033045/0.000713/0.033758 (user/system/total)
        Select HOM version (3 levels)           : (not possible)
        Chained HOM version (3 levels)          : Usage: 0.097457/0.001609/0.099066 (user/system/total)
        Traditional version (3 levels)          : Usage: 0.041586/0.000861/0.042447 (user/system/total)
        valueForKey version (3 levels)          : (skipping)
        Select HOM version (4 levels)           : (not possible)
        Chained HOM version (4 levels)          : Usage: 0.109871/0.003852/0.113723 (user/system/total)
        Traditional version (4 levels)          : Usage: 0.048726/0.002151/0.050877 (user/system/total)
        valueForKey version (4 levels)          : (skipping)
        Select 'first' HOM version              : Usage: 0.023971/0.000831/0.024802 (user/system/total)
        Chained 'first' HOM version             : (not yet implemented)
        Traditional 'first' version             : Usage: 0.015608/0.000666/0.016274 (user/system/total)
        valueForKey 'first' version             : Usage: 0.032334/0.001070/0.033404 (user/system/total)


    "Select" HOM tests (tiny array, 100000 elements):
        Select HOM version (1 level)            : Usage: 0.070535/0.002773/0.073308 (user/system/total)
        Chained HOM version (1 level)           : Usage: 0.124087/0.006596/0.130683 (user/system/total)
        Traditonal version (1 level)            : Usage: 0.030686/0.000814/0.031500 (user/system/total)
        valueForKey version (1 level)           : (not possible)
        Select 'where' HOM version (2 levels)   : Usage: 0.472767/0.005779/0.478546 (user/system/total)
        Chained HOM version (2 levels)          : Usage: 0.771101/0.010956/0.782057 (user/system/total)
        Traditional version (2 levels)          : Usage: 0.314618/0.003855/0.318473 (user/system/total)
        valueForKey version (2 levels)          : Usage: 0.335247/0.005829/0.341076 (user/system/total)
        Select HOM version (3 levels)           : (not possible)
        Chained HOM version (3 levels)          : Usage: 0.991557/0.014392/1.005949 (user/system/total)
        Traditional version (3 levels)          : Usage: 0.425215/0.009765/0.434980 (user/system/total)
        valueForKey version (3 levels)          : (skipping)
        Select HOM version (4 levels)           : (not possible)
        Chained HOM version (4 levels)          : Usage: 1.109082/0.031562/1.140644 (user/system/total)
        Traditional version (4 levels)          : Usage: 0.495367/0.008576/0.503943 (user/system/total)
        valueForKey version (4 levels)          : (skipping)
        Select 'first' HOM version              : Usage: 0.238650/0.003698/0.242348 (user/system/total)
        Chained 'first' HOM version             : (not yet implemented)
        Traditional 'first' version             : Usage: 0.159109/0.002740/0.161849 (user/system/total)
        valueForKey 'first' version             : Usage: 0.327051/0.005766/0.332817 (user/system/total)

As the array size increases performance doesn't change all that much. The "chained" HOM version loses its edge with respect to the "unchained" version but the difference never grows beyond a factor of two at the first level of nesting and the difference diminishes at the second level of nesting. At the third and fourth levels of nesting the "unchained" HOM can't be used.

Relative to the non-HOM pattern, the "chained" HOM has a relative speed of about 414% at the first level, 245% at the second level, 232% at the third level and 226% at the fourth and final level tested (where "relative speed" is to how long it takes to complete). So as the level of nesting grows the performance penalty associated with HOM is gradually reduced. The cost of chaining is as follows: if first level chaining is 100%, then second-level costs 598%, third-level costs 769% and fourth-level costs 872%. In other words, chaining imposes a considerable cost up front to go from first-level to second-level, but subsequently levels after that have a relatively constant cost.

As expected, the "select first" HOM is faster than the equivalent code written using a normal "select" HOM. In the tests the desired result was planted in the test array exactly half-way through, so the speed difference of two-times is as one would expect.

#### Concluding statements

These are only preliminary figures but they do give a rough idea of the performance of an unoptimized HOM implementation. Even the worst case scenarios don't look too bad for most uses, so I don't think there'll be any need to optimize the implementation until (and if) specific problem areas are discovered with Apple's profiling tools.
