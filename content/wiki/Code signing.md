---
tags: code.signing wiki
cache_breaker: 1
---

# Self-signed vs certificates from a "trusted" Certificate Authority

Self-signed certificates:

-   free
-   a self-signed Certificate Authority can be created using Keychain Access
-   certificates can then be generated at will and signed by the Certificate Authority, for free
-   adequate for providing a stable proof of application "identity" across versions (for example, if a user authorizes access to an item in the keychain by version 1.0 of an application, version 2.0 will also have access)
-   *users are not bothered with warnings about the nature of the certificate authority*

"Trusted" Certificate Authorities:

-   expensive (prices in the $200-$300 per year range are normal)
-   useful if your application is expected to receive incoming network connections *and* the user has the application firewall turned on *and* has also checked the "Automatically allow signed software to receive incoming connections" checkbox in the "Advanced" tab of the "Firewall" settings in the "Security" preference pane

In my view, commercially available code signing certificates simply aren't worth it for Mac OS X. The system, thankfully, doesn't treat self-signed certificates as second-class citizens for most code signing purposes. (This is not the case with SSL certificates, but it certainly is for code signing certificates.)

If your application is expected to receive incoming network connections and you are not using a commercial certificate, your users will be asked the first time and first time only whether to allow such connections. If you use a self-signed certificate then you will still be able to ship updates without the user having to re-confirm their decision for each new release.

# What happens when your signing certificate expires?

-   You can't sign new releases with that certificate
-   Existing (previous) releases continue to work ([Mac OS X](/wiki/Mac_OS_X) ignores certificate expiration in code signing checks)

# How do you migrate from an expiring certificate to a new one?

-   If you switch certificates without warning, users may see annoying dialogs indicating that the application can not be identified as a legitimate update; this is scary and should be avoided
-   Instead, you should:
    -   Long before the old certificate expires, release an update which changes your application's designated requirement such that it is satisfied by both the old and the new certificates; allow enough time for the majority of the user base to update to this release
    -   Sign the update with the old certificate
    -   Later on, once most of the user base has switched to the new release, prepare another release
    -   This newest release should be satisfied only by the new certificate, and should be signed with that certificate

This implies the need for a release schedule and certificate cycle that are fairly long-term.

Source: <http://blog.securemacprogramming.com/2010/04/losing-your-identity/>

# What does Apple have to say about expiring certificates?

This is as close to official word from Apple as I've seen so far, in the form of [a mailing list post](http://lists.apple.com/archives/apple-cdsa/2010/Jan/msg00012.html) by an Apple employee, "Perry The Cynic":

