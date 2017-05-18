---
tags: vim wiki
cache_breaker: 1
---

# Official page

-   <http://www.vim.org/scripts/script.php?script_id=1984>

# Updates

Grab the latest version:

    $ wget -O /tmp/vim-fuzzyfinder.zip http://www.vim.org/scripts/download_script.php?src_id=10588

Inspect archive contents:

    $ unzip -l /tmp/vim-fuzzyfinder.zip 
    Archive:  vim-fuzzyfinder.zip
      Length     Date   Time    Name
     --------    ----   ----    ----
        37877  05-14-09 00:53   doc/fuzzyfinder.jax
        48249  05-14-09 01:18   doc/fuzzyfinder.txt
        57764  05-14-09 01:00   plugin/fuzzyfinder.vim
     --------                   -------
       143890                   3 files

Check what will be overwritten on installing:

    $ find ~/.vim -name '*fuzzyfinder*'
    ./plugin/fuzzyfinder.vim
    ./vim-fuzzyfinder.zip

Go ahead and install:

    $ unzip /tmp/vim-fuzzyfinder.zip -d ~/.vim
    Archive:  vim-fuzzyfinder.zip
      inflating: ./doc/fuzzyfinder.jax   
      inflating: ./doc/fuzzyfinder.txt   
    replace ./plugin/fuzzyfinder.vim? [y]es, [n]o, [A]ll, [N]one, [r]ename: y
      inflating: ./plugin/fuzzyfinder.vim

Update the help (from inside [Vim](/wiki/Vim)):

    :helptags ~/.vim/doc

Or from the [command line](/wiki/command_line):

    vim -c "helptags ~/.vim/doc"

# See also

-   [Vim plugins](/wiki/Vim_plugins)
