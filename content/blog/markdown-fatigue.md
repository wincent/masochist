---
tags: wiki markdown
title: Markdown fatigue
description: On my changing relationship with Markdown
---

My relationship with Markdown has traversed the following arc: **Contempt**, **Acceptance**, **Resignation**

# Contempt

In 2009, I thought ["Markdown sucks"](/blog/markdown-sucks). There was a burgeoning assortment of markup languages, having been driven by (and driving) the rising tide of the blogosphere, and Markdown seemed to be decidedly inferior. I knew about ["Worse is better"](https://en.wikipedia.org/wiki/Worse_is_better) back then, but I didn't have the acumen to realize I was seeing it in action.

# Acceptance

By 2015, I recognized that Markdown had won, and in choosing Wikitext I had been ["Betting on the wrong horse"](/blog/betting-on-the-wrong-horse). I eventually moved all my content to Markdown, and found myself relishing its simplicity and ubiquity. GitHub continued the trend started in the blogosphere, inducting wave upon wave of developer into the Church of Markdown. Many of the rough edges and ambiguities were smoothed over by efforts such as [CommonMark](https://commonmark.org/).

# Resignation

In 2025, with the [rise of agentic AI](/blog/ai-2026), I found myself wearying of Markdown.

First, I was annoyed and frustrated to see deterministic configuration and code replaced by non-deterministic natural language _suggestions_ (in Markdown, of course). Skill files started to pile up in repos like so much cruft, only to be deleted as we were forced to admit that the agents were often better off without them.

But worse than that, has been the rising flood of AI-generated Markdown text written — purportedly — for human consumption. As it stands right now, there is something difficult to stomach about LLM-generated text. Many of us are developing an "allergy" to it. And now it's everywhere: in commit messages, PR descriptions, project READMEs, wiki pages, and so on. For the unwary, the near constant exposure to this homogenous slop may slowly infect _them_: the human, imitating the machine, which was trained to imitate the human.

The LLM's literal raison d'etre is to generate text, tirelessly, one token after another, until the requester's API credits have run out. So, we now have wall-of-text PR descriptions densely peppered with Markdown backticks and other formatting, producing a tiring assault on the senses that no human developer would have the patience to construct by hand. I used to take pride in my detailed and well-formatted PR descriptions, but now every PR is a pantomime of a carefully crafted message: exhaustively formatted and spelled out by the practically unbounded patience of the next-token-predictor machinery.

My heart sinks every time I read one of these PRs. And when I write my own PR descriptions, I can't shake the feeling that any care I take in wrapping symbol names in backticks or inserting expository asides between em dashes is only going to risk miscuing my readers and leading them to think that I, too, might be a bot.

But, who am I kidding, anyway? The slop economy is training us all to barely skim or not even read these artifacts any more, so maybe it doesn't matter. Perhaps all this indescribably unpalatable Markdown will eventually be like the [Great Pacific Garbage Patch](https://en.wikipedia.org/wiki/Great_Pacific_Garbage_Patch): ugly, enormous, and drifting endlessly on distant digital currents where few will ever go to see it.

Signed,
Yours truly, in Markdown.
