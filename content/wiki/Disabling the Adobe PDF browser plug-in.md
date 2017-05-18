---
tags: safari wiki
---

[Apple](/wiki/Apple)'s [Safari](/wiki/Safari) comes with lightning-fast built-in [PDF](/wiki/PDF) viewing support. If you ever make the mistake of installing Adobe's Acrobat software (in free or paid forms) then you'll find that Adobe has installed a bloated, slow, beachballing, almost unusable plug-in of its own which overrides the excellent built-in one.

A quick [Google](/wiki/Google) search on the topic reveals a large number of links on how to get back the superior behaviour:

-   <http://www.theronge.com/2006/02/02/how-to-remove-adobe-pdf-view-from-safari/>
-   <http://www.mcld.co.uk/blog/blog.php?110>
-   <http://forums.macosxhints.com/archive/index.php/t-56848.html>

The best information appears to be in this article:

-   <http://www.macfixit.com/article.php?story=20070404013904547>

# Problems

When I fired up Adobe Acrobat and went to the "Internet" section of the preferences I was dismayed to see that the checkbox for disabling the plug-in was ghosted out. I thought that this was likely because I was running from an unprivileged non-administrator account as is my custom. So I fired up the [Terminal](/wiki/Terminal) and launched Acrobat again using [sudo](/wiki/sudo); I was now able to disable the checkbox.

But when I fired up [Safari](/wiki/Safari) I saw that it continued to use the unwanted plug-in and on launching Acrobat I saw that the checkbox was again ghosted and checked.

I tried temporarily granting administrator privileges to my daily use account, but the checkbox was still ghosted.

Some of the hints out there suggest merely deleting the plugin itself (at `/Library/Internet Plug-Ins/AdobePDFViewer.plugin`) but [this Adobe article](http://kb.adobe.com/selfservice/viewContent.do?externalId=333545&sliceId=1) notes:

> If the AdobePDFViewer files are deleted, then they will be self-healed after you start Acrobat again after the files were deleted. You can also fix Safari manually by choosing Help &gt; Repair Acrobat Installation.

In other words, if you fix the infection, Adobe is likely to reinfect your system all over again under the guise of this unwanted "self-healing".

# The solution

The solution was to manually move the plug-in into `/Library/Internet Plug-Ins/Disabled Plug-Ins/`. From that point on, Safari fell back to the built-in support, the Acrobat preferences showed the checkbox as unchecked, and the "self-healing" feature did not kick in and "fix" my installation.

Even this solution, however, wasn't straight forward. Even from my administrator account I couldn't drag or even copy the plug-in into the `Disabled Plug-Ins` folder. It turns out that the folder was owned by `root` but its group was another user (my other administrator account). The only item in the folder was a plug-in named `Windows Media Plugin` (surprise, surprise). I believe the folder should have been created with user:group `root:admin`. Let's blame Microsoft, shall we?

So I changed the group of the folder to `admin` and was then able to move the unwanted plug-in inside using the Finder after authenticating (actually this consisted of a copy followed by a deletion of the old version, due to the way the permissions system interacts with the Finder).
