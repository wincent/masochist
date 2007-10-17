---
title: Makefile cleanup and corrections (wikitext, f2254e1)
---

The makefile now correctly handles dependencies in an optimal way (the previous version sometimes re-compiled too much or too little). Now touching any of the dependent files will trigger an appropriate ANTLR run (if needed), and/or re-compilation or re-linking of only the necessary files.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
