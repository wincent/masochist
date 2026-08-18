---
description: Trying double-entry plaintext accounting again
tags: blog
title: Beancount
---

Back in 2021 I tried [double-entry](https://en.wikipedia.org/wiki/Double-entry_bookkeeping), [plaintext accounting](https://plaintextaccounting.org) as implemented by [hledger](https://hledger.org/). You see, I've been into doing stuff in plaintext in [Vim](https://www.vim.org) and [Neovim](https://neovim.io), keeping it all committed to a [Git](https://git-scm.com) repo, for a couple of decades now. First for the obvious things like code, then [documents and wikis](https://github.com/wincent/corpus), [tasks](https://taskwarrior.org)[^taskwarrior], and [email](https://neomutt.org). So, trying out plaintext accounting held a nature appeal for me.

[^taskwarrior]: I looked into Taskwarrior but never adopted it; I do, however, store informal "TODO" lists in Markdown documents all over the place. I am sure if I was an Emacs user, I'd be all-in on [Org Mode](https://orgmode.org).

Turns out, I didn't stick with it. My motivation wasn't strong. My ledger file never even got to 200 lines, and a handful of transactions.

Fast-forward to 2026, and I decided to give it another go, this time with [Beancount](https://github.com/beancount/beancount/) and it's slick web interace, [Fava](https://beancount.github.io/fava/). This time, I think it's going to work. In the two or three weeks that I've been playing with Beancount, I've already found ways to make it replace a mishmash of Markdown files, Excel sheets, and plaintext notes for a bunch of different purposes:

- **Income and expense tracking:** With the flexibility to do all this even though it spans multiple banks, multiple accounts (some of them shared[^shared] accounts), multiple types (like credit cards, bank transfers, and cash), and multiple mechanisms (such as involving reimbursements, or corporate meal and transport accounts which different tax treatments).
- **Figuring out tax obligations:** As an employee at a tech company, I have to deal with salary and stock-based compensation (RSUs, an ESPP program, and dividends) and currency differences; Beancount not only helps me reconcile all these things (ie. double check them in varies ways to catch data entry and arithmetic errors), but it can directly spit out the exact numbers I have to fill in to each box on my tax return.
- **Tracking investment lots:** Beancount knows when I bought what (and for what price), and knows how to apply "FIFO" (First-In, First-Out) rules when I make sales.
- **Building a price database:** The text format is simply, and price information for currencies and index funds is freely available on the internet, so with a simple script I can pull down a detailed database of historical price movements for everything I care about.
- **Calculating and charting investment returns:** Beancount can give you a chart of your net worth over time, but it also it contains all the data needed to calculate your investment returns over different time scales; this is mostly for intellectual curiosity, and has little impact on one's daily life, but it can be fun to look at.

[^shared]: And not simply shared with a 50:50 split, but more complicated arrangements than that.

Does all of this sound like a lot of work? In the end, it doesn't need to be. A lot of folks use importers to process their financial statements and extract transaction info from them into a format that Beancount can read. I haven't done that yet, because I want to manually enter the data while I'm still learning the system; but I have made a little phone app so that I can enter transactions on the go with a few taps. This is partly so I can, as I said, learn the system, but it's also because I want to get a real, grounded feel for where my money is going.

That's the real reason why I became interested in expense tracking again. You can't figure out how much you actually need without doing the work of figuring out, um, what you actually need. And once you know what you're spending money on, you may find that there are adjustments that you can and perhaps should be making. There's a big difference, say, between guessing that you spend "a fair bit" eating out every month, and actually _knowing_ the dollar amount. And once you know that dollar amount, you can figure out from there what it will mean for the arc of your life[^money].

[^money]: This may sound familiar to those who have read ["Your Money or Your Life"](https://vickirobin.com/your-money-or-your-life/) by Vicki Robin and Joe Dominguez, but they give a bunch of vivid examples of how an unregulated and ultimately unnecessary spending habit can be the difference between retiring early or laboring to death.
