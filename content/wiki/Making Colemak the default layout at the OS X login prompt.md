---
tags: colemak os.x
---

Via [Ask Different](http://apple.stackexchange.com/a/108836):

```shell
$ cp /Library/Preferences/com.apple.HIToolbox.plist /tmp/
$ plutil -convert xml1 /tmp/com.apple.HIToolbox.plist
$ plutil -convert xml1 ~/Library/Preferences/com.apple.HIToolbox.plist
$ vim /tmp/com.apple.HIToolbox.plist
$ sudo cp /tmp/com.apple.HIToolbox.plist /Library/Preferences/
```

After editing `AppleCurrentKeyboardLayoutInputSourceID`, `KeyboardLayout ID` and `KeyboardLayout Name` (which you can get from the `~/Library/Preferences/` file which we coverted above), the result looks something like:

    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
    <dict>
    	<key>AppleCurrentKeyboardLayoutInputSourceID</key>
    	<string>com.apple.keylayout.Colemak</string>
    	<key>AppleDefaultAsciiInputSource</key>
    	<dict>
    		<key>InputSourceKind</key>
    		<string>Keyboard Layout</string>
    		<key>KeyboardLayout ID</key>
    		<integer>12825</integer>
    		<key>KeyboardLayout Name</key>
    		<string>Colemak</string>
    	</dict>
    	<key>AppleEnabledInputSources</key>
    	<array>
    		<dict>
    			<key>InputSourceKind</key>
    			<string>Keyboard Layout</string>
    			<key>KeyboardLayout ID</key>
    			<integer>12825</integer>
    			<key>KeyboardLayout Name</key>
    			<string>Colemak</string>
    		</dict>
    	</array>
    </dict>
    </plist>
