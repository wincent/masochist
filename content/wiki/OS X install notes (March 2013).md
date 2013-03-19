---
tags: homebrew os.x
---

Notes made moving from dying old machine to newer one with a smaller hard drive.

Because the hard drive was half the size, I did a by-hand migration, bringing across only the essential elements. I was also under tight time pressure, so I ended up taking some short cuts that I normally would have avoided (for example, using Homebrew, and letting it "own" `/usr/local` and impose its preference for having my main user run as an administrator; this breaks with my long practice of running as an unprivileged user).

# Base

-   Create admin account
-   Encrypt filesystem

# Software

Install essential software (see [Mac OS X "must haves"](/wiki/Mac_OS_X_%22must_haves%22)):

-   Chrome
-   Chrome Canary
-   iTerm 2 + Solarized color scheme
-   Adium
-   f.lux
-   iStat Menus
-   Isolator
-   Mouse Locator + graphics pack
-   Notational Velocity
-   Skype
-   Skitch
-   VLC
-   OmniDiskSweeper
-   Arq
-   Net Monitor
-   Propane
-   SuperDuper!
-   Slate
-   Spotify
-   Xcode (was going to install only the command line tools to save space, but Homebrew )
-   xScope

# Other

-   [Clipper](/wiki/Clipper) (binary install, not bothering with [Go](/wiki/Go) yet)
-   [Consolas](/wiki/Consolas)
-   `curl https://raw.github.com/timkay/aws/master/aws -o ~/bin/aws`

# Homebrew

```shell
$ sudo chown -R greg:admin /usr/local
$ ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"
$ brew doctor
$ brew install mercurial git tmux zsh vim ruby rbenv ruby-build pwgen nginx tree qt pgp
$ xcodebuild -license
```

# Shell

```shell
$ cd /etc
$ echo /usr/local/bin/zsh | sudo tee -a /etc/shells
$ sudo mv /etc/zsh{env,profile}
$ chsh -s /usr/local/bin/zsh greg
```

# Command-T

To build Command-T against system Ruby:

```shell
$ PATH=$PATH:/System/Library/Frameworks/Ruby.framework/Versions/1.8/usr/bin/ruby ruby extconf.rb
```

# Ruby

```shell
$ brew install rbenv ruby-build
$ rbenv install 1.9.3-p392
$ rbenv install 2.0.0-p0
```

# Preferences and settings

-   perform keychain merge
-   copy:
    -   `~/.ssh` \[and enclosed files\]
    -   `~/Library/Application Support/Adium 2.0`
    -   `~/Library/Preferences/com.adiumX.adiumX.plist`
    -   `~/Library/Application Support/Propane`
    -   `~/Library/Preferences/com.protocool.propane.plist`
    -   `~/Library/Preferences/net.notational.velocity.plist`
    -   `~/Documents/Notes` \[notational velocity\]
    -   `~/.awssecret` ( a symlink to either of…)
    -   `~/.awssecret-causes`
    -   `~/.awssecret-wincent`
    -   `~/.gem/credentials`
    -   `~/.chef` (and enclosed files)
    -   `~/.gnupg` (and enclosed files)
    -   `~/.flowrc`
    -   `~/.heroku` (and enclosed files)
    -   `~/.vim_org.yml`
    -   `~/.netrc`

Also:

-   `defaults -currentHost write -g AppleFontSmoothing -int 1`

# Dot-files

```shell
$ mkdir -p ~/personal/unversioned
$ cd !$
$ git clone --recursive git.wincent.com:/pub/git/public/wincent.git wincent.git
$ cd wincent.git
$ ./bootstrap.rb
```

# Misc settings

-   iTerm:
    -   bind `Option-Left` to send the `\033B` escape sequence (move back one word)
    -   bind `Option-Right` to send the `\033f` escape sequence (move forward one word)

