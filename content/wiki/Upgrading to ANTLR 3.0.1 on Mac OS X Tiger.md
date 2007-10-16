---
tags: antlr
---

I held off on this upgrade for a while because the 3.x series of [ANTLR](/wiki/ANTLR) is still fairly young and I had a working recognizer and didn't want to risk breaking it (in order to get my 3.0 recognizer working I'd had to make a couple of patches to the source and rebuild, and I wasn't sure if all or any of these patches had been accepted upstream into ANTLR for 3.0.1).

# Upgrade procedure

    # grab the source
    wget "http://antlr.org/download/antlr-3.0.1.tar.gz"
    tar xzvf antlr-3.0.1.tar.gz 

    # move it into place
    sudo mv antlr-3.0.1 /usr/local/

    # replace the old symbolic link
    sudo rm -f /usr/local/antlr
    $(cd /usr/local && sudo ln -s antlr-3.0.1 antlr)

    # update the CLASSPATH environment variable
    # stick it in your ~/.bash_profile as well for good measure
    export CLASSPATH=".:/usr/local/antlr/lib/antlr-3.0.1.jar"
    export CLASSPATH="$CLASSPATH:/usr/local/antlr/lib/antlr-2.7.7.jar"
    export CLASSPATH="$CLASSPATH:/usr/local/antlr/lib/antlr-runtime-3.0.1.jar"
    export CLASSPATH="$CLASSPATH:/usr/local/antlr/lib/stringtemplate-3.1b1.jar"

    # now build C target runtime
    tar xzvf antlr-3.0.1.tar.gz 
    cd antlr-3.0.1/runtime/C/dist
    tar xzvf libantlr3c-3.0.1.tar.gz 
    cd libantlr3c-3.0.1
    ./configure
    make

    # doesn't do anything yet
    make check

    # actually install
    sudo make install

# Testing

Unfortunately the new version does break my existing recognizer.

## Before

    $ ./wiki_text_spec.rb 
    ............................................................................................................................................................

    Finished in 0.075629 seconds

    156 examples, 0 failures

## After

    $ ./wiki_text_spec.rb 
    ../wiki_text_spec.rb:21: [BUG] Segmentation fault
    ruby 1.8.6 (2007-03-13) [i686-darwin8.8.1]

    Abort trap

