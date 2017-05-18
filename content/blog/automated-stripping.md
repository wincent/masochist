---
title: Automated stripping
tags: blog
---

Back from the conference. Today I addressed the one remaining issue in my build chain ([previously mentioned here](http://www.wincent.com/a/about/wincent/weblog/archives/2006/03/dstroot_install.php)): an automated process to produce release builds with debugging symbols stripped while keeping an unstripped copy locally for the purposes of deciphering crash reports.

So, as far as can tell, my many weeks of work beating my Xcode tool chain into shape are at an end. A full clean and build of [Synergy Advance](http://synergyadvance.com/) (measured using `time xcodebuild clean build -target "Synergy Advance.app" -configuration Release`) takes about six and a half minutes. The total number of lines of code is in the vicinity of 120,000 lines (for the application itself, supporting frameworks, plug-ins and unit tests).

The best case scenario for subsequent builds, performing another build immediately after without changing any source files, takes about one and a half minutes (measured with `time xcodebuild build -target "Synergy Advance.app" -configuration Release`). Admittedly it would be nice if this time were a little lower but there are some parts of the build process (certain shell script phases) that have to be done on every single build even if no source files change; this because there is no non-kludgey way to determine when these things should be done, so you have to do them every time. Nevertheless, I am pretty happy with the process now; it's certainly much speedier than it was in the past when even the best case scenario seemed to drag on for ever.
