---
tags: leopard perl wiki
---

I decided to install [Perl](/wiki/Perl) again in the hope of overcoming my problems trying to install [SVK](/wiki/SVK) on [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard).

    wget http://search.cpan.org/CPAN/authors/id/N/NW/NWCLARK/perl-5.8.8.tar.gz
    tar xzvf perl-5.8.8.tar.gz 
    cd perl-5.8.8/
    sh Configure -de
    make
    make test

There were 3 failed tests:

    t/op/pwent................................FAILED at test 1

And:

    ext/Sys/Syslog/t/syslog...................#   Failed test 'syslog() should return true: '0''
    #   in ../ext/Sys/Syslog/t/syslog.t at line 109.
    FAILED at test 84

And:

    lib/locale................................FAILED at test 99

I the tried to get more information:

    export DYLD_LIBRARY_PATH=`pwd`
    cd t
    ./perl harness

This yielded:

    op/pwent....................................FAILED test 1                    
    	Failed 1/2 tests, 50.00% okay

And:

    ../lib/locale...............................ok 100/117# The following locales
    #
    #	C C POSIX POSIX af_ZA af_ZA.ISO8859-1 af_ZA.ISO8859-15
    #	af_ZA.UTF-8 am_ET am_ET.UTF-8 be_BY be_BY.CP1131 be_BY.CP1251
    #	be_BY.ISO8859-5 be_BY.UTF-8 bg_BG bg_BG.CP1251 bg_BG.UTF-8
    #	ca_ES ca_ES.ISO8859-1 ca_ES.ISO8859-15 ca_ES.UTF-8 cs_CZ
    #	cs_CZ.ISO8859-2 cs_CZ.UTF-8 da_DK da_DK.ISO8859-1 da_DK.ISO8859-15
    #	da_DK.UTF-8 de_AT de_AT.ISO8859-1 de_AT.ISO8859-15
    #	de_AT.UTF-8 de_CH de_CH.ISO8859-1 de_CH.ISO8859-15
    #	de_CH.UTF-8 de_DE de_DE.ISO8859-1 de_DE.ISO8859-15
    #	de_DE.UTF-8 el_GR el_GR.ISO8859-7 el_GR.UTF-8 en_AU
    #	en_AU.ISO8859-1 en_AU.ISO8859-15 en_AU.US-ASCII en_AU.UTF-8
    #	en_CA en_CA.ISO8859-1 en_CA.ISO8859-15 en_CA.US-ASCII
    #	en_CA.UTF-8 en_GB en_GB.ISO8859-1 en_GB.ISO8859-15
    #	en_GB.US-ASCII en_GB.UTF-8 en_IE en_IE.UTF-8 en_NZ
    #	en_NZ.ISO8859-1 en_NZ.ISO8859-15 en_NZ.US-ASCII en_NZ.UTF-8
    #	en_US en_US.ISO8859-1 en_US.ISO8859-15 en_US.US-ASCII
    #	en_US.UTF-8 es_ES es_ES.ISO8859-1 es_ES.ISO8859-15
    #	es_ES.UTF-8 et_EE et_EE.ISO8859-15 et_EE.UTF-8 eu_ES
    #	eu_ES.ISO8859-1 eu_ES.ISO8859-15 eu_ES.UTF-8 fi_FI
    #	fi_FI.ISO8859-1 fi_FI.ISO8859-15 fi_FI.UTF-8 fr_BE
    #	fr_BE.ISO8859-1 fr_BE.ISO8859-15 fr_BE.UTF-8 fr_CA
    #	fr_CA.ISO8859-1 fr_CA.ISO8859-15 fr_CA.UTF-8 fr_CH
    #	fr_CH.ISO8859-1 fr_CH.ISO8859-15 fr_CH.UTF-8 fr_FR
    #	fr_FR.ISO8859-1 fr_FR.ISO8859-15 fr_FR.UTF-8 he_IL
    #	he_IL.UTF-8 hi_IN.ISCII-DEV hr_HR hr_HR.ISO8859-2 hr_HR.UTF-8
    #	hu_HU hu_HU.ISO8859-2 hu_HU.UTF-8 hy_AM hy_AM.ARMSCII-8
    #	hy_AM.UTF-8 is_IS is_IS.ISO8859-1 is_IS.ISO8859-15
    #	is_IS.UTF-8 it_CH it_CH.ISO8859-1 it_CH.ISO8859-15
    #	it_CH.UTF-8 it_IT it_IT.ISO8859-1 it_IT.ISO8859-15
    #	it_IT.UTF-8 ja_JP ja_JP.SJIS ja_JP.UTF-8 ja_JP.eucJP kk_KZ
    #	kk_KZ.PT154 kk_KZ.UTF-8 ko_KR ko_KR.CP949 ko_KR.UTF-8
    #	ko_KR.eucKR lt_LT lt_LT.ISO8859-13 lt_LT.ISO8859-4
    #	lt_LT.UTF-8 nl_BE nl_BE.ISO8859-1 nl_BE.ISO8859-15
    #	nl_BE.UTF-8 nl_NL nl_NL.ISO8859-1 nl_NL.ISO8859-15
    #	nl_NL.UTF-8 no_NO no_NO.ISO8859-1 no_NO.ISO8859-15
    #	no_NO.UTF-8 pl_PL pl_PL.ISO8859-2 pl_PL.UTF-8 pt_BR
    #	pt_BR.ISO8859-1 pt_BR.UTF-8 pt_PT pt_PT.ISO8859-1 pt_PT.ISO8859-15
    #	pt_PT.UTF-8 ro_RO ro_RO.ISO8859-2 ro_RO.UTF-8 ru_RU
    #	ru_RU.CP1251 ru_RU.CP866 ru_RU.ISO8859-5 ru_RU.KOI8-R
    #	ru_RU.UTF-8 sk_SK sk_SK.ISO8859-2 sk_SK.UTF-8 sl_SI
    #	sl_SI.ISO8859-2 sl_SI.UTF-8 sr_YU sr_YU.ISO8859-2 sr_YU.ISO8859-5
    #	sr_YU.UTF-8 sv_SE sv_SE.ISO8859-1 sv_SE.ISO8859-15
    #	sv_SE.UTF-8 tr_TR tr_TR.ISO8859-9 tr_TR.UTF-8 uk_UA
    #	uk_UA.ISO8859-5 uk_UA.KOI8-U uk_UA.UTF-8 zh_CN zh_CN.GB18030
    #	zh_CN.GB2312 zh_CN.GBK zh_CN.UTF-8 zh_CN.eucCN zh_HK
    #	zh_HK.Big5HKSCS zh_HK.UTF-8 zh_TW zh_TW.Big5 zh_TW.UTF-8
    #
    # tested okay.
    #
    # None of your locales were broken.
    ../lib/locale...............................FAILED test 99                   
    	Failed 1/117 tests, 99.15% okay

