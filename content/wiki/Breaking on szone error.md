---
tags: wiki
---

Sometimes a programming error will cause a "double free" warning (or some other memory-related problem) to be printed to the console with the following advice:

    set a breakpoint in szone_error to debug

This doesn't always work. In those cases, try setting a breakpoint on `malloc_printf` as well (because all `malloc`-related error messages do go through that function).

# See also

-   <http://www.cocoabuilder.com/archive/message/xcode/2005/10/12/43>
