---
title: Shock/horror: "McAfee apparently sends passwords to users in plaintext"
tags: rant
---

Just saw [this story](http://blog.dreid.org/2009/04/mcafee-apparently-sends-passwords-to.html) on [Reddit](http://www.reddit.com/r/programming/), which describes how "a so-called security company is storing and transmitting their customer's passwords in plaintext". The story cites an example email that contains something like this:

> You have requested that we email you your McAfee Security Password.
>
> Here is your complete login information:
>
> -   Email address: <foo@example.com>
> -   McAfee Password: secret

I know it's a [stupid waste of time](http://xkcd.com/386/) to argue on the Internet, but I can't resist making a few comments on this issue.

# Storing passwords as plaintext

So, let's talk about the first charge against McAfee.

From the email we can deduce that McAfee is either storing user passwords in plaintext or in some encrypted-but-reversible form, otherwise it wouldn't be able to mail out password reminders like that.

Sure, it would be better to instead store the password in some kind of salted and hashed form instead, but let's not lose perspective here. Storing password hashes is only marginally more secure than storing them in plaintext. (If your database is compromised you are usually hosed anyway, regardless of how your passwords are stored.)

Using properly salted hashes is but one layer in a solid "[defense in depth](/wiki/defense_in_depth)" strategy. You *should* be doing it. But if the rest of the system is well-engineered then failing to implement *one* layer is a lost opportunity and not necessarily a grievous security shortcoming. In any case, it's certainly not worth making a fuss about on one's blog. (As you can see, I actually care more about the *response* to McAfee's design than the design itself.)

# Sending passwords in plaintext

Onto the second charge: that they're sending said plaintext passwords in unencrypted, easily-snoopable email.

Really the same argument applies here. This is another lost opportunity to make things secure and not in itself the end of the world.

Compare it with the alternative: sending a link to a special page that the user can use to reset their password. Those links are equally amenable to snooping and if intercepted can just as easily be used to take control of someone else's account.

My general impression as a user of a number of different web apps is that while only a small number of them commit the *faux pas* of sending passwords in plaintext, the *immense majority* choose the equally insecure method of sending out links that can be exploited to the same effect. Why then all the fuss about McAfee?

# Making things more secure (or at least, less *insecure*)

I know of two more layers that can be fairly easily added to the "defense in depth" strategy used to turn the "forgot password" functionality from something only very weakly secure (basically a form of "[security through obscurity](/wiki/security_through_obscurity)"; hoping that nobody will happen to snoop on your email traffic, and if they do that they won't care enough about your insignificant account to actually do anything about it) into something somewhat more secure.

-   One is to make your "reset password" links time-sensitive, expiring them after a short interval to minimize the window of opportunity for an attack (either a directed attack where your adversary intercepts your email message, or brute-force approach where the attacker tries to search the "key space" of the "reset links" until they find one which works).
-   Another is to require that the user enter their email address when they get to the "reset password" form; this will protect against brute-force attacks where the email is unknown to the attacker, but it doesn't help in the case of intercepted messages.

Despite the ease with which these measures can be implemented, it appears that basically nobody is taking these steps.

A third layer, slightly more cumbersome, helps against both brute-force and directed attacks, but it is implemented even less frequently than the measures I've already discussed.

Here I'm talking about those dreaded "security questions", like "what was your mother's maiden name?" and the like. These too constitute an imperfect technique, but one hopes that with enough imperfect layers in a defense-in-depth strategy, the imperfection of the system as a whole gradually trends downwards.

# Keeping things in perspective

I guess my point here is that we need to keep things in perspective. Good security is about being thorough and trying to eliminate or minimise insecurity at every level of a multi-layered system. The most common thing is for even the best-engineered systems to fall down on at least one level, perhaps more.

But if one *does* happen to discover a flaw on one of these layers, there's no need to run off screaming into the blogosphere ringing alarm bells and decrying "FUCKING SECURITY FAIL". It's really just par for the course and nothing remarkable at all.
