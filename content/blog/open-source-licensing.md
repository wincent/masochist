---
title: Open source licensing
tags: blog
---

There is a lot of misinformation on the net about the different types of open source licenses so I just wanted to offer some clarification. I am not a lawyer but I am fairly familiar with the major licenses.

All licenses have two sides: freedoms and restrictions. In this discussion I won't delve too deeply into the monetary side of things ("free" as in beer) but will instead focus on the side of freedom ("free" as in liberty). In general it's that side which is the most important one to the people who came up with the major open source licenses (people like [Richard Stallman](http://stallman.org/)); the monetary "freeness" is just a secondary bonus, even if it is one of the key factors in the success and popularity of open source software.





#### GPL and GPL-like licenses

The are two common misconceptions about the GPL. The first is that it is the "most free" of all open source licenses and the second is that the GPL says you're "not allowed to make money" from the software.

##### The "most free"

I often hear people (usually poorly informed Linux advocates) stating that the [GPL](http://www.gnu.org/licenses/gpl.html) is the "most free" of the [open source licenses](http://www.gnu.org/licenses/licenses.html). This is not true.

The GPL grants you the freedom to do almost anything you want with the code, but it also imposes the key restriction that you cannot do anything which would prevent others from enjoying exactly the same freedoms. This is why you can't take GPL code and roll it into a commercial product (unless you release the source code for the product under the same terms) and why people like [Microsoft's](http://www.microsoft.com/) [Steve Ballmer](http://www.microsoft.com/presspass/exec/steve/default.mspx) and [Bill Gates](http://www.microsoft.com/billgates/default.asp) have mischaracterized the GPL as a form of [cancer](http://www.theregister.co.uk/2001/06/02/ballmer_linux_is_a_cancer/) (and [communism](http://www.theregister.co.uk/2001/06/20/gpl_pacman_will_eat_your/), among other things).

Of course, there's nothing cancerous about it. The GPL does not spread itself; *people* who wish to take the code spread it. The conditions of the GPL ensure that anyone who takes the code and wishes to redistribute it must allow others to enjoy the same freedoms. If you don't want your product to be "contaminated" with the GPL then all you need to do is refrain from taking the GPL code in the first place. Microsoft couldn't care less about "cancer": the real reason they don't like the GPL is because they're worried that their own closed source software can't compete in the long term because it's not good enough (MS could learn a lot from [Apple](http://www.apple.com/); Apple knows that the way to win in business is to make the [best products](http://www.apple.com/macosx/) regardless of whether they be open or closed source).

So this is near-total freedom with an important restriction that ensures that that freedom be ongoing. It is therefore not total freedom and it is not the "most free" of the open source licenses; on the other hand, it may well be the most ideologically pure of the free licenses because it embodies the most radical, politicized commitment to freedom.

##### "You can't make money off the GPL"

This is another common misconception. The GPL does *not* say that you can't sell software that is licensed under the GPL. What it *does* say is that if you redistribute GPL software (for example, offering it for download, modifying it or incorporating it into an existing product) then you must make the source code available under the same terms (the GPL license) for free or for a reasonable fee (such as the cost of the media and duplication).

The license preamble is fairly clear about this:

> For example, if you distribute copies of such a program, whether gratis or for a fee, you must give the recipients all the rights that you have. You must make sure that they, too, receive or can get the source code. And you must show them these terms so they know their rights.

In other words, you *can* take a GPL product (let's call it "Linux Distro X") and repackage it and resell it (as "Wincent Linux") and charge $1,000,000 for it. But because it's a GPL product you *must* also make the source available to those to whom you distribute the program, and you must do so for free or for a reasonable fee.

The reason why GPL software tends to be financially free and not $1,000,000 is *not* because the license requires it but because two factors, competition and the fact that the source itself must be made available under the GPL, mean that there will always be a way to get it without paying for it. That drives the price down to "free" or at worst "nearly free".

Companies like [Red Hat](http://www.redhat.com/) make a lot of money off Linux because they sell boxed copies of it with support. But thanks to the GPL they also distribute it for free and you can download it right off their servers even if you are not one of their customers. All the Linux vendors do this and this is why Linux is so extensively used.

#### BSD and BSD-like licenses

The BSD license is more free than the GPL because it doesn't impose that key restriction. Basically, the license says, "you can do anything at all with this software, anything at all, as long as you preserve this copyright notice". That means you could take the code and roll it into a closed source product if you wanted and never give the code back to the community.

For this reason it is "more free" than the GPL but less radical, less politicized. It is the Buddhist license of the open source world (and I say this only half-jokingly). It is more easily taken advantage of by commercial companies; it's well publicized that Microsoft's closed source Windows operating system contains BSD code, which is in perfect compliance with the license. The BSD license gives you more freedoms than the GPL but it does nothing to oblige you to provide those same freedoms to others.

If you compare the licenses it's easy to see why you can take BSD code and release it under the GPL but you *cannot* take GPL code and release it under the BSD. The BSD basically gives you so much freedom that you can decide to limit the freedoms of others (if you're so inclined) but the GPL only gives you freedom up to the point where you cannot use it to limit the freedoms of others.

#### The public domain

The ultimate in freedom occurs when code is released into the public domain. When code is placed under the public domain the author usually says something like, "I'm putting this code in the public domain. You can do whatever you want with it." You can use such code without attribution and without preserving copyright notices (if there are any), you can roll it into closed source products, you can slap any license on it as you see fit. So it is freedom without restrictions.

#### The developer's perspective

As I said above, all licenses grant freedoms and impose restrictions.

Commercial, close source licenses grant few freedoms and impose many restrictions. The GPL grants many freedoms but imposes a key restriction to protect those freedoms. The BSD grants total freedom, including the freedom to put an end to those freedoms, and the only restriction is that the original copyright notices be preserved. Code in the public domain is totally free, owned by no one, and you can do literally anything you want with it. Anything.

As a small software developer I have released code under all of these licenses. If using code from another source I usually choose to preserve the licensing arrangements as put in place by the original author. For example, I released [WinSwitch](http://www.wincent.com/a/products/winswitch/) under the BSD license because that's the license that applied to the [original code](http://www.codingmonkeys.de/map/log/archives/000047.html) which I used as a basis. I have made so many additions and changes to that code that there are probably only a handful of lines that have survived from the original but I still feel that, ethically speaking, the right thing to do is contribute the code I've written back to the community, seeing as "the community" gave something to me before. I could have changed the license (to the GPL, or to closed source, for example) but it just seemed right to preserve the spirit in which the code was originally released.

When releasing code that's been written from scratch it's another ball game. My experiences have led me to believe that open source tends to only work when there is a large base of support in the community. To once again use the example of WinSwitch, no one has ever contributed a bugfix or other patch even though the source code has been downloaded many thousands of times; unless there is a large developer community then there are no real benefits to the open source model. I guess that shouldn't surprise anyone! If I am the only one writing code then of course it makes no difference if the code is readable by the public or not! Likewise, the donation rate is fairly abysmal: about 1 donation per 1,000 downloads, which means that the costs of distributing the software are much higher than the income it generates, and that is not even counting the time invested in writing and maintaining it. I guess I consider it as an advertisement; if it brings some people to my site and they then find out about my other (commercial) products then it might help in some small way to support the business and therefore enable me continue doing what I love doing.

So I think that to work well open source requires either a large developer community (of volunteers) or corporate backing (companies willing to invest in the software, cover distribution costs and pay programmers to work on it). Linux is an obvious example of a project which has both the sizeable community and the corporate backing.

As such, for small developers, I recommend using closed source licensing. Philosophically, I *like* open source, but I also know that if all my projects were open source I would be out of business; it just doesn't work for the small operator. I will continue to make some things available as open source because I like doing it, but I don't think it pays the bills. In these cases I favour the GPL because if I am making a considerable effort to make stuff available to others I don't want them taking that hard work and keeping it to themselves; they should have to provide the same to other people.

Unfortunately, there are a lot of unscrupulous people out there that don't respect the GPL ([this weblog](http://drunkenblog.com/) has documented some notable cases); they simply absorb the code as if it were in public domain and try to make a profit from it. I suppose this is just another unedifying example of human nature to add to [the long list](http://www.wincent.com/a/about/wincent/weblog/archives/2005/05/the_internet_a.php) of cases that we see on the net almost every day...
