---
title: Making Vim highlight "suspicious" characters
tags: vim blog
cache_breaker: 1
---

There's one thing that I wanted [Vim](/wiki/Vim) to do but couldn't get to work, and that was highlight "strange" or "suspicious" characters in my source files.

Invariably my sources files are [UTF-8](/wiki/UTF-8) encoded, and in 99% of those cases they use only the most basic subset of printable [ASCII](/wiki/ASCII) characters. Anything which intentionally falls outside of that range is usually highly visible and obvious, such as code comments with words like "información" or test strings with symbols like the Euro symbol ("€") in them.

But on my Spanish keyboard I am forced to hold down the Option key to produce some characters that are extremely common when programming, such as `[`, `]`, `{` and `}`. Even the humble `@` symbol requires the Option key to be held down, as do `\`, `|` and even `#`.

The unfortunate consequence of this is that when typing fast sometimes the Option key is still down when I next strike the Space bar, and that means that a nasty invisible character gets inserted (character code 160 in decimal, or `0xa0` in hex, otherwise known as "non-breaking space").

In [Vim](/wiki/Vim) this darn character looks like a normal space, so you don't notice it until some tool in your build chain complains about it with a cryptic message which might send you barking up the wrong tree:

    [ERROR] 254:38:syntax error

Or if you are lucky, something slightly more helpful:

    [ERROR] 254:38:illegal character

[BBEdit](/wiki/BBEdit) and [TextMate](/wiki/TextMate) both get it right, showing a little gray circle indicating that there is an invisible character. [Xcode](/wiki/Xcode) used to get it wrong but now gets it right too.

I really wanted to figure out how to make [Vim](/wiki/Vim) do the right thing as well.

# The solution

Typing `ga` in Vim when the cursor is over the offending character will show you its value; that's how I was able to assert that the most frequent offender is the dreaded Option-Space/`0xa0`.

It also offers a bit of help on the subject under `:h isprint`. At least with my config the value for this setting is `@,161-255`. As you can see, `0xa0` (160) isn't in that range anyway so it should be printed in a special way.

I inspected my color scheme with `:hi NonText` to be sure that the non-printables should stand out:

    NonText        xxx term=bold ctermfg=9 gui=bold guifg=Blue

But I just couldn't get it to work. In the end the answer lied in the `listchars` setting, which I already had customized as:

    set listchars=eol:¶,tab:>-,extends:»,precedes:«,trail:•

Herein lay the problem. As the help for `listchars` indicates:

    nbsp:c        Character to show for a non-breakable space (character
                  0xA0, 160).  Left blank when omitted.

So I changed my `listchars` to this:

    set listchars=nbsp:¬,eol:¶,tab:>-,extends:»,precedes:«,trail:•

And voila! I can see those dratted invisible characters at last!

For reference, you can customize the coloring applied to these characters using the `NonText` highlighting (used for "eol", "extends" and "precedes") and `SpecialKey` highlighting (for "nbsp", "tab" and "trail"). See the Vim help on `'listchars'` (`:h 'listchars'`) for more information.

Seeing as "nbsp" and "trail" are basically always errors, and "tab" isn't used in the code bases I normally work with, I like this color to be a jarring, hard-to-overlook blue. On the other hand "eol" is totally commonplace, appearing at the end of every line, so I like to pick a subtle, low-contrast color for it like gray.
