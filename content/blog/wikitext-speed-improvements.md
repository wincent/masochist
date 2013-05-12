---
title: Wikitext speed improvements
tags: wikitext
cache_breaker: 1
---

As [twittered earlier](/twitter/52), the already-fast [Wikitext](/wiki/Wikitext) module has seen some pretty spectacular speed improvements lately.

**Before:**

    short slab of ASCII text    2.010000   0.020000   2.030000 (  2.133733)
    short slab of UTF-8 text    3.990000   0.040000   4.030000 (  4.174043)
    longer slab of ASCII text  16.700000   0.120000  16.820000 ( 17.302634)
    longer slab of UTF-8 text  50.010000   0.400000  50.410000 ( 54.708712)

**\[Clickety, click, click, click\]:**

    $ git diff master --stat
     benchmarks/NOTES.txt          |   14 +
     benchmarks/parsing.rb         |  171 ++++++-
     benchmarks/profile_parsing.rb |  160 ++++++
     ext/ary.h                     |    4 -
     ext/parser.c                  | 1107 ++++++++++++++++++++++-------------------
     ext/str.c                     |   49 +--
     ext/str.h                     |   16 +-
     ext/token.h                   |    2 +-
     spec/external_link_spec.rb    |   17 +
     spec/internal_link_spec.rb    |    8 +-
     10 files changed, 969 insertions(+), 579 deletions(-)

**After:**

    short slab of ASCII text    1.550000   0.010000   1.560000 (  1.572018)
    short slab of UTF-8 text    2.310000   0.020000   2.330000 (  2.352641)
    longer slab of ASCII text  13.780000   0.100000  13.880000 ( 14.034015)
    longer slab of UTF-8 text  23.150000   0.130000  23.280000 ( 23.505007)

The most spectacular gains were seen for the "longer slab of UTF-8 text" case — 2 kilobytes of worst-case UTF-8 input like "ñ€w pärägräph wîthîñ blöckquöt€", translated 100,000 times — which more than doubled in speed.

That's 196.5 megabytes of the worst possible wikitext markup translated in just 23.5 seconds; over 8 megabytes per second on this old iMac, and now almost as fast as the best-case-scenario input (pure ASCII) which clocks in at about 9.6 megabytes per second.