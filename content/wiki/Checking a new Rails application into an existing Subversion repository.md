---
tags: rails subversion wiki
---

Instructions can be found [here](http://wiki.rubyonrails.org/rails/pages/EdgeRails) for tracking [EdgeRails](/wiki/EdgeRails) using [Subversion](/wiki/Subversion), and [here](http://wiki.rubyonrails.org/rails/pages/HowtoUseRailsWithSubversion) for importing an [Rails](/wiki/Rails) application into a [Subversion](/wiki/Subversion) repository.

The pattern followed in the later article is the following:

1.  Import the entire application
2.  Remove files from the repository that should be ignored
3.  Set the `svn:ignore` property on those files so that they don't interfere with future check-outs or commits

# [SVK](/wiki/SVK)

This is the approach I used in conjunction with [SVK](/wiki/SVK) as described in "[Behaviour-Driven Development with Rails](/wiki/Behaviour-Driven_Development_with_Rails)":

    svk rm log/*
    svk propset svn:ignore '*.log' log
    svk rm tmp/*
    svk propset svn:ignore '*' tmp
    svk mv config/database.yml config/database.example
    svk propset svn:ignore 'database.yml' config
    svk ci -m "Set-up ignored files"

# Alternate approach

When I first did this I preferred to use a different method; rather than import/remove/ignore, I chose to selectively add and set the ignore properties so that the ignored files never touched the repository:

    # first I tried adding the tmp directory
    svn add tmp

    # but realized it a recursive add wasn't what I wanted
    svn help

    # so had to use "svn revert"
    svn revert tmp

    # which needed the "--recursive" flag
    svn revert --recursive tmp
    svn status

    # now a non-recursive add of the tmp directory
    svn add --non-recursive tmp
    svn commit -m "Add tmp directory"

    # and the subdirectories
    cd tmp
    svn add --non-recursive cache sessions sockets

    # properties must be set on the parent directory
    # the quote marks are to prevent shell globbing
    # this means "ignore everything that matches '*' in the cache directory"
    svn propset svn:ignore "*" cache

    # same for sessions and sockets
    svn propset svn:ignore "*" sessions
    svn propset svn:ignore "*" sockets
    svn commit -m "Ignore files in tmp subdirectories"

    # verify that the files are ignored
    cd cache
    touch test
    svn status
    svn status --no-ignore
    rm test

    # now do the same for children of the "log" directory
    cd ../..
    svn add --non-recursive log
    svn propset svn:ignore "*" log
    svn commit -m "Add log directory, ignoring contents"

    # add the rest of the simple files and folders
    svn add test app Rakefile components migrate README script doc lib public 
    svn commit -m "Initial commit of bulk of Rails application"

    # now into the "config" directory
    svn add --non-recursive config
    svn propset svn:ignore "database.yml" config
    svn add config/routes.rb config/boot.rb config/environment.rb config/environments
    cp config/database.yml config/database.example
    svn add config/database.example 

    # and the "db" directory
    svn add --non-recursive db
    svn add db/migrate
    svn add db/schema.rb 
    svn propset svn:ignore "*.sqlite3" db
    svn commit -m "Add db and config dirs, ignoring database files"
    svn add vendor
    svn commit -m "Add vendor directory"

In the future, this could be done as a single commit; something like this:

    svn add --non-recursive tmp tmp/cache tmp/sessions tmp/sockets
    svn propset svn:ignore "*" tmp/cache tmp/sessions tmp/sockets
    svn add --non-recursive log
    svn propset svn:ignore "*" log
    svn add test app Rakefile components migrate README script doc lib public vendor
    svn add --non-recursive config
    svn propset svn:ignore "database.yml" config
    svn add config/routes.rb config/boot.rb config/environment.rb config/environments
    cp config/database.yml config/database.example
    svn add config/database.example 
    svn add --non-recursive db
    svn add db/migrate db/schema.rb 
    svn propset svn:ignore "*.sqlite3" db
    svn commit -m "Add vendor directory"

Or, using [SVK](/wiki/SVK):

    svk add -N application_directory
    cd application_directory
    svk add -N tmp
    svk add -N tmp/cache tmp/sessions tmp/sockets
    svk propset svn:ignore '*' tmp/cache tmp/sessions tmp/sockets
    svk add -N log
    svk propset svn:ignore '*' log
    svk add test app Rakefile components README script doc lib public vendor
    svk add -N config
    svk propset svn:ignore 'database.yml' config
    svk add config/routes.rb config/boot.rb config/environment.rb config/environments
    cp config/database.yml config/database.example
    svk add config/database.example 
    svk add -N db
    svk propset svn:ignore '*.sqlite3' db

    # new in Rails 1.2
    svk add -N tmp/pids
    svk propset svn:ignore '*' tmp/pids
