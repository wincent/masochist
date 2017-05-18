---
tags: antlr wiki
---

# Referring to matched tokens and rule references

## By name

You can refer to matched tokens or rule references by name in your actions by prefacing them with a `$` symbol. For example (using an action written in [C](/wiki/C) for the [C target](/wiki/C_target)):

    my_rule : MY_TOKEN other_rule
    {
        printf("token '\%s'; rule '\%s'\n", $MY_TOKEN.text->chars, $other_rule.text->chars);
    } ;

Note how the `%` character has special meaning for [StringTemplate](/wiki/StringTemplate), and therefore also for [ANTLR](/wiki/ANTLR), and must be escaped with a backslash.

Contrast this with getting the text of a token from within a [lexer](/wiki/lexer) rule:

    MY_TOKEN : 'a'..'z'+
    {
        printf("token text is '\%s'\n", GETTEXT()->chars);
    } ;

## By label

You can use labels where necessary to disambiguate multiple references to the same rule or token:

    my_rule : a=THING b=THING
    {
        printf("a '\%s', b '\%s'\n", $a.text->chars, $b.text->chars);
    } ;

This also works in [lexer](/wiki/lexer) rules:

    MY_TOKEN : a=THING b=THING
    {
        printf("a '\%s', b '\%s'\n", $a.text->chars, $b.text->chars);
    } ;
