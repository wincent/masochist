---
title: Let me clear that up for you
fb: https://www.facebook.com/glh/posts/10153341605011307
twitter: https://twitter.com/wincent/status/724142651189026816
tags: blog
---

Based on various things I've read on the internet, there seems to be a bit of confusion about what kinds of tools people should be using to get their shit done. Posts about "Top 10 X for Y" and such. Let me clear that up for you.

There is only one true way to configure and use a computer, and after many years of trial and experimentation, I have found out what that way is. To save you all the trouble of going through that lengthy process yourself, I've prepared the following cheatsheet for you to use as a reference.

This will be particularly useful if you find yourself embroiled in a religious war. You may, for example, think that the devout of the Church of Emacs are justly battling it out with those who hold to the creed of Neovim. I'm here to clarify for you that this is all just an illusion. There is only one correct choice for editing, and anything else is not heresy: it's just plain incorrect.

So, without further ado, I present my list.

# How to be right

## Version control

[Git](/wiki/Git) is the best version control system. Choosing [Mercurial](/wiki/Mercurial) is incorrect. Choosing anything else is absurd.

## Text editing

[Neovim](https://neovim.io/) is the best editor. You can be forgiven for thinking that [Vim](/wiki/Vim) is the best editor — it used to be — but Vim is to Neovim as the Old Testament is to the New; you're advised to install the latest version for maximum compatibility with modern reality. Using [Emacs](http://www.gnu.org/software/emacs/) is permitted only for ironic purposes (note that this includes using Emacs with [the "Evil" layer](https://www.emacswiki.org/emacs/Evil) or with [Spacemacs](http://spacemacs.org/)).

Using a full-fledged IDE is unjustified, unless your employer forces you to do so, in which case it is weakly justified. For each hour you spend at work in the IDE, you should spend 15 minutes hacking on side-projects in Neovim outside of work hours, to prevent your mental clarity from being diminished. Note that due to Neovim's efficiency, you can expect an order of magnitude more productivity in it despite spending only 25% as much time.

## Code font

You should be using Adobe's [Source Code Pro](http://adobe-fonts.github.io/source-code-pro/) in its "Light" weight. You may be forgiven for using [a baseline-corrected version](/wiki/Fixing_the_baseline_on_the_Consolas_font_on_OS_X) of Microsoft's [Consolas](/wiki/Consolas), but only if you didn't know about Source Code Pro (and now, you do). Using any other font is, by definition, invalid.

## Color scheme

You should use the `bright` scheme from [Base16](http://chriskempson.com/projects/base16/). Under extremely bright ambient conditions, you may switch to `grayscale-light`. Other color schemes are factual errors and should be erased.

## Operating systems

macOS is the best desktop operating system. It is permitted (encouraged, even) to install Windows _only_ for playing games. You may install Linux — [Arch Linux](https://archlinux.org/), as is ordained — only if you enjoy tinkering on the side, or your employer forces you to use a non-Apple laptop. (Oh, that reminds me: it is a logical fallacy to buy a non-Apple laptop.)

For mobile, [iOS](http://www.apple.com/ios/) is the only logical choice (all other choices are illogical, especially Android). Note the corollary here, which is that [the iPhone](http://www.apple.com/iphone/) itself is the only logical choice of mobile phone.

On the server, you should be using a Red Hat-ish strain of Linux, specifically, [Amazon Linux](https://aws.amazon.com/amazon-linux-2). This is because you should be using [AWS](https://aws.amazon.com/) for your cloud computing needs. (And on the subject of Amazon, make sure that you use a [Kindle](http://www.amazon.com/kindle), because all other e-readers are suboptimal.)

## Window management

[Hammerspoon](/wiki/Hammerspoon) is the correct way to manage window layouts, and specifically, the right way to use it is to configure it [like I do](https://github.com/wincent/wincent/tree/master/roles/dotfiles/files/.hammerspoon). Anything else is wrong.

## Shell

[Zsh](http://www.zsh.org/) is the only correct shell. Using Bash is a violation of the laws of physics, so please stop it before you create a dangerous wormhole in the fabric of space-time. Fish is a clever joke, only to be used at parties where there is a lot of alcohol.

While we're on the subject of configuration, you should install or steal shamelessly from [my dotfiles](https://github.com/wincent/wincent). Working with an exact, up-to-date copy is 100% correct. Each deviation from that takes you one step farther from perfection. I reserve the right to alter the definition of perfection at any time without notice (other than via adding new commits to the "main" branch).

## System configuration

In olden times, [Ansible](http://docs.ansible.com/) was the anointed solution for all things configuration-related[^ansible]. Using Puppet or Chef instead was at best erroneous and at worst a case of brazen heresy. However, the Ansible project slowly evolved in a direction that made it ill suited for this use case. You are now better off rolling your own bespoke, over-engineered, and unique snow flake, [like I did](https://github.com/wincent/wincent/blob/c102061e2d3324808302f372d6d50ae8731380db/fig/README.md), and using that.

[^ansible]: Note that this was true even if you had nothing to configure; if that was the case, you had best create an excuse for using Ansible, such as needing an elaborate and convoluted mechanism for installing your dotfiles.

## Calendar, Mail and "Todos"

After an exhaustive search, I have established that [Fantastical](https://flexibits.com/fantastical) is the best calendar, the [Fastmail iOS app](https://apps.apple.com/us/app/fastmail-email-calendar/id931370077) and the [Fastmail website](https://www.fastmail.com/) inside [Chrome](https://www.google.com/chrome/browser/desktop/) on the desktop are the only way to read and send email, and [Things](https://culturedcode.com/things/) is the best todo list.

Beware of your choices here: choosing to use Microsoft Outlook is as bad as using child labor to produce internet-enabled home thermostats, and picking an email provider like Google is morally equivalent to destroying the Amazonian rain forest.

## Backup solution

You should backup your data with [Arq](https://www.arqbackup.com/). Using Time Machine is a faux pas. All other alternatives are ill-advised.

## Keyboard

### Layout

You should be using [Colemak](/tags/colemak). Any other layout is incorrect, with Qwerty being the most incorrect of all possible layouts.

### Customization

[Karabiner-Elements](/wiki/Karabiner) is the only right way to configure your keyboard. Additionally, there is only one admissible configuration, which can be found [in my dotfiles](https://github.com/wincent/wincent/blob/master/roles/dotfiles/support/karabiner.js).

### Hardware

Only [Topre switches](https://deskthority.net/wiki/Topre_switch) are viable. All other keyboard switches are unfunny jokes (Cherry MX switches may get a laugh or two, however, before they get booed off stage).

If in doubt about what kind of Topre-equipped keyboard you should buy, just buy [any Realforce keyboard](https://elitekeyboards.com/products.php?sub=topre_keyboards).

## Terminal

Use [iTerm](http://www.iterm2.com/) or [Kitty](https://sw.kovidgoyal.net/kitty/), unless you want to be wrong (but note: wanting to be wrong is itself wrong). Use [tmux](/wiki/tmux) for terminal multiplexing, and never [screen](/wiki/screen).

On the subject of GUI versus terminal, remember to use Neovim and tmux preferentially over MacVim. The former is self-evidently correct.

## Secret management

Store your secrets in [1Password](https://1password.com/). Using the same password everywhere, using weak passwords, failing to use a password management solution at all, or using any password management solution other than 1Password are all indistinguishably wrong.

## System add-ons

Failing to install [iStat Menus](http://bjango.com/mac/istatmenus/), [Bartender](http://www.macbartender.com/) and ~~[Alfred](https://www.alfredapp.com/)~~ [Raycast](https://www.raycast.com/) is a configuration error and should be corrected at your earliest convenience.

# Conclusion

I hope this has been helpful. Depending on your pre-existing degree of enlightenment, I expect this list to save you a _lot_ of time, and affect your life anywhere from transcendingly to profoundly. Feel free to [tweet](https://twitter.com/wincent) or [email](mailto:greg@hurrell.net) me your appreciation.

<small><em>Discuss: [Facebook](https://www.facebook.com/glh/posts/10153341605011307) - [Twitter](https://twitter.com/wincent/status/724142651189026816)</em></small>
