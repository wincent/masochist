---
tags: arq time.machine
---

[Arq](/wiki/Arq) comes with some standard exclusions, [listed here](http://www.haystacksoftware.com/support/arq_help/pages/adding_folder.html). At the time of writing, that list is:

- `.Trash`
- `Library/Caches`
- `Library/Logs`
- `Library/Mail/V2/MailData/AvailableFeeds`
- `Library/Mail/V2/MailData/Envelope Index`
- `Library/Mail/V2/MailData/Envelope Index-shm`
- `Library/Mail/V2/MailData/Envelope Index-wal`
- `Library/Safari/WebpageIcons.db`
- `Library/Saved Application State`
- `Library/iTunes/iPad Software Updates`
- `Library/iTunes/iPhone Software Updates`
- `Library/iTunes/iPod Software Updates`

# Time Machine

Time Machine is of interest here because you can tell Arq to skip items that Time Machine would skip.

Time Machine has a bunch of exclusions that it defines in `/System/Library/CoreServices/backupd.bundle/Contents/Resources/StdExclusions.plist`. Of interest here are the following (listed using `plutil -p /System/Library/CoreServices/backupd.bundle/Contents/Resources/StdExclusions.plist`):

```
"UserPathsExcluded" => [
  0 => "Library/Application Support/SyncServices/data.version"
  1 => "Library/Application Support/Ubiquity"
  2 => "Library/Caches"
  3 => "Library/Logs"
  4 => "Library/Mail/Envelope Index"
  5 => "Library/Mail/Envelope Index-journal"
  6 => "Library/Mail/AvailableFeeds"
  7 => "Library/Mail/Metadata/BackingStoreUpdateJournal"
  8 => "Library/Mail/V2/MailData/Envelope Index"
  9 => "Library/Mail/V2/MailData/Envelope Index-journal"
  10 => "Library/Mail/V2/MailData/AvailableFeeds"
  11 => "Library/Mail/V2/MailData/BackingStoreUpdateJournal"
  12 => "Library/Mail/V2/MailData/Envelope Index-shm"
  13 => "Library/Mail/V2/MailData/Envelope Index-wal"
  14 => "Library/Mirrors"
  15 => "Library/PubSub/Database"
  16 => "Library/PubSub/Downloads"
  17 => "Library/PubSub/Feeds"
  18 => "Library/Safari/Icons.db"
  19 => "Library/Safari/WebpageIcons.db"
  20 => "Library/Safari/HistoryIndex.sk"
]
```

Note some overlap with the Arq list.

Manually added exclusions can be viewed with `plutil -p Library/Preferences/com.apple.TimeMachine.plist`. These are added using the "Time Machine" pane in the "System Preferences" app. Here is a small excerpt from mine:

```
"SkipPaths" => [
  0 => "~glh/Library/Logs"
  1 => "~glh/.hgcache"
  2 => "~glh/.rbenv"
  3 => "~glh/.rubies"
  4 => "~glh/Library/iTunes/iPhone Software Updates"
  5 => "~glh/.ievms"
  6 => "~glh/Local"
  ...
]
```

[Apparently](http://pondini.org/TM/11.html), there are other files that get excluded via metadata attribute on the file itself (ie. not tied to the path). You can see these with `sudo mdfind "com_apple_backup_excludeItem = 'com.apple.backupd'"`.
