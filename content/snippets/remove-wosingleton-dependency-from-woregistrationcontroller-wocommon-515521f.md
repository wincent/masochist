---
title: Remove WOSingleton dependency from WORegistrationController (WOCommon, 515521f)
---

Although there should never be any need to have more than one instance of WORegistrationController active at any time, there is no real need to enforce singleton behaviour either. A single WORegistrationController instance is generally instantiated in a nib rather than programmatically so there should never be more than one instance at a time anyway; even if there were it would be completely harmless.

So this commit removes the dependency on WOSingleton as it is an unnecessary complication.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
