---
title: Append extra blank lines at end of output (buildtools, c71d3c1)
---

When emitting release notes for a project that is spread out across multiple repositories we may end up invoking the ReleaseNotes.sh script several time, successively appending more and more output to the generated notes.

Add two extra line feeds to make this easier: one because "git log" doesn't seem to emit one, and another to provide visual separation between sections.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
