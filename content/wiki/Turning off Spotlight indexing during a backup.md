---
tags: spotlight wiki
---

I suspect that there is a bug in [SuperDuper!](/wiki/SuperDuper%21) that causes [Spotlight](/wiki/Spotlight) indexing of the target volume to take place during backups, slowing the backup process down and degrading system performance (sometimes to the extent that the machine is almost unusable). I've been in touch with [Shirt Pocket](/wiki/Shirt_Pocket) about this but they indicate that they think it's a bug in [Tiger](/wiki/Tiger). I don't know if it's a bug in [Tiger](/wiki/Tiger) or not, but even if it is I think their software should work around it, given that it is possible to turn off already-in-progress indexing from the terminal; see the following example, were I turn off indexing for my backup volume, "Clon":

    $ sudo mdutil -i off /Volumes/Clon
    Password:
    /Volumes/Clon:
            Indexing disabled for volume.
    $ sudo mdutil -E /Volumes/Clon
    /Volumes/Clon:
            Volume index removed.

On turning off indexing system responsiveness immediately increases.

# See also

-   An excellent [Spotlight](/wiki/Spotlight) tips page: <http://www.thexlab.com/faqs/stopspotlightindex.html>
