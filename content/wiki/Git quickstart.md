---
tags: git
---

# Installation

See my installation notes at "[Installing Git 1.5.2.3 on Mac OS X Tiger](/wiki/Installing_Git_1.5.2.3_on_Mac_OS_X_Tiger)".

# Optional modules

See:

-   "[Installing Net::SMTP::SSL for sending patches with Git over secure SMTP](/wiki/Installing_Net%3a%3aSMTP%3a%3aSSL_for_sending_patches_with_Git_over_secure_SMTP)"

# Initial configuration

    # personalize these with your own name and email address
    git config --global user.name "Wincent Colaiuta"
    git config --global user.email "win@wincent.com"

    # decorate logs
    git config --global log.decorate short

    # colorize output (Git 1.5.5 or later)
    git config --global color.ui auto

    # and from 1.5.4 onwards, this will works:
    git config --global color.interactive auto

    # user-friendly paging of some commands which don't use the pager by default
    # (other commands like "git log" already do)
    # to override pass --no-pager or GIT_PAGER=cat
    git config --global pager.status true
    git config --global pager.show-branch true

    # shortcut aliases
    git config --global alias.st status
    git config --global alias.ci commit
    git config --global alias.co checkout

    # use Apple opendiff (FileMerge) for resolving conflicts
    # it will be invoked when you do a "git mergetool"
    git config --global merge.tool opendiff

    # this so I can submit patches using git send-email
    git config --global sendemail.smtpserver smtp.example.com
    git config --global sendemail.aliasesfile ~/.gitaliases
    git config --global sendemail.aliasfiletype mailrc

    # as of Git 1.5.4 you'll also be able to add this for SMTP-AUTH
    git config --global sendemail.smtpuser "user@example.com"
    git config --global sendemail.smtppass password
    git config --global sendemail.smtpssl true

    # shortcut aliases for submitting patches for Git itself
    # refer to the "See also" section below for additional information
    echo "alias git git@vger.kernel.org" >> ~/.gitaliases
    echo "alias junio gitster@pobox.com" >> ~/.gitaliases
    echo "alias me win@wincent.com" >> ~/.gitaliases

    # another feature that will be available in 1.5.4 onwards
    # this is useful when you use topic branches for grouping together logically related changes
    git config --global format.numbered auto

    # turn on new 1.5 features which break backwards compatibility
    git config --global core.legacyheaders false
    git config --global repack.usedeltabaseoffset true

The `--global` switch causes changes to be written into `~/.gitconfig` rather than the repository-level `config`.

For more information on configuration type `man git-config` in the [Terminal](/wiki/Terminal).

# Useful aliases

    # support habits from Subversion/CVS
    git config --global alias.st status
    git config --global alias.co checkout
    git config --global alias.ci commit

    # show difference between the HEAD and the index
    git config --global alias.staged "diff --cached"

    # show difference between working tree and the index; seeing as this is just a synonym for "diff" I almost never use it
    git config --global alias.unstaged diff

    # show staged and unstaged changes (what would be committed with "git commit -a"); I almost never use this
    git config --global alias.both "diff HEAD"

    # quick access to oneline log format
    git config --global alias.oneline "log --oneline"

    # I'm always amending, so "git amend" is easier than "git ci --amend"
    git config --global alias.amend "commit --amend"

    # misc
    git config --global alias.abbrev 'rev-parse --short'

# Global ignores

Directory-specific ignores can be specified in a file called `.gitignore` at the top of the directory.

Repository-wide ignores can be specified in `.git/info/exclude`.

Global ignores can be placed in a file of your choosing (for example, `~/.gitignore`) and turned on using:

    git config --global core.excludesfile ~/.gitignore

An example `~/.gitignore` file might be as simple as:

    .DS_Store

For more information type:

    man gitignore

# PGP setup

[Git](/wiki/Git) supports signing of tags using [PGP](/wiki/PGP) keys.

    # download latest version of GnuPG
    wget "ftp://ftp.gnupg.org/gcrypt/gnupg/gnupg-1.4.7.tar.bz2"

    # verify integrity of download
    openssl sha1 gnupg-1.4.7.tar.bz2

    # extract 
    tar xjvf gnupg-1.4.7.tar.bz2 
    cd gnupg-1.4.7

    # build
    ./configure
    make
    make check

    # install
    sudo make install

    # create a new private/public key pair
    gpg --gen-key

    # export ASCII version of public key
    # (to upload to homepage or public keyserver)
    gpg --export -a

To actually sign a tag you pass the `-s` (or `-u`) flag to `git-tag`.

# `gitk` setup

`gitk` works out of the box; for example:

    # clone an existing repository
    git clone git://git.kernel.org/pub/scm/git/git.git

    # inspect repository history using gitk
    cd git
    gitk

Although `gitk` works with no modifications, it [can be tailored](http://scie.nti.st/2006/12/20/gitk-on-mac-os-x-screenshot) to use more readable fonts; I added these lines to my `~/.gitk` file:

    set mainfont {Monaco 10}
    set textfont {Monaco 10}
    set uifont {Monaco 10}

A superior alternative to `gitk` is [QGit](/wiki/QGit), although it requires compilation.

# See also

-   [Git cheatsheet](/wiki/Git_cheatsheet)
-   [Git cookbook](/wiki/Git_cookbook)
-   [Git recipes](/wiki/Git_recipes)
-   [Creating and submitting a patch via email with Git](/wiki/Creating_and_submitting_a_patch_via_email_with_Git)

