---
tags: wiki
---

Normally [Xcode](/wiki/Xcode) file templates only contain two files: a main file and an optional "counterpart" file. It is, however, possible to make file templates that contain more than two files:

<http://lists.apple.com/archives/projectbuilder-users/2002/Jan/msg00165.html>

The Web Objects "Component" template is a complex example of what is possible. It contains the following files:

-   `wocomponent.woo`
-   `wocomponent.html`
-   `wocomponent.java`
-   `wocomponent.wo` (an empty folder)
-   `wocomponent.api`
-   `wocomponent.wod`

And the following `TemplateInfo.plist`:

    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
    <dict>
    	<key>Description</key>
    	<string>Adds a new WOComponent file to a project.</string>
    	<key>EnclosingGroupName</key>
    	<string>%@</string>
    	<key>FileToDisplay</key>
    	<string>%@.wo/%1$@.html</string>
    	<key>ImplicitCounterpartTemplateFiles</key>
    	<dict>
    		<key>wocomponent.api</key>
    		<string>%@.api</string>
    		<key>wocomponent.java</key>
    		<string>%@.java</string>
    		<key>wocomponent.wo</key>
    		<string>%@.wo</string>
    	</dict>
    	<key>ImplicitExtraTemplateFiles</key>
    	<dict>
    		<key>wocomponent.html</key>
    		<string>%@.wo/%1$@.html</string>
    		<key>wocomponent.wod</key>
    		<string>%@.wo/%1$@.wod</string>
    		<key>wocomponent.woo</key>
    		<string>%@.wo/%1$@.woo</string>
    	</dict>
    </dict>
    </plist>
