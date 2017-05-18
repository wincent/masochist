---
tags: movable.type wiki
---

# Turn off comments and search if you can

If you don't need don't need comments then you can set up a very, very secure [Movable Type](/wiki/Movable_Type) installation. There's really no excuse not to turn off search; just set up a [Google](/wiki/Google) search page for your site, like this one:

-   <http://wincent.com/a/site-map/search/>

Tips on how to do this appear below.

If you can turn off comments and search then you can effectively hide all traces of your [Movable Type](/wiki/Movable_Type) installation from the public eye and just use it as a convenient tool for generating static but easily-updateable pages. Most people won't even know you're running [Movable Type](/wiki/Movable_Type). By putting your install in an out-of-the-way location, you can use [security through obscurity](/wiki/security_through_obscurity) (not always a bad thing) to protect you from any flaws that might be in the product. I use this technique on my personal [weblog](/wiki/weblog) (<http://colaiuta.net/>) and on my products news page (<http://wincent.org/>), both powered by [Movable Type](/wiki/Movable_Type) behind the scenes.

See below for more information on hiding your [Movable Type](/wiki/Movable_Type) installation.

# Don't advertise the location of your [Movable Type](/wiki/Movable_Type) install

1.  Turn off (or delete) the template used to generate any [RSD](/wiki/RSD) archives in each weblog
2.  Delete any [RSD](/wiki/RSD) files previously written to your server (normally `rsd.xml`); use the `find` command
3.  Remove any references to the [RSD](/wiki/RSD) files that may exist in your templates; use `grep -R`
4.  Turn off the [Movable Type](/wiki/Movable_Type) search function; use Google instead (it's better anyway) with a form something like this:

<!-- -->

    <form method="get" action="http://www.google.com/search">
      <input type="text" name="q" size="20" maxlength="255" value="" />
      <input type="hidden" name="hl" value="en" />
      <input type="hidden" name="domains" value="example.com" />
      <input type="hidden" name="sitesearch" value="example.com" />
      <input type="hidden" name="ie" value="UTF-8" />
      <input type="hidden" name="oe" value="UTF-8" />          
      <input type="submit" name="btnG" value="Search" />
    </form>

Replacing the original:

    <form method="get" action="<$MTCGIPath$><$MTSearchScript$>">
      <input type="hidden" name="IncludeBlogs" value="<$MTBlogID$>" />
      <label for="search" accesskey="4">Search the news archives:</label><br />
      <input id="search" name="search" size="20" /><br />
      <input type="submit" value="Search" />
    </form>

# Move your install to less predictable location

For example, installing at <http://example.com/iegaisoomipahrur/> is much better than using <http://example.com/mt/> as an install address.

This will require you to update the `CGIPath` setting in your `mt-config.cgi` file and potentially also your Apache configuration (ensuring that the `ExecCGI` option is set for the corresponding directory).
