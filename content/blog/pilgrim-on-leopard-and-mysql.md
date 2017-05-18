---
title: Pilgrim on Leopard and MySQL
tags: blog
---

> Jesus H. Christ, it must suck giant wet donkey balls to be stuck on an archaic OS where you need to be dropping into the terminal and tweaking configuration files and compiling shit all the time.

Can you guess the "archaic" OS that Pilgrim is [talking about](http://diveintomark.org/archives/2007/11/11/installing-mysql-on-ubuntu)? None other than [Leopard](http://www.wincent.com/knowledge-base/Leopard).

> I hope the translucent menu bar is worth it.

Yeah, pretty much.

The article itself is mostly troll but there is one seed of truth underneath it all: [MySQL](http://www.wincent.com/knowledge-base/MySQL) *is* unnecessarily hard to install on Leopard. Of course, it's still not that hard. This should be enough:

    # from inside the source tree
    ./configure --prefix=/usr/local/mysql &&
    make test &&
    sudo make install

In other words basically the exact same steps that work for any open source project out there. MySQL will hopefully update their binary installers soon so that even that much [commandline](http://www.wincent.com/knowledge-base/commandline) interaction can be dispensed with.

But in short, Pilgrim is exaggerating and most of his complaints are total non-issues; why?





Firstly, there are multiple package managers for Mac OS X. I choose not to use any of them because I actually like the control afforded to me by micromanaging it myself. For the amount of such software that I install it's really not a significant effort.

The security issues might be a concern if you run a server on the public Internet, but I'm a Mac OS X desktop user and my machine is behind a firewall. If I was running a Mac OS X Server out in the wild I'd already have MySQL installed, updated and security patched automatically for me by Apple.

The launch-at-startup behaviour is a non-issue too. We're talking about desktop machines here, not always-on servers. Automatically launching MySQL at startup is easily enough done, and it will be easier with the binary installer, but why would you want to do it?

I'll bet that most people installing MySQL on their Mac OS X desktop machines are [Rails](http://www.wincent.com/knowledge-base/Rails) developers (or similar) who want to do local testing. For such people starting up is a simple matter of `sudo -b mysqld_safe` at the start of their development session. Launching at startup is a waste of time; do you really think that those people are connected to their MySQL database from the very first minute that they power up their machine? Do these same people auto-launch everything in their Applications folder every time they log in "just in case" they need it later on?

And those horrendous ADC terms and conditions. Every copy of Mac OS X comes with the Xcode Tools so Pilgrim's complaint is irrelevant; membership is not required nor is submitting your personal information to Apple.

Strip away all of Pilgrim's strawmen arguments and all you're left with is a dusty, hollow husk of an argument. The post does have a kind of irreverent sarcasm that borders on entertaining, but I can't help but wonder if taking the time to reply to it has really been the wisest investment.

Ah well. At least I have my translucent menu bar.
