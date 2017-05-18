---
title: Goodbye parity, hello superiority
tags: blog
---

With memoizing:

    235 specifications, 0 failures


    real    0m7.580s
    user    0m7.035s
    sys     0m0.347s

Without memoizing:

    235 specifications, 0 failures


    real    0m7.895s
    user    0m7.612s
    sys     0m0.253s

Goodbye [parity](http://www.wincent.com/a/about/wincent/weblog/archives/2007/02/another_perform.php), hello superiority. The thing which finally pushed us over the hump wasn't increasing the complexity of the grammar or the size of the input text, but increasing the complexity of the parsing operation itself; I'm now storing much richer information in the parse results which enable better error reporting and some other fancy stuff. The "fancy stuff" are basically compiler-level tricks that are made possible when your AST contains more information that helps individual nodes to know "where" they are in the original source file.
