---
title: RailsConf 2007
tags: blog
---

I've been a little surprised to see so little coverage of [RailsConf](http://conferences.oreillynet.com/rails/). There's be no hint of activity on the [official Rails weblog](http://weblog.rubyonrails.org/), and if I hadn't been reminded about it by a mention on [railscasts.com](http://railscasts.com) I would have entirely forgotten that it was taking place.

So far the most interesting [coverage](http://www.oreillynet.com/conferences/blog/railsconf/) has been [this post](http://jroller.com/page/obie?entry=railsconf_2007_opening_keynote) by Obie Fernandez where he lets us know what was said about [Rails](http://www.wincent.com/knowledge-base/Rails) 2.0:

1.  Breakpoints are back AND drop-in debugging is now supported! The debugging console pops up right in the Mongrel process. Looks really good and powerful. David says, "Kent \#Sibilev deserves a world of thanks for getting this to work.
2.  HTTP performance improvements. The \_include\_tags now have a :cache=&gt;true option that combines JS and CSS files together and gzips them to drastically improve performance.
3.  ActiveRecord QueryCache. Caches queries that have already been executed for performance boost.
4.  Renderers and mime types not conflated in the naming of the view templates anymore. (Refers to the new .erb and .builder extensions)
5.  Better config and initializer directory structure cleans up the mess of environment.rb
6.  Sexy migrations! Big improvement in the syntax of migration files and an example of a 3rd party plugin making it into core very quickly.
7.  Much better HTTP authentication support baked in.
8.  MIT license assumed now. Plugin generator script adds the MIT license by default.
9.  Spring cleaning. Improvements to basic Rails code and lots of 1.2 deprecations being moved out completely now.

Of these, the performance improvements are always welcome, the debugging stuff could prove useful, the improved migrations sound appealing, but the thing which I most care about is the [API](http://www.wincent.com/knowledge-base/API): will there be a lot of breakage in the move to 2.0? (And for that matter, what's the timeline on 2.0 coming out?)


### Update

More details [found here](http://blog.viget.com/tech/2007/05/20/whats-coming-in-rails-20/).
