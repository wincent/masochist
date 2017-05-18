---
tags: rails mysql wiki
---

Some time has passed since I first began experimenting with [Rails](/wiki/Rails) (see "[First Ruby on Rails project on Mac OS X](/wiki/First_Ruby_on_Rails_project_on_Mac_OS_X)"). Since then [Rails](/wiki/Rails) has been updated several times, I haven't done any [Rails](/wiki/Rails) work at all, but I've learnt *a lot* of [Ruby](/wiki/Ruby) through my work on [Walrus](/wiki/Walrus). I'm going to maintain this article as a "best practice" recipe for starting a new [Rails](/wiki/Rails) application. I've further refined and extended upon this in the article, "[Behaviour-Driven Development with Rails](/wiki/Behaviour-Driven_Development_with_Rails)".

# Prerequisites

## Rails

    sudo gem install rails

## MySQL

Seeing as the final deployment will take place on a server running [MySQL](/wiki/MySQL) I will use [MySQL](/wiki/MySQL) locally rather than [SQLite](/wiki/SQLite):

    wget 'http://dev.mysql.com/get/Downloads/MySQL-4.1/mysql-standard-4.1.22-apple-darwin8.5.1-i686.tar.gz/from/http://mysql.rediris.es/'

For the latest download [URL](/wiki/URL), see:

-   <http://mysql.com/>
-   <http://dev.mysql.com/downloads/mysql/>
-   <http://dev.mysql.com/downloads/mysql/4.1.html#macosx>
-   <http://dev.mysql.com/get/Downloads/MySQL-4.1/mysql-standard-4.1.22-apple-darwin8.5.1-i686.tar.gz/from/pick>

This is a binary distribution so we extract directly to `/usr/local/` and proceed with the set-up:

    sudo tar xzvf mysql-standard-4.1.22-apple-darwin8.5.1-i686.tar.gz -C /usr/local
    cd /usr/local
    sudo ln -s mysql-standard-4.1.22-apple-darwin8.5.1-i686 mysql
    sudo chown -R root:wheel mysql-standard-4.1.22-apple-darwin8.5.1-i686
    sudo scripts/mysql_install_db --user=mysql

    # start the server
    sudo -b bin/mysqld_safe
    bin/mysqladmin -u root password 'new_root_password'

Although most of these commands are prefixed with `bin/` the truth is that they will work without it because (and only because) `/usr/local/mysql/bin/` is already in my `PATH`. Also note that there was no need to create the `mysql` user and group as this already existed on my system; I am not sure if that is the default for [Mac OS X](/wiki/Mac_OS_X).

I then logged in to the server (`mysql -u root -p mysql`) and deleted the lines corresponding to my host name (not `localhost` but the hostname returned by running `hostname`:

    delete from user where Host = 'example.local';
    flush privileges;
    exit

I also tried running the tests:

    cd sql-bench
    perl run-all-tests

    # fails because DBI isn't installed; install it
    sudo -H cpan DBI
    perl run-all-tests

    # fails because DBD::mysql isn't installed; install it
    sudo -H cpan DBD::mysql

`DBD::mysql` itself failed to install because none of the tests passed (it tried to connect as the `root` user without a password. Unfortunately I couldn't get this to install using the `cpan` and had to do it manually:

    cd ~/.cpan/build/DBD-mysql-4.004
    sudo perl Makefile.PL --testuser=root --testpassword=root_password
    sudo make
    sudo make test
    sudo make install
    cd -
    sudo rm -r ~/.cpan/build/DBD-mysql-4.004

Finally the tests could run, but only with root privileges:

    sudo perl run-all-tests --user root --pass root_password

### Passwordless access

Seeing as this is only really a development server I decided that things would be a lot simpler if I just went with passwordless access.

    # overwrite existing configuration
    sudo mysqladmin -u root -p shutdown
    sudo rm -rf data
    sudo scripts/mysql_install_db --user=mysql

    # secure access by insisting on local connections only (no network)
    echo -e "[mysqld]\nskip-networking\n" > /tmp/my.cnf
    sudo cp /tmp/my.cnf data/

    # restart the server
    sudo mysqld_safe &

## MySQL [RubyGem](/wiki/RubyGem)

    sudo gem install mysql -- --build-flags --with-mysql-dir=/usr/local/mysql

# Initial creation

    rails application_name
    cd application_name

# Database setup

## Development database

Create the database as follows:

    mysqladmin -u root create application_name_development

By default [Rails](/wiki/Rails) sets up `config/database.yml` to expect a database named `application_name_development` on the `localhost` to be accessed as user `root` with no password, so this will just work out of the box. You can confirm that things are working by issuing:

    rake db:migrate

From the top-level of your application directory.

## Test database

Likewise:

    mysqladmin -u root create application_name_test

## Production database

The production database needs to be set up on the remote server. As I've never actually deployed a [Rails](/wiki/Rails) application I haven't done this yet.

## Resetting your development database

    mysql -u root -e 'drop database application_name_development;'

    # this would have worked as well:
    # mysqladmin -u root drop application_name_development

    mysqladmin -u root create application_name_development

    # this line optional
    [/tags/echo #echo] '' > db/schema.rb

    rake db:migrate

Or alternatively, to rollback to the beginning without using [MySQL](/wiki/MySQL) at all:

    rake db:migrate VERSION=0

You can also use:

    rake db:drop:all
    rake db:create:all

Or:

    rake db:reset

Which is equivalent to:

    rake db:drop
    rake db:create
    rake db:migrate

## Unicode support

All of your migrations should include `:options => 'default charset=utf8'`. If you are running a version of Rails prior to [Rails 2.0](/wiki/Rails_2.0) then you should ensure that your `config/database.yml` file includes appropriate `encoding: utf8` entries (new apps created with Rails 2.0 already have this setting in the `database.yml` file by default).

See "[Unicode support in Rails](/wiki/Unicode_support_in_Rails)" for full details.

# Creating RESTful models/controllers

As en example, creating an `Issue` model and corresponding files:

    script/generate scaffold_resource issue subject:string description:text
    script/generate scaffold_resource user login_name:string password_hash:string password_salt:string display_name:string
    script/generate scaffold_resource group name:string
    script/generate scaffold_resource membership
    rake db:migrate

# [Subversion](/wiki/Subversion)/[SVK](/wiki/SVK) setup

See "[Checking a new Rails application into an existing Subversion repository](/wiki/Checking_a_new_Rails_application_into_an_existing_Subversion_repository)".
