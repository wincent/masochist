---
title: New site section: repos
tags: site blog
cache_breaker: 1
---

For a while now I've wanted to have a [Git](/wiki/Git) repo browser integrated into the site (see [ticket \#1135](/issues/1135)).

This would be the last big step in a long journey that [started with a desire](http://www.wincent.com/a/about/wincent/weblog/archives/2008/02/the_joy_of_dele.php) to replace a hodge-podge of third-party applications — written in different languages, from different vendors, and with different user account systems — with a single, unified application.

I've already come a long way. I no longer have to worry about installing updates and watching for security notifications for Movable Type, MediaWiki, Bugzilla, UBB.threads and so on. The plan is to also add [Gitweb](/wiki/Gitweb), which I currently have running at <http://git.wincent.com/>, to that list of things that I'll no longer have to update.

Over summer I got most of the functionality for the repo browser in place, but didn't go public with it because there were still some missing pieces:

-   [ticket \#1696](/issues/1696), "Adding pagination to commit listings" (right now you can only see the first page of any branch, and after that you have to hop from commit to commit)
-   [ticket \#1698](/issues/1698), "Add blob-viewing to repo browser"
-   [ticket \#1697](/issues/1697), "Add tree-browsing to repo browser"
-   [ticket \#1695](/issues/1695), "Caching notes for repo browser": it remains to be seen how much caching will be needed to make this performant; [Gitweb](/wiki/Gitweb) doesn't use any caching at all (yet), but that's written in [Perl](/wiki/Perl) and this site is [Ruby](/wiki/Ruby)/[Ruby on Rails](/wiki/Ruby_on_Rails) (which as we all know is not "web scale", especially if you're old school like me and use [MySQL](/wiki/MySQL) rather than MongoDB)

I've been snowed under with other things lately so haven't been able to move those "to do" items forward at all in recent months, so I've decided to roll out what I have anyway and will add the remaining bits and pieces as time permits.

So yes, you can't view blobs, you can't view trees. But you can at least inspect commits and get an idea of what's been happening in a project lately. And obviously, I'll be leaving my Gitweb install online until I've got all the missing pieces of functionality in place.

As this is a fairly big change I'll be rolling it out cautiously and keeping an eye on things. For now I've just added one-repo to [the repo list](/repos), the [Command-T](/wiki/Command-T) repo which you can browse [here](/repos/command-t). Things to note:

-   Mousing over items often reveals more information about them:
    -   mouse over abbreviated commit hashes to see the full hash
    -   timestamps are relative (ie. "2 days ago") but mousing over them shows the full date and time information
    -   mouse over author and committer names to see their full identity as it appears in the commit object; email addresses are not obfuscated because the repositories are accessible to the public anyway and therefore can be harvested (secrecy and obfuscation are not the answers to the spam problem; good filtering is)
-   The first line of a commit message is shown by default, but you can click on it to toggle the display of the full message on and off
-   Clicking on line numbers when viewing diffs gives you a link that will try scrolling to that line (obviously depends on the page length as to whether it can actually scroll that far)

So feel free to have a play round with it and let me know (either via email to <win@wincent.com> or a ticket on the [issue tracker](/wiki/issue_tracker)) if you see any breakage or weirdness. I'll be monitoring how things go and will add additional repositories as time goes by.
