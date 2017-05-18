---
tags: sendmail git wiki
---

While `git send-email` itself is a fairly simple, conservatively-written program, it is written in [Perl](/wiki/Perl) and depends on a number of [CPAN](/wiki/CPAN) modules and that in turn makes it fairly brittle and sensitive to changes in the system. In particular, if you move outside of the most basic usage patterns and start wanting to use things like [SMTP](/wiki/SMTP) authentication and [SSL](/wiki/SSL) then you're more likely to run into problems. For example, see "[Installing Net::SMTP::SSL for sending patches with Git over secure SMTP](/wiki/Installing_Net%3a%3aSMTP%3a%3aSSL_for_sending_patches_with_Git_over_secure_SMTP)", which describes the problems I had when first trying to get it to work.

It's been a while since I submitted any patches via `git send-email`, and since then [Git](/wiki/Git) itself has gone through many updates, as has my operating system ([Mac OS X](/wiki/Mac_OS_X)) and the [CPAN](/wiki/CPAN) has been in constant churn. After an initial, successful invocation using the `--dry-run` switch, I tried the real thing, and I guess it's not surprising that it didn't work:

    ...
    (body) Adding cc: Wincent Colaiuta <win@wincent.com> from line 'Signed-off-by: Wincent Colaiuta <win@wincent.com>'
    Use of uninitialized value in concatenation (.) or string at /System/Library/Perl/5.8.8/darwin-thread-multi-2level/Scalar/Util.pm line 30.
     is only avaliable with the XS version at /Library/Perl/5.8.8/IO/Socket/SSL.pm line 30
    BEGIN failed--compilation aborted at /Library/Perl/5.8.8/IO/Socket/SSL.pm line 30.
    Compilation failed in require at /Library/Perl/5.8.8/Net/SMTP/SSL.pm line 8.
    BEGIN failed--compilation aborted at /Library/Perl/5.8.8/Net/SMTP/SSL.pm line 8.
    Compilation failed in require at /usr/local/libexec/git-core/git-send-email line 859.

My first trouble-shooting technique was seeing if [CPAN](/wiki/CPAN) updates -- chosen based on [Google](/wiki/Google) searches and module names appearing in error messages -- would fix the problem, and fairly consistently with my previous experience with CPAN, it proved to be a broken, brittle, wonky stack of teetering shards:

-   `cpan Net::SMTP::SSL`: "Net::SMTP::SSL is up to date (1.01)."
-   `cpan CPAN`: fails.
-   `cpan Scalar::Util`: "Scalar::Util is up to date (1.19)."
-   `cpan IO:Socket::SSL`: fails.
-   `cpan ExtUtils::F77`: fails.
-   `cpan ExtUtils::XSBuilder`: works.
-   `cpan Scalar::List::Utils`: not found.
-   `cpan Archive::Zip`: fails.
-   `cpan Compress::Zlib`: fails.
-   `cpan List::Utils`: not found.

In the end, the only thing that would make `git send-email` work was to manually install `Scalar::List::Utils` after grabbing it manually from <http://search.cpan.org/dist/Scalar-List-Utils/>:

    wget http://search.cpan.org/CPAN/authors/id/G/GB/GBARR/Scalar-List-Utils-1.19.tar.gz
    tar xzvf Scalar-List-Utils-1.19.tar.gz 
    cd Scalar-List-Utils-1.19
    perl Makefile.PL 
    make
    make test
    make install

That mostly fixed the problem:

    ...
    (body) Adding cc: Wincent Colaiuta <win@wincent.com> from line 'Signed-off-by: Wincent Colaiuta <win@wincent.com>'
    5.7.0 authentication failed

So at this point it looks like the breakage wasn't caused by any changes to `git send-email` itself, nor by any manual manipulation of installed [CPAN](/wiki/CPAN) modules on my system (I explicitly avoid touching that wobbly house of cards unless really forced to). My prime suspect here is breakage in the [Apple](/wiki/Apple)-provided `Scalar::Util` module installed at `/System/Library/Perl/5.8.8/darwin-thread-multi-2level/Scalar/Util.pm`.

