---
title: Mach Port leaks
tags: snippets
---

Fixed. Needed to move my `invalidate` messages outside of a conditional block that was causing them to be sent in only some cases.
