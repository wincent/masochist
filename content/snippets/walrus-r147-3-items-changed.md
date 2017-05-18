---
title: Walrus r147, 3 items changed
tags: snippets
---

Move AST wrapping into a more sensible place (on recovering from left-recursion detection rather than at the point were we manually try to recurse); not only is the code flow clearer now, this fixes a bug where some inner elements weren't getting wrapped properly (a bare Array was getting returned instead)
