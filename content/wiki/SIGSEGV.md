---
tags: wiki
---

From <http://www.gnu.org/software/libc/manual/html_mono/libc.html>:

> This signal is generated when a program tries to read or write outside the memory that is allocated for it, or to write memory that can only be read. (Actually, the signals only occur when the program goes far enough outside to be detected by the system's memory protection mechanism.) The name is an abbreviation for "segmentation violation". &lt;br /&gt; Common ways of getting a SIGSEGV condition include dereferencing a null or uninitialized pointer, or when you use a pointer to step through an array, but fail to check for the end of the array. It varies among systems whether dereferencing a null pointer generates SIGSEGV or SIGBUS.
