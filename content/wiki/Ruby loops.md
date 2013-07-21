---
tags: ruby
---

```ruby
# loop
loop do
  # ...
end

# while
while condition do
  # ...
end

# NOTE: the `do` is optional
while condition
  # ...
end

# until
until condition
  # ...
end

# NOTE: `until` can also take an optional `do`
until condition do
  # ...
end

# post-while
begin
  # ...
end while condition

# one-liner variant:
foo_bar while quota_available?

# post-until
begin
  # ...
end until condition

# one-liner variant:
request_foo until quota_available?

# NOTE: the condition in the "post" variants needs to be a complex conditional
x = 1
begin
  p x
  x += 1
end while x < 5 # this works as expected

begin
  p 1
end while false # this is an infinite loop

# for
for x in %w[foo bar baz]
  # ...
end

# NOTE: `x` here exists outside the scope of the `for` block
p x # => "baz"

# enumerables
collection.each do |thing|
  # ...
end

# NOTE: `thing` here was scoped to the block
p thing # => NameError: undefined local variable or method `thing'
```

Keywords available for use inside Ruby looping constructs:

-   `break`: break out of (ie. stop) the iteration
-   `next`: proceed to next round of the iteration
-   `redo`: restart iteration from the beginning
-   `retry`: retry current iteration

