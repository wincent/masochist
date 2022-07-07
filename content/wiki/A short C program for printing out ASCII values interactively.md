---
tags: c wiki
title: A short C program for printing out ASCII values interactively
---

```c
void main(void) {int c; while(c = getchar()) printf("%d 0x%02X\n", c, c);}
```

The same, but formatted less golfily:

```c
#include <stdio.h>

int main(void) {
  int c;

  while ((c = getchar())) {
    printf("%d 0x%02X\n", c, c);
  }

  return 0;
}
```

Assuming that's saved into a file called `a.c`, compile and run (on [macOS]) with:

```bash
clang a.c && ./a.out
```

[macOS]: /wiki/macOS
