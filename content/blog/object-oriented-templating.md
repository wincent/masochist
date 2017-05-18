---
title: Object-oriented templating
tags: blog
---

I'm in the process of falling in love with object-oriented templating, and specifically with the [Cheetah](http://cheetahtemplate.org/) Python-powered templating engine.

I've always been a big fan of code re-use. This site, for example, has a number of re-usable elements that appear on a large number of pages (the navigation bar up the top, the "bread crumbs", the side boxes); these elements appear only once on the disk and are included in multiple pages. Update the included element once and all the pages that use it automatically reflect the change. The separation of content (HTML) and layout/style information (CSS) is another manifestation of the re-use philosophy; change the CSS in one place and all pages which include the style sheet will benefit from the change.

But I wanted more than just re-use of elements. I wanted a truly object-oriented templating system. This would allow me to not only re-use elements but to modify them on the fly, omit them, augment them, filter them, warp them... The benefits of this pattern will be immediately evident to any programmer who's worked with an object-oriented programming language (seems to be a point that [this guy just doesn't get](http://jogin.com/weblog/archives/2004/03/19/template_systems)).





I originally looked for an object-oriented templating system in [Ruby](http://www.ruby-lang.org/en/), my current favorite scripting language, but couldn't find anything; anything useful was buried under an avalanche of references to [Ruby on Rails](http://www.rubyonrails.org/) and [ERB](http://www.ruby-doc.org/stdlib/libdoc/erb/rdoc/), the templating system used by Rails. But ERB isn't what I'm looking for, unless I misunderstand it: ERB is basically a way of embedding Ruby in HTML just like you would with PHP; it allows you to embed an object-oriented langauge (Ruby) into your templates but it doesn't provide you with a way of making the templates themselves into an object-oriented hierarchy.

So Cheetah looked like the answer, and indeed it looked so good that I'm prepared to learn [Python](http://www.python.org/) in order to be able to use it (although you don't need to know any Python at all to do the most basic stuff). I later learned about [Amrita](http://amrita.sourceforge.jp/) (written in Ruby) but it doesn't seem to fit the bill like Cheetah does (no template inheritance, overloads the `id` attribute which already has meaning in HTML).

In [the article I linked to above](http://jogin.com/weblog/archives/2004/03/19/template_systems), Tomas Jogin describes his search for a template system that would allow him to purge his templates of *all* logic. I think his argument is misguided for a number of reasons:

-   It's good to separate presentation from what's known as "business logic", but Jogin wants to separate *presentation* logic from the presentation as well. Yes, models should be separate from views, controllers should mediate between them, and you shouldn't mish-mash your models, views and controllers wihout very good reason; but that doesn't mean that your presentation has to be totally unsullied by presentation logic.
-   Jogin argues that designers working with HTML should not be expected to know how to handle the "logic" side of things; yet somehow he expects them to learn an arcane attribute syntax which they must use in the template to map aspects of the model to the presentation of the model. I would argue that anyone who knows how to produce layouts using raw HTML is also capable of working with an extremely simple `for` loop syntax.
-   Separating presentation logic from the rest of the presentation specification adds unnecessary complexity to the system, requring more code and making it harder to maintain.
-   Embedding the model-to-presentation mapping information in HTML attributes effectively hides them when working in a WYSIWYG editor. It's better for a designer to see a clear `#if`/`#else`/`#endif` conditional out in the open.
-   And most importantly of all, his line of argument leads him to completely overlook the single most important benefit of template engines like Cheetah: that their object-oriented nature allows them to deliver a degree of code re-use that convential templating languages (like PHP itself) can never achieve.

It's too late for this website for me to benefit from Cheetah; but in a future revision I will most definitely start using object-oriented templates. But one area where I can start using Cheetah immediately is in the preparation of the in-application help documentation that I ship with my products. I'm currently getting up to speed on this right now and will be replacing the PHP-based tools that currently form part of the [Wincent Build Tools](http://www.wincent.com/a/products/buildtools/).

But I can also see Cheetah as being of great help in my programming too. As an example, [this article](http://www.onlamp.com/pub/a/python/2005/01/13/cheetah.html) shows how Cheetah is not necessarily limited to producing HTML documents. I can imagine scenarios in which I use Cheetah templates to churn out uniform chunks of code (like indexed accessor methods). The idea for this was inspired by [this post](http://rentzsch.com/code/mogenerator) where Jonathan 'Wolf' Rentzsch describes a tool for taking the busy work out of generating managed object subclasses. In short, you divide your code into two files: the human-maintained part (the main class) and a machine-generated part (in this case, a Cheetah-template-driven category on the main class). The human-maintained part contains all the custom code and the machine-generated part contains invariant, repetitive code that will always be written the same way and can therefore be done by a dumb machine. The machine-generated part can be updated (re-generated) at will without overwriting the human-maintained part.

So I'm off to continue getting together a bunch of Cheetah-related tools for me build chain (you can easily drive all this stuff [using makefiles](http://cheetahtemplate.org/docs/users_guide_html_multipage/tips.Makefile.html), how cool is that?).
