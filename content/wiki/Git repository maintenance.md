---
tags: git
---

In order to keep repository size and performance at their best I set up a simple cron job to run `git gc` (see `man git-gc` for more information) once per month.

The `crontab` entry looks like this:

    MAILTO="win@wincent.com"
    @monthly	/path/to/tools/gc-git-repos.sh

And the script is basically:

    #
    # Configuration
    #

    PRIVATE_REPOS="/path/to/private"
    PUBLIC_REPOS="/path/to/public"

    #
    # Functions
    #

    do_gc()
    {
      for REPO in $1/*.git; do
        cd $REPO &&
        git-gc &&
        cd -
      done
    }

    #
    # Main
    #

    set -e

    do_gc "${PRIVATE_REPOS}"
    do_gc "${PUBLIC_REPOS}"
