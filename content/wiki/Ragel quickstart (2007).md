---
tags: ragel wiki
cache_breaker: 1
---

For historical interest, this article demonstrates the basic work flow for [Ragel](/wiki/Ragel) development as it was back in 2007, when it was necessary to do a two-step process involving separate "frontend" and "backend" tools. Since then things have become considerably easier and it is now only necessary to run a single [command line](/wiki/command_line) tool. For an example based on the current version of [Ragel](/wiki/Ragel), see "[Ragel quickstart](/wiki/Ragel_quickstart)".

See also the [Ragel changelog](http://www.complang.org/ragel/ChangeLog), where it is detailed how Ragel was split into separate frontend and backend executables in version 5.0 (17 December 2005) and became as single executable again in version 6.4 (22 March 2009).

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

# Run the frontend

Now run the `ragel` frontend [command line](/wiki/command_line) tool to produce the intermediate [XML](/wiki/XML) output:

```shell
$ ragel -C simple.rl -o simple.xml
```

# Run the code-gen (backend)

Now we use the code-gen (backend) to transform the intermediate [XML](/wiki/XML) into [C](/wiki/C) code:

```shell
$ rlgen-cd -o simple.c simple.xml
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
