---
title: Drop use of WOSingleton for WOBaseCore (WOCommon, 4c61ee1)
---

WOBaseCore is a lightweight wrapper class that contains only class methods and is never actually instantiated, so there is no need for it to be a singleton. If there ever does arise a need for it to have singleton behaviour then a straightforward local (non-abstract) implementation can be easily added rather than depending on WOSingleton.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
