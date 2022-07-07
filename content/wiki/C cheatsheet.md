---
tags: wiki c
title: C cheatsheet
---

Here follow some notes from The World's Worst C Programmer.

I've written lots of C or C-like (eg. [Objective-C]) code over the years, but I do it rarely enough nowadays (ie. writing this in 2022) that whenever I come back to it there are a bunch of things I have forgotten and have to look up again. So, here is a scratchpad for me to jot some notes down in the hope that I won't forget, again, what all these details are.

# Debugging segmentation faults

## With `clang`/`lldb` on [macOS]

1. Build with `-g` (debug symbols) and `-O0` (optimizations off).
2. Launch with `lldb --file $executable`.
3. Run with `r`.
4. See backtrace with `bt`.

## With `gdb` on [Arch Linux]

While you can also launch executables with `gdb` (ie. after `yay -S gdb`), you have the additional option of inspecting a core dump after the fact; example:

```
# unzstd /var/lib/systemd/coredump/core.nvim.1000.008a013d9f0d4e769d9dbcfdd9d9584a.13538.1656944479000000.std
# chmod 666 /var/lib/systemd/coredump/core.nvim.1000.008a013d9f0d4e769d9dbcfdd9d9584a.13538.1656944479000000
$ gdb nvim /var/lib/systemd/coredump/core.nvim.1000.008a013d9f0d4e769d9dbcfdd9d9584a.13538.1656944479000000
(gdb) bt
```

ie.

1. Undo zstandard compression on root-owned core dump file.
2. Change ownership so that normal user can read file.
3. Relaunch executable (this time, `nvim`) with `gdb` and the core dump file.
4. Print the backtrace.

# Viewing generated assembly

Given a source file, `source.c`, produce output `source.s` with:

```bash
gcc -S source.c
```

# `size_t`

On Darwin, this is equivalent to `unsigned long` (which nowadays means `uint64_t`, as [defined in `stdint.h`](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/stdint.h.html)), but in general a good heuristic for remembering _when_ to use this and _what_ it is:

- Use it for things whose size is to be measured in bytes.
- Its size is big enough to represent whatever the "biggest object" could be on the host system.
- Technically, `size_t` [is defined, in `stddef.h`, as](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/stddef.h.html) the type of the result of the `sizeof()` operator.

# `static` functions

A function declared with the `static` keyword is not visible outside of the translation unit in which it is defined.

[Objective-C]: /wiki/Objective-C
[macOS]: /wiki/macOS
[Arch Linux]: /wiki/Arch_Linux
