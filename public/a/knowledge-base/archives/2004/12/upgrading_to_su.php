<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="generator" content="http://www.movabletype.org/" />

    <title>Knowledge base: Upgrading to Subversion 1.1.2</title>

    <link rel="stylesheet" href="/a/styles.css" type="text/css" />

    <link
      rel="start"
      href="https://wincent.dev/a/knowledge-base/"
      title="Home"
    />
    <link
      rel="prev"
      href="https://wincent.dev/a/knowledge-base/archives/2004/12/messaging_nil.php"
      title="Messaging nil"
    />

    <link
      rel="next"
      href="https://wincent.dev/a/knowledge-base/archives/2005/04/upgrading_to_su_1.php"
      title="Upgrading to Subversion 1.1.4"
    />

    <script type="text/javascript" language="javascript">
      <!--

      var HOST = 'wincent.dev';

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
        You are currently looking at an older section of the wincent.dev
        website.<br />
        Please check the new version of the site at
        <a href="https://wincent.dev/">https://wincent.dev/</a> for updated
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
          <a href="https://wincent.dev/"
            ><img
              src="/a/gfx/wincent-logo-small-gray-bg.jpg"
              width="43"
              height="41"
              alt="wincent"
              align="middle"
          /></a>
          <a href="https://wincent.dev/a/knowledge-base/"
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
                href="https://wincent.dev/a/products/"
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
                    href="https://wincent.dev/products/synergy"
                    title="The original iTunes menu bar controller"
                    >Synergy &gt;</a
                  >
                  <ul>
                    <li>
                      <a
                        href="https://wincent.dev/products/synergy/download"
                        title="Download Synergy"
                        >Download</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.dev/a/products/synergy-classic/purchase/"
                        title="Purchase Synergy"
                        >Purchase</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.dev/products/synergy/help"
                        title="Frequently Asked Questions"
                        >FAQ</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.dev/a/products/synergy-classic/buttons/"
                        title="Free button sets"
                        >Button Sets</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://wincent.dev/a/products/synergy-advance/"
                    title="Multi-purpose audio companion"
                    >Synergy Advance &gt;</a
                  >
                  <ul>
                    <li>
                      <a
                        href="https://wincent.dev/a/products/synergy-advance/download/"
                        title="Download Synergy Advance"
                        >Download preview</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.dev/a/products/synergy-advance/purchase/"
                        title="Purchase Synergy Advance"
                        >Purchase</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.dev/a/products/synergy-advance/donate/"
                        title="Support development with a donation"
                        >Donate</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.dev/a/products/synergy-advance/donate/"
                        title="Support development by becoming a sponsor"
                        >Sponsor</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://wincent.dev/a/products/winswitch/"
                    title="Enhanced replacement for Apple's Fast User Switching menu"
                    >WinSwitch &gt;</a
                  >
                  <ul>
                    <li>
                      <a
                        href="https://wincent.dev/a/products/winswitch/download/"
                        title="Download WinSwitch"
                        >Download</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.dev/a/products/winswitch/donate/"
                        title="Support development with a donation"
                        >Donate</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.dev/a/products/winswitch/donate/"
                        title="Support development by becoming a sponsor"
                        >Sponsor</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.dev/a/products/winswitch/faq/"
                        title="Frequently Asked Questions"
                        >FAQ</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://wincent.dev/a/products/hextrapolate/"
                    title="Programmers number conversion tool"
                    >Hextrapolate &gt;</a
                  >
                  <ul>
                    <li>
                      <a
                        href="https://wincent.dev/a/products/hextrapolate/download/"
                        title="Download Hextrapolate"
                        >Download</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.dev/a/products/hextrapolate/purchase/"
                        title="Purchase Hextrapolate"
                        >Purchase</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.dev/a/products/hextrapolate/faq/"
                        title="Frequently Asked Questions"
                        >FAQ</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://wincent.dev/a/products/install/"
                    title="Installation and deployment solution for developers"
                    >Install &gt;</a
                  >
                  <ul>
                    <li>
                      <a
                        href="https://wincent.dev/a/products/install/download/"
                        title="Install downloads"
                        >Downloads</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.dev/a/products/install/purchase/"
                        title="Purchase Install"
                        >Purchase</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.dev/a/products/install/donate/"
                        title="Support development with a donation"
                        >Donate</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.dev/a/products/install/donate/"
                        title="Support development by becoming a sponsor"
                        >Sponsor</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://wincent.dev/a/products/install/faq/"
                        title="Frequently Asked Questions"
                        >FAQ</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://wincent.dev/a/products/getsmart-pro/"
                    title="Intelligent download manager"
                    >GetSmart Pro &gt;</a
                  >
                  <ul>
                    <li>
                      <a
                        href="https://wincent.dev/a/products/getsmart-pro/donate/"
                        title="Support development with a donation"
                        >Donate</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://wincent.dev/a/products/"
                    title="Full product listing"
                    >Other products...</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </td>
        <td width="48" height="25">
          <a href="https://wincent.dev/a/store/" title="Wincent online store"
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
                href="https://wincent.dev/a/services/"
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
                    href="https://wincent.dev/a/services/custom-development/"
                    title="Custom software development"
                    >Custom Development</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.dev/a/services/mac-consultancy/"
                    title="Apple and Mac OS X consultancy"
                    >Apple/Mac Consultancy</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.dev/a/services/web-design/"
                    title="Web design services"
                    >Web Design</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.dev/a/services/hosting/"
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
                href="https://wincent.dev/a/support/"
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
                    href="https://wincent.dev/a/support/registration/"
                    title="Retrieve lost license codes"
                    >Lost License Codes</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.dev/a/support/bugs/"
                    title="Bug tracking and feature request database"
                    >Bugs and Feature Requests</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.dev/a/support/demo-licenses/"
                    title="Obtain a demonstration license"
                    >Demonstration licenses</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.dev/a/support/forums/"
                    title="Discussion and support forums"
                    >Forums</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.dev/a/support/faq/"
                    title="Frequently Asked Questions"
                    >FAQ</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.dev/a/support/activation/"
                    title="Product activation and information"
                    >Product Activation</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.dev/a/support/tickets/"
                    title="Open or view a support ticket"
                    >Support Tickets</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.dev/a/support/lists/"
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
              <a href="https://wincent.dev/a/about/" title="Company information"
                ><img
                  src="/a/gfx/header/about-off.jpg"
                  width="53"
                  height="25"
                  alt="About"
              /></a>
              <ul>
                <li>
                  <a
                    href="https://wincent.dev/a/about/wincent/"
                    title="About Wincent Colaiuta: the person"
                    >About Wincent Colaiuta</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.dev/a/about/privacy/"
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
                href="https://wincent.dev/a/news/"
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
                    href="https://wincent.dev/a/news/archives/mac_os_x_news/"
                    title="Apple and Mac OS X-related news"
                    >Mac OS X News</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.dev/a/news/archives/product_news/"
                    title="Wincent product news"
                    >Product News</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.dev/a/news/archives/site_news/"
                    title="Site-related news"
                    >Site News</a
                  >
                </li>
                <li>
                  <a
                    href="https://wincent.dev/blog"
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
            href="https://wincent.dev/wiki"
            title="Categorized Mac OS X tips and information"
            ><img
              src="/a/gfx/header/knowledge-base-on.jpg"
              width="107"
              height="25"
              alt="Knowledge Base"
          /></a>
        </td>
        <td width="62" height="25">
          <a href="https://wincent.dev/a/contact/" title="Contact email form"
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
              <a href="https://wincent.dev/a/site-map/" title="Site overview"
                ><img
                  src="/a/gfx/header/site-map-off.jpg"
                  width="72"
                  height="25"
                  alt="Site Map"
              /></a>
              <ul>
                <li>
                  <a
                    href="https://wincent.dev/a/site-map/search/"
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
        <a href="https://wincent.dev/">Main</a>&nbsp;&gt;&nbsp;<a
          href="../../../"
          >Knowledge Base</a
        >&nbsp;&gt;&nbsp;<a href="../../">Archives</a>&nbsp;&gt;&nbsp;<a
          href="../"
          >2004</a
        >&nbsp;&gt;&nbsp;12
      </p>
    </div>

    <div id="container">
      <div class="content">
        <p align="right">
          <a
            href="https://wincent.dev/a/knowledge-base/archives/2004/12/messaging_nil.php"
            >&laquo; Messaging nil</a
          >
          |

          <a href="https://wincent.dev/a/knowledge-base/">Main</a>
          |
          <a
            href="https://wincent.dev/a/knowledge-base/archives/2005/04/upgrading_to_su_1.php"
            >Upgrading to Subversion 1.1.4 &raquo;</a
          >
        </p>

        <h2>December 21, 2004</h2>

        <h3>Upgrading to Subversion 1.1.2</h3>

        <p>
          This article describes how to upgrade from
          <a href="http://subversion.tigris.org/">Subversion</a> 1.1.0 (or
          1.1.1) to the
          <a
            href="http://subversion.tigris.org/servlets/NewsItemView?newsItemID=984"
            >just-released 1.1.2</a
          >. The original installation of 1.1.0 was covered in
          <a
            href="https://wincent.dev/a/knowledge-base/archives/2004/11/building_subver.php"
            >this article</a
          >.
        </p>

        <div id="a000040more">
          <div id="more">
            <p>
              These instructions assume that you have the Xcode Tools installed,
              and they use
              <a
                href="https://wincent.dev/a/knowledge-base/archives/2004/11/building_wget_f.php"
                >wget</a
              >
              to grab the source.
            </p>

            <pre># grab the source
