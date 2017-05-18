---
tags: sendmail wiki
---

To combine [sendmail](/wiki/sendmail) rulesets you would name them as subroutines and then call them. For example, to add the two subroutines, "[Store\_postmaster\_address](/wiki/Store_postmaster_address)" and "[Protect\_internal\_only](/wiki/Protect_internal_only)", to the `Local_check_rcpt` ruleset you would do the following:

    LOCAL_RULESETS
    SLocal_check_rcpt
    R$*          →$: $1 $| $>"Store_postmaster_address" $1
    R$* $| $#$*  →$#$2
    R$*          →$: $1 $| $>"Protect_internal_only" $1
    R$* $| $#$*  →$#$2

    SStore_postmaster_address
    # ... rules for the "Store_postmaster_address" subroutine appear here

    SProtect_internal_only
    # ... rules for the "Protect_internal_only" subroutine appear here

As always in [sendmail](/wiki/sendmail) configuration files, the → symbol (right-pointing arrow) indicates a tab.

# Complete example

    LOCAL_CONFIG
    Kstorage macro
    F{Internal}/etc/mail/internal.only
    LOCAL_RULESETS
    SStore_postmaster_address
    R$*                           →$: $>canonify $1
    R$* < @ $=w . >               →$@ $(storage {postmaster_addr} $@ postmaster@$2 $)
    R$*                           →$@ $(storage {postmaster_addr} $@ postmaster@example.com $)
    SProtect_internal_only
    R$*                           →$: <@> $>canonify $1
    R<@> $={Internal} < @ $=w . > →$: <$1@$2>
    R<@> $={Internal}             →$: <$1@$j>
    R<@> $+                       →$@ OK
    R$*                           →$: $&{client_name}
    R$@                           →$@ OK
    R$*$=w                        →$@ OK
    R$*                           →$#error $@ 5.7.1 $: 551 $&f not allowed to send to recipient
    SLocal_check_rcpt
    R$*                           →$: $1 $| $>"Store_postmaster_address" $1
    R$* $| $#$*                   →$#$2
    R$*                           →$: $1 $| $>"Protect_internal_only" $1
    R$* $| $#$*                   →$#$2

# See also

<http://www.sendmail.org/~ca/email/protected.html>
