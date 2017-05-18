---
tags: wiki
---

1.  Create `NSButton` subclass
2.  Create `NSButtonCell` subclass

Note that overriding the `cellClass` class method of `NSButton` is not enough to force buttons created in Interface Builder (and told to use your custom class) to use your custom button cell class as well. When you drag an `NSButton` from the palette it is instantiated with an `NSButtonCell` cell. Telling Interface Builder that the button is of your custom class has no effect on the class of the cell in the button you just instantiated. You must either create an Interface Builder palette so that your instantiated button cell is of the correct class, or throw away the incorrect cell and replace it with a correct cell in your button's `initWithCoder` method.

# How `NSButtonCell` draws

Typical redraw order of a standard `NSButtonCell` in Tiger (empirically determined):

1.  `highlight:withFrame:inView:` calls `drawWithFrame:inView:`
2.  `drawWithFrame:inView:` calls `drawBezelWithFrame:inView:`, but only if `isBordered` returns `YES`
3.  `drawWithFrame:inView:` then calls `drawInteriorWithFrame:inView:`
4.  `drawInteriorWithFrame:inView:` calls `drawTitle:withFrame:inView:`

At least with the button type I was using in my experiments, it appears that `NSDrawWindowBackground` is not called (at least, setting a symbolic breakpoint on it, it never got hit when playing with an empty `NSButton`/`NSButtonCell` subclass pair).
