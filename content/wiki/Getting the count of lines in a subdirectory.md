---
tags: wiki
---

Example: cumulative total:

```shell
$ find . -type f -exec cat {} + | wc -l
```

Example: per file counts and total:

```shell
$ find . -regex '.+\.js$' | xargs wc -l
```

# Source

-   <http://stackoverflow.com/questions/13727917/use-wc-on-all-subdirectories-to-count-the-sum-of-lines>
-   <http://stackoverflow.com/questions/104756/how-do-you-count-your-lines-of-code>

# Alternatives

-   <http://cloc.sourceforge.net/> ([Perl](/wiki/Perl) tool for counting source code)
