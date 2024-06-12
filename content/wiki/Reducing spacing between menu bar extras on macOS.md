---
tags: wiki macOS
title: Reducing spacing between menu bar extras on macOS
---

Set ([source](https://community.folivora.ai/t/bartender-controversy-tutorial-on-how-to-manage-menubar-status-items-via-btt/37429)):

```
defaults -currentHost write -globalDomain NSStatusItemSpacing -int 6
defaults -currentHost write -globalDomain NSStatusItemSelectionPadding -int 6
killall ControlCenter
```

Verify:

```
defaults -currentHost read -globalDomain NSStatusItemSpacing
defaults -currentHost read -globalDomain NSStatusItemSelectionPadding
```
