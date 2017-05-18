---
tags: development wiki
---

# For [Objective-C](/wiki/Objective-C) code

    gcc -dM -E -x objective-c - <<<''

# For [C](/wiki/C) code

    gcc -dM -E -x c - <<<''

or:

    :| gcc -dM -E -x c -

or:

    touch empty.c
    cc empty.c -E -dM -o - | sort

The results I get for Mac OS X 10.4.7 (Intel) running version 2.4 of the Xcode tools:

    #define __DBL_MIN_EXP__ (-1021)
    [/tags/define #define] __FLT_MIN__ 1.17549435e-38F
    [/tags/define #define] __CHAR_BIT__ 8
    [/tags/define #define] __WCHAR_MAX__ 2147483647
    [/tags/define #define] __DBL_DENORM_MIN__ 4.9406564584124654e-324
    [/tags/define #define] __FLT_EVAL_METHOD__ 0
    [/tags/define #define] __DBL_MIN_10_EXP__ (-307)
    [/tags/define #define] __FINITE_MATH_ONLY__ 0
    [/tags/define #define] __SHRT_MAX__ 32767
    [/tags/define #define] __LDBL_MAX__ 1.18973149535723176502e+4932L
    [/tags/define #define] __APPLE_CC__ 5363
    [/tags/define #define] __UINTMAX_TYPE__ long long unsigned int
    [/tags/define #define] __SCHAR_MAX__ 127
    [/tags/define #define] __USER_LABEL_PREFIX__ _
    [/tags/define #define] __STDC_HOSTED__ 1
    [/tags/define #define] __DBL_DIG__ 15
    [/tags/define #define] __FLT_EPSILON__ 1.19209290e-7F
    [/tags/define #define] __LDBL_MIN__ 3.36210314311209350626e-4932L
    [/tags/define #define] __strong 
    [/tags/define #define] __APPLE__ 1
    [/tags/define #define] __DECIMAL_DIG__ 21
    [/tags/define #define] __LDBL_HAS_QUIET_NAN__ 1
    [/tags/define #define] __DYNAMIC__ 1
    [/tags/define #define] __GNUC__ 4
    [/tags/define #define] __MMX__ 1
    [/tags/define #define] __DBL_MAX__ 1.7976931348623157e+308
    [/tags/define #define] __DBL_HAS_INFINITY__ 1
    [/tags/define #define] __weak 
    [/tags/define #define] __DBL_MAX_EXP__ 1024
    [/tags/define #define] __SSE2_MATH__ 1
    [/tags/define #define] __LONG_LONG_MAX__ 9223372036854775807LL
    [/tags/define #define] __GXX_ABI_VERSION 1002
    [/tags/define #define] __FLT_MIN_EXP__ (-125)
    [/tags/define #define] __DBL_MIN__ 2.2250738585072014e-308
    [/tags/define #define] __DBL_HAS_QUIET_NAN__ 1
    [/tags/define #define] __REGISTER_PREFIX__ 
    [/tags/define #define] __NO_INLINE__ 1
    [/tags/define #define] __i386 1
    [/tags/define #define] __FLT_MANT_DIG__ 24
    [/tags/define #define] __VERSION__ "4.0.1 (Apple Computer, Inc. build 5363)"
    [/tags/define #define] __tune_nocona__ 1
    [/tags/define #define] i386 1
    [/tags/define #define] __i386__ 1
    [/tags/define #define] __SIZE_TYPE__ long unsigned int
    [/tags/define #define] __FLT_RADIX__ 2
    [/tags/define #define] __LDBL_EPSILON__ 1.08420217248550443401e-19L
    [/tags/define #define] __SSE_MATH__ 1
    [/tags/define #define] __FLT_HAS_QUIET_NAN__ 1
    [/tags/define #define] __FLT_MAX_10_EXP__ 38
    [/tags/define #define] __LONG_MAX__ 2147483647L
    [/tags/define #define] __FLT_HAS_INFINITY__ 1
    [/tags/define #define] __LITTLE_ENDIAN__ 1
    [/tags/define #define] __LDBL_MANT_DIG__ 64
    [/tags/define #define] __CONSTANT_CFSTRINGS__ 1
    [/tags/define #define] __WCHAR_TYPE__ int
    [/tags/define #define] __FLT_DIG__ 6
    [/tags/define #define] __INT_MAX__ 2147483647
    [/tags/define #define] __nocona 1
    [/tags/define #define] __FLT_MAX_EXP__ 128
    [/tags/define #define] __DBL_MANT_DIG__ 53
    [/tags/define #define] __WINT_TYPE__ int
    [/tags/define #define] __SSE__ 1
    [/tags/define #define] __LDBL_MIN_EXP__ (-16381)
    [/tags/define #define] __MACH__ 1
    [/tags/define #define] __LDBL_MAX_EXP__ 16384
    [/tags/define #define] __LDBL_MAX_10_EXP__ 4932
    [/tags/define #define] __DBL_EPSILON__ 2.2204460492503131e-16
    [/tags/define #define] __GNUC_PATCHLEVEL__ 1
    [/tags/define #define] __LDBL_HAS_INFINITY__ 1
    [/tags/define #define] __INTMAX_MAX__ 9223372036854775807LL
    [/tags/define #define] __FLT_DENORM_MIN__ 1.40129846e-45F
    [/tags/define #define] __PIC__ 1
    [/tags/define #define] __FLT_MAX__ 3.40282347e+38F
    [/tags/define #define] __SSE2__ 1
    [/tags/define #define] __FLT_MIN_10_EXP__ (-37)
    [/tags/define #define] __INTMAX_TYPE__ long long int
    [/tags/define #define] __nocona__ 1
    [/tags/define #define] __GNUC_MINOR__ 0
    [/tags/define #define] __DBL_MAX_10_EXP__ 308
    [/tags/define #define] __LDBL_DENORM_MIN__ 3.64519953188247460253e-4951L
    [/tags/define #define] __PTRDIFF_TYPE__ int
    [/tags/define #define] __LDBL_MIN_10_EXP__ (-4931)
    [/tags/define #define] __LDBL_DIG__ 18
