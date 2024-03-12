---
tags: perl perl.one.liners wiki
title: Search and replace in multiple files with a Perl one-liner
---

In 2024, Perl still seems like the best choice for ripping through a large directory hierarchy applying simple mass changes.

In the context of [a Git repo like this one](https://github.com/wincent/masochist), I don't worry about creating backup files; I just let Perl do its thing and then check the result with `git status`/`git diff`. In order to not exceed permitted command-line lengths, I grab the list of files I want to operate on with `git-grep`, and then process them in chunks of 100 files with `xargs -L 100`.

Here's an example commit changing 6,939 files on the `main` branch, out of 9,117 files, as seen in [this commit](https://github.com/wincent/masochist/commit/2b6188b8e6b781dd37c7d2f09e3d2f99c92b8aaf):

```
git grep -l typechecked.net | xargs -L 100 perl -p -i -e 's/typechecked\.net/wincent.dev/g'
```

And [the companion commit](https://github.com/wincent/masochist/commit/aef945efaa6eca9e63faf1b1a4404e225ecb19bf) which changed 938 files out of 8,216 files on the `content` branch:

```
git grep -z -l typechecked.net | xargs -0 -L 100 perl -p -i -e 's/typechecked\.net/wincent.dev/g'
```

Note the second one needed `-z` (turning on `NUL`-byte separators for `git-grep`) and `-0` (telling `xargs` to expect those separators), in order do avoid:

```
xargs: unterminated quote
```

due to filenames with quotes in them.

Related to that, I wanted to go through my Git configs to make sure my references to the old hostname (`git.typechecked.net`) were updated to the new one (`git.wincent.dev`), so I did this in my home directory:

```
find . -type f -name config -print0 2> /dev/null | xargs -0 -L 100 grep -l typechecked.net | xargs perl -p -i -e 's/typechecked\.net/wincent.dev/g'
```

ie:

- `find . -type f -name config -print0 2> /dev/null` (find all regular files named `config`)
- `xargs -0 -L 100 grep -l typechecked.net` (filter that to only files containing `typechecked.net`)
- `xargs perl -p -i -e 's/typechecked\.net/wincent.dev/g'` (do the find and replace in those files)

# Older notes

I recently needed to change all the occurrences of a string in a number of files. The following [perl one-liner](/wiki/perl_one-liner):

-   Makes backups of all of the files specified by the pattern, `files*`
-   Names the backups with a `.bak` extension
-   Searches for the string `find`
-   Replaces each match with the string `replace`

<!-- -->

    perl -i.bak -p -e 's/find/replace/g' files*

Note that you can also just read from standard in and write to standard out, and if you need to specify multiple find/replacement pairs at once:

    cat input | perl -pe 's/find/replace/g; s/another/foo/g' > output

## Example

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
