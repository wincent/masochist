---
tags: movable.type wiki
---

[Movable Type](/wiki/Movable_Type)'s upgrade procedure effectively amounts to a performing a full reinstallation. This wouldn't be much of a problem if it weren't for the fact that custom files and modifications in an existing installation must be painstakingly identified and copied over into the new version prior to re-uploading the 1,100+ files that make up [Movable Type](/wiki/Movable_Type) (using `find . -type f | wc -l` from the top level of the [Movable Type](/wiki/Movable_Type) 3.35 archive counts 1,158 distinct files).

These tips describe the basic procedure for performing the merge. Here we assume that the old version was installed in `mt`. Version 3.34 is used in this example:

-   On the local host, rename the old `mt` folder to `mt-3.34`
-   Move the newly extracted files into position, naming the folder `mt`
-   Use `diff` to examine the differences between the trees:

<!-- -->

    diff mt-3.34 mt
    diff -r mt-3.34 mt | less
    diff -r mt-3.34 mt | grep "Only in"

When you see lines like `Only in mt-old: mt-config.cgi`, this is most likely an indication of a file that should be copied over to the new directory.

In my case, there were 4 files that needed to be copied for the 3.34 to 3.35 upgrade:

    cp mt-3.34/.htaccess mt/
    cp mt-3.34/mt-config.cgi mt/
    cp mt-3.34/plugins/Markdown.pl mt/plugins/
    cp mt-3.34/plugins/wikitext.pl mt/plugins/

In the case of the 3.35 to 4.0.1 upgrade the files I copied over were:

    .htaccess
    mt-config.cgi
    plugins/wikitext.pl

I could then double-check the result as using:

    diff -r mt-3.34 mt | grep "Only in"

## Useful data-mining commands

Numbers shown are for the example upgrade from 3.34 to 3.35.

### Total number of lines in the diff

    diff -r mt-3.34 mt | wc -l # 3512

This line count reflects changed lines, removed lines, modified lines, and of course custom files not present in the vanilla [Movable Type](/wiki/Movable_Type) distribution, such as the `Markdown.pl` and `wikitext.pl` plugins mentioned above.

### Total number of substantive lines

This line count excludes metadata and counts only lines showing the actual changes:

    diff -r mt-3.34 mt | grep '^[><]' | wc -l # 2063

Many of the changed lines just contain [RCS](/wiki/RCS) tags, which can be excluded from the count as follows:

    diff -r mt-3.34 mt | grep '^[><]' | grep -v '\$Id' | wc - l # 1815

# See also

For an example of using this procedure in the context of an upgrade, see "[Upgrading from Movable Type version 3.34 to 3.35](/wiki/Upgrading_from_Movable_Type_version_3.34_to_3.35)".
