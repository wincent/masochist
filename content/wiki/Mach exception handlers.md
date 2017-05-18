---
tags: wiki
---

# Basic overview

> All faults like these are delivered as Mach exceptions first. BSD has installed a Mach exception handler that converts the Mach exception into a signal. GDB installs its Mach exception handler BEFORE BSD's in the chain of exception handlers to try for a watched task/process. So, GDB sees and reports on Mach exceptions - not signals.&lt;br /&gt; &lt;br /&gt; If you want to provide a signal handler for these, you need to install handlers for SIGSEGV and SIGBUS. SIGSEGV applies when address is completely invalid (nothing mapped there). SIGBUS applies for failures when something is mapped there - but you can't access it (permissions, force unmounts of a mapped file, etc...).&lt;br /&gt; &lt;br /&gt; Because of where GDB sits in the exception path, you will still see its handler kick in BEFORE the process' signal handler. You need to continue past that spot in GDB to see if the process will handle it itself. This also sometimes results in a "premature crashreport" as the crash reporter mechanism also sits in front of the "last resort" BSD signal delivery exception handler. We plan to address this in the future by allowing exception handlers between BSD's signal delivery handler and Mach's default (kill the task) behavior and moving crashreporter's exception handler to sit there. We're still working with the GDB folks to decide where they want their handler to sit (both places have some value in a gdb environment).

Jim Magee, Apple, <http://lists.apple.com/archives/darwin-kernel/2003/Nov/msg00007.html>

# CrashReporter

> If you write a program that causes an exception but handles that exception via a signal handler, CrashReporter will erroneously generate a crash log for your program

<http://developer.apple.com/technotes/tn2004/tn2123.html>

# Example code

-   <http://pre.plt-scheme.org/plt/src/mzscheme/gc2/vm_osx.c>
-   <http://paste.lisp.org/display/19593>
-   <http://www.cebix.net/viewcvs/cebix/BasiliskII/src/Unix/sigsegv.cpp?rev=1.27>
-   <http://www.brianweb.net/misc/mach_exceptions_demo.chttp://www.brianweb.net/misc/mach_exceptions_demo.c>
-   <http://www.opensource.apple.com/darwinsource/projects/other/gdb-365/src/gdb/macosx/macosx-nat-inferior-util.c>
-   <http://www.opensource.apple.com/darwinsource/Current/gcc-5250/boehm-gc/os_dep.c>
-   <http://www.opensource.apple.com/darwinsource/10.4/xnu-792/osfmk/kern/ipc_tt.c>

# Related Mach documentation

-   <http://www.opensource.apple.com/darwinsource/10.4/xnu-792/osfmk/man/catch_exception_raise.html>
-   <http://www.opensource.apple.com/darwinsource/10.4/xnu-792/osfmk/man/exc_server.html>
-   <http://www.opensource.apple.com/darwinsource/10.4/xnu-792/osfmk/man/mach_port_deallocate.html>
-   <http://www.opensource.apple.com/darwinsource/10.4/xnu-792/osfmk/man/mach_port_allocate.html>
-   <http://www.opensource.apple.com/darwinsource/10.4/xnu-792/osfmk/man/mach_port_mod_refs.html>
-   <http://www.opensource.apple.com/darwinsource/10.4/xnu-792/osfmk/man/mach_task_self.html>
-   <http://www.opensource.apple.com/darwinsource/10.4/xnu-792/osfmk/man/mach_port_destroy.html>
-   <http://www.opensource.apple.com/darwinsource/10.4/xnu-792/osfmk/man/task_get_exception_ports.html>
-   <http://www.opensource.apple.com/darwinsource/10.4/xnu-792/osfmk/man/task_set_exception_ports.html>
-   <http://www.opensource.apple.com/darwinsource/10.4/xnu-792/osfmk/man/thread_get_state.html>
-   <http://www.opensource.apple.com/darwinsource/10.4/xnu-792/osfmk/man/thread_set_state.html>
