---
title: The Apple Store
---

Just saw [this post](http://www.zeldman.com/2007/09/27/something-new-at-apple-store/) (via [Gruber](http://daringfireball.net/)):

> But while its beauty and usability have always run ahead of the pack, its underlying source code has not always kept pace. Now the online Apple Store’s inside is as beautiful as its exterior—and as far ahead of the mainstream in web development as a company like Apple needs to be.\
> \
> One day, all sites will be built like this. View Source for an inspiring glimpse of how semantic and accessible even a grid-based, image-intensive, pixel-perfect site can be.

Although [the store front](http://store.apple.com/) looks absolutely magnificent I am not so sure about the source. There is a *lot* of superfluous whitespace which makes it much harder to read than it should be. [Tidy](http://www.wincent.com/knowledge-base/Tidy) reports these warnings (but no hard errors):

    line 439 column 217 - Warning: nested emphasis <span>
    line 1601 column 238 - Warning: unescaped & which should be written as &
    line 1603 column 234 - Warning: unescaped & which should be written as &
    line 1605 column 251 - Warning: unescaped & which should be written as &
    line 1609 column 233 - Warning: unescaped & which should be written as &
    line 1644 column 235 - Warning: unescaped & which should be written as &
    line 1679 column 231 - Warning: unescaped & which should be written as &
    line 1681 column 239 - Warning: unescaped & which should be written as &
    line 109 column 9 - Warning: <link> inserting "type" attribute
    line 116 column 13 - Warning: <link> inserting "type" attribute
    line 117 column 1 - Warning: <link> inserting "type" attribute
    line 207 column 9 - Warning: <img> lacks "alt" attribute
    line 310 column 13 - Warning: <script> inserting "type" attribute
    line 316 column 37 - Warning: <a> anchor "usernav-home" already defined
    line 320 column 13 - Warning: <script> inserting "type" attribute
    line 527 column 192 - Warning: <img> lacks "alt" attribute
    line 597 column 192 - Warning: <img> lacks "alt" attribute
    line 667 column 192 - Warning: <img> lacks "alt" attribute
    line 737 column 192 - Warning: <img> lacks "alt" attribute
    line 811 column 191 - Warning: <img> lacks "alt" attribute
    line 881 column 192 - Warning: <img> lacks "alt" attribute
    line 951 column 192 - Warning: <img> lacks "alt" attribute
    line 1021 column 192 - Warning: <img> lacks "alt" attribute
    line 1234 column 17 - Warning: <form> lacks "action" attribute
    line 1847 column 41 - Warning: <input> proprietary attribute "border"
    line 1878 column 13 - Warning: trimming empty <div>
    Info: Document content looks like HTML Proprietary
    26 warnings, 0 errors were found!

Pipe it through `tidy -i` and it does look great, but without it I'm left feeling unsatisfied looking at the source. Maybe Apple needs to take some inspiration from [Haml](http://www.wincent.com/knowledge-base/Haml).
