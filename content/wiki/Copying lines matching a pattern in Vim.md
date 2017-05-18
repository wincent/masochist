---
tags: vim wiki
cache_breaker: 1
---

My first attempt at this looked like:

    :g/something/ normal "Ayy

(ie. for all lines matching "something", append the line to the `a` register; an uppercase "A" denotes appending to register `a` and a lowercase "a" would replace the contents of register `a`)

But it turns out [there is a shorter form](http://vim.wikia.com/wiki/Power_of_g):

    :g/something/y A
    :g/something/yank A " alternate form

To inspect the fruits of your labors:

     :registers

*Note:* if you want to clear the register `a` you can do `qaq` (which starts recording a macro into the register and immediately stops recording, leaving the register empty), or:

     :let @a=''
