---
tags: wiki
title: Preparing a new release of buildtools for release
---

For example, exporting the latest version of the trunk (at the time of writing, revision 35) and creating a zip archive of the export:

    svn export svn://svn.example.com/buildtools/trunk buildtools
    zip -r buildtools-35.zip buildtools
