---
tags: hpricot wiki
cache_breaker: 1
---

# Parsing XML

Given:

```ruby
doc = Hpricot.XML(input)
```

## Finding elements

```ruby
# find all "entry" elements
doc / 'entry'

# return a specific "entry" element from the array of found elements
(doc / 'entry')[3]
```

## Finding a single element

```ruby
# find the first "entry" element
doc.at('entry')

# finding the first element within another element, within another element
doc.at('entry').at('author').at('name')

# same, but using a single XPath query
doc.at('entry/author/name')
```

## Getting the contents of an element

```ruby
element.innerHTML
```
