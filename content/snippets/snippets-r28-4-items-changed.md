---
title: snippets r28, 4 items changed
tags: snippets
---

Defend against Cocoa Bindings treachery by retaining the temporary object when performing a move (remove, insert); not necessary when working with dictionaries but as soon as you switch to a custom class you'll crash when performing a drag and drop
