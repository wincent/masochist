---
title: Dock icon update
tags: blog
---

Non-square album art is [working again](http://www.wincent.com/a/about/wincent/weblog/svn-log/archives/2006/12/synergy_advance_r380_5_items_c.php) as shown in the screenshot below (see [yesterday's post](http://www.wincent.com/a/about/wincent/weblog/archives/2006/12/core_image_fun.php) for an image showing the incorrect behaviour):

![](/system/images/legacy/fixed-non-square.png)

At the same time I took the opportunity to implement customizability for the badge size, position and border width.

Still to fix is a minor off-by-one glitch which you can see in the image below; note that the badge and the border do not have a perfect fit yet:

![](/system/images/legacy/off-by-one.png)

And also, non-rectangular album art needs to be centered and the affine clamp effect cleaned up:

![](/system/images/legacy/affine-clamp.png)
