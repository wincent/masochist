---
description: Lessons learned (so far) while building a PC
tags: blog
title: Building a PC
---

Back in the late 90s I was making plans to build a PC based on the original AMD [Athlon](https://en.wikipedia.org/wiki/Athlon) processor, basically because I wanted a better game-playing experience than I was getting on my Mac. I regularly read [AnandTech](https://www.anandtech.com/) and [Tom's Hardware](https://www.tomshardware.com/). I knew about northbridge and southbridge chipsets, about Intel codenames like "Willamette", "Northwood", and "Prescott" (fun fact: these chips used 180 nm, 130 nm, 90 nm processes, respectively, which is kind of mind-blowing when you think that AMD is currently using a 7 nm process in its current Zen architecture), and about rumors and future roadmaps.

In the end, I never followed-through on it. If I had been flush with cash I surely would have run out and done it, but I was pretty busy completing my undergraduate studies (and failing to complete my postgraduate studies). And I wasn't flush with cash: I'd sunk a significant chunk of my meagre student savings into a series of Apple machines, so found myself slowly becoming more heavily "invested" — quite literally — in that ecosystem.

The arrival of Mac OS X and pushed me further along that path. It wedded the power and flexibility of UNIX with the thoughtful and delightful UX of Apple's once-great Human Interface Guidelines. Apple enjoyed a brief moment of performance parity or even superiority with the G3 processor, reducing the incentive to get a PC. By 2006 Apple had released its first Intel iMac, solving the performance deficit that had developed by that time, and I didn't think about wanting a PC for a long time. Not until Apple had shown itself to be hopelessly committed to thinness at any cost and started pumping out laptops with garbage keyboards, useless Touch Bars, and crippling thermal throttling issues.

So here we are in 2020 and I am at last putting together a Linux PC, finally fulfilling a 20-year-old wish. I had an outsized amount of fun today setting up case fans and doing cable management. I don't even have all the pieces at this time, so I'm just doing what I can. Some people say building a PC is like "Lego for adults", and I can see why. I'm sure it wouldn't be so fun if I had to do it every day as a job, but when it's a once-a-decade thing, or even rarer than that, it's quite interesting and therapeutic.

I'm not _switching_ to Linux, I'm just relaxing the "one machine at a time" limit that I've stuck to for the last 15 years. I'm keeping my mid-2015 MacBook Pro (still my favorite Mac laptop ever) running macOS 10.13 High Sierra (sticking to the oldest supported version of macOS that I can, because I feel like Apple has lost its way with the subsequent releases). There's too much software on the Mac that I'm not in a position to walk away from yet. But I'm complementing that with a beefy desktop machine that will be great for doing development work because — unlike my Apple machine — I can load it up with RAM at non-extortionate prices, and it won't labor under the burden of devastating thermal throttling. You can put together a very high-end self-built PC for prices that barely get you admission into the Apple store.

Here's the thing though: when I started to look into the state of the PC world, I was horrified to discover just how complicated everything had become in the 20 years since I was last up-to-date. I mean, I don't know if it *really* is more complicated, but it's true that pretty much everything I once knew has been rendered utterly irrelevant.

Let's talk numbers. If you're going to build your own PC you need to pick 7 "main" components (CPU, motherboard, case, memory, GPU, disk, power supply) and the number of combinations is staggering. This is not to speak of equally essential "extras" like keyboards, mice and displays. The decision tree fans out with alarming rapidity: you pick AMD or Intel, which leads you to choose a generation and a model within that generation, which implies a socket choice but then you need to pick a motherboard and therefore a chipset and vendor. So there are two CPU vendors, but dozens of CPUs, and many more motherboard vendors. Even when you've locked in a CPU vendor (eg. AMD, because you want a Ryzen CPU) and therefore a socket type (eg. AM4), as well as a motherboard vendor (say, Gigabyte) and chipset (say, X570), you _still_ have [about 17 AM4 X570 motherboard choices](https://www.gigabyte.com/Motherboard/Socket-AM4) from that vendor alone. Maybe [this 80-minute-long analysis](https://youtu.be/TgI3ilq6h8A) of all just those boards will help you navigate the various tradeoffs between cost, feature-set, build quality, and son on...

A similarly bewildering array of choices remains with respect to RAM, GPUs, cases, and every other category listed above, as well as some additional "auxilliary" things that I didn't even mention, like CPU coolers and case fans. One of the reasons why desktop PCs are so much more powerful than laptops is that the larger form factor permits some incredibly effective (and large) cooling systems that mostly make thermal throttling a non-concern, as well as providing you with the tools to push into over-clocking territory if that kind of things floats your bloat. Do you want to go with air-cooling or water-cooling? If air-cooling, which vendor and model do you want to go with for your CPU cooler? How many case fans do you want? What size? From what vendor? Are you going to go with 3-pin or 4-pin connectors? What's the difference? Which ones will be intake and which ones will be exhaust fans? What's your stance on negative vs positive pressure? What do you think about filtering? If you go with water-cooling, do you want an "all-in-one" thing or a custom loop? From what vendor? How big do you want your radiator to be? Do you want more than one? What kind of thermal paste will you use? And how much? Will you go with "liquid metal" or something non-conductive?

And I'm only scratching the surface here. You probably don't only care about thermals and pricing, but probably noise too. So what kind of case should you get? Want something relatively closed and sound-insulated, or something relatively open which maximizes airflow and allows you to run fans slower and quieter? Choices like these proliferate everywhere you look.

You watch some YouTube videos to guide you on your way, but that doesn't necessarily help at first, because it just overwhelms you with evidence of how much you don't know yet and may never know. And even when you see expert PC builders that have literally millions of subscribers, and whose full-time job consists of building PC from components and reviewing them, there is no shortage of mishaps where you get to see how their newly build machines won't boot, or the components prove to be incompatible, or they commit a human error that ends up frying or breaking some fragile component. Visit a forum like [the "buildapc" subreddit](https://www.reddit.com/r/buildapc/) and you'll find yourself in the company of countless confused others who are trying to fix a screwup or dig themselves out of a hole.

My advice here would be to take it slowly if you can. I've gone from feeling horrified and extremely doubtful that I'd be able to select a compatible set of components at a good price and successfully assemble it, to being relatively comfortable with the idea. The key element has been that I am not in a hurry: I've been able to immerse myself into the PC subculture on YouTube over a period of months, to the point where not only are the names and numbers familiar to me, but I'm also aware of most of the things that could go wrong and what to do to mitigate the risk. I'm not saying I'm an expert yet — I probably never will be; I'm just saying that I feel comfortable now with the idea of trying this.

The good news is that there is a reason why channels like [JayzTwoCents](https://www.youtube.com/channel/UCkWQ0gDrqOCarmUKmppD7GQ), [Gamers Nexus](https://www.youtube.com/channel/UChIs72whgZI9w6d6FhwGGHA), [Bitwit](https://www.youtube.com/channel/UCftcLVz-jtPXoH3cWUUDwYw), [Linus Tech Tips](https://www.youtube.com/channel/UCXuqSBlHAE6Xw-yeJA0Tunw), and [Paul's Hardware](https://www.youtube.com/channel/UCvWWf-LYjaujE50iYai8WgQ) all have north of a million subscribers (and in some cases much more). And those aren't even the only ones, there are many technology channels that have multiple millions of subscribers, and a host of others with hundreds of thousands. YouTube won't hestitate to recommend them to you once you get started.

One of the reasons why these channels are so popular is that human beings love getting themselves all worked up about new stuff, but in addition to that, the content on these channels is often quite entertaining, usually interesting, always rich in information, and sometimes packed with wisdom, insight, or humor. All of which is to say that if you're not in a hurry to learn how to build a PC, you can go deep into this content over a lengthy period, to the point where you can navigate a site like [PCPartPicker](https://pcpartpicker.com/) and without feeling utterly lost.

So I'm doing a slow build of a PC, ordering parts when the price is right and the availability is there. Nobody can get their hands on AMD's new Ryzen 5000 series CPUs (or their new GPUs), and to be honest, that's totally fine, at least for me. It seems that lots of components are in short supply now anyway, partly because these big product launches trigger demand for all other components as people build and upgrade systems, but also because of the pandemic, which has led people to make investments in systems for working and being entertained from home.

Looking on the bright side then, the constrained supply helps spread out the cost over weeks or months, and gives you an extra buffer in which to learn more about building a PC; you even have time to read the manual that comes with your components with a level of patience and attention to detail that you probably wouldn't do if you had a screwdriver in your hand, surrounded by a wall of boxed components, on a mission to complete your first PC build in a day.

This long baking process has definitely helped me steer clear of some potential issues. For example, letting the decision about which case to buy simmer for several weeks gave me the time I needed to change my mind a few times and eventually settle on case that is not only versatile enough to let me explore the trade-offs between sound isolation and air-flow, but also to find something discrete that doesn't have any of the tempered glass side panel and RGB nonsense that seems to be all the rage nowadays, but which I find totally absurd (and which would make my partner want to kill me if I ever brought something so garish and unsightly into our house).

Right now I'm probably about 50% of the way towards a finished system, and having to work towards it like this for so long is going to make me appreciate it in a way that I have never appreciated the Macs that I've owned. It's not that I *didn't appreciate* those; it's just that I appreciated them in a different way. I treasured them like beautiful, fragile, works of art. One of the reasons is that when something goes wrong with them, you can't really fix them — at least, you can't fix them easily. Apple doesn't want you to open the case. They deliberately go out of their way to make them nigh on impossible for mere lay people to repair, ostensibly in devotion to the Church of Thinness.

The PC, on the other hand, is like a pickup truck. The power supply has [a 10-year warranty](https://www.corsair.com/us/en/company/press-release/corsair-extends-select-psu-warranties-from-7-years-to-10-years) on it. The case is brutishly ugly, placing functionality and build quality above aesthetics. If I need to upgrade the PC in 5 or more years from now, I know the case will still be totally adequate. In short, the PC brings to the hardware a large part of the freedom to maintain and modify that I've enjoyed on the software plain since forever (despite Apple's efforts to circumscribe that freedom over the years).