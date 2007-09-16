---
title: Remove use of HOM methods (Synergy Advance, 04831bb)
---

Given that some of the HOM code is broken on Leopard and the time before Leopard ships is rapidly dimishing, replace uses of HOM methods with conventional program flow. The number of sites where the technique is used in the Synergy Advance code base is still quite small so this is only a minor change; once Leopard ships I can always consider going back and investigating the cause of the breakage, but for now I will be removing the HOM stuff from the WOCommon unit tests (in a separate commit to the WOCommon repository).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
