<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="generator" content="http://www.movabletype.org/" />

    <title>Knowledge base: Locking, double-checked locking and speed</title>

    <link rel="stylesheet" href="/a/styles.css" type="text/css" />

    <link
      rel="start"
      href="https://wincent.com/a/knowledge-base/"
      title="Home"
    />
    <link
      rel="prev"
      href="https://wincent.com/a/knowledge-base/archives/2006/01/objectivec_enum.php"
      title="Objective-C enumeration macro"
    />

    <link
      rel="next"
      href="https://wincent.com/a/knowledge-base/archives/2006/01/lightweight_iss.php"
      title="Lightweight issue tracking"
    />

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
    <div
      style="text-align: center; font-family: 'Lucida Grande'; margin: 5px 250px 5px 250px; padding: 5px; font-size: x-small; border: 2px solid silver; -webkit-border-radius: 0.5em; -moz-border-radius: 0.5em; background: #fefefe;"
    >
      <p>
        You are currently looking at an older section of the wincent.com
        website.<br />
        Please check the new version of the site at
        <a href="https://wincent.com/">https://wincent.com/</a> for updated
        content.<br />
      </p>
    </div>
    <table
      border="0"
      align="center"
      cellspacing="0"
      cellpadding="0"
      width="832"
    >
      <tr>
        <td width="32" height="29">
          <img
            src="/a/gfx/header/top-left-corner.jpg"
            width="32"
            height="29"
            alt=""
          />
        </td>
        <td
          style="background-image: url(/a/gfx/header/top-edge.jpg); background-repeat: repeat-x;"
          width="768"
          height="29"
          colspan="11"
        >
          <img
            src="/a/gfx/header/top-edge.jpg"
            width="768"
            height="29"
            alt=""
          />
        </td>
        <td width="32" height="29">
          <img
            src="/a/gfx/header/top-right-corner.jpg"
            width="32"
            height="29"
            alt=""
          />
        </td>
      </tr>
      <tr>
        <td
          style="background-image: url(/a/gfx/header/left-side.jpg); background-repeat: repeat-y;"
          width="32"
        >
          <img
            src="/a/gfx/header/left-side.jpg"
            width="32"
            height="71"
            alt=""
          />
        </td>
        <td
          style="background-image: url(/a/gfx/header/center-background.jpg); background-repeat: repeat;"
          colspan="11"
          align="center"
          valign="middle"
        >
          <a href="https://wincent.com/"
            ><img
              src="/a/gfx/wincent-logo-small-gray-bg.jpg"
              width="43"
              height="41"
              alt="wincent"
              align="middle"
          /></a>
          <a href="https://wincent.com/a/knowledge-base/"
            ><img
              src="/a/gfx/knowledge-base-header.jpg"
              width="309"
              height="25"
              alt="knowledge base"
              align="middle"
          /></a>
        </td>
        <td
          style="background-image: url(/a/gfx/header/right-side.jpg); background-repeat: repeat-y;"
          width="32"
        >
          <img
            src="/a/gfx/header/right-side.jpg"
            width="32"
            height="71"
            alt=""
          />
        </td>
      </tr>
      <tr id="menu-bar">
        <td width="32" height="25">
          <img
            src="/a/gfx/header/bottom-left-corner.jpg"
            width="32"
            height="25"
            alt=""
          />
        </td>
        <td
          style="background-image: url(/a/gfx/header/spacer-bottom-left.jpg); background-repeat: repeat-x;"
          width="89"
          height="25"
        >
          <img
            src="/a/gfx/header/spacer-bottom-left.jpg"
            width="89"
            height="25"
            alt=""
          />
        </td>
        <td width="73" height="25">
          <ul style="width: 73px; height: 25px;">
            <li class="menu">
              <a
                href="https://wincent.com/a/products/"
                title="Full products listing"
                ><img
                  src="/a/gfx/header/products-off.jpg"
                  width="73"
                  height="25"
                  alt="Products"
              /></a>
              <ul>
                <li>
                  <a
                    href="https://wincent.com/products/synergy"
                    title="The original iTunes menu bar controller"
                    >Synergy &gt;</a
                  >
                  <ul>
                    <li>
                      <a
                        href="https://wincent.com/products/synergy/download"
                        title="Download Synergy"
                        >Download</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.com/a/products/synergy-classic/purchase/"
                        title="Purchase Synergy"
                        >Purchase</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.com/products/synergy/help"
                        title="Frequently Asked Questions"
                        >FAQ</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.com/a/products/synergy-classic/buttons/"
                        title="Free button sets"
                        >Button Sets</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://wincent.com/a/products/synergy-advance/"
                    title="Multi-purpose audio companion"
                    >Synergy Advance &gt;</a
                  >
                  <ul>
                    <li>
                      <a
                        href="https://wincent.com/a/products/synergy-advance/download/"
                        title="Download Synergy Advance"
                        >Download preview</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.com/a/products/synergy-advance/purchase/"
                        title="Purchase Synergy Advance"
                        >Purchase</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.com/a/products/synergy-advance/donate/"
                        title="Support development with a donation"
                        >Donate</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.com/a/products/synergy-advance/donate/"
                        title="Support development by becoming a sponsor"
                        >Sponsor</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://wincent.com/a/products/winswitch/"
                    title="Enhanced replacement for Apple's Fast User Switching menu"
                    >WinSwitch &gt;</a
                  >
                  <ul>
                    <li>
                      <a
                        href="https://wincent.com/a/products/winswitch/download/"
                        title="Download WinSwitch"
                        >Download</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.com/a/products/winswitch/donate/"
                        title="Support development with a donation"
                        >Donate</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.com/a/products/winswitch/donate/"
                        title="Support development by becoming a sponsor"
                        >Sponsor</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.com/a/products/winswitch/faq/"
                        title="Frequently Asked Questions"
                        >FAQ</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://wincent.com/a/products/hextrapolate/"
                    title="Programmers number conversion tool"
                    >Hextrapolate &gt;</a
                  >
                  <ul>
                    <li>
                      <a
                        href="https://wincent.com/a/products/hextrapolate/download/"
                        title="Download Hextrapolate"
                        >Download</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.com/a/products/hextrapolate/purchase/"
                        title="Purchase Hextrapolate"
                        >Purchase</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.com/a/products/hextrapolate/faq/"
                        title="Frequently Asked Questions"
                        >FAQ</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://wincent.com/a/products/install/"
                    title="Installation and deployment solution for developers"
                    >Install &gt;</a
                  >
                  <ul>
                    <li>
                      <a
                        href="https://wincent.com/a/products/install/download/"
                        title="Install downloads"
                        >Downloads</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.com/a/products/install/purchase/"
                        title="Purchase Install"
                        >Purchase</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.com/a/products/install/donate/"
                        title="Support development with a donation"
                        >Donate</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.com/a/products/install/donate/"
                        title="Support development by becoming a sponsor"
                        >Sponsor</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.com/a/products/install/faq/"
                        title="Frequently Asked Questions"
                        >FAQ</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://wincent.com/a/products/getsmart-pro/"
                    title="Intelligent download manager"
                    >GetSmart Pro &gt;</a
                  >
                  <ul>
                    <li>
                      <a
                        href="https://wincent.com/a/products/getsmart-pro/donate/"
                        title="Support development with a donation"
                        >Donate</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://wincent.com/a/products/"
                    title="Full product listing"
                    >Other products...</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </td>
        <td width="48" height="25">
          <a href="https://wincent.com/a/store/" title="Wincent online store"
            ><img
              src="/a/gfx/header/store-off.jpg"
              width="48"
              height="25"
              alt="Store"
          /></a>
        </td>
        <td width="63" height="25">
          <ul style="width: 63px; height: 25px;">
            <li class="menu">
              <a
                href="https://wincent.com/a/services/"
                title="Full services listing"
                ><img
                  src="/a/gfx/header/services-off.jpg"
                  width="63"
                  height="25"
                  alt="Services"
              /></a>
              <ul>
                <li>
                  <a
                    href="https://wincent.com/a/services/custom-development/"
                    title="Custom software development"
                    >Custom Development</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.com/a/services/mac-consultancy/"
                    title="Apple and Mac OS X consultancy"
                    >Apple/Mac Consultancy</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.com/a/services/web-design/"
                    title="Web design services"
                    >Web Design</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.com/a/services/hosting/"
                    title="Internet web and email hosting"
                    >Hosting</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </td>
        <td width="62" height="25">
          <ul style="width: 62px; height: 25px;">
            <li class="menu">
              <a
                href="https://wincent.com/a/support/"
                title="Support resources and links"
                ><img
                  src="/a/gfx/header/support-off.jpg"
                  width="62"
                  height="25"
                  alt="Support"
              /></a>
              <ul>
                <li>
                  <a
                    href="https://wincent.com/a/support/registration/"
                    title="Retrieve lost license codes"
                    >Lost License Codes</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.com/a/support/bugs/"
                    title="Bug tracking and feature request database"
                    >Bugs and Feature Requests</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.com/a/support/demo-licenses/"
                    title="Obtain a demonstration license"
                    >Demonstration licenses</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.com/a/support/forums/"
                    title="Discussion and support forums"
                    >Forums</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.com/a/support/faq/"
                    title="Frequently Asked Questions"
                    >FAQ</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.com/a/support/activation/"
                    title="Product activation and information"
                    >Product Activation</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.com/a/support/tickets/"
                    title="Open or view a support ticket"
                    >Support Tickets</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.com/a/support/lists/"
                    title="Subscribe/unsubscribe to/from a mailing list"
                    >Mailing lists</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </td>
        <td width="53" height="25">
          <ul style="width: 53px; height: 25px;">
            <li class="menu">
              <a href="https://wincent.com/a/about/" title="Company information"
                ><img
                  src="/a/gfx/header/about-off.jpg"
                  width="53"
                  height="25"
                  alt="About"
              /></a>
              <ul>
                <li>
                  <a
                    href="https://wincent.com/a/about/wincent/"
                    title="About Wincent Colaiuta: the person"
                    >About Wincent Colaiuta</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.com/a/about/privacy/"
                    title="About the Wincent Privacy Policy"
                    >Privacy Policy</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </td>
        <td width="49" height="25">
          <ul style="width: 49px; height: 25px;">
            <li class="menu">
              <a
                href="https://wincent.com/a/news/"
                title="Latest news items in weblog format"
                ><img
                  src="/a/gfx/header/news-off.jpg"
                  width="49"
                  height="25"
                  alt="News"
              /></a>
              <ul>
                <li>
                  <a
                    href="https://wincent.com/a/news/archives/mac_os_x_news/"
                    title="Apple and Mac OS X-related news"
                    >Mac OS X News</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.com/a/news/archives/product_news/"
                    title="Wincent product news"
                    >Product News</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.com/a/news/archives/site_news/"
                    title="Site-related news"
                    >Site News</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.com/blog"
                    title="Development and other notes from Wincent"
                    >Wincent Colaiuta's weblog</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </td>
        <td width="107" height="25">
          <a
            href="https://wincent.com/wiki"
            title="Categorized Mac OS X tips and information"
            ><img
              src="/a/gfx/header/knowledge-base-on.jpg"
              width="107"
              height="25"
              alt="Knowledge Base"
          /></a>
        </td>
        <td width="62" height="25">
          <a href="https://wincent.com/a/contact/" title="Contact email form"
            ><img
              src="/a/gfx/header/contact-off.jpg"
              width="62"
              height="25"
              alt="Contact"
          /></a>
        </td>
        <td width="72" height="25">
          <ul style="width: 72px; height: 25px;">
            <li class="menu">
              <a href="https://wincent.com/a/site-map/" title="Site overview"
                ><img
                  src="/a/gfx/header/site-map-off.jpg"
                  width="72"
                  height="25"
                  alt="Site Map"
              /></a>
              <ul>
                <li>
                  <a
                    href="https://wincent.com/a/site-map/search/"
                    title="Site search"
                    >Search</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </td>
        <td
          style="background-image: url(/a/gfx/header/spacer-bottom-right.jpg); background-repeat: repeat-x;"
          width="90"
          height="25"
        >
          <img
            src="/a/gfx/header/spacer-bottom-right.jpg"
            width="90"
            height="25"
            alt=""
          />
        </td>
        <td width="32" height="25">
          <img
            src="/a/gfx/header/bottom-right-corner.jpg"
            width="32"
            height="25"
            alt=""
          />
        </td>
      </tr>
    </table>

    <div id="breadcrumbs">
      <p>
        <a href="https://wincent.com/">Main</a>&nbsp;&gt;&nbsp;<a
          href="../../../"
          >Knowledge Base</a
        >&nbsp;&gt;&nbsp;<a href="../../">Archives</a>&nbsp;&gt;&nbsp;<a
          href="../"
          >2006</a
        >&nbsp;&gt;&nbsp;01
      </p>
    </div>

    <div id="container">
      <div class="content">
        <p align="right">
          <a
            href="https://wincent.com/a/knowledge-base/archives/2006/01/objectivec_enum.php"
            >&laquo; Objective-C enumeration macro</a
          >
          |

          <a href="https://wincent.com/a/knowledge-base/">Main</a>
          |
          <a
            href="https://wincent.com/a/knowledge-base/archives/2006/01/lightweight_iss.php"
            >Lightweight issue tracking &raquo;</a
          >
        </p>

        <h2>January 26, 2006</h2>

        <h3>Locking, double-checked locking and speed</h3>

        <p>
          When you're doing multi-threaded programming it's often necessary to
          use locking to ensure that resources aren't being used in conflicting
          ways by different threads. There are three different approaches:
        </p>

        <h4>Forget about locking, go for speeeeeed!!!!</h4>

        <p>
          This one is potentially dangerous and even disastrous if the act of
          multiple threads attempting to perform the operation simultaneously
          will lead to problems.
        </p>

        <pre>
