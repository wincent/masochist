---
tags: rubygems wiki
---

Notes made while publishing the [Walrus](/wiki/Walrus) [gem](/wiki/gem) to [RubyForge](/wiki/RubyForge) for the first time.

    # once-off setup
    rubyforge setup
    rubyforge config

    # publishing a release
    rubyforge login && \
    rubyforge add_release walrus walrus 0.1 walrus-0.1.gem \
      --release_notes "initial release" \
      --release_changes "initial release"
