---
tags: wiki
cache_breaker: 1
---

The [ACE file format](/wiki/ACE_file_format) can be decompressed on [Mac OS X](/wiki/Mac_OS_X) using the freeware (but closed-source) unace port available from [the WinAce website](http://www.winace.com/). At the time of writing the latest version (2.5) is not a [Universal Binary](/wiki/Universal_Binary) but can run on Intel-eqipped machines under the [Rosetta](/wiki/Rosetta) compatibility layer. In my tests `unace` reproducibly exited with segmentation faults but only *after* completing the listing/extraction operations, so the tool is usable despite the flaw.

# Usage

    UNACE v2.5     Copyright by ACE Compression Software       Nov 16 2003 22:54:41
    (Mac OS X)     ported to the Mac by Kolja Koischwitz
                                                                              
    Usage:                                                                    
      UNACE <command> [-<sw1> ...] <archive> [<base_dir>\] [<files>/@<filelist>]
                                                                              
    <Commands>                          t  Test archive integrity             
      e  Extract files                  v  List archive (verbose)             
      l  List archive                   x  Extract files with full path       
                                                                              
    <Switches>               (default)                                (default)
      c[-]  Show comments         (+)   p<pass>  Set password                 
      f[-]  Full path matching    (-)   y[-]     Assume yes on all queries (-)
      o[-]  Overwrite files       (-)                                         
                                                                              
      x<files/@list>  Exclude <files> or files in <list> from process

# See also

<http://en.wikipedia.org/wiki/ACE_%28file_format%29>
