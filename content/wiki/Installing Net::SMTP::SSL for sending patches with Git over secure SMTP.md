---
tags: git
---

If you want to use Git to submit patches via email over secure [SMTP](/wiki/SMTP) you will need to install the Net::SMTP::SSL module, if you don't have it installed already on your system.

    sudo -H cpan Net::SMTP::SSL

You'll know that this is required if you see a message like the following on trying to use `git-send-email`:

    Can't locate Net/SMTP/SSL.pm in @INC (@INC contains: ...) at /usr/local/bin/git-send-email line 618.

After installing I got a new failure message:

    Unable to initialize SMTP properly.  Is there something wrong with your config? at /usr/local/bin/git-send-email line 629.

A minimal test script showed that the problem wasn't in [Git](/wiki/Git):

    #! /usr/bin/env perl

    use warnings;
    use strict;
    use Net::SMTP::SSL;
    $IO::Socket::SSL::DEBUG = 1;
    my $smtp = Net::SMTP::SSL->new('smtp.gmail.com', Port => 465, Debug => 1,);

    if (!$smtp) {
      die "didn't work";
    }

After much [Googling](/wiki/Googling) I finally found [this diamond](http://www.cpanforum.com/threads/3706) among the many posts complaining about `Net::SMTP::SSL` not working and offering advice of differing levels of usefulness:

-   "[run with warnings](http://robertmaldon.blogspot.com/2006/10/sending-email-through-google-smtp-from.html)" (`perl -w script_name`)
-   "run under the debugger" (`perl -w script_name`)
-   "Same here. Exact same error message. My research has led me nowhere to debug that.", "No freaking idea": <http://www.perlmonks.org/?node_id=573827>
-   "Net::SMTP::SSL would always return a null object (still haven't figured this out)": ([Google cache link](http://209.85.129.104/search?q=cache:nrEum8313okJ:www.theantibox.com/2007/02/smtp-and-google.html+smtp.gmail.com+net::smtp::ssl&hl=es&ct=clnk&cd=5&client=safari))
-   "[smtp.gmail.com requires all these authentication things to work](http://ubuntuforums.org/archive/index.php/t-336496.html)"

The meat of the problem is here:

> Problem is fixed with IO::Socket::SSL version 1.06 which I just uploaded to CPAN. Problem was, that IO::Socket::SSL "sanitized" the Arguments it gets by setting undef stuff to "". This way it gave a LocalPort of "" to IO::Socket::INET which did not like it.

My problem was that [Mac OS X](/wiki/Mac_OS_X) ships with an older version of IO::Socket::SSL (0.999), so I had to upgrade it:

    sudo -H cpan IO::Socket::SSL

But some of the tests failed (excerpt):

    t/nonblock..............FAILED tests 26-27                                   
    	Failed 2/27 tests, 92.59% okay
    t/readline..............ok                                                   
    t/sessions..............ok                                                   
    t/start-stopssl.........ok                                                   
    t/startssl..............ok                                                   
    t/sysread_write.........ok                                                   
    Failed Test  Stat Wstat Total Fail  Failed  List of Failed
    -------------------------------------------------------------------------------
    t/nonblock.t               27    2   7.41%  26-27
    Failed 1/14 test scripts, 92.86% okay. 2/220 subtests failed, 99.09% okay.
    make: *** [test_dynamic] Error 2
      /usr/bin/make test -- NOT OK
    Running make install
      make test had returned bad status, won't install without force

So to gather more information I decided to run the tests manually:

    sudo -s -H
    cd /var/root/.cpan/sources/authors/id/S/SU/SULLR
    tar xzvf IO-Socket-SSL-1.12.tar.gz 
    cd IO-Socket-SSL-1.12
    perl Makefile.PL 
    make
    make test

Curiously, this time even more tests failed:

    t/nonblock..............NOK 19sysread() on closed filehandle GEN2 at t/nonblock.t line 322.
    Use of uninitialized value in numeric eq (==) at t/nonblock.t line 322.
    setsockopt() on closed socket GEN2 at (eval 14) line 2.
    t/nonblock..............NOK 21getsockopt() on closed socket GEN2 at (eval 14) line 3.
    Use of uninitialized value in unpack at (eval 14) line 3.
    Use of uninitialized value in concatenation (.) or string at (eval 14) line 3.
    syswrite() on closed filehandle GEN2 at t/nonblock.t line 179.
    t/nonblock..............NOK 25sysread() on closed filehandle GEN2 at t/nonblock.t line 332.
    t/nonblock..............FAILED tests 16, 19, 21-22, 24-27                    
    	Failed 8/27 tests, 70.37% okay
    t/readline..............ok                                                   
    t/sessions..............ok                                                   
    t/start-stopssl.........ok                                                   
    t/startssl..............ok                                                   
    t/sysread_write.........ok                                                   
    Failed Test  Stat Wstat Total Fail  Failed  List of Failed
    -------------------------------------------------------------------------------
    t/nonblock.t               27    8  29.63%  16 19 21-22 24-27
    Failed 1/14 test scripts, 92.86% okay. 8/220 subtests failed, 96.36% okay.
    make: *** [test_dynamic] Error 2

On a subsequent run, yet another number of subtests failed:

    t/nonblock..............NOK 18sysread() on closed filehandle GEN2 at t/nonblock.t line 322.
    Use of uninitialized value in numeric eq (==) at t/nonblock.t line 322.
    setsockopt() on closed socket GEN2 at (eval 14) line 2.
    getsockopt() on closed socket GEN2 at (eval 14) line 3.
    Use of uninitialized value in unpack at (eval 14) line 3.
    t/nonblock..............NOK 20Use of uninitialized value in concatenation (.) or string at (eval 14) line 3.
    syswrite() on closed filehandle GEN2 at t/nonblock.t line 179.
    t/nonblock..............NOK 24sysread() on closed filehandle GEN2 at t/nonblock.t line 332.
    t/nonblock..............FAILED tests 13, 15, 18, 20-21, 23-27                
    	Failed 10/27 tests, 62.96% okay
    t/readline..............ok                                                   
    t/sessions..............ok                                                   
    t/start-stopssl.........ok                                                   
    t/startssl..............ok                                                   
    t/sysread_write.........ok                                                   
    Failed Test  Stat Wstat Total Fail  Failed  List of Failed
    -------------------------------------------------------------------------------
    t/nonblock.t               27   10  37.04%  13 15 18 20-21 23-27
    Failed 1/14 test scripts, 92.86% okay. 10/220 subtests failed, 95.45% okay.
    make: *** [test_dynamic] Error 2

Out of curiosity I wanted to see if the version that ships with Leopard (0.999) also fails those tests:

    wget http://search.cpan.org/CPAN/authors/id/S/SU/SULLR/IO-Socket-SSL-0.999.tar.gz
    tar xzvf IO-Socket-SSL-0.999.tar.gz 
    cd IO-Socket-SSL-0.999
    perl Makefile.PL 
    make
    make test

The results:

    t/nonblock.........FAILED tests 13, 26                                       
    	Failed 2/27 tests, 92.59% okay
    t/readline.........ok                                                        
    t/sessions.........ok                                                        
    t/startssl.........ok                                                        
    t/sysread_write....ok                                                        
    Failed Test  Stat Wstat Total Fail  Failed  List of Failed
    -------------------------------------------------------------------------------
    t/nonblock.t               27    2   7.41%  13 26
    Failed 1/11 test scripts, 90.91% okay. 2/175 subtests failed, 98.86% okay.

Sure enough, it does, and just as inconsistently as the newer version (repeating the test 5 times it failed between 2 and 9 times). Are there any differences between the shipped version and the official 0.999 release?

    diff SSL.pm /System/Library/Perl/Extras/5.8.8/IO/Socket/SSL.pm && echo "same"

Output: `same`

So, if Apple is prepared to ship a broken module with their OS I guess it's ok to install a newer, broken version of the same module, so I proceeded to force the install:

    sudo -H cpan -fi IO::Socket::SSL

This too failed, and my guess was that it was because the installed CPAN module is too old (v1.7602, but v1.9204 is available at the time of writing), so I tried updating it:

    # upgrade CPAN first
    # (if it's too old it could try upgrading Perl when we try upgrading Bundle::CPAN)
    sudo -H perl -MCPAN -e '$ENV{FTP_PASSIVE} = 1; install CPAN'

This also failed:

    Checksum mismatch for distribution file. Please investigate.

    Distribution id = A/AN/ANDK/CPAN-1.9204.tar.gz
        CPAN_USERID  ANDK (Andreas J. Koenig <andreas.koenig@anima.de>)
        CALLED_FOR   CPAN
        CONTAINSMODS CPAN::Nox CPAN::FirstTime CPAN::Tarzip CPAN::DeferedCode CPAN::Debug CPAN::Kwalify CPAN::Version CPAN::Admin CPAN::Queue CPAN CPAN::HandleConfig
        MD5_STATUS   
        incommandcolor 1
        localfile    /var/root/.cpan/sources/authors/id/A/AN/ANDK/CPAN-1.9204.tar.gz

    I'd recommend removing
    /var/root/.cpan/sources/authors/id/A/AN/ANDK/CPAN-1.9204.tar.gz. Its MD5
    checksum is incorrect. Maybe you have configured your 'urllist' with
    a bad URL. Please check this array with 'o conf urllist', and retry.

So I tried removing the URL, which happened to be the first in the list:

    cpan> o conf urllist
    cpan> o conf urllist shift
    cpan> o conf urllist
    cpan> o conf commit
    cpan> exit

And trying again.

    sudo rm /var/root/.cpan/sources/authors/id/A/AN/ANDK/CPAN-1.9204.tar.gz
    sudo -H perl -MCPAN -e '$ENV{FTP_PASSIVE} = 1; install CPAN'

This time it worked and I could proceed:

    sudo -H cpan Bundle::CPAN
    sudo -H cpan -fi IO::Socket::SSL

After this my test script did indeed pass, and `git-send-email` stopped bailing with that error also; but all was not well however, because after connecting to the server the script would hang indefinitely.

Further investigation reveals that it was failing on trying to use Kerberos authentication. So I changed my [sendmail](/wiki/sendmail) `confAUTH_MECHANISMS` from:

    EXTERNAL GSSAPI DIGEST-MD5 CRAM-MD5 LOGIN PLAIN

To:

    EXTERNAL DIGEST-MD5 CRAM-MD5 LOGIN PLAIN

And everything works fine.

# See also

-   [Git quickstart](/wiki/Git_quickstart)
-   [Git recipes](/wiki/Git_recipes)

