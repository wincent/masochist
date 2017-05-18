---
title: Radar #4499076: atos vs @executable_path
tags: blog
---

Using `atos` is a bit of a pain with anything that uses embedded frameworks. Unfortunately it's something I need to do in order to [decipher crash reports](http://www.wincent.com/a/about/wincent/weblog/archives/2006/03/automated_strip.php).





> When running "atos" on my binaries with the "-o" switch the utility fails to work and I get error messages like the following; in this example we are talking about an executable that links against an embedded copy of the Growl framework:\
> \
> 2006-04-01 17:16:12.767 atos\[13476\] NSMachOHeader -initWithPath::: - no file at "@executable\_path/../Frameworks/Growl.framework/Versions/A/Growl"\
> \
> In order to make this error go away I must use "install\_name\_tool" to get rid of the "@executable\_path" reference and change it to an absolute path. Once I've done that "atos" works and prints no errors. The workaround works but its not very convenient and it requires me to have a copy of any linked frameworks installed at an absolute location.\
> \
> The "atos" man page states:\
> \
> "When working with a Mach-O executable \[passed via the '-o' switch\], atos considers addresses and symbols defined in that executable, at their default locations, as well as those from both statically and dynamically linked libraries loaded at startup by that executable, at their default locations. In this case, however, it does not take into account possible relocation, nor does it use the additional library and framework search paths available to dyld (1)."\
> \
> I suppose the inability to handle "@executable\_path" is one of the limitations mentioned in the man page. Please consider this an enhancement request to make atos work with such paths as it would considerably improve the usability and convenience of the tool. If it's not possible to handle this automatically an acceptable workaround would be a new switch that would allow the user to pass the executable path to atos on the command line.
