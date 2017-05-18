---
tags: ruby vim wiki
cache_breaker: 1
---

If your plug-in raises a Ruby error from inside a `ruby` eval during initial execution you won't see the exception, nor can you `rescue` it and print it via `VIM::command "echo #{exception}"`.

The only solution seems to be writing it to a file:

```ruby
begin
  # ...
rescue Exception => e
  File.open("/tmp/exception_info", 'a') { |f| f.puts "#{Time.now}: #{e}" }
end
```
