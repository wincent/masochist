---
tags: git
cache_breaker: 1
---

# The new way

As noted in [this comment below](/comments/7325), the way originally documented in this article no longer applies.

You now need a clone of the separate "git-manpages" repo at the same level as your "git.git" clone. For an example showing how the install works in this case, see "[Installing Git 1.7.10 on CentOS 5.7](/wiki/Installing_Git_1.7.10_on_CentOS_5.7)".

# The old way

I learnt some time ago via [this mailing list post](http://article.gmane.org/gmane.comp.version-control.git/116538) that there is a [make](/wiki/make) target that will install the pre-built man pages that are stored in "man" and "html" branches of the official [Git](/wiki/Git) repository.

```ruby
$ cd path/to/your/clone/of/the/official/git.git/repo
$ make quick-install-man
$ make quick-install-html
```

This is *considerably* easier than building the documentation yourself.

**Note:** This only works from inside a clone of the "git.git" repository, because it works by grabbing the docs from the other branches in the repository. It won't work if run from inside a downloaded tarball of the source tree.

# See also

-   [Setting up the Git documentation build chain on Mac OS X Leopard](/wiki/Setting_up_the_Git_documentation_build_chain_on_Mac_OS_X_Leopard) (for those who really want to do things the hard way)
-   [Git documentation](/wiki/Git_documentation)

