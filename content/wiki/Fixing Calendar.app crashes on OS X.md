---
tags: calendar os.x wiki
---

Via [this page](https://miapple.me/fixing-mac-os-x-10-10-yosemite-app-crashes/):

Delete:

-   `~/Library/Containers/com.apple.CalendarAgent`
-   `~/Library/Containers/com.apple.CalendarAgent.CalNCService`
-   `~/Library/Containers/com.apple.CalendarFileHandler`

Not sure if this will fix it definitively, but at least it allowed me to open the Calendar without it crashing, and sync a bunch of events.
