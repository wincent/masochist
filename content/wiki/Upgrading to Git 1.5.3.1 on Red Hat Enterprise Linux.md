---
tags: red.hat git updates wiki
cache_breaker: 1
---

These notes were made while upgrading to [Git 1.5.3.1](/wiki/Git_1.5.3.1) on [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux) from the tarball.

For notes on upgrading to 1.5.3.1 from a local clone of the central [Git](/wiki/Git) repository, see "[Upgrading to Git 1.5.3.1 on Mac OS X Tiger](/wiki/Upgrading_to_Git_1.5.3.1_on_Mac_OS_X_Tiger)".

# Downloading

    wget http://kernel.org/pub/software/scm/git/git-1.5.3.1.tar.bz2 \
         http://kernel.org/pub/software/scm/git/git-1.5.3.1.tar.bz2.sign

Before verifying the signature some set-up of [GPG](/wiki/GPG) is necessary; see "[Upgrading to Git 1.5.2.4 on Red Hat Enterprise Linux](/wiki/Upgrading_to_Git_1.5.2.4_on_Red_Hat_Enterprise_Linux)" for more details.

    gpg --verify git-1.5.3.1.tar.bz2.sign git-1.5.3.1.tar.bz2

# Building

    # extract
    tar xjvf git-1.5.3.1.tar.bz2
    cd git-1.5.3.1

    # build
    nice make prefix=/usr/local all

    # text
    nice make prefix=/usr/local test

    # install
    sudo make prefix=/usr/local install

    # get man pages
    wget http://www.kernel.org/pub/software/scm/git/git-manpages-1.5.3.1.tar.bz2 \
         http://www.kernel.org/pub/software/scm/git/git-manpages-1.5.3.1.tar.bz2.sign

    # verify
    gpg --verify git-manpages-1.5.3.1.tar.bz2.sign git-manpages-1.5.3.1.tar.bz2

    # install
    cd /usr/local/man/
    sudo tar xjvf full_path_to_manpages_archive/git-manpages-1.5.3.1.tar.bz2

# Updating [gitweb](/wiki/gitweb)

    # from top-level of Git source tree
    make clean
    make prefix=/usr/local \
         GITWEB_PROJECTROOT=/pub/git/path_to_public_repos \
         GITWEB_LIST=/pub/git/conf/gitweb-projects \
         GITWEB_STRICT_EXPORT=1 \
         GITWEB_CSS="/gitweb.css" \
         GITWEB_LOGO="/git-logo.png" \
         GITWEB_FAVICON="/git-favicon.png" \
         GITWEB_CONFIG="/pub/git/conf/gitweb.conf" \
         gitweb/gitweb.cgi
    sudo -u git cp gitweb/gitweb.{cgi,css} \
                   gitweb/git-*.png \
                   /pub/git/public_html

The basic installation procedure (shown above) which would usually work fell down here with this error message in the browser:

    Too many arguments for Encode::decode_utf8 at gitweb.cgi line 686, near "Encode::FB_CROAK)"
    BEGIN not safe after errors--compilation aborted at gitweb.cgi line 898.

Perhaps this would have been caught when performing the test suite, but it turns out that the [gitweb](/wiki/gitweb) tests didn't even run:

    *** t9500-gitweb-standalone-no-errors.sh ***
    *   ok 1: skipping gitweb tests, perl version is too old
    * passed all 1 test(s)

One of the inconveniences of running an older version of [RHEL](/wiki/RHEL); still officially supported by [Red Hat](/wiki/Red_Hat) but the base versions of a lot of the installed software is really long in the tooth.

So first of all I checked that the build hadn't mangled the script around line 686:

    eval { $res = decode_utf8($str, Encode::FB_CROAK); };

Which looked fine, so I tried upgrading the old `Encode` [CPAN](/wiki/CPAN) module (1.83) to the latest available version (2.23) at the time of writing:

    sudo -H cpan Encode

