---
tags: steak wiki
cache_breaker: 1
---

[Steak](/wiki/Steak) is a minimalist acceptance testing framework for [Rails](/wiki/Rails) built on top of [RSpec](/wiki/RSpec).

Steak was created as an alternative to [Cucumber](/wiki/Cucumber), which is extremely complex and imposes many layers of abstraction, has an enormous, sprawling hierarchy of dependencies, and whose API and implementation details are constantly churning.

In contrast, Steak is an extremely thin, simple and stable layer on top of RSpec; basically just some generators for creating test files, and a set of aliases that allow you to use language that is appropriate for acceptance testing ("scenario", "background" and "feature").

Combined with the wonderful [Capybara](/wiki/Capybara), Steak allows us to replace some very complicated testing machinery with an incredibly simple, robust alternative.

Not only is the implementation more simple and therefore more solid and less brittle, but working with Steak is actually more pleasant as well. Instead of keeping feature files (written in plain text) in sync with supporting "step definition" files (written in [Ruby](/wiki/Ruby)), we just write self-contained acceptance tests in a highly readable Ruby DSL (partly provided by RSpec, partly provided by Capybara).

# Relationship to [Capybara](/wiki/Capybara)

Up until February 2011, Steak and Capybara made a great combination. As of [this commit to Capybara](https://github.com/jnicklas/capybara/commit/f4897f890d8dd33215fef238902988e8823a6539), however, Capybara effectively became a replacement for Steak.

# Official site

-   <http://github.com/cavalle/steak>

# External resources

-   A tutorial: <http://jeffkreeftmeijer.com/2010/steak-because-cucumber-is-for-vegetarians/>
