---
title: Things you learn from looking at the HexFiend source code
tags: blog
---

static BOOL isHex(unichar c) {
        switch (c) {
        case '0' ... '9':
        case 'a' ... 'f':
        case 'A' ... 'F':
            return YES;
        default: return NO;
        }
    }

Well that one is an eye-opener. I have *often* wished for the "range" shorthand provided here by the `...` (three dots) operator. The thing is, I'd never seen this operator in [C](http://www.wincent.com/knowledge-base/C) code before and my trusty [C Pocket Reference](http://www.wincent.com/a/about/wincent/weblog/archives/2006/01/my_favorite_pro.php) only makes one mention of the operator as an "optional argument indicator". In its section on `case` labels it only says:

> Every `case` label has the form `case const:`; where *const* is a constant integer expression.

How could I have missed such a useful thing? The [Wikipedia](http://www.wincent.com/knowledge-base/Wikipedia) page on [page on C and C++ operators](http://en.wikipedia.org/wiki/Operators_in_C_and_C%2B%2B) makes no reference to it, nor does the [main article on C](http://en.wikipedia.org/wiki/C_(programming_language)).

The 550-page [C99 standard](http://www.open-std.org/jtc1/sc22/wg14/www/docs/n1124.pdf) only makes references to `...` as the "ellipsis punctuator" and describes how it is used to indicate an unspecified number of additional arguments.

Finally I found the answer: it's a [GNU GCC extension](http://gcc.gnu.org/onlinedocs/gcc-4.2.1/gcc/Case-Ranges.html#Case-Ranges). As noted by the documentation:

> Write spaces around the `...`, for otherwise it may be parsed wrong when you use it with integer values.

Very useful indeed.
