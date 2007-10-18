---
title: Allan Odgaard on file type detection in TextMate
---

I've never been able to get [TextMate](http://www.wincent.com/knowledge-base/TextMate) to reliably detect [Ruby](http://www.wincent.com/knowledge-base/Ruby), [Rails](http://www.wincent.com/knowledge-base/Rails) and [RSpec](http://www.wincent.com/knowledge-base/RSpec) files. Allan Odgaard, the author of TextMate, [explains here](http://macromates.com/blog/2007/file-type-detection-rspec-rails) how to bend the system to your will.

I think there's something obviously wrong with the design when it takes this much effort to get file extensions correctly mapped, but I also suspect that you're not about to see the system overhauled (there are too many bundles out there which use it); at least there *is* a workaround, no matter unnecessarily complicated it may seem.





If you want, you can start by reviewing your manual file type bindings (optional):

    defaults read com.macromates.textmate OakLanguageFileBindings

Your manual bindings are almost certainly the cause of the problem, so ensure that TextMate is not running and delete them all:

    defaults delete com.macromates.textmate OakLanguageFileBindings

Now open up a Ruby file in TextMate and manually set its type to Ruby in the language pop-up:

    mate /tmp/file.rb

Quit TextMate and re-check your manual bindings again; the should be empty:

    defaults read com.macromates.textmate OakLanguageFileBindings

Now fire up TextMate and go to the "Bundles" menu, "Bundle Editor" submenu, "Edit Languages" item, and make this change in the Rails language definition:

       fileTypes = ( 'rxml' );

Should become:

       fileTypes = ( 'rxml', 'rb' );

And in the Ruby language definition:

       fileTypes = ( 'rb', 'rbx', 'rjs', 'Rakefile', 'rake', 'cgi', 'fcgi', 'gemspec' );

Should become:

       fileTypes = ( 'rbx', 'rjs', 'Rakefile', 'rake', 'cgi', 'fcgi', 'gemspec' );

Now when you open `.rb` files they should default to Rails as their "language", and `_spec.rb` files should default to RSpec.

(These instructions are basically copied directly from Allan's weblog; I include them here to demonstrate my point about the complexity of this operation.)

Now all you need to do is remember never to touch the Language pop-up again. The problem is that all your plain Ruby files will now be identified as "Rails", even when they have nothing to do with Rails (of course, Ruby *is* much more than just Rails). If you fall into the trap of toggling the language pop-up back to "Ruby" for such a file then you've blown it and will have delete your manual language bindings again.

What's the ideal solution to this quagmire? Evidently the key piece is a method for choosing between ambiguous options (where `.rb` can be Rails or Ruby). What would be the best way to do this? Writing it to the files resource fork? (not so good on a multi-user system where many different users may edit the same file.) Keeping the type information in per-user, centralized store? (in your `~/Library/Application Support/` directory.) Allowing regular expressions based on the full path of the file, not just its extension? (in other words, matching against paths like `.+/app/models/.+\.rb`; that's not the actual regex I would use but this darn wiki markup I'm using doesn't allow me to type square brackets!)