The full stack trace looks like this:

    Thread 0 Crashed:
    0   <<00000000>> 	0xffff07c2 __memcpy + 34 (cpu_capabilities.h:228)
    1   ruby             	0x0006ba8b str_new + 79 (string.c:96)
    2   wiki_text.bundle 	0x005a691c wiki_text_parser_parse + 5256 (wiki_text.c:1089)
    3   ruby             	0x00003453 call_cfunc + 486 (eval.c:5659)
    4   ruby             	0x0000c0d1 rb_call0 + 666 (eval.c:5815)
    5   ruby             	0x0000cbe4 rb_call + 146 (eval.c:6063)
    6   ruby             	0x0000a1b3 rb_eval + 7636 (eval.c:3447)
    7   ruby             	0x0000a0c6 rb_eval + 7399 (eval.c:3441)
    8   ruby             	0x0000a0c6 rb_eval + 7399 (eval.c:3441)
    9   ruby             	0x0001010d rb_yield_0 + 1102 (eval.c:4991)
    10  ruby             	0x000111e4 yield_under_i + 43 (eval.c:6656)
    11  ruby             	0x00003969 exec_under + 442 (eval.c:6605)
    12  ruby             	0x000039ca specific_eval + 60 (eval.c:6704)
    13  ruby             	0x00003453 call_cfunc + 486 (eval.c:5659)
    14  ruby             	0x0000c0d1 rb_call0 + 666 (eval.c:5815)
    15  ruby             	0x0000cbe4 rb_call + 146 (eval.c:6063)
    16  ruby             	0x0000a1b3 rb_eval + 7636 (eval.c:3447)
    17  ruby             	0x00016a10 block_pass + 726 (eval.c:8896)
    18  ruby             	0x000095c2 rb_eval + 4579 (eval.c:3163)
    19  ruby             	0x0000b231 rb_eval + 11858 (eval.c:3263)
    20  ruby             	0x0000c8b5 rb_call0 + 2686 (eval.c:5966)
    21  ruby             	0x0000cbe4 rb_call + 146 (eval.c:6063)
    22  ruby             	0x000096ef rb_eval + 4880 (eval.c:3462)
    23  ruby             	0x0000a949 rb_eval + 9578 (eval.c:3638)
    24  ruby             	0x0001010d rb_yield_0 + 1102 (eval.c:4991)
    25  ruby             	0x00009f69 rb_eval + 7050 (eval.c:3252)
    26  ruby             	0x00009f1c rb_eval + 6973 (eval.c:3391)
    27  ruby             	0x0000c8b5 rb_call0 + 2686 (eval.c:5966)
    28  ruby             	0x0000cbe4 rb_call + 146 (eval.c:6063)
    29  ruby             	0x0000a1b3 rb_eval + 7636 (eval.c:3447)
    30  ruby             	0x0000ba9f rb_eval + 14016 (eval.c:3177)
    31  ruby             	0x0000c8b5 rb_call0 + 2686 (eval.c:5966)
    32  ruby             	0x0000cbe4 rb_call + 146 (eval.c:6063)
    33  ruby             	0x0000a1b3 rb_eval + 7636 (eval.c:3447)
    34  ruby             	0x0001010d rb_yield_0 + 1102 (eval.c:4991)
    35  ruby             	0x00011305 rb_yield + 33 (eval.c:5074)
    36  ruby             	0x0007c011 rb_ary_each + 43 (array.c:1137)
    37  ruby             	0x0000c0d1 rb_call0 + 666 (eval.c:5815)
    38  ruby             	0x0000cbe4 rb_call + 146 (eval.c:6063)
    39  ruby             	0x0000a1b3 rb_eval + 7636 (eval.c:3447)
    40  ruby             	0x0000ba9f rb_eval + 14016 (eval.c:3177)
    41  ruby             	0x0000c8b5 rb_call0 + 2686 (eval.c:5966)
    42  ruby             	0x0000cbe4 rb_call + 146 (eval.c:6063)
    43  ruby             	0x0000a1b3 rb_eval + 7636 (eval.c:3447)
    44  ruby             	0x0001010d rb_yield_0 + 1102 (eval.c:4991)
    45  ruby             	0x00011305 rb_yield + 33 (eval.c:5074)
    46  ruby             	0x0007c011 rb_ary_each + 43 (array.c:1137)
    47  ruby             	0x0000c0d1 rb_call0 + 666 (eval.c:5815)
    48  ruby             	0x0000cbe4 rb_call + 146 (eval.c:6063)
    49  ruby             	0x0000a1b3 rb_eval + 7636 (eval.c:3447)
    50  ruby             	0x0000ba9f rb_eval + 14016 (eval.c:3177)
    51  ruby             	0x0000c8b5 rb_call0 + 2686 (eval.c:5966)
    52  ruby             	0x0000cbe4 rb_call + 146 (eval.c:6063)
    53  ruby             	0x0000a891 rb_eval + 9394 (eval.c:3468)
    54  ruby             	0x0000b231 rb_eval + 11858 (eval.c:3263)
    55  ruby             	0x0000b4bc rb_eval + 12509 (eval.c:3311)
    56  ruby             	0x0000c8b5 rb_call0 + 2686 (eval.c:5966)
    57  ruby             	0x0000cbe4 rb_call + 146 (eval.c:6063)
    58  ruby             	0x0000a1b3 rb_eval + 7636 (eval.c:3447)
    59  ruby             	0x0001010d rb_yield_0 + 1102 (eval.c:4991)
    60  ruby             	0x00010afd proc_invoke + 1058 (eval.c:8581)
    61  ruby             	0x00010c03 call_end_proc + 161 (eval.c:7846)
    62  ruby             	0x0001257f rb_exec_end_proc + 434 (eval.c:7928)
    63  ruby             	0x00012626 ruby_finalize_0 + 119 (eval.c:1541)
    64  ruby             	0x000128f4 ruby_cleanup + 51 (eval.c:1570)
    65  ruby             	0x00012aa8 ruby_stop + 17 (eval.c:1619)
    66  ruby             	0x0001968d ruby_run + 80 (eval.c:1640)
    67  ruby             	0x00001a83 main + 45 (main.c:48)
    68  ruby             	0x00001a3a _start + 216
    69  ruby             	0x00001961 start + 41

## Troubleshooting