> On Jan 13, 2010, at 2:53 PM, Jeff Johnson wrote:
>
> > Consider this scenario:
> >
> > 1.  MyApp 3.0 is signed with certificate A.
> > 2.  Certificate A expires.
> > 3.  I get new certificate B.
> > 4.  MyApp 4.0 is signed with certificate B.
> >
> > By default, the codesign requirements for MyApp 3.0 would include the SHA1 hash from certificate A, and MyApp 4.0 would include the different SHA1 hash from certificate B. However, I'd like to be able to sign MyApp 3.0 and MyApp 4.0 so that they're recognized as the same application, despite using different signing certificates. My thought would be to use custom requirements like this: identifier = com.mydomain.myapp and certificate leaf \[Subject.CN\] = "My Company Name" and certificate leaf \[Subject.O\] = "My Company Name" and anchor trusted The assumption is that if someone tried to use a fake cert with My Company Name, it wouldn't be trusted. Does this seem correct? Or is the whole approach of trying to cover multiple certs with one set of requirements perhaps ill-advised?
>
> Short answer: You're tantalizingly close to a good answer, but far enough away that I'm sending a full explanation on what's actually going on here. Because being \*almost\* right is pretty dangerous in this security business. Besides, you can all point each other to the list archive from now on. Note that you can do all kinds of really nifty things with complex requirements. But the re-issuance situation is a very standard thing, with a standard answer you might as well use.
>
> Let's do this as an experiment. You can actually follow along by using the Certificate Assistant (out of Keychain Access) - it can act as a simple Certificate Authority. (Or use openssl if you're feeling fiddly and masochistic. :)
>
> Generate a new root certificate (call it R). Give it a meaningful Organization ("O") name. Now generate a new code-signing (leaf) certificate from R (call it A). Give it the \*same\* exact Organization name as R. You can now sign your code with A. If you look at the implicit Designated Requirement (DR) for the program, it'll be something like
>
>     identifier = "whatever you called it" and certificate root = H"sha1-of-R"
>
> Now generate another code-signing certificate from R (call that B). Again, give it the same Organization name. You will find that they both make exactly the same DR, and thus the two signatures are equivalent. If A got close to expiring, you could move right on to B and nothing at all would break or get disturbed. And when B expires, you just make a new C, and so on.
>
> This trick is based on trusting the \*issuer\* of your certificates, rather than your certificates themselves. The implicit DR generator does this because the Organization fields in the root and leaf are the same - taking this as a hint that you control them both, and thus (since you obviously trust your own signing certificate) you trust the root to speak for you. This is what happens by default when you run your own CA; and if you do, this is how you should handle re-issuance. (Root certificates tend to be valid for 20 years or so, and hardly anyone worries about them expiring.)
>
> If you repeat the whole experiment from scratch, but this time don't use the same Organization name (or not use one at all), you'll find that the DR for your program becomes
>
>     identifier = "whatever you called it" and certificate leaf = H"sha1-of-A-or-B"
>
> and now signing with A or B produces different signatures that don't match each other - the two signatures define different programs. The automatic extension-of-trust to the root didn't happen. This is what happens by default when you buy a certificate from a commercial CA. I assume that's what you're asking about.
>
> So what do you do when you decided to buy a commercial certificate, but you want re-issuance continuity? Well, you have to explain the situation to the system, because we can no longer figure it all out automatically. Specifically, you have to read up on how your CA issues certificates. They each have a nice set of documents describing this (they're called "certificate issuance policies" or similar). Let's pretend, for example's sake, that R follows the policy of issuing signing certificates that have your company name in the CN field. Then what you really want your program's DR to read is
>
>     identifier = "whatever you called it" and certificate leaf[Subject.CN] = "My Company Name" and certificate root = H"sha1-of-R"
>
> A commercial CA will issue other signing certificates to other companies from the same signer, but they promise to use \*your\* name only in \*your\* certificate(s). You sign your program with A (specifying an explicit DR as above), and all is well. When A expires, the company issues you B (with the same CN), and all is still well.
>
> Now, in real life this is more complicated because the CA certificate that signs yours is an "intermediate" that is in turn signed by another, usually two or three deep; and the chain you need to construct in your explicit DR gets accordingly longer. And we can't tell you what to use, because we don't know the policies of your CA. But you get the general idea.
>
> Now, in parting, let me explain why your proposed requirement would get you into trouble:
>
>     identifier = com.mydomain.myapp and certificate leaf [Subject.CN] = "My Company Name" and certificate leaf [Subject.O] = "My Company Name" and anchor trusted
>
> This means "the signing certificate has my CN and O fields, and the root certificate is in the system's trusted anchor list." Presumably your CA's root certificate is on that list, so the test passes. But now watch what happens if I go to \*another\* trusted CA and buy a signing certificate claiming to be you. (They might ask me to prove that I really have a business called "you"; but in practice, that's pretty easy to arrange, particularly if the other CA happens to be somewhere in Africa.) Now I can sign programs that pass \*your\* test (because "anchor trusted" applies to \*that\* CA too, curse them :-).
>
> In fact, "anchor trusted" should be used very, very carefully. For one, it abdicates identification to the local administrator (who can add or remove anchor trust as he sees fit). For two, it means that whatever Apple ships as pre-trusted anchor list next year will also apply to your test. In a way, it serves as a very simple check that "someone either paid money for this or was able to change the local system's configuration." It's probably not what you want here.
>
> Cheers
>
> -- perry

# In-place updates of a signed executable

Again, "Perry The Cynic" to the rescue:

> Beware of \*how\* you replace your app bundle. When you \*overwrite\* an executable with a new version, the old signature "sticks" to the vnode until it is flushed for some reason. Since you are not in control of vnode flushing (the kernel is), you don't want to rely on this.
>
> The basic rule is to \*replace\* rather than \*overwrite\* your executables during an update. This means that you want to end up doing a move (aka "rename"), rather than a copy. The two canonical approaches for a bundle are either
>
> -   Move the entire bundle aside, then put the new version in its place; or
> -   Install the new executable elsewhere (on the same filesystem), then move (mv(1), rename(2)) it into place.
>
> And yes, ditto & friends just overwrite the file - not good.

