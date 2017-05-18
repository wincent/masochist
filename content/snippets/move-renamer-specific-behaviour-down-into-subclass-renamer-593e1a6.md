---
title: Move REnamer-specific behaviour down into subclass (REnamer, 593e1a6)
tags: snippets
---

As mentioned in 97148f1, there was a bit of highly-specific behaviour implemented in my WOHUDTableView subclass. I've now extracted this into a subclass of its own so that the parent class is more or less limited to clean, general functionality that would be usable in any application that wants to put a table view in a HUD.

Application-specific behaviour that is now in the subclass includes the row-resizing behaviour (this requires the table view to be the NSWindow delegate, so it's not very generalizable) and the ability to drag the window by clicking in the table (this is not very generalizable because it makes row selection impossible and is thus suited to read-only/display-only tables).

These limitations work well for REnamer, so I've run with them; I am sure that there are other ways but they would be more complex so best to leave them unexplored until they are actually needed.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
