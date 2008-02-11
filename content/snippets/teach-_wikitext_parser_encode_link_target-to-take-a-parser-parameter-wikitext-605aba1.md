---
title: Teach _Wikitext_parser_encode_link_target to take a parser parameter (wikitext, 605aba1)
---

Instead of passing a string object, pass a pointer to a parser struct instead. This is groundwork for teaching \_Wikitext\_parser\_encode\_link\_target how to handle links when "treat slash as special" is in effect.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
