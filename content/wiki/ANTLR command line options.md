---
tags: antlr wiki
---

This article lists the known [command-line](/wiki/command-line) options for the [ANTLR](/wiki/ANTLR) tool, as of version 3.0.

I found these out while trying to shoot an out-of-memory problem (see "[Handling java.lang.OutOfMemoryError](/wiki/Handling_java.lang.OutOfMemoryError)" for more information).

# Basic usage

Obtained using `java org.antlr.Tool`:

    ANTLR Parser Generator  Version 3.0 (May 17, 2007)  1989-2007
    usage: java org.antlr.Tool [args] file.g [file2.g file3.g ...]
      -o outputDir          specify output directory where all output is generated
      -fo outputDir         same as -o but force even files with relative paths to dir
      -lib dir              specify location of token files
      -depend               generate file dependencies
      -report               print out a report about the grammar(s) processed
      -print                print out the grammar without actions
      -debug                generate a parser that emits debugging events
      -profile              generate a parser that computes profiling information
      -nfa                  generate an NFA for each rule
      -dfa                  generate a DFA for each decision point
      -message-format name  specify output style for messages
      -X                    display extended argument list

# Extended options

Obtained using `java org.antlr.Tool -X`:

      -Xgrtree               print the grammar AST
      -Xdfa                  print DFA as text 
      -Xnoprune              test lookahead against EBNF block exit branches
      -Xnocollapse           collapse incident edges into DFA states
      -Xdbgconversion        dump lots of info during NFA conversion
      -Xmultithreaded        run the analysis in 2 threads
      -Xnomergestopstates    do not merge stop states
      -Xdfaverbose           generate DFA states in DOT with NFA configs
      -Xwatchconversion      print a message for each NFA before converting
      -XdbgST                put tags at start/stop of all templates in output
      -Xm m                  max number of rule invocations during conversion
      -Xmaxdfaedges m        max "comfortable" number of edges for single DFA state
      -Xconversiontimeout t  set NFA conversion timeout for each decision
      -Xnoinlinedfa          make all DFA with tables; no inline prediction with IFs
