---
title: The Vim epiphany
tags: vim blog
cache_breaker: 1
---

Switching from the world of easy-to-use modeless editors (Notepad, [TextMate](/wiki/TextMate), [BBEdit](/wiki/BBEdit), [Xcode](/wiki/Xcode) etc) to the unfamiliar modal landscape of [Vim](/wiki/Vim) requires a large effort. I suspect that a fairly common outcome is that, without sufficient motivation and commitment, many people end up giving up and going back to what they were comfortable with before.

If you're one of the lucky ones, this won't happen to you and you will instead arrive at an "epiphany moment" (or perhaps a series of small epiphanies) in which you feel like you finally understand what all the fuss is about, and decide that this is the editor that you would like to take for your lawfully wedded wife, or husband as the case may be.

Some people never experience that moment, and some experience it in entirely different ways with an entirely different editor, like [Emacs](/wiki/Emacs). Others never have an "epiphany" with *any* editor, but instead settle in comfortably with an editor like [TextMate](/wiki/TextMate) or an [IDE](/wiki/IDE) like Eclipse.

In this brief article I'm going to try to convey the essence of my personal "epiphany" with [Vim](/wiki/Vim) in a way that will be understandable to anybody, even someone who's never touched Vim, as long as it is read with a receptiveness and a desire to "get it" and find out what all the fuss is about.

# Power

[Vim](/wiki/Vim) is extremely powerful, but that's not what this is about. [Emacs](/wiki/Emacs) is extremely powerful too, as is any number of [IDEs](/wiki/IDEs). Being able to do super-complicated stuff isn't something that can set an editing environment head and shoulders above the rest, but is rather a minimum base-line requirement.

For me the thing that matters about Vim is actually the simple stuff. The basic, repetitive editing actions which you do literally a thousand times a day. If an editor can make *those* things as easy as possible for me, then it's won my heart.

This is why [Emacs](/wiki/Emacs) could never truly win me over. The easy stuff just didn't feel easy enough; the key combinations too uncomfortable and the customization (using Emacs Lisp) had too high a barrier to entry.

Vim, on the other hand, instantly felt right: easy-to-remember, mnemonic key commands; excellent default settings out of the box; easy customization using a familiar, [C](/wiki/C)-like scripting language; comfortable keyboard access (almost no modifier keys or sequences of multiple keys being held down).

Let's illustrate with a quick example:

```c
if (foo)
{
    bar();
    baz();|
}
```

Imagine you're editing the above snippet and the cursor is at the end of the fourth line (shown with a vertical bar, `|`) and you decide that you want to insert an additional function call *above* that line.

With a "normal" text editor your typical pattern will be:

1.  Hit the "up" cursor key to go to the previous line
2.  Hit "Return" to open up a new line
3.  Start typing the additional function call

Note that if your editor is indentation-aware at least you won't have to worry about tabbing over before you start adding your function call, because you'll already be in the fourth column.

Now let's compare the [Vim](/wiki/Vim) way of doing this:

1.  Hit "O" to open a new line above the current line
2.  Start typing the additional function call

The obvious advantage here is that we've achieved what we wanted in two steps rather than three; a very important distinction when we're talking about something that you probably want to do dozens or even hundreds of times in a normal day of coding. This two-step pattern is something that will come up again and again in Vim: "prepare to do something" and then "do it".

The not-so-obvious advantage but equally important in my mind, is the fact that with Vim there is a much smaller cognitive gap between what you want to do, and how you instruct the editor to actually produce the result that you want. That is, what you want to do is "open a new line above the current line", and the way you do it is to type "O", which is the Vim command for "open a new line above the current line". This command will work as you would expect no matter where the cursor is on the line.

In a normal editor on the other hand, the cognitive gap is larger. We can make the gap even more evident if instead of placing the cursor at the end of the line we imagine that it is somewhere in the middle (perhaps we moved it there to correct a typo). Note the cognitive gap between what we want to do (open a new line above the current line) and what we actually have to instruct the editor to do in order to get what we want:

1.  Hit the "up" cursor key to go to the previous line
2.  Hold down "Command" and the "right" cursor key to jump to the end of the line
3.  Hit "Return" to open up a new line

So that's three steps and only *one* of them actually matches up with our final intention (opening a new line); the first two steps instead have us thinking about completely unrelated things, like moving to the previous line (a line we don't even want to edit) and jumping to the end of a line (again, not even one we want to edit).

If you give Vim a try and start analyzing how you do things in Vim and how you do them in your old text editor, you will see this kind of pattern emerge again and again. The distance between *what* you want to do and *how* you do it tends to be so much shorter in Vim.

And the reason this is *so* important is because it applies to operations which are *so* common while editing code. Things like:

-   opening up a new line before the current line
-   opening up a new line after the current line
-   appending to the current line
-   deleting a line
-   moving a line
-   copying a line

Learn these basics and you will be loving Vim already. The basics alone are enough to make a compelling case. But that's not all you get.

Vim makes the basics easy but it also makes the hard stuff easy too. You don't have to learn all the high-level "power features" on day 1, but as you go you will gradually pick them up, one by one. Things like macros, multiple clipboards ("registers" in Vim lingo), awesome buffer/window management, amazing customizability. And all of this in a rock-solid environment which can handle any number of files and files of any size.
