---
tags: tiger svk updates
cache_breaker: 1
---

The basic recipe for upgrading using [CPAN](/wiki/CPAN) is:

    sudo -H perl -MCPAN -e 'install SVK'

Or if you have a sufficiently up-to-date copy of the [CPAN](/wiki/CPAN) module (which installs the `cpan` command-line tool):

    sudo -H cpan SVK

The first time I tried to update I got an "already up-to-date" message. It seems I need to look for better mirrors. I did a `sudo -H cpan` and entered `o conf init` so as to pick some different mirrors, and then finally `install SVK` worked.

# See also

-   Release announcement posted to [svk-devel](/wiki/svk-devel) mailing list: <http://lists.bestpractical.com/pipermail/svk-devel/2007-March/000774.html>

