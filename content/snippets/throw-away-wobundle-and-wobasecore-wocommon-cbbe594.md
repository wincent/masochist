---
title: Throw away WOBundle and WOBaseCore (WOCommon, cbbe594)
---

Apple deprecated some crucial API in Leopard and my options were as follows: ignore the deprecation warnings (thus making it impossible to insist on warning-free builds, and only deferring the inevitable moment when support is dropped entirely); switch to the new API (unfortunately not equivalent to the old API, and would have required a kludgey hack); or rip out the old code and forget about the functionality.

Rather than chase a moving target or balance on shakey ground (pick your metaphor) I decided to rip the old code out and forget about it. This means ripping out WOBundle and the entire WOBaseCore bundle; some of the necessary functionality in WOBaseCore has been migrated into other classes in WOCommon. On the bright side, this is a simplification, even if it does mean sacrificing some very useful functionality that proved itself pre-Leopard.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
