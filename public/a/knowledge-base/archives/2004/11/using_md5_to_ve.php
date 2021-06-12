<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="generator" content="http://www.movabletype.org/" />

<title>Knowledge base: Using MD5 or SHA1 to verify the integrity of your downloads</title>

<link rel="stylesheet" href="/a/styles.css" type="text/css" />
<link rel="alternate" type="application/rss+xml" title="RSS" href="http://www.wincent.com/a/knowledge-base/index.rdf" />
<link rel="alternate" type="application/atom+xml" title="Atom" href="http://www.wincent.com/a/knowledge-base/atom.xml" />

<link rel="start" href="http://www.wincent.com/a/knowledge-base/" title="Home" />
<link rel="prev" href="http://www.wincent.com/a/knowledge-base/archives/2004/11/localization_on.php" title="Localization on Mac OS X" />

<link rel="next" href="http://www.wincent.com/a/knowledge-base/archives/2004/11/building_pwgen.php" title="Building pwgen on Mac OS X 10.3" />

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
    <p><a href="http://www.wincent.com/">Main</a>&nbsp;&gt;&nbsp;<a href="../../../">Knowledge Base</a>&nbsp;&gt;&nbsp;<a href="../../">Archives</a>&nbsp;&gt;&nbsp;<a href="../">2004</a>&nbsp;&gt;&nbsp;11    </p>
  </div>


<div id="container">

<div class="content">

<p align="right">
<a href="http://www.wincent.com/a/knowledge-base/archives/2004/11/localization_on.php">&laquo; Localization on Mac OS X</a> |

<a href="http://www.wincent.com/a/knowledge-base/">Main</a>
| <a href="http://www.wincent.com/a/knowledge-base/archives/2004/11/building_pwgen.php">Building pwgen on Mac OS X 10.3 &raquo;</a>

</p>

<h2>November 12, 2004</h2>

<h3>Using MD5 or SHA1 to verify the integrity of your downloads</h3>

<p>This article explains how to verify the integrity of your download when you obtain a <a href="http://www.wincent.com/a/products/">Wincent product</a>. MD5 or SHA1 checksums appear on each of the product download pages, and serve as a "fingerprint" for the file. You can compare the checksum on the downloaded file to the checksum on the website, and if they match then you know that the integrity of the file is intact. This is an indication that the file hasn't been tampered with, even if it came from a mirror server on the other side of the planet.</p>

<p>You should only ever download Wincent software using the links on the download pages, and never from anywhere else. If you see Wincent software hosted elsewhere <em>without</em> being listed on the download page, then that distribution is illegal and potentially dangerous, so it's best to avoid it. You can report such cases of unauthorized distribution using the <a href="http://www.wincent.com/a/contact/mail/">contact form</a>.</p>

<div id="a000022more"><div id="more">
<p>When you download a file, make note of the checksum for that file as indicated on the download page. It will either be a 32-digit MD5 checksum, or a 40-digit SHA1 checksum. The easiest way to do this is probably just to leave your browser window open until after you've completed the check. After your download is complete, follow these steps to verify the checksum on the file:</p>

<ol>
  <li>Open the Terminal application (stored in the "Utilities" folder inside the "Applications" folder on your startup disk).</li>
  <li>
    If the checksum is a 32-digit MD5 checksum at the Terminal command prompt, type this instruction, <strong>followed by a space</strong>:
     <pre>/sbin/md5</pre>
    Do not press return. The space is important because it will separate the command name (md5) from the file that you'll be testing. If the checksum is a 40-digit SHA1 checksum type the following, <strong>followed by a space</strong>:
     <pre>/usr/bin/openssl sha1</pre>
  </li>
  <li>Using the mouse, find the downloaded file and drag it onto the Terminal window. The full path to the downloaded file will appear in the window.</li>
  <li>Switch back to the Terminal window, and press the return key to actually issue the command.</li>
  <li>Compare the checksum string that is displayed in the Terminal window with the corresponding string on the website. It should be an exact match (all digits exactly the same).</li>
</ol>

<p>If there is a discrepancy, then something has gone wrong with your download, or the file has been tampered with. Try performing the comparison again, or re-downloading. If you think you've discovered evidence of tampering, please <a href="http://www.wincent.com/a/contact/mail/">contact me</a>.</p>

<p>If you would like to learn more about the md5 command and the MD5 algorithm itself, issue this command in the Terminal and press return:</p>

<pre>man md5</pre>

<p>To learn more about SHA1, issue this:</p>

<pre>man sha1</pre>
</div></div>

<p class="posted">Posted by wincent at November 12, 2004 10:05 PM</p>





</div>
</div>


<div id="footer">
  <p>Copyright &copy; 1997-2009 <a href="mailto:win@wincent.com">Wincent Colaiuta</a>.</p>
  <p>Page last updated 00:30:13, 19 February 2010.</p>
  <p>
    <a href="http://jigsaw.w3.org/css-validator/"><img style="border:0;width:88px;height:31px" src="/a/gfx/vcss.gif" alt="Valid CSS!" align="middle"/></a>
    <a href="http://validator.w3.org/check?uri=referer"><img style="border:0;width:88px;height:31px" src="/a/gfx/valid-xhtml10.png" alt="Valid XHTML 1.0!" align="middle" /></a>
  </p>
  <p><a href="mailto:win@wincent.com">Report broken link</a></p>
</div>

</body>
</html>