---
tags: xcode development wincent wiki
---

When writing up the article "[Setting up a nightly build system](/wiki/Setting_up_a_nightly_build_system)" I implemented a system that used a [build number](/wiki/build_number) based on the current [Subversion](/wiki/Subversion) revision of the code base. The revision number appeared in brackets after the main version number; for example:

    3.1.1 (365)

I've decided to implement something similar for all of my builds, not just the nightly ones.

# The old system

The old system used a script (part of the [Wincent Build Tools](/wiki/Wincent_Build_Tools)) to increment a build number on every build whenever there had been changes in the source tree since the last build. New release builds caused the build number to be bumped up by 1.0 and new debug builds caused it to be bumped up by 0.1. So, for example, if we started at build number 250.0 and performed various release builds we would pass through 251.0, 252.0, 253.0 and so forth; if we then did a series of debug builds the build number would go from 253.0 to 253.1, 253.2, 253.3 and so forth.

This system worked well but it was somewhat arbitrary. Using [Subversion](/wiki/Subversion) revision numbers is a better alternative because it is deterministic and precise. The build number can then be used as a direct indicator of the exact source code that was used to produce a particular build.

Below is the text of the old version of the script, just prior to modification. The new system makes almost all of this script entirely redundant; all that's left is the code for updating the copyright year and that could be replaced with a one-line [Perl](/wiki/Perl) script:

    #!/bin/bash
    #
    # UpdateBuildVersionNumbers.sh
    # buildtools
    #
    # Created by Wincent Colaiuta on Fri Dec 30 2003.
    # 
    # Copyright 2003-2007 Wincent Colaiuta.
    # This program is distributed in the hope that it will be useful, but WITHOUT
    # ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
    # FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
    # in the accompanying file, "LICENSE.txt", for more details.
    #
    #  $Id: UpdateBuildVersionNumbers.sh 50 2006-12-13 18:49:58Z wincent $

    # Script to automatically update a project versioning file on each build. The
    # first instance of the following line is updated, if present:
    #
    #    /* Last automatic update: xxx */
    #
    # Where /bin/date is used to replace "xxx" with a string such as:
    #
    #    "Tue Mar 16 17:48:48 CET 2004"
    #
    # Additionally, the following macro definitions are updated, if present:
    #
    #    /* START: Auto-updated macro definitions */
    #
    #    [/tags/define #define] WO_COPYRIGHT_YEAR  2003-2004
    #    [/tags/define #define] WO_BUILDNUMBER     1234.5678
    #    [/tags/define #define] WO_BUILDDATE       "Sat Mar 20 00:30:25 CET 2004"
    #
    #    /* END: Auto-updated macro definitons */
    #
    # The file containing the versioning information should not be updated by hand
    # because its content is "brittle" and changing it may prevent this script from
    # updating the information.

    # NOTE: If info plist preprocessing is turned on in Xcode, it happens *before* any shell scripts get run.
    # Must therefore call this script from a separate target *before* building the main target.

    . "${BUILDTOOLS_DIR}/Common.sh"

    #
    # Functions
    #

    printusage()
    {
      builtin echo "Usage: $0 version-file [optional-base-dir]"
    }

    update_timestamp()
    {
      builtin echo "Updating file timestamp"
      STAMP=`/bin/date`
      
      /bin/cat ${SOURCE_ROOT}/${WO_VERSION_FILE} | /usr/bin/sed \
        -e "s#^/\* Last automatic update: .* \*/#/* Last automatic update: ${STAMP} */#" \
        > ${SOURCE_ROOT}/${WO_VERSION_FILE}.temp
      
      if [ $? -eq 0 ]; then
        cp -f ${SOURCE_ROOT}/${WO_VERSION_FILE}.temp \
              ${SOURCE_ROOT}/${WO_VERSION_FILE}
      else
        builtin echo "Exiting due to error during timestamping (phase 1)"
        exit 1
      fi
      
      builtin echo "Updating WO_BUILDDATE entry"
      
      # search for:   [/tags/define #define] WO_BUILDDATE "..."
      BUILDDATE_REGEX='^\(#define[ ][ ]*WO_BUILDDATE[ ][ ]*"\).*\("\)'
      
      # update to reflect date and time of build
      /bin/cat ${SOURCE_ROOT}/${WO_VERSION_FILE} | /usr/bin/sed \
        -e "s/${BUILDDATE_REGEX}/\1${STAMP}\2/" \
        > ${SOURCE_ROOT}/${WO_VERSION_FILE}.temp
      
      if [ $? -eq 0 ]; then
        cp -f ${SOURCE_ROOT}/${WO_VERSION_FILE}.temp \
              ${SOURCE_ROOT}/${WO_VERSION_FILE}
      else
        builtin echo "Exiting due to error during timestamping (phase 2)"
        exit 1
      fi
    }

    update_copyright_years()
    {
      builtin echo "Updating WO_COPYRIGHT_YEAR entry"
      
      # get current year
      YEAR=`/bin/date +%Y`
      
      # in the line : [/tags/define #define] WO_COPYRIGHT_YEAR ... update: "... XXXX ..."
      /bin/cat ${SOURCE_ROOT}/${WO_VERSION_FILE} | /usr/bin/sed \
        -e "/^#define[ ][ ]*WO_COPYRIGHT_YEAR[ ]/s/\(.*\)[0-9]\{4\}\([^\-]*\)/\1${YEAR}\2/" \
        > ${SOURCE_ROOT}/${WO_VERSION_FILE}.temp
      
      if [ $? -eq 0 ]; then
        cp -f ${SOURCE_ROOT}/${WO_VERSION_FILE}.temp \
              ${SOURCE_ROOT}/${WO_VERSION_FILE}
      else
        builtin echo "Exiting due to error during copyright update"
        exit 1
      fi
    }

    # for major build number, increment the number to the left of the decimal point
    increment_major_build_number()
    {
      /bin/cat ${SOURCE_ROOT}/${WO_VERSION_FILE} | /usr/bin/sed '

        # only operate on lines which begin with "#define WO_BUILDNUMBER"
        /^#define[ ][ ]*WO_BUILDNUMBER/{

          # replace any trailing 9s with % (eg. 1299.2 becomes 12%%.2)
          :d
          s/9\(%*\)\./%\1./
          td

          # handle all 9s case eg. 9., 99., 999. -> 0%., 0%%., 0%%%.
          s/\([^0-9%]\)\(%\)\(%*\)\./\10\2\3./
      
          # reset test flag before continuing
          s/./&/; tr

          :r
          # increment last digit; "last" defined as "followed by decimal point"
          s/8\(%*\)\./9\1./; tn
          s/7\(%*\)\./8\1./; tn
          s/6\(%*\)\./7\1./; tn
          s/5\(%*\)\./6\1./; tn
          s/4\(%*\)\./5\1./; tn
          s/3\(%*\)\./4\1./; tn
          s/2\(%*\)\./3\1./; tn
          s/1\(%*\)\./2\1./; tn
          s/0\(%*\)\./1\1./; tn

          :n
          # replace any %s with 0s
          y/%/0/
        }
      ' > ${SOURCE_ROOT}/${WO_VERSION_FILE}.temp
      
      if [ $? -eq 0 ]; then
        cp -f ${SOURCE_ROOT}/${WO_VERSION_FILE}.temp \
              ${SOURCE_ROOT}/${WO_VERSION_FILE}
      else
        builtin echo "Exiting due to error during sed processing"
        exit 1
      fi
    }

    # make minor build number zero
    reset_minor_build_number()
    {
      cat ${SOURCE_ROOT}/${WO_VERSION_FILE} | /usr/bin/sed '

        # only operate on lines which begin with "#define WO_BUILDNUMBER"
        /^#define[ ][ ]*WO_BUILDNUMBER/{

          # replace numbers after decimal point with a single 0
          s/\.[0-9]*/.0/
          
        }
      ' > ${SOURCE_ROOT}/${WO_VERSION_FILE}.temp
      
      if [ $? -eq 0 ]; then
        cp -f ${SOURCE_ROOT}/${WO_VERSION_FILE}.temp \
              ${SOURCE_ROOT}/${WO_VERSION_FILE}
      else
        builtin echo "Exiting due to error during sed processing"
        exit 1
      fi
    }

    # for minor build number, increment the number to the right of the decimal point
    increment_minor_build_number()
    {
      cat ${SOURCE_ROOT}/${WO_VERSION_FILE} | /usr/bin/sed '

        # only operate on lines which begin with "#define WO_BUILDNUMBER"
        /^#define[ ][ ]*WO_BUILDNUMBER/{

          # replace any trailing 9s with % (eg. 12.9 becomes 12.%)
          :d
          s/\.\([0-9%]*\)9\(%*\)\([^0-9%]\)/.\1%\2\3/
          td

          # this handles a 9 in a number immediately before a newline
          :e
          s/\.\([0-9%]*\)9\(%*\)$/.\1%\2/
          te

          # handle all 9s case eg. .9, .99, .999 -> .0%, .0%%, .0%%%
          s/\.\(%\)\(%*\)\([^0-9%]\)/.0\1\2\3/
      
          # handle all 9s case in a number immediately before a newline
          s/\.\(%\)\(%*\)$/.0\1\2/

          # reset test flag before continuing
          s/./&/; tr

          :r
          # increment last digit, where "last" defined as "followed by a non-digit"
          s/\.\([0-9%]*\)8\(%*\)\([^0-9%]\)/.\19\2\3/; tn
          s/\.\([0-9%]*\)7\(%*\)\([^0-9%]\)/.\18\2\3/; tn
          s/\.\([0-9%]*\)6\(%*\)\([^0-9%]\)/.\17\2\3/; tn
          s/\.\([0-9%]*\)5\(%*\)\([^0-9%]\)/.\16\2\3/; tn
          s/\.\([0-9%]*\)4\(%*\)\([^0-9%]\)/.\15\2\3/; tn
          s/\.\([0-9%]*\)3\(%*\)\([^0-9%]\)/.\14\2\3/; tn
          s/\.\([0-9%]*\)2\(%*\)\([^0-9%]\)/.\13\2\3/; tn
          s/\.\([0-9%]*\)1\(%*\)\([^0-9%]\)/.\12\2\3/; tn
          s/\.\([0-9%]*\)0\(%*\)\([^0-9%]\)/.\11\2\3/; tn

          # handle digits which appear immediately before a newline
          s/\.\([0-9%]*\)8\(%*\)$/.\19\2/; tn
          s/\.\([0-9%]*\)7\(%*\)$/.\18\2/; tn
          s/\.\([0-9%]*\)6\(%*\)$/.\17\2/; tn
          s/\.\([0-9%]*\)5\(%*\)$/.\16\2/; tn
          s/\.\([0-9%]*\)4\(%*\)$/.\15\2/; tn
          s/\.\([0-9%]*\)3\(%*\)$/.\14\2/; tn
          s/\.\([0-9%]*\)2\(%*\)$/.\13\2/; tn
          s/\.\([0-9%]*\)1\(%*\)$/.\12\2/; tn
          s/\.\([0-9%]*\)0\(%*\)$/.\11\2/; tn

          :n
          # replace any %s with 0s
          y/%/0/
        }
      ' > ${SOURCE_ROOT}/${WO_VERSION_FILE}.temp
      
      if [ $? -eq 0 ]; then
        cp -f ${SOURCE_ROOT}/${WO_VERSION_FILE}.temp \
              ${SOURCE_ROOT}/${WO_VERSION_FILE}
      else
        builtin echo "Exiting due to error during sed processing"
        exit 1
      fi
    }

    # get info for source tree, filtering out files which may trigger false updates
    treeinfo()
    {
      if [ "$1" = "" ]; then
        HASH_DIR="${SOURCE_ROOT}"
      else
        HASH_DIR="$1"
      fi
      TREEINFO=`/bin/ls -lTR "${HASH_DIR}" | \
        /usr/bin/egrep -v '\.svn|\.xcodeproj|\.pbxproj|\.mode1|\.pbxuser|_Version\.h'`
      builtin echo "${TREEINFO}"
    }

    #
    # Main
    # 

    set -e

    # process arguments
    if [ $# -eq 1 ]; then
      WO_VERSION_FILE="$1"
    elif [ $# -eq 2 ]; then
      WO_VERSION_FILE="$1"
      WO_BASE_HASH_DIR="$2"
    else
      printusage
      exit 1
    fi

    # use source tree hashing to avoid unnecessary build number increments
    /bin/mkdir -p "${DERIVED_FILE_DIR}"

    TREEINFO=$(treeinfo "${WO_BASE_HASH_DIR}")
    NEWHASH=`builtin echo "${TREEINFO}" | /usr/bin/openssl sha1`
    HASHFILE="${DERIVED_FILE_DIR}/${FULL_PRODUCT_NAME}.sourcehash"
    INFOFILE="${DERIVED_FILE_DIR}/${FULL_PRODUCT_NAME}.treeinfo"

    builtin echo "Source tree hash: ${NEWHASH}"

    if [ -f "${HASHFILE}" ]; then
      OLDHASH=`/bin/cat "${HASHFILE}"`
      builtin echo "Old source tree hash: ${OLDHASH}"
      if [ $OLDHASH = $NEWHASH ]; then
        builtin echo "Source tree unchanged: not updating build number"
        exit 0
      else
        if [ -f "${INFOFILE}" ]; then
          builtin echo "Tree differences:"
          # diff always returns an exit code of 1 here (files diff), hence the ||
          builtin echo "${TREEINFO}" | /usr/bin/diff "${INFOFILE}" - || cd .
        fi
      fi  
    fi

    # Backup old version of file
    close "${WO_VERSION_FILE}"
    builtin echo "Making backup of ${WO_VERSION_FILE}"

    /bin/cp -f ${SOURCE_ROOT}/${WO_VERSION_FILE} \
               ${SOURCE_ROOT}/${WO_VERSION_FILE}.bak

    # Scan for buildnumber and increment
    builtin echo "Updating WO_BUILDNUMBER entry"

    # Release builds increment the major part of the build number
    # Debug builds increment the minor part
    # Example sequence:
    #   32.2    - initial build
    #   32.3    - debug build
    #   32.4    - debug build
    #   33.0    - release build
    #   34.0    - release build
    #   34.1    - debug build

    if [ ${BUILD_STYLE} = "Release" ]; then
      increment_major_build_number
      reset_minor_build_number
    elif [ ${BUILD_STYLE} = "Debug" ]; then
      increment_minor_build_number
    else
      builtin echo "error: unrecognized BUILD_STYLE"
      exit 1
    fi

    # Timestamp file
    update_timestamp

    # Scan for copyright and update
    update_copyright_years

    # ensure all pending writes flushed to disk
    /bin/sync

    # updating the build number changes the hash, so must update it:
    TREEINFO=$(treeinfo "${WO_BASE_HASH_DIR}")
    NEWHASH=`builtin echo "${TREEINFO}" | /usr/bin/openssl sha1`

    builtin echo "Writing hash to disk"
    builtin echo "${NEWHASH}" > "${HASHFILE}"
    builtin echo "Writing tree info to disk"
    builtin echo "${TREEINFO}" > "${INFOFILE}"

    builtin echo "$0: Done"

# The new system

Like the nightly build system, the new system is able to avoid gratuitous changes to the [Subversion](/wiki/Subversion) repository caused by changes to the build number. Instead of storing the build number in a file that is checked into the repository we are now free to dynamically create the file before building and throw it away afterwards; it can be ignored.

I've written and [added a new script](http://wincent.com/a/about/wincent/weblog/svn-log/archives/2007/03/buildtools_r51_1_item_changed.php) to the [Wincent Build Tools](/wiki/Wincent_Build_Tools) that when run in a checked out [SVK](/wiki/SVK) working copy uses `svk info` to extract the current [Subversion](/wiki/Subversion) revision number. The [Subversion](/wiki/Subversion) revision number is used because it is more authoritative (because it refers to a central repository). A [later revision](http://wincent.com/a/about/wincent/weblog/svn-log/archives/2007/04/buildtools_r67_1_item_changed.php) of the script only writes out the file containing the version number if it has actually changed; this helps to avoid triggering gratuitous rebuilds.
