---
tags: rails mysql wiki
---

Doing [Behaviour-Driven Development with Rails](/wiki/Behaviour-Driven_Development_with_Rails) I recently discovered that [MySQL](/wiki/MySQL) does case-insensitive comparisons by default, and more importantly, that *even if you tell Rails to force case-sensitive comparisons you won't get them*.

This means that if you have validations like the following in your `ActiveRecord` subclasses:

    validates_uniqueness_of :login_name, :case_sensitive => false

Then you'll get case-insensitive comparisons. But if you change this to:

    validates_uniqueness_of :login_name, :case_sensitive => true

Then you *will still get case-insensitive comparisons*. Note that `case_sensitive` defaults to `true`.

I discovered this because the [BDD](/wiki/BDD) development model gets you to work in a cycle:

1.  Write a [spec](/wiki/spec) describing the behaviour you want: it should fail because you haven't written the code to make it pass yet
2.  Write the code to make the [spec](/wiki/spec) pass
3.  Repeat

The order of the steps is important: you want the [spec](/wiki/spec) to fail first before you make it pass because that confirms that your [spec](/wiki/spec) tests the thing you actually think it tests.

So this was an unexpected benefit of the [BDD](/wiki/BDD) approach: it made me learn something about the way [Rails](/wiki/Rails) and [MySQL](/wiki/MySQL) interact that I might not have found out about otherwise, and which could potentially one day help me to identify particularly tricky case-sensitivity bugs which might crop up.
