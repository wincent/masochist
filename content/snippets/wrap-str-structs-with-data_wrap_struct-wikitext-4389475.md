---
title: Wrap str structs with Data_Wrap_Struct (wikitext, 4389475)
---

This is the companion commit to 7f506d3 which wrapped ary structs. The purpose of this commit is to ensure that str structs get freed in the event of an abnormal exit from the parse function (ie. via an exception).

Note that in order for this change to be made I had to change the initialization of the tabulation struct; it needs to be initialized in the parse function so that it can be added to the stack in the appropriate scope, and this in turn means that it needs to be pre-initialized rather than lazily initialized.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
