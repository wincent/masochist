---
title: Walrus r103, 1 item changed
tags: snippets
---

Remove safety checks from accessors and trust callers to provide acceptable values (these checks, and particularly the latest changes for cloning inputs and catching TypeErrors, were resulting in almost a ten-times slow-down); in the current specs (262 specs) this safety checks never fire
