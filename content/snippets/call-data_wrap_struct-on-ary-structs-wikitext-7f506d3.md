---
title: Call Data_Wrap_Struct on ary structs (wikitext, 7f506d3)
---

There is a minuscule overhead introduced by this commit (the allocation of three Ruby objects per parse, which in turn means three more objects involved in Ruby's mark-and-sweep Garbage Collection scheme) which brings with it a robustness enhancement: if we exit the parse method irregularly (by an exception) the three ary structs will be properly freed rather than leaking.

This was never a big deal as the structs themselves were typically small (defaulting to 64 entries each) and irregular exits shouldn't really ever happen in practice (the only times when we would exit via an exception are when we run out of memory, in which case we're totally hosed anyway and process termination is just around the corner, and when we have invalidly encoded UTF-8 input; this latter scenario may be an issue if an attacker specifically tries to consume resources by repeatedly feeding in hand-crafted bad input, but I don't know whether such an attack would be practically feasible).

The key piece of the puzzle is that the object returned by Data\_Wrap\_Struct must be locatable on the C stack in order for Ruby to refrain from collecting it prematurely. Without the volatile keyword the compiler will see that the pointer is initialized and then never used again and is free to optimize it away to nothing, which then allows Ruby to go ahead and free the structure before its time. The volatile keyword here prevents this optimization, at least in GCC, and is apparently an "accepted hack" that is used in the Ruby source itself.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
