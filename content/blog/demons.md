---
title: Conquering my demons
fb: https://www.facebook.com/glh/posts/10153386063386307
twitter: https://twitter.com/wincent/status/732998780480454659
---

Three decades into my computer programming life I am still learning new things about how to use technology to solve problems. That's exciting. It never stops being rewarding. But this post isn't about that kind of learning. It's about learning about myself. That still happens too, even after all this time.

The "demons" of the title could go by a few different names, depending on how charitably you want to frame them.

You might call one "perfectionism", where you dwell on a particular theme, project or design, reluctant to declare it finished, or sometimes even to commit to implementing it. You endlessly circle around the mountain half-way up (searching for the perfect solution), instead of driving towards the summit (iterating on your current best idea).

You might call another "procrastination". Not the easily identified "goofing around on social media" kind, but the far more insidious "productive procrastination" in which you embrace any opportunity to engage in work that is secondary to your core goal. This could be participating in meetings, or falling prey to the siren song of the alluring rabbit hole, the yak that "needs" to be shaved, or the weeds that irresistibly beckon for you to go "off" in them.

You might call them paralysis, indecision, indecisiveness too.

I was aware of all of these, but it is only recently that I identified the root cause that lies at the heart of all of them. It is a very simple emotion: fear. All of these can be reduced to fear. Fear of failing in the eyes of others and of myself, fear of not being good enough, fear of saying something stupid, fear of building the wrong abstraction, fear of repeating a past mistake, fear of being misunderstood or misjudged, fear of treading on somebody's toes...

# An impending crisis

During the first few months of 2016 I became increasingly concerned that my level of anxiety was taking me to a bad place. I wasn't yet self-aware enough to realize that everything I was feeling was driven by fear. Instead, I was more concerned with superficial symptoms: for example, I worried about the pace with which I was progressing on a particular project, or I fretted that my solution might not be adequate. As time went by however, the proportion of my attention that I was devoting to the problems I needed to solve started to be dwarfed by the attention I was dedicating to my own anxiety about those problems. In concrete terms, I worried about my progress, and the more I worried about my progress, the less progress I made, leading me to worry even more about my progress. It was a vicious cycle.

I realized that I needed to take some concrete steps in order to stave off disaster while there was still time. In the rest of this post I want to share some of those steps.

# Taming fear

At the most fundamental level, I just had to snip the cables that connected the fear centers of my brain to the parts which I use to power my problem-solving activity. This sounds trite, but it boils down to an act of will: the imposition of your higher-order intellectual functions over your primal, reflexive instincts. You know you need to kick yourself out of this, and only you can hoist yourself up out of the pit that you've dug for yourself, but the question is, where do you find the activation energy to get you out of the rut?

## Formulate concrete goals

General intentions to "be less afraid" aren't helpful. They need to be translated into specific behavioral objectives to which you can make a commitment. One example:

> I am going to upload my work-in-progress code for review at the end of each day, even if it is not "ready" yet according to my usual standards.

A goal like this is easy to adhere to precisely because it is so explicit, and compliance is so easily evaluated. There is no weaseling out of it: you either published your work (success, no matter how crappy the code might be) or you did not (failure).

I knew that getting uninterrupted blocks of time was going to be critical to helping me break out of the rut, so I created a bunch of related mini-goals (or resolutions, if you will) that would help me clear the cruft out of my schedule and create spaces in which I could be productive and get that psychological relief that comes with the feeling of momentum. Examples:

