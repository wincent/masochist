---
title: Modernize NSTimer pausing category (Synergy, cd5a4ed)
tags: snippets
---

Now that this code no longer needs to run on Jaguar we can replace the old-fashioned mutexes with @sychronized blocks.

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;
