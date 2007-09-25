---
title: Teach tool new ways to get input (gdiff, 64de21c)
---

The tool now has three modes of operation:

\(1) When supplied no arguments reads Git diff output from the standard input. This allows usages such as:

git-diff ARGUMENTS | gdiff cat PATCHFILES... | gdiff

\(2) As a special case, when supplied a single argument, "--help", shows usage information.

\(3) In all other cases tries to invoke git-diff, passing along the supplied arguments and capturing the input. That is:

gdiff foo bar

Will invoke:

git-diff foo bar

And capture the output.

The git-diff tool is searched for in the locations defined by the PATH environment variable, and if no PATH is set the search falls back to the locations specified by the user.cs\_path sysctl setting.

At the moment the tool doesn't actually do anything with the input. A future commit will add the ability to locate the GUI application and pass the input to it for processing.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
