---
title: Handle application and window closing (Synergy, cb9a22c)
---

Special handling for application and window closing if there are unsaved changes. To get this to actually work I also had to fix a bug in the loading code: we were instantiating an instance of WOPreferencePane rather than the subclass as specified by the NSPrincipalClass key in the bundle info property list.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