Note that the summary now shows only two failed tests, not three:

    Failed Test     Stat Wstat Total Fail  Failed  List of Failed
    -------------------------------------------------------------------------------
    ../lib/locale.t              117    1   0.85%  99
    op/pwent.t                     2    1  50.00%  1
    59 tests and 242 subtests skipped.
    Failed 2/996 test scripts, 99.80% okay. 2/117338 subtests failed, 100.00% okay.

So I tried running those tests individually:

    perl op/pwent.t

Output:

    1..2
    # where /etc/passwd
    # max = 25, n = 15, perfect = 0
    #
    # The failure of op/pwent test is not necessarily serious.
    # It may fail due to local password administration conventions.
    # If you are for example using both NIS and local passwords,
    # test failure is possible.  Any distributed password scheme
    # can cause such failures.
    #
    # What the pwent test is doing is that it compares the 26 first
    # entries of /etc/passwd
    # with the results of getpwuid() and getpwnam() call.  If it finds no
    # matches at all, it suspects something is wrong.
    # 
    not ok 1	# (not necessarily serious: run t/op/pwent.t by itself)
    ok 2

So that is probably harmless enough. The other test:

    cd ..
    perl -T lib/locale.t

Output:

    1..98
    ok 1
    ok 2
    ok 3
    ok 4
    ok 5
    ok 6
    ok 7
    ok 8
    ok 9
    ok 10
    ok 11
    ok 12
    ok 13
    ok 14
    ok 15
    ok 16
    ok 17
    ok 18
    ok 19
    ok 20
    ok 21
    ok 22
    ok 23
    ok 24
    ok 25
    ok 26
    ok 27
    ok 28
    ok 29
    ok 30
    ok 31
    ok 32
    ok 33
    ok 34
    ok 35
    ok 36
    ok 37
    ok 38
    ok 39
    ok 40
    ok 41
    ok 42
    ok 43
    ok 44
    ok 45
    ok 46
    ok 47
    ok 48
    ok 49
    ok 50
    ok 51
    ok 52
    ok 53
    ok 54
    ok 55
    ok 56
    ok 57
    ok 58
    ok 59
    ok 60
    ok 61
    ok 62
    ok 63
    ok 64
    ok 65
    ok 66
    ok 67
    ok 68
    ok 69
    ok 70
    ok 71
    ok 72
    ok 73
    ok 74
    ok 75
    ok 76
    ok 77
    ok 78
    ok 79
    ok 80
    ok 81
    ok 82
    ok 83
    ok 84
    ok 85
    ok 86
    ok 87
    ok 88
    ok 89
    ok 90
    ok 91
    ok 92
    ok 93
    ok 94
    ok 95
    ok 96
    ok 97
    ok 98

Note there were no failures this time.

I definitely prefer to have error-free tests before installing but in this case seeing as the warnings seem harmless enough and this is just a temporary install I decided to go ahead anyway:

    unset DYLD_LIBRARY_PATH
    sudo make install

Curiously, the resulting `perl` binary is very different in size from the pre-installed one:

    $ ll /usr/local/bin/perl
    -rwxr-xr-x  2 root  1147784 Apr 27 14:01 /usr/local/bin/perl*
    $ ll /usr/bin/perl
    -rwxr-xr-x  1 root  46752 Mar 25 09:42 /usr/bin/perl*
