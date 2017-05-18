---
tags: rspec wiki
---

# Expecting an exception

```ruby
expect do
  ...
end.to raise_error
```

Arguably, this reads more nicely than the alternative:

```ruby
lambda {
  ...
}.should raise_error
```

# See also

-   [Rails model testing cheatsheet](/wiki/Rails_model_testing_cheatsheet)
-   [Rails view testing cheatsheet](/wiki/Rails_view_testing_cheatsheet)
-   [Rails controller testing cheatsheet](/wiki/Rails_controller_testing_cheatsheet)
-   [Rails helper testing cheatsheet](/wiki/Rails_helper_testing_cheatsheet)
-   [Rails mailer testing cheatsheet](/wiki/Rails_mailer_testing_cheatsheet)