wget http://subversion.tigris.org/tarballs/subversion-1.1.2.tar.gz
<br />
# stop anything that might be accessing the repository
sudo /usr/local/apache2/bin/apachectl stop
<br />
# expand the source archive
tar xzvf subversion-1.1.2.tar.gz 
cd subversion-1.1.2/
<br />
# remove old copies of libraries as per INSTALL
sudo rm -f /usr/local/lib/libsvn*
sudo rm -f /usr/local/lib/libapr*
sudo rm -f /usr/local/lib/libexpat*
sudo rm -f /usr/local/lib/libneon*
<br />
# build
sh ./autogen.sh
./configure
make
sudo make install
<br />
# enjoy the fruits of your labour
svn --version
sudo /usr/local/apache2/bin/apachectl start</pre>

            <p>
              One thing to note: the
              <a href="http://svn.collab.net/repos/svn/tags/1.1.2/CHANGES"
                >change log</a
              >
              states that 1.1.2 "adds support for BerkeleyDB 4.3". The previous
              lack of support for 4.3 was something I stumbled across
              <a
                href="https://wincent.dev/a/knowledge-base/archives/2004/11/building_subver.php"
                >last time</a
              >. Nevertheless, even if some support has been added under the
              hood, the build process failed if I tried using the following
              configure option:
            </p>

            <pre>./configure --with-berkeley-db=/usr/local/BerkeleyDB.4.3</pre>

            <p>
              As such, I am not really sure what the note about 4.3 in the
              changelog means. The Subversion issue tracker has
              <a href="http://subversion.tigris.org/issues/show_bug.cgi?id=2120"
                >an issue</a
              >
              about this, but it's currently marked as being slated for version
              1.3, which is still a long way off.
            </p>
          </div>
        </div>

        <p class="posted">Posted by wincent at December 21, 2004 11:41 PM</p>
      </div>
    </div>

    <div id="footer">
      <p>
        Copyright &copy; 1997-2009

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

    </div>
  </body>
</html>
