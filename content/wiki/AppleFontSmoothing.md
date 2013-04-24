---
tags: consolas apple.font.smoothing
---

These are screenshots of the different possible settings for `AppleFontSmoothing` that I took on my previous machine with [Consolas](/wiki/Consolas) 13. On my current machine I'm running with Consolas 12.

# Smoothing level 1

```shell
$ defaults -currentHost write -g AppleFontSmoothing -int 1
```

![apple-font-smoothing/1.png](/system/images/apple-font-smoothing/1.png)

My preferred setting, corresponding to the "Light" font smoothing setting that Apple used to expose in the System Preferences UI.

# Smoothing level 2

```shell
$ defaults -currentHost write -g AppleFontSmoothing -int 2
```

![apple-font-smoothing/2.png](/system/images/apple-font-smoothing/2.png)

Most comments I've seen on the web come down in favor of this setting, and in isolation, it does look better to my eyes. Nevertheless, the contrast between bold and normal text is more useful at level 1.

# Smoothing level 3

```shell
$ defaults -currentHost write -g AppleFontSmoothing -int 3
```

![apple-font-smoothing/3.png](/system/images/apple-font-smoothing/3.png)

Clearly too thick.

# Smoothing level 4

```shell
$ defaults -currentHost write -g AppleFontSmoothing -int 4
```

![apple-font-smoothing/4.png](/system/images/apple-font-smoothing/4.png)

Clearly too thin.

# Appendix: zoomed shots

## Smoothing level 1

![apple-font-smoothing/1-zoomed.png](/system/images/apple-font-smoothing/1-zoomed.png)

## Smoothing level 2

![apple-font-smoothing/2-zoomed.png](/system/images/apple-font-smoothing/2-zoomed.png)