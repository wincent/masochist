---
title: The support holy grail
tags: blog
---

I'm getting closer to my support system "holy grail": the ability to have a web-based issue tracker (like [Bugzilla](http://www.wincent.com/knowledge-base/Bugzilla)) which you can control easily via email. Keeping everything on the web makes the development process much more visible and accessible to customers, but working from within the comfort of an email client is often a much more pleasant way of interacting with the system, especially seeing as 90% of developer and customer interaction with an issue tracking system consists of updating tickets with additional bits of information or short replies.

Now, Bugzilla itself actually already provides a degree of email-control, and other systems like Lighthouse [do too](http://www.lighthouseapp.com/help/how-do-i-send-emails-to-lighthouse). But I'm looking for something easier to use than Bugzilla and want an in-house, integrated solution rather than an off-site paid service like Lighthouse.


### The old

I currently have [a Bugzilla install](http://bugs.wincent.com/) set up for taking feature requests and bug reports, a [custom support ticket interface](https://secure.wincent.com/a/support/tickets/) for support issues, and [a contact form](http://www.wincent.com/a/contact/mail/) for other enquiries (along with my email address, <win@wincent.com>, which is plastered all over the site). Three of my applications also have a custom crash reporter that can email in crash reports if things blow up.


### The new

All of this is going to be replaced with a single unified issue tracker. There will be five categories of tickets:

-   *Feature requests*: "I wish your app would do *this*..."
-   *Bug reports*: "This doesn't work like I expect..."
-   *Crash reports*: "Things went boom..."
-   *Feedback*: "I have a suggestion or comment..."
-   *Support tickets*: "How do I do *X*?"

In reality all of these tickets are the same; there's only one issue tracker and there's only one (extremely simple) interface to learn. The categories are really just there to help me organize issues into groups.

So right there you've got your easy-to-use Bugzilla replacement. What do tickets look like? They're really just a summary (one-line) followed by a description with a space for comments underneath. There is a small amount of metadata that's provided as well (things like ticket number, creation and modification date, status field and what not) but not enough to be overwhelming.

The bit which really has me drooling is the email integration. You can of course open a new ticket via the web interface, but if you want to do it via email basically all you have to do is send an email to <features@wincent.com>, <bugs@wincent.com>, <feedback@wincent.com> or <support@wincent.com> (you don't need to manually create crash report tickets because those are opened by the built-in crash reporter).

When a change is made to your ticket you'll get an email. To add a comment just reply to the email, keeping the subject line intact (the subject line has the ticket number in it).

Obviously in order for this to be workable it needs to have good support for coping with spam. I'm working on that, and am fairly confident that it should be kept under control. Or to put it another way, I am expecting a *lot* of spam but I am also expecting to be able to sweep it under the carpet with relative ease. So that means a great admin interface for managing spam, probably some kind of Akismet-like filtering, built-in blacklisting, basic authentication based on the `From:` header (easily forged, I know, but this is just one layer in a "[defense in depth](http://www.wincent.com/knowledge-base/defense%20in%20depth)" strategy), and probably the use of a secret token (messages will still get through without the token, but they'll be moderated).


### Update

Actually, it's better than all that. I've started working on an email interface that'll be even easier for customers to use: instead of having multiple email addresses to interact with, all incoming mail will go to one address (<support@wincent.com>) and from there a Bayesian classifier will be used to filter out the spam *and* take a stab at guessing what kind of inquiry it is. This should be much nicer for customers as they won't even have to think about what email address to send their message to.
