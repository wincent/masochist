---
tags: red.hat git
---

One of the problems with [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux) 3 is that it ships with a very old version of [Perl](/wiki/Perl) and the associated modules are very old too.

During one of my [Git](/wiki/Git) upgrades (see "[Upgrading to Git 1.5.3.1 on Red Hat Enterprise Linux](/wiki/Upgrading_to_Git_1.5.3.1_on_Red_Hat_Enterprise_Linux)") my [gitweb](/wiki/gitweb) installation broke. This was due to [this commit](http://repo.or.cz/w/git.git?a=commit;h=00f429af7bfaa6a9141bc0ac30995d4fae24836a), which requires a newer version of the Encode module than I had installed.

I tried to upgrade the module but failed to do so due to failing tests; I expect that the cause was the age of Perl and the other modules on the system. I eventually deemed that forcing the install to proceed was the most viable option (the other would be patching `gitweb.cgi`).

Unfortunately, when [Red Hat](/wiki/Red_Hat) pushes out automated updates containing security fixes for Perl this can overwrite the newer version of the Encode module with an older one, thus breaking my gitweb installation. When this occurs it is necessary to reinstall the module as described in "[Upgrading to Git 1.5.3.1 on Red Hat Enterprise Linux](/wiki/Upgrading_to_Git_1.5.3.1_on_Red_Hat_Enterprise_Linux)"). If this starts happening too frequently I think I'll just patch gitweb (inconvenient, seeing as it will require me to re-patch it every time I install a new version).
