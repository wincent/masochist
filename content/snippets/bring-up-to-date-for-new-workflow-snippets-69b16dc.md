---
title: Bring up-to-date for new workflow (snippets, 69b16dc)
---

Rip out SVK/SVN conversion methods; replace "svn info" revision check with "git ls-remote" equivalent; update configuration to point at Git repositories; add WOPublic to all projects; add buildtools, WOCommon and WOPublic to the Synergy dependencies list; remove installer section from Synergy build procedure; update target names ("Release" instead of "Development"); add Growl repository to config list for Synergy Advance.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
