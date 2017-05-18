---
tags: css wiki
---

[ReCSS](/wiki/ReCSS) is a bookmarklet that triggers an in-place reload of the CSS on the current page:

    javascript:void(function(){var i,a,s;a=document.getElementsByTagName('link');for(i=0;i<a.length;i++){s=a[i];if(s.rel.toLowerCase().indexOf('stylesheet')>=0&&s.href) {var h=s.href.replace(/(&|%5C?)forceReload=\d+/,'');s.href=h+(h.indexOf('?')>=0?'&':'?')+'forceReload='+(new Date().valueOf())}}})();

Source: <http://david.dojotoolkit.org/recss.html>
