---
tags: wiki
---

# Always use `attr_accessible`

See:

-   <http://somethinglearned.com/articles/2006/05/23/best-practices-a-strong-case-for-redacted-part-1>
-   <http://somethinglearned.com/articles/2006/05/24/best-practices-a-strong-case-for-attr_accessible-part-2>
-   "Hackers Love Mass Assignment": <http://www.railscasts.com/episodes/26>

# Protecting controller actions

Any public method in a controller class can be called from a web browser. For example, consider the following method:

    class UsersController < ApplicationController
      def nuke_database
        User.destroy_all
      end
    end

This method can be called from a browser using a [URL](/wiki/URL) like: <http://example.com/users/nuke_database/>

This is because the default routing in `config/routes.rb` allows it:

    map.connect ':controller/:action/:id'

When you try to access such a URL [Rails](/wiki/Rails) will look for a view template at `app/views/users/nuke_database.rhtml` and most likely not find it. Nevertheless, by the time the view-related error occurs the body of the method will already have been executed. It is therefore absolutely essential that you declare all methods that aren't public actions as `protected`:

    class UsersController < ApplicationController
      def index
        # public method
      end

    protected
      
      def nuke_database
        User.destroy_all
      end
    end

# Sessions

Articles on session security:

-   "Ruby on Rails sessions - introduction and expiry": <http://www.rorsecurity.info/2007/04/10/ruby-on-rails-sessions-introduction-and-expiry/>
-   "Session hijacking": <http://www.rorsecurity.info/2007/04/12/session-hijacking/>
-   "Session fixation in Rails": <http://www.rorsecurity.info/2007/04/15/session-fixation-in-rails/>

# See also

-   "Securing your Rails application": <http://manuals.rubyonrails.org/read/book/8>
