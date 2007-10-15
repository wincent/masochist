---
title: Add sessions (wincent.com, 0d0f571)
---

Add a sessions controller and helper; no model is required and the truth is that even the helper may prove to be unnecessary in the long run. This commit also includes a migration and modifications to the routes.rb file to direct the "login" and "logout" URLs to the appropriate actions in the sessions controller.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
