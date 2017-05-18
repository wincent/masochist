---
tags: rspec rails wiki
---

[Fixtures](/wiki/Fixtures), in [Rails](/wiki/Rails) parlance, are files containing sample data to be inserted into the test database for testing purposes.

# Set up and tear down

It is important not to be mislead by [the example](http://rspec.rubyforge.org/documentation/rails/writing/models.html) on the [RSpec](/wiki/RSpec) website:

    fixtures :people, :animals

    before(:each) do
      # fixtures are setup before this
    end

    after(:each) do
      # fixtures are torn down after this
    end

It is true that they are "set up" by the time you hit the `before` block. That is, the data is in the database (most likely, inserted when the `fixtures` method is first encountered) and the local variable for accessing them is set-up (`people`).

But what you may think from the example is that after the `after` block they get removed from the database. This is not the case. I don't know what "torn down" actually means in this context; I suspect it means that the contents of the local `people` variable get cleaned out or reset.

If you run your specs and then check the database you'll see that the fixture data is still present, and the "tear down" does *not* include wiping clean the database.

But note that the [specs](/wiki/specs) *are* run inside a database transaction; on leaving the `describe` block the contents of the database will revert back to how things were when the fixtures were first declared.

# See also

-   [Fixtures considered harmful?](/wiki/Fixtures_considered_harmful%3f)
