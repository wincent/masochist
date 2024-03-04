---
tags: bansshee wiki
title: Bansshee release procedure
---

-   Clean-up working copy and commit any remaining changes.
-   Tag the release; as an example, here is the command used to tag the 1.0 release:

<!-- -->

    svn cp svn+ssh://svn.example.com/bansshee/trunk \
           svn+ssh://svn.example.com/bansshee/tags/1.0-RELEASE

-   Prepare an archive:

<!-- -->

    svn export svn://svn.example.com/bansshee/tags/1.0-RELEASE bansshee
    zip -r bansshee-1.0.zip bansshee

-   Upload archive
-   Update website
