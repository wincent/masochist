---
title: Giving up on Emacs
tags: textmate emacs
---

So I didn't actually give up on [Emacs](/wiki/Emacs) six days ago as I had indicated I would. The masochist in me kept me coming back for more punishment.

I've now "gotten up to speed" somewhat, by which I mean I've customized the environment and practised enough that I can do most things at about 80% of their former speed. I guess it's foreseeable that I could get to 100% and even exceed that within a couple of weeks.

Do I miss [TextMate](/wiki/TextMate)? Well, I miss the *feel* of it. But I don't miss the resource issues it has. The customizability of Emacs is great, but it's not the be all and end all (there's no `make-emacs-stop-looking-ugly` command, after all). The real issue is the difference in resource usage.

You can fire up Emacs. It's neither hideously slow nor blazingly fast. It basically goes as fast as you need it to (that is, it can keep up with you no matter how fast you type). You can leave it running for a week and over the course of that week open several hundred documents. At the end of that period it will still be running just as fast as it was when you first launched it.

Compare that with TextMate. Point it at a small [Rails](/wiki/Rails) project with a few things frozen into `vendor` and watch how its virtual memory usage races towards a gigabyte in short order. Shudder as you watch the resident memory usage getting jealous of those big fancy numbers boasted in the virtual memory column and trying to catch up with them. To accelerate the race towards frustrating sessions of disk-churning and beachball-watching just use the "Find in project" feature once or twice. It basically requires an application restart after every few uses of "Find in project", and daily restarts in any case if you don't use it.

But still, the [UI](/wiki/UI) on Emacs is really hard to, um, love.

Take [Rinari](/wiki/Rinari), for example, the minor mode that provides some nice frills for helping with Rails development. It supplies a bunch of commands like `rinari-find-rspec` that you can execute whenever you want to jump from a model (or controller, or view) file to the corresponding spec.

But don't worry, you don't actually have to do a `M-x` (hold down "meta", otherwise known as the "Apple" or "Command" key, while pressing "X") and then type `rinari-find-rspec` and hit RETURN. There's an easy to use shortcut for you to get there without all that typing! It's `C-c ; f r`, as Emacs folk would write it, or "Hold down Control and press the C key, release both keys, then hold down the Shift key and press the Comma key to get a semi-colon, release both keys, hit the F key, finally hit the R key". Sure, it's mnemonic, but it takes almost as long to type it as it does to say the mnemonic out loud.

Yeah, you can customize this stuff. Thankfully. The trouble is there are just too many combinations. That's why these extensions like Rinari end up using what are effectively "key combination namespaces" so that their default extensions don't clash with all the others. But it's hardly user friendly.

Ask me what I think about it in a couple more weeks.
