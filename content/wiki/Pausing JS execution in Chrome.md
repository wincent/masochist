---
tags: wiki chrome
title: Pausing JS execution in Chrome
---

**Use case:** inspecting an element that only shows on hover, and which otherwise disappears as soon as you try to interact with it (eg. right-clicking to bring up the context menu and hit "Inspect").

Supposedly, [hitting F8 with the "Sources" pane visible in the inspector](https://stackoverflow.com/a/38783213/2103996) is supposed to do this, but for me it wasn't working, and the alternate binding shown in the tool tip (`⌘-\`) also didn't work (because on my machine 1Password has that). The suggested fallback approach works:

```js
setTimeout(() => { debugger; }, 3000)
```
