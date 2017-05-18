---
tags: ragel wiki
cache_breaker: 1
---

This article demonstrates the basic work flow for [Ragel](/wiki/Ragel) development.

# `simple.rl`

Start with the simplest code possible, a recognizer for strings of letters (taken from the [Ragel](/wiki/Ragel) user guide):

    #include <stdio.h>
     
    %% machine foo; 

    int main(int argc, char **argv) 
    { 
        %% write data noerror nofinal; 
        int cs, res = 0; 
        if (argc > 1)
        {
            char *p = argv[1]; 
            %%{ 
                main := [a-z]+ 0 @{ res = 1; fbreak; };
                write init; 
                write exec noend; 
            }%% 
        } 
        printf("execute = %i\n", res ); 
        return 0; 
    }

# Run `ragel`

Now run the `ragel` on the file:

```shell
$ ragel simple.rl
```

# Compile the [C](/wiki/C) code

```shell
$ gcc simple.c -o simple
```

# Run

A sample session; 0 is printed if no match occurs, 1 is printed on success:

```shell
$ ./simple 
execute = 0
$ ./simple foo
execute = 1
$ ./simple fo4
execute = 0
```

# See also

-   [Ragel quickstart (2007)](/wiki/Ragel_quickstart_%282007%29): description of workflow using older versions of Ragel
