---
tags: bash wiki
---

Here's a short function that I just created in my [.bash\_profile](/wiki/.bash_profile):

    # zap resource forks
    zap()
    {
      # loop through the args
      while [ -n "$1" ]
      do
        /bin/cp -v /dev/null "$1/..namedfork/rsrc" 
        shift
      done
    }

This function irreversibly overwrites data. Use at your own risk.
