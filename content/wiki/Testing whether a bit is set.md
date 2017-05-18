---
tags: c objective.c wiki
---

I originally posted this to my [weblog](/wiki/weblog) as an article titled, "[Clever boolean return trick](http://wincent.com/a/about/wincent/weblog/archives/2007/05/clever_boolean.php)". I'm now reposting the contents here for completeness of the [wiki](/wiki/wiki).

# The clever boolean return trick

I was just randomly browsing the [HexFiend](/wiki/HexFiend) source when the [following snippet](http://ridiculousfish.com/svn/HexFiend/trunk/sources/threading/FishThread.m) caught my eye:

    - (BOOL)shouldEnd {
    	return !!([myThreadStatus flag] & SHOULD_END);
    }

Why the double negation (`!!`)? It's actually very clever. I don't know if this is a common idiom or not; I guess so, but I had never seen it before.

# The problem

What might be your first impulse if you want to check if a bit is set?

    variable & mask

This will work, kind of, for most cases. Maybe you like being explicit (as I do) and so you explicitly show the type of the expression:

    (BOOL)(variable & mask)

Bzzzzt... You've just made a hidden bug a little bit more visible. `BOOL` is actually just an `unsigned char` and so any time the expression overflows the 8-bit limit of `unsigned char` your cast to `BOOL` *will throw away the most significant bits*. Let's say `variable & mask` evaluates to 8192; casting (`(BOOL)8192`) returns `0` (`NO`)... most likely not what you wanted...

The explicit cast makes this overflow risk easier to spot, but the same bug is present if the expression is in a method:

    - (BOOL)foobar
    {
        return (variable & mask);
    }

Or a macro:

    #define AT_LEAST_ONE_BIT_SET(variable, mask) ((BOOL)(variable & mask))

# The solution

One way to fix this is to use an equality test:

    (variable & mask) != 0

This doesn't suffer from the overflow problems caused by an explicit (or implicit) cast to `BOOL`, and it returns what you want: a `BOOL`-compatible value that equates to either `YES` or `NO`.

## The HexFiend solution

The trick used in HexFiend is another way of avoiding unwanted overflow errors. The first negation safely converts the value of the expression from `YES` or `NO` to its opposite with no risk of overflow. This is because the compiler knows how big the value is and it also knows how to avoid overflow errors. The second negation inverts the sense back to its original form again, `YES` or `NO`, and again there's obviously no risk of overflow errors sneaking in.

# Conclusion

Which one do you like better? The HexFiend pattern is more concise, very clever, but it may not be evident at first glance why a double-negation is employed.

The other pattern is less opaque (nothing in it to make you look twice; but then again, the incorrect cast-to-`BOOL` didn't make you look twice either and it contained a hidden bug) but more verbose.
