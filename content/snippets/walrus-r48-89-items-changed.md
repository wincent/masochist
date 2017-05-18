---
title: Walrus r48, 89 items changed
tags: snippets
---

Large-scale reorganization (nearly 4,000 lines of diffs): removing old hand-coded lexer and parser files obsoleted by the parser generator; centralize all 'require' and 'autoload' statements into a single overarching header file (saves a couple of lines or more in most files); move initialized into shared header and remove local overrides (cleaner code); use jcore library and jlength method for greater speed when determining the length of Unicode strings; initial implementation of ProcParslet class
