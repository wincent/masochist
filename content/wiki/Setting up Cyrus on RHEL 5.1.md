---
tags: red.hat cyrus
cache_breaker: 1
---

## Background

As part of my migration from [Rackspace](/wiki/Rackspace) to [INetU](/wiki/INetU) I moved from [RHEL 3](/wiki/RHEL_3) to [RHEL 5.1](/wiki/RHEL_5.1). I saw it as an opportunity to do a bit of "spring cleaning" and select the most up-to-date, standard, supported, [Red Hat](/wiki/Red_Hat)-backed tools that I could.

Part of that entailed moving from [UW-IMAP](/wiki/UW-IMAP) on the old server to [Cyrus](/wiki/Cyrus) on the new server (the supported options on [RHEL 5.1](/wiki/RHEL_5.1) were Cyrus and [Courier](/wiki/Courier); I chose Cyrus purely because it was listed in the [Red Hat](/wiki/Red_Hat) [docs](/wiki/docs) as the "standard" [IMAP](/wiki/IMAP) software, despite the fact that I had previous experience with Courier on [FreeBSD](/wiki/FreeBSD)).

I created local user accounts (real accounts, but without shell access) for each email account and enabled [Cyrus](/wiki/Cyrus) in `/etc/mail/sendmail.mc` as suggested in the comments:

    dnl # For using Cyrus-IMAPd as POP3/IMAP server through LMTP delivery uncomment
    dnl # the following 2 definitions and activate below in the MAILER section the
    dnl # cyrusv2 mailer.
    dnl #
    dnl define(`confLOCAL_MAILER', `cyrusv2')dnl
    dnl define(`CYRUSV2_MAILER_ARGS', `FILE /var/lib/imap/socket/lmtp')dnl

Little did I know that this would end up causing me problems later.

## The mailstorm problem

In the configuration suggested above you could find yourself on the receiving end of a mailstorm. This stems from the fact that [Cyrus](/wiki/Cyrus) is designed to work with "virtual" accounts (not real accounts on the system), and so [sendmail](/wiki/sendmail) has no way of knowing whether email accounts really exist. Furthermore, the Cyrus mailboxes are in a custom format which sendmail can't write to and so it must delegate responsibility for this to Cyrus.

The mailstorm problem therefore arises as follows:

1.  Spammers connect to [sendmail](/wiki/sendmail)
2.  Attempt to send to dozens, hundreds or thousands of addresses, most of which do not exist
3.  Sendmail accepts all the messages, then passes them on to [Cyrus](/wiki/Cyrus)
4.  Cyrus generates a bounce for each non-existent user
5.  Bounce message is transmitted by sendmail to remote hosts, but in many or most cases the spammer has used a false email address, so the bounce is itself bounced back to the local postmaster

So this is really a double problem because you're generated bounces which you shouldn't be generating (better to refuse delivery as soon as the spammer attempts to deliver to a non-existent user) and then again because most of your bounces generated another wave of bounces, but these latter ones pile up in your postmaster inbox.

## One solution

One solution is to somehow teach [Sendmail](/wiki/Sendmail) to query [Cyrus](/wiki/Cyrus) about whether a user account exists in real time. Then it can refuse delivery immediately for non-existent users and no bounce message is generated, solving the mailstorm problem.

I tried for many hours to get this solution working but I was unable to iron out all the flaws. As soon as I got real-time look-ups working (using the [smmapd](/wiki/smmapd) provided with [Cryus](/wiki/Cryus) and some custom [Sendmail](/wiki/Sendmail) configuration) I found that incoming mail deliveries were seemingly getting dropped on the floor. In reality they were actually getting delivered via the local mailer to `/var/spool/mail` rather than to the Cyrus mailboxes, so no mail was really lost.

## Another solution

I finally managed to get an alternative solution working, enabled by the fact that my email accounts are actual [UNIX](/wiki/UNIX) user accounts, even though they don't have login shells. My solution was to disable all [Cyrus](/wiki/Cyrus)-related directives in the `sendmail.mc` — I had only used them because the comments seemed to indicate that this was "the" way to set things up — and instead use [Procmail](/wiki/Procmail) as a local delivery agent.

[Procmail](/wiki/Procmail) can easily pass emails on to [Cyrus](/wiki/Cyrus) using the `deliver` program, but by the time [sendmail](/wiki/sendmail) even invokes procmail it has already checked if a corresponding local user exists and can refuse spam for non-existent users at the right time and thus avoid mailstorms.

[Procmail](/wiki/Procmail) has another benefit which is that it affords easy insertion of other filters into the mail flow ([SpamAssassin](/wiki/SpamAssassin), for example) and allows for per-user customization.

## Yet another solution

Another solution, also leveraging the existence of real [UNIX](/wiki/UNIX) accounts for email, was suggested to me but I never tested it. The idea is to use the [Cyrus](/wiki/Cyrus) mailer but have [sendmail](/wiki/sendmail) check for the existence of local accounts first:

    MODIFY_MAILER_FLAGS(`CYRUSV2',`+w')

## Ensuring that Cyrus launches on boot

When I first set up [Cyrus](/wiki/Cyrus) I left the machine running for over 200 hundred days until it was time to update to a new version of the kernel. Upon rebooting, mail services didn't come back up and the server was issuing temporary failure notices because I had forgotten a key step in the configuration; telling the service to start up Cyrus at boot time:

    sudo chkconfig cyrus-impad on
