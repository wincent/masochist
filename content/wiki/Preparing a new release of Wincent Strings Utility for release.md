---
tags: development wincent wiki
---

This example uses version 1.1; change the version numbers as appropriate.

1\. Clean up `trunk` directory into its final state.

2\. Commit `trunk`.

3\. Use SmartSVN to create new tag (`1.1`, `1.2` etc) in repository based on `trunk`.

4\. Use SmartSVN to update approach branch in the repository (`1.x`, `2.x` etc) based on `trunk`.

5\. "Clean all" in Xcode.

6\. "Build" in Xcode.

7\. Export a clean copy of the source tree:

    svn export svn://svn.wincent.com/wincent-strings-util/tags/1.1 wincent-strings-util-1.1

8\. Copy the freshly built executable into the exported source tree:

    cp trabajo/build/Release/wincent-strings-util \
       trabajo/wincent-strings-util/wincent-strings-util-1.1/

9\. Zip the source tree:

    zip -r wincent-strings-util-1.1.zip wincent-strings-util-1.1

10\. Upload zip to server along with updated webpages.

11\. Update `download.php` to point at the new version and upload.

12\. Submit notification to VersionTracker, MacUpdate.

13\. Post announcements to [announcements lists](http://lists.wincent.com/).

14\. Post announcement to wincent.org

15\. Post announcement to forums.wincent.com

16\. There is no step 16.
