<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="generator" content="http://www.movabletype.org/" />

<title>Knowledge base: freshclam: "Problem with internal logger"</title>

<link rel="stylesheet" href="/a/styles.css" type="text/css" />
<link rel="alternate" type="application/rss+xml" title="RSS" href="http://www.wincent.com/a/knowledge-base/index.rdf" />
<link rel="alternate" type="application/atom+xml" title="Atom" href="http://www.wincent.com/a/knowledge-base/atom.xml" />

<link rel="start" href="http://www.wincent.com/a/knowledge-base/" title="Home" />
<link rel="prev" href="http://www.wincent.com/a/knowledge-base/archives/2006/06/wordpress_secur.php" title="WordPress security tip" />

<link rel="next" href="http://www.wincent.com/a/knowledge-base/archives/2006/06/clamping_down_o.php" title="Clamping down on spam" />

<script type="text/javascript" language="javascript">
<!--

var HOST = 'wincent.com';

// Copyright (c) 1996-1997 Athenia Associates.
// http://www.webreference.com/js/
// License is granted if and only if this entire
// copyright notice is included. By Tomer Shiran.

function setCookie (name, value, expires, path, domain, secure) {
    var curCookie = name + "=" + escape(value) + (expires ? "; expires=" + expires : "") + (path ? "; path=" + path : "") + (domain ? "; domain=" + domain : "") + (secure ? "secure" : "");
    document.cookie = curCookie;
}

function getCookie (name) {
    var prefix = name + '=';
    var c = document.cookie;
    var nullstring = '';
    var cookieStartIndex = c.indexOf(prefix);
    if (cookieStartIndex == -1)
        return nullstring;
    var cookieEndIndex = c.indexOf(";", cookieStartIndex + prefix.length);
    if (cookieEndIndex == -1)
        cookieEndIndex = c.length;
    return unescape(c.substring(cookieStartIndex + prefix.length, cookieEndIndex));
}

function deleteCookie (name, path, domain) {
    if (getCookie(name))
        document.cookie = name + "=" + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
}

function fixDate (date) {
    var base = new Date(0);
    var skew = base.getTime();
    if (skew > 0)
        date.setTime(date.getTime() - skew);
}

function rememberMe (f) {
    var now = new Date();
    fixDate(now);
    now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000);
    now = now.toGMTString();
    if (f.author != undefined)
       setCookie('mtcmtauth', f.author.value, now, '/', '', '');
    if (f.email != undefined)
       setCookie('mtcmtmail', f.email.value, now, '/', '', '');
    if (f.url != undefined)
       setCookie('mtcmthome', f.url.value, now, '/', '', '');
}

function forgetMe (f) {
    deleteCookie('mtcmtmail', '/', '');
    deleteCookie('mtcmthome', '/', '');
    deleteCookie('mtcmtauth', '/', '');
    f.email.value = '';
    f.author.value = '';
    f.url.value = '';
}

//-->
</script>





</head>

