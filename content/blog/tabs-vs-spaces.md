---
title: Tabs vs spaces
---

[Linus weighs in](http://marc.info/?l=git&m=119256283906643&w=2), in typical fashion, on the [tabs versus spaces](http://www.google.com/search?q=tabs+vs+spaces) debate:

> The only sane solution is the one the kernel and git have always used: tabs are 8 spaces wide, and anybody who disagrees can go screw themselves.

Now, in my opinion this is a bit of [a bikeshed argument](http://en.wikipedia.org/wiki/Color_of_the_bikeshed). I have my own preferences which I apply to projects that I control, and I try to adhere to the standards set by other projects when making contributions to them, but I don't bother pouring more fuel on the fire when this kind of debate is raging on a mailing list.





If you check out the top [Google](http://www.wincent.com/knowledge-base/Google) hits on the subject you'll get some nice arguments on both sides, some interesting proposals, as well as some questionable affirmations:

1.  <http://www.jwz.org/doc/tabs-vs-spaces.html>
2.  <http://blogs.msdn.com/cyrusn/archive/2004/09/14/229474.aspx>
3.  <http://blogs.msdn.com/stevejs/archive/2005/10/30/487102.aspx>
4.  <http://www.derkarl.org/why_to_tabs.html>
5.  <http://xahlee.org/UnixResource_dir/writ/tabs_vs_spaces.html>
6.  <http://nickgravgaard.com/elastictabstops/>

If you skim over those you should have a fairly thorough grounding in both sides of the argument.

I've pretty much always preferred spaces over tabs for the following reason:

> Spaces give you total control over how your code will appear when others view it.

Kind of like sending a PDF rather than a proprietary Word document. But it's also easy to see why people like Torvalds hold precisely the opposite point of view:

> Tabs allow the viewer to determine how code looks when they view it.

Using tabs for indentation (to show scope) and then spaces for additional alignment might produce code that looks pretty good everywhere *and* has a degree of viewer-configurability, *but* it suffers from what is in my view a fatal flaw: it requires users editing the text to manipulate invisible symbols. Sure, smart editors can help, and turning on the display of invisibles can help (but at the cost of aesthetics), but it's never going to be ideal.

But fundamentally I just don't care. It's not worth getting all upset arguing about any of these perspectives because, no matter you do, you're going to have to deal with code that has mangled whitespace in it. Do your best to play by the rules of the community that you're in, always try to be consistent, but don't be obsessive because trying to win the tabs versus spaces debate is like trying to put the genie back in the bottle. It's entropy.
