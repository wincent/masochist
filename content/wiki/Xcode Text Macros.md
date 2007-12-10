---
tags: 
---

# C

-   `if`: `if` block, `if/else` block
-   `for`: `for` block
-   `fori`: `for` block
-   `while`: `while` block (alias to w)
-   `switch`: `switch` block
-   `case`: `case` block
-   `pm`: `#pragma mark` (customized)
-   `pim`: `#import` statement
-   `pif`: `#if/#else/#endif` statement

# Objective-C

-   `a`: alloc/init pattern
-   ``:
-   ``:
-   ``:
-   ``:

<!-- -->

    * <tt></tt>: 

# Doxygen

-   `dc`: Doxygen comment
-   `dgs`: Doxygen group start
-   `dge`: Doxygen group end

# Customization

## Xcode 3.x

According to [this post](http://www.cocoabuilder.com/archive/message/xcode/2007/11/29/17777) this actually *is* a documented feature, but seeing as the [Xcode](/wiki/Xcode) release notes don't actually appear to be shipped with Xcode (at least, nothing comes up when you search for "Xcode release notes" in the documentation window) I guess this qualifies as an undocumented feature; your templates now need to be stored here:

    ~/Library/Application Support/Developer/Shared/Xcode/Specifications

Or here:

    ~/Library/Application Support/Developer/3.0/Xcode/Specifications

You can base your specifications of the Apple-provided ones here:

    /Developer/Library/Xcode/Specifications/

## Xcode 2.x

To override an Apple specification, copy the file from:

    /Developer/Applications/Xcode.app/Contents/PlugIns/TextMacros.xctxtmacro/Contents/Resources

To:

    ~/Library/Application Support/Apple/Developer Tools/Specifications

Open the copied file in [Property List Editor](/wiki/Property_List_Editor) and save it as an [ASCII Property List](/wiki/ASCII_Property_List); this will strip the comments but will also have the effect of tidying up the formatting and making editing easier.

Now you can override Apple's definitions, delete those you don't wish to override, and add your own. Settings "cascade". For example, I changed the C `BlockSeparator` setting and all the C-language block definitions inherited the new behaviour (after restarting [Xcode](/wiki/Xcode)):

        {
            ComputerLanguages = (c); 
            DefaultSettings = {
                BlockSeparator = "\n"; 
                CaseStatementSpacing = ""; 
                InExpressionsSpacing = ""; 
                PostBlockSeparator = "\n"; 
                PreExpressionsSpacing = " "; 
            }; 
            Identifier = c; 
            IsMenu = YES; 
            Name = C; 
        }, 

To:

        {
            ComputerLanguages = (c); 
            DefaultSettings = {
                BlockSeparator = " "; 
                CaseStatementSpacing = ""; 
                InExpressionsSpacing = ""; 
                PostBlockSeparator = "\n"; 
                PreExpressionsSpacing = " "; 
            }; 
            Identifier = c; 
            IsMenu = YES; 
            Name = C; 
        }, 