Unfortunately this failed due to failing tests:

    t/Aliases..................ok                                                
    t/at-cn....................ok                                                
    t/at-tw....................ok                                                
    t/CJKT.....................ok                                                
    t/enc_data.................skipped
            all skipped: Perl 5.8.1 or later required
    t/enc_eucjp................skipped
            all skipped: Perl 5.8.1 or later required
    t/enc_module...............
    #   Failed test 'encoding vs. STDOUT'
    #   at t/enc_module.t line 50.
    #          got: '1'
    #     expected: '0'

    #   Failed test 'encoding vs. STDIN - 1'
    #   at t/enc_module.t line 58.
    #          got: '初期文字列'
    #     expected: '初期文字列
    # '

    #   Failed test 'encoding vs. STDIN - 2'
    #   at t/enc_module.t line 58.
    #          got: 'テスト文字列'
    #     expected: 'テスト文字列
    # '
    # Looks like you failed 3 tests of 3.
    t/enc_module...............dubious                                           
            Test returned status 3 (wstat 768, 0x300)
    DIED. FAILED tests 1-3
            Failed 3/3 tests, 0.00% okay
    t/enc_utf8.................ok                                                
    t/Encode...................ok                                                
    t/Encoder..................ok                                                
    t/encoding.................ok                                                
    t/fallback.................ok                                                
    t/from_to..................ok                                                
    t/grow.....................ok                                                
    t/gsm0338..................ok                                                
    t/guess....................ok                                                
    t/jis7-fallback............ok                                                
    t/jperl....................ok                                                
    t/mime-header..............ok                                                
    t/mime-name................ok                                                
    t/mime_header_iso2022jp....ok                                                
    t/perlio...................ok                                                
            6/38 skipped: various reasons
    t/Unicode..................ok                                                
    t/utf8strict...............skipped
            all skipped: Perl 5.8.1 or later required
    Failed Test    Stat Wstat Total Fail  List of Failed
    -------------------------------------------------------------------------------
    t/enc_module.t    3   768     3    3  1-3
    3 tests and 6 subtests skipped.
    Failed 1/24 test scripts. 3/5838 subtests failed.
    Files=24, Tests=5838,  9 wallclock secs ( 5.94 cusr +  0.38 csys =  6.32 CPU)
    Failed 1/24 test programs. 3/5838 subtests failed.
    make: *** [test_dynamic] Error 29
      DANKOGAI/Encode-2.23.tar.gz
      /usr/bin/make test -- NOT OK
    Warning (usually harmless): 'YAML' not installed, will not store persistent state
    Running make install
      make test had returned bad status, won't install without force

So I used `git blame` to find out [the commit](http://repo.or.cz/w/git.git?a=commit;h=00f429af7bfaa6a9141bc0ac30995d4fae24836a) that introduced the problematic change; annoyingly, you can see that it includes tests which would most likely have discovered the problem prior to installation, if only the tests had actually run.

My next tactic was to try running the tests manually to see if I could get more verbose output and an indication of what might be wrong:

    cd ~/.cpan/build/Encode-2.23-Ysmv4Q
    perl Makefile.PL
    make
    make test
    perl t/enc_module.t

Here at least the output showed more clearly that there was a difference between the expected and actual outputs:

    1..3
    not ok 1 - encoding vs. STDOUT
    #   Failed test 'encoding vs. STDOUT'
    #   at t/enc_module.t line 50.
    #          got: '1'
    #     expected: '0'
    not ok 2 - encoding vs. STDIN - 1
    #   Failed test 'encoding vs. STDIN - 1'
    #   at t/enc_module.t line 58.
    #          got: '初期文字列'
    #     expected: '\xE5\xE6\xE6絖\xE5
    # '
    not ok 3 - encoding vs. STDIN - 2
    #   Failed test 'encoding vs. STDIN - 2'
    #   at t/enc_module.t line 58.
    #          got: 'テスト文字列'
    #     expected: '\xE3\xE3鴻\xE6絖\xE5
    # '
    # Looks like you failed 3 tests of 3.

I downloaded and tested some older versions of the `Encode` module, dating as far back as 2005 (version 2.12) but all failed in exactly the same way. I also tried unsetting the `LANG` environment variable, even though I didn't think it should/could interfere with the tests in any way and the failure continued as before.

After weighing things up (the scarcity of information about this in the [Google](/wiki/Google) database, the amount of UTF-8 content that I'll be working with, the limitation of the problem to standard-out/standard-in pipes, the spread of versions of `Encode` affected by the problem, the need to get my [gitweb](/wiki/gitweb) installation back up and running) I decided to go ahead and force the install despite the failing tests:

    sudo -H cpan -fi Encode
