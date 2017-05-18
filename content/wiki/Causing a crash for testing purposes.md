---
tags: wiki
---

# Faking a [SIGBUS](/wiki/SIGBUS)

In brief:

    raise(SIGBUS);

`raise` returns -1 on failure and 0 on success, so you should check the return value.

# Causing a real [SIGBUS](/wiki/SIGBUS)

    // cause a crash
    id *ref = NULL;
    *ref = @"foobar";

# Faking a [SIGSEGV](/wiki/SIGSEGV)

    raise(SIGSEGV);

# Causing a real [SIGSEGV](/wiki/SIGSEGV)

I'm not actually sure how to trigger a real [SIGSEGV](/wiki/SIGSEGV) in a reliable fashion that works in both debug and release builds. For example the following might work in debug builds but fail on release builds:

    char foo[10];
    foo[100000] = 'a';
