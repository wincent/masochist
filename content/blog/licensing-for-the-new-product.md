---
title: Licensing for the new product
tags: blog
---

I like to experiment with different licensing models. In the past I've released applications as closed-source commercial software, shareware both with and without serial numbers, with and without product activation, open source free software (with the possibility of donations) under a variety of licenses (BSD, Omni Source License, the GPL), and binary-only "freeware" (public domain).

Each of these has its strengths and weaknesses.





Open source/free software, for example, is good for public relations but not so good for the bank account; at least that's the way it is with very small (one-person) open source projects: one person does all the work and can expect little or nothing (*really*, nothing) in the way of collaboration from outside, and the income is in general insufficient to cover the distribution costs let alone the development time. Basically, the only reason I can afford to do any open source work is that I do non-open source work too.

Closed-source, non-free software tends to be better from an income perspective, and you can place your product anywhere along a compliance enforcement spectrum that ranges from "no enforcement" to "dongles, hand-cuffs, and oaths signed in blood". In my experience "honesty" systems basically don't work (of the type, "check the box if you've purchased"); you need some kind of enforcement. Serial numbers generally have a huge positive impact on sales, although cracks are a constant threat. Activation schemes have to be extremely well-thought out and executed if they are to meet their goal of increased license compliance without annoying your customers.

So for the new product I was toying with the idea of trying a model I hadn't used before: instead of the "download the demo and unlock full functionality upon purchase" model I wondered if it might be worth distributing something that really was only a demo (no unlocking), and the purchaser would be able to download a full, unlimited copy upon purchase. Cracks would be no threat because the demo really would be just a demo. But to compensate the customer for the inconvenience of having to download two different programs (the demo and the real thing) the full version wouldn't have any serial number or license code. The risk there would be a full version somehow "leaking" out into the wild and getting shared among pirates, but I was still curious to see how it might work out.

In the end though there's been one factor that has squished the idea of trying out the new model: the application in question requires an installer. I'd feel ok about asking customers to download two programs, a demo and a full version, but I wouldn't feel ok about asking them to *install* twice. It's just too much hassle, no matter how slick the installer is.

So yesterday and today I've been working on refactoring my licensing engine (the same one used in Synergy Advance) out of WOBase and into WOCommon. I didn't want to just use WOBase because its quite a large framework now and the application I'm talking about is lightweight. This is code I started working on in 2003 and has undergone many iterations since that time. I figure that after investing so much time and effort in it that I'll do well to put it into a form that I can use it in more easily in more products.

One side effect of the refactoring is that it's not just moving stuff around: whenever you refactor you also review your code with fresh eyes; tighten things up, make them more elegant, perhaps squish a bug or two, write a test for a missing corner case that you spot...

The good news about using the existing licensing engine is that all the infrastructure is already tested and in place, so I'll be able to release the product sooner. You see, I am due to go on a short holiday for about five days later this month; and I was reluctant to release any new products before going away because I wanted to be "on deck" to field any inquiries. Using the tried-and-tested infrastructure means I can be away with limited access and know that the automated transaction handling routines, license code mailers, and lost registration interface will all just work.

Now the only thing that can stop me from releasing the app before I go away is not getting the first version of documentation and the website done in time...
