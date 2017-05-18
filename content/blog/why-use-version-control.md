---
title: Why use version control?
tags: blog
---

Why use [version control](http://subversion.tigris.org/) if you a lone-developer working on a closed-source project? You don't have to collaborate with anyone, download the source or send patches, after all.

The answer is simple; you use version control for the same reason that you do [unit testing](http://test.wincent.com/): to develop more boldly (faster) and produce better (more robust) code.

It allows you to develop fearlessly, make big changes knowing that you can easily back them out and go back to a previous, working version if things don't turn out. It allows you to quickly compare revisions (which you can visualize using FileMerge) which can help you orient yourself when you're in the middle of a big change and you want to get a sense of how things are going. It allows you to more easily tag releases or take snapshots at other key moments. It allows you easily work on multiple branches at once (for example, a development branch and a stable/bugfix branch), something that would be extremely awkward without version control. The habit of doing regular check ins (one for each bug fixed, issue addressed or feature added) leads to good coding habits (developing in a more orderly, organized fashion, which in itself should lead to fewer bugs). And it serves as yet another form of backup for the precious data upon which your livelihood depends (although by no means should it be the *only* kind of backup that you rely on).

If you don't agree with me, I suggest you try it. Give it a proper go and chances are you'll come around in the end.
