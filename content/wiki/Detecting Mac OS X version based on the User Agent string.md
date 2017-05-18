---
tags: development os.x wiki
---

In the past I've always offered a single version of my software products that runs on as many versions of [Mac OS X](/wiki/Mac_OS_X) as possible. This brings with it a certain simplicity (users don't have to care about which version to download and install) but it comes at a cost (tying your application to older versions of the operating system can make it difficult or even impossible to use newer [APIs](/wiki/APIs)).

So with the release of [Leopard](/wiki/Leopard) I am finally going to [branch](/wiki/branch) and offer multiple versions of my products, with each [branch](/wiki/branch) being tied to a particular minimum version of [Mac OS X](/wiki/Mac_OS_X).

To minimize the complexity for customers I want my download page to make a best guess at what operating system they are running and offer the appropriate download as the top choice. You'll notice this kind of customization if you try to download [QuickTime](/wiki/QuickTime) or [iTunes](/wiki/iTunes) from Apple (which tries to offer you the appropriate download for your platform), or [Firefox](/wiki/Firefox) from [Mozilla](/wiki/Mozilla) (which additionally tries to offer you the appropriate language variant).

# [WebKit](/wiki/WebKit) based browsers

It turns out that browser and operating system detection based on [user agent strings](/wiki/user_agent_strings) is a bit of a minefield but thanks to [this handy page](http://developer.apple.com/internet/safari/uamatrix.html) maintained by [Apple](/wiki/Apple) determining visitor OS version is relatively straightforward for [WebKit](/wiki/WebKit)-based browsers.

In summary:

-   [Jaguar](/wiki/Jaguar) corresponds to Safari versions 1.0 through 1.0.3, WebKit versions 85.7 through 85.8.5.
-   [Panther](/wiki/Panther) corresponds to Safari versions 1.1 through 1.3.2, WebKit versions 100 through 312.8.1.
-   [Tiger](/wiki/Tiger) corresponds to Safari versions 2.0 through 2.0.4, WebKit versions 412 through 419.
-   [Leopard](/wiki/Leopard) numbers are not yet available (as of March 2007).

So checking the [WebKit](/wiki/WebKit) version number in the [user agent string](/wiki/user_agent_string) will provide a reliable way of determining the visitor OS version for people running [Safari](/wiki/Safari) and may also work for other browsers that use [WebKit](/wiki/WebKit) such as [OmniWeb](/wiki/OmniWeb).

Needless to say these [user agent strings](/wiki/user_agent_strings) should only ever be taken as advisory, not definitive, and you should always offer your users alternative choices in the event that the auto-detected default turns out to be something other than what they want.

# [Gecko](/wiki/Gecko)-based browsers

After the [WebKit](/wiki/WebKit) based browsers [Firefox](/wiki/Firefox) is probably the most popular. It's native sibling, [Camino](/wiki/Camino), is also powered by the [Gecko](/wiki/Gecko) rendering engine and has a sizeable minority following. As far as I know [Firefox](/wiki/Firefox) runs on any version of [Mac OS X](/wiki/Mac_OS_X) from [Jaguar](/wiki/Jaguar) and up so there is no easy way to detect operating system based solely on the version number, although if the [user agent string](/wiki/user_agent_string) indicates an [Intel](/wiki/Intel) processor then we know that the visitor is running at least [Tiger](/wiki/Tiger).

# [Internet Explorer](/wiki/Internet_Explorer)

Not updated in years this browser is now so old that it's probably not worth considering.

# [Opera](/wiki/Opera)

Quite popular on other platforms, [Opera](/wiki/Opera) for [Mac OS X](/wiki/Mac_OS_X) is much less important, numerically speaking. For the time being I won't be making any effort to auto-detect the visitor's operating system for users running [Opera](/wiki/Opera).

# [iCab](/wiki/iCab)

Another minority browser probably not worth supporting.

# Resources

-   "Safari Developer FAQ": <http://developer.apple.com/internet/safari/faq.html>
-   "Safari and WebKit Version Information": <http://developer.apple.com/internet/safari/uamatrix.html>
