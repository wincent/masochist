---
tags: capybara
---

# Matchers

<http://rubydoc.info/github/jnicklas/capybara/master/Capybara/RSpecMatchers>

## View specs

```ruby
render
# 'Home' here may be a substring of the link text
rendered.should have_link('Home', href: home_path)
```
