---
tags: wiki
---

The Xcode User Guide states that:

> When dead-code stripping is enabled, the static linker searches for code that is unreachable from an initial set of live symbols and blocks. The initial list of live symbols and blocks may include ... Objective-C runtime data

Nevertheless, in my own projects, I was seeing critical Objective-C runtime data get stripped away that prevented me from using the BUNDLE\_LOADER build setting effectively. Ironically, I was faced with a choice of keeping symbol visibility as low as possible and benefiting from the performance enhancements of dead-code stripping (due to the lower memory footprint) *or* being able to easily unit test my code, but not both.

To find out what symbols are being stripped, the guide says:

> If you want to know what symbols were stripped by the static linker, you can find out by examining the linker-generated load map. This map lists all of the segments and sections in the linked executable and also lists the dead-stripped symbols. To have the linker generate a load map, add the -M option to your linker command-line options. In Xcode, you can add this option to the Other Linker Flags build setting. Note: If you are passing this option through the cc compiler driver, make sure you pass this flag as -Wl,-M so that it is sent to the linker and not the compiler.

The load map is printed to the build results window. Unfortunately, the load map does not appear to include any indication of the dead code stripped Objective-C symbols (although it does for other types of dead code stripped code and symbols). There are some differences in the output, however. For example, the dead-code stripped version looks like this:

    __OBJC           __class          0x000328c0 0x000002f0
    				  0x00031760 0x00000030 Objects-normal/i386/WOItemsValueTransformer.o:.section_all
    				  0x0002b6e0 0x00000030 Objects-normal/i386/WORegularExpression.o:.section_all
    				  0x0002dc80 0x00000030 Objects-normal/i386/WORolloverButton.o:.section_all
    				  0x0002e2c0 0x00000030 Objects-normal/i386/WORolloverButtonCell.o:.section_all
    				  0x0002c5c0 0x00000030 Objects-normal/i386/WOBundle.o:.section_all
    				  0x0002c2e0 0x00000030 Objects-normal/i386/WOLogManager.o:.section_all
    				  0x00032420 0x00000030 Objects-normal/i386/WOObject.o:.section_all
    				  0x00030c40 0x00000030 Objects-normal/i386/WOSingleton.o:.section_all

But the non-dead-code-stripped version looks like this:

    __OBJC           __class          0x000328a0 0x000002f0
    				  0x000328e0 0x00000030 Objects-normal/i386/WOItemsValueTransformer.o 
    				  0x00032920 0x00000030 Objects-normal/i386/WORegularExpression.o 
    				  0x00032960 0x00000030 Objects-normal/i386/WORolloverButton.o 
    				  0x000329a0 0x00000030 Objects-normal/i386/WORolloverButtonCell.o 
    				  0x000329e0 0x00000030 Objects-normal/i386/WOBundle.o 
    				  0x00032a60 0x00000030 Objects-normal/i386/WOLogManager.o 
    				  0x00032aa0 0x00000030 Objects-normal/i386/WOObject.o 
    				  0x00032ae0 0x00000030 Objects-normal/i386/WOSingleton.o

This is true for all subsections in the `__OBJC` section; all have the `.section_all` suffix:

-   `__class`
-   `__meta_class`
-   `__cls_meth`
-   `__inst_meth`
-   `__protocol`
-   `__category`
-   `__class_vars`
-   `__instance_vars`
-   `__module_info`
-   `__symbols`

Looking at the assembly language generated for an Objective-C class I see this interesting section:

    Ltext0:
    	.lazy_reference .objc_class_name_NSString
    	.lazy_reference .objc_class_name_NSDictionary
    	.lazy_reference .objc_class_name_NSNumber
    	.lazy_reference .objc_class_name_NSArray
    	.lazy_reference .objc_class_name_NSMutableArray
    	.lazy_reference .objc_class_name_NSAssertionHandler
    	.lazy_reference .objc_class_name_NSMutableDictionary
    	.lazy_reference .objc_class_name_NSMutableString
    	.lazy_reference .objc_class_name_NSScanner
    	.lazy_reference .objc_class_name_NSObject
    	.objc_class_name_WORegularExpression=0
    	.globl .objc_class_name_WORegularExpression
    	.objc_cat_cls_meth
    	.objc_cat_inst_meth
    	.objc_string_object
    	.section __OBJC, __cstring_object, regular, no_dead_strip
    	.objc_message_refs
    	.section __OBJC, __sel_fixup, regular, no_dead_strip
    	.objc_cls_refs
    	.objc_class
    	.objc_meta_class
    	.objc_cls_meth
    	.objc_inst_meth
    	.objc_protocol
    	.objc_class_names
    	.objc_meth_var_types
    	.objc_meth_var_names
    	.objc_category
    	.objc_class_vars
    	.objc_instance_vars
    	.objc_module_info
    	.objc_symbols
    	.objc_meth_var_types

