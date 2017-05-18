---
title: Walrus r173, 1 item changed
tags: snippets
---

Modify default action when running from command line: instead of choosing between 'run' or 'fill' we now choose between 'run' and 'do not run'; this breaks some existing specs but is necessary to ensure correct behaviour with inherited templates (otherwise a superclass will end up being evaluated when it is imported, before the inheriting class)
