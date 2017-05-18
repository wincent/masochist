---
title: Use err() and warn() functions consistently (buildtools, 3611298)
tags: snippets
---

Some of the scripts were using vanilla "echo" statements for issuing warnings and errors. This commit brings all scripts into line, consistently using the warn() and err() functions defined in Common.sh for that purpose.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
