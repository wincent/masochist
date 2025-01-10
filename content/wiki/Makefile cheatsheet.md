---
tags: make wiki cheatsheet
cache_breaker: 1
title: Makefile cheatsheet
---

# Automatic variables

-   `$@`: File being generated (ie. the "target" in Make parlance).
-   `$<`: First pre-requisite.
-   `$^`: All prerequisites (separated by spaces).
-   `$?`: All prerequisites newer than the target (separated by spaces).

# Functions

-   `wildcard`
-   `addprefix`

# Order-only prerequisites

    # "target" depends on "dependency" but last-modified date is not considered
    target: | dependency

# `FORCE` targets

    # "target" always gets built...
    target: FORCE

    # ...because it depends on this non-existent file
    FORCE:

See also:

-   <https://www.gnu.org/software/make/manual/html_node/Force-Targets.html>

# External resources

-   List of automatic variables (`$@` etc): <https://www.gnu.org/software/make/manual/html_node/Automatic-Variables.html>
-   <http://www.schacherer.de/frank/technology/tools/make.html>
