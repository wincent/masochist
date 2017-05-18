---
tags: java wiki
---

[Java](/wiki/Java) is an [object-oriented](/wiki/object-oriented) programming language.

# Things I don't like about [Java](/wiki/Java)

-   It's verbose:

<!-- -->

    # Java
    System.out.println("Hello, world!");

    # C
    printf("Hello, world!\n");

    # Ruby
    puts "Hello, world!"

-   It's slow:

As a concrete example, [ANTLR](/wiki/ANTLR) parsers generated using the [Java](/wiki/Java) target run about half as fast as those generated using the [C language target](/wiki/C_language_target).

-   It's bloated:

As an example, the [ANTLRWorks](/wiki/ANTLRWorks) instance I am currently running is currently taking up 114 MB of real memory (608 MB of virtual memory) and has 20 threads and 956 Mach ports. For comparison, the running copy of [BBEdit](/wiki/BBEdit) is using 34 MB of real memory (263 MB virtual), and has only 4 threads and 113 Mach ports.

As another example, a just-launched copy of Azureus, when idle, consumes 53 MB of real memory (577 MB virtual) and spawns an astonishing 46 threads, with 877 Mach ports.

-   `CLASSPATH`
