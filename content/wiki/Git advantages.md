---
tags: git wiki
---

# Documentation

The documentation for [Git](/wiki/Git) is *stunningly* good, ranging from its concise and useful [man pages](/wiki/man_pages) through to tutorials and the user manual:

-   Man pages: <http://www.kernel.org/pub/software/scm/git/docs/>
-   Tutorial:
    -   Part 1: <http://www.kernel.org/pub/software/scm/git/docs/tutorial.html>
    -   Part 2: <http://www.kernel.org/pub/software/scm/git/docs/tutorial-2.html>
    -   Core (for developers): <http://www.kernel.org/pub/software/scm/git/docs/core-tutorial.html>
-   Overview: <http://www.kernel.org/pub/software/scm/git/docs/everyday.html>
-   User manual: <http://www.kernel.org/pub/software/scm/git/docs/user-manual.html>
-   Documentation list on wiki: <http://git.or.cz/gitwiki/GitDocumentation>
-   [Wiki](/wiki/Wiki): <http://git.or.cz/gitwiki>
-   Howtos: <http://www.kernel.org/pub/software/scm/git/docs/howto-index.html>
-   Glossary: <http://www.kernel.org/pub/software/scm/git/docs/glossary.html>
-   Third party tutorials and advocacy:
    -   <http://utsl.gen.nz/talks/git-svn/intro.html>

For more links, see "[Git documentation](/wiki/Git_documentation)".

I would rate the documentation as being on par with [Subversion](/wiki/Subversion)'s (excellent) documentation, which is very fortunate considering Git's complexity and the learning curve necessary (primarily to unlearn patterns picked up from working with other [version control systems](/wiki/version_control_systems) and then relearn things "the Git way").

The [mailing list](http://marc.info/?l=git) often provides very interesting background information that goes into much greater depth than is possible with the end-user documentation.

# Active development

[Git](/wiki/Git) is a excellent [version control system](/wiki/version_control_system) *and* it was written by [Linus Torvalds](/wiki/Linus_Torvalds); these two factors make Git extremely attractive to [Linux](/wiki/Linux) enthusiasts, already renowned for their enthusiasm. As a result Git boasts probably the single most active developer community among the [open source](/wiki/open_source) version control systems, streets ahead of [SVK](/wiki/SVK) (which is mostly developed and maintained by a single person) and possibly even more than [Subversion](/wiki/Subversion) (which numerically speaking probably has a significantly higher number of *users* but not *developers*).

Git is being constantly updated and improved. It very rapidly achieved a high level of sophistication, feature-completeness, and it's proved its mettle managing large projects such as the Linux kernel itself. Despite already being a very capable and efficient tool, [improvement is rapid and ongoing](http://repo.or.cz/w/git.git/).

# Content-tracking rather than file-tracking

Whereas every other [version control system](/wiki/version_control_system) in the world tracks file history (when lines were added to a file, when lines were removed, when a file was renamed, added or deleted etc) [Git](/wiki/Git) doesn't explicitly track this information in any way at all. It instead tracks *content* within a repository. By walking the repository history Git *can* reconstruct what happened to a particular file, but this is an *extrapolation* from the data rather than something explicitly encoded.

This is a radical departure that means that when you do something like cutting a method from one file and pasting it into another then the history of the method goes along with it (think `svn blame`). This is explained by [Linus Torvalds](/wiki/Linus_Torvalds) in [this post](http://article.gmane.org/gmane.comp.version-control.git/37975); see also [this separate post](http://marc.info/?l=git&m=114123702826251) on tracking renames.

> First off, let's just posit that "files" do not matter. The only thing that matters is how "content" moved in the tree. Ok? If I copy a function from one file to another, the perfect SCM will notice that, and show it as a diff that removes it from one file and adds it to another, and is \_still\_ able to track authorship past the move.

Source: <http://article.gmane.org/gmane.comp.version-control.git/217>

# Performance

While [Git](/wiki/Git) shares many or all of the advantages of [SVK](/wiki/SVK) there is one area in which it excels: performance. Whereas SVK is written in [Perl](/wiki/Perl), [Git](/wiki/Git) is largely written in [C](/wiki/C); specifically, the lower level "plumbing" is written in C and some of the higher-level "porcelain" is written higher-level (but slower) scripting languages. The "heavy lifting", however, is all done in C and is correspondingly fast. There is a [Google](/wiki/Google) "Summer of Code" project fro replacing some of the core scripts with C versions (see <http://code.google.com/soc/2007/git/appinfo.html?csaid=BB370B5D857FA7A>).

# Low barrier to participation

It is incredibly easy to start managing code with [Git](/wiki/Git). Unlike [Subversion](/wiki/Subversion) there is no need to set up a repository on a (possibly remote) server before starting to work. Git is even simpler than [SVK](/wiki/SVK), because what would normally be considered a "working copy" actually becomes a (distributed) repository itself, containing both the "working copy" and all of the history of the repository (this is different from [SVK](/wiki/SVK), where working copies are separate from repositories, which are typically mirrored under `~/.svk`).

# Visualization

[Git](/wiki/Git) makes [branching](/wiki/branching) and [merging](/wiki/merging) very cheap and easy operations, and (fortunately) comes with the visualization tools necessary to understand and manage projects with many branches and merges. [gitk](/wiki/gitk) is a simple [GUI](/wiki/GUI) repository browser and [QGit](/wiki/QGit) is somewhat more advanced one; both permit visualization of repository history (including branches, merges, tree state, diffs). I am not aware of any tools for [Subversion](/wiki/Subversion) or [SVK](/wiki/SVK), for example, which rival the sophistication of these tools (especially QGit).

# See also

-   [SVK advantages](/wiki/SVK_advantages)
