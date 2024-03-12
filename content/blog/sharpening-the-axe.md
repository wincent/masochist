---
description: Transcript of the VimConf 2020 Talk
tags: blog
title: Sharpening the axe
---

> Transcript from my talk at VimConf 2020 ([video](https://youtu.be/iEShYRRVZOE), [slides](https://docs.google.com/presentation/d/1fEc71ZtM69dZPd8CGe3eqiHj18FAOw3sRoOtkUto5SQ/edit?usp=sharing)).

# 1

Hi everybody, it's a pleasure to be here. Can somebody please confirm for me in the chat that they can hear me?

Ok, I think we're ready to get started. I'm going to shut off my camera now so that we have maximum screen real estate for the slides. At the end I'll be sharing links to a high quality pre-recorded version of this talk, as well as a transcript.

# 2

This talk started with a joke on Twitter a few months back.

> Lincoln: "Give me six hours to chop down a tree and I will spend the first four sharpening the axe."
>
> Me: "Give me a series of simple programming tasks to do and I will spend 10 years of my life tweaking my dotfiles repo."

Now, President Lincoln almost [certainly didn't actually say this](https://quoteinvestigator.com/2014/03/29/sharp-axe/), but even though the attribution is dubious, the appeal of the argument is clear. The idea is that you can be more effective by making sure you are prepared and have the right tools. So effective, in fact, that you'll get the job done sooner, even when you include the "off task" time spent preparing.

Now, when I tweeted about President Lincoln and sharpening the axe, I was only half-joking. The bit about spending 10 years tweaking my dotfiles is actually a somewhat of an understatement.

# 3

![Commit history](/system/images/sharpening-the-axe/commit-history.png)

I switched full-time to Vim at the beginning of 2009, and have had my dotfiles in a Git repo since around the same time.

From this graph of commits over that time span you can conclude that I am either:

1. A relentless optimizer.
2. Somebody who's probably got a pretty tuned toolkit by now.
3. A master procrastinator.

I'd like to think that it's mostly about the first two, but the reality is that there is probably some truth in them all.

# 4

But there's another factor beyond my penchant for tinkering that explains some of this activity. It's that Vim itself and its surrounding ecosystem have changed quite dramatically over the last decade. What might have been a "state of the art" Vim set-up in 2010 would probably seem quite antiquated if we looked at in 2020.

Now, in 2010, Vim version 7 was the latest and greatest incarnation of Vim. It was about half-way through [its decade-long reign](https://github.com/vim/vim-history). Version 7 retained its crown as the latest version for around 10 years. Vim was already about 20 years old at that point, and its ultimate predecessor, vi, was approaching its 35th birthday.

Things moved more slowly back then. Vim, a single-threaded editor, only had support for blocking, synchronous jobs. It was possible to write plug-ins in other languages such as Python and Ruby and so on, but most plug-ins were written in Vimscript, which is a capable but awkward language, and a slow one.

This meant that IDE features tended to be pretty modest back then, with projects like Ctags representing the peak of "intelligent" IDE-like code navigation features.

If you fast forward a decade, so much has changed. Neovim brought a host of improvements, and the competitive pressure spurred Vim's own maintainer, Bram Moolenaar, to roll out equivalent (but unfortunately not compatible) analogs in Vim itself. The advent of asynchronous jobs and the Language Server Protocol have led to a burgeoning of sophisticated IDE-like functionality.

And while Neovim charges forward, Vim 9 is under development too, including some changes that would've been unimaginable in the past: things like a new version of Vimscript which is compiled for better performance and which eliminates many puzzling idiosyncrasies of the older version.

# 5

One of the ironic things about this evolution is that with each passing year Vim has become a little bit more like Emacs.

You've probably heard the old joke about Emacs being "a great operating system, lacking only a decent editor". While it's fun to poke fun at Emacs for being huge and sprawling, the value proposition is obvious.

You can _live inside_ Emacs if you want. If we think in terms of composing tools together, Emacs tends to be one of the outermost layers. Emacs is a container for other processes. You can _stay inside_ Emacs not only to edit text, but to send and read emails, debug computer programs, browse the web, manage your calendar or todo list, and much more.

# 6

For most of its life, the mental model for Vim was the exact opposite. Rather than something you lived inside, Vim was a scalpel for editing text. You would pick it up when you needed it, call it from other places. For example, Mutt, the email client, or Git, the version control system, would spawn a copy of Vim whenever you needed to edit something. Vim was so small and light that the startup cost was imperceptible.

In fact, the concrete incarnation of the program itself retreated into the background almost to the point of invisibility, leaving behind only the abstract idea of a minimal set of editing tools for manipulating text modally. So browsers and IDEs and email clients would borrow the idea of modal editing and implement "vi modes" in a way that they would never have contemplated for an "Emacs mode", unless you could call some basic Emacs-style bindings a "mode". Such bindings don't fundamentally change anything about the editing paradigm, they just provide some common shortcuts for people with their muscle memory configured a certain way. But modal editing is an entirely distinct modality.

# 7

So, Vim has changed a lot, and the ecosystem has grown and matured. If you want, you can now, to a large extent, "live inside" Vim the way Emacs users can live inside Emacs. If you want, you can use Vim as a container for other processes instead of as a mere process to be stuck inside another container.

But at its heart, fortunately, despite the proliferation of increasingly sophisticated plug-ins that you can install, Vim at its core is still minimal and fast, and can still be used as a lightweight tool that you pick up when needed.

It preserves the defining value proposition that has drawn so many people to it over the years. Most obviously, it's that Vim's implementation of modal editing is just sublime, no pun intended. When it comes to manipulating text, it is just obscenely good at it.

And I think it's a journey that all of us who choose Vim and stick with it go through. There are three "epiphanies" that you arrive at, sooner or later, that explain all of the magical appeal of Vim.

# 8

The first is that [Vim is fast](https://pavelfatin.com/typing-with-pleasure/), and not just fast to start-up, but fast to respond in terms of keyboard latency, and, even more importantly, fast in the sense of minimizing the distance between the intentions of the human at the keyboard, and the actions they must carry out in the editor to get it to do what they want.

The second epiphany, is that Vim is easy to learn, despite all the jokes about being stuck in Vim for multiple years unable to exit.

And finally, the third epiphany is that Vim is powerful, like a lever, because once you learn the core principals and patterns, you can combine them in predictable ways to do many additional things without a steep learning curve.

Let me give some examples.

# 9

Vim is fast, and one of the main reasons is that it explicitly optimizes for the common tasks that you find yourself doing dozens or even hundreds of times a day when editing text.

For example, normal mode commands like "o" and "Shift-o", which "open" a new line for editing below or above the current line.

In other editors, in order to carry out this action, you find yourself doing extraneous things that aren't actually directly related to the thing you're wanting to do, which is start inserting text on the line below. Instead, you find yourself doing things like pressing "Command-Right Arrow" to jump to the end of the current line, which has nothing to do with your business on the next line, and then pressing "Enter" to get to where you can actually start doing what you want.

In Vim, this operation is a single key-press away, and very close to where your hands rest on the keyboard home row (closer still on keyboard layouts like Colemak, or Dvorak, which I don't know how to pronounce).

This kind of thoughtful optimization is pervasive in the standard normal mode mappings, starting with the famous "h"/"j"/"k"/"l" quartet for cursor movement, and extending to pretty much every available key on the keyboard.

Just in terms of simple mechanical advantage, here indeed is an axe worth sharpening. Practice the normal mode commands like a Jazz musician would practice scales and improvisation.

# 10

Next point: Vim is actually, surprisingly, easy to learn. Almost all of the core operations can be remembered using mnemonic tricks, like "cit" standing for "change inside tag", which is trivially easy to remember, or via intuition and pattern-matching; for example, an uppercase version of some key usually does the logical extension or inverse of the lowercase version. Or prefixing a key with "g" often does an augmented version or a variant of an operation.

Compared to other things I've learned in my life, Vim really wasn't all that bad. It was definitely easier than learning a new keyboard layout, for instance; I felt quite productive after mere _days_ of switching to Vim, whereas learning the Colemak keyboard layout required _weeks_ of intensive effort before I really felt comfortable.

# 11

And the final point, about Vim being powerful. Vim's power is the power of composability. You learn the component pieces and you can combine them to multiply their value.

Once you've understood the general grammar of repeat counts, verbs, motions and so on, you can assemble together operations to do some very powerful things without having to individually learn all the permutations. If you know N verbs, and M motions, that means you know N-times-M combinations. That's almost quadratic growth right there, and for once, that's a good thing.

# 12

So they say "practice makes perfect", and the good news is that the core design of Vim is so fundamentally good, that it _rewards focused practice_. The effort you invest in improving your basic text-editing skills _will_ pay you dividends from now onwards, _every_ time you edit text.

And focused practice is one path towards mastery. It is a way to sharpen the axe. But the other way, and the thing that I want to spend the rest of this talk on, is the task of refining your set-up, to turn Vim into a tool that fits you like a glove, so that it becomes more like an extension of your will than an external object.

# 13

And that brings us back to why I have [a dotfiles repo](https://github.com/wincent/wincent) with nearly 4,000 commits in it (so far...). Vim and its ecosystem have changed a lot, but keeping up-to-date with those changes only goes some of the way to explaining my activity.

Let's talk a little bit then about what that means in terms of "Sharpening the axe".

# 14

I think Zach Holman was very close to having it right when he said, ten years ago, that "dotfiles are meant to be forked".

He's saying that dotfiles should be promiscuously shared, and customized to suit each developer's needs and taste. In the end, your dotfiles become a unique expression of your preferences, needs, habits, and in a way, even your identity. Given time and freedom, no two developers' dotfile set-ups will be alike. They'll be as unique as fingerprints.

I mostly agree with that, but with a disclaimer. I _don't_ think you should base your dotfiles on somebody else's by forking.

# 15

Instead of forking, start with `git init`, an empty slate. That means an empty directory inside of which you are going to carefully construct over time your ideal development set-up.

Once you've got this empty directory, and started populating it with configuration files, there are a number of tools that you can use to actually put these files in the right places and keep them up to-date. I've listed a few here.

-   A common choice is [GNU Stow](https://www.gnu.org/software/stow/), which describes itself as a "symlink farm manager". In practice what that actually means is that you can keep your dotfiles neatly organized in a Git repo, and then make them appear appropriately elsewhere on the filesystem (such as in your home directory) via symlinking.
-   One that I used for a while was [Ansible](https://docs.ansible.com/ansible/latest/index.html) which is a full-blown system configuration tool. This can be used to do much more than just symlink dotfiles, such as installing packages, scheduling cron jobs, applying tweaks to shared system files, and so on. But it is complicated, and the tool isn't really optimized for this use case; it's really intended to do large-scale infrastructure management, such as deploying and maintaining fleets of machines across the network. Using it for dotfile management is kind of like driving in a nail with a 10,000-pound hammer.
-   At the opposite end of the spectrum, you could use a simple script written in Ruby, Python, Bash, or any other scripting language. There are many examples of such scripts online ([here is one that I used in the past](https://github.com/wincent/wincent/blob/94fb4d5024/bootstrap.rb)).
-   There are also tools and frameworks especially built just for dotfile management (one example made by a former colleague of mine is called [Dot](https://github.com/sds/dot)).
-   Finally, I'll mention [Fig](https://github.com/wincent/wincent/tree/master/fig) which is what I am using nowadays. I basically took the idea of Ansible, the 10,000-pound hammer, ignored most of the 3,400 modules that come with it, and wrote from scratch a tiny little tool that does nothing more than I need to set up a machine and keep it up to date.

# 16

So you have a Git repo now, and a way of plugging it in to a working system. What should you do next?

I like the idea of starting from scratch. Literally from a blank `.vimrc` file (or a blank Neovim `init.vim` file). And then we build up from there line by line.

Nothing goes in without understanding exactly what it does. Not only do you make the editor behave the way you want it to, but you gain an understanding of both the default behavior, and the modifications necessary to change that behavior.

Here's an early example from my repo.

# 17

```text
commit 18162960b6119d5cf49b9ffaa92e1e430a176252
Author: Greg Hurrell <greg@hurrell.net>
Date:   Wed May 20 23:53:14 2009 +0200

    Vim: set low ttimeoutlen

    MacVim isn't affected but "vim" in the Terminal is: typing a command
    like "O" will result in a noticeable delay because it might be the first
    character of a multibyte keycode (an arrow key, for instance).

    This can be observed in the form of a noticeable delay between pressing
    "O" and actually entering Insert mode. By default 'ttimeoutlen' is -1
    and that means that default 'timeoutlen' value of 1000 milliseconds is
    used for the detection of multibyte keycodes (ie. there is a 1 second
    delay between pressing the "O" key and actually entering Insert mode).

    Set 'ttimeoutlen' to a fast value (50 milliseconds) to make the delay
    less noticeable. This should be fast enough to not cause any problems,
    even when working over an SSH connection with some latency.
```

This one is from May 2009, when I'd been using Vim for about five months. In this commit I'm adjusting the value of the `'ttimeoutlen'` setting to improve responsiveness. Now, when I make a change like this, I don't really hold much hope of remembering the details of why; with so many settings, and some of them quite subtle, I know that I have to record the rationale for making the change, or it will be lost in the sands of time.

But if it is in the commit message, then it is only ever a quick `git-blame` away.

# 18

```vim
set scrolloff=3                       " start scrolling 3 lines before edge of viewport
set shell=sh                          " shell to use for `!`, `:!`, `system()` etc.
set noshiftround                      " don't always indent by multiple of shiftwidth
set shiftwidth=2                      " spaces per tab (when shifting)
set shortmess+=A                      " ignore annoying swapfile messages
set shortmess+=I                      " no splash screen
set shortmess+=O                      " file-read message overwrites previous
set shortmess+=T                      " truncate non-file messages in middle
set shortmess+=W                      " don't echo "[w]"/"[written]" when writing
set shortmess+=a                      " use abbreviations in messages eg. `[RO]` instead of `[readonly]`
if has('patch-7.4.314')
  set shortmess+=c                    " completion messages
endif
set shortmess+=o                      " overwrite file-written messages
set shortmess+=t                      " truncate file messages at start
```

And after doing this over many years, I end up with a self-documenting `.vimrc` file that contains these short comments to remind me what each setting is for. And if I need more info, I can dive into Vim's excellent help with `:h`, and if I need even more context, I can `git-blame` or look at the log to see when and why I changed a particular setting.

# 19

```text
commit 84a48540b6f10095ba0fe25dc359060e71804a2e
Author: Greg Hurrell <greg@hurrell.net>
Date:   Sun May 24 01:42:32 2020 +0200

    feat(vim): set up TextYankPost

    This is going to be a great little speed-up. Instead of visually
    selecting things and then yanking them (to be sure you got he right
    thing), you can just blindly yank with the same level of confidence
    because if you get it wrong, you'll see it in the highlighting.

    Thanks to: https://github.com/neovim/neovim/pull/12279

    Screenshot: https://twitter.com/wincent/status/1264340870322675713
```

I have maintained this habit all along, because experience has shown me again and again the value of externalizing a record of my thought processes and activity into an archive that I can search at a later time.

Here's some proof; this one is a commit message I wrote 11 years later, and you can see that I'm still explaining what I'm doing and why. In this case, it's leveraging a new Neovim feature to highlight the yanked region using an `autocmd`. As always, I explain what the change is, my rationale for making it, and I include whatever information or links I'll need to make sense of it if I look at it again in the future.

Not only is it useful to have a record like this for me, but there are two other benefits.

1. I know that other people who look into my dotfiles repo, can use the extra context to help them make informed decisions as they craft their own environments, as opposed to blindly copying from one place into another.
2. It's liberating for me, mentally speaking, to know that I don't have to agonize about remembering all the details of every decision I make, because there is a part of my memory which resides in a distributed fashion across multiple hosts in the form of an immutable commit history. I don't need to remember the answers themselves; just that they exist in a place that I can find them again.

# 20

So that's a little bit about the value of discipline, of doing things in a rigorous and consistent way. I call it "tweaking", but the truth is, done with care it starts to resemble software engineering.

But discipline is just a question of _how_ we do things. It doesn't speak to _what_ we should do. What can we do to go beyond tweaking, and follow a path that leads us towards "mastery"?

Now, I'm being very careful about the language I use here. I want to emphasize that mastery is a journey more than a destination. I still learn new things about Vim every single week. And I forget some of the things that I previously learned. So if mastery is a destination, I don't know if I'll ever arrive there. I feel much more comfortable talking about it as a process.

On my YouTube channel, I've posted almost a 100 Vim screencasts over the last 4 years, and I've seen again and again how information that I shared one week, and which reflected at the time my best understanding of things, was later superseded by new understanding. When you're constantly changing and growing, and the environment is changing around you, it is hard to feel any sense of mastery; rather than feeling like an expert, studying Vim makes you feel like a perpetual student, and is a quite satisfying state to be in, when you think about it.

# 21

The primary tool that will drive you towards mastery will be seeking out solutions for your own pain points. When you start from an empty `.vimrc`, these might be simple things like figuring out how to show line numbers, or use spaces instead of tabs, or turn hard-wrapping on or off.

It might end up being things like how to get italics rendering properly or have the mouse working properly in the terminal, or how to use autocomplete or snippets. Maybe you want to figure out how to use Vim for writing email, or managing your wiki or todo list. As your knowledge of Vim grows, so to will your awareness of little edge cases that you'd like smooth out, and your appetite for taking on bigger and bigger challenges will increase.

In my decade with Vim, I've built plug-ins, and used it for email, blogging, to manage a wiki, for note-taking, and obviously for programming. And just like the myth that most humans only use 10% of their brain, I still feel like I'm only using about 10% of what Vim has to offer. This makes it a pretty exciting platform to learn about, because there's this sense of vast untapped potential waiting to be unleashed all the time.

And if you run out of obvious ways to sharpen your axe, you can take inspiration from other people's set-ups and ways of working. Go on fishing expeditions in other people's dotfiles looking for ideas. Observe other people at work. You might be in a work environment where pair-programming takes place, and even if you aren't, there are always screencasts and streams to look at. Seeing what other people can do with Vim may expand your horizons in ways that inspire you and give you ideas for continued improvement.

Just don't forget the golden rule of never copy-pasting without understanding. Keep up your discipline of understanding every change, document your process, and whenever you need your context it will be waiting for you there in the Git history.

# 22

Another path to improvement is through plug-ins

Now, when I make a plug-in it isn't out of a desire to make something popular. It is fundamentally because I have a need that isn't currently fulfilled to my satisfaction. This is the primary driver along the path to mastery, again: solve specific problems.

So, you do this, you make a plug-in, and you end up sharpening the axe. If the result seems useful, then you share it.

"If you build it, they will come"... or they won't. It doesn't matter. The important part is that you improved your environment and probably learned something along the way.

# 23

```vim
if has('folding')
  if has('windows')
    set fillchars=diff:∙               " BULLET OPERATOR (U+2219, UTF-8: E2 88 99)
    set fillchars+=fold:·              " MIDDLE DOT (U+00B7, UTF-8: C2 B7)
    set fillchars+=vert:┃              " BOX DRAWINGS HEAVY VERTICAL (U+2503, UTF-8: E2 94 83)
  endif

  if has('nvim-0.3.1')
    set fillchars+=eob:\              " suppress ~ at EndOfBuffer
  endif

  set foldmethod=indent               " not as cool as syntax, but faster
  set foldlevelstart=99               " start unfolded
  set foldtext=wincent#settings#foldtext()
endif

if v:version > 703 || v:version == 703 && has('patch541')
  set formatoptions+=j                " remove comment leader when joining comment lines
endif
```

One of the things about releasing something as a plug-in is that people may use it in contexts that do not match your own. This means that you may have to do feature detection, to make the plug-in compatible with a broader range of environments. This is a good habit that you can "backport" to your own `.vimrc`. For example, it can help you make a single `.vimrc` that will work for both Vim and Neovim, and will degrade gracefully if you find yourself on a machine with an older version. That's what you can see in this screenshot, with the `if` statements that check for the existence of features. For occasions where you can't directly detect a feature, you can resort to checking for a specific version or even a patch (which is useful, for example, if you want to conditionally execute a workaround for a bug that was fixed in a particular Vim patch).

# 24

Here's a little case study. I created a plugin called "Scalpel" that streamlines a common use case I have of moving through a file substituting a word. Neovim in particular has some nice features to preview changes so that you can make them _en masse_ without fear of breaking anything, but the use case I'm talking about here is where the buffer may be large, and you want to pause and evaluate the site of each potential change before actually performing it.

So, this starts as a few lines in my `.vimrc` because I'm not entirely happy with the alternatives.

I could use a mapping like the one shown here — to `*Ncgn` — which allows you to jump from word to word replacing each one.

-   `*` jumps to the next occurrence of the word under the cursor; this effectively puts it in the search register.
-   (Shift) `N` puts us back where we started.
-   `c` starts a change; and:
-   `gn` indicates the motion over which we wish to make the change, which in this case means the next match.

The overall effect is to change the current word, and if I hit `.` after leaving insert mode the change will be made to the next match, and the next as I continue to hit `.`.

This mapping works, but I don't like the way it's blind. I can't see where the cursor is going to land in order to preview the change before making it. By the time I get there, the substitution has already been made. And it pollutes my jump list too, because I am jumping through the buffer.

So, I end up using the `:substitute` command instead.

-   `%` defines a range, and says we want to operate over the entire buffer.
-   `s` is short for substitute.
-   I specify a pattern and a replacement.
-   `g` says to do the substitution globally, which means for all matches on any given line instead of just the first; finally:
-   `c` tells Vim to prompt me for confirmation before making each change.

This command doesn't suffer from the problems of the mapping, but it is annoying in other ways. For example, if I am in the middle of the file it's going to jump all the way to top and then work down to the bottom. I'd much rather start from the middle, work down from there, and then loop around to the top and continue back down to the middle, ending where I started.

So I make a little custom function to do what I want. After using it for while it seems solid enough to extract into a plugin.

# 25

```text
commit 00c80650a97b058aeda61d63a574597fda353c31
Author: Greg Hurrell <greg@hurrell.net>
Date:   Fri Apr 29 08:38:05 2016 -0700

    vim: extract and cut over to Scalpel plug-in

    * roles/dotfiles/files/.vim/pack/bundle/start/scalpel 9fc9050...672c2a>
      > Ignore release archives
      > Add README
      > Rename ScalpelSubstitute to Scalpel
      > Denest
      > Rename :Substitute to :Scalpel
      > Add validation of command name
      > Add basic configuration
      > Add standard plug-in boilerplate
      > Add LICENSE.md
      > Add license headers
      > Carry "a" flag around when looping back to top of buffer
      > Drop empty trailing comment
      > Rename autoloaded functions to match directory structure
      > Import base from dotfiles
```

As you can see, it's a little over 40 lines of Vimscript all up.

Making something into a plug-in applies a constructive kind of pressure, for the same reasons that making anything open source can increase its quality. It doesn't matter if nobody ever uses it; the mere fact that they might is an incentive to pay attention to edge cases, provide documentation and so on.

# 26

![Scalpel improvements](/system/images/sharpening-the-axe/scalpel-improvements.png)

From then on it's a case of relentlessly improving the snippet until there is nothing left to fix, or you run into some insurmountable barrier that stops further progress.

What we're looking at here is the entire commit history for the Scalpel project over the course of four years. Most of the commits are just chores, but I've highlighted the actual substantive improvements and fixes using arrows. They're just small things, like:

-   Fixing a Vimscript edge case.
-   Adding configuration options.
-   Adding ability to work VISUAL mode.
-   Following best practices for autocmds.
-   Suppressing unwanted messages.
-   Adding support for pattern delimiters other than slashes.
-   Fixing a bug with replacement sequences.
-   Fixing compatibility with old Vim versions.
-   Respecting the `'gdefault'` setting.
-   Hardening the code to guard against nested `:redir` commands.
-   Adding some missing escaping.

That's all of them. Some are little things that I noticed from using the plugin. Others came in from user reports for bugs that I never would have run into on my own. And there are one or two things that result from pressure from users to support new use cases; nothing that takes us into the territory of "bloat", just little things. But without a doubt the code is better for having been exposed to community usage, and it taught me something along the way. For example, that `'gdefault'` setting, which I'd never heard of until a user brought it up.

# 27

So at the end of this process, what happened to my 40 lines of Vimscript? The bulk of the plug-in is actually comments now (308 lines). Those are extracted and transformed into documentation. The non-comment source lines tally up to 135 in all, so it's still small.

```text
       2 text files.
classified 2 files
       2 unique files.
       0 files ignored.

github.com/AlDanial/cloc v 1.84  T=0.06 s (33.4 files/s, 7795.0 lines/s)
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
vim script                       2             24            308            135
-------------------------------------------------------------------------------
SUM:                             2             24            308            135
-------------------------------------------------------------------------------
```

# 28

So the story of Scalpel is just one example of axe-sharpening taken from a decade of dotfile tweaking and workflow optimization.

![XKCD 1205: Is it worth the time?](/system/images/sharpening-the-axe/xkcd.png)

I want to close with [this XKCD comic](https://xkcd.com/1205/) which may well have been hovering around in the back of your mind ever since the beginning. It seeks to answer the question of how much optimization is too much? You wouldn't work for a day to optimize a minute-long task that you rarely perform, but you might do it if the task was frequent enough or costly enough. The point is, there actually is an objective guideline that you can follow to ensure that your investment in axe-sharpening is appropriate and proportional to the expected benefit. Being aware of the trade-off here can keep us away from obsessively refactoring, or polishing our tools as a way of procrastinating.

If we're pragmatic, axe-sharpening can be not only a lot fun, but a great productivity booster as well. I hope you're all feeling motivated to continue the good work of refining your set-ups.

# 29

Before I go, I'm going to leave you with some links to [those famous dotfiles of mine](https://github.com/wincent/wincent) (to be stolen from, not forked), as well as [my blog](https://wincent.dev/blog), where I will be posting [a transcript of this talk](https://wincent.dev/blog/sharpening-the-axe), and [my YouTube channel](https://www.youtube.com/c/GregHurrell), where I will upload a high-quality version of for posterity.

Thanks for listening and good luck!
