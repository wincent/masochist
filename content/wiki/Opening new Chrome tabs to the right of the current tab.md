---
tags: wiki chrome
title: Opening new Chrome tabs to the right of the current tab
---

As an alternative to installing [a browser extension](https://chromewebstore.google.com/detail/new-adjacent-tab/fommpldicogfgegfpcoibmhkbbdpodjg), you can do this by defining a custom search, based on [this 2011 tip](https://ladyalys.blogspot.com/2011/08/chrome-tip-open-new-tab-next-to-current.html):

1. Go to `chrome://settings/searchEngines`
2. Under "Site search", click "Add".
3. Enter "Name": "New tab", "Shortcut": "tt", and "URL": `javascript:window.open();`

To create a new tab to the right of the current tab, hit `⌘-L`, type `tt`, then `Enter`.

Additionally, if you want a way of creating a new tab to the right with a click (as opposed to right-clicking on a tab and selecting "New Tab to the Right"), you can create a bookmark and stick it in your bookmark bar with a name like "📁" and the same URL as above (`javascript:window.open();`).
