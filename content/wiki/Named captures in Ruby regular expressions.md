---
tags: ruby
---

```ruby
"foo 1234" =~ /(?<word>\w+) (?<numbers>\d+)/
$1 #=> foo
$2 #=> 1234
$~[1] #=> foo
$~[2] #=> 1234
Regexp.last_match[1] #=> foo
Regexp.last_match[2] #=> 1234

# named captures (Ruby 1.9 and up):
Regexp.last_match[:word] #=> foo
Regexp.last_match[:numbers] #=> 1234
$~[:word] #=> foo
$~[:numbers] #=> 1234

m = "foo 1234".match %r{
  (?<word>\w+)    # here we match a word, yep...
  \s              # some whitespace
  (?<numbers>\d+) # some numbers
}x
m[:word] #=> foo
m[:numbers] #=> 1234
```
