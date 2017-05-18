---
title: Operator precedence
tags: blog
---

Operator precedence still surprises me sometimes.





I started off with this code:

    digit -= 'a';

Which was really just a reformulation of this operation for converting an ASCII character containing a representation of a decimal digit to a number:

    digit -= '0';

I then tried to adjust for the fact that hexadecimal `a` is equivalent to decimal 10:

    digit -= 'a' + 10;

But the code didn't work. Only this did:

    digit = digit - 'a' + 10;

Operator precedence strikes again. The two forms are not equivalent, because the former is actually equivalent to:

    digit -= ('a' + 10);

Which in turn gives us:

    digit = digit - ('a' + 10);

Which in turn is equivalent to:

    digit = digit - 'a' - 10;

Which clearly isn't the same as:

    digit = digit - 'a' + 10;

So anyway, I think it's an interesting example of how a programmer's natural tendency to prefer shorter expressions, combined with an iterative development model, combined with C's operator precedence rules, can lead you down a path where your code doesn't work like you think it should.

I am unlikely to make the same mistake again in the future, but I am almost certain to make a different-but-related mistake at some point. Which of course leads us back to the fact that unit testing is essential part of any decent development process.
