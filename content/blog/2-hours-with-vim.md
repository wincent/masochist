---
title: 2 hours with Vim
tags: vim ack
cache_breaker: 1
---

An oft-repeated prerequisite of any coding editor is that it should have a fast way of jumping around files in a project (like Command-T in [TextMate](/wiki/TextMate)) and that it needs a nice "Find in project" interface.

In my [last post](/blog/1-hour-with-vim) I mentioned meeting the first of those criteria using fuzzy\_file\_finder, Fuzzyfinder and fuzzyfinder\_textmate. Installing these is a little bit brittle and flakey (particularly fuzzyfinder\_textmate, which is intimately tied to Fuzzyfinder and easily broken by changes in the latter), but it works. I think the ideal solution would actually be to rewrite fuzzy\_file\_finder entirely in the [Vim](/wiki/Vim) scripting language (it's currently written in [Ruby](/wiki/Ruby)) and directly incorporate it into fuzzyfinder\_textmate, which itself would should become just a fork of Fuzzyfinder instead of a add-on that monkey patches itself into place.

For the second criteria, a nice "Find in project" interface, I've looked at a few different things and have just settled on one that I think I'll be quite happy with.

First of all I installed [Ack](/wiki/Ack), a wonderful [Perl](/wiki/Perl) script that serves as an alternative to `grep` specifically for programmers. By default it assumes you want to search recursively, and that you don't want to look in `.svn` directories and the like. It provides nice switches so you can exclude certain types of file from your searches, or restrict your search to a specific file type (for example, you can do stuff like, `ack --ruby Article` to search only [Ruby](/wiki/Ruby) files). This isn't just a dumb grep; you can enter in complex Perl regular expressions to find exactly what you're looking for.

In the [Terminal](/wiki/Terminal) it prints neatly organized results, colorized for readability. When piped to another command (as is the case when you use it from within [Vim](/wiki/Vim)), its output is very similar to `grep` and so can be used as a drop-in replacement.

I'd recommend this tool to any programmer for daily use on the [command line](/wiki/command_line) in any case, but I'm mentioning it here because it works particularly well when integrated into Vim.

You can actually drop it in as a *replacement* for `grep`, but I instead chose to set up a separate command that would specifically use Ack.

Here's the function I added to my `~/.vimrc`, taken from [this article](http://www.perladvent.org/2006/5/):

    function! AckGrep(command)
      cexpr system("ack " . a:command)
      cw " show quickfix window already
    endfunction

The `cexpr` basically tells Vim to run the command and stick the results in the "quickfix" window. The quickfix window is specifically designed for displaying lists of files, and locations within those files. It was originally made to show compile errors and allow you to jump to the error locations quickly (hence the name "quickfix"), but it works great for showing search results too.

The `cw` tells Vim to immediately show the quickfix window rather than waiting for the user to manually open it. You can navigate to the search results with a mouse click or with the keyboard. There are also commands you can use to cycle through search results without even touching the actual quickfix window itself, and you can bind these to whatever key combination takes your fancy.

So the function is in place; here we set up an `:Ack` command to actually make use of it. This will allow the user to enter in arbitrary arguments like `--perl` to restrict the search to Perl files, or filesystem paths to restrict the scope of the search (and here we benefit from tab completion).

    command! -nargs=+ -complete=file Ack call AckGrep(<q-args>)

Finally bind it to a quick key combination for easy access, in my case, `,a`:

    map <leader>a :Ack<space>

So now I can do stuff like:

    ,a Article

To find all files containing the word "Article". By default all of this stuff is scoped to the current directory. It's a good idea to either do an explicit `:chdir path/to/project/root` when you start working, or launch [MacVim](/wiki/MacVim) from the Terminal with an `mvim` from inside your project directory to get the current directory appropriately set (you'll want to do this anyway to use the "Fuzzyfinder" stuff to jump around files in your project).

    ,a RecordNotFound app

To find all instances of "RecordNotFound", but only in my `app` directory.

    ,a --html '\w+_\d+'

To find [HTML](/wiki/HTML) files containing "word characters followed by an underscore followed by digits". You get the idea. Basically all the power, speed and convenience of TextMate's "Find in project", with even more control and without the crippling memory bloat.
