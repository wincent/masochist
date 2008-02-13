---
title: Extract body_html method into Articles helper (wincent.com, 46d62b2)
---

This allows the "new", "edit" and "show" templates to all use the same method for showing the body text.

In the case of the "new" template being called for the first time there is no article and so we return an empty string; but when validation fails there could well be body content so we return it if available. This is used in the preview.

Same for the "edit" template, where we use the text in the preview.

Finally in the "show" template we use the method to display the body normally, not as a preview.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
