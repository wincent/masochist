---
title: Fix custom rake database tasks (wincent.com, 9e5a3d1)
tags: snippets
---

Here I was doing stuff like "db:reset:all" (which drops the databases, creates them, and then sets up the tables from the old schema.rb) when I really meant to do "db:migrate:reset:all" (which does the same, except recreates the tables by running all the migrations again).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
