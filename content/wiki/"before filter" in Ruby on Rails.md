---
tags: ruby rails wiki
---

If you define a `before_filter` it must not return `false` or nothing will be done or rendered to the browser. There is extensive documentation on filters here, but it doesn't seem to mention this:

<http://api.rubyonrails.org/classes/ActionController/Filters/ClassMethods.html>

Returning `nil` is fine.
