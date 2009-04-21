---
title: Goodbye Prototype/Scriptaculous
tags: scriptaculous jquery prototype
---

[Some lucky people](http://fukamachi.org/wp/2009/04/13/js-changeover/) are able to rip out [Prototype](/wiki/Prototype) and [Scriptaculous](/wiki/Scriptaculous) and replace them with [jQuery](/wiki/jQuery) in a single weekend.

I personally have had to [work a little bit harder](/issues/1278) — I started [back at the beginning of March](/blog/switching-to-jquery) and have had half-done changes hanging around in my work tree since then — but it's finished at last!

     app/views/layouts/application.haml |    2 +-
     public/javascripts/controls.js     |  963 --------
     public/javascripts/dragdrop.js     |  973 --------
     public/javascripts/effects.js      | 1128 ----------
     public/javascripts/prototype.js    | 4320 ------------------------------------
     5 files changed, 1 insertions(+), 7385 deletions(-)

The change to the application layout was just:

    diff --git a/app/views/layouts/application.haml b/app/views/layouts/application.haml
    index 5222e5d..0596220 100644
    --- a/app/views/layouts/application.haml
    +++ b/app/views/layouts/application.haml
    @@ -9,7 +9,7 @@
         =stylesheet_link_tag 'display'
         =yield :css
         =javascript_include_tag 'jquery-1.3.2.min'
    -    =javascript_include_tag :defaults
    +    =javascript_include_tag 'application'
         =dynamic_javascript_include_tag
         =@atom_link unless @atom_link.blank?
       %body
