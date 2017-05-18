---
title: Big menus, really big menus, and frickin' huge menus
tags: blog
---

The submenus in [Synergy Advance](http://www.wincent.com/a/products/synergy-advance/) can be pretty large if you have a large iTunes music library. There are submenus for Playlists, Genres and Artists. If your library has 50,000 songs in it then the submenu showing the library playlist alone will contain 50,000 menu items (and all of those items will appear in the Artists and Genres submenus too at various places). It's easy to see how this could get out of control. Furthermore, Cocoa won't allow you to use the same NSMenuItem in different NSMenus (at least the documentation tells you not to do it!) so if you want the same item to appear at multiple places in the menu hierarchy then you need to make a brand new copy of it for each place where you want it included.

So far this hasn't been a problem in my local testing, but then again I am working with a measly 2,040 songs in my library. But the next version of Synergy Advance is going to include something that is going to necessitate a change: (optional) graphics in the menus. We'll no longer be talking about 5,000 or 10,000 or even 100,000 tiny snippets of text. Suddenly we'll be talking about a lot of graphics. A load of them. So it's time to rework the code.

So out with the old:

    - (void)menuNeedsUpdate:(NSMenu *)menu;

And in with the new:

    - (int)numberOfItemsInMenu:(NSMenu *)menu;
    - (BOOL)menu:(NSMenu *)menu 
      updateItem:(NSMenuItem *)item
         atIndex:(int)index 
    shouldCancel:(BOOL)shouldCancel;

I'm hoping that this won't be too painful.
