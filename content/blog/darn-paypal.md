---
title: Darn PayPal
tags: blog
---

A customer just brought it to my attention that my PayPal order pages are showing up in Spanish, thus making it impossible or difficult for people who don't understand Spanish to complete the purchase. I don't know when this started, whether it is a matter of days or of weeks, nor how many sales might have been lost as a result.

So PayPal, in its wisdom, has decided that it is better to show payment pages in the *seller's* language rather than the buyer's. How can this be considered anything but brain-dead? PayPal thus forces me to select a language (English) for my customers. But what happens if the customer doesn't speak English? And aren't there [already technologies available](http://www.w3.org/International/questions/qa-accept-lang-locales) for users to specify what language they want to see web pages in rather than have the choice made for them?

A search on Google for "paypal language" turned up [this page](http://www.paypaldev.org/topic.asp?TOPIC_ID=8315) and [this one](http://www.paypaldev.org/topic.asp?TOPIC_ID=10677). When I log in to PayPal with my Spanish account it displays for me in English but my own language preferences show that "Spanish" is selected. If I change that to "US English" and refresh the page PayPal informs me that my preference is "Spanish" but it displays everything in English anyway. Way to go, PayPal.

So I've gone through all my pages and added en extra language parameter to all of my PayPal links specifying that the pages should be displayed in English. Very disappointing that I should have to do that.
