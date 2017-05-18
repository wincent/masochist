---
tags: rails wiki
---

[Rails](/wiki/Rails) argues for "convention over configuration" to minimize time spent by programmers worrying about menial details and maximize time spent on substantive problem solving.

# Model and controller naming conventions

-   Model and class names are singular (`Weblog`, `Post`) and in [CamelCase](/wiki/CamelCase) (`AccessControlList`); if you use `script/generate model` to create a model the class file will be in lowercase, singular, separated by underscores (`weblog.rb`, `post.rb`, `access_control_list.rb`).
-   Database tables corresponding to models/classes are plural (`weblogs`, `posts`) and in lowercase, separated by underscores (`access_control_lists`).
-   Controller names are not required to match up with underlying model names, but when they do the convention (not enforced) is to use the plural form of the model name (`WeblogsController`, the corresponding file name would be `weblogs_controller.rb`); if you use `script/generate controller` to create a controller file [Rails](/wiki/Rails) will not perform and singular-to-plural conversion but will format the name in lowercase with underscore separators.
-   If you use `script/generate scaffold` to create a scaffold [Rails](/wiki/Rails) will create a singular model file and a plural controller file.

# Database naming conventions

-   Table columns of type `datetime` and named `created_at`/`created_on` or `updated_at`/`updated_on` will be automatically updated by [Rails](/wiki/Rails) on record creation and record update respectively.
-   Table columns named `lock_version` (type: integer, default: 0, null: false) will be used automatically by [Rails](/wiki/Rails) to perform "optimistic locking" (an exception will be raised whenever a race occurs).
-   A column named `counter_cache` can be used to save database lookups (see: <http://blog.gorgorg.org/articles/2006/04/04/ruby-on-rails-how-to-actually-use_count-counter_cache>).

# Model inheritance conventions

Given a class hierarchy that looks like this:

-   `ActiveRecord::Base`
    -    `Furniture`
        1.  `Chair`
        2.  `Table`

Rails will expect a single table named `furniture` with a column named `type` that will be used to distinguish which rows are used for the `Chair` model and which for the `Table` model. For more information see:

-   <http://activerecord.rubyonrails.org/show/SingleTableInheritance>
-   <http://rubyonrails.org/api/classes/ActiveRecord/Base.html>
-   <http://www.martinfowler.com/eaaCatalog/singleTableInheritance.html>

# View conventions

-   If you create a file at `app/views/layouts/application.rhtml` it will automatically be used as a wrapper around all other layouts.
