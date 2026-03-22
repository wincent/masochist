---
tags: wiki photos
title: Recovering unsyncable images in Photos.app
---

I've long had several hundred images (not videos) that refused to sync to iCloud and which cannot be exported from Photos.app. Nevertheless, you can double-click them to see a relatively high quality preview, and you can copy that preview image onto the clipboard.

I asked Claude to write an AppleScript for me that would take a Command-A selection of all the items in the "Unable to Sync" smart album (which is not a real smart album), and have it copy them one at a time and write them into a folder at `~/Recovered Images`:

```applescript
use AppleScript version "2.4"
use scripting additions

set outputPath to (POSIX path of (path to desktop)) & "Recovered Images/"
set logFile to (POSIX path of (path to desktop)) & "recover-photos.log"
do shell script "mkdir -p " & quoted form of outputPath
do shell script "echo 'Starting recovery' > " & quoted form of logFile

-- Work with the current selection in Photos (Cmd+A to select all first)
tell application "Photos"
    activate
    delay 1
    set allItems to selection
    set totalCount to count of allItems
    if totalCount = 0 then
        display alert "No Selection" message "Select items in Photos first (Cmd+A to select all in the album)."
        return
    end if
end tell

-- Collect filenames upfront
set filenames to {}
tell application "Photos"
    repeat with anItem in allItems
        set end of filenames to filename of anItem
    end repeat
end tell

display alert "Ready" message "Found " & totalCount & " items. Do not touch mouse/keyboard after clicking OK." buttons {"Cancel", "OK"} default button "OK"

set successCount to 0
set failCount to 0

repeat with i from 1 to totalCount
    set currentFilename to item i of filenames
    set baseName to do shell script "echo " & quoted form of currentFilename & " | sed 's/\\.[^.]*$//'"

    try
        -- Select the item in Photos
        tell application "Photos"
            activate
            spotlight item i of allItems
        end tell
        delay 2

        -- Copy via Edit menu
        tell application "System Events"
            tell process "Photos"
                click menu item "Copy" of menu "Edit" of menu bar 1
            end tell
        end tell
        delay 2

        -- Save clipboard image data directly to file (no Preview needed)
        set tiffData to the clipboard as «class TIFF»
        set filePath to outputPath & baseName & ".tiff"
        set fileRef to open for access (POSIX file filePath) with write permission
        write tiffData to fileRef
        close access fileRef

        -- Convert TIFF to PNG using sips
        do shell script "sips -s format png " & quoted form of filePath & " --out " & quoted form of (outputPath & baseName & ".png") & " && rm " & quoted form of filePath

        set successCount to successCount + 1
        do shell script "echo 'OK: " & currentFilename & "' >> " & quoted form of logFile

    on error errMsg
        set failCount to failCount + 1
        do shell script "echo 'FAIL: " & currentFilename & ": " & errMsg & "' >> " & quoted form of logFile
    end try
end repeat

display alert "Recovery Complete" message "Recovered " & successCount & " of " & totalCount & " images." & return & "Failed: " & failCount & return & outputPath
```

Save to `recover-photos.applescript` and run with:

```
osascript recover-photos.applescript
```