<body>

    <div style="text-align: center; font-family: 'Lucida Grande'; margin: 5px 250px 5px 250px; padding: 5px; font-size: x-small; border: 2px solid silver; -webkit-border-radius: 0.5em; -moz-border-radius: 0.5em; background: #fefefe;">
      <p>
        You are currently looking at an older section of the wincent.com website.<br />
        Please check the new version of the site at <a href="https://wincent.com/">https://wincent.com/</a> for updated content.<br />
      </p>
      </div>    <table border="0" align="center" cellspacing="0" cellpadding="0" width="832">
      <tr>
        <td width="32" height="29"><img src="/a/gfx/header/top-left-corner.jpg" width="32" height="29" alt="" /></td>
        <td style="background-image: url(/a/gfx/header/top-edge.jpg); background-repeat: repeat-x;" width="768" height="29" colspan="11"><img src="/a/gfx/header/top-edge.jpg" width="768" height="29" alt="" /></td>
        <td width="32" height="29"><img src="/a/gfx/header/top-right-corner.jpg" width="32" height="29" alt="" /></td>
      </tr>
      <tr>
        <td style="background-image: url(/a/gfx/header/left-side.jpg); background-repeat: repeat-y;" width="32"><img src="/a/gfx/header/left-side.jpg" width="32" height="71" alt="" /></td>
        <td style="background-image: url(/a/gfx/header/center-background.jpg); background-repeat: repeat;" colspan="11" align="center" valign="middle">
  <a href="http://www.wincent.com/"><img src="/a/gfx/wincent-logo-small-gray-bg.jpg" width="43" height="41" alt="wincent" align="middle" /></a>
  <a href="http://www.wincent.com/a/knowledge-base/"><img src="/a/gfx/knowledge-base-header.jpg" width="309" height="25" alt="knowledge base" align="middle"/></a>

        </td>
        <td style="background-image: url(/a/gfx/header/right-side.jpg); background-repeat: repeat-y;" width="32"><img src="/a/gfx/header/right-side.jpg" width="32" height="71" alt="" /></td>
      </tr>
      <tr id="menu-bar">
        <td width="32" height="25"><img src="/a/gfx/header/bottom-left-corner.jpg" width="32" height="25" alt="" /></td>
        <td style="background-image: url(/a/gfx/header/spacer-bottom-left.jpg); background-repeat: repeat-x;" width="89" height="25"><img src="/a/gfx/header/spacer-bottom-left.jpg" width="89" height="25" alt="" /></td>
        <td width="73" height="25">
          <ul style="width: 73px; height: 25px;">
            <li class="menu">
              <a href="http://www.wincent.com/a/products/" title="Full products listing"><img src="/a/gfx/header/products-off.jpg" width="73" height="25" alt="Products" /></a>
              <ul>
                <li><a href="https://wincent.com/products/synergy" title="The original iTunes menu bar controller">Synergy &gt;</a>
                  <ul>
                    <li><a href="https://wincent.com/products/synergy/download" title="Download Synergy">Download</a></li>
                    <li><a href="https://secure.wincent.com/a/products/synergy-classic/purchase/" title="Purchase Synergy">Purchase</a></li>
                    <li><a href="https://wincent.com/products/synergy/help" title="Frequently Asked Questions">FAQ</a></li>
                    <li><a href="http://www.wincent.com/a/products/synergy-classic/buttons/" title="Free button sets">Button Sets</a></li>
                  </ul>
                </li>
                <li><a href="http://www.wincent.com/a/products/synergy-advance/" title="Multi-purpose audio companion">Synergy Advance &gt;</a>
                  <ul>
                    <li><a href="http://www.wincent.com/a/products/synergy-advance/download/" title="Download Synergy Advance">Download preview</a></li>
                    <li><a href="https://secure.wincent.com/a/products/synergy-advance/purchase/" title="Purchase Synergy Advance">Purchase</a></li>
                    <li><a href="https://secure.wincent.com/a/products/synergy-advance/donate/" title="Support development with a donation">Donate</a></li>
                    <li><a href="https://secure.wincent.com/a/products/synergy-advance/donate/" title="Support development by becoming a sponsor">Sponsor</a></li>
                  </ul>
                </li>
                <li><a href="http://www.wincent.com/a/products/winswitch/" title="Enhanced replacement for Apple's Fast User Switching menu">WinSwitch &gt;</a>
                  <ul>
                    <li><a href="http://www.wincent.com/a/products/winswitch/download/" title="Download WinSwitch">Download</a></li>
                    <li><a href="https://secure.wincent.com/a/products/winswitch/donate/" title="Support development with a donation">Donate</a></li>
                    <li><a href="https://secure.wincent.com/a/products/winswitch/donate/" title="Support development by becoming a sponsor">Sponsor</a></li>
                    <li><a href="http://www.wincent.com/a/products/winswitch/faq/" title="Frequently Asked Questions">FAQ</a></li>
                  </ul>
                </li>
                <li><a href="http://www.wincent.com/a/products/hextrapolate/" title="Programmers number conversion tool">Hextrapolate &gt;</a>
                  <ul>
                    <li><a href="http://www.wincent.com/a/products/hextrapolate/download/" title="Download Hextrapolate">Download</a></li>
                    <li><a href="https://secure.wincent.com/a/products/hextrapolate/purchase/" title="Purchase Hextrapolate">Purchase</a></li>
                    <li><a href="http://www.wincent.com/a/products/hextrapolate/faq/" title="Frequently Asked Questions">FAQ</a></li>
                  </ul>
                </li>
                <li><a href="http://www.wincent.com/a/products/install/" title="Installation and deployment solution for developers">Install &gt;</a>
                  <ul>
                    <li><a href="http://www.wincent.com/a/products/install/download/" title="Install downloads">Downloads</a></li>
                    <li><a href="https://secure.wincent.com/a/products/install/purchase/" title="Purchase Install">Purchase</a></li>
                    <li><a href="https://secure.wincent.com/a/products/install/donate/" title="Support development with a donation">Donate</a></li>
                    <li><a href="https://secure.wincent.com/a/products/install/donate/" title="Support development by becoming a sponsor">Sponsor</a></li>
                    <li><a href="http://www.wincent.com/a/products/install/faq/" title="Frequently Asked Questions">FAQ</a></li>
                  </ul>
                </li>
                <li><a href="http://www.wincent.com/a/products/getsmart-pro/" title="Intelligent download manager">GetSmart Pro &gt;</a>
                  <ul>
                    <li><a href="https://secure.wincent.com/a/products/getsmart-pro/donate/" title="Support development with a donation">Donate</a></li>
                  </ul>
                </li>
                <li><a href="http://www.wincent.com/a/products/" title="Full product listing">Other products...</a></li>
              </ul>
            </li>
          </ul>
        </td>
        <td width="48" height="25"><a href="https://secure.wincent.com/a/store/" title="Wincent online store"><img src="/a/gfx/header/store-off.jpg" width="48" height="25" alt="Store" /></a></td>
        <td width="63" height="25">
          <ul style="width: 63px; height: 25px;">
            <li class="menu">
              <a href="http://www.wincent.com/a/services/" title="Full services listing"><img src="/a/gfx/header/services-off.jpg" width="63" height="25" alt="Services" /></a>
              <ul>
                <li><a href="http://www.wincent.com/a/services/custom-development/" title="Custom software development">Custom Development</a></li>
                <li><a href="http://www.wincent.com/a/services/mac-consultancy/" title="Apple and Mac OS X consultancy">Apple/Mac Consultancy</a></li>
                <li><a href="http://www.wincent.com/a/services/web-design/" title="Web design services">Web Design</a></li>
                <li><a href="http://www.wincent.com/a/services/hosting/" title="Internet web and email hosting">Hosting</a></li>
              </ul>
            </li>
          </ul>
        </td>
        <td width="62" height="25">
          <ul style="width: 62px; height: 25px;">
            <li class="menu">
              <a href="http://www.wincent.com/a/support/" title="Support resources and links"><img src="/a/gfx/header/support-off.jpg" width="62" height="25" alt="Support" /></a>
              <ul>
                <li><a href="https://secure.wincent.com/a/support/registration/" title="Retrieve lost license codes">Lost License Codes</a></li>
                <li><a href="http://www.wincent.com/a/support/bugs/" title="Bug tracking and feature request database">Bugs and Feature Requests</a></li>
                <li><a href="http://www.wincent.com/a/support/demo-licenses/" title="Obtain a demonstration license">Demonstration licenses</a></li>
                <li><a href="http://www.wincent.com/a/support/forums/" title="Discussion and support forums">Forums</a></li>
                <li><a href="http://www.wincent.com/a/support/faq/" title="Frequently Asked Questions">FAQ</a></li>
                <li><a href="http://www.wincent.com/a/support/activation/" title="Product activation and information">Product Activation</a></li>
                <li><a href="https://secure.wincent.com/a/support/tickets/" title="Open or view a support ticket">Support Tickets</a></li>
                <li><a href="http://www.wincent.com/a/support/lists/" title="Subscribe/unsubscribe to/from a mailing list">Mailing lists</a></li>
              </ul>
            </li>
          </ul>
        </td>
        <td width="53" height="25">
          <ul style="width: 53px; height: 25px;">
            <li class="menu">
              <a href="http://www.wincent.com/a/about/" title="Company information"><img src="/a/gfx/header/about-off.jpg" width="53" height="25" alt="About" /></a>
              <ul>
                <li><a href="http://www.wincent.com/a/about/wincent/" title="About Wincent Colaiuta: the person">About Wincent Colaiuta</a></li>
                <li><a href="http://www.wincent.com/a/about/privacy/" title="About the Wincent Privacy Policy">Privacy Policy</a></li>
              </ul>
           </li>
         </ul>
         </td>
        <td width="49" height="25">
          <ul style="width: 49px; height: 25px;">
            <li class="menu">
              <a href="http://www.wincent.com/a/news/" title="Latest news items in weblog format"><img src="/a/gfx/header/news-off.jpg" width="49" height="25" alt="News" /></a>
              <ul>
                <li><a href="http://www.wincent.com/a/news/archives/mac_os_x_news/" title="Apple and Mac OS X-related news">Mac OS X News</a></li>
                <li><a href="http://www.wincent.com/a/news/archives/product_news/" title="Wincent product news">Product News</a></li>
                <li><a href="http://www.wincent.com/a/news/archives/site_news/" title="Site-related news">Site News</a></li>
                <li><a href="http://colaiuta.net/" title="Development and other notes from Wincent">Wincent Colaiuta's weblog</a></li>
              </ul>
            </li>
          </ul>
        </td>
        <td width="107" height="25"><a href="http://kbase.wincent.com/" title="Categorized Mac OS X tips and information"><img src="/a/gfx/header/knowledge-base-on.jpg" width="107" height="25" alt="Knowledge Base" /></a></td>
        <td width="62" height="25"><a href="http://www.wincent.com/a/contact/" title="Contact email form"><img src="/a/gfx/header/contact-off.jpg" width="62" height="25" alt="Contact" /></a></td>
        <td width="72" height="25">
          <ul style="width: 72px; height: 25px;">
            <li class="menu">
              <a href="http://www.wincent.com/a/site-map/" title="Site overview"><img src="/a/gfx/header/site-map-off.jpg" width="72" height="25" alt="Site Map" /></a>
              <ul>
                <li><a href="http://www.wincent.com/a/site-map/search/" title="Site search">Search</a></li>
              </ul>
            </li>
          </ul>
        </td>
        <td style="background-image: url(/a/gfx/header/spacer-bottom-right.jpg); background-repeat: repeat-x;" width="90" height="25"><img src="/a/gfx/header/spacer-bottom-right.jpg" width="90" height="25" alt="" /></td>
        <td width="32" height="25"><img src="/a/gfx/header/bottom-right-corner.jpg" width="32" height="25" alt="" /></td>
      </tr>
    </table>
  <div id="breadcrumbs">
    <p><a href="http://www.wincent.com/">Main</a>&nbsp;&gt;&nbsp;<a href="../../../">Knowledge Base</a>&nbsp;&gt;&nbsp;<a href="../../">Archives</a>&nbsp;&gt;&nbsp;<a href="../">2006</a>&nbsp;&gt;&nbsp;06    </p>
  </div>


