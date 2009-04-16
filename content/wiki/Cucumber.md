---
tags: testing cucumber
---

[Cucumber](/wiki/Cucumber) is an acceptance testing framework written in [Ruby](/wiki/Ruby).

# Features

-   Pretty output
-   Nice integration with [Capybara](/wiki/Capybara)

# Criticisms

-   Extremely complex implementation with an enormous dependency hierarchy
-   Constantly changing API and implementation details mean that, historically, updates usually require additional maintenance to fix breakage
-   High overhead required to maintain parallel plaintext "feature" files and supporting [Ruby](/wiki/Ruby) "step definition" files
-   Feature file syntax (called "Gherkin") is marketed as "business readable", but this is of little value because it is neither "business writable", nor any more readable than a well-written Ruby DSL would be

# Alternatives

-   [Steak](/wiki/Steak) is an extremely minimal acceptance testing framework for [Rails](/wiki/Rails) applications built on top of [RSpec](/wiki/RSpec)

# See also

-   Official site: <http://cukes.info/>

