---
tags: exchange calendar macos wiki
---

A variant of the solution proposed [here](https://discussions.apple.com/thread/6827023) worked for me:

1. Quit any and all running calendar applications
2. In the "Internet Accounts" System Preferences pane, disable the "Calendars" checkbox of your exchange account
3. Drag `~/Library/Calendars/Calendar Cache*` to the Trash
4. Reboot
5. Re-enable Exchange calendars in the System Preferences.

I initially tried just emptying the Trash, but the calendar files continued to be in use, presumably by the "Calendar Agent" background process. I could have killed the process, but went with a reboot anyway.