The next step was to find out why authentication was failing. Before getting into true debug mode, I decided to have some more "fun" with [CPAN](/wiki/CPAN):

-   `cpan IO:Socket::SSL`: still fails.
-   `cpan Net::SSLeay`: works.
-   `cpan IO:Socket::SSL`: still fails.
-   `cpan IO::Socket::INET`: works.
-   `cpan Net::IDN::Encode`: not available.
-   `cpan Net::LibIDN`: fails.
-   `cpan IO:Socket::SSL`: still fails.

So time to see what's going on using a debugging script:

    #!/usr/bin/env perl
    use warnings;
    use strict;
    use Net::SMTP::SSL;
    $IO::Socket::SSL::DEBUG = 1;
    my $smtp = Net::SMTP::SSL->new('wincent.com', Port => 465, Debug => 1,) or die "didn't work";
    my $auth = $smtp->auth('username', 'passphrase') or die $smtp->message;

Here is the relevant snippet of the output:

    Net::SMTP::SSL>>> Net::SMTP::SSL(1.01)
    Net::SMTP::SSL>>>   IO::Socket::SSL(1.12)
    Net::SMTP::SSL>>>     IO::Socket::INET(1.31)
    Net::SMTP::SSL>>>       IO::Socket(1.30)
    Net::SMTP::SSL>>>         IO::Handle(1.27)
    Net::SMTP::SSL>>>           Exporter(5.58)
    Net::SMTP::SSL>>>   Net::Cmd(2.29)
    Net::SMTP::SSL=GLOB(0x8a0110)<<< 220 wincent1.inetu.net ESMTP Sendmail 8.13.8/8.13.8; Wed, 25 Mar 2009 14:08:48 -0400
    Net::SMTP::SSL=GLOB(0x8a0110)>>> EHLO localhost.localdomain
    Net::SMTP::SSL=GLOB(0x8a0110)<<< 250-wincent1.inetu.net Hello 179.pool85-53-16.dynamic.orange.es [85.53.16.179], pleased to meet you
    Net::SMTP::SSL=GLOB(0x8a0110)<<< 250-ENHANCEDSTATUSCODES
    Net::SMTP::SSL=GLOB(0x8a0110)<<< 250-PIPELINING
    Net::SMTP::SSL=GLOB(0x8a0110)<<< 250-8BITMIME
    Net::SMTP::SSL=GLOB(0x8a0110)<<< 250-SIZE
    Net::SMTP::SSL=GLOB(0x8a0110)<<< 250-DSN
    Net::SMTP::SSL=GLOB(0x8a0110)<<< 250-ETRN
    Net::SMTP::SSL=GLOB(0x8a0110)<<< 250-AUTH DIGEST-MD5 CRAM-MD5 LOGIN PLAIN
    Net::SMTP::SSL=GLOB(0x8a0110)<<< 250-DELIVERBY
    Net::SMTP::SSL=GLOB(0x8a0110)<<< 250 HELP
    Net::SMTP::SSL=GLOB(0x8a0110)>>> AUTH DIGEST-MD5

So here we see it's choosing the `DIGEST-MD5` authentication method. A quick(?) [Google](/wiki/Google) search [reveals](http://www.sendmail.org/~ca/email/auth.html) the likely cause of the problem:

> If you want to use `DIGEST-MD5` or `CRAM-MD5` and it doesn't work despite the previous check, make sure that `sasldb` actually contains passwords for those mechanism. This can be done by looking at its content (using `strings` or `od -c`) and checking that the names of those mechanisms appear in the file.

Quickly disable those authentication methods with a quick `cd /etc/mail && vim sendmail.mc && make && service sendmail restart`, and sure enough, the debugging script works and so does `git send-email`.

[The page](http://www.sendmail.org/~ca/email/auth.html) I've already linked to above contains instructions on how to set up the `sasldb` or `sasldb2` password file if you want to offer the `DIGEST-MD5` and `CRAM-MD5` methods.
