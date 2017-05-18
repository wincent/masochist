---
title: Hook up new combine() and extract() functions (Wincent Strings Utility, 97d6426)
tags: snippets
---

These two functions can be used to help with incremental localization.

The extract() function looks at a base strings file (in the development language) and compares it with a target strings file (in the target langauge). All strings which are new (not present in the target) or untranslated (present in the target but with the same value as in the base) are extracted. The output can then be sent to translators for translation.

The combine() function takes a partial strings file (of the kind produced by the extract() function) and integrates it with an existing file using a simple additive algorithm (not a merge). It is considered an error if there is any overlap in the keys in the two files.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
