---
tags: wiki
---

From <http://www.gnu.org/software/libc/manual/html_mono/libc.html>:

> This signal is generated when an invalid pointer is dereferenced. Like SIGSEGV, this signal is typically the result of dereferencing an uninitialized pointer. The difference between the two is that SIGSEGV indicates an invalid access to valid memory, while SIGBUS indicates an access to an invalid address. In particular, SIGBUS signals often result from dereferencing a misaligned pointer, such as referring to a four-word integer at an address not divisible by four. (Each kind of computer has its own requirements for address alignment.) &lt;br /&gt; The name of this signal is an abbreviation for "bus error".
