---
title: Bansshee: my answer to SSH dictionary attacks
tags: blog
---

So SSH dictionary attacks are becoming increasingly common. Yesterday my server was hit 2,901 times by a pair of nincompoops trying brute-force dictionary attacks. I think the odds of such an attack succeeding are fairly small:

-   All 2,901 attacks were directed at non-existent accounts which, by definition, can never provide access to the server no matter how many passwords are tried.
-   Most of the existing, standard accounts on the server (like `apache` and `mysql`) have their shell set to `/bin/nologin` and again can never provide access no matter how many passwords are tried.
-   Attacking the root account is useless because remote root logins are disabled; again, no matter how many passwords are tried the attacker will never get access (beginning to see a pattern here?).
-   The machine has a negligible number of other accounts, none of them with easy-to-guess names like "wincent" so it's highly unlikely that an attacker will stumble upon an actual valid account username.
-   [OpenSSH](http://openssh.org/) provides no indication to the attacker what the reason for a failed login might be; the attacker doesn't know whether it's because the account is non-existent, logins are disallowed for that account, or the password is wrong, because in all cases the failure message is "Permission denied, please try again."
-   Even if the attacker does chance upon a valid account username he/she must still brute force the password; not easy to do given that I use lengthy, machine-generated passwords.
-   If an attacker gets lucky and guesses a password for a valid account (about a 1 in 218,340,105,584,896 chance) then he will find himself in a chroot jail limited to the home-directory of the user in question; the worst he can do is delete some files in the home directory using an SFTP client, he [doesn't even get shell access](http://www.pizzashack.org/rssh/).

So the risks of a break-in are low but I decided to do something about it anyway for two reasons: firstly, I'm sick of seeing these attacks listed in my daily LogWatch reports; and secondly, if enough clowns get together and try these attacks (for example with an army of compromised zombie PCs) then it could result in a denial-of-service attack on the server, making it harder for legitimate users to connect. A good auto-banner addresses both of these issues by using the firewall to immediately drop packets from attacking IPs.

I evaluated some of the available solutions but in the end I whipped together my own. It's called Bansshee.





#### DenyHosts

Written in Python, [DenyHosts](http://denyhosts.sourceforge.net/), scans your log files for break-in attempts and blacklists attacking IP addresses by putting them in your `/etc/hosts.deny` file. I rejected this option because I don't like the way it works by manipulating a flat-file, and because it apparently requires a version of Python newer than the one I have on my server. When it comes to things like that I prefer not to upgrade; I'd rather leave it in the hands of trusty old [Red Hat](http://www.redhat.com/) to push out security updates and fixes as required.

#### Fail2Ban

Also written in Python, [Fail2Ban](http://fail2ban.sourceforge.net/), this one works like DenyHosts but instead blocks attackers by using iptables (the firewall). Once again, I had to reject this one because it claims to need a newer version of Python.

#### sshdfilter

[sshdfilter](http://freshmeat.net/projects/sshdfilter/) takes a different approach. Instead of reading your log files it actually serves as a wrapper for the sshd daemon itself, capturing its standard output directly and responding instantly. Much more elegant, much more efficient, but I felt it was too much of an unknown quantity and too risky to deploy for a critical service like SSH (ie. what if there's a bug in the wrapper that ends up locking you out?). Furthermore, it wasn't clear to me whether I'd need to reinstall after every single update to the operating system.

#### sshwatch.pl

My favourite of all is this [short perl script](http://www.cpan.org/authors/id/D/DR/DRAGOS/sshwatch-0.01.pl) by Dragos Constantinescu. Bonus points because it is very short and therefore easy to audit. You can read it and comprehend what it does in a few seconds, assess its strengths and weaknesses and decide with confidence whether it's the kind of thing you want to install on your server. This is not the case with DenyHosts and Fail2Ban, which are both large, complex packages which happen to be written in a language I don't understand (Python).

#### Bansshee

I ended up writing my own, as I always do (do I suffer from "Not Invented Here" Syndrome?).

-   **Perl, not Python:** Not because I think one is better than the other but for the same reason that I write this weblog in English instead of Chinese.
-   **Short:** The first completed version is 214 lines long, easy to comprehend, easy to audit. I am sure a Perl veteran could re-write the script into five lines or less of obfuscated code but my goal is readability and simplicity.
-   **Uses the [File::Tail](http://search.cpan.org/~mgrabnar/File-Tail-0.99.3/Tail.pm) module from [CPAN](http://cpan.org/):** which means that it can "tail" the `/var/log/secure` logfile in a relatively efficient manner and automatically catch things like rotating logs.
-   **Homegrown regular expressions:** written by me based on my analysis of the logfiles on my Red Hat Enterprise Linux ES release 3 system, so I *know* that they're right for my system.
-   **Safe:** Blocked IPs are periodically unblocked, thus eliminating the possibility of a legitimate user getting blocked forever by mistake.
-   **Very simple implementation:** the main thread watches for attacks and blocks IPs; a background thread periodically removes the blocks.
-   **Configurable:** Configure the number of "unknown account" attacks allowed from a given IP address before blocking it (defaults to 5); the number of "incorrect password" attacks allowed from a single IP (defaults to 5); the minimum number of seconds an IP must wait before it gets removed from the blocklist (defaults to 1 hour); the number of seconds that must pass before prior illegal/incorrect attempts are forgotten (defaults to 1 hour); the number of seconds between flushes of the blocklist, removing old IPs (defaults to 5 minutes).
-   **Conservative firewalling policy:** Blacklisted IP addresses are only denied access via SSH; their access to the other services on the server is not restricted (for example, HTTP access), thus reducing the risk of "collateral damage" (ie. on shared network, script kiddie tries to brute force SSH, as a result everybody else on the network loses web accesses).

In the process of doing this I've learnt a lot about iptables (coming from a FreeBSD background I only knew about ipfw). I think the protection should be fairly effective. With the default parameters an attacker can sustain only 5 unknown-user and 5 actual-user-but-incorrect-password attempts per hour without getting blacklisted.

Anyway, so I'm currently testing it. If it performs as I expect I'll publicly release it.

#### Update

Bansshee has been [publicly released](http://bansshee.org/).
