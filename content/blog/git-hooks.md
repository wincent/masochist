---
title: Git hooks
tags: blog
---

Earlier this month I [wrote](http://www.wincent.com/a/about/wincent/weblog/archives/2007/07/musings_on_subv.php):

> It seems inevitable that I'll move, sooner or later, to [Git](http://www.wincent.com/knowledge-base/Git). There are still a couple of gaps that would need to be filled in, but 90% of what I need is there.

Yesterday I talked about [getting up a web interface](http://www.wincent.com/a/about/wincent/weblog/archives/2007/07/git_notes.php) for my public repositories; I've migrated three so far. The `gitweb` interface largely supercedes the existing "[Subversion log](http://www.wincent.com/a/about/wincent/weblog/svn-log/archives/)" interface, at least for my [open source](http://www.wincent.com/knowledge-base/open%20source) projects.

Today I was able to implement the key infrastructure change necessary to start moving my private repositories to Git too. Due to their nature, I can't provide access to these repositories via `gitweb`, so I need to hook them into the existing "Subversion log" mechanisms so that people can be informed of changes that are going on in the codebase.

The first automatic Git-driven update to the log can be seen [here](http://www.wincent.com/a/about/wincent/weblog/svn-log/archives/2007/07/initial_import_snippets_4cfa16.php).





This is done with a Git `post-receive` hook script that updates the log (actually just a [Movable Type](http://www.wincent.com/knowledge-base/Movable%20Type) [weblog](http://www.wincent.com/knowledge-base/weblog)) via [XML-RPC](http://www.wincent.com/knowledge-base/XML-RPC). Doing this is a little bit trickier than it is with [Subversion](http://www.wincent.com/knowledge-base/Subversion).

Subversion hooks are simple: for each commit your hook script runs exactly once; and because Subversion is a client-server system all of commits occur in real time, meaning you don't have to worry about the timestamps on your commits (they always just occurred when the hook script runs).

Git, on the other hand, will run your hook script once for each update to a branch (and for other things too, like branch creation and deletion, tagging and so forth). But if you `push` out a bunch of commits in one go, Git will fire the hook script only once; you then have to build up a revision list using the "plumbing" to take into account things like already-reported commits, and the possibility that your starting and end points might not even be on the same branch. And you don't get easy-to-read, human-parseable revision numbers like you do in Subversion: you get hardcore cryptographic hashes.

In the end, the bit of logic that seems to do the job is this one (written in [Ruby](http://www.wincent.com/knowledge-base/Ruby)):

              @list = %x{
                git rev-parse --not --all |
                grep -v $(git rev-parse #{ref_name}) |
                git rev-list --reverse --stdin $(git merge-base #{old_rev} #{new_rev})..#{new_rev}
              }

So this seems to work, but it's not as straight forward as the Subversion way. On the other hand, there's a hell of a lot of scope for doing heavily customized stuff; look at the `post-receive-email` example hook script in the Git `contrib` directory. I guess it's like many things in Git: tricky but powerful.

I like the look of the new entries because Git encourages (but doesn't impose) the use of more detailed commit messages with a "subject" line followed by a blank separator line and then a "body", and it also provides tools for conveniently extracting those parts of the message (see `man git-show`). The only thing I'd like to change is the line wrapping behaviour; I've been hard-wrapping the messages so that they look good in the [Terminal](http://www.wincent.com/knowledge-base/Terminal), but I'd like for the hard-wrapping to be ignored on the [web](http://www.wincent.com/knowledge-base/web)... (*Update*: fixed [here](http://www.wincent.com/a/about/wincent/weblog/svn-log/archives/2007/07/softwrapping_of_commit_message.php).)

Next step will be to continue migrating public and private repositories over to Git. Eventually I'll rename the Subversion log to "Git log" too. (*Update*: that's [now done](http://www.wincent.com/a/about/wincent/weblog/svn-log/archives/) too, although the old `svn-log` [URLs](http://www.wincent.com/knowledge-base/URLs) will continue to work.)

### See also

[Other](http://www.wincent.com/a/about/wincent/weblog/archives/2007/07/git_notes.php) [posts](http://www.wincent.com/a/about/wincent/weblog/archives/2007/07/a_look_back_bra.php) [on](http://www.wincent.com/a/about/wincent/weblog/archives/2007/07/git_changes.php) [Git](http://www.wincent.com/a/about/wincent/weblog/archives/2007/07/musings_on_subv.php).
