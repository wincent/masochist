---
tags: capybara wiki
cache_breaker: 1
---

[Capybara](/wiki/Capybara) provides a [Ruby](/wiki/Ruby) [DSL](/wiki/DSL) for interacting with web applications for the purposes of testing. It offers multiple "drivers" for interacting with the application via various mechanisms (for example, via Rack, or Culerity, or Selenium) but the discrepancies among these backend mechanisms are abstracted away behind the DSL.

What this means is that you can, for example, run tests involving JavaScript using a JavaScript-capable backend such as [Akephalos](/wiki/Akephalos), and run other tests which don't require JavaScript interaction using the leaner, faster Rack (rack-test) backend.

Capybara looks set to either replace or merge with Webrat as the dominant means of driving Ruby web applications in automated testing.

# Official site

-   <http://github.com/jnicklas/capybara>
