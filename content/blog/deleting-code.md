---
title: Deleting code
tags: blog
---

Sometimes deleting code is the best kind of enhancement you can make.





Here's a quick example trimmed down to show only the relevant context. In this case we're talking about replacing this:

    - (void)applicationDidFinishLaunching:(NSNotification *)aNotification
    {
        // check Dock icon state: http://www.wincent.com/a/support/bugs/show_bug.cgi?id=393
        BOOL wasVisibleAtLaunch = [[WODockIcon sharedIcon] isVisible];
        BOOL shouldBeVisible    = (![defaults boolForKey:WO_PREF_GENERAL_NO_ICON_IN_DOCK]);
        unless (wasVisibleAtLaunch == shouldBeVisible)
        {
            // detected a discrepancy: ask if user wants to proceed with change
            NSString *hiddenOrVisible = (shouldBeVisible ? _WO_VISIBLE : _WO_HIDDEN);
            int returnValue = NSRunAlertPanel(_WO_DOCK_ICON_NEEDS_UPDATING,         // title
                                              _WO_DOCK_ICON_UPDATE_EXPLANATION,     // message
                                              _WO_UPDATE,                           // default button
                                              _WO_DO_NOT_UPDATE,                    // alternate button
                                              nil,                                  // other button
                                              hiddenOrVisible);                     // "hidden" or "visible"
            if (returnValue == NSAlertDefaultReturn)
                [self attemptSetDockIconVisible:shouldBeVisible];
        }
    }


    - (void)attemptSetDockIconVisible:(BOOL)visible
    {
        BOOL failed = NO;
        if ([NSApp infoDictionaryIsWriteable])              // try modifying plist
            failed = (![NSApp setDockIconVisible:visible]);
        else                                                // plist is not writeable
        {
            if ([NSApp infoDictionaryIsOnWriteableVolume])
            {
                // create temporary plist file
                int fd; // file descriptor for temporary file
                NSString *tempPlist = [[NSApp infoDictionaryWithDockIconVisible:visible] writeToTemporaryFile:&fd];


                if (tempPlist)
                {
                    // try to authenticate as root
                    WOSudo      *sudo       = [[WOSudo alloc] init];
                    NSString    *copyTool   = @"/bin/cp";
                    NSString    *plistPath  = [NSString stringWithUTF8String:[tempPlist fileSystemRepresentation]];
                    NSArray     *arguments  = [NSArray arrayWithObjects:plistPath, [NSApp infoDictionaryPath], nil];
                    [sudo setArgs:arguments forTool:copyTool];


                    // copy temporary file over old file with root privileges
                    NSString *prompt = _WO_SUDO_PROMPT;
                    if ([sudo authenticateAndAuthorizeWithPrompt:prompt])
                    {
                        int result = [sudo executeTool:copyTool withArgs:arguments returnImmediately:NO];
                        if (result != EXIT_SUCCESS)
                            failed = YES;
                    }
                    else
                        failed = YES;                   // user failed to authenticate or cancelled


                    [sudo release];
                    close(fd);
                }
                else    
                    failed = YES;                       // could not create temporary plist file
            }
            else                                        // not on writeable volume
            {
                // advise user to copy application onto a writeable volume
                (void)NSRunAlertPanel(_WO_NOT_ON_WRITABLE_VOLUME,           // title
                                      _WO_COPY_TO_WRITABLE_VOLUME,          // message
                                      _WO_OK,                               // default button
                                      nil, nil);                            // alternate and other buttons
                return;
            }
        }


        if (failed)
        {
            (void)NSRunAlertPanel(_WO_COULD_NOT_CHANGE_SETTING,             // title
                                  _WO_TRY_AGAIN_LATER,                      // message
                                  _WO_OK,                                   // default button
                                  nil, nil);                                // alternate and other buttons
        }
        else // success: reset Launch Services database and offer to restart
        {
            [NSApp resetLaunchServicesDatabase];
            int returnValue = NSRunAlertPanel(_WO_CHANGED_SETTING,          // title
                                              _WO_RELAUNCH_TO_SEE_CHANGE,   // message
                                              _WO_RELAUNCH,                 // default button
                                              _WO_LATER,                    // alternate button
                                              nil);                         // other button
            if (returnValue == NSAlertDefaultReturn)
                [self relaunch];
        }
    }

With this:

    - (void)applicationDidFinishLaunching:(NSNotification *)aNotification
    {
        if (![defaults boolForKey:WO_PREF_GENERAL_NO_ICON_IN_DOCK]) // dock icon should be visible
            (void)[NSApp transformToForegroundApplication];
    }

Now obviously those examples won't compile as-is because they depend on other methods and macros which aren't shown, but you get the idea. Not only is the new code shorter and therefore easier to maintain (and in fact, there's other glue code for handling the preferences interface which isn't shown above but which can also be deleted; in total we're talking about a few hundred lines of code that can be thrown away) but it's also better for a number of other reasons: it plays nicely with Leopard's code signing feature, works for non-admin users even when the application is installed in a location writeable only by admins, works even when the application is running from a non-writeable volume such as a disk image, properly allows each user in a multi-user system to have their own dock icon visibility settings, and reduces the number of user-visible strings that localizers have to translate.