Source: <http://lists.apple.com/archives/apple-cdsa/2009/Jul/msg00013.html>

# Checking signatures

Again, courtesy of "Perry The Cynic":

> You're checking that the code satisfies its own designated identity. That's a bit of a no-op; all signed code does that unless the signer really screwed things up.
>
> If you want to check whether some running code is signed by Apple, you want to say so:
>
>     SecRequirementCreateWithString(CFSTR("anchor apple"), ...)
>
> and then pass the resulting `SecRequirementRef` to `SecCodeCheckValidity`. You don't want (or need) to interact with the designated requirement in this case, since you've already decided what code is acceptable to you (anything signed by Apple).
>
> In production code, you can use the `csreq(1)` command to compile up a binary version of "anchor apple" and use `SecRequirementCreateWithData` instead; that's faster.
>
> `SecCodeCheckValidity` \*always\* checks whether the application is code signed and its signature is valid (unless you pass flags asking it not to). Just passing NULL for the requirement argument will do that. Adding the "anchor apple" requirement instead will test for validity \*and\* Apple-origin in one call.
>
> So, basically, just:
>
>     SecRequirementCreateWith{String,Data} (once; the Apple requirement can be re-used indefinitely)
>     SecCodeCopyGuestWithAttributes (to get the SecCodeRef)
>     SecCodeCheckValidity (to perform the actual validation)

Source: <http://lists.apple.com/archives/apple-cdsa/2009/Oct/msg00013.html>

# Signing application bundles containing helper tools

"Perry The Cynic" again:

