---
tags: red.hat perl
---

These notes were made while installing [Date::Calc 5.4](/wiki/Date%3a%3aCalc_5.4) on [RHEL 5.1](/wiki/RHEL_5.1). It has a fairly complex dependency hierarchy:

-   Date::Calc
    -   Bit::Vector
        -   Carp::Clan
            -   Test::Exception
                -   Sub::Uplevel
                -   Test::Simple
                -   Test::More (installed with Test::Simple)
                -   Test::Builder (installed with Test::Simple)
                -   Test::Builder::Tester (installed with Test::Simple)

So these have to be installed in reverse order.

## Test::Simple

    wget http://search.cpan.org/CPAN/authors/id/M/MS/MSCHWERN/Test-Simple-0.78.tar.gz
    tar xzvf Test-Simple-0.78.tar.gz 
    cd Test-Simple-0.78
    perl Makefile.PL 
    make
    make test
    sudo make install

## Sub::Uplevel

    wget http://search.cpan.org/CPAN/authors/id/D/DA/DAGOLDEN/Sub-Uplevel-0.1901.tar.gz
    tar xzvf Sub-Uplevel-0.1901.tar.gz 
    cd Sub-Uplevel-0.1901
    perl Makefile.PL
    make
    make test
    sudo make install

## Test::Exception

    wget http://search.cpan.org/CPAN/authors/id/A/AD/ADIE/Test-Exception-0.27.tar.gz
    tar xzvf Test-Exception-0.27.tar.gz 
    cd Test-Exception-0.27
    less README 
    perl Makefile.PL
    make
    make test
    sudo make install

## Carp::Clan

    wget http://search.cpan.org/CPAN/authors/id/J/JJ/JJORE/Carp-Clan-6.00.tar.gz
    tar xzvf Carp-Clan-6.00.tar.gz 
    cd Carp-Clan-6.00
    perl Makefile.PL
    make
    make test
    sudo make install

## Bit::Vector

    wget http://search.cpan.org/CPAN/authors/id/S/ST/STBEY/Bit-Vector-6.4.tar.gz
    tar xzvf Bit-Vector-6.4.tar.gz 
    cd Bit-Vector-6.4
    perl Makefile.PL
    make
    make test
    sudo make install

## Date::Calc itself

    wget http://search.cpan.org/CPAN/authors/id/S/ST/STBEY/Date-Calc-5.4.tar.gz
    tar xzvf Date-Calc-5.4.tar.gz 
    cd Date-Calc-5.4
    perl Makefile.PL
    make
    make test
    sudo make install
