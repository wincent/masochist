---
title: snippets r36, 8 items changed
tags: snippets
---

Add removeIdentity method to main controller rather than letting the NSArrayController handle removal; this allows us to explicitly disable identities as they are removed rather than depending on object deallocation to trigger the removal