> The problem is that anything in Contents/Resources is considered, well, a resource, so it is sealed with the (signature of the) main bundle. This means that if you ever want to update your helper, you must re-ship the main executable (and its CodeResources file) to restore integrity to it, even if you made no change to it. Also, application "slimmer" tools and others that make \*permissible\* changes to code (e.g. removing language localizations), when applied to helpers in Resources, will in fact invalidate the host bundle's signature because such a helper is understood to be just a bunch of resource files.
>
> The recommended canonical place for a helper \*tool\* (single binary file) is Contents/MacOS. The recommended place for a helper \*application\* is Contents. You can get away with putting tools into Contents and applications into MacOS; it won't break anything, it's just a bit odd. You can use the CFBundleCopyAuxiliaryExecutableURL API for finding helpers in either place. (And feel free to file a bug against Xcode to make it easier to \*place\* helpers into those locations.

Source: <http://lists.apple.com/archives/apple-cdsa/2008/Jan/msg00053.html>

However, note that storing tools in `Contents/MacOS` may cause problems:

> Besides the one you mention, you can (in certain situations) end up with an incorrect entry in the LS database which will cause the wrong executable to be launched when the user double clicks on your app in the Finder.
>
> I recommend putting aux executables in
>
>     .../Contents/Helpers/...
>
> as it avoids these issues. (And have filed an ER asking for this to become an officially sanctioned location for both bundled and unbundled helpers.)

Source: <http://www.cocoabuilder.com/archive/cocoa/233139-getprocessbundlelocation-no-good-in-background-agents.html>

# Signing frameworks

Quoth "Perry The Cynic":

> Frameworks are an example of "versioned bundles." (For all practical purposes, they're the \*only\* instance left in general use.) Thus a framework really contains
>
>     .../Versions/<version>/<a complete bundle goes here>
>
> Since each bundle version is nominally independent, you need to sign (and verify) &lt;bundle&gt;/Versions/Current rather than than the bundle root directory.
>
> Verifying the bundle root doesn't currently work (right) because the verification code doesn't follow the magic symlinks in the bundle wrapper that lead to the resources. (It's a security thing - signing code \*never\* follows symlinks.)

Source: <http://lists.apple.com/archives/apple-cdsa/2008/May/msg00017.html>

# Code signing and [open source](/wiki/open_source)

There is an interesting thread about code signing [open source](/wiki/open_source) projects [here](http://lists.apple.com/archives/apple-cdsa/2008/Dec/msg00008.html), including these posts:

> The questions you need to answer are not primarily technical; they are organizational. In many ways, it comes down to who you trust with your reputation.
>
> The (code signing) identity of your program is controlled by its Designated Requirement (codesign -d -r- to view it), and the ability to prove this identity is based on the digital identity you use. Give this identity to the people you trust; any of the people who have access to this identity may "bless" a binary as your program. All of these people can also lie about your program and make it erase people's hard drives (by accident or with malice). So the way you manage those identities should reflect the way you deal with your team and contributors. If your release process calls for testing before release, give the key to the test "valve" guys and have them sign code that passes the tests. If your release process calls for "anything goes", just give the signing identity to all contributors. And so on...
>
> Anyone can take your program and re-sign it with \*their\* identity. The resulting program (changed or not) is considered a different program. There's nothing wrong or dangerous or subversive about this; it's "my foofighter" vs. "Joe's foofighter". Keychain items (say) made by one won't be freely accessible to the other, but it's perfectly possible for a keychain item to be accessible to both (just answer "Always Allow" to the access dialog). The code signing machinery doesn't care whether they are named the same or differently; the fact that different signing authorities are used suffices to distinguish them. (The user might get confused, of course.)
>
> There's currently no UI for examining code identities. (Radar 5545440; not imminent.) You can write a simple shell script (or program) of your own that simply runs codesign -v -R="my designated requirement" /the/program to check whether a program is really \*your\* program (as opposed to someone else's version). You can make that as sweet as you care. Note that this needs to be a separate tool/program/widget, because no program can reliably check \*itself\* (since a hacked version can just lie about itself, too).
>
> If you \*want\* to organize your team more formally, the X.509 machinery lets you do so. Create a CA (in Keychain Access-&gt;Certificate Assistant, or with openssl if you're masochistic) and issue separate identities to your team members. This makes their builds distinguishable (codesign -dvv), and you \*can\* create keychain items that give access to some versions but not others. You could also sign beta releases differently from full releases, or make any other distinctions you like.
>
> In the end, you have to decide what being "your program" means to you and your team; where you put the trade-off between openness and trustworthiness (of the build result). \*Then\* you can put the corresponding process in place. There are way too many choices for me to just tell you what to do.

Source: <http://lists.apple.com/archives/apple-cdsa/2008/Dec/msg00009.html>

> You're right it's not about "ownership." It never is, commercial or not. Signing your code doesn't protect it from being ripped off; it protects your \*reputation\* from being ripped off. And that, I think, applies to open source at least as much as to the commercial kind.
>
> A code signature is essentially a stamp of origin - "I made this." (Or, "we made this." Or even, "some anonymous entity made this.") It's not about the source, or the code; it's about its behavior, and about \*stability\* of this behavior. If you ship open source software, presumably it comes with an offer to get source code, at which point anyone can make their own version (modified or not) and publish it in turn. That does not obviate the question of whether his version should be considered "the same" as your version. In fact, it makes the question more interesting... and more troubling to your users, who want to know whether they should "upgrade"(?) from your version to "Joe's version" or vice versa, and what that might do to their system.
>
> If you don't care about your reputation, you can choose a code identity (i.e. Designated Requirement) for your program that anyone can fulfill. (Simply using "identifier org.whatever.my.program" will do - anyone can do this; you can stick it right into your Makefile or Xcode project or whatever.) Then any build of this program is considered "the same", and nobody can tell the difference (not the computer, and probably not your users either).
>
> If you want \*the system\* to treat all versions the same but users to get a distinction, put markers into the Info.plist and display them in your About... window. Or use a resource file (resources are sealed into the signature). If you want the system to tell the difference, use different names.
>
> All of those "free" approaches ("free" as in easy to duplicate) mean that you can't exclude nasty people. If you value your online reputation, that ought to trouble you at least a bit. Signing with an identity that you keep to yourself (or your team, etc.) is a way to \*reliably\* distinguish stuff you blessed from stuff you didn't. That's got nothing to do with whether this is open source or not; it's a function of whether people trust \*that particular binary that got signed\* because you said it's trustworthy.
>
> It would be great if the Finder could display (in a program's Get Info window) its signing status, so that you then knew whether to trust the information in there. That radar is, how do I put it, "pending".

Source: <http://lists.apple.com/archives/apple-cdsa/2008/Dec/msg00012.html>
