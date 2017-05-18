---
tags: development wiki
---

While [upgrading from Ragel 5.20 to 5.21 on Mac OS X Tiger](/wiki/upgrading_from_Ragel_5.20_to_5.21_on_Mac_OS_X_Tiger) I decided to try upgrading to a the new version of [Kelbt](/wiki/Kelbt) as well, [Kelbt 0.12](/wiki/Kelbt_0.12).

Unfortunately, the tests did not pass, so I decided not to proceed with the install.

# Building

    wget http://www.cs.queensu.ca/~thurston/kelbt/kelbt-0.12.tar.gz
    tar xzvf kelbt-0.12.tar.gz 
    cd kelbt-0.12/
    ./configure 
    make
    cd test
    ./runtests

# Test output

    ../kelbt/kelbt ada1.kl -o ada1.cpp
    g++ -Wall -O3 -o ada1.bin ada1.cpp
    running ada1.bin ... passed
    ../kelbt/kelbt ada2.kl -o ada2.cpp
    ada2.kl: warning: action ordering for 674 is unset, state: 146, trans: kw_exception
    ada2.kl: warning: action ordering for 674 is unset, state: 146, trans: kw_else
    ada2.kl: warning: action ordering for 674 is unset, state: 146, trans: kw_elsif
    ada2.kl: warning: action ordering for 674 is unset, state: 146, trans: kw_when
    ada2.kl: warning: action ordering for 694 is unset, state: 327, trans: kw_exception
    ada2.kl: warning: action ordering for 694 is unset, state: 327, trans: kw_else
    ada2.kl: warning: action ordering for 694 is unset, state: 327, trans: kw_elsif
    ada2.kl: warning: action ordering for 694 is unset, state: 327, trans: kw_when
    ada2.kl: warning: action ordering for 690 is unset, state: 329, trans: kw_exception
    ada2.kl: warning: action ordering for 690 is unset, state: 329, trans: kw_else
    ada2.kl: warning: action ordering for 690 is unset, state: 329, trans: kw_elsif
    ada2.kl: warning: action ordering for 690 is unset, state: 329, trans: kw_when
    ada2.kl: warning: action ordering for 678 is unset, state: 330, trans: kw_exception
    ada2.kl: warning: action ordering for 678 is unset, state: 330, trans: kw_else
    ada2.kl: warning: action ordering for 678 is unset, state: 330, trans: kw_elsif
    ada2.kl: warning: action ordering for 678 is unset, state: 330, trans: kw_when
    ada2.kl: warning: action ordering for 682 is unset, state: 481, trans: kw_exception
    ada2.kl: warning: action ordering for 682 is unset, state: 481, trans: kw_else
    ada2.kl: warning: action ordering for 682 is unset, state: 481, trans: kw_elsif
    ada2.kl: warning: action ordering for 682 is unset, state: 481, trans: kw_when
    ada2.kl: warning: action ordering for 686 is unset, state: 520, trans: kw_exception
    ada2.kl: warning: action ordering for 686 is unset, state: 520, trans: kw_else
    ada2.kl: warning: action ordering for 686 is unset, state: 520, trans: kw_elsif
    ada2.kl: warning: action ordering for 686 is unset, state: 520, trans: kw_when
    g++ -Wall -O3 -o ada2.bin ada2.cpp
    running ada2.bin ... passed
    ../kelbt/kelbt backtrack1.kl -o backtrack1.cpp
    g++ -Wall -O3 -o backtrack1.bin backtrack1.cpp
    running backtrack1.bin ... passed
    ../kelbt/kelbt backtrack2.kl -o backtrack2.cpp
    g++ -Wall -O3 -o backtrack2.bin backtrack2.cpp
    running backtrack2.bin ... passed
    ../kelbt/kelbt backtrack3.kl -o backtrack3.cpp
    g++ -Wall -O3 -o backtrack3.bin backtrack3.cpp
    running backtrack3.bin ... passed
    ../kelbt/kelbt basic1.kl -o basic1.cpp
    g++ -Wall -O3 -o basic1.bin basic1.cpp
    basic1.cpp:58:7: error: "-" after [/tags/line #line] is not a positive integer
