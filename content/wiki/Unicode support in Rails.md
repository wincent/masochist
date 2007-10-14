---
tags: rails mysql
---

As of [Rails](/wiki/Rails) 1.2 ([see here](http://weblog.rubyonrails.org/2007/1/19/rails-1-2-rest-admiration-http-lovefest-and-utf-8-celebrations)) [Unicode](/wiki/Unicode) support is included right out of the box.

Set up a brand new application with a simple scaffold and check the HTML output returned by the browser; it will include a line like this:

    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />

Likewise, the actual [HTTP](/wiki/HTTP) headers returned to the browser will be appropriately set. You can test this out using `curl`:

    curl -i http://example.com/rails_app

Note the `charset=utf-8` in the returned header:

    HTTP/1.1 200 OK 
    Cache-Control: no-cache
    Connection: Keep-Alive
    Date: Mon, 02 Apr 2007 19:10:27 GMT
    Content-Type: text/html; charset=utf-8
    Server: WEBrick/1.3.1 (Ruby/1.8.6/2007-03-13)
    Content-Length: 1317

But there is one extra thing you have to do to complete the configuration; in your `config/database.yml` file add a line like this for each [MySQL](/wiki/MySQL) database:

    encoding: utf8

Note that as of [Rails 2.0](/wiki/Rails_2.0) this configuration is included by default in the `database.yml` file.

# MySQL

Although [Rails](/wiki/Rails) itself is (almost) set-up to use [UTF-8](/wiki/UTF-8) out of the box [MySQL](/wiki/MySQL) is not necessarily the same. The default character set is [ISO 8859-1](/wiki/ISO_8859-1), otherwise known as [Latin-1](/wiki/Latin-1).

Confirming this, I installed the latest version from the 4.1 series on my [Mac OS X](/wiki/Mac_OS_X) box (see "[Installing MySQL 4.1.22 (binary) on Mac OS X 10.4.9](/wiki/Installing_MySQL_4.1.22_%28binary%29_on_Mac_OS_X_10.4.9)") and on performing a `SHOW CREATE TABLE example_table;` the table information included the following:

    ENGINE=InnoDB DEFAULT CHARSET=latin1

[InnoDB](/wiki/InnoDB) tables are fairly nice, offering transactions, row-level locking, and foreign-key constraints (see <http://dev.mysql.com/doc/refman/4.1/en/innodb-overview.html>), but the charset value is not what we want. I have seen [some posts](http://ruphus.com/blog/2005/06/23/getting-unicode-mysql-and-rails-to-cooperate/) that claim that [InnoDB](/wiki/InnoDB) tables don't support full-text searching if [UTF-8](/wiki/UTF-8) is used, but [the MySQL documentation](http://dev.mysql.com/doc/refman/4.1/en/fulltext-restrictions.html) clarifies this further stating that full-text searching is not support in [InnoDB](/wiki/InnoDB) tables with *any* encoding at all.

## Database creation time

In theory, you can set the default charset at the moment you create the database. Instead of:

    mysqladmin -u root create application_name_development

You would do this:

    mysqladmin -u root create application_name_development --default-character-set=utf8

But in practice this didn't work for me. The setting is apparently ignored.

The alternative approach [described here](http://www.devpals.com/showthread.php?t=136) is to create the database from inside the [MySQL](/wiki/MySQL) shell:

    $ mysql -u root
    mysql> CREATE DATABASE application_name_development CHARACTER SET 'UTF8';

The same thing, from the command line:

    mysql -u root -e "CREATE DATABASE application_name_development CHARACTER SET 'UTF8';"

Unlike the other method, this one does seem to work (see "[Finding out the encoding of a MySQL database](/wiki/Finding_out_the_encoding_of_a_MySQL_database)"):

    mysql> USE application_name_development;
    Database changed
    mysql> SHOW VARIABLES LIKE 'character\_set\_%';
    +--------------------------+--------+
    | Variable_name            | Value  |
    +--------------------------+--------+
    | character_set_client     | latin1 |
    | character_set_connection | latin1 |
    | character_set_database   | utf8   |
    | character_set_results    | latin1 |
    | character_set_server     | latin1 |
    | character_set_system     | utf8   |
    +--------------------------+--------+
    6 rows in set (0.00 sec)

To start a [MySQL](/wiki/MySQL) session and issue the `CREATE DATABASE` command in a single operation you can do:

    mysql -u root -e "CREATE DATABASE application_name_development CHARACTER SET 'UTF8';"

Yet another way, when working with [Rails](/wiki/Rails), is to use [Rake](/wiki/Rake) tasks; assuming you have your `database.yml` file correctly configured then you can just:

    rake db:create:all

## Across all databases on the server

The [same post](http://www.fngtps.com/2007/02/ruby-and-mysql-encoding-flakiness) explains how, if you control the entire [MySQL](/wiki/MySQL) server, you can set the following in your `/etc/mysql/my.cnf` file:

    [mysqld]
    character-set-server = utf8

    [client]
    default-character-set = utf8

If you do this then all databases will be automatically created using [UTF-8](/wiki/UTF-8) as the default character set. There is no need to pass any special command line options or to manually pass the `CHARACTER SET` parameter when creating a database.

Although this is convenient, it may not be possible for all users and it may also cause compatibility issues with other software which might incorrectly assume that the database is running with [Latin-1](/wiki/Latin-1) text encoding; as such my preferred method is to create new databases from within the [MySQL](/wiki/MySQL) shell as described above.

## Migration time

If you cannot set this at the database level you can also do it from inside your migrations. Modify your migrations from:

    create_table :examples do |t|

To:

    create_table :examples, :options => 'default charset=utf8' do |t|

Then your tables will have the appropriate charsets regardless of the database settings.

# External links

-   <http://happygiraffe.net/presentations/rails-unicode/rails-unicode-notes.pdf>
-   <http://media.fngtps.com/audio/2006/rstm01-unicode_in_rails.m4a>
-   <http://woss.name/2006/10/25/migrating-your-rails-application-to-unicode/>
-   <http://ruby.org.ee/wiki/Unicode_in_Ruby/Rails>
-   <http://ruphus.com/blog/2005/06/23/getting-unicode-mysql-and-rails-to-cooperate/>
-   <http://www.devpals.com/showthread.php?t=136>

