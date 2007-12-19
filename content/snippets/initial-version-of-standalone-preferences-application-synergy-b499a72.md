---
title: Initial version of standalone preferences application (Synergy, b499a72)
---

Now the Synergy prefPane is no longer loaded by the System Preferences and is instead hosted by a standalone application. This commit is an initial version of the application which loads the prefPane bundle and displays the window in the center of the screen on launch.

This change was made after a review of the Garbage Collection migration. Synergy's code is found in two places: inside the application itself and inside the preference pane (and the application is bundled inside the preference pane bundle). The application code has been converted to use Garbage Collection but the preference pane code could not be converted because the System Preferences application is compiled without GC support and the PreferencePanes framework against which the preference pane must link does not come in a GC-enabled version, at least as of Leopard.

This is problematic because some of the Synergy code is shared between the app and the preference pane; it is therefore necessary for the common code to be written using a reference-counting style (which largely negates the benefit of moving to GC) or using conditional compilation to produce two variants of the same code (which is an error-prone process).

So evaluating all this, it seems the best course of action is to host the preference pane in a standalone application. In order to do so I can no longer link against the PreferencePanes framework, so I've made a new class, WOPreferencePane, to stand in for NSPreferencePane, and a simple NSWindow subclass, WOPreferenceWindow, to load and display a single pane.

An additional benefit of this move is that from now on Synergy will not require an installer because as a standalone application it can be installed anywhere.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