<div id="container">

<div class="content">

<p align="right">
<a href="http://www.wincent.com/a/knowledge-base/archives/2006/06/wordpress_secur.php">&laquo; WordPress security tip</a> |

<a href="http://www.wincent.com/a/knowledge-base/">Main</a>
| <a href="http://www.wincent.com/a/knowledge-base/archives/2006/06/clamping_down_o.php">Clamping down on spam &raquo;</a>

</p>

<h2>June 10, 2006</h2>

<h3>freshclam: "Problem with internal logger"</h3>

<p>Yesterday I received notification that an hourly <tt>freshclam</tt> update had failed on my Red Hat Enterprise Linux box. Overnight I continued to receive hourly notifications, each saying the following:</p>

<pre>/etc/cron.hourly/freshclam:
<br />
ERROR: Problem with internal logger.</pre>

<p>I found the <a href="http://www.gossamer-threads.com/lists/clamav/users/25354">explanation here</a>: that there was a hung <tt>freshclam</tt> process lingering on the system.</p>

<div id="a000349more"><div id="more">
<p>The solution? Kill the process and run <tt>freshclam</tt> manually (slightly edited to shorten long lines):</p>

<pre>$ ps auxww | grep fresh
root     13372  0.0  0.0  2132  880 ?        S    Jun09   0:00 /bin/sh /etc/cron.hourly/freshclam
clamav   13373  0.0  0.0  2424  896 ?        S    Jun09   0:00 /usr/local/bin/freshclam --quiet
root     13374  0.0  0.0  1948  596 ?        S    Jun09   0:00 awk -v progname=/etc/cron.hourly/freshclam
obfuscat 23287  0.0  0.0  4772  676 pts/0    S    08:14   0:00 grep fresh
$ sudo kill 13372
$ ps auxww | grep fresh
clamav   13373  0.0  0.0  2424  896 ?        S    Jun09   0:00 /usr/local/bin/freshclam --quiet
root     13374  0.0  0.0  1948  596 ?        S    Jun09   0:00 awk -v progname=/etc/cron.hourly/freshclam
obfuscat 23299  0.0  0.0  4752  672 pts/0    S    08:15   0:00 grep fresh
$ sudo kill 13373
$ ps auxww | grep fresh
obfuscat 23306  0.0  0.0  4752  672 pts/0    S    08:15   0:00 grep fresh
$ sudo /usr/local/bin/freshclam 
ClamAV update process started at Sat Jun 10 08:15:34 2006
Downloading main.cvd [*]
main.cvd updated (version: 39, sigs: 58116, f-level: 8, builder: tkojm)
Downloading daily.cvd [*]
daily.cvd updated (version: 1524, sigs: 903, f-level: 8, builder: tkojm)
Database updated (59019 signatures) from db.us.clamav.net (IP: 63.236.138.5)
Clamd successfully notified about the update.</pre>

