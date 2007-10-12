---
tags: rspec rails fixture.replacement
---

**Note:** This cheatsheet applies to the the original 1.x series of FixtureReplacement. Version 2.0, which I've never bothered updating to ("if it ain't broke..."), uses a completely different syntax (see <http://replacefixtures.rubyforge.org/> for full details).

# The `db/example_data.rb` file

Given a model class, `Foo`:

    module FixtureReplacement
      def foo_attributes
        {
          :thing             => "a value",
          :other             => "other value",
          :another           => String.random,     # random string 10 characters long
          :one_more          => String.random(15)  # 15 characters long
          :associated_object => default_bar        # expects bar_attributes to be defined
        }
      end
    end

# Methods available

-   `String.random`: generates a random string as shown above.
-   `new_foo`: equivalent to `Foo.new(foo_attributes)`.
-   `create_foo`: equivalent to `Foo.create!(foo_attributes)`.
-   `default_foo`: for use inside `_attributes` definitions; this basically returns a `Proc` object which allows the actual creation of the object to be deferred until it is actually needed: in this way unnecessary object creation is avoided until it is known for sure that that particular attribute is not going to be overridden.

# Overriding the default attributes

-   `new_foo(:thing => "overridden")`
-   `create_post(:thing => "overridden")`

# `script/console` use

    $ script/console
    >> include FixtureReplacement

# Use with [RSpec](/wiki/RSpec)

Add the following to your `spec/spec_helper.rb` file:

    include FixtureReplacement
