---
tags: rspec css webrat xpath wiki
cache_breaker: 1
---

# [RSpec](/wiki/RSpec)

In [RSpec](/wiki/RSpec) 1, there was a `have_tag` matcher which was a wrapper for the [Rails](/wiki/Rails) `assert_select` method.

In [RSpec](/wiki/RSpec) 2, the `have_tag` matcher has been removed in favor of [Webrat](/wiki/Webrat) matchers.

The matcher documentation can be found at: <http://gitrdoc.com/brynary/webrat>

The matchers, as they are accessed from with RSpec, are:

-   `contain`
-   `have_selector`
-   `have_xpath`

## `have_selector` examples

Consider a view template:

```ruby
describe 'posts/show.html.haml' do
  it 'has a link to the index' do
    render
    rendered.should ...
  end
end
```

There are various ways of specifying that the rendered template has the element(s) we are looking for:

```ruby
# look for a ".links" div
rendered.should have_selector('.links') do |div|
  # note how we can look within matched elements:
  div.should have_selector('a')

  # and also how we can specify attributes using a hash:
  div.should have_selector('a', :href => posts_path)
end

# and note how we can use a single CSS selector to achieve the same effect:
rendered.should have_selector('.links a', :href => posts_path)
```

Note that we can also check for the content of a selector:

```ruby
# given this markup:
#   <em>hello</em>
# we could do a naïve regexp match:
rendered.should match(%r{<em>hello</em>})

# with the Webrat matcher:
rendered.should have_selector('em', :content => 'hello')

# this is a lot more concise than doing:
rendered.should have_selector('em') do |em|
  em.should contain('hello')
end
```

For more examples of usage, see Webrat's own specs for the `have_selector` matcher:

-   <http://github.com/brynary/webrat/blob/master/spec/public/matchers/have_selector_spec.rb>

## `contain` examples

`contain` is useful for making assertions about the textual content that the user sees on in his/her browser (ie. the visible text, not the underlying [HTML](/wiki/HTML) markup).

So, for example, you could make an assertion like:

```ruby
rendered.should contain('this is a really bad error')
```

Without having to worry about whether the HTML source actually contains:

```html
this is a <em>really</em> bad error
```

Or:

```html
this is a <strong>really</strong> bad error
```

Note that you can use the `contain` matcher on previously matched elements:

```ruby
rendered.should have_selector('.errors') do |div|
  div.should contain('this is a really bad error')
end
```

You can also use regular expressions:

```ruby
rendered.should contain(/this is a .+ error/)
```

For more examples of usage, see Webrat's own specs for the `contain` matcher:

-   <http://github.com/brynary/webrat/blob/master/spec/public/matchers/contain_spec.rb>

## `have_xpath` selector

This matcher can be used when CSS selectors are not powerful or expressive enough to target a specific element:

```ruby
# all p elements with an a child
rendered.should have_xpath('//p[a]')
```

For more examples of usage, see Webrat's own specs for the `have_xpath` matcher:

-   <http://github.com/brynary/webrat/blob/master/spec/public/matchers/have_xpath_spec.rb>

# `Test::Unit`

```ruby
# check for text in the body of html tags
 # can be a string or regexp
assert_contain("BURNINATOR")
assert_contain(/trogdor/i)
assert_not_contain("peasants")

# check for a css3 selector
assert_have_selector 'div.pagination'
assert_have_no_selector 'form input#name'
```

Source: <http://cheat.errtheblog.com/s/webrat/> (Webrat cheatsheet)

# See also

-   [This article](http://ejohn.org/blog/xpath-css-selectors/) ("XPath and CSS Selectors") by John Resig provides a very short overview of the differences between [CSS](/wiki/CSS) and [XPath](/wiki/XPath) selectors
-   [CSS cheatsheet](/wiki/CSS_cheatsheet)
