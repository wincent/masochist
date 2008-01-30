---
tags: 
---

# Changelog

Copied from:

-   <http://www.cs.queensu.ca/~thurston/ragel/ChangeLog>

<!-- -->

    Ragel 6.0 - Jan 12, 2008
    ========================
     -Removed the 'noend' write option from examples/atoi.rl. This example is
      referenced a lot as a first example and as such it shouldn't contain a
      special purpose write option like 'noend'.
     -Introcuded the "eof" variable for indicating the end of file. The p variable
      is checked against eof when the processing loop reaches the end of a block.
      If p == eof at this time then the EOF actions are executed. The variable is
      required only when EOF actions have been emebedded.
     -The "write eof" command is no longer needed and was removed.
     -Scanners now use EOF actions to generate tokens. This eliminates the need to
      flush the last token.
     -Restructured the Java driver; a switch statement with fallthrough cases are
      now used to emulate gotos.
     -Ruby code generation was also restructured. Gotos are elmulated using a
      series of if tests. 
     -Went back to 3.X semantics for >, % and error actions. The > operator also
      embeds a leaving action/priority into the start state if it is final. If EOF
      happens in a state with a leaving operator then the leaving action is
      executed. If EOF happens in a non-final state that has an error action, the
      error action is executed.
     -The "ragel" program now executes frontend and backend processes separately,
      connecting them with a temporary file in the current directory. Without the
      -x option the "ragel" program marshals arguments and calls the frontend and
      backend. With the -x option the "ragel" program acts as the frontend only.
     -Added name finding for executables. If any forward slash is found in argv0
      then it is assumed that the path is explicit and the path to the backend
      executable should be derived from that. Whe check that location and also go
      up one then inside a directory of the same name in case we are executing
      from the source tree. If no forward slash is found it is assumed the file is
      being run from the installed location. The PREFIX supplied during
      configuration is used.
     -On windows GetModuleFileNameEx is used to find out where the the current
      process's binary is. That location is searched first. If that fails then we
      go up one directory and look for the executable inside a directory of the
      same name in case we are executing from the source tree.
     -Changed the -l option in rlgen-cd to -L because it is covered in the
      frontend. Added a passthrough in the frontend for the backend options.
     -Dot file generation can now be invoked using the -V option to ragel. We
      now require an input file. If standard in is used then we don't have a file
      name on which to base the output.
     -Able to build native windows executables using Cygwin+MinGW. 
     -Patch from David Waite: Large arrays are now created by copying in the data
      from smaller arrays using System.arraycopy(). This eliminates the debug data
      associated with explicit initialization statements. It is also much easier
      on the java compiler which can run out of memory compiling very large
      machines. The downside is that it takes slightly longer to initialize static
      data at run time.
     -The fbreak statement now advances p.
     -In the :> :>> and <: operators it was possible for the priority assignment
      to be bypassed via the zero length string. In :> this was fixed
      automatically with the semantics change to the entering priority operator.
      If the start state is final it now embeds a leaving action into it,
      preventing persistance through the zero length string. In :>> and <: this
      was fixed explicitly. With <: the entering priority operator was used and
      with :> a special exception was added. Since it uses the finishing
      transition operator it also adds a leaving priority to the start state if it
      is final.
     -Ranlib is now run on the archives. Patch from Kenny MacDermid.
     -The case statement syntax in ruby code generation used a form depreciated in
      Ruby 1.9. Updated it.
     -Made a number of fixes that eliminate warnings in GCC 4.3. Mostly concern
      the now depreciate automatic conversion of string contsants to "char*" type.
      Other fixes include adding parenthesis around && within ||.
     -The "tokstart" and "tokend" variables were changed to "ts" and "te".

# See also

-   [Upgrading from Ragel 5.24 to 6.0 on Mac OS X 10.5.1 Leopard](/wiki/Upgrading_from_Ragel_5.24_to_6.0_on_Mac_OS_X_10.5.1_Leopard)

