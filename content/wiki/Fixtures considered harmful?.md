---
tags: rspec rails
cache_breaker: 1
---

"[Fixtures considered harmful?](/wiki/Fixtures_considered_harmful%3f)" is [a thread](http://rubyforge.org/pipermail/rspec-users/2007-May/001608.html) I started on the [rspec-users](/wiki/rspec-users) mailing list to clarify some doubts I had about the use of [fixtures](/wiki/fixtures) in [RSpec](/wiki/RSpec) and [Rails](/wiki/Rails).

# Problems

Basically, I was confused because the [RSpec](/wiki/RSpec) website [says](http://rspec.rubyforge.org/documentation/rails/index.html):

> we really don’t recommend the use of rails fixtures

But the [provided examples](http://rspec.rubyforge.org/documentation/rails/writing/models.html) make heavy use of fixtures.

[Aslak Hellesoy](/wiki/Aslak_Hellesoy) offered [this clarification](http://rubyforge.org/pipermail/rspec-users/2007-May/001610.html):

> The reason why we don't recommend them is along the lines why we're not crazy about DRYing up specs. Let me repeat David's Agile Spec Manifesto (of which I am the second subscriber):
>
> "We prefer clear spec over well factored specs. (Clarity is king)."
>
> When everything is in your face you can picture it easier than when it's in several different locations (fixture files, helper files etc).
>
> All I can say is that in most situations I prefer to work without fixtures, but there are a few situations where they might be useful.

Scott Taylor [offered another reason](http://rubyforge.org/pipermail/rspec-users/2007-May/001614.html) for avoiding fixtures:

> I've started using fixtures \*only\* for field validations. This quickly tells me that I have a good record, that I can unset a field, and that it is invalid.
>
> Fixtures really start to become a pain, though, if the fixture has a foreign key, and so largely I stay away from them.

(Incidentally Scott has written a [FixtureReplacement](http://replacefixtures.rubyforge.org/) plug-in.)

So I tried a couple of different [spec](/wiki/spec)-writing styles, with and without fixtures. One approach is to explicitly create the objects in your `begin` blocks.

But setting up objects for each example can become quite repetitive after a while; this is specially true if you start breaking up your [specs](/wiki/specs) into many different `describe` blocks.

# Workarounds

Luke Redpath offers [this approach](http://www.lukeredpath.co.uk/2006/8/29/developing-a-rails-model-using-bdd-and-rspec-part-1) to [DRYing](/wiki/DRYing) things up. You basically define a helper method (or methods) that makes it more convenient to create new objects with valid attributes. But as Aslak argues, clarity is crucial and this approach may make things harder to understand if there is a large distance between the actual examples and the helper methods.

# My position

After working with this for a while I think that judicious use of fixtures is probably the best compromise. In other words, having a couple of simple objects in your fixtures for the majority of specs is probably ok. If foreign keys are involved (or worse, foreign key constraints) then fixtures become less attractive.

Take a real example, the `user_spec.rb` file I am currently working on. It has a bunch of `describe` blocks that all require set-up:

    before do
      @joe    = User.create(:login_name => 'Joe', :email_address => 'joe@example.com')    # recored saved to database
      @harry  = User.new(:login_name => 'Harry', :email_address => 'harry@example.com')   # new (unsaved) record
    end

I don't like this repetition because if I change the object model and require a new parameter then I have to change the `User.create` and `User.new` messages in multiple places.

As an alternative I can write something like the following:

    module UserSpecHelper
      def valid_user_attributes
        {
          :login_name => 'Joe',
          :email_address => 'joe@example.com'
        }
      end
    end

And use it like this:

    before do
      @joe = User.new(UserSpecHelper::valid_user_attributes)
    end

But that only works for one user. What happens when I want to create a second user? Do I make a second method? That seems decidedly worse than using fixtures. Do I change the `valid_user_attributes` method to dynamically return new attributes each time? That sounds risky (the specs should be kept as simple as possible, or you'll need specs to test your specs) and it's hardly clear (requires understanding of how the `valid_user_attributes` method works).

# Final assessment

So at least for simple cases like this it seems that fixtures aren't the most evil thing. There is still a locality of reference problem because fixtures are defined in a different file and so you have to switch between [spec](/wiki/spec) and fixture files if you want to have both in your head at the same time; but we already have exactly that kind of issue between [spec](/wiki/spec) and implementation files.

One way we could reduce the need to refer to the fixture file is to access the attributes programmatically rather than hard-coding them. For example, imagine a [spec](/wiki/spec) confirming that a certain attribute must be unique:

    it 'should be invalid without a unique login name' do
      # at this point user @joe has already been setup and name 'Joe' is in use
      @harry.login_name = 'Joe'
      @harry.should_not be_valid
      @harry.should have_at_least(1).error_on(:login_name)
    end

You could remove the hard-coded string 'Joe' as follows:

    it 'should be invalid without a unique login name' do
      @harry.login_name = @joe.login_name
      @harry.should_not be_valid
      @harry.should have_at_least(1).error_on(:login_name)
    end

This is reasonably clear but we are now assuming the implementation of the `login_name` accessors is fool-proof. But it is not necessarily so: an unrelated error in the implementation could cause these specs to incorrectly pass or fail.

So in a case like this (testing for uniqueness) I think that defining a new context and explicitly creating some new user objects is the clearest way to go. If there are a lot of specs like this then using Luke Redpath's idea of a `valid_user_attributes`, combined with some additional `Hash` methods may be the best way to go:

    # this in spec/spec_helper.rb
    module HashExtensions
      
      # for excluding keys
      def except(*exclusions)
        self.reject { |key, value| exclusions.include? key.to_sym }
      end

      # for overriding keys
      def with(overrides = {})
        self.merge overrides
      end

    end

    # and this in the UserSpecHelper module
    def self.valid_user_attributes
      hash = {
        :login_name     => 'Bob',
        :email_address  => 'bob@example.com'
      }
      hash.extend(HashExtensions)
    end

This allows us to define new users fairly conveniently as follows:

    @bob = User.new(UserSpecHelper::valid_user_attributes)
    @harry = User.new(UserSpecHelper::valid_user_attributes.with(:login_name => 'Harry')
