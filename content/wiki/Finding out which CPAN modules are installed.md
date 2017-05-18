---
tags: perl wiki
---

I recently wanted to get a list of all [CPAN](/wiki/CPAN) modules installed on my system. Of the many possibly ways of doing this that I discovered by [Googling](/wiki/Googling), [this one](http://cygwin.com/ml/cygwin/2003-11/msg00545.html) seemed to be the best:

    #!/usr/bin/perl

    # found at: http://cygwin.com/ml/cygwin/2003-11/msg00545.html

    use CPAN;
    # list all modules on my disk and note the newer versions
    for $mod (CPAN::Shell->expand("Module","/./")){
            next unless $mod->inst_file;
                    # here only when installed
            if ($mod->inst_version eq "undef") {
                    printf "%s :No VERSION\n", $mod->id;
            }
            elsif ($mod->uptodate){
                    printf "%s %s\n", $mod->id, $mod->inst_version
            }
            else {
                    # here when not up to date
            printf "%s %s, NEW VERSION=%s\n",
                    $mod->id, $mod->inst_version, $mod->cpan_version;
            }
    }

This will produce an alphabetically-ordered listing of installed modules, with version information if available.

# Partial example output

    CGI 3.20, NEW VERSION=3.29
    CGI::Carp 1.29
    CGI::Cookie 1.27, NEW VERSION=1.28
    CGI::Fast 1.07
    CGI::Pretty 1.08
    CGI::Push 1.04
    CGI::Util 1.5
    CPAN 1.87, NEW VERSION=1.9102
    CPAN::Admin 5.400561, NEW VERSION=5.400844
    CPAN::Debug 5.400561, NEW VERSION=5.400955
    CPAN::FirstTime 5.400657, NEW VERSION=5.401669
    CPAN::HandleConfig 5.400657, NEW VERSION=5.401744
    CPAN::Nox 5.400561, NEW VERSION=5.400844
    CPAN::Tarzip 5.400659, NEW VERSION=5.401717
    CPAN::Version 5.400561, NEW VERSION=5.401387
    Carp 1.01, NEW VERSION=1.04
    Carp::Clan 5.3, NEW VERSION=5.9
    Class::ErrorHandler 0.01
    Class::ISA 0.32, NEW VERSION=0.33
    Class::Singleton 1.03
    Class::Struct 0.63
    Compress::Zlib 1.41, NEW VERSION=2.004
    Config :No VERSION
    Convert::ASN1 0.19, NEW VERSION=0.21
    Convert::ASN1::parser :No VERSION
    Convert::PEM 0.07
    Convert::PEM::CBC :No VERSION