First thing I decided to do was look and see if any of the patches described in "[Patches to ANTLR 3.0](/wiki/Patches_to_ANTLR_3.0)" had been applied to the new version:

-   Missing parentheses around predicates: fixed.
-   Bug in C runtime column handling: not fixed; so I reapplied the fix, now it's at about line 183 in the file `runtime/C/dist/libantlr3c-3.0.1/src/antlr3inputstream.c`:

<!-- -->

    --- runtime/C/dist/libantlr3c-3.0.1/src/antlr3inputstream.c.old 2007-08-10 21:23:05.000000000 +0200
    +++ runtime/C/dist/libantlr3c-3.0.1/src/antlr3inputstream.c     2007-10-16 00:17:51.000000000 +0200
    @@ -180,7 +180,7 @@
     
         input->nextChar            = input->data;  /* Input at first character */
         input->line                        = 1;            /* starts at line 1         */
    -    input->charPositionInLine  = -1;
    +    input->charPositionInLine  = 0;
         input->currentLine         = input->data;
         input->markDepth           = 0;            /* Reset markers            */

-   Filter mode: not fixed, so reapplied:

<!-- -->

    --- src/org/antlr/codegen/CodeGenerator.java.old        2007-10-16 00:21:05.000000000 +0200
    +++ src/org/antlr/codegen/CodeGenerator.java    2007-10-16 00:22:18.000000000 +0200
    @@ -298,7 +298,8 @@
                    }
     
                    boolean filterMode = grammar.getOption("filter")!=null &&
    -                                                         grammar.getOption("filter").equals("true");
    +                                                         grammar.getOption("filter").equals("true") &&
    +                                                         ( grammar.type==Grammar.LEXER );
                    boolean canBacktrack = grammar.getSyntacticPredicates()!=null ||
                                                               filterMode;

# Rebuilding ANTLR

In order for these fixes to take effect I had to rebuild ANTLR itself. Unfortunately, the steps described in "[Rebuilding ANTLR](/wiki/Rebuilding_ANTLR)" no longer work for some unknown reason.

To simplify troubleshooting I first did:

    unset CLASSPATH

And then:

    ant build

The output was similar (100 errors) to my initial efforts at building ANTLR 3.0, described in "[Rebuilding ANTLR](/wiki/Rebuilding_ANTLR)". So I tried adding [JUnit](/wiki/JUnit) to the `CLASSPATH`:

    export CLASSPATH="/usr/local/junit/junit.jar"

Now `ant build` yielded only 13 errors, as far as I can tell, all of the duplicate class warnings like this:

    compile:
      [myjavac] Compiling 126 source files to /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/build/classes
      [myjavac] /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/codegen/ANTLRLexer.java:61: duplicate class: org.antlr.tool.ANTLRLexer
      [myjavac] public class ANTLRLexer extends antlr.CharScanner implements ANTLRTokenTypes, TokenStream
      [myjavac]        ^
      [myjavac] /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/codegen/ANTLRParser.java:72: duplicate class: org.antlr.tool.ANTLRParser
      [myjavac] public class ANTLRParser extends antlr.LLkParser       implements ANTLRTokenTypes
      [myjavac]        ^

