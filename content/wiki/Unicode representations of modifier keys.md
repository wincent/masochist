---
tags: development wiki
---

In the process of preparing a personalized "cheat sheet" for [TextMate](/wiki/TextMate) I wanted to include graphical representations of the different modifier keys (Command, Shift, Control etc). It is possible to find and view these from the [Mac OS X](/wiki/Mac_OS_X) character palette but the huge size of the [Unicode](/wiki/Unicode) space can make this difficult unless you store such characters in your favorites list.

I'm recordings some of the useful codes here to save me the hassle of looking them up again in the future:

-   ⎋ (escape): `U+238B`
-   ⇥ (tab): `U+21E5`
-   ⇪ (caps lock): `U+21EA`
-   ⇧ (shift): `U+21E7`
-   ⌃ (control): `U+2303`
-   ⌥ (option): `U+2325`
-    (Apple): `U+F8FF` (in some [Apple](/wiki/Apple)-provided fonts only)
-   ⌘ (command): `U+2318`
-   ␣ (space): `U+2423`
-   ⏎ (return): `U+23CE`
-   ⌫ (backspace): `U+232B`
-   ⌦ (delete): `U+2326`
-   ⇱ (home): `U+21F1`
-   ⇲ (end): `U+21F2`
-   ⇞ (page up): `U+21DE`
-   ⇟ (page down): `U+21DF`
-   ↑ (up arrow): `U+2191`
-   ⇡ (up arrow): `U+21E1` (dotted form)
-   ↓ (down arrow): `U+2193`
-   ⇣ (down arrow): `U+21E3` (dotted form)
-   ← (left arrow): `U+2190`
-   ⇠ (left arrow): `U+21E0` (dotted form)
-   → (right arrow): `U+2192`
-   ⇢ (right arrow): `U+21E2` (dotted form)
-   ⌧ (clear): `U+2327`
-   ⇭ (num lock): `U+21ED`
-   ⌤ (enter): `U+2324`
-   ⏏ (eject): `U+23CF`
-   ⌽ (power): `U+233D`

Of the arrow forms I prefer the dotted forms because that is how they appear on my current [Apple](/wiki/Apple) keyboard.

To include these [Unicode](/wiki/Unicode) characters in the [HTML](/wiki/HTML) of this page I converted the numbers from [hexadecimal](/wiki/hexadecimal) to [decimal](/wiki/decimal) as in this example:

1.  Get [Unicode](/wiki/Unicode) for the escape key: `U+238B`
2.  Convert `238B` [hex](/wiki/hex) to 9099 [decimal](/wiki/decimal); you can use a tool like [WinHex](/wiki/WinHex) to do this.
3.  Include in document as an [HTML entity](/wiki/HTML_entity): `&#9099;`

# See also

-   Source: <http://macbiblioblog.blogspot.com/2005/05/special-key-symbols.html>
