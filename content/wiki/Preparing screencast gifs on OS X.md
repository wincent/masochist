---
tags: screengif screencast wiki
---

# Installation

```shell
$ brew cask install xquartz
$ open /opt/homebrew-cask/Caskroom/xquartz/2.7.7/XQuartz.pkg
$ brew install ffmpeg imagemagick gifsicle
$ sudo gem install screengif
```

# Use

After recording a movie with, say, QuickTime Player:

```shell
$ screengif -i Untitled.mov -o bug-repord.gif
```

# OS upgrades

I found when upgrading to [OS X](/wiki/OS_X) [El Capitan](/wiki/El_Capitan) that I had to reinstall, because screengif was somewho trying to use an old version of ImageMagick. So I just uninstalled and reinstalled everything:

```shell
$ brew cask uninstall xquartz
$ brew uninstall --force ffmpeg imagemagick gifsicle
$ sudo gem uninstall screengif rmagick
```

On upgrading to Sierra I found that things had changed again, and the answer lied in [this Stack Overflow post](http://stackoverflow.com/questions/39494672/rmagick-installation-cant-find-magickwand-h):

```shell
$ sudo gem uninstall rmagick screengif
$ brew uninstall --force ffmpeg imagemagick gifsicle
$ brew install ffmpeg imagemagick gifsicle
$ brew install imagemagick@6
$ brew unlink imagemagick
$ brew link --force imagemagick@6
$ export PKG_CONFIG_PATH="/usr/local/opt/imagemagick@6/lib/pkgconfig:$PKG_CONFIG_PATH"
$ sudo gem install screengif
```

In short, a world of pain, and some voodoo coding until I found what worked.
