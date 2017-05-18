---
title: Ruby on Rails
tags: blog
---

I've spent today getting to know Ruby on Rails and I must say I am very impressed with two things about it so far:

1.  The automatic, transparent mapping between the model classes (Ruby code) and the underlying database storage (tables, columns, rows).
2.  The migrations functionality, which produces a database schema for you and can incrementally update it (or roll it back for you) without you having to execute a single SQL statement.





These two features combine to mean that you can come up with your model in Ruby and iteratively develop it without ever having to worry about the implementation details of your database. I've seen abstraction layers before but never anything so transparently, elegantly and extensively database agnostic. Amazing. Combine it with the incredibly easy deployment using Locomotive and SQLite and you're laughing.

It's early days yet but I can already see that this will deliver the "rapid" in "Rapid Application Development", and being a Cocoa programmer I am already familiar and totally comfortable with the MVC (Model-View-Controller) design pattern, and Object-Oriented stuff in general. Sure, I don't know Ruby (yet) but I've already got a few books and there is plenty of material online. (Is it just me or does Rails creator David Heinemeier Hansson have one of *[the most annoying voices in the history of the universe](http://media.rubyonrails.org/video/migrations.mov)*? I find him almost unlistenable).

Anyway, I'm documenting all of this on my wiki (which will soon enough replace the existing [Knowledge Base](http://www.wincent.com/a/knowledge-base/)). And why am I exploring all this stuff in the first place? Basically because I've got some improvements in mind for this website that I think will be benefit customers and other users. I can see that this framework really can enable rapid turn-around times and I'll hopefully be able to roll out some new functionality in the not too distant future. More details forthcoming.
