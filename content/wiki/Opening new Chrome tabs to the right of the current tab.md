---
tags: wiki chrome
title: Opening new Chrome tabs to the right of the current tab
---

**NOTE:** The Chrome team [decided that this previously working functionality is actually a feature request](https://issues.chromium.org/issues/397720842) in early 2025:

> Seems like a feature request
>
> ...
>
> sorry for the inconvenience retiring non-substituting keywords might've caused you. Unfortunately sometimes retiring features that are not widely used is necessary to ensure we spend proper time and energy maintaining and improving widely used features.

So now, I'm [doing this with Raycast instead](https://github.com/wincent/wincent/commit/bf1b2b2efb5287a37a5549ea994a12f6ddbb9181). Below is the historical record of the old way (using custom search engines), for posterity:

---

# Open a new tab to the right of the current tab

Normally, hitting `⌘-T` will open a new tab at the _end_ of the list of tabs. I often want to open the tab right next to the one I'm working in (ie. if I'm working inside a tab group).

As an alternative to installing [a browser extension](https://chromewebstore.google.com/detail/new-adjacent-tab/fommpldicogfgegfpcoibmhkbbdpodjg), you can do this by defining a custom search, based on [this 2011 tip](https://ladyalys.blogspot.com/2011/08/chrome-tip-open-new-tab-next-to-current.html):

1. Go to `chrome://settings/searchEngines`
2. Under "Site search", click "Add".
3. Enter "Name": "New tab", "Shortcut": "tt" (mnemonic: "tab"), and "URL": `javascript:window.open();`

To create a new tab to the right of the current tab, hit `⌘-L`, type `tt`, then `Enter`.

Additionally, if you want a way of creating a new tab to the right with a click (as opposed to right-clicking on a tab and selecting "New Tab to the Right"), you can create a bookmark and stick it in your bookmark bar with a name like "📁" and the same URL as above (`javascript:window.open();`).

# Duplicate the current tab to the right

Again, you can do this by right-clicking and choosing "Duplicate", but if you want to do this from the keyboard, you can use the search engine trick, this time with `javascript:(function(){window.open(window.location.href, '_blank');})();` to copy the current `window.location` into the new tab. Assign it a shortcut like "dt" (mnemonic: "duplicate tab"), and you'll be able to create a duplicate tab by hitting `⌘-L`, typing `dt`, and hitting `Enter`.
