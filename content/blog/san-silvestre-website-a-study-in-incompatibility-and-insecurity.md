---
title: San Silvestre website: a study in incompatibility and insecurity
tags: blog
---

For the past two years I've participated in the San Silvestre popular running race through Madrid on New Years Eve. This will be my third year in the 10Km race. As has been the case in previous years, this year's site is guilty of a number of heinous crimes against basic security and compatibility.





#### Compatibility

The website this year is the worst ever. It displayed without errors in both Safari and Firefox, but just like last year, the payment page only works in Internet Explorer running on Windows.

But the experience on Windows isn't great either. The site didn't work at all in either Internet Explorer or Firefox in Windows until I updated to the latest version of the Flash player, and no error message was shown when accessing the site with an older version installed. After upgrading the Flash player both browsers displayed the site, but as before the payment page provided by [iberCaja](http://ibercaja.es/) didn't work in Firefox. Worse still, the payment page wouldn't even open in Internet Explorer. I tried many times and on different days. I also tried with Opera; just like with Firefox the payment page refused to work.

In all cases where the payment page didn't work, you would enter your credit card details, expiry date, security code, and press the (JavaScript-driven) submit button, only to find that nothing at all happened. I tried hacking the page source code using the Web Developer extension for Firefox, but there was nothing I could do to get the form to submit. Neither could I copy the form address back into Internet Explorer because it evidently depended on private data posted from the San Silvestre website. Being Flash, there was no way to inspect the source code of the site and work out how to correctly post to the payment form.

Compatibility crimes summary:

-   San Silvestre site requires ultra-recent version of Flash player.
-   San Silvestre site doesn't fail gracefully if required version is not present; fails silently (blank page).
-   San Silvestre site, in order to jump to the payments page, requires Internet Explorer, running on Windows.
-   San Silvestre site doesn't explicitly mention requirements anywhere.
-   San Silvestre site gets bonus points for allowing user to uselessly invest time filling out forms before failing.
-   San Silvestre site's use of Flash prevents trouble-shooting efforts that would have been possible by inspecting HTML source.
-   iberCaja payment page unnecessarily relies on JavaScript.
-   iberCaja payment page only works in Internet Explorer running on Windows.
-   iberCaja payment page doesn't explicitly state its requirements anywhere.
-   iberCaja payment page doesn't degrade or fail gracefully in other browsers, or if you try with JavaScript turned off.
-   iberCaja payment page also gets bonus points for allowing the user to uselessly invest time filling out forms before failing, and *bonus* bonus points for overriding the default movement behaviour between text fields (make an error typing in your credit card number and you'll find that you can't shift-tab back in order to correct it).

#### Security

Security crimes summary:

-   The San Silvestre website allows you to obtain the DNI (national identity document) number of anyone participating merely by knowing or guessing their email address (with around 20,000 participants, it shouldn't be too hard to locate a target).
-   If you also know the participant's date of birth you can then find out their address, phone numbers, even their shirt size. You may also be able to find out their running club and whether or not they have their own "chip".
-   Given the DNI, the San Silvestre website allows you to find out the full name, surname(s), date of birth, and sex of the participant.

This is the most basic security stuff. Disappointing that they can't get it right.

#### General cluelessness

After trying many times I noted with some alarm that there were less than 1,000 places left in the race and decided to go to one of the listed registration points (mostly Nike stores around Madrid) only to find that entries were exhausted wherever I went. The helpful folks in the stores told me that my best bet was to register via the Internet. As if I hadn't already tried...

The 902 (high cost) phone number listed on the San Silvestre website didn't work (calls simply dropped out mid-way through). By the time I got home the website had been updated to indicate that places were no longer available at any of the outlets and that the only way to register was via the Internet.

In my desperation I thought I'd give it one more try. Turns out that the solution in the end was to *not* use the "sign up again" link that the organizers had emailed me weeks before. This was a link that prepopulated the form for me with my details from the previous year. By forgetting about this link and going in directly from the front page and typing in the form details from scratch I found that things finally worked: Internet Explorer on Windows XP SP2 finally allowed me to open up the payment page and make my payment.

In switching to this alternate method I also noticed that several bugs which manifested themselves in the prepopulated version of the form were no longer present. For example, the website no longer informed me that I had to specify my sex even though it was clearly already specified. Yet more evidence that this site is inadequately-tested, incompatible, insecure, poorly-designed trash. However got pad for developing the site is little better than an incompetent con-artist.

All in all my repeated registration attempts and the time wasted trying to enrol in person cost me about two hours. I hope they improve the site for next year.
