---
title: Product activation improvements
tags: blog
---

I've spent the day making improvements to my [product activation](http://www.wincent.com/a/support/activation/) systems and I am fairly pleased with the results. These changes should make the product activation experience (which is already pretty good) even better for customers (when talking about copy protection there are two kinds of improvements you can make: those which make life easier for your customers and those which make life harder for pirates; the changes I've made today belong to the former class).

I started thinking about this earlier this month when a [Synergy Advance](http://synergyadvance.com/) user wrote in asking:

> Is there no way to "deactivate" authentication on a system you're departing?





The user in question works in the press and changes machines frequently. My response at the time was this:

> Knowing that there would be cases like this, when I designed the system I included the ability to reset or increase activation limits. For example, if someone needed to do 100 legitimate reinstalls I could assign a very high limit to their license. I had to rule out the activate-and-deactivate pattern and stick with activate-only for the reasons described further down.\
> \
> The limits (in the case of a single-user license like yours, five installs) have proven to be a good compromise. In the year and a half since Synergy Advance was first released the vast majority have only activated once, and more than 99% of users haven't hit the limit. The handful of users who have hit the limit have contacted me and I've reset their limits. In a case like yours where you've not only hit the limit but you also know that you're likely to hit it again, I can set a higher-than-usual limit so that you won't be bothered by it.\
> \
> It's true that the solution is not perfect but it has proven to be a successful compromise; unlike [Synergy](http://synergy.wincent.com/) which has always been very heavily pirated I've yet to see any Synergy Advance license code leaks. Basically it forces attackers to use cracking (harder) rather than mere license sharing (easier), and it seems to work very well.

With specific reference to the "deauthorization" idea I wrote this:

> I've thought a little about that possibility but it seems that it would weaken the security of the system too much. Evidently it can be done; a good example is the way Apple permits you to authorize and deauthorize computers for playback of music purchased on the iTMS. I'd like to know how they do it, but I can't think of a way to do this securely.\
> \
> Basically, in Synergy Advance "de-activating" amounts to deleting the activation certificate stored in your preferences folder. Synergy Advance would then have to inform the server that it's been deactivated on that machine. But what's to stop an attacker from keeping a copy of the certificate, performing the "de-activation", and then re-installing the certificate manually, thus circumventing the system?\
> \
> Synergy Advance relies on strong cryptography for security and puts the activation certificate in plain sight. If I were to try hiding it somewhere (whether in a file on the disk or in the keychain) to prevent the attacker from pulling the trick described above, then it would be relying on security-through-obscurity, which would defeat the entire purpose of the system (to rely on cryptography instead of obscurity).\
> \
> I don't know how Apple does it with iTunes, but the in-plain-view design of Synergy Advance makes this pretty much impossible. Any "de-activation" scheme would effectively amount to the server trusting the client when it says, "I deleted the certificate, I really did, I swear!", and that goes against sound practice. (As a side note, one of the benefits of the in-plain-view design is that users can easily backup their activation certificates, which is a good thing.)\
> \
> As far as workarounds go there seem to be two, phoning home and obscurity, and neither of them are acceptable:\
> \
> 1. Seeing as users hate apps which "phone home" the current system is designed to connect to the wincent.com server (with the user's permission) once and only once. Once the activation certificate is written to the disk it doesn't connect to the server ever again. This design decision means that I can't do a "re-check the activation with the server on every single run" approach, which would mean that certificates wouldn't need to be written to disk and would solve the server-client trust problem. But you can't require users to be on the Internet all the time so it's simply not an option; maybe in a decade it will be but I don't think the market is ready for it right now.\
> \
> 2. I have thought about approaches to the server-client trust problem using strong cryptography (digitally signed executable to detect tampering, public key challenge-response sequences etc) and none of them seem to be able to address the underlying problem: that the certificate is in the open and can therefore be backed up, and trying to hide it puts us back in the security-through-obscurity camp again.\
> \
> But the system is not set in stone, so as time goes by I will raise the activation limits if necessary across the board, and if I can identify ways to make re-activations less frequent then I'll do that. Likewise if I can ever come up with a secure method for implementing a "de-activation" scheme then I'll be happy to do it.

#### An alternative solution

The goal of the activation system to make life easy for honest customers and harder for pirates. It is not the intention of the system to stop license infringement on a small scale ("user installs software on laptop and desktop machine even though he/she only has a license for a single machine"); it's intended to limit the damage done by mass piracy ("stolen serial number leaks onto net and is distributed to tens of thousands").

So in the wee small hours of the morning before going to bed last night it occurred to me that one way to improve the system would be to grant users additional activations over time. Granting one additional activation per year would be very helpful to customers who upgrade to new machines every year or two, and would do nothing to lessen the efficacy of the system against its stated target (mass piracy). Additionally, this improvement makes good business sense because it should reduce the number of activation-related support inquiries over the long term (over the next 1, 2, 3, 5, 10 years...), thus freeing up more resources for development.

I'm still very interested in the question of "deauthorization", but it really is more of an intellectual curiosity than any intention to actually divert development resources to exploring the question. I know that users would prefer me to work on features so that's what I'm focussing on.

#### The implementation

With some disdain I realized that my product activation database didn't have a "created" date/time field in the licenses table, which meant that I couldn't write database queries like "select all licenses purchased a year ago". A shocking omission, I know. Nowadays I include "created" and "updated" fields in my databases even if I don't anticipate ever needing them, but due to my lack of foresight my licenses table only had an "updated" field, not a "created" one.

Thankfully the necessary modifications turned out to be relatively clean and easy. A single `ALTER TABLE` statement was all that was needed to add the appropriate column in the database, and then thanks to the modular design of the code and the fact that all database access is channelled through a single database abstraction wrapper, there was only one place in the code base that needed to be changed to insert the creation date into the table whenever a new license is issued.

I was then able to go through the database and insert appropriate creation dates (because most of the licenses were accompanied by PayPal Instant Payment Notifications or Kagi KRPS posts and so the purchase date information was available to me), again with a single SQL statement for each one (although I admit that these were fairly ghastly looking). I adjusted the few manually-generated licenses by hand. I prepared a cron script that will be run once per day and update the database, basically awarding users an additional activation per year. Finally, I went all the way back to Day 1 and made the adjustments for licenses purchased more than one year ago so that they would receive the same benefits as if this system had been in place all along.

A little bit more detail about the result can be seen under the heading, ["How many activations may I perform?"](http://www.wincent.com/a/support/activation/#limits) on the [product activation](http://www.wincent.com/a/support/activation/) page. Here is an excerpt, although you should make a point of visiting [the page in question](http://www.wincent.com/a/support/activation/#limits) to be certain that you're reading the most up-to-date information possible:

> At the time of writing (September 2006) the number of activations that may be performed for a single-user license is five. A single-user license permits you to install and run the software on a single machine, but the activation limit is set to five activations, not one, to allow for scenarios such as switching to a new machine, replacing your hard drive, or performing a full system re-install. This is because the spirit of the activation system is to target mass piracy, not penalize honest, paying customers.\
> \
> The number of activations permitted may be adjusted in the future based on experience and feedback from customers. Since the release of Synergy Advance in May 2005, a five-activation limit has proved to be appropriate in the vast majority of cases. An automatic system is in place that performs a yearly revision of each license and that grants users an additional activation per license, per user, per year; this should fit in nicely with the typical pattern in which users upgrade to new machines once every year or two. The additional activation(s) are applied to any license that is in good standing (activation limit not exceeded) and which has been activated at some point in the previous 12 months.\
> \
> If you exceed the activation limit, you may open a support ticket and request that your limit be reset.
