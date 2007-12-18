---
tags: perl perl.one.liners
---

I recently needed to change all the occurrences of a string in a number of files. The following [perl one-liner](/wiki/perl_one-liner):

-   Makes backups of all of the files specified by the pattern, `files*`
-   Names the backups with a `.bak` extension
-   Searches for the string `find`
-   Replaces each match with the string `replace`

<!-- -->

    perl -i.bak -p -e 's/find/replace/g' files*

Note that you can also just read from standard in and write to standard out, and if you need to specify multiple find/replacement pairs at once:

    cat input | perl -pe 's/find/replace/g; s/another/foo/g' > output

# Example

In moving to [SVK](/wiki/SVK) I needed to find a replacement for [Subversion externals](/wiki/Subversion_externals) (see "[Working around the lack of svn:externals support in SVK](/wiki/Working_around_the_lack_of_svn%3aexternals_support_in_SVK)"). Let's take the example of moving the [WOCommon](/wiki/WOCommon) external from inside the [Synergy Advance](/wiki/Synergy_Advance) source root:

    ${SOURCE_ROOT}/WOCommon

To outside of it:

    ${SOURCE_ROOT}/../WOCommon

First I needed to find all references in the project file. I started with those preceded by a slash:

    cd SynergyAdvance.xcodeproj
    grep '/WOCommon' project.pbxproj

This yielded two results, one a reference to the `WOCommon.xcodeproj` file:

    BC0CEBDA0AC32E0400434EC2 /* WOCommon.xcodeproj */ = {isa = PBXFileReference; lastKnownFileType = "wrapper.pb-project"; name = WOCommon.xcodeproj; path = ../../WOCommon/tiger/WOCommon.xcodeproj; sourceTree = SOURCE_ROOT; };

Note that this is a reference to the original project file, not the one in the Subversion external. This must be changed to point to the separately checked out copy.

The other result was a shell script which had numerous references of the form `"${SOURCE_ROOT}/WOCommon/..."`.

The first I could handle with:

    perl -i -p -e 's#\.\./\.\./WOCommon/tiger#../WOCommon#' project.pbxproj
    svk diff # visually inspect the change

Then the second:

    perl -i -p -e 's#\$\{SOURCE_ROOT\}/WOCommon#\${SOURCE_ROOT}/../WOCommon#g' project.pbxproj
    svk diff

The next step was to find all occurrences of `WOCommon` followed by a slash (280 lines found):

    grep 'WOCommon/' project.pbxproj

We basically want to change all such instances except for those which are preceded by a slash (those we've already handled above).

    perl -i -p -e 's#(?<!/)WOCommon/#../WOCommon/#g' project.pbxproj
    svk diff

Finally, check for `WOCommon` neither preceded nor followed by a slash:

    perl -nle 'print if /(?<!\/)WOCommon(?!\/)/' project.pbxproj

On opening the modified [Xcode](/wiki/Xcode) project everything seemed to be intact; the only thing broken was a single folder reference that had to be updated. Evidently I had overlooked the following in my last check:

    BC0CEBFD0AC33D3D00434EC2 /* WOCommon */ = {isa = PBXFileReference; lastKnownFileType = folder; path = WOCommon; sourceTree = "<group>"; };

Finally I had to add `"$(SOURCE_ROOT)/.."` to my `HEADER_SEARCH_PATHS` so as to be able to find the relocated shared files.