<p>This is what I saw in the <tt>/var/log/freshclam.log</tt> file; firstly, the last successful update:</p>

<pre>--------------------------------------
ClamAV update process started at Fri Jun  9 15:01:01 2006
main.cvd is up to date (version: 38, sigs: 51206, f-level: 7, builder: tkojm)
daily.cvd is up to date (version: 1523, sigs: 7866, f-level: 8, builder: sven)</pre>

<p>Then problems accessing the mirrors:</p>

<pre>--------------------------------------
ClamAV update process started at Fri Jun  9 16:01:01 2006
ERROR: Mirrors are not fully synchronized. Please try again later.
Trying again in 5 secs...
ClamAV update process started at Fri Jun  9 16:02:12 2006
ERROR: Mirrors are not fully synchronized. Please try again later.
Trying again in 5 secs...
ClamAV update process started at Fri Jun  9 16:03:08 2006
ERROR: Error while reading database from db.us.clamav.net
ERROR: Can't download main.cvd from db.us.clamav.net (IP: 216.24.174.245)
Giving up on db.us.clamav.net...
ClamAV update process started at Fri Jun  9 16:12:41 2006
ERROR: Mirrors are not fully synchronized. Please try again later.
Trying again in 5 secs...
ClamAV update process started at Fri Jun  9 16:13:36 2006
ERROR: Verification: Broken or not a CVD file
Trying again in 5 secs...
ClamAV update process started at Fri Jun  9 16:13:44 2006
ERROR: Error while reading database from database.clamav.net
ERROR: Can't download main.cvd from database.clamav.net (IP: 63.166.28.8)
Giving up on database.clamav.net...
ERROR: Update failed. Your network may be down or none of the mirrors listed in freshclam.conf is working.
ERROR: Update failed. Your network may be down or none of the mirrors listed in freshclam.conf is working.</pre>

