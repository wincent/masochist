---
title: Smarter crash reports: I give up
tags: blog
---

A long time ago, before Unsanity released "Smart Crash Reports", I tried to come up with my own version of Apple's crash reporter application. I did this because the existing third-party solutions that I saw looked like horrible kludges. They'd do things like watch for the launch of the Apple crash reporter (polling), kill it so that the window wouldn't bother the user, throw up their own window, wait for the crash report to be written to the disk (again polling), and finally let the user send the crash report.

When Unsanity released "Smart Crash Reports" I wasn't impressed either. I didn't want users to have to install additional software and I certainly didn't agree with the idea of [installing a hack (an input manager) without notifying the user](http://daringfireball.net/2006/01/smart_crash_reports). There are some who think that [Unsanity can do no wrong](http://www.drunkenblog.com/drunkenblog-archives/000654.html) but I simply don't like hacks (and yes, Input Managers are hacks).

My plan was to implement everything from scratch: catch the crash (uncaught signals, uncaught exceptions), generate stack traces and gather other information, and send it off to the user. The first version of my crash catcher was released with [WinSwitch](http://www.wincent.com/a/products/winswitch/) back in December 2004 ([version 3.0b](http://www.wincent.com/a/products/winswitch/history/)). The problem with my crash reports is that they weren't as detailed as Apple's, because it's fiendishly difficult to generate stack traces reliably across versions of the OS, different architectures, and from within signal handlers.





Yet getting reliable stack traces is in theory possible; Apple's crash reporter does it, [GDB](http://www.gnu.org/software/gdb/) does it, third party crash catchers like the one that comes with [Mozilla](http://www.mozilla.org/) ("Talkback") presumably do it. I searched around for libraries, sample code and other resources that might help me to do this in a non-kludgey way. The GDB code base is too large for me to even know where to begin looking, and in any case the license I am working with is incompatible with the GPL. The same problem applies to the Mozilla "Talkback" code. I don't know whether any of the Darwin source code might shed light on the issue, but it too would present me with licensing difficulties.

I looked at the ExceptionHandling framework (see `/System/Library/Frameworks/ExceptionHandling.framework/Headers`) which does provide some [undocumented (private) functionality](http://www.cocoadev.com/index.pl?StackTraces) for obtaining stack traces but I don't like to rely on undocumented APIs, especially when they provide stack traces far inferior to those shown in Apple's crash reporter (for example, they don't work well properly from with signal handlers and the safety of calling these methods from within a signal handler is unknown).

I did a little bit of tentative reverse engineering of Apple's code too, trying to get some clues as to what was happening behind the scenes and what libraries might be involved, but my probing with `nm`, `otool` and friends didn't really shed any light on the situation.

[This post](http://lists.apple.com/archives/darwin-dev/2005/May/msg00305.html) to the darwin-dev mailing list shows one way of using [GCC's](http://gcc.gnu.org/) `__builtin_frame_address()` and [other built-in functions](http://gcc.gnu.org/onlinedocs/gcc/Return-Address.html) to get a stack trace. One of my attempts at a solution did indeed use `__builtin_frame_address()` but that didn't work well inside signal handlers either.

The oft-referenced [CrashReporter Technical Note TN2123](http://developer.apple.com/technotes/tn2004/tn2123.html) says this:

> There is currently no way for third party developers to access the reports submitted via CrashReporter. Apple is aware that there is strong demand for such a facility (r. 3356232). In fact, various third party developers have implemented their own crash reporting mechanisms: these range from the simple (have the application look at its own crash log file at launch time; if it has changed, offer to submit it to the developer) to the exceeding complex (completely reimplement CrashReporter).

So I foolishly took the "exceeding \[sic\] complex" path. When the Intel machines came out I had to admit that I was out of my depth. Reliably producing stack traces for ppc, i386 *and* ppc64 architectures on multiple versions of the OS just seemed over my head. The best sample code I could find was the [MoreIsBetter](http://developer.apple.com/samplecode/MoreIsBetter/MoreIsBetter.html) sample code from Apple. But this predates both Tiger and Panther and obviously is for ppc only:

      In the current Mac OS X architecture, there is no guaranteed reliable 
      way to backtrace a signal stack frame.  The problem is that the kernel 
      pushes a variable amount of data on to the stack when it invokes the 
      user space signal trampoline (_sigtramp), and the only handle to the 
      information about how much data was pushed is passed in a register 
      parameter to _sigtramp.  _sigtramp stashes that value away in a 
      non-volatile register.  So, when _sigtramp calls the user-supplied 
      signal handler, there's no way to work out where that register 
      ends up being saved.
      
      Thus, we devolve into guesswork.  It turns out that the offset from 
      the stack of the kernel data to the information we need (the place 
      where the interrupted thread's SP was stored) is a constant for any 
      given system release.  So, we can just simply add the appropriate 
      offset to the frame pointer and grab the data we need.
      
      The problem is that this constant varies from release to release. 
      This code handles the two significant cases that I know about, 
      namely Mac OS X 10.1.x and Mac OS X 10.2.x.  There's no guarantee 
      that this offset won't change again in the future.

It then later goes on to state:

      The only remotely reliable way to detect a signal stack frame is to 
      look at the return address to see whether it points within the 
      _sigtramp routine.  I can find the address of this routine via 
      the dynamic linker, but I don't have an easy way to determine it's 
      length.  So I just guess!  And here's the number I chose.  See 
      MoreBTPPCFindSigTrampAddress for more details on this.

So as you can see, the business of writing stack trace generation code is a nasty one (and we haven't even touched on address-to-symbol conversion yet nor C++ mangling). I tried, but I admit defeat. Given the choice between writing a mass of hideously complex and fragile code, installing a hack, or implementing something mildly kludgey, I'll choose the latter. The least kludgey way I can think of doing this is to check at launch the modification date on the crash reporter log file, and if it looks like the program did not cleanly exit fire up the crash reporter application. I say "least kludgey" because at least it doesn't require me to do any polling; but it does still require me to read in a chunk of a log file and send it off.

My original "ground-up" implementation installed signal and uncaught exception handlers and forked a new child process if the program crashed. The act of forking prevented the Apple crash reporter window from showing up (good) but it also prevented the crash reports from being written to the log! This meant that all my elegant, non-kludgey code (for example, using kernel queues to watch for updates to the log without polling) didn't work.

I am not aware of any way to elegantly catch crashes, suppress the Apple crash reporter window *and* extract the Apple-generated crash log. So I was forced to adopt the "check-on-launch" method. The downside is that I had to remove my nice "Relaunch" button from my crash reporter; users will have to relaunch manually.

Another interesting quirk is that in my testing if you try to simulate a crash (for example, by doing a `kill -SEGV` from the command line) then no crash report is written. Seems like you need a real crash for Apple's crash reporter to kick in. In any case, all of this will be available to the public in the next release of [Synergy Advance](http://synergyadvance.com/). Let the crash reports roll in!
