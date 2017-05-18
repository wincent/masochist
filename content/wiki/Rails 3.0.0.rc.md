---
tags: rails wiki
---

Pieced together from individual `CHANGELOG` files:

# Action Mailer

    *Rails 3.0.0 [release candidate] (July 26th, 2010)*

    * No material changes

# Active Record

    *Rails 3.0.0 [release candidate] (July 26th, 2010)*

    * Changed update_attribute to not run callbacks and update the record directly in the database [Neeraj Singh]

    * Add scoping and unscoped as the syntax to replace the old with_scope and with_exclusive_scope [José Valim]

    * New rake task, db:migrate:status, displays status of migrations #4947 [Kevin Skoglund]

    * select and order for ActiveRecord now always concatenate nested calls. Use reorder if you want the original order to be overwritten [Santiago Pastorino]

    * PostgreSQL: ensure the database time zone matches Ruby's time zone #4895 [Aaron Patterson]

# Active Resource

    *Rails 3.0.0 [release candidate] (July 26th, 2010)*

    * No material changes

# Active Support

    *Rails 3.0.0 [release candidate] (July 26th, 2010)*

    * Removed Object#returning, Object#tap should be used instead. [Santiago Pastorino]

    * Deprecation behavior is no longer hardcoded to the name of the environment.
      Instead, it is set via config.active_support.deprecation and can be one
      of :log, :stderr or :notify. :notify is a new style that sends the warning
      via ActiveSupport::Notifications, and is the new default for production
      [Yehuda Katz]

    * Renamed ActiveSupport::Dependecies.load_(once_)paths to autoload_(once_)paths. [fxn]

    * Added ActiveSupport::FileUpdateChecker to execute a block only if a set of files changed, used by Router and I18n locale files. [José Valim]

    * Added ActiveSupport::DescendantsTracker to track descendants with support to constants reloading. [José Valim]

    * ActiveSupport::OrderedHash#merge and [/tags/merge #merge]! accept a block. #4838 [Paul Mucur, fxn]

    * Date#since, [/tags/ago #ago], #beginning_of_day, #end_of_day, and [/tags/xmlschema #xmlschema] honor now the user time zone if set. [Geoff Buesing]

# Railties

    *Rails 3.0.0 [release candidate] (July 26th, 2010)*

    * Application generation: --skip-testunit and --skip-activerecord become --skip-test-unit
      and --skip-active-record respectively. [fxn]

    * Added console to Rails::Railtie as a hook called just after console starts. [José Valim]

    * Rails no longer autoload code in lib for application. You need to explicitly require it. [José Valim]

    * Rails::LogSubscriber was renamed to ActiveSupport::LogSubscriber [José Valim]

    * config.load_(once_)paths in config/application.rb got renamed to config.autoload_(once_)paths. [fxn]

    * Abort generation/booting on Ruby 1.9.1. [fxn]

    * Made the rails command work even when you're in a subdirectory [Chad Fowler]