if (condition)
{
    [self performOperation];
    condition = NO;
}</pre
        >

        <h4>Do locking, forget about speed</h4>

        <p>
          This one is safe but not as fast because acquiring the lock can be
          time-consuming and the thread may have to block waiting for the
          resource.
        </p>

        <pre>
@synchronized (self)
{
    if (condition)
    {
        [self performOperation];
        condition = NO;
    }
}</pre
        >

        <h4>Double-checked locking: the compromise</h4>

        <p>
          Double-checked locking is often the best compromise between speed and
          safety. If the condition is fairly inexpensive to test (and it is in
          the case of the example because we're just checking the truth of a
          <tt>BOOL</tt> variable) then we can economically check the condition
          and acquire the lock if and only if we need to. We thus avoid a
          potentially expensive locking operation. But due to the possibility of
          a race condition we must then double-check the condition as shown
          below.
        </p>

        <pre>
OSMemoryBarrier(); // explained below
if (condition)
{
    @synchronized (self)
    {
        if (condition) // the double-check
        {
            [self performOperation];
            OSMemoryBarrier();  // explained below
            condition = NO;
        }
    }
}</pre
        >

        <div id="a000188more">
          <div id="more">
            <h4>Memory barriers</h4>

            <p>
              <a href="http://redshed.net/">Jonathan Rentzsch</a> pointed out to
              me that the <tt>@synchronized</tt> directive doesn't offer any
              documented guarantees about memory barriers and without these the
              double-checked locking method
              <a href="http://en.wikipedia.org/wiki/Double-checked_locking"
                >may not be safe</a
              >. See
              <a
                href="http://www.aristeia.com/Papers/DDJ_Jul_Aug_2004_revised.pdf"
                >this excellent paper</a
              >
              (PDF) for more information about possible pitfalls. It goes
              considerably further than the simplistic account offered
              <a href="http://www.cs.wustl.edu/~schmidt/PDF/DC-Locking.pdf"
                >here in the paper</a
              >
              (PDF) that originally brought double-checked locking to my
              attention.
            </p>

            <p>
              The use of the
              <a
                href="http://developer.apple.com/documentation/Darwin/Reference/ManPages/man3/OSMemoryBarrier.3.html"
                >OSMemoryBarrier()</a
              >
              call is intended to address this risk but there is one problem:
              I've done some single-stepping into the function using GDB and
              although it appears to work fine on the G5 (ultimately relying on
              the <tt>isync</tt> and <tt>lwsync</tt> assembly instructions to
              implement the barrier) there are no guarantees that it will work
              on the Intel architecture (<a
                href="http://www.linuxjournal.com/article/8212"
                >although I suspect it will</a
              >
              due to its stricter ordering properties).
            </p>

            <p>
              I'm currently investigating this further, so in the absence of
              more concrete confirmation one way or the other, double-checked
              locking and the <tt>OSMemoryBarrier()</tt> call should probably be
              used with caution. Based on the information that I have been able
              to gather on the Internet so far I believe that the following
              directives represent the safest way to implement memory barriers
              on Mac OS X:
            </p>

            <ul>
              <li>
                <strong>On PowerPC</strong>: <tt>sync</tt> for read and
                read/write memory barriers, <tt>eieio</tt> for write memory
                barriers.
              </li>
              <li>
                <strong>On PowerPC 64</strong>: <tt>lwsync</tt> for read memory
                barriers, <tt>sync</tt> for read/write and write memory
                barriers.
              </li>
              <li>
                <strong>On Intel</strong>: <tt>lock; addl</tt> for read and
                read/write memory barriers, and nothing at all for write memory
                barriers.
              </li>
              <li>
                <strong>On Intel with SSE support</strong>
                <em>(applies to any Intel machine that runs Mac OS X)</em>:
                <tt>lfence</tt> for read memory barriers, <tt>mfence</tt> for
                read/write memory barriers, and nothing at all for write memory
                barriers.
              </li>
            </ul>

            <p>
              <a
                href="https://wincent.com/a/about/wincent/weblog/WOMemoryBarrier.h"
                >Here's an include file</a
              >
              I've whipped up with some macros that implement these various
              combinations. It works for me, at least in my informal testing
              here (tested on both PowerPC and Intel CPUs).
            </p>

            <p>
              If all of this seems a bit difficult
              <a
                href="http://www.aristeia.com/Papers/DDJ_Jul_Aug_2004_revised.pdf"
                >the paper reference above</a
              >
              offers multiple alternative suggestions to the double-checked
              locking pattern, especially as it is applied to singletons.
              <a href="http://www.nwcpp.org/Downloads/2004/DCLP_notes.pdf"
                >These notes by the same author</a
              >
              also offer some excellent insight into the problem.
            </p>

            <h4>Notes</h4>

            <p>
              You can often speed things up further by using a more granular
              lock. In this example I'm locking on <tt>self</tt> because it's
              quick and easy but you might be able to use another object for
              which there'll be less contention (for example, a specially
              created <tt>NSLock</tt> object) and which will lead to fewer (or
              shorter) blocking situations.
            </p>

            <p>
              This may be self-evident to some but I think it's nice to state it
              explicitly: the compiler itself is clever enough to handle things
              like the following example. You can jump out of the scope of a
              <tt>synchronized</tt> block in a number of ways (in this case by
              way of an early <tt>return</tt>); it's not necessary to "fall off
              the end":
            </p>

            <pre>
