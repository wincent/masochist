---
tags: wiki violentmonkey
title: Violentmonkey
---

# Chrome breaking Violentmonkey

As of 2025-08 Chrome v139 disables Violentmonkey ([violentmonkey#2284](https://github.com/violentmonkey/violentmonkey/issues/2284)). You can reenable it, for now, with [these instructions](https://old.reddit.com/r/uBlockOrigin/comments/1lwztf1/ublockorigin_fully_disabled_on_chrome_now/n2kkwbd/):

Set:

```
chrome://flags/#temporary-unexpire-flags-m137                     [Enabled]
```

Then restart and set:

```
chrome://flags/#extension-manifest-v2-deprecation-warning         [Disabled]
chrome://flags/#extension-manifest-v2-deprecation-disabled        [Disabled]
chrome://flags/#extension-manifest-v2-deprecation-unsupported     [Disabled]
chrome://flags/#allow-legacy-mv2-extensions                       [Enabled]
```

As [noted in the thread](https://old.reddit.com/r/uBlockOrigin/comments/1lwztf1/ublockorigin_fully_disabled_on_chrome_now/n2n7qh7/), this workaround may be continue to work during v139's lifecycle, but is unlikely to last past that:

> This will work on Chrome 138. On 139 it should work if you set "unexpire 138" instead, but there are no more flags for this on 140. There's [a command line parameter](https://github.com/uBlockOrigin/uBlock-issues/discussions/2977#discussioncomment-13593599) that you can add to your shortcut, but it's likely to be removed soon too.

The command-line switch in question is:

```
chrome.exe --disable-features=ExtensionManifestV2Unsupported,ExtensionManifestV2Disabled
```

[ScriptCat](https://github.com/scriptscat/scriptcat) may be worth looking at as an alternative (open source, but Chinese; [English docs here](https://docs.scriptcat.org/en/)), or going back to [Tampermonkey](https://www.tampermonkey.net/) (closed-source).
