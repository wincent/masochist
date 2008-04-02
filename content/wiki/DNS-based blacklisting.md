---
tags: email sendmail
cache_breaker: 1
---

This example shows how to add a [DNS-based blacklist](/wiki/DNS-based_blacklist) to the [sendmail](/wiki/sendmail) configuration file. In this case the SBL-XBL list provided by [Spamhaus](/wiki/Spamhaus), one of the most reputable and accurate blacklists, is used for the purposes of illustration.

    FEATURE(`dnsbl',`sbl-xbl.spamhaus.org',`"554 Rejected " $&{client_addr} " - see http://www.spamhaus.org/ then contact " $&{postmaster_addr}')dnl

To minimize the damage done in the unlikely event of obtaining a false positive the error message that is returned to the client includes the following elements:

-   A 554 error code (as described in [RFC 821](/wiki/RFC_821)/[RFC 2821](/wiki/RFC_2821)).
-   The connecting IP address found in the blacklist.
-   A link to the [Spamhaus](/wiki/Spamhaus) website where the sender can find out what the blacklisting means, why it occurred, and how to be removed from the blacklist.
-   An alternative contact address of the form `postmaster@example.com` that can be used to inform the server administrator, bypassing [DNS-based blacklist](/wiki/DNS-based_blacklist) checks.

This specification depends on a special ruleset that defines the `postmaster_addr` macro (see "[Store postmaster address](/wiki/Store_postmaster_address)"), as well as the modification of the following line in the configuration file:

    dnl FEATURE(delay_checks)dnl

Which should be changed to:

    FEATURE(`delay_checks', `friend')dnl

After making these changes the [Sendmail](/wiki/Sendmail) configuration should be rebuilt and the daemon restarted.

Appropriate entries should be added to the `/etc/mail/access` file to ensure that delivery to the `postmaster` and `abuse` addresses is not blocked by the blacklist:

    Spam:abuse@	        →FRIEND
    Spam:postmaster@	→FRIEND

To test that the blacklisting works correctly, messages can be sent to <nelson-sbl-test@crynwr.com> and <nelson-xbl-test@crynwr.com>.

To test that the postmaster address is *not* being subjected to DNS-based blacklisting (a requirement of [RFC 2821](/wiki/RFC_2821)) you can connect via telnet from the server to be tested to:

telnet://ns1.crynwr.com

The telnet-based test will try sending mail to "postmaster@[example.com](/wiki/example.com)", and should the messages should be accepted for delivery.

# Efficacy

During a test period of 24 hours in mid-July 2006 on the [wincent.com](/wiki/wincent.com) mail server the [DNS-based blacklist](/wiki/DNS-based_blacklist) described here stopped 261 connection attempts.

For other efficacy statistics see [combatting spam](/wiki/combatting_spam).

# See also

-   "Crynwr spam blocking resources": <http://www.crynwr.com/spam/>
-   "postmaster.rfc-ignorant.org listing policy": <http://rfc-ignorant.org/policy-postmaster.php>
-   <http://www.spamhaus.org/>
-   List of DNS-based blacklists: <http://spamlinks.net/filter-dnsbl-lists.htm>