- Giving myself permission to say "no" to meetings that I don't consider to be relevant to my core projects. Reject the fear of missing out on some critical piece of information that _might_ surface at one of these meetings, trust that anything truly important will eventually impinge on me via other channels, and recognize that the most valuable way I can invest my time towards completing my project is to roll my sleeves up and directly grapple with implementing it. Resist the fear that I won't be perceived as relevant if I'm not involved in these discussions: trust the process, trust my peers, trust that the things I build as an engineer will speak for themselves.
- Using headphones more often so as to block out distractions: this means explicitly valuing my need for an interruption-free zone in which to be creative *above* the primary selling point of the open plan office (spontaneous, serendipitous collaboration).
- Full-screening apps.
- Giving myself permission to say "no" to requests to participate in interviews in excess of a per-week threshold that I set.
- Eliminating context switches by creating access patterns for doing non-coding tasks (such as processing email, or doing code review) in batches at strategically-chosen moments in the day.
- Declaring periodic email "bankruptcy", in which unread emails get unceremoniously deleted if the pending stack in the inbox gets to the point where I cannot reasonably dig myself out of the hole; trust that anything truly important will bubble up to the surface again in the form of a subsequent message.
- Aggressively time-boxing specific repeating tasks, and then respecting the time-box zealously. I had some regular chores that I would regularly spend well over an hour on, that I've trimmed down to less than 25% of the time cost, while still preserving a sizeable chunk of the value.
- When I get an idea for a task that needs to be completed, record it in my task "inbox" (I use [Wunderlist](https://www.wunderlist.com/) for this) and then *forget it*; I can come back later to triage, prioritize and schedule these tasks in the pause between tasks. This is a very light-weight borrowing of techniques from the "[Getting Things Done](https://en.wikipedia.org/wiki/Getting_Things_Done)" method (disclaimer: I haven't actually read the book; it is on my "to do" list...).

## Crutches

Some of these resolutions took me out of my comfort zone. I found a number of "crutches" that made it easier for me to stick to my guns. For example, I found it easier to ship in-progress code by framing it explicitly for the reviewers in ways that made its partial nature explicit. This means peppering it with phrases like: "this is a work-in-progress". Or "this is the first step in X, Y, Z; after I've done that, I'll tackle A, B, C". Or "Implements quick-and-dirty solution Foo. Thought about solution Bar, but that would be relatively expensive and for now just want to be expedient." In other words, "I know this isn't perfect. This is technical debt. But trust me about this; taking on a little debt right now is the right call. I'll keep working on this."

It's amazing how many barriers fall away when you tell people outright, "I am being hacky and expedient". It's like a frickin' Jedi mind trick. There really weren't the droids they were looking for.

## Being adaptive

We operate on a continuum or risk and reward. There is obviously a difference in risk profile between making a change on a news feed seen by a billion people and committing to an experimental prototype that is not running in any released product. The point is, you shouldn't just be aware of this continuum: you should actively seek to exploit it. There are many mechanisms which can enable you to reduce costs, and you should milk them for all that they're worth:

- Can you commit your totally not-production-ready work-in-progress on a branch?
- Can you ship something behind a feature flag (ie. mitigate risk by having a way of turning it off)?
- Can you ship something but just not document it yet (to give you the "option value" to change it later)?
- Can you discretionally, occasionally bypass lints, checks and tests (gasp!) that are intended to help teams produce higher quality output and move quicker in the long term, but which sometimes are unstable and unreliable and slow you down in the short-term?
- Can you do something hacky to cheaply find out if you're on the right track and reduce the cost (maximize the value) of your "failures"?

## Exposure therapy

One of the more drastic experiments I undertook was literally refraining from proofreading anything that I wrote, regardless of context. This is kind of like the person with severe vertigo who seeks to cure it by standing first on one page of an open telephone book, then another, and another, until finally she is standing on a stack of the things and has completely conquered her phobia. It's a form of "exposure therapy", whereby you banish the debilitating effect of a fear by gradually acclimatizing yourself to it to the point of immunity.

This proofreading thing wasn't just useful to me because it saved me some very valuable time. It also constituted exposure therapy for me because it cut right to one of my deepest fears: saying something stupid in public. I'd built up an identity in which I prided myself on my ability to express myself in polished writing. The goal here was to forcibly detach myself from that aspect of my identity as a means of defusing the related fear. It worked remarkably well. After a while I didn't really care about saying silly things any more. (As an easter egg, I've included exactly 4.5 silly things in this post. Can you find them?)

## Mantras

One of my favorite posters at Facebook says "Don't mistake motion for progress". This one speaks to me because I have historically found it all too natural to fall into a pattern of "busy work", where I allow a bunch of low-impact activity to give me a sense of achievement and relief simply because I am moving quickly, even if that means moving in a direction that is orthogonal to my primary goal.

Other posters chant, "Focus on impact" and "What would you do if you weren't afraid?". When I was dominated by fear, these posters didn't help me much. If anything, they made things worse by reminding me of how out-of-place I felt and how ill-made for the environment. Classic chronic Imposter Syndrome even after multiple years at the company. (In fact, I think I just came up with a name for this related phenomenon, "Im-Poster Syndrome": the condition of suffering from motivational-poster-induced anxiety).

Sometimes you can feel such a disconnection that you wind up swimming in all these things without any of them really impinging on you. Even the great ones that should resonate with you, like "Done is better than perfect" (or the satirical inverse, "Perfect is way better than done"), and which should be a useful antidote to procrastination and paralyzing perfectionism. There are good messages in here, but you can become deaf to them.

With time, however, and with the other techniques I've described in this post bringing my fear into line, I found that I was able to leverage the messages on these posts as mantras that I could repeat to myself, helping maintain in focus the things that really matter to be successful in this job, and without the harmful and distracting effects that you get when you look at everything through a lens of fear. I no longer break into a sweat when I think "Focus on impact"; I just do it.

## Pressure valves

Sometimes things are going to get hard, even with your new machine-like resolution and focus. You're still human. There is still a tangible psychological benefit to feeling that you are able to get *something* done, anything, when you find yourself in a situation of roadblock.

This is a technique to be applied judiciously, lest you fall back into the trap of "productive procrastination" in which you "achieve" a bunch of "useful" things that are not the thing you originally set out to do. The idea is to sparingly apply the technique of switching to another task for just long enough to give you psychological relief and a sense of accomplishment and momentum, and then go back to the original, gnarly task, on which you were stuck.

Ideally, you're able to apply this process "fractally", via subdividing your primary task into a dependency tree of smaller tasks. Almost all difficult tasks can be decomposed into subproblems of varying complexity and scope. Some of these will be smaller, easier, and more tractable. The tree part is important, because it means you have choices about traversal order and you're not forced into solving things strictly serially. This means that the "pressure valve" task that you're going to complete in order to blow off steam and reduce the mounting anxiety you may be feeling about getting stuck can actually be a direct step towards reaching your overarching goal.

As I further practice using this toolbox of techniques for moving expediently, I find that I need the pressure valves less, and can invest less time in them before returning to the meaty parts of the problem.

## Fucking up

Doing this involves a lot of fucking up. When you drop your filters and emphasize action you're going to make mistakes. That's ok. This is a calculated choice: you're explicitly trading off some "accuracy" in exchange for having more shots at the goal.

I found two things helpful to come to terms with making mistakes:

1. Reading articles on the subject of "not giving a fuck" (examples: [Taming the Mammoth: Why You Should Stop Caring What Other People Think](http://waitbutwhy.com/2014/06/taming-mammoth-let-peoples-opinions-run-life.html), and [this one, literally called "The Subtle Art of Not Giving a Fuck"](http://markmanson.net/not-giving-a-fuck)).
2. Remembering that, at the end of the day, you are a bag of carbon atoms living out an existence of the utmost brevity and insignificance (on a cosmological scale) on a "little blue green planet ... far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy".

The next time you find yourself worrying about the possibility of looking silly if you make a statement about which you are uncertain in a group chat, remember the cosmos. I'm uncertain about a _lot_ of things, so I find myself invoking this cosmic-scale heuristic all the time, and that of course is perfectly fine. (If you don't believe me, just ask the universe.)

## Side projects

When I was most swamped in my own fears, my side projects were a refuge for me. They were a place where I could retain a feeling of competence and effectiveness independently of how things might be going elsewhere. Over time, as I got my demons under control, I noticed something curious about the way in which I was engaging with my side projects. As I started to cultivate a sense of gritty, expedient gumption at work, I found that I naturally started to cut corners in my side projects in order to maintain as much time as possible for work stuff.

In a sense, my standards dropped &mdash; not to the point where I would write "fix shit" commit messages, but still markedly so &mdash; and I found myself reciprocally acting to maximize expedience and impact just as much outside of work as at work. The habit started to reinforce itself universally. When I am on my deathbed reviewing my commit messages (not *literally* reviewing them, although you never know), I don't think I'll be beating myself up that many of my commit messages looked like [this quip](https://github.com/wincent/ferret/commit/e17d0aa5033a943c7d3c460c352c5603855a93eb) rather than like [this Russian novel](https://github.com/wincent/command-t/commit/778e8eacf54906de639e3) (or, rather, Russian whitepaper).

# Conclusion

I've been keeping the demons at bay, but that doesn't mean they won't try to come back. This is something I have to keep working on. Talking about the subject publicly like this, and privately with my peers, helps galvanize me and keep me on track. If you're in a similar situation to me, I encourage you to talk about this with people you can trust and try to implement some very concrete strategies for making things better, like the ones I've explored in this post.

For me, though, I've got to go now. There's some no-saying, time-boxing, work-in-progress-shipping, and not-a-single-fuck-was-given-ing to be done.

<small><em>Discuss: [Facebook](https://www.facebook.com/glh/posts/10153386063386307) - [Twitter](https://twitter.com/wincent/status/732998780480454659)</em></small>
