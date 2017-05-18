---
tags: bash wiki
---

# Performing a task for all items in a directory

    cd the_directory
    for ITEM in `ls`
    do
      echo $ITEM
    done

# Getting input from the user

One of many possible examples:

    continue_or_abort()
    {
      echo
      read -n 1 -p "Press Y to continue, A to abort: " RESPONSE
      if [ "$RESPONSE" = "Y" -o "$RESPONSE" = "y" ]; then
        echo
        return
      else
        echo "Aborting!"
        exit 1
      fi
    }

Another example:

    read -p "Please enter a tag for the backup archives [$OLD_VERSION]: " TAG
    if [ "$TAG" != "" ]; then
      OLD_VERSION="$TAG"
    fi

# See also

-   [Zapping resource forks from the commandline](/wiki/Zapping_resource_forks_from_the_commandline)
