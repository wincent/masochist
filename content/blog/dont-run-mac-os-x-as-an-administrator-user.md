---
title: Don't run Mac OS X as an administrator user
tags: blog
---

In the past my advice, and that of pretty much everyone that matters, has always been "don't run Mac OS X (log in to the graphical user interface) as the root user". It's just a basic security tenet that you should always run with the minimum privileges necessary and only elevate them, temporarily, when necessary.

Nevertheless, I've always run Mac OS X (logged in to the graphical UI, that is) as an administrator user (but not root) rather than a regular, unprivileged user because root-privileged operations still require a password. That is, nothing should run with root privileges without you first being prompted for authorization.

But after reading [this article](http://www.macgeekery.com/tips/security/how_a_malformed_installer_package_can_crack_mac_os_x) my advice has changed. Turns out that there is a security hole in the Mac OS X installer (and yes, it is a security hole in my opinion) that allows an installer to perform tasks as root *without prompting for authorization*. It's not the root-powers thing that bothers me, it's the fact that privilege escalation happens silently, automatically and without prompting.





[The article points](http://www.macgeekery.com/tips/security/how_a_malformed_installer_package_can_crack_mac_os_x) to an [Apple discussion board topic](http://discussions.apple.com/thread.jspa?threadID=575176) that brought the issue to the author's attention. Paraphrasing, the short version is this:

> An installer package which asks for *administrator privileges* (not root privileges), if run by an administrator, can actually get *root* privileges without the user being prompted for a password. This is because `sudo`, or its low-level API equivalent, `AuthorizationExecuteWithPrivileges`, is used to run pre- and post-flight scripts in the installer package as root. In other words, anything you can do in a script, you can do as root, and the user will have no idea.

The [Apple Documentation](http://developer.apple.com/documentation/DeveloperTools/Conceptual/SoftwareDistribution4/Concepts/sd_permissions_author.html#//apple_ref/doc/uid/20001769-1038171) doesn't fully confirm the problem, but it does note that installer packages asking for "Administrator" privileges get them, "Authorization not required", when run as an admin user. What it fails to mention is that the shell-script portions of the installer package will be run with root privileges, not administrator privileges.

Why does this matter? It means you now have to care a lot more about the place where you get installer packages from. In the past, I mistakenly believed that the installer would always prompt me for my password before making any changes to a part of the file system for which I did not have access — you always had the chance to think twice, ask why is this package asking for root privileges?, and investigate further or cancel before proceeding — but this security hole means that that is not the case. It means that an innocently malformed or maliciously-prepared installer package could literally wipe out your whole system, do anything it wants, write over critical, root-owned files, and all without prompting for a password.

Don't get me wrong: the basic principle of not running executables or installing packages from untrusted sources has always applied. The difference is in the level of potential damage that can be done without warning. In the past you stood to lose only those files for which you had write privileges; but thanks to this hole you now stand to lose absolutely everything. That is a lot to risk.

So my new advice is now the following: don't log in to your administrator account, ever. Create a new account with administrator privileges and then demote your existing account to a regular, unprivileged user. It's the only way to guarantee that when an installer package wants administrator *or* root privileges that you'll be prompted for a password.

Given that Apple's default policy is to grant administrator privileges to the first account created on a machine this is alarming problem and many people could be vulnerable. I hope that they fix the problem very, very soon; the fix should be simple: don't run installer shell scripts as root when they only request "administrator privileges" and an administrator is logged in, run then as the administrator user instead.

Running from a totally non-privileged account does mean that you'll have to supply an administrator username and password more often, even for simple operations like copying an application to the `/Applications/` folder, and you won't be able to use `sudo` directly from the shell anymore (you'll first have to `su` to an administrator account, then use `sudo` from there), but given the stakes involved it seems that it's a price that you have no choice but to pay.

#### Update: 29 November

Looks like Apple has no [addressed this issue](http://docs.info.apple.com/article.html?artnum=304829) in a security update:

> Admin users are normally required to authenticate before executing commands with system privileges. However, the Installer allows system privileges to be used by Admin users when installing certain packages without requiring authentication. This update addresses the issue by requiring authentication before installing software with system privileges.

In light of this change I've added myself to the `/etc/sudoers` file, although I am continuing to run Mac OS X from an otherwise unprivileged account. This means I can do stuff like `sudo make install` (still requiring a password) rather than have to `su` to an administrator account first.
