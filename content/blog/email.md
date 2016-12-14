---
title: Mutt
tags: email
twitter: https://twitter.com/wincent/status/807509662593495040
---

About a week ago, I [tweeted](https://twitter.com/wincent/status/804353378021056512) that I was:

> Still tempted to give a command-line email client a try. Hard to beat Gmail web client though.

If you take a look at [my dotfiles](https://github.com/wincent/wincent), you'll see that I've moved a bit past the "temptation" phase deep into "experimentation" territory (getting [this far](https://github.com/wincent/wincent/commits/902e287985dba0f5875f3aed4cd1722a292381ca/roles/dotfiles/files) at the time of writing).

So, how's it going? At this point I am about 90% certain that I can make this thing &mdash; [Mutt](http://www.mutt.org/) &mdash; work, so I figured I'd put down some thoughts about the experience.

# Where I'm coming from

The last time I seriously used a command-line email client was in the 1990s on the university Unix machines, and if I recall correctly it was [elm](https://en.wikipedia.org/wiki/Elm_(email_client)). Its [now ancient website](http://www.instinct.org/elm/) assures us that:

> The program is still being slowly developed, and the release (March 24, 1999) of elm 2.5 is promising.

Since then, however, I've gone from GUI email client to GUI email client. I remember using [Eudora](https://en.wikipedia.org/wiki/Eudora_%28email_client%29), [Outlook Express](https://en.wikipedia.org/wiki/Outlook_Express), and [Mail.app](https://en.wikipedia.org/wiki/Mail_%28Apple%29). There was probably a brief stint with [Thunderbird](https://en.wikipedia.org/wiki/Mozilla_Thunderbird) in there at some point. I ran my own mail server for years, and when I needed to access it in a web-browser I used [SquirrelMail](https://en.wikipedia.org/wiki/SquirrelMail).

By 2011, I'd finally gotten over my mistrust of [Google](https://en.wikipedia.org/wiki/Google), given in and moved my self-hosted email over to [Gmail](https://en.wikipedia.org/wiki/Gmail). The web browser eventually became the primary interface to my personal email. I really appreciated the ability to access it from any machine and have it behave identically everywhere. The Vim-esque keyboard shortcuts and expressive, fast search were empowering. Google made a great iOS app for Gmail as well.

A bit later, Google came out with [Inbox](https://en.wikipedia.org/wiki/Inbox_by_Gmail). I tried it out on both web and iOS. This is a dumbed down version of the email concept, but it works great for the dumbed down interface of the modern "smartphone". It ended up becoming my iOS mail app of choice, but I stuck with Gmail for the web.

At work, we don't use Gmail, so I kept using Apple's Mail.app for that, until a colleague recommended [MailMate](https://freron.com/) to me for its amazingly powerful "rules" system. Compared to other email clients, it's a pretty ugly program, but it was fast and it did a great job of ensuring that only the things I actually needed to see and act on wound up in my inbox.

# Why a command-line email client?

I love the command-line. I have a [YouTube channel](https://www.youtube.com/c/GregHurrell) on which I've published about 45 different screencasts on [Vim](https://en.wikipedia.org/wiki/Vim_%28text_editor%29), so far. The whole thing is basically a love song dedicated to the terminal.

A few years ago, people started talking about [Sup](https://github.com/sup-heliotrope/sup), a command-line client apparently engineered to cope with the voluminous quantities of email that services like Gmail encourage you to accumulate (because they give you effectively unlimited storage, encourage you to archive rather than delete, and they provide fast search to make it all tenable).

I briefly downloaded and played with it, but it didn't seem stable enough. Also, it's written in Ruby. I've [previously compared coding in Ruby](https://twitter.com/wincent/status/740173294200971265) to "driving without a seatbelt in a rubber car". It sure is fun, but all that meta-programming, duck-typing, total lack of static verification, and relatively lack-lustre performance, make me leery of relying on it for mission-critical applications.

Nevertheless, maybe it was time for another look, so I started to look around, and found [this great post](http://stevelosh.com/blog/2012/10/the-homely-mutt/) by Steve Losh. Steve's got some fantastic and oft-cited posts on his blog, including the well-known "[Coming Home to Vim](http://stevelosh.com/blog/2010/09/coming-home-to-vim/)" and "[A Modern Space Cadet](http://stevelosh.com/blog/2012/10/a-modern-space-cadet/)", which have been highly influential within the command-line nerd community. As Steve already had some cred, I knew I could take "The Homely Mutt" seriously. Like his other pieces, it was well-written, beautifully presented, and extracted from real experience. Unlike his post, I'm not going to tell you how to set things up (you can see [my set-up here](https://github.com/wincent/wincent)), but I will share some thoughts on what the process and the result have been like.

# The rig

Now, Steve recommends a complicated constellation of multiple programs, of which `mutt` is but one. He's not alone in doing this either ([here](https://wiki.archlinux.org/index.php/mutt) is one high-quality example), and I can only assume that not *everybody* recommending a combination like this is doing so just because they read Steve's blog. Nevertheless, I wanted to start out my experiment by making the smallest possible investment.

That meant doing a `brew install mutt` (thank goodness for [Homebrew](http://brew.sh/), which has formulae for just about every piece of software I needed to put this all together) and setting Mutt up to talk to my Gmail account over IMAP. But first, a brief stop at the Gmail account settings to set up an app-specific password because Mutt &mdash; obviously, perhaps &mdash; doesn't have built-in support for 2-factor authentication.

A couple of days of play with Mutt installed in this way convinced me that it was worth delving deeper, so I continued to add pieces to the rig:

* [mutt](http://www.mutt.org/): For reading email.
* [offlineimap](http://www.offlineimap.org/) and then [mbsync](http://isync.sourceforge.net/): For maintaining a local cache of messages for offline access.
* [notmuch](https://notmuchmail.org/): For fast search.
* [msmtp](http://msmtp.sourceforge.net/): For sending email.
* [w3m](http://w3m.sourceforge.net/) and then [elinks](http://elinks.or.cz/): For viewing HTML emails.
* [urlview](https://packages.debian.org/sid/misc/urlview): For opening URLs from inside mutt.
* [contacts](http://www.gnufoo.org/contacts/contacts.html) and then [lbdb](http://www.spinnaker.de/lbdb/): For integration with the macOS Contacts.
* [reattach-to-user-name-space](https://github.com/ChrisJohnsen/tmux-MacOSX-pasteboard): So that `lbdbq` works correctly inside `tmux`.
* [terminal-notifier](https://github.com/julienXX/terminal-notifier): For notifications.
* [imapfilter](https://github.com/lefcha/imapfilter/): For filtering.
* [passage](https://github.com/wincent/passage): For mediating interaction with the macOS keychain.

Yes, the horror of discovering that the software package that you're downloading is [still hosted on SourceForge](https://twitter.com/wincent/status/804856280007327744). But it's ok. Each of these tools is designed to do one thing and do it well in a hopefully composable way. They are unlikely to break, and they aren't desperately in need of additional development. [Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy) FTW.

# Reflections during the migration

As I started the excruciating process of downloading 250,000 emails from Gmail to a [local maildir](https://en.wikipedia.org/wiki/Maildir) using `offlineimap` for fast, offline access, I had plenty of time to reflect on the folly of my ways.

On how, for example, my 1TB of available Gmail storage had led me to maintain subscriptions to multiple mailing lists that I never read and instead filtered away "just in case" I might need to access them later. I ended up wondering how much of that stuff I really needed after all, and decided to unsubscribe from irrelevant things and delete the archives. That got me down to under 100,000 emails.

The other thing I realized as I tried to map the nested folder structure from Gmail down to my local set-up, was that all that hierarchical taxonomy was at odds with use in a command-line email client. I was better off not having a "Travel" label (folder) with sub-labels (sub-folders) for each of my trips. Switching folders in a command-line client is just unpleasant enough that it provides you with an incentive to simplify your folder structure, make it shallower and less numerous, and instead rely on search to find what you need. This felt like a positive change, even if I were to go back to Gmail at the end of the experiment.

Once my Gmail experiment &mdash; my personal email &mdash; was running smoothly, I had to decide what to do with work email. Here the dilemma was between having work and personal accounts seamlessly integrated, or keeping things as starkly separated as possible. I was worried about work and personal mindspaces getting mixed up or crowded; I had liked having two different apps for my different accounts, because it meant I could do things like close Gmail at work, or close MailMate at home, and avoid distraction in both directions.

I wondered what it would be like to merge the two. If I fully merged them, viewing them within the same `mutt` instance, I could do things I hadn't ever been able to do before, like search both work and home accounts at the same time. Would that be useful, or cumbersome, or just plain weird? I decided to try it out. I won't keep you in suspense any longer: it's worked out just fine. I actually quite like it.

Finally the big question I had to decide was what to do about filtering. I could either run `imapfilter` locally (which would mean that when I was in Inbox on iOS my mail would only be filtered when `imapfilter` was running on my laptop), or create filters in the Gmail web interface. The latter would partly defeat the purpose of switching to the command-line, because some of the charm resides in the fact that you can easily version-control your configuration, and keep it in a standard, portable format that may come in handy in case Apple continues to do [crazy shit](http://www.everymac.com/systems/apple/macbook_pro/specs/macbook-pro-core-i7-2.9-15-late-2016-retina-display-touch-bar-specs.html) and you find yourself having to seek the refuge of a nerdy Linux distro.

I was emboldened by the fact that I effectively already had a filtering system with a couple of trade-offs, and I'd been living with them just fine. With my work email, my filtering only worked when MailMate was running on my laptop, which meant that if I ever had to access work email on my phone at night, I'd have a lot of noisy stuff in my inbox. In practice, this kind of access was infrequent, and search was generally good enough to get me to where I needed. And my personal email had its own set of compromises: because I was using Inbox on iOS and Gmail on the web, I had a shared set of filters, but only one interface to manage them in a meaningful way (that is, the web interface; Inbox doesn't provide a UI for doing anything but the simplest of filter management, and it can't do anything sophisticated involving boolean logic or field-level targeting).

So I went the `imapfilter` route. It's been fun to write the rules (in Lua), and exhilarating to see how I can construct rules that I would never be able to express using the declarative building blocks in a GUI email client. For instance, I can do things like catch emails that get sent when I perform a code-review action, and then [find all related messages that have older time-stamps](https://github.com/wincent/wincent/blob/902e287985dba0f5875f3aed4cd1722a292381ca/roles/dotfiles/files/.imapfilter/work.lua#L144-L175) and archive those immediately, because we can assume that I already saw all the status updates relative to the code being reviewed.

# Stuff that needs fixing

I've been able to fine-tune this thing through configuration, getting it pretty close to the point where it meets my standards. Some of this is just getting configuration right, like [making it so](https://github.com/wincent/wincent/commit/b8e0f37a279bca86810ea6d9bd2c4e835df8e3da) that `urlview` doesn't choke on URLs in quoted-printable encoded messages, or [tweaking the mappings](https://github.com/wincent/wincent/commit/a6563da0aba4f423bfd8b3248ed6249f11a75838) so that archiving moves intuitively up or down to the next or previous message based on the direction that you moved in most recently.

In other cases I had to get creative to make a workflow comfortable, like [setting up Vim to run as a viewer in a tmux split](https://github.com/wincent/wincent/commit/da55e4cb7f49004c5b4fdc8dbc3bb26864072419) in order to view multiple emails at the same time.

A couple of examples of things I've had to patch to get them to behave how I like include [this PR](https://github.com/honza/mutt-notmuch-py/pull/9) to [`mutt-notmuch-py`](https://github.com/honza/mutt-notmuch-py) to make it employ readline history to remember and recall past searches ([now merged](https://github.com/honza/mutt-notmuch-py/commit/ae921a602e3)), or [this iTerm2 issue](https://gitlab.com/gnachman/iterm2/issues/5389) where I suggest a patch to make `mailto` URLs openable with a Command-Click (it already has the ability to *open* `mailto` URLs, although it is [not well-documented](https://groups.google.com/forum/#!msg/iterm2-discuss/TFPl1D_miIU/uDVV2ZZpYWQJ)). Since initially publishing this, [a fix](https://github.com/gnachman/iTerm2/commit/56cccde9ecc85058bfcfcc021fd9064e2f95bf98) has been applied for that too.

Finally, I had to make a caching proxy daemon for the macOS keychain in order to achieve the balance between security and convenience that I desired. (Ok, not really "had to"; more like "felt like".) It's called [Passage](https://github.com/wincent/passage), it is a tiny Go Launch Agent (like [Clipper](https://github.com/wincent/clipper)), and it proved the usefulness of my long commute from Menlo Park up to San Francisco every night (90 minutes of uninterrupted hacking time).

Overall, though, I am pretty happy with how it has all come together. Despite the fact that this is a command-line client, I can comfortably read HTML email, view and save attachments, open links, click on `mailto` links (or Control-Click on email addresses and choose "Send Email to Selected Address") in iTerm, tab-complete contact addresses and so on.

# The verdict

I miss Gmail's ubiquitous undo functionality. Almost every key on the keyboard in `mutt` is bound to something, and many of those "somethings" are destructive operations. I think I still have some unbinding to do to protect myself.

Deleted or archived messages hang around in the folder until you refresh the view (with `$`). I dim them with the color scheme (which, by the way, you have to [set up yourself](https://github.com/wincent/wincent/blob/902e287985dba0f5875f3aed4cd1722a292381ca/roles/dotfiles/files/.mutt/config/colors.mutt)), and most other movement keys are programmed to skip over them. I am not sure whether I like this; part of me is still warming to it.

`notmuch` is unexpectedly cool, and plenty fast. It can handle most searches with a Gmail-like search syntax, including some features that you won't find in Gmail like the ability to search for "foo NEAR bar" and so on.

Speaking of speed, the thing is indeed fast. I can open a folder with more than 50,000 messages in under a second. And when I am looking at that folder I can hold down `Control-D` to scroll down at an eye-blurringly rapid pace of about 1,000 messages per second; something that Gmail will never be able to do, with its clumsy paginated mailbox view.

`offlineimap` proved to be flexible. I read quite a few posts of people moving from it to [`mbsync`/`isync`](http://isync.sourceforge.net/), which is supposedly much faster. Disconcertingly, I didn't find any posts of people migrating in the other direction. It was fast and reliable enough for the most part, but after seeing it [hang silently when the network is intermittent](https://github.com/OfflineIMAP/offlineimap/issues/56), I gave `mbsync` a try. It lacks some features (such as the ability to loop in the background, or run pre-sync and post-sync hooks); but you might even regard those as "anti-features" because they are easily replaced with a glue script. It seems to be pretty solid, and it is about 5 or 10 times faster; fast enough to make Gmail throttle me during the initial sync.

The fact that I've been able to swap out `offlineimap` for `mbsync`, and `w3m` for `elinks`, and `lbdb` for `contacts` is a testament to the flexibility and composability of the system. Because we're talking about standard interfaces, protocols and formats &mdash; IMAP on the server, Maildir locally &mdash; and glueing it all together with pipes, processes and plain-text config files, it's easy to swap out parts of the system. It's also comforting to know that this set-up could be recreated on an entirely different operating system, and that all the constituent pieces are open source, so can be tweaked and bent and fixed at will.

I still do have some gripes though, and these constitute the downside in the bargain. `mutt` is deceptively Vim-like, but it is not Vim. There are plenty of niceties in Vim that I would love to enjoy in `mutt` but I cannot, and I probably never will. Things like the fact that the sidebar is not really a focusable pane. Or that there is no mouse support for doing things like scrolling or resizing splits. There are myriad settings (eg. `'scrolloff'`) and operations (eg. `zz`) that exist in Vim and which will probably never have equivalents in `mutt`.

`mutt` is not programmable like Vim. It has a macro system, but it is of fairly limited flexibility. There are a few small ways to implement a semblance of conditional logic (like `<tag-prefix-cond>`, or crafty tricks like macros that redefine themselves), but there are no real programming constructs, and the "command-line" (accessible with `:` inside `mutt`) is very primitive indeed. You can't, for example, get it to print the current value of a setting (at least, I cannot find a way to do it).

But I think on the balance these are small things. At least, they are not big enough to make me pull out of this little experiment. If you'd like to see where it takes me in the end, follow along [over here](https://github.com/wincent/wincent).

<small><em>Discuss: [Twitter](https://twitter.com/wincent/status/807509662593495040)</em></small>
