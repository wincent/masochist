---
tags: wiki linux
title: Monitoring system load with vmstat
---

Little trick for monitoring CPU, memory, I/O load during a long running process:

```shell
$ vmstat -n -S M -t 1
```

Options:

- `-n`: display header line once at start rather than periodically.
- `-S M`: use megabyte (1,048,576) units.
- `-t`: append timestamp on each line.
- `1`: delay 1 second between updates.

Sample output from a mostly idle machine:

```
procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu----- -----timestamp-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st                 CET
 2  0      0 123963    656   1760    0    0     1     1    5    1  0  0 100  0  0 2022-02-19 21:40:06
 0  0      0 123962    656   1760    0    0     0     0  725 1270  0  0 100  0  0 2022-02-19 21:40:07
 0  0      0 123962    656   1760    0    0     0    56  735 1293  0  0 100  0  0 2022-02-19 21:40:08
 0  0      0 123967    656   1760    0    0     0     0  893 1436  0  0 100  0  0 2022-02-19 21:40:09
 0  0      0 123967    656   1760    0    0     0    36  707 1287  0  0 100  0  0 2022-02-19 21:40:10
 0  0      0 123966    656   1760    0    0     0     0  699 1264  0  0 100  0  0 2022-02-19 21:40:11
```

And here's a sample from a machine running `stress -c 32`:

```
procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu----- -----timestamp-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st                 CET
32  0      0 123933    657   1785    0    0     1     1    5    1  0  0 100  0  0 2022-02-19 21:43:52
32  0      0 123933    657   1785    0    0     0     0 9949 1088 100  0  0  0  0 2022-02-19 21:43:53
32  0      0 123933    657   1785    0    0     0     0 9912 1146 100  0  0  0  0 2022-02-19 21:43:54
32  0      0 123933    657   1785    0    0     0     0 9791  969 100  0  0  0  0 2022-02-19 21:43:55
32  0      0 123933    657   1785    0    0     0    84 9793  973 100  0  0  0  0 2022-02-19 21:43:56
32  0      0 123933    657   1785    0    0     0     0 9814  992 100  0  0  0  0 2022-02-19 21:43:57
32  0      0 123933    657   1785    0    0     0     0 9784  905 100  0  0  0  0 2022-02-19 21:43:58
```
