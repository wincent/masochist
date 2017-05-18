---
tags: antlr wiki
---

On page 280 of the [ANTLR book](/wiki/ANTLR_book) the following example rule appears:

    a
      : L a R 
      | L L X 
      ;

And is explained as follows:

> The analysis sees that **L** begins both alternatives and looks past it in both alternatives to see whether there is something that follows that will distinguish the two. In the first alternative, therefore, the analysis must enter rule **a** again. The first symbol that it can see upon reentry is **L**. Hence, the algorithm must continue again past that **L** recursively into rule **a** hoping for a lookahead symbol that will distinguish the two alternatives. Ultimately, the algorithm sees the **X** in the second alternative, which allows it to distinguish the two alternatives. Clearly, though, if the second alternative were recursive as well, this process would never terminate without a threshold.

Although on first reading I could accept that this was true, the explanation didn't give me any sense of exactly *what* was meant by phrases such as "must enter rule **a** again" and "must continue again past that **L** recursively into rule **a**"; exactly *what* is [ANTLR](/wiki/ANTLR) *doing* in this case?

In order to make this clear, the following is my current understanding of exactly what is happening when [ANTLR](/wiki/ANTLR) tries to analyze a rule like this. Here, "analysis" basically consists of looking at rule **a** and trying to construct a [DFA](/wiki/DFA) that predicts whether the first or second alternative will succeed. Once one of the alternatives is predicted then the recognizer will proceed and actually attempt to match the input against that alternative.

We know from the book that the [DFA](/wiki/DFA) ultimately produced by this analysis is as follows:

                               (s3=>2)
                              /
                           X /
          L         L       /
    (s0)----->(s1)----->(s2)
                            \
                           L \
                              \
                               (s4=>1)

# First iteration

The process begins by looking at each alternative and asking, "What lookahead symbol must I find in order to predict this alternative?". In both cases the answer is **L** and this is not enough to distinguish between the two and make a decision. At this stage in the analysis, the partial [DFA](/wiki/DFA) that [ANTLR](/wiki/ANTLR) has constructed so far will look like:

          L
    (s0)----->(s1)

# Second iteration

So, we consider an additional symbol of lookahead and ask the same question. This time the first alternative includes a recursive reference back to the same rule, so [ANTLR](/wiki/ANTLR) must now consider a tree of possible lookaheads:

-   At lookahead(1), to match alternative 1 must see an **L**
    -   At lookahead(2), to match alternative 1 must match rule **a**
        -   To match alternative 1 of rule **a**, still at lookahead(2), must see an **L**
        -   To match alternative 2 of rule **a**, still at lookahead(2), must see an **L**
-   At lookahead(1), to match alternative 2 must see an **L**
    -   At lookahead (2), to match alternative 2 must see an **L**

Notice how the number of "paths" through the possible matches fans out due to the recursion. The partial [DFA](/wiki/DFA) so far constructed will now look like:

          L         L
    (s0)----->(s1)----->(s2)

Note that this is still not useful because there is still nothing that distinguishes the two paths.

# Third iteration

Now we consider what might be seen with yet another symbol of additional lookahead:

-   At lookahead(1), to match alternative 1 must see an **L**
    -   At lookahead(2), to match alternative 1 must match rule **a**
        -   To match alternative 1 of rule **a**, still at lookahead(2), must see an **L**
            -   At lookahead (3), to match alternative 1 of rule **a** must match rule **a** again
                -   Now in rule **a** again, still at lookahead(3), to match alternative 1 must see an **L**
                -   Now in rule **a** again, still at lookahead(3), to match alternative 2 must see an **L**
        -   To match alternative 2 of rule **a**, still at lookahead(2), must see an **L**
            -   At lookahead (3), to match alternative 2 of rule **a** must seen an **L**
-   At lookahead(1), to match alternative 2 must see an **L**
    -   At lookahead (2), to match alternative 2 must see an **L**
        -   At lookahead (3), to match alternative 2 must see an **X**

Notice that:

-   Finally we have a path that doesn't require seeing **L** (the last path, where we expect to see an **X**)
-   Having seen that **X**, we can predict alternative 2 on seeing **L L X**
-   If we don't see **X** and instead see **L** then we are still on one of the other alternative paths
-   Even though we don't know *which* alternative path we are on in the case of seeing **L L L** , we can still predict that alternative 1 will match because *all* of the possible paths that span out from alternative one share that common beginning
-   The recursive nature of alternative 1 means that our prediction can never "finish"; it will always be possible for another layer of recursion to be nested inside
-   The non-terminating nature of alternative 1 doesn't prevent analysis from completing; after only three iterations we see enough input to distinguish the two alternatives
-   As we "re-enter" rule **a** during analysis the number of possible paths grows exponentially
-   Despite the fact that the number of paths grows exponentially, we're still only interested in the very first choice in our path tree: that is, when looking at the very first symbol of lookahead, that's the point where we want to make our prediction: whatever happens later on the many possible paths can be handled by other rule invocations
-   If we were to see some other input like **L L Z** then neither alternative would be predicted
-   Although the number of possible paths grows exponentially, the prediction [DFA](/wiki/DFA) ends up being very simple
