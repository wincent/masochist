---
title: Add home directory backup script (snippets, 7643a87)
---

This new script is designed to complement the daily "burn to DVD" script that I've been using for a long time now (and will continue to use). This is a simple combination of nice, sudo and tar which excludes a couple of uninteresting subdirectories but otherwise dumps my entire home directory into a compressed tar archive on an external volume.

It is intended to be run four times a day from a cron job.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
