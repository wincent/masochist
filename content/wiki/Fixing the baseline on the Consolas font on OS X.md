---
tags: consolas
---

I was mortified this evening to discover that after reading [the "Fonts" section](http://www.iterm2.com/#/section/documentation/fonts) of the [iTerm 2](/wiki/iTerm_2) documentation:

> One non-recommended font is Consolas. It has an improperly set baseline offset and appears too high. It can be fixed, though; please see this page on [how to fix Consolas baseline.](http://mbauman.net/geek/2009/03/15/minor-truetype-font-editing-on-a-mac/)

I couldn't look at Consolas without being painfully aware of the hitherto unnoticed baseline flaw. Oddly, the flaw in the font isn't visible in [Terminal.app](/wiki/Terminal.app).

Getting things working was suprisingly easy, once [the link to the download page](https://developer.apple.com/fonts/) started working and I was able to get a Universal Binary of the `ftxdumperfuser` tool. (I'd been able to find an older download, but the binary was PPC-only; the Universal version came as part of a package labelled "OS X Font Tools Release 4, beta 1".)

Steps:

1.  Copy Microsoft Consolas files from `/Library/Fonts/Microsoft/` to a working area
2.  Repair font files using `ftxdumperfuser` (described below)
3.  Remove old Consolas files
4.  Install new (repaired) files by double-clicking

The exact edits to be made with `ftxdumperfuser` are as follows:

    ascender="1884"
    descender="-514"
    lineGap="0"

This needs to be done for each family:

```shell
$ ftxdumperfuser -h # see available commands
$ ftxdumperfuser -t hhea -A d Consolas.ttf
$ ftxdumperfuser -t hhea -A d Consolas\ Bold\ Italic.ttf
$ ftxdumperfuser -t hhea -A d Consolas\ Bold.ttf
$ ftxdumperfuser -t hhea -A d Consolas\ Italic.ttf
$ vim # do the edits
$ ftxdumperfuser -t hhea -A f Consolas.ttf
$ ftxdumperfuser -t hhea -A f Consolas\ Bold\ Italic.ttf
$ ftxdumperfuser -t hhea -A f Consolas\ Bold.ttf
$ ftxdumperfuser -t hhea -A f Consolas\ Italic.ttf
```
