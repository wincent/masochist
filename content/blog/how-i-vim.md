---
title: How I Vim
tags: vim tmux
---

_This article was originally published at [howivim.com](http://howivim.com/2016/wincent/)._

# Who are you and what do you use Vim for?

I'm a Front End Engineer working at Facebook on [Relay](http://facebook.github.io/relay/), which means I write a lot of JavaScript. I also end up writing Ruby, Vimscript, Lua, C, Haskell in my side-projects.

I started using Vim full-time back in 2009, originally in MacVim and later in the terminal (once I discovered the joys of tmux). I try to use Vim for as much of my text-editing as possible; for example, I've got thousands of wikitext and Markdown docs for [my website](https://wincent.com/) in [a Git repo](https://github.com/wincent/masochist/tree/content/content).

I'd be open using other editors if they could provide a good modal editing experience. Maybe they'll get there eventually, but I don't think they're quite there yet in terms of speed and robustness. I'm keeping my eye on Neovim, Nuclide and even Emacs. I could probably survive in any of those if they gave me the rock-solid modal editing experience that I want, as well as the awesome fuzzy-file-finding, snippets, and autocomplete that I've got in Vim.

# Introduce us to your Vim config

I love tinkering, so I have an incredibly over-engineered [dotfiles repo](https://github.com/wincent/wincent). It started off as a collection of files and a short script to symlink them into place, but gradually evolved into an Ansible-driven beast that does everything from installing custom terminfo files to configuring Vim.

My Vim files are [in this subdirectory](https://github.com/wincent/wincent/tree/master/roles/dotfiles/files/.vim), with my plugins as Git submodules, managed via Pathogen. Pathogen was the first tool of its kind, and I like its simplicity and am well-versed in how to use submodules without them biting me, so I've stuck with it.

I've got a few other tpope plugins in there. I really like their minimalism and power. "vim-surround" is a great example of one that should be built into Vim itself, but then there are "vim-fugitive", "vim-dispatch", "vim-projectionist" and others.

I'm a huge fan of UltiSnips, although I probably don't use it as much as I should. And although I'm allergic to complexity, I eventually had to let the very large and complicated YouCompleteMe into my set-up because it's just too darn useful. It saves me a lot of time.

In terms of my config itself, I try to keep it well-commented, with feature detection to make sure it runs on any of the machines I might use. I split the functionality into named files under `plugins` and defer loading as much as possible by using the `autoload` directory in order to keep startup fast.

I used Solarized Light as my color scheme for years, but about a year ago switched to Ocean Dark from Base16. I really like how I can [change colors from the command-line](https://github.com/wincent/wincent/blob/master/roles/dotfiles/files/.shells/colors), although in practice I never do because I just like Ocean Dark too much. I use Consolas as my font. Every few years I look to see if there's something better around, but I never find anything that beats Consolas for readability and aesthetics.

Space is my leader key. Of interest, I switched cold-turkey to the Colemak keyboard layout last year and decided to do it without changing any Vim bindings. That was a long hard road to follow, but I'm finally getting back close to my former speed.

If you look [elsewhere in my dotfiles](https://github.com/wincent/wincent/tree/master/roles/keyboard/files) you'll see some interesting keyboard tweaks for Karabiner. These allow me to do things like use Caps Lock as Backspace when tapped or held, but Control when chorded (and symmetrically, I can tap Return to get "Return", hold it to get repeated "Return", or chord it with another key to get Control). Likewise, I have a "Space layer" where I can hold down Space in conjunction with other keys and get cursor movement without having to move my hand away from the home row; this is great for those times when you're *not* in Vim.

The other thing to note is that I've spent a lot of time closing the gap between the terminal Vim experience and what you get in the GUI. The mouse works. I can paste without any special mappings or `:set paste` antics because I set up Bracketed Paste Mode. Italics work. I can change the cursor shape when in Insert mode. I get focus events when I enter and leave Vim, even when I'm running inside tmux. I made a tool called [Clipper](https://github.com/wincent/clipper) that gives my remote Vim and tmux processes access to my local clipboard. It all basically works so well that I actually *prefer* it to GUI Vim now.


# What have been the most useful resources for you to learn Vim?

I learned from first principles and not by "copy-pasta". I started with a blank `.vimrc` and used Google and the built-in docs to figure out each thing I wanted to do. I would explore people's dotfiles on GitHub looking for bits and pieces that I could steal, or modify and incorporate.

I enjoyed Drew Neil's Vimcasts, and I also picked up a copy of his "Practical Vim". But still most of the things I learn end up coming piecemeal via Google and GitHub.

I think the key thing that has helped me learn is discipline. I figure out more optimal replacements for inefficient habits, then I make cheatsheets of things I want to remember and practice them resolutely. I still have plenty of bad habits, but I'm still getting monotonically better over time.


# What's the most recent thing you've learned about Vim?

One of the things I love about Vim is its depth: there's always something more to learn, even after years. Today, for example, I needed to upcase the first letter in a substitution pattern and I learnt that you can do that and more with various combinations of `\u`, `\U`, `\l`, `\L` and `\e`/`\E`.

# How did you get started writing Vim plugins?

One of the key missing pieces when I moved to Vim back in 2009 was a robust and fast fuzzy file finder, so I decided that I'd make one. I wanted it to be fast, so I wrote it in C, and I wanted it to provide the highest quality, most intuitive matches for search terms, so I put a lot of thought into the scoring algorithm.

The result was [Command-T](https://github.com/wincent/command-t). It isn't as feature-rich or easy to install as some of the other fuzzy file finders that came after it, but it's still the only practical solution for working inside large projects with half-a-million files or more, which is the kind of repo we work with at Facebook.

In fact, when I joined Facebook, I had already made Command-T much faster by implementing parallelized search across multiple threads, but I realized I needed to be faster still. So I added input debouncing, integration with Watchman, and I taught Command-T to communicate over a binary protocol, among other things. All of this makes it ridiculously fast, even on enormous repos.

For me it's all about speed and responsiveness. I'm obsessed with it. If I ever start to feel that Command-T is slowing me down, I'll work on it until it's fast enough again.

Over the years with all the tinkering I ended up with some pretty nice bells and whistles in my Vim config, so I eventually decided to start pulling those out into plugins too. So far, the main ones I've extracted are [Ferret](https://github.com/wincent/ferret), [Loupe](https://github.com/wincent/loupe) and [Terminus](https://github.com/wincent/terminus), but there are still probably a couple more up my sleeve.

# Share a snippet of Vim script that you've written and talk about what it does

One of my favorite little parts of my config is [this section](https://github.com/wincent/wincent/blob/65b500270b1167454bf996f2abd1d803df894aee/roles/dotfiles/files/.vim/plugin/autocmds.vim#L12-L23) which makes the currently focused Vim window stand out by subduing the appearance of all other windows. This is super useful to me because I use *a lot* of splits.

Most or the real functionality is in [this autoloaded file](https://github.com/wincent/wincent/blob/65b500270b1167454bf996f2abd1d803df894aee/roles/dotfiles/files/.vim/autoload/autocmds.vim). One amusing part is this conditional here:

    if type(l:statusline) == type('')
      " Apply custom statusline.
      execute 'setlocal statusline=' . l:statusline
    elseif l:statusline == 0
      " Do nothing.
      "
      " Note that order matters here because of Vimscript's insane coercion rules:
      " when comparing a string to a number, the string gets coerced to 0, which
      " means that all strings `== 0`. So, we must check for string-ness first,
      " above.
      return
    else
      execute 'setlocal statusline=' . a:default
    endif

Like the comment says, all strings in Vimscript `== 0`. It has some crazy coercion rules. It never ceases to surprise me, even as I learn more about it.

# What have you been working on recently in Vim?

Other than my usual JavaScript, I've been (re-)learning Haskell and working on a documentation generator for Vim plugins. I got sick of having to write help documentation in Vim format and then a README in Markdown for GitHub, so I decided to make something that would allow me to embed the documentation in the Vimscript source itself. The idea is you run the tool, it extracts the markup from the source, and can emit Vim help files or Markdown (and therefore HTML). There are existing projects that already do similar things, but this one is fun to build. I need no more excuse than that!
