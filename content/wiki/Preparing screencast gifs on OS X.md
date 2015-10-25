---
tags: screengif screencast
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
