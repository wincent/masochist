---
tags: antlr wiki
---

These notes are about [ANTLR](/wiki/ANTLR)'s `output = AST;` option in the context of the [C language target](/wiki/C_language_target).

# Differences

These examples describe the entry points in a sample parser, `pWalrusParser`, generated with and without the `output = AST;` option:

    # without output = AST;
    void pWalrusParser->template(pWalrusParser)

    # with output = AST
    WalrusParser_template_return pWalrusParser->template(pWalrusParser)

# When to use `output = AST;`

You specify `output = AST;` when you plan on passing the returned [AST](/wiki/AST) on to a [tree parser](/wiki/tree_parser) for further manipualtion.

# When not to use `output = AST;`

Given that your entry points have a `void` return type in this case, non-AST parsers are generally best suited for:

## Situations where you merely want to recognize input as valid or invalid

Although the parser entry points don't return anything, you can still check the parser for errors:

    if (parser->pParser->rec->errorCount > 0)
    {
        // do something here to handle the errors
    }

## Directly translating from within actions

If your translation requirements are simple you may be able to merely print results out from within rule actions. Or if you don't want to print out the results, you may be able to store them somewhere else from within your actions; the generated parsers have custom fields that you can use to store points to other storage.
