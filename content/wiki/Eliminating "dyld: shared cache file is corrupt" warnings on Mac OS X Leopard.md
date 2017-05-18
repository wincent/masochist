---
tags: os.x wiki
---

Just found [this gem](http://discussions.apple.com/thread.jspa?threadID=1260029&tstart=195) describing how to eliminate the annoying dyld warnings that "shared cached file is corrupt" (`/var/db/dyld/dyld_shared_cache_ppc`):

    sudo update_dyld_shared_cache -force