The two `no_dead_strip` directives above are the only ones in the entire file. Note also that the `.objc_class_name` is marked as `.globl`. If there were a way to cause `no_dead_strip` to be emitted in the assembly source the problem would be solved. The [Mac OS X Assembler Reference](http://developer.apple.com/documentation/DeveloperTools/Reference/Assembler/ASMDirectives/chapter_5_section_6.html) describes a `.no_dead_strip` directive that is used as follows:

    .no_dead_strip symbol_name

I've prepared a `WO_TEST_NO_DEAD_STRIP_CLASS` macro that can be used for inserting such a directive into the source. I've put the macro in [WOTest](/wiki/WOTest) seeing as the test-bundle scenario is the most likely one in which one would run into this BUNDLE\_LOADER problem.

# Alternative workarounds

Without recourse to the macro, it seems the only way to prevent this undesirable side-effect without turning off dead-code stripping entirely is to provide an EXPORTED\_SYMBOLS\_FILE containing the class names (using the same symbol format as reported in the linker error) that should not be stripped:

    .objc_class_name_WOClassName

Unfortunately one must maintain an extensive list of exported symbols in such a file, not just the class names that one wishes to protect from dead-code stripping. For example, in a test project the following compiler warnings were issued for symbols that were not explicitly referenced:

    /usr/bin/ld: warning symbol: _NXArgc referenced dynamically and must be exported
    /usr/bin/ld: warning symbol: _NXArgv referenced dynamically and must be exported
    /usr/bin/ld: warning symbol: ___progname referenced dynamically and must be exported
    /usr/bin/ld: warning symbol: _environ referenced dynamically and must be exported
    /usr/bin/ld: warning symbol: _catch_exception_raise referenced dynamically and must be exported
    /usr/bin/ld: warning symbol: _catch_exception_raise_state referenced dynamically and must be exported
    /usr/bin/ld: warning symbol: _catch_exception_raise_state_identity referenced dynamically and must be exported
    /usr/bin/ld: warning symbol: _clock_alarm_reply referenced dynamically and must be exported
    /usr/bin/ld: warning symbol: _do_mach_notify_dead_name referenced dynamically and must be exported
    /usr/bin/ld: warning symbol: _do_mach_notify_no_senders referenced dynamically and must be exported
    /usr/bin/ld: warning symbol: _do_mach_notify_port_deleted referenced dynamically and must be exported
    /usr/bin/ld: warning symbol: _do_mach_notify_send_once referenced dynamically and must be exported
    /usr/bin/ld: warning symbol: _do_seqnos_mach_notify_dead_name referenced dynamically and must be exported
    /usr/bin/ld: warning symbol: _do_seqnos_mach_notify_no_senders referenced dynamically and must be exported
    /usr/bin/ld: warning symbol: _do_seqnos_mach_notify_port_deleted referenced dynamically and must be exported
    /usr/bin/ld: warning symbol: _do_seqnos_mach_notify_send_once referenced dynamically and must be exported
    /usr/bin/ld: warning symbol: _receive_samples referenced dynamically and must be exported
    /usr/bin/ld: warning symbol: __mh_execute_header referenced dynamically and must be exported

All such symbols should be added to the exported symbols file. At any time in the future if those symbols are no longer implicitly used then they must be removed from the symbols file.

This solution is unworkable because it means that even symbols marked with an `EXPORT` macro will not be exported unless they appear in the file, thus rendering the macro useless and increasing the maintenance costs all round; from the [ld](/wiki/ld) manpage:

    The specified  filename  contains  lists of global symbol names
    that will remain as global symbols  in  the  output  file.   All
    other  global  symbols will be treated as if they were marked as
    __private_extern__ and will not be global in  the  output  file.
    The  symbol names listed in filename must be one per line. Lead-
    ing and trailing white space are not part of  the  symbol  name.
    Lines  starting with # are ignored, as are lines with only white
    space.

What would be the ideal solution, the GCC `_attribute__((used))` attribute, can't be applied to class names, as far as I know. You may choose from a number of unattractive options:

1.   Use a basic exported symbols file including only the class names you wish to test and ignore the warnings. In doing so lose the functionality of your `EXPORT` macro.
2.   Manually maintain additional entries (dozens of them) in the exported symbols file to avoid the warnings. In doing so lose the functionality of your `EXPORT` macro.
3.  Perform two builds of your application: one without dead code stripping (which you use when building the bundle), then another one which you build afterwards with dead code stripping.
4.  Define a linker flag when building the bundle to work around the linker error (or example, `-undefined dynamic_lookup`); the downside of specifying such a flag is that it affects *all* undefined symbols, not just the one that the linker stripped during dead code stripping.
5.  You can't use `-Wl,-U,.objc_class_name_WOClassName` to get around this problem when two-level namespaces are in effect, and you probably wouldn't want to do this anyway if the number of symbols was very large.
6.  Two off two-level name spaces for the test bundle and use the `-Wl,-U` switch to pass test class names to the linker.

# Mailing list threads

This question was posted on the [xcode-users](/wiki/xcode-users) mailing list:

<http://lists.apple.com/archives/xcode-users/2006/Aug/msg00083.html>

# Additional information

After much searching on this topic I found this information buried in the [Xcode 1.5 release notes](http://developer.apple.com/releasenotes/DeveloperTools/CompilerTools.html):

> The static link editor determines what unreachable code and data can be stripped based on the references from the initial live symbols and blocks. The initial live symbols include the symbols to be exported in the linked output. The set of exported symbols are specified with the -exported\_symbols\_list option or a list of symbols not to be exported is specified with the -unexported\_symbols\_list option. If no exported symbols are specified and the output is not an executable (shared library, bundle, etc) it is assumed all global symbols are to be exported. If the output is a shared library and a shared library initialization symbol is specified with -init symbol\_name option then that symbol\_name is an initial live symbol. If the output is an executable then the block that contains the entry point or the symbol specified with the -e symbol\_name is an initial live symbol. Other symbols can be marked by the programmer as an initial live symbols with the GNU compiler's \_\_attribute\_\_((used)). For Objective-C code, the compiler will also mark the blocks of Objective-C runtime data it produces so they are part of the initial live blocks. For symbols marked referenced dynamically (via the REFERENCED\_DYNAMICALLY bit in &lt;mach-o/nlist.h&gt;), such as the symbol \_environ from /usr/lib/crt1.o, they are also part of the initial live symbols.&lt;br /&gt; &lt;br /&gt; Before turning on the -dead\_strip option your project will first have to be "ported" to work with dead code stripping. This will include changing from -gused (the default for -g) to -gfull and re-compiling all of the objects files being linked into your program with the new compiler from the Mac OS X June 2004 release. Also if your building an executable that loads plugins, which uses symbols from the executable, you will have to make sure the symbols the plugins use are not stripped (by using \_\_attribute\_\_((used)) or the -exported\_symbols\_list option). If you are using an export list and building a shared library, or an executable that will be used with ld(1)'s -bundle\_loader flag, you need to include the symbols for exception frame information in the export list for your exported C++ symbols. These symbols end with .eh and can be seen with the nm(1) tool.&lt;br /&gt; &lt;br /&gt; The .no\_dead\_strip directive is generated by the new compiler when the \_\_attribute\_\_((used)) is specified on a symbol.&lt;br /&gt; &lt;br /&gt; The new section attribute no\_dead\_strip can be specified on a section to cause its entire contents to not to be dead stripped. The new compiler uses this for all Objective-C sections it creates.
