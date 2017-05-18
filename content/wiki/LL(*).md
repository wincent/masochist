---
tags: antlr wiki
---

[LL(\*)](/wiki/LL%28%2a%29) is the new top-down recognition algorithm developed by [Terence Parr](/wiki/Terence_Parr) for [ANTLR 3](/wiki/ANTLR_3).

# Differences from [LL(k)](/wiki/LL%28k%29)

Previously, [ANTLR](/wiki/ANTLR) used an [LL(k)](/wiki/LL%28k%29) algorithm that was capable of differentiating between alternatives by using a fixed amount of lookahead:

    foo
      : A B C D '!'
      | A B C D '?'
      ;

In order to predict which alternative to match, an [LL(k)](/wiki/LL%28k%29) algorithm must use 5 symbols of lookahead to see past the initial **A B C D** to the **!** or **?** which distinguish the two alternatives. The prediction is made using an acyclic [DFA](/wiki/DFA) (one which does not contain any loops).

[LL(k)](/wiki/LL%28k%29) is not capable of predicting alternatives which contain arbitrary repetition:

    bar
      : A B* '!'
      | A B* '?'
      ;

This is because [LL(k)](/wiki/LL%28k%29) uses acyclic [DFAs](/wiki/DFAs) and arbitrary repetition is not possible. No fixed `k` will allow the prediction of rule **bar** using an acyclic [DFA](/wiki/DFA).

[LL(\*)](/wiki/LL%28%2a%29) instead uses cyclic [DFAs](/wiki/DFAs) and can therefore handle the kind of repetition expressed in rule **bar**.

# Limitations

Although [LL(\*)](/wiki/LL%28%2a%29) is much more powerful than [LL(k)](/wiki/LL%28k%29) it is still limited to recognizing only regular language structures (that is, structures that can be recognized using a [DFA](/wiki/DFA) or [regular expression](/wiki/regular_expression)). It cannot recognize recursive structures. Therefore, to recognize recursive structures using [ANTLR](/wiki/ANTLR) it is necessary to provide some "help" to the [LL(\*)](/wiki/LL%28%2a%29) algorithm in one of the following ways:

-   Turn on backtracking for a non-[LL(\*)](/wiki/LL%28%2a%29) decision; in this way [ANTLR](/wiki/ANTLR) doesn't have to predict the right alternative, it can instead just try it and rewind if it doesn't work out
-   Use a semantic predicate to help [ANTLR](/wiki/ANTLR) resolve the decision
