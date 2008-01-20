---
title: Teach plug-in to launch using LSOpenItemsWithRole() (REnamer, 20661f5)
---

This solves an issue with the old implementation which used execv() where it would allow multiple instances of the application to be launched.

As a nice side effect, this simplifies the code considerably and should run faster too with large numbers of files because we are basically working with FSRefs the whole time rather than converting them to path representations.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
