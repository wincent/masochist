---
title: Payoff time
---

Along with my other development work, since the start of the year I've been working on an object-oriented templating system called [Walrus](http://walrus.wincent.com). Its functionality is similar to that of the [Cheetah](http://www.wincent.com/knowledge-base/Cheetah) templating engine but it's written in [Ruby](http://www.wincent.com/knowledge-base/Ruby) instead of in Python. It's a wheel that I was forced to reinvent for two reasons: one, the fact that I don't know Python; and two, problems with Cheetah (missing features or undesired behaviours) which I couldn't correct because I don't know Python... At this stage it offers only a subset of the Cheetah functionality but it's powerful enough to do what I designed it for: making documentation for display in Apple's Help Viewer.

It turns out that what started out as a simple project ended up becoming quite a bit more complex. But I'm very glad I did it because I learned a great deal along the way and my familiarity with Ruby has gone through the roof: something that will be very useful as I work on the [Rails](http://www.wincent.com/knowledge-base/Rails) rewrite of this site and start using the Ruby scripting bridge that [Apple](http://www.wincent.com/knowledge-base/Apple) will ship with [Leopard](http://www.wincent.com/knowledge-base/Leopard).

Walrus is essentially a compiler that reads files written in a special templating markup (almost identical to that used by Cheetah) and compiles them down to Ruby code. The final output is produced by "filling" (running) the compiled templates. There is a `walrus` [command line](http://www.wincent.com/knowledge-base/command%20line) tool that serves as a front end and makes it easy to process templates in batch style. At its core Walrus employs a [packrat](http://www.wincent.com/knowledge-base/packrat) parser which can recognize any [PEG](http://www.wincent.com/knowledge-base/PEG) and even accepts constructs that wouldn't usually be legal in a [PEG](http://www.wincent.com/knowledge-base/PEG) such as left-recursive productions. The parser is capable of producing arbitrarily complex [ASTs](http://www.wincent.com/knowledge-base/ASTs). Although I'm using it to produce help documentation the design is general enough to be used in any situation where you want to transform text from one format to another. All this means that it is a tool that could end up proving quite useful.





## The output

It's been very gratifying over the last few days to see it finally come to the point where I can start leveraging it for use in my own applications. [Click here for a screenshot](http://www.wincent.com/a/about/wincent/weblog/hextrapolate_help_screenshot.png) of the help pages for [Hextrapolate](http://hextrapolate.wincent.com).

I want the documentation to look beautiful to the user, so the style sheets are based on the current Apple look and feel in [Tiger](http://www.wincent.com/knowledge-base/Tiger). But I want the [HTML](http://www.wincent.com/knowledge-base/HTML) source to look beautiful as well; this is achieved principally through careful design of the [HTML](http://www.wincent.com/knowledge-base/HTML)/[CSS](http://www.wincent.com/knowledge-base/CSS) to minimize the amount of clutter in the markup, and then by cleaning up the whitespace using [Tidy](http://www.wincent.com/knowledge-base/Tidy):

    <html>
    <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>Resetting the preferences</title>
    <meta name="generator" content="Walrus 0.1">
    <meta name="author" content="Wincent Colaiuta">
    <meta name="author-email" content="win@wincent.com">
    <meta name="copyright" content="Copyright 2007 Wincent Colaiuta">
    <link href="../css/base.css" rel="stylesheet" media="all" type="text/css">
    <meta name="description" content="Resetting the preferences">
    </head>
    <body>
    <a name="resetting_the_preferences" id="resetting_the_preferences"></a>
    
    
    
    
    <h1>Resetting the preferences</h1>
    
    <p>To reset Hextrapolate’s preferences perform the following steps.</p>
    
    <ol>
    <li>Quit Hextrapolate</li>
    <li>Using the Finder, go to your home directory and open the <tt>Library folder</li>
    <li>Inside the <tt>Library folder, open the <tt>Preferences folder</li>
    <li>Drag the file <tt>com.wincent.Hextrapolate.plist from the <tt>Preferences folder to your Desktop, or to the Trash if you wish to dispose of it permanently</li>
    </ol>
    <p>The next time you launch Hextrapolate it will automatically create a new preferences file.</p>
    
    
    <h2>See also</h2>
    <p><a href="help:anchor='troubleshooting_tips' bookID=Hextrapolate Help">troubleshooting tips</a></p>
    <p><a href="help:anchor='quitting' bookID=Hextrapolate Help">quitting</a></p>
    
    
    </body>
    </html>

## The source

Below you can see the Walrus source used to produce the document. Things to note about it:

-   Use of `##` to introduce comments.
-   The `#extends` directive which indicates an inheritance relationship with a parent template (more on the object-oriented nature of the system later).
-   The `#def` directive for defining blocks of material.
-   The `#set` directive for assigning values to placeholders.
-   Incorporating the value of a placeholder using the `$placeholder` syntax; note that placeholders can optionally accept parameters and be nested inside other placeholders.
-   The ability to use [Textile](http://www.wincent.com/knowledge-base/Textile)-like markup in the documentation.
    -   This is not part of the Walrus core itself but is easily layered on top.
    -   I'm using backticks (`` ` ``) instead of hash/pound (`#`) to indicate numbered lists; this is because hash/pound has special meaning in both Walrus and Textile markup so it is much more comfortable to simply use a different character rather than trying to escape it.

<!-- -->

    ## Created by Wincent Colaiuta on 11 April 2007.
    ## Copyright 2007 Wincent Colaiuta
    ## $Id$

    #extends '../../../WOCommon/help/basic'

    #def setup
      #include '../settings.txt'
      #set $page_title  = "Resetting the preferences"
      #set $tag         = 'resetting_the_preferences'
      $abstract("Resetting the preferences")
      $see_also($link_to('troubleshooting_tips', 'troubleshooting tips'))
      $see_also($link_to('quitting', 'quitting'))
    #end

    ###############################################################################

    #def content

    To reset Hextrapolate's preferences perform the following steps.

    

    ` Quit Hextrapolate
    ` Using the Finder, go to your home directory and open the <tt>Library folder
    ` Inside the <tt>Library folder, open the <tt>Preferences folder
    ` Drag the file <tt>com.wincent.Hextrapolate.plist from the <tt>Preferences folder to your Desktop, or to the Trash if you wish to dispose of it permanently

    The next time you launch Hextrapolate it will automatically create a new preferences file.

    

    #end

## Compiled

For the curious, this is what the Ruby source for the compiled template looks like. In practice you never need to even look at this as all you really care about are the input template and the filled HTML output:

    #!/usr/bin/env ruby
    # Generated Thu Apr 12 11:27:33 +0200 2007 by Walrus version 0.1

    begin
      require 'rubygems'
    rescue LoadError
      # installing Walrus via RubyGems is recommended
      # otherwise Walrus must be installed in the RUBYLIB load path
    end

    require 'walrus/document'
    require File.join(File.dirname(__FILE__), '../../../WOCommon/help', 'basic').to_s

    module Walrus

      class WalrusGrammar

        class ResettingThePreferences < Basic

          def template_body

            super # (invoked automatically due to Extends directive)
            # Comment: Created by Wincent Colaiuta on 11 April 2007.
            # Comment: Copyright 2007 Wincent Colaiuta
            # Comment: $Id$
            accumulate('' + "\n") # RawText
            accumulate('' + "\n") # RawText
            accumulate('' + "\n") # RawText
            # Comment:#############################################################################
            accumulate('' + "\n") # RawText

          end

          def setup
            accumulate('  ') # RawText
            # Include (start): ../settings.txt:
                    # Comment: settings.tmpl
                    # Comment: A template for application-wide default settings
                    # Comment: WOCommon help templates
                    # Comment:
                    # Comment: Created by Wincent Colaiuta on 11 October 2006.
                    # Comment: Copyright 2006-2007 Wincent Colaiuta
                    # Comment: $Id$
                    accumulate('' + "\n") # RawText
                    # Comment:
                    # Comment: appliction-wide default settings go in here
                    # Comment:
                    accumulate('' + "\n") # RawText
                    set_value("book_id", instance_eval { 'Hextrapolate Help' }) # Set directive 
                    set_value("book_icon", instance_eval { 'Hextrapolate Help/gfx/icon16.png' }) # Set directive 
                    accumulate('' + "\n") # RawText
                    # Comment:
                    # Comment: the page_title should be overridden on a per-page basis
                    # Comment:
                    accumulate('' + "\n") # RawText
                    set_value("page_title", instance_eval { 'Help' }) # Set directive 
            accumulate('  ') # RawText
            set_value("page_title", instance_eval { "Resetting the preferences" }) # Set directive 
            accumulate('  ') # RawText
            set_value("tag", instance_eval { 'resetting_the_preferences' }) # Set directive 
            accumulate('  ') # RawText
            lookup_and_accumulate_placeholder(:abstract, "Resetting the preferences")
            accumulate('' + "\n") # RawText
            accumulate('  ') # RawText (continued)
            lookup_and_accumulate_placeholder(:see_also, lookup_and_return_placeholder(:link_to, 'troubleshooting_tips', 'troubleshooting tips'))
            accumulate('' + "\n") # RawText
            accumulate('  ') # RawText (continued)
            lookup_and_accumulate_placeholder(:see_also, lookup_and_return_placeholder(:link_to, 'quitting', 'quitting'))
            accumulate('' + "\n") # RawText
          end
          
          def content
            accumulate('' + "\n") # RawText
            accumulate('To reset Hextrapolate\'s preferences perform the following steps.' + "\n") # RawText (continued)
            accumulate('' + "\n") # RawText (continued)
            accumulate('' + "\n") # RawText (continued)
            accumulate('' + "\n") # RawText (continued)
            accumulate('` Quit Hextrapolate' + "\n") # RawText (continued)
            accumulate('` Using the Finder, go to your home directory and open the <tt>Library folder' + "\n") # RawText (continued)
            accumulate('` Inside the <tt>Library folder, open the <tt>Preferences folder' + "\n") # RawText (continued)
            accumulate('` Drag the file <tt>com.wincent.Hextrapolate.plist from the <tt>Preferences folder to your Desktop, or to the Trash if you wish to dispose of it permanently' + "\n") # RawText (continued)
            accumulate('' + "\n") # RawText (continued)
            accumulate('The next time you launch Hextrapolate it will automatically create a new preferences file.' + "\n") # RawText (continued)
            accumulate('' + "\n") # RawText (continued)
            accumulate('' + "\n") # RawText (continued)
            accumulate('' + "\n") # RawText (continued)
          end
          
        
          if __FILE__ == $0   # when run from the command line the default action is to call 'run'
            new.run
          end

        end # ResettingThePreferences

      end # WalrusGrammar

    end # Walrus

## Why object-oriented?

The key thing to note here is that the content above the row of hash markers is mostly static; you set it up once when you first create the page and then leave it alone. Most of your ongoing editing takes place below the row of hash markers. This is your sandbox:

    #def content

    To reset Hextrapolate's preferences perform the following steps.

    

    ` Quit Hextrapolate
    ` Using the Finder, go to your home directory and open the <tt>Library folder
    ` Inside the <tt>Library folder, open the <tt>Preferences folder
    ` Drag the file <tt>com.wincent.Hextrapolate.plist from the <tt>Preferences folder to your Desktop, or to the Trash if you wish to dispose of it permanently

    The next time you launch Hextrapolate it will automatically create a new preferences file.

    

    #end

In other words, most of the time you only have to focus on the true *content* of each document. You don't have to think about the headers, the footers, the styles or anything else. What happens if Apple changes the way its help documentation looks in Leopard? It's easy enough to change the CSS but what if they make deep structural changes as well? With object-oriented templating this is dead easy: just change the parent classes higher up in the inheritance hierarchy and all the children will automatically be updated.

### The "PHP" model

So how is this different from the traditional [PHP](http://www.wincent.com/knowledge-base/PHP)-style model of template re-use? In that model you define a master container and then you split off common elements into separate documents (header, footer etc). Each page basically looks like this:

    include('header')
    ...
    include('footer')

Now whenever you need to change your header you change it in only one place and all the pages on your site pick up the change.

So one day you realize that you want a side bar in your site and you have to edit every single page so that it looks like this:

    include('header')
    include('sidebar')
    ...
    include('footer')

You don't want to be burnt by that little mistake again, so you decide to split your content out into separate files too. Now you have centralized the header, the side bar, the footer into a single location so that they can be reused. And you've gone a step further and modified all your content pages so that they include only the content and none of the surrounding material. Each content page now basically has this structure:

    include('pre_content');
    ...
    include('post_content');

Note that in order for this to work you have to maintain a `pre_content` file which itself includes the header and the sidebar, and a `post_content` file which itself includes the footer.

Sounds nice, but one day you decide that you want to show a sidebar on the other side too, but only on half the pages in the site. You can't just edit your `post_content` file because that would affect all pages, not just the half that you want to target. So your only option is to create a `post_content2` and manually edit half of your pages to include that... It's easy to see that this is a never ending race to maximize reuse and eliminate repetitive editing, but it's a race that you cannot win: you'll always be one step behind.

### Object-orientation to the rescue

If you are a [Ruby](http://www.wincent.com/knowledge-base/Ruby) or [Objective-C](http://www.wincent.com/knowledge-base/Objective-C) programmer then you already know the solution to this problem: you need an inheritance hierarchy. Common elements move "up" in the hierarchy (towards the root) where they can be easily inherited. Specialized elements move "down" in the hierarchy as overrides. In this way you keep things [DRY](http://www.wincent.com/knowledge-base/DRY); you don't repeat yourself but instead ensure that information/behaviour is embodied at one and only one place in the hierarchy.

This idea is equally applicable to documents, not just to programming. The conundrum faced by the PHP developer in the previous section would be addressed using object-oriented templating using a class hierarchy like the following:

-   Master template: defines the overall layout of pages on the site, including the default header, footer and sidebar
    -   Special category template: overrides the master to add a second sidebar

Then each page on the site inherits from either the master or the special category template, overriding only the content block. Any changes made to the master affect all other pages on the site; changes made to the special category template affect only pages which inherit from it. Sweeping changes can be made by refactoring at any time: inserting a new template above or below the master, creating templates for other categories, adding subcategories. All of these changes are made in only one place and the effects automatically trickle down to where we want them.

Walrus implements this inheritance model and as an added bonus provides an `#include` directive for those times where you want to incorporate something by reference instead of merely inheriting it. This is demonstrated in the previous example where it is used to pull in global settings from another file.

And because all of this is written in Ruby and compiled down to Ruby code you can easily insert "helper" methods that help you eliminate error-prone or repetitive tasks like inserting links to other pages using Apple's non-standard Help linking system.

## Conclusion

The sky really is the limit on this one. One of the things that has always frustrated me about Apple's Help system is that it is very difficult to take the same documentation and use it both in the application itself as well as mirroring a copy to your website. If you use Apple's proprietary link style then your pages won't work on the web; if you use normal HTML links then you lose the frills that you get in Apple's Help Viewer. Furthermore, the system is poorly documented: most of the information is out-of-date or just plain missing (some of the [best information](http://andymatuschak.org/articles/2005/12/18/help-with-apple-help) is not actually provided by Apple). What happens if Apple changes the way it works in the future? For theses reasons I've always been reluctant to include in-application Help.

But using Walrus I am able to easily have the best of both worlds. I can have a helper function that emits Apple-style links if a particular environment variable is set at the time the templates are filled, and emits standard HTML links in other cases. If Apple ever changes the link format I'll just have to tweak the helper method and recompile.
