---
tags: tiger rails macos wiki
---

# Configuration file

Change your `config/database.yml` file from:

    development:
      adapter: mysql
      database: DatabaseName_development
      username: root
      password:
      host: localhost

    # Warning: The database defined as 'test' will be erased and
    # re-generated from your development database when you run 'rake'.
    # Do not set this db to the same as development or production.
    test:
      adapter: mysql
      database: DatabaseName_test
      username: root
      password:
      host: localhost

    production:
      adapter: mysql
      database: DatabaseName_production
      username: root
      password: 
      host: localhost

To:

    development:
      adapter: sqlite3
      dbfile: db/development.sqlite3

    test:
      adapter: sqlite3
      dbfile: db/test.sqlite3

    production:
      adapter: sqlite3
      dbfile: db/production.sqlite3

# Manual database creation

From a [Rails](/wiki/Rails) application root:

    sqlite3 db/test.sqlite3

In order for the file to actually be created it appears that you must execute a command from within the [SQLite](/wiki/SQLite) interactive shell:

    .schema
    .exit

Repeat this for the `db/development.sqlite3` and `db/production.sqlite3` databases.

# Automatic database creation

See "[First Ruby on Rails project on Mac OS X](/wiki/First_Ruby_on_Rails_project_on_Mac_OS_X)" for a demonstration of how to use [rake](/wiki/rake) to create databases and a new (empty) schema automatically.

# See also

<http://wiki.rubyonrails.org/rails/show/HowtoUseSQLite>
