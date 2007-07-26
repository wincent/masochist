---
tags: bash
---

I recently noticed that some of the files in a [Git](/wiki/Git) repository had [Mac](/wiki/Mac) line endings instead of [UNIX](/wiki/UNIX) ones.

I used the following [Bash](/wiki/Bash) script to quickly detect which files were problematic:

    IFS="
    "
    for FILE in $(find . -type f)
    do
      TYPE=$(file -b "$FILE")
      TEXT=$(expr "$TYPE" : '.*text.*')
      if [ $TEXT -eq 0 ]; then
        echo "not a text file: $FILE"
      else
        if ! perl -ne "exit 1 if m/\r/;" "$FILE"; then
          echo "CR detected in : $FILE"
        else
          echo "ok             : $FILE"
        fi
      fi
    done

If you have Bash version 3 or later you can use its built-in [regular expression](/wiki/regular_expression) support for a slightly cleaner design:

    IFS="
    "
    for FILE in $(find . -type f)
    do
      TYPE=$(file -b "$FILE")
      if [[ "$TYPE" =~ 'text' ]]; then  
        if ! perl -ne "exit 1 if m/\r/;" "$FILE"; then
          echo "CR detected in : $FILE"
        else
          echo "ok             : $FILE"
        fi
      else
        echo "not a text file: $FILE"
      fi
    done

This went through the current working directory printing the status of each file:

    not a text file: ./.DS_Store
    ok             : ./.git/config
    ok             : ./.git/description
    ok             : ./.git/HEAD
    ok             : ./.git/hooks/applypatch-msg
    ok             : ./.git/hooks/commit-msg
    ok             : ./.git/hooks/post-commit
    ok             : ./.git/hooks/post-receive
    ok             : ./.git/hooks/post-update
    ok             : ./.git/hooks/pre-applypatch
    ok             : ./.git/hooks/pre-commit
    ok             : ./.git/hooks/pre-rebase
    ok             : ./.git/hooks/update
    not a text file: ./.git/index
    ok             : ./.git/info/exclude
    ok             : ./.git/logs/HEAD
    ok             : ./.git/logs/refs/heads/master
    ok             : ./.git/logs/refs/remotes/origin/master
    not a text file: ./.git/objects/pack/pack-abf85ed171a9902f0fce5e157707575f87de7340.idx
    not a text file: ./.git/objects/pack/pack-abf85ed171a9902f0fce5e157707575f87de7340.pack
    ok             : ./.git/refs/heads/master
    ok             : ./.git/refs/remotes/origin/HEAD
    ok             : ./.git/refs/remotes/origin/master
    ok             : ./.git/refs/tags/r649
    ok             : ./CIImage+WOConvenience.h
    ok             : ./CIImage+WOConvenience.m
    ok             : ./CIImage+WOTinting.h
    ok             : ./CIImage+WOTinting.m
    not a text file: ./DiskImageBackground_exported.png
    not a text file: ./DiskImageBackground_source.png
    ok             : ./Doxyfile

And so on, printing the following for files with Mac (or [Windows](/wiki/Windows)) line endings:

    CR detected in : ./WOBaseCore/backend/webapp/textfab/vendor/plugins/rspec_on_rails/lib/spec/rails/version.rb
    CR detected in : ./WOBaseCore/backend/webapp/textfab/vendor/plugins/rspec_on_rails/lib/spec/rails.rb

So it turned out that the files with the bad line endings were all vendor-supplied; rather than correct them (only to have to repeat for the next release) I decided to leave them as they were. But if I had decided to change them I could have used a [Perl one-liner](/wiki/Perl_one-liner) to fix the line endings (see "[Search and replace in multiple files with a Perl one-liner](/wiki/Search_and_replace_in_multiple_files_with_a_Perl_one-liner)"); something like this:

    perl -i.bak -p -e 's/\r\n|\r/\n/' files*

Or:

    # narrow down the range of targets
    cd path_to_subdirectory_with_problem_files

    # check which files will be affected
    find . -name "*.rb"

    # do it
    find . -name "*.rb" | xargs perl -i.bak -p -e 's/\r\n|\r/\n/'

    # visually inspect results
    diff a b

    # check which backup files are present
    find . -name "*.bak"

    # blow away backups
    find . -name "*.bak" -delete

    # make sure they're really gone
    find . -name "*.bak"
