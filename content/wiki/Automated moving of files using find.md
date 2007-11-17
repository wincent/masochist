---
tags: development unix
---

I recently wanted to add a shell-script build phase to one of my projects to automatically collect all the [dSYM](/wiki/dSYM) bundles produced during the build into a separate folder. Rather than maintaining a fragile, brittle list of bundles to be copied I decided to use the `find` tool to locate all [dSYM](/wiki/dSYM) bundles and copy them automatically.

# First attempt

The key line of the script is this one:

    find . -name "*.dSYM" -exec mv {} "${DSYM_FOLDER}/" \;

This works, but prints an error message for every bundle and causes `find` to return a non-zero exit status. Evidently this is because `find` first performs the `-exec` and *then* tries to access the file in some way, presumably to retrieve some kind of information about it. This fails because the file has already moved by the time this access attempt takes place.

# Second attempt

I couldn't see any switch in the `find` [man page](/wiki/man_page) which would allow me to work around this undesired behaviour, so I decided to try coupling it with `xargs`. The problem with `xargs` is that it provides no convenient way to indicate where the arguments should be inserted within the command to be executed; rather than using the `{}` shorthand we must use the `-J` switch:

    find . -name "*.dSYM" | xargs -J % mv -v % "${DSYM_FOLDER}/"

This solution works but will choke if any of the supplied paths contains spaces.

# Final version

We work around the space problem by piping the output through [perl](/wiki/perl) and escaping all spaces. This should work for just about any path, except for bizarre paths with spaces preceded by literal backslashes or other wierdness:

    find . -name "*.dSYM" | perl -pe 's/ /\\ /g' | xargs -J % mv -v % "${DSYM_FOLDER}/"

# See also

-   [Find tricks](/wiki/Find_tricks)

