<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="generator" content="http://www.movabletype.org/" />

    <title>Knowledge base: Localization on Mac OS X</title>

    <link rel="stylesheet" href="/a/styles.css" type="text/css" />
    <link
      rel="alternate"
      type="application/rss+xml"
      title="RSS"
      href="https://wincent.com/a/knowledge-base/index.rdf"
    />
    <link
      rel="alternate"
      type="application/atom+xml"
      title="Atom"
      href="https://wincent.com/a/knowledge-base/atom.xml"
    />

    <link
      rel="start"
      href="https://wincent.com/a/knowledge-base/"
      title="Home"
    />
    <link
      rel="prev"
      href="https://wincent.com/a/knowledge-base/archives/2004/11/cleaner_html_us.php"
      title="Cleaner HTML using CSS"
    />

    <link
      rel="next"
      href="https://wincent.com/a/knowledge-base/archives/2004/11/costs_of_runnin.php"
      title="Costs of running a software small business"
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
                    href="http://colaiuta.net/"
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
            href="http://kbase.wincent.com/"
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
          >2004</a
        >&nbsp;&gt;&nbsp;11
      </p>
    </div>

    <div id="container">
      <div class="content">
        <p align="right">
          <a
            href="https://wincent.com/a/knowledge-base/archives/2004/11/cleaner_html_us.php"
            >&laquo; Cleaner HTML using CSS</a
          >
          |

          <a href="https://wincent.com/a/knowledge-base/">Main</a>
          |
          <a
            href="https://wincent.com/a/knowledge-base/archives/2004/11/costs_of_runnin.php"
            >Costs of running a software small business &raquo;</a
          >
        </p>

        <h2>November 11, 2004</h2>

        <h3>Localization on Mac OS X</h3>

        <p>
          Mac OS X has a fully-fledged and elegant localization infrastructure
          that enables software to be translated into multiple languages and
          shipped as a single convenient package to end users. In this article I
          don't rehash the material on localization that is already available on
          the web. I am specifically writing about what you would need to do to
          produce a localization of a
          <a href="https://wincent.com/">Wincent product</a>.
        </p>

        <div id="a000020more">
          <div id="more">
            <h3>Background</h3>

            <p>
              This article assumes some prior knowledge, so if you don't yet
              know about the following topics you should probably do some
              background reading and make sure you have the appropriate tools
              first:
            </p>

            <ul>
              <li>
                General reading on internationalization:
                <ul>
                  <li>
                    Apple's
                    <a href="http://developer.apple.com/intl/"
                      >International Technologies page</a
                    >.
                  </li>
                  <li>
                    Apple's
                    <a href="http://developer.apple.com/intl/localization/"
                      >Localization on Mac OS X page</a
                    >.
                  </li>
                  <li>
                    Apple's
                    <a
                      href="http://developer.apple.com/documentation/MacOSX/Conceptual/SystemOverview/International/chapter_10_section_2.html"
                      >Mac OS X System Overview: Internationalizing Your
                      Application</a
                    >.
                  </li>
                  <li>
                    StepWise article,
                    <a
                      href="http://www.stepwise.com/Articles/Technical/2003-04-03.01.html"
                      >Internationalizing Cocoa applications</a
                    >
                    by mmalcolm Crawford.
                  </li>
                  <li>
                    <a
                      href="http://www.stone.com/The_Cocoa_Files/Internationalize_Your_App.html"
                      >Internationalizing Cocoa Applications</a
                    >
                    by Andrew Stone.
                  </li>
                </ul>
              </li>
              <li>
                Localization tools and resources (see Apple's
                <a
                  href="http://developer.apple.com/intl/localization/tools.html"
                  >Localization tools page</a
                >
                to be sure that you get the latest versions; these links below
                last updated 8 April 2006):
                <ul>
                  <li>
                    <a
                      href="ftp://ftp.apple.com/developer/Tool_Chest/Localization_Tools/ADViewer_2.1.dmg"
                      >ADViewer 2.1 disk image</a
                    >: the text editor recommended by Apple for use in
                    localization.
                  </li>
                  <li>
                    <a
                      href="ftp://ftp.apple.com/developer/Tool_Chest/Localization_Tools/AppleGlot/AppleGlot_3.2.dmg"
                      >AppleGlot 3.2 disk image</a
                    >.
                  </li>
                  <li>
                    <a
                      href="ftp://ftp.apple.com/developer/Tool_Chest/Localization_Tools/AppleGlot/AppleGlot_3.2_UsersGuide.pdf"
                      >AppleGlot 3.2 User Guide</a
                    >
                    (PDF).
                  </li>
                  <li>
                    <a
                      href="ftp://ftp.apple.com/developer/Tool_Chest/Localization_Tools/Mac_OS_X_Glossaries"
                      >AppleGlot glossaries</a
                    >
                    (FTP site).
                  </li>
                </ul>
              </li>
            </ul>

            <h3>Localization procedure for Wincent software</h3>

            <p>
              Whenever I prepare a final build for shipping, as a final step in
              the build process I use a collection of tools, including Apple's
              <a
                href="http://developer.apple.com/documentation/Darwin/Reference/ManPages/man1/genstrings.1.html"
                >genstrings</a
              >
              and
              <a
                href="http://developer.apple.com/documentation/Darwin/Reference/ManPages/man1/nibtool.1.html"
                >nibtool</a
              >
              utilities,
              <a href="http://www.mani.de/nibtrans.sh.gz">nibtrans</a> by
              Manfred Schwind and
              <a href="https://wincent.com/a/products/wincent-strings-util/"
                >a modified version</a
              >
              of
              <a href="ftp://ftp.omnigroup.com/pub/localization/"
                >stringsUtil</a
              >
              by the <a href="http://www.omnigroup.com/">OmniGroup</a>, to
              produce a localization package that is made available for download
              on the corresponding product's download page.
            </p>

            <p>
              Before you start work on a localization you should
              <a href="https://wincent.com/a/contact/mail/">contact me</a> to
              let me know that you are going to start work on it. Sometimes more
              than one person steps forward to do a localization, so it's useful
              to coordinate your efforts with other people and minimize
              duplication of effort.
            </p>

            <p>
              By default, every localization pack includes one or more English
              localizable project folders ("English.lproj" or "en.lproj")
              containing the unlocalized, English-language versions of the
              program resources. Sometimes there is more than one such folder
              because a given product may actually be comprised of various
              components, each with its own "English.lproj" or "en.lproj"
              folder. If you are localizing a product into a target language for
              the first time, make a copy of the English resources, rename the
              containing folders appropriately (for example, "Spanish.lproj",
              "Japanese.lproj" and so on), and perform the localization. You
              must localize every file in every component otherwise the
              localization will be incomplete.
            </p>

            <p>
              In cases where a localization already exists for a given product,
              the build process will merge the new, unlocalized portions of the
              project into the existing localized resources. In this way you
              don't have to begin the localization process all over again from
              the beginning. Rather, you can do an incremental localization,
              translating only the new (unlocalized) additions. Where
              pre-existing localizations exist, the merged lproj folders
              awaiting incremental localization will be included in the
              downloadable localization pack. Look at each and every file and
              make sure that there are no new strings that need to be
              translated. When you send back the updated localization you should
              only send files to which you actually made changes; if you did not
              make any changes to a file then do not send it back (the easiest
              way to do this is probably to simply delete those files to which
              you did not make any changes). Likewise, if you updated the
              Japanese localization do not send back the other localizations as
              well.
            </p>

            <p>
              As a general rule localization packs contain string files and not
              nib files; this is to streamline the process and make incremental
              localization more straightforward. It is also necessary in some
              cases where the nib files depend on private frameworks which are
              not included in the standard Mac OS X install and which Interface
              Builder will refuse to open. It is important that when you provide
              translations that you pick wordings that are of approximately the
              same length as their untranslated counterparts. If the
              translations are too lengthy then they will not fit within the
              geometry of the user interface. I can make minor adjustments to
              the interface geometry, but in general it is best for the purposes
              of consistency if translations can be chosen which obviate the
              need to do this.
            </p>

            <p>
              If you do decide to do a localization please make sure that it is
              complete. Merging localizations is a time-consuming process that
              takes a lot of work, so it is not very efficient to integrate
              partial localizations (and then updates to those localizations).
              This is why I ask that when you do an updated localization that
              you only send back the files which you have actually modified. If
              you do not have the time to do a full localization of every
              localizable file then you should not go ahead with the project.
              Fully localizing the project also means localizing the
              InfoPlist.strings files which are often overlooked; for example,
              the English words for "copyright" and "version" should be
              translated.
            </p>

            <h3>Summary</h3>

            <ul>
              <li>Use a Unicode-aware text editor, such as ADViewer.</li>
              <li>
                Save ".strings" files with UTF-16 encoding, as per the Apple
                documentation.
              </li>
              <li>
                Save ".plist" files with UTF-8 encoding, as per the encoding
                attribute at the head of the file.
              </li>
              <li>
                Double check the encoding before you send back the localized
                files.
              </li>
              <li>
                Keep your translations roughly the same length as the original
                text.
              </li>
              <li>
                If you can, get a friend to double-check your translations.
              </li>
              <li>
                Localize all the files, including InfoPlist.strings files.
              </li>
              <li>Only submit complete localizations, not partial ones.</li>
              <li>
                If updating an existing localization, only send back the files
                which you actually modified.
              </li>
              <li>
                Send only the lproj folders for the specific language you are
                working on; do not send back the lproj folders for the other
                languages.
              </li>
            </ul>
          </div>
        </div>

        <p class="posted">Posted by wincent at November 11, 2004 02:08 AM</p>
      </div>
    </div>

    <div id="footer">
      <p>
        Copyright &copy; 1997-2009
        <a href="mailto:win@wincent.com">Wincent Colaiuta</a>.
      </p>
      <p>Page last updated 00:30:13, 19 February 2010.</p>
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
