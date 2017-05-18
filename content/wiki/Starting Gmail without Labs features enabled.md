---
tags: gmail wiki
---

I have a few Gmail accounts and suddenly this morning one of them started refusing to load. This wasn't browser-specific (tried it in multiple browsers), and my other accounts loaded just fine.

You can prevent Labs features from loading by supplying `labs=0` as a query string parameter; for example I changed:

-   `https://mail.google.com/mail/u/0/#inbox`; to:
-   `https://mail.google.com/mail/u/0/?labs=0#inbox`

And now Gmail loads again, as does the "basic" view.

I'm not actually sure what the problem is, as it reappears on switching Labs features back on.
