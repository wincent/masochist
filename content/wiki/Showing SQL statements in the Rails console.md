---
tags: rails
---

Found in a comment on [this weblog post](http://frozenplague.net/2008/12/showing-sql-statements-in-scriptconsole/); stick this in your `~/.irbrc`:

    if ENV['RAILS_ENV']
      # Called after the irb session is initialized and Rails has been loaded
      IRB.conf[:IRB_RC] = Proc.new do
        logger = Logger.new(STDOUT)
        ActiveRecord::Base.logger = logger
        ActiveResource::Base.logger = logger
      end
    end

Now when you interact with the database you'll see it interspersed, colorized with the other output:

    $ script/console
    Loading development environment (Rails 2.2.2)
    >> Issue.first
      Issue Load (0.7ms)   SELECT * FROM `issues` LIMIT 1
    => #<Issue id: 1, created_at: "2009-01-17 21:26:42", updated_at: "2009-01-18 00:00:57">
