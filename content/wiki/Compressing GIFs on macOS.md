---
tags: wiki gif macos
title: Compressing GIFs on macOS
---

(Not specific to macOS, but that's where I did it, after doing `brew install gifsicle`.)

Via [StackExchange](https://superuser.com/questions/1107200/optimize-animated-gif-size-in-command-line):

```
gifsicle -O3 --colors=256 --lossy=200 -i "that's clever.gif" -o "that's clever - small.gif"
```

For that command I saw a ("N of 1") reduction of 3MB down to 1.4MB. The discussion on StackExchange indicates that `--lossy` may take on values in the range of 30 to 200, but that the results are unpredictable. You may want to try multiple different values.


