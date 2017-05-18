---
tags: wiki
---

I made these notes while attempting to save copies of the Bill Gates deposition videos, streamed over [MMS](/wiki/MMS), to the local drive.

The original links to the streamed content were found here:

<http://iowaconsumercase.org/lc-8.html>

I then used an [MPlayer](/wiki/MPlayer) command-line invocation to save the files to disk:

    ./mplayer -dumpstream -dumpfile gates1.wmv -nocache "${MMS_URL}"
