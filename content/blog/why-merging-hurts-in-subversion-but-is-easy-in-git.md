---
title: Why merging hurts in Subversion but is easy in Git
tags: subversion git blog
cache_breaker: 1
---

Andreas Ericsson summed it up nicely in [a post](http://news.gmane.org/find-root.php?message_id=%3c4A434D6F.2090105%40op5.se%3e) to the [Git mailing list](/wiki/Git_mailing_list) earlier today:

> 1.  In [SVN](/wiki/SVN) (and [CVS](/wiki/CVS)), you're merging *unknown changes* into *unsaved state*. You haven't committed your changes to the repository before you merge, and you haven't (usually) looked at the upstream changes before you try to merge. [Git](/wiki/Git) doesn't have this problem (and neither does any other [distributed version control system](/wiki/distributed_version_control_system)), since you first fetch changes from someone else and then merge them into an already saved state. When a merge conflict resolution goes wahoonie-shaped, you can easily restore either of the previously saved states with zero hassle.
> 2.  Git has `rerere`, which records and reuses previously resolved merge conflicts, so you won't get the same merge-conflict more than once, if you enable `rerere`.
> 3.  SVN (and CVS) won't remember which changes are already merged in, so they will fail horribly at repeated same-branch merges. Git (and other DAG-based [SCMs](/wiki/SCMs)) can and do calculate the merge-base for you so you'll never have to think about that yourself.