[Google](/wiki/Google) reveals [this post](http://www.antlr.org:8080/pipermail/antlr-interest/2007-September/023639.html) from someone with a similar problem trying to build ANTLR 3.0.1, unfortunately with no replies. It seems that this problem is definitely a new one introduced in 3.0.1.

It appears that the errors are identical regardless of whether `antlr-2.7.7.jar` and `stringtemplate-3.1b1.jar` are exported in the `CLASSPATH`, and using relative or absolute paths makes no difference either.

My suspicion was that the breakage was introduced into `build.xml` in [changeset 3611](http://fisheye2.cenqua.com/changelog/antlr?cs=3611), and hopefully fixed in [changeset 3775](http://fisheye2.cenqua.com/changelog/antlr?cs=3775). Unfortunately [that version](http://fisheye2.cenqua.com/browse/~raw,r=3775/antlr/build.xml) can't be downloaded right now due to a bug or a misconfiguration in [FishEye](http://fisheye2.cenqua.com/) (if you'll try you just see "Install bcel in the classpath to have automatic version in jar name Tests failed" in your browser window). You can't download a full tarball snapshot either, as it's once again broken; my first try yielded a useless 144KB archive that can't be extracted.

The latest intermediate build released by Terence is from [18 July](http://www.antlr.org/download/build/antlr-2007-07-18.17.tar.gz). On downloading this I was able to confirm that changeset 3775 doesn't actually fix the problem, and the file that comes with ANTLR 3.0.1 is identical to that file.

So my next tactic was to go back to the last known-good build file, the one that came with ANTLR 3.0, and compare it to the 3.0 one. Unfortunately there are far too many changes to really grok what's gone wrong. I tried temporarily moving the `antlr-3.0.1.jar` and `antlr-runtime-3.0.1.jar` files out the way (seeing as the `build.xml` file appears to slurp in all `.jar` files in the `lib` subdirectory unconditionally, but the build errors persist.

I was able to find out a bit more by looking at the output of `ant -v build`; note the 13 duplicate files from the `codegen` subdirectory at the end of the list of files to be compiled:

      [myjavac] Files to be compiled:
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/Tool.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/analysis/DFA.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/analysis/DFAOptimizer.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/analysis/DFAState.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/analysis/DecisionProbe.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/analysis/Label.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/analysis/LookaheadSet.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/analysis/NFA.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/analysis/NFAConfiguration.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/analysis/NFAContext.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/analysis/NFAConversionThread.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/analysis/NFAState.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/analysis/NFAToDFAConverter.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/analysis/RuleClosureTransition.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/analysis/SemanticContext.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/analysis/State.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/analysis/StateCluster.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/analysis/Transition.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/codegen/ACyclicDFACodeGenerator.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/codegen/ActionTranslatorLexer.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/codegen/CPPTarget.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/codegen/CSharpTarget.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/codegen/CTarget.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/codegen/CodeGenTreeWalker.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/codegen/CodeGenTreeWalkerTokenTypes.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/codegen/CodeGenerator.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/codegen/JavaTarget.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/codegen/ObjCTarget.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/codegen/PythonTarget.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/codegen/RubyTarget.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/codegen/Target.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/misc/Barrier.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/misc/BitSet.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/misc/IntArrayList.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/misc/IntSet.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/misc/Interval.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/misc/IntervalSet.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/misc/MutableInteger.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/misc/OrderedHashSet.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/misc/Utils.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/BaseTest.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/DebugTestAutoAST.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/DebugTestRewriteAST.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/ErrorQueue.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestASTConstruction.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestAttributes.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestAutoAST.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestCharDFAConversion.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestCommonTreeNodeStream.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestDFAConversion.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestDFAMatching.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestInterpretedLexing.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestInterpretedParsing.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestIntervalSet.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestJavaCodeGeneration.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestLexer.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestMessages.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestNFAConstruction.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestRewriteAST.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestRewriteTemplates.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestSemanticPredicateEvaluation.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestSemanticPredicates.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestSets.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestSymbolDefinitions.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestSyntacticPredicateEvaluation.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestTemplates.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestTokenRewriteStream.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestTreeNodeStream.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestTreeParsing.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestTreeWizard.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/test/TestUnBufferedTreeNodeStream.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/ANTLRErrorListener.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/ANTLRLexer.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/ANTLRParser.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/ANTLRTokenTypes.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/ANTLRTreePrinter.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/ANTLRTreePrinterTokenTypes.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/ActionAnalysisLexer.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/AssignTokenTypesWalker.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/AssignTokenTypesWalkerTokenTypes.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/Attribute.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/AttributeScope.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/BuildDependencyGenerator.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/DOTGenerator.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/DefineGrammarItemsWalker.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/DefineGrammarItemsWalkerTokenTypes.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/ErrorManager.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/FASerializer.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/Grammar.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/GrammarAST.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/GrammarAnalysisAbortedMessage.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/GrammarDanglingStateMessage.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/GrammarInsufficientPredicatesMessage.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/GrammarNonDeterminismMessage.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/GrammarReport.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/GrammarSanity.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/GrammarSemanticsMessage.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/GrammarSyntaxMessage.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/GrammarUnreachableAltsMessage.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/Interp.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/Interpreter.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/LeftRecursionCyclesMessage.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/Message.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/NFAFactory.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/NameSpaceChecker.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/NonRegularDecisionMessage.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/RandomPhrase.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/RecursionOverflowMessage.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/Rule.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/RuleLabelScope.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/ToolMessage.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/TreeToNFAConverter.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/src/org/antlr/tool/TreeToNFAConverterTokenTypes.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/codegen/ANTLRLexer.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/codegen/ANTLRParser.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/codegen/ANTLRTokenTypes.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/codegen/ANTLRTreePrinter.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/codegen/ANTLRTreePrinterTokenTypes.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/codegen/AssignTokenTypesWalker.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/codegen/AssignTokenTypesWalkerTokenTypes.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/codegen/CodeGenTreeWalker.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/codegen/CodeGenTreeWalkerTokenTypes.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/codegen/DefineGrammarItemsWalker.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/codegen/DefineGrammarItemsWalkerTokenTypes.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/codegen/TreeToNFAConverter.java
      [myjavac]     /Users/wincent/trabajo/vendor/ANTLR/antlr-3.0.1/codegen/TreeToNFAConverterTokenTypes.java

So with my zero knowledge of how `ant` works I decided to try a number of quick fixes:

-   `mv` the entire `codegen` directory out the way: fails
-   Move the individual `.java` files out the way: fails

<!-- -->

    for FILE in `ls *.java`
    do
      mv $FILE $FILE.disabled
    done

-   Instead of moving *those* files out the way, move the other ones: works

<!-- -->

    mkdir /tmp/hide
    cd codegen
    FILES=`ls *.java`
    cd ..
    cd src/org/antlr/tool/
    for FILE in $FILES
    do
      mv $FILE /tmp/hide/
    done
    cd ../codegen
    mv CodeGenTreeWalker.java CodeGenTreeWalkerTokenTypes.java /tmp/hide/

I don't really know anything about Java or like it, and this kind of struggle with XML build files is just one reason why.

Install the custom jar:

    sudo cp build/antlr.jar /usr/local/antlr-3.0.1/lib/antlr-3.0.1-custom.jar
    sudo mv /usr/local/antlr-3.0.1/lib/antlr-3.0.1.jar /usr/local/antlr-3.0.1/lib/antlr-3.0.1.jar.disabled

And update my `CLASSPATH` export:

    export CLASSPATH=".:/usr/local/antlr/lib/antlr-3.0.1-custom.jar"
    export CLASSPATH="$CLASSPATH:/usr/local/antlr/lib/antlr-2.7.7.jar" 
    export CLASSPATH="$CLASSPATH:/usr/local/antlr/lib/antlr-runtime-3.0.1.jar"
    export CLASSPATH="$CLASSPATH:/usr/local/antlr/lib/stringtemplate-3.1b1.jar"

# Rebuilding the C runtime

And then rebuild the C runtime library again:

    cd runtime/C/dist/libantlr3c-3.0.1/
    make clean
    ./configure
    make
    make check
    sudo make install

# Next steps

Unfortunately with these changes 3.0.1 is still broken so I'll have to investigate further. The cause of the problem and the workaround is documented here:

<http://www.antlr.org:8080/pipermail/antlr-interest/2007-October/024205.html>

# Subsequent rebuild

I later went on to make a further patch:

    --- antlr-3.0.1/src/org/antlr/codegen/templates/C/C.stg.old     2007-10-16 19:31:23.000000000 +0200
    +++ antlr-3.0.1/src/org/antlr/codegen/templates/C/C.stg 2007-10-16 19:31:38.000000000 +0200
    @@ -53,7 +53,6 @@
      *  This <type> file was generated by $ANTLR version <ANTLRVersion>
      *
      *     -  From the grammar source file : <fileName>
    - *     -                            On : <generatedTimestamp>
     <if(LEXER)>
      *     -                 for the lexer : <name>Lexer
     <endif>

And do another rebuild (this with the existing, modified source tree with the duplicate classes removed):

    OLD_CLASSPATH=$CLASSPATH
    unset CLASSPATH
    export CLASSPATH="/usr/local/junit/junit.jar"
    ant build
    sudo cp build/antlr.jar /usr/local/antlr-3.0.1/lib/antlr-3.0.1-custom.jar 
    export CLASSPATH=$OLD_CLASSPATH

Fairly straightforward if you keep the modified tree lying around.

# See also

-   [Patches to ANTLR 3.0.1](/wiki/Patches_to_ANTLR_3.0.1)
-   [Installing ANTLR 3.0.1 on Red Hat Enterprise Linux](/wiki/Installing_ANTLR_3.0.1_on_Red_Hat_Enterprise_Linux)

