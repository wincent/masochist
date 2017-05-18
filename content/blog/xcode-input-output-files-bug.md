---
title: Xcode "Input/Output Files" bug
tags: blog
---

The other day [I was lamenting](http://www.wincent.com/a/about/wincent/weblog/archives/2006/02/clicketyclick.php) that sometimes I spend far too much time doing non-coding tasks in Xcode when I'd rather be churning out reams of beautifully syntax highlighted, immaculately indented and [wrapped](http://www.wincent.com/a/about/wincent/weblog/archives/2006/02/to_wrap_or_not.php) Objective-C code. Today's non-coding efforts (requiring a couple of hours) were directed against the infamous "Input/Output Files Dependency Bug". I say "infamous" because it's a theme which keeps cropping up on the Xcode Users mailing list.

### The bug

I use a shell script build phase in many of my projects to automatically update my localizable strings files whenever the underlying source code changes. The basic idea is to watch certain source code files (the "Input Files") and only run `genstrings` on them when they have newer modification dates than the localizable strings files (the "Output Files").

The bug is, in short, that "Input/Output Files" don't work, or if they do, they only work some of the time. The bug manifests itself when Xcode runs shell scripts build phases that it should not be running (given the modification dates of the files), and this causes your build times to grow and it cuts your productivity.

In my experiences, the bug manifests itself in some projects and not in others. It manifests itself some of the time but not always. I tried all of the solutions and addressed all of the possible causes suggested on the[Xcode Users mailing list](http://lists.apple.com/mailman/listinfo/xcode-users) but none of them worked. My "Input/Output Files" didn't have any errant newlines trailing them; the files themselves had the correct dates on them and no weirdness (like future dates); I wasn't using a Jam-based target; the paths as revealed in the environment variables listing of the shell script phases showed that exactly the right paths (absolute ones at that) were being passed to the scripts; and even in projects when the "Input/Output Files" checking did seem to be working correctly the dependency information wasn't shared across Debug and Release build styles at all (that is, even if the shell script was correctly skipped in the Debug build, it would always run in the Release build the first time you did it).

In short, the behavior is entirely inconsistent, utterly baffling, and annoying. It may be that Xcode didn't like the fact that both my Input *and* my Output Files were in the `${SOURCE_ROOT}` (rather than the latter being in the `${DERIVED_FILE_DIR}`) but even if that's the case it's still a bug.





### The workaround

I've actually [written about this little bug before](http://www.wincent.com/a/about/wincent/weblog/archives/2006/02/two_annoying_xc.php). About 9 days ago I implemented a workaround that functioned perfectly but which still struck me as an ugly kludge: I had my shell script check the modification dates and do the comparison that Xcode seemingly couldn't do itself.

Today, sick of checking my shell scripts in various projects for ones which mysteriously worked and others which didn't, I stumbled across the already-mentioned environment variables which pass Input and Output Files to shell scripts. This meant I could throw out my hard-coded kludge and replace it with a generic script that reads those environment variables and does the comparison. Its output looks like this:

    Checking modification date for input file WOCrashReporterController.m: 1140846008
    Checking modification date for input file Localization.languages: 1114780373
    Checking modification date for output file en.lproj/Localizable.strings: 1140879075
    Newest input file is not newer than oldest output file: returning 0

I've trimmed the output a little so that it fits more easily into a browser window (here relative paths are shown but the real thing shows absolute paths). So the example above shows a comparison which shows the input files are older than the output file. Below is an example of a comparison which shows the opposite.

    Checking modification date for input file WOCrashReporterController.m: 1140882973
    Checking modification date for input file Localization.languages: 1114780373
    Checking modification date for output file en.lproj/Localizable.strings: 1140879075
    Newest input file is newer than oldest output file: returning 1

As you can see, if the files need updating then the script returns 1; otherwise it returns 0. It can be used like this:

    . "${BUILDTOOLS_DIR}/CheckInputOutputFiles.sh" || \
        . "${BUILDTOOLS_DIR}/UpdateStringsFiles.sh" "${SOURCE_ROOT}/WOCrashReporter" en


    exit 0

Notice the use of the `||` operator: if `CheckInputOutputFiles.sh` returns 0 then no action is taken. If it returns 1 then the second script, `UpdateStringsFiles.sh` is run.

### Conclusions

Xcode (and before it, Project Builder) has a long history of dependency related bugs but it's really no surprise considering the hideous complexity of the task. On the whole Xcode does pretty well. And with each release Apple generally makes things a little better. The pleasure of setting up target-level dependencies by dragging-and-dropping pretty icons in the Xcode GUI is a dream beyond the wildest imaginings of the people who originally wrote `make`. Nevertheless, this "Input/Output File" issue has been a problem for as long as I can remember using it.

This is a classic example of an attempt at saving time ends up backfiring. Here I had an automated process in place that was designed to keep my localized strings files up to date. In reality the automation didn't work, it has slowed down hundreds of builds, and I've ended up having to implement a workaround. From now on hopefully it *will* save me time.

In situations like this, do you file a bug report with Apple? They'll probably want a test case: what do I do? Zip up my entire proprietary source tree and send it to them? And then do I have to check to see if it's fixed (or broken) in every new Xcode release that they do? Seeing as I've already got a robust and relatively elegant workaround, I think I'll just leave this one as it is and get back to working on my own products...
