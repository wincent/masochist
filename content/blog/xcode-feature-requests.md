---
title: Xcode feature requests
tags: blog
---

Just filed a couple of feature requests/bug reports with Apple (see? this time I'm not [too](http://www.wincent.com/a/about/wincent/weblog/archives/2006/02/two_annoying_xc.php) [annoyed](http://www.wincent.com/a/about/wincent/weblog/archives/2006/02/xcode_inputoutp.php) to file a report):

1.  The ability for Target Templates to contain files (like Project Templates can); this would make it a heck of a lot easier to do things like adding preference panes to existing projects.
2.  Apple should update their templates to use "en" for the `CFBundleDevelopmentRegion` setting and the `lproj` folder, bringing them into line with their own recommendations; as things currently stand if a developer wants to do the right thing and actually follow Apple's recommendations he/she must make this fiddly changes by hand *for every single project*.

These get added to my previous request to have Info.plist processing work on InfoPlist.strings files as well. Wonder when Apple will do that one... I may just have to quickly whip something up to do it myself...

\[*Update*: I've now updated [Wincent Strings Utility](http://strings.wincent.com/) to do the InfoPlist.strings preprocessing. I'll prepare a 1.1b release which includes the new feature soon. Now I just have to go about converting a bunch of projects over to use the new functionality.\]
