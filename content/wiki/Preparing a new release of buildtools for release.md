---
tags: wiki
---

For example, exporting the latest version of the trunk (at the time of writing, revision 35) and creating a zip archive of the export:

    svn export svn://svn.wincent.com/buildtools/trunk buildtools
    zip -r buildtools-35.zip buildtools
