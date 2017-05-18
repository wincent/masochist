---
tags: rails testing wiki
cache_breaker: 1
---

# The pitfall

One thing I've found when writing specs for Active Record models is that simple timestamp comparisons can often fail in a surprising ways. The reason for this is as follows:

```ruby
post = Post.create      # save a post to the database
other = Post.last       # load the post back from the database

# some surprising results
other == post                                  # => true
other.updated_at == post.updated_at            # => false
other.updated_at.to_s == post.updated_at.to_s  # => true
other.updated_at.to_f == post.updated_at.to_f  # => false

# so why is this happening?
post.updated_at         # => Fri, 04 Feb 2011 02:13:57 UTC +00:00
other.updated_at        # => Fri, 04 Feb 2011 02:13:57 UTC +00:00
post.updated_at.to_f    # => 1296785637.88479
other.updated_at.to_f   # => 1296785637.0
```

As you can see, when we first write to the database our in-memory copy of the record has a non-integral timestamp corresponding to the exact value of `Time.now` at the time the record was written, including microseconds.

When we do a `post.reload` or otherwise read the data back (via `Post.find` or `Post.last` etc), we see that the actual timestamp in the database is rounded off to a whole number of seconds.

As a result, even though the two record instances really refer to the same record in the database and the `updated_at` attribute should therefore be the same, the actual values are non-identical because one of them is rounded off during the round-trip through the database while the other retains its original, exact value.

There are a zillion different ways in which this kind of thing can spring up in a spec suite and I won't bother listing them here, but you'll recognize the problem when you see it because two seemingly equivalent dates, `a` and `b`, when compared using `a.should == b` or similar will cause your specs to fail.

# Workarounds

## Compare strings rather than dates

```ruby
model.updated_at.to_s.should == other.updated_at.to_s
```

## Use the `be_within`/`of` matcher

```ruby
model.updated_at.should be_within(1).of(other.updated_at)
```

This works because the `be_within` matcher does a subtraction of the two `Time` instances, which returns a float.

## Reload

This one is a little unseemly. With this technique, when you create a model, you perform an immediate `model.reload` in order to get the round-trip out the way before you try any comparisons.
