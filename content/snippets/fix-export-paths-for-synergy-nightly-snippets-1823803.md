---
title: Fix export paths for Synergy nightly (snippets, 1823803)
tags: snippets
---

Synergy expects to find the WOCommon source at ../../WOCommon/src, not at ../../WOCommon, so adjust export path to match, and likewise for WOPublic.

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;
