---
title: Locate installer-tool as normal resource (gdiff, 5d40d99)
tags: snippets
---

The pathForAuxiliaryExecutable: method works for Foundation tools (Objective-C executables linked against the Objective-C runtime) but not for pure C executables. So must use pathForResource:ofType: to locate the installer tool instead.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
