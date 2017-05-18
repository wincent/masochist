---
tags: ruby rails wiki
---

These notes were made while trying to put together my first ever [Rails](/wiki/Rails) project. I recorded the steps taken so that it would be easier for me to repeat them in the future. I later expanded and improved upon these notes in "[Rails application bootstrapping](/wiki/Rails_application_bootstrapping)", and then went on to refine them further in "[Behaviour-Driven Development with Rails](/wiki/Behaviour-Driven_Development_with_Rails)".

# Basic setup

1.  Install and run [Locomotive](/wiki/Locomotive).
2.  Choose "Create New…" from the [Locomotive](/wiki/Locomotive) "File" menu.
3.  Choose "Edit in TextMate" from the "File" menu.
4.  In the Terminal, change to your [Rails](/wiki/Rails) project's application root.
5.  Run `` command `locomotive bash-environment` `` to enable command line manipulation.
6.  Set up your initial databases as described in "[Using SQLite for Ruby on Rails development on Mac OS X Tiger](/wiki/Using_SQLite_for_Ruby_on_Rails_development_on_Mac_OS_X_Tiger)"; skip over the "Manual database creation" step.

# Creating your database files

1.  Create initial databases and an empty schema

<!-- -->

    rake db_schema_dump

This will occur in the default (development) environment. Repeat for the other environments and then restore the `RAILS_ENV` to its original value.

    export RAILS_ENV=production
    rake db_schema_dump
    export RAILS_ENV=test
    rake db_schema_dump
    export RAILS_ENV=development

Alternatively using the `env` command:

    env RAILS_ENV=production rake db_schema_dump
    env RAILS_ENV=test rake db_schema_dump
    env RAILS_ENV=development rake db_schema_dump

1.  Creating your first table:

One way of doing this:

    script/generate model wikis

This command actually creates the first migration file in db/migrate.

From:

    class CreateWikis < ActiveRecord::Migration
      def self.up
        create_table :wikis do |t|
          [/tags/t.column #t.column] :name, :string
        end
      end

      def self.down
        drop_table :wikis
      end
    end

To:

    class CreateWikis < ActiveRecord::Migration
      def self.up
        create_table :wikis do |table|
          table.column :name, :string
        end
      end

      def self.down
        drop_table :wikis
      end
    end

    rake migrate

Adding columns to a table:

    script/generate migration weblogs

    class Weblogs < ActiveRecord::Migration
      def self.up
      end

      def self.down
      end
    end

    class Weblogs < ActiveRecord::Migration
      def self.up
        create_table :weblogs do |table|
          table.column :name, :string
        end
      end

      def self.down
        drop_table :weblogs
      end
    end

    rake migrate

## Keeping `db/schema.rb` automatically in sync during migrations

In the file, `config/environment.rb`, change:

      # Use SQL instead of Active Record's schema dumper when creating the test database.
      # This is necessary if your schema can't be completely dumped by the schema dumper, 
      # like if you have constraints or database-specific column types
      # config.active_record.schema_format = :sql

To:

      # Use SQL instead of Active Record's schema dumper when creating the test database.
      # This is necessary if your schema can't be completely dumped by the schema dumper, 
      # like if you have constraints or database-specific column types
      config.active_record.schema_format = :ruby

## Adding a column to an existing table

    script/generate migration add_creation_date_to_weblogs

    class AddCreationDateToWeblogs < ActiveRecord::Migration
      def self.up
        add_column "weblogs", "created", :datetime
      end

      def self.down
        remove_column "weblogs", "created"
      end
    end

    rake migrate

# The main controller

    script/generate controller main welcome

In `config/routes.rb`

    map.connect '', :controller => 'main', :action => 'welcome'

And delete `public/index.html`

# Creating a scaffold

    script/generate scaffold weblog

(Accessible at "http://localhost:3000/weblogs/").

# Creating a base layout (used site-wide)

Create a file at `app/views/layouts/application.rhtml`, indicating where included content should go with `<%= @content_for_layout %>`. For example:

    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
    	"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" version="-//W3C//DTD XHTML 1.1//EN" xml:lang="en">
    <head>
    	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    	<title><%= @page_title %></title>
    </head>
    <body>
    <%= @content_for_layout %>
    </body>
    </html>

# See also

-   "UsingMigrations": <http://wiki.rubyonrails.org/rails/pages/UsingMigrations>
-   "UnderstandingMigrations": <http://wiki.rubyonrails.com/rails/pages/UnderstandingMigrations>
-   "Using migrations to evolve your database schema without loosing \[sic\] your data": <http://media.rubyonrails.org/video/migrations.mov>
-   "Using Ruby on Rails for Web Development on Mac OS X": <http://developer.apple.com/tools/rubyonrails.html>
