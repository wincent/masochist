---
title: Revert ESCAPED_TT tokenization (wikitext, caa69cc)
---

I don't want to introduce special escapes into the grammar, even though this one works. In the interests of consistency the correct solution is to just embed literal backticks in a &lt;nowiki&gt;&lt;/nowiki&gt; span, as demonstrated in the specs. Literal backticks are already passed through unaltered in &lt;pre&gt;&lt;/pre&gt; and &lt;tt&gt;spans&lt;/tt&gt; anyway, which is arguably the most common case.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
