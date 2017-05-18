---
tags: rails wiki
---

# Things I like about Ruby on Rails

## Transparent mapping between database tables and models

In general, you don't need to drop down from the level of [Ruby](/wiki/Ruby) code (to the level of [SQL](/wiki/SQL) queries). You query your objects using directly using [Ruby](/wiki/Ruby) statements and [Rails](/wiki/Rails) worries about managing all the database queries for you. The level of [database abstraction](/wiki/database_abstraction) is extreme.

## Migrations

[Migrations](/wiki/Migrations) are database agnostic, allowing you to specify your database scheme in [Ruby](/wiki/Ruby) code rather than using database-specific [SQL](/wiki/SQL). This makes it very easy to, for example, develop locally using [SQLite](/wiki/SQLite) and deploy remotely using [MySQL](/wiki/MySQL).

## Incremental/iterative development model

Again thanks to [migrations](/wiki/migrations), you can make incremental changes to the database schema as you go without fear of breaking things. You don't have to sit down and design your entire database schema from scratch before you start writing code, and you don't have to worry about making painful changes to the schema down the road (because changes aren't painful).

## Testing toolchain

Every application comes with all the testing infrastructure built-in allowing you to do [test-driven development](/wiki/test-driven_development)/[behaviour-driven development](/wiki/behaviour-driven_development) or at least [test-enhanced development](/wiki/test-enhanced_development).

## It uses Ruby

[Rails](/wiki/Rails) is written in [Ruby](/wiki/Ruby), which delivers:

-   The [Object-Oriented](/wiki/Object-Oriented) purity of [Smalltalk](/wiki/Smalltalk)
-   Highly dynamic, like [Objective-C](/wiki/Objective-C) or [Smalltalk](/wiki/Smalltalk)
-   Allows you to write readable, [natural language](/wiki/natural_language)-like source code
-   Easy to write quick and powerful functionality in few lines of code (like [Perl](/wiki/Perl))
-   A clean, predictable, concise and flexible syntax
-   Not as whitespace-sensitive as [Python](/wiki/Python)
-   Stable, mature, reliable codebase
-   Quick and easy to learn
-   Excellent core documentation: <http://www.rubycentral.com/ref/>

# Things I don't like about Ruby on Rails

## Inconsistent behaviour of `generate controller` and `generate scaffold`

    script/generate scaffold User

Will produce a controller file named `users_controller.rb` but:

    script/generate controller User

Will produce a controller file named `user_controller.rb`.

It's still not clear to me how these things should be named. It seems that models should be singular, database tables plural, but controllers? Plural? If so, why does the `scaffold` command use the plural form and the `controller` command the singular?

Even in published books I note that many of the examples I have use singular controller names and others have plural, but given that the `scaffold` command creates views with plural names, there is a discrepancy between viewing stuff created with the `scaffold` command (nicely CSS formatted) and stuff done using a manually generated controller (singular) with a "scaffold :" declaration in the controller.

### Answer

From IRC:

     <tpope> wincent: plural is conventional but not required like singular models are
    <motion> wincent; name the controller BillyBob if you want
     <tpope> wincent: and yeah, it doesn't have to match up with a model
     <tpope> wincent: actually script/generate scaffold generates a singular model name. it then pluralizes 
             that model name if no controller name is specified

So the rules of thumb are:

1.  Call your controllers whatever you want
2.  When using `generate scaffold`, Rails will create a singular model (compulsory) and a plural controller
3.   When using `generate controller`, Rails will use whatever name you pass in
4.  Therefore for consistency it is a good idea to pass a plural controller name in to `generate controller`

## Documentation shortcomings

In general I find the documentation (<http://api.rubyonrails.org/>) too hard to navigate, cluttered and overly concise. Some attempts at filling the gaps are available elsewhere:

-   "[Four Days on Rails](http://www.rails4days.pwp.blueyonder.co.uk/Rails4Days.pdf)": <http://rails.homelinux.org/>
-   "[InVisible Ruby On Rails Reference 1.1.2](http://blog.invisible.ch/files/rails-reference-1.1.pdf)": <http://blog.invisible.ch/2006/05/01/ruby-on-rails-reference/>
-   "Ruby On Rails–A Cheatsheet": <http://www.blainekendall.com/uploads/RubyOnRails-Cheatsheet-BlaineKendall.pdf>

### How are booleans handled?

As an example, when you declare a table column as having type `:boolean`, how is that actually stored in the database? Is "true" the number 1? The letter "t"? (Or string?) Or is it "true"? Or "TRUE"? Is it database dependent?

All of these questions are left unanswered by the documentation. In my local [SQLite](/wiki/SQLite)-based setup it appears that true boolean values are stored as the letter "t" when I create a table column as follows:

    t.column :is_superuser, :boolean, :default => false

The [documentation for `find`](http://api.rubyonrails.org/classes/ActiveRecord/Base.html#M000860) has an example which looks a bit like a boolean:

    :conditions => "administrator = 1"

That won't work for me; I instead have to use:

    :conditions => ["administrator = 't'"]

Is there any way of expressing this condition without using database-dependent code? The [documentation for `create_table`](http://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/SchemaStatements.html#M000604) says nothing; the [documentation for `column`](http://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/TableDefinition.html#M000659) says only:

> The type parameter must be one of the following values: `:primary_key`, `:string`, `:text`, `:integer`, `:float`, `:datetime`, `:timestamp`, `:time`, `:date`, `:binary`, `:boolean`.

It provides no further information about these types. If [Rails](/wiki/Rails) allows me to create records with `:boolean` types in a database-indepedent way (eg. `User.create :is_superuser => true`) what then is the database-independent way of querying based on that boolean?

#### Update: More information on booleans

Partial answer: <http://wiki.rubyonrails.com/rails/pages/HowtoUseBooleanColumns>

Definitive answer: <http://www.bigbold.com/snippets/posts/show/2086>

    :conditions => ['is_superuser = ?', true])

Alternative, prettier answer: "[Dynamic attribute-based finders](http://api.rubyonrails.org/classes/ActiveRecord/Base.html)":

    User.find_all_by_is_superuser(true)
