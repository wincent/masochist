---
tags: dhaka wiki
---

[Dhaka 2.2.0](/wiki/Dhaka_2.2.0) was released on 29 May 2007.

# Changes

-   Parsers are now generated much faster.
-   LexerSpecification\#for\_symbol method now handles escaping automatically on metacharacters (thanks to Florian Gross for suggesting this).
-   LexerSpecification\#for\_pattern accepts Ruby regular expression literals in addition to strings (thanks to Bruce Williams and Florian Gross for suggesting this).
-   Carriage returns now supported in the regular expression grammar.
-   Evaluator no longer throws exceptions for undefined rules unless the :raise\_error option is set to true.

# See also

-   Official release notes: <http://rubyforge.org/frs/shownotes.php?release_id=12036>
-   [Upgrading to Dhaka 2.2.0 on Mac OS X Tiger](/wiki/Upgrading_to_Dhaka_2.2.0_on_Mac_OS_X_Tiger)