<p>And on the next hourly run, the hung process:</p>

<pre>--------------------------------------
ClamAV update process started at Fri Jun  9 17:01:01 2006</pre>

<p>Finally, the manual update performed after killing the hung process:</p>

<pre>--------------------------------------
ClamAV update process started at Sat Jun 10 08:15:34 2006
main.cvd updated (version: 39, sigs: 58116, f-level: 8, builder: tkojm)
daily.cvd updated (version: 1524, sigs: 903, f-level: 8, builder: tkojm)
Database updated (59019 signatures) from db.us.clamav.net (IP: 63.236.138.5)
Clamd successfully notified about the update.</pre>
</div></div>

<p class="posted">Posted by wincent at June 10, 2006 03:25 PM</p>





</div>
</div>


<div id="footer">
  <p>Copyright &copy; 1997-2009 <a href="mailto:win@wincent.com">Wincent Colaiuta</a>.</p>
  <p>Page last updated 00:30:12, 19 February 2010.</p>
  <p>
    <a href="http://jigsaw.w3.org/css-validator/"><img style="border:0;width:88px;height:31px" src="/a/gfx/vcss.gif" alt="Valid CSS!" align="middle"/></a>
    <a href="http://validator.w3.org/check?uri=referer"><img style="border:0;width:88px;height:31px" src="/a/gfx/valid-xhtml10.png" alt="Valid XHTML 1.0!" align="middle" /></a>
  </p>
  <p><a href="mailto:win@wincent.com">Report broken link</a></p>
</div>

</body>
</html>