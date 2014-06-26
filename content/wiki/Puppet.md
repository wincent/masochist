---
tags: puppet
cache_breaker: 1
---

[Puppet](/wiki/Puppet) is a server configuration and management tool written in [Ruby](/wiki/Ruby).

One of its defining characteristics is that it uses a declarative application model rather than an imperative one. In other words, instead of specifying a "recipe" (a list of steps that must be performed in order to set up a server), you specify a desired end state and Puppet figures out how to get there by examining the current state of the system and resolving the dependencies such that necessary configuration changes are applied in an appropriate order. (Ironically, Puppet calls its configuration files "recipes" despite the fact that they are non-imperative.)

The main advantage of this approach is that applying a set of Puppet recipes is an idempotent operation (it can be safely repeated), while the main disadvantage is that correctly setting up the recipes can be difficult (specifying the dependencies is left up to you).

# Links

-   Official documentation: <http://docs.puppetlabs.com/>
-   Puppet Labs (company) info on CrunchBase: <http://www.crunchbase.com/organization/puppet-labs>

