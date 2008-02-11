---
title: Add tokenization of mailto URIs (wikitext, c70f28a)
---

We already had tokenization of email addresses, which in combination with autolinking gave us clickable email address links.

Now we have tokenization of "mailto" URIs, which means that we now also have the option of using the standard external link syntax, like we would with any other URI, to provide the link text rather than just making the address itself clickable.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
