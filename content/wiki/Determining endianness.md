---
tags: objective.c
cache_breaker: 1
---

I just had cause to remove some code from a project I was working on; where previously I had to detect endianness I now no longer need to. But the code snippet may be useful in the future so I am pasting it in here:

    BOOL is_little_endian(void)
    {
    [/tags/if #if] defined(__LITTLE_ENDIAN__)
        return YES;
    [/tags/elif #elif] defined(__BIG_ENDIAN__)
        return NO;
    [/tags/else #else]
        // try to figure out endianness dynamically
        int i = 0;
        ((char *)(&i))[0] = 1;
        return (i == 1);
    [/tags/endif #endif]
    }

This isn't the exact code I used, but it demonstrates the idea.
