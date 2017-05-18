---
tags: sendmail wiki
---

The purpose of this custom ruleset is to extract the domain portion of the recipient address and use it as a basis for constructing a postmaster address of the form "postmaster@[example.com](/wiki/example.com)". The address is then stored in the `postmaster_addr` macro and is available for use in other rulesets.

# Configuration directives

    LOCAL_CONFIG
    Kstorage macro
    LOCAL_RULESETS
    SStore_postmaster_address
    R$*             →$: $>canonify $1
    R$* < @ $=w . > →$@ $(storage {postmaster_addr} $@ postmaster@$2 $)
    R$*             →$@ $(storage {postmaster_addr} $@ postmaster@example.com $)

As always in [sendmail](/wiki/sendmail) configuration files, the → symbol (right-pointing arrow) symbol indicates a tab.

See [combining rulesets](/wiki/combining_rulesets) for an example that combines the functionality of this ruleset with another, and [DNS-based blacklisting](/wiki/DNS-based_blacklisting) for an application of this ruleset.

# Annotated version

    LOCAL_CONFIG
    Kstorage macro

The `K` indicates that this line is a key file declaration. Key file declarations follow this syntax:

    Kmapname mapclass arguments

The *mapname* is the handle by which the map is referenced in the rewriting rules. The *mapclass* indicates the type of the map, and the *arguments* vary according to the *mapclass*. In the current example the *mapname* is `storage` and the *mapclass* is `macro`, which means that the map can be used to set or clear macro values. Key file declarations that use the `macro` *mapclass* take no arguments.

    LOCAL_RULESETS
    SStore_postmaster_address

The initial `S` sets the current ruleset being collected to `Store_postmaster_address`. Labelling the ruleset like this is akin to creating a "subroutine". The subsequent lines begin with `R` indicating that they are rewriting rules. Each rewriting rule consists of a left-hand side (LHS) and a right-hand side (RHS), separated by a tab character (indicated here using the → symbol). Input passed into the ruleset is checked against the pattern in the LHS and if it matches then the input is rewritten as specified by the RHS. An optional third field, delimited by another tab, could be used for comments (ignored by [Sendmail](/wiki/Sendmail)), but no comments are shown here.

    R$*             →$: $>canonify $1

Here the RHS matches against any input at all (`$*` matches zero or more tokens).

The LHS has a `$:` prefix, which causes processing to continue to the next rule; this is necessary to avoid an infinite loop because normally rules that match are retried in a loop until they fail.

The `$>` directive causes the remainder of the line to be evaluated and then passed to another ruleset, in this case the `canonify` ruleset which returns addresses in a standardized (canonified) form. The "remainder of the line" in this case is `$1` which is equivalent to the first token matched on the RHS (in this case, the entire input).

    R$* < @ $=w . > →$@ $(storage {postmaster_addr} $@ postmaster@$2 $)

Processing continues on this next line, where the RHS pattern will match "anything at all" (`$*`, or "zero or more tokens") followed by a left angle bracket (`<`), an "at" symbol (`@`) and any phrase in class `w` (`$=w`), where `w` is "the set of all names this host is known by", followed by a period (`.`), followed by a right angle bracket (`>`).

This pattern will match addresses in canonical form because the `canonify` ruleset turns addresses like `john@example.com` into `john < @ example . com . >`. Note that although the patten includes whitespace, this is largely for readability and the whitespace will be ignored during pattern matching. The username part of the address will be captured into `$1` and the hostname part will be captured into `$2` for use on the RHS of the rule.

The RHS sets the `postmaster_addr` macro. The initial `$@` prefix causes the ruleset to return with the remainder of the RHS as the value.

The `postmaster_addr` macro is set using the value passed as the first argument in the map lookup. The map itself returns an empty string. The syntax for referencing maps is:

    $(map key $@ arguments $: default $)

In the current example the *map* is the `storage` map declared previously, the *key* is `postmaster_addr`, the `$@` introduces the argument list, which in this case contains only one element, `postmaster@$2` where `$2` will be expanded to the host name of the recipient email address. In the current example there is no *default* value and the default value marker (`$:`) is omitted.

    R$*             →$@ $(storage {postmaster_addr} $@ postmaster@example.com $)

This last rule is processed in the case where the previous rule did not match, as would be the case if the recipient address did not match any of the local names by which the mail server is known.

In this case the RHS matches anything at all (`$*`, or "zero or more tokens") and the LHS stores a default value in the `postmaster_addr` macro (in this case, `postmaster@example.com`). As is habitual, [example.com](/wiki/example.com) is used here for the purposes of illustration only.

# See also

<http://www.sendmail.org/~ca/email/doc8.12/op-sh-5.html>
