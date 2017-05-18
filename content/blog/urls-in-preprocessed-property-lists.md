---
title: URLs in preprocessed property lists
tags: blog
---

**Update:**

I've just discovered that passing the `-traditional` switch to the preprocessor solves the problems discussed in the following post. The reason why I didn't discover this sooner is that the GCC man page has only this to say about the switch:

> Formerly, these options caused GCC to attempt to emulate a pre-standard C compiler. They are now only supported with the -E switch. The preprocessor continues to support a pre-standard mode. See [the GNU CPP manual](http://developer.apple.com/documentation/DeveloperTools/gcc-4.0.1/cpp/Traditional-Mode.html) for details.

No mention of trigraphs. No mention of comments. (Bad GNU!) But in short, it allows me to ignore `//` sequences in URLs without running into problems with trigraphs. You still have to change your included files to use only C-style comments but at least you don't have to wait for a future release of Xcode for Apple to improve their preprocessing. It's also a more robust solution because it doesn't require you to remember to replace instances of "????" in any newly-created property lists in the future.

Continue reading to see my initial approaches to working around the problems...





\
Today Xcode's `Info.plist` preprocessing feature started producing invalid XML for me, thus preventing any of my builds from completing. Source XML like this:

        <key>WOPlugInVendorWebsite</key>
        <string>http://www.wincent.com/</string>
    </dict>
    </plist>

Was getting turned into this:

        <key>WOPlugInVendorWebsite</key>
        <string>http:
    </dict>
    </plist>

Evidently the preprocessor was seeing the `//` in the property list as a comment and was discarding it and everything following it (up to the end-of-line). I hadn't run into this problem before because up until today I had never had to put a URL into a preprocessed property list.

Using the `-C` switch to GCC was not an option as that would prevent *all* comments from being discarded, and I only wanted the not-really-a-comment URL to be preserved. I did not fancy the idea of removing all comments from the header file that I include prior to preprocessing.

The solution in the end was to pass the `-ansi` switch to the preprocessor. This causes `//` to not be treated as a comment marker. Traditional C-style comments (delineated with `/*` and `*/`) continue to be discarded. All I had to do then was convert the Objective-C style comments in my header to C-style comments, and add the following to my build configuration file:

    INFOPLIST_OTHER_PREPROCESSOR_FLAGS = -ansi

But my problems did not end there. The `-ansi` has the effect of turning on GCC's trigraph support, that means that any property list containing the string "????" like this:

        <key>CFBundleSignature</key>
        <string>????</string>

Will end up producing invalid XML like this:

        <key>CFBundleSignature</key>
        <string>??{/string>

Specifically, the problem is that the sequence "??&lt;" is considered to be a trigraph sequence and is converted to "{" (see the GCC man page for more info on trigraphs).

Unfortunately there is no way of turning off trigraph support. GCC has a `-trigraph` switch but not a `-no-trigraph` switch. How to work around this? The [documentation](http://developer.apple.com/documentation/MacOSX/Conceptual/BPRuntimeConfig/Articles/ConfigApplications.html) says that at a minimum all applications should include the `CFBundleSignature` key, and even though I'm building frameworks and plug-ins (not applications), one can never be too careful when it comes to interpreting the documentation. Omitting the key entirely is therefore not an option even though "????" is the default. Neither is specifying an empty string as the consequences of such an action are not clear. Registering a new creator code for every single bundle is not a viable option either. Is there any way of escaping the trigraph so that the preprocessor won't convert it? If there is I don't know it.

In the end I changed my property list to look like this:

      <key>CFBundleSignature</key>
      <string>WO_DEFAULT_SIGNATURE</string>

And made yet another modification to my build configuration file:

     INFOPLIST_PREPROCESSOR_DEFINITIONS = WO_DEFAULT_SIGNATURE=????

Xcode then produces something very close to what I'm looking for:

      <key>CFBundleSignature</key>
      <string> ????</string>

Notice the extra space inserted by the preprocessor? If you redefine `WO_DEFAULT_SIGNATURE` as an alphanumeric word (like "test", for example) then no space is inserted. If you try to enclose it in quote marks they are stripped by Xcode before being passed to the preprocessor. If you try to escape the quote marks — `\"????\"` — then you get literal quote marks in your property list.

Replace `WO_DEFAULT_SIGNATURE` in your property list with `$(WO_DEFAULT_SIGNATURE)` and you end up getting en empty string in your output. Same if you use `${WO_DEFAULT_SIGNATURE}`. If Apple improves the handling of property list preprocessing in a future release of Xcode I'll be able to get around the "extra space" problem by turning `WO_DEFAULT_SIGNATURE` into a build setting, using the `$(WO_DEFAULT_SIGNATURE)` format in the property list, and dumping the `INFOPLIST_PREPROCESSOR_DEFINITIONS` build setting.

Problem solved and I only had to make three or four kludgey concessions (sigh). Time lost: about two hours. The joy of development.
