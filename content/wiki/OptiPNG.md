---
tags: png wiki
cache_breaker: 1
---

[OptiPNG](/wiki/OptiPNG) is a lossless PNG optimizer which attempts to compress PNG input files by trialling different compression settings and selecting the most effective.

Even on PNGs which are supposedly already "compressed" for the web it may result in smaller file sizes. For example, running it on the PNG files from the back end of this site yield the following savings (as reported by `git show --stat`):

    Bin 2884 -> 2427 bytes
    Bin 16163 -> 15652 bytes
    Bin 16246 -> 15659 bytes
    Bin 3347 -> 3201 bytes
    Bin 2788 -> 2674 bytes
    Bin 26517 -> 21955 bytes
    Bin 26468 -> 21842 bytes
    Bin 2201 -> 1909 bytes
    Bin 3599 -> 2947 bytes
    Bin 2071 -> 2000 bytes
    Bin 1902 -> 1786 bytes
    Bin 8967 -> 8935 bytes
    Bin 23940 -> 23582 bytes
    Bin 97216 -> 95668 bytes
    Bin 114918 -> 112295 bytes
    Bin 118535 -> 111923 bytes
    Bin 290811 -> 287774 bytes
    Bin 113158 -> 110234 bytes
    Bin 114715 -> 109674 bytes
    Bin 141275 -> 136350 bytes
    Bin 123273 -> 120513 bytes
    Bin 3197 -> 2185 bytes
    Bin 19002 -> 14716 bytes
    Bin 6849 -> 4470 bytes
    Bin 606 -> 440 bytes
    Bin 1888 -> 1817 bytes
    Bin 3031 -> 2866 bytes
    Bin 505 -> 493 bytes
    Bin 1279 -> 1254 bytes
    Bin 1005 -> 781 bytes
    Bin 356 -> 309 bytes
    Bin 391 -> 387 bytes

Although the savings are modest, and there were many files already compressed with optimal settings (with no change in size), they are still savings.

# See also

-   Official website: <http://optipng.sourceforge.net/>
