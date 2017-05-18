---
tags: subversion wiki
---

As [noted here](http://www.friday.com/bbum/2006/09/12/subversion-14-adds-keychain-support/), to switch to Keychain-based storage of Subversion passwords (requires [Subversion](/wiki/Subversion) 1.4.0 or later), you need only remove your `~/.subversion/auth/svn.simple` directory. You'll be prompted for the passwords again the next time you access those repositories, but from that point on they'll be stored in the Keychain.
