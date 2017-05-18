---
title: Remove "Copy Files" build phase (Wincent Icon Utility, a17e17a)
tags: snippets
---

The default Xcode template now includes an unwanted "Copy Files" files phase that copies the manual page to /usr/share/man/man1/ which causes builds to fail when running as a normal user. This is a new behaviour with the latest Xcode build; I don't know the exact cause but I suspect that the behaviour of the SKIP\_INSTALL build setting might have changed (the Copy Files phase is in fact set to "Copy only when installing").

This commit removes the unwanted phase.

Two more appropriate solutions for installing the manual page would be either preparing an Installer package (for installations outside of Xcode) or setting up a completely separate "Install" target (for use within Xcode) that could be fired off explicitly when desired.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
