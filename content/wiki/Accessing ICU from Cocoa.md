---
tags: cocoa wiki
---

[Apple](/wiki/Apple) ships [ICU](/wiki/ICU) with [Mac OS X](/wiki/Mac_OS_X) but only as a private library with no headers. You could try building [ICU](/wiki/ICU) yourself and embedding it in your application but the library is huge (about 8 megabytes) due to the size of the conversion tables and other data it contains (see <http://icu-project.org/userguide/icudata.html#custom_data_library>).

Until [Apple](/wiki/Apple) decides to make the [API](/wiki/API) public, one sneaky way of using it indirectly without having to meddle with private libraries is to access it via `NSPredicate`.

# See also

-   <http://www.stiefels.net/2007/01/24/regular-expressions-for-nsstring/>
