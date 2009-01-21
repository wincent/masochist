---
tags: rails routes
---

# Rails 3

## Named routing helpers

Allow the use of named routing helpers like `user_path()` in the console:

```ruby
include Rails.application.routes.url_helpers
```

You can also use the `app` object available on the console:

```ruby
app.articles_path
```

# Rails 2

## Named routes

This information can be found in a few places; this time I copied it from [here](http://stuartsierra.com/2008/01/08/testing-named-routes-in-the-rails-console):

    include ActionController::UrlWriter
    default_url_options[:host] = 'whatever'

After this you can use named route helper methods like `root_path` and the like.

## Generation

    rs = ActionController::Routing::Routes
    generate :controller => 'foo', :action => 'bar'

## Recognition

    rs.recognize_path '/'