@synchronized (self)
{
    if (error)
       return;
    if (condition)
      [self performOperation];
}</pre
            >

            <p>
              The other thing to bear in mind is that the choice between normal
              and double-checked locking will depend on a number of factors:
            </p>

            <p>
              <em
                >Is testing the condition an inexpensive operation compared to
                that of acquiring a lock?</em
              >
              If so then double-checked locking is favourable.
            </p>

            <p>
              <em>Is contention for the lock likely to be high?</em> That's
              another factor which makes double-checked locking desirable,
              because it avoids unnecessary contention for the lock.
            </p>

            <p>
              <em>How often is the condition likely to be true?</em> If the
              condition tends to be true more often than not then double-checked
              locking is probably a bad idea, because in most situations you'll
              end up having to acquire the lock anyway and will have done the
              double-check for nothing.
            </p>

            <p>
              So basically you'll need to think about the specific details of
              your situation and choose the method that best balances speed and
              safety accordingly.
            </p>
          </div>
        </div>

        <p class="posted">Posted by wincent at January 26, 2006 05:08 PM</p>
      </div>
    </div>

    <div id="footer">
      <p>
        Copyright &copy; 1997-2009
        <a href="mailto:win@wincent.com">Wincent Colaiuta</a>.
      </p>
      <p>Page last updated 00:30:12, 19 February 2010.</p>
      <p>
        <a href="http://jigsaw.w3.org/css-validator/"
          ><img
            style="border:0;width:88px;height:31px"
            src="/a/gfx/vcss.gif"
            alt="Valid CSS!"
            align="middle"
        /></a>
        <a href="http://validator.w3.org/check?uri=referer"
          ><img
            style="border:0;width:88px;height:31px"
            src="/a/gfx/valid-xhtml10.png"
            alt="Valid XHTML 1.0!"
            align="middle"
        /></a>
      </p>
      <p><a href="mailto:win@wincent.com">Report broken link</a></p>
    </div>
  </body>
</html>
