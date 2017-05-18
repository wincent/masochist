---
tags: rspec rails testing rr cheatsheet helpers wiki
cache_breaker: 1
---

# Tools

-   [RSpec 2](/wiki/RSpec_2) (spec framework)
-   [RR](/wiki/RR) ([mocking](/wiki/mocking) library)
-   [Factory Girl](/wiki/Factory_Girl) ([object mother](/wiki/object_mother) library)
-   [Rails 3](/wiki/Rails_3) (application framework)

# Mocking and stubbing

Although helper methods are mixed into the example group itself:

```ruby
describe FooHelper do
  describe '#funky_method' do
    it 'returns true' do
      funky_method.should be_true
    end
  end
end
```

If you need to set up mock expectations you will need to use the explicit `helper` instance that is available inside example groups:

```ruby
it 'delegates to #foo_method' do
  mock(helper).foo_method
  helper.funky_method
end
```

# Related

-   [Rails model testing cheatsheet](/wiki/Rails_model_testing_cheatsheet)
-   [Rails view testing cheatsheet](/wiki/Rails_view_testing_cheatsheet)
-   [Rails controller testing cheatsheet](/wiki/Rails_controller_testing_cheatsheet)
-   [Rails mailer testing cheatsheet](/wiki/Rails_mailer_testing_cheatsheet)
-   [RR cheatsheet](/wiki/RR_cheatsheet)
-   [Steak cheatsheet](/wiki/Steak_cheatsheet)
