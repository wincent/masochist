<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="generator" content="http://www.movabletype.org/" />

    <title>Knowledge base: Intel iMac set-up notes</title>

    <link rel="stylesheet" href="/a/styles.css" type="text/css" />

    <link
      rel="start"
      href="https://wincent.com/a/knowledge-base/"
      title="Home"
    />
    <link
      rel="prev"
      href="https://wincent.com/a/knowledge-base/archives/2006/06/subversion_131_1.php"
      title="Subversion 1.3.1 to 1.3.2 upgrade notes"
    />

    <link
      rel="next"
      href="https://wincent.com/a/knowledge-base/archives/2006/06/wordpress_updat.php"
      title="WordPress updates via Subversion"
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
        >&nbsp;&gt;&nbsp;06
      </p>
    </div>

    <div id="container">
      <div class="content">
        <p align="right">
          <a
            href="https://wincent.com/a/knowledge-base/archives/2006/06/subversion_131_1.php"
            >&laquo; Subversion 1.3.1 to 1.3.2 upgrade notes</a
          >
          |

          <a href="https://wincent.com/a/knowledge-base/">Main</a>
          |
          <a
            href="https://wincent.com/a/knowledge-base/archives/2006/06/wordpress_updat.php"
            >WordPress updates via Subversion &raquo;</a
          >
        </p>

        <h2>June 02, 2006</h2>

        <h3>Intel iMac set-up notes</h3>

        <p>
          When I switched from the G5 to the Intel iMac I used Apple's migration
          assistant to transfer over as much data as possible from the old
          system to the new.
        </p>

        <p>
          There were a number of command-line tools that I depend on that did
          not get transferred by the migration assistant. These are the notes
          that I made while compiling native Intel versions of these tools and
          installing them on the iMac.
        </p>

        <div id="a000343more">
          <div id="more">
            <h4>wget</h4>

            <p>
              I prefer <tt>wget</tt> to <tt>curl</tt>. The
              <tt>--limit-rate</tt> switch below is so that downloading the
              source didn't flood my pathetic dial-up connection:
            </p>

            <pre># get the source
curl --limit-rate 1K -O ftp://ftp.rediris.es/pub/gnu/gnu/wget/wget-1.10.tar.gz
<br />
# extract
tar xzvf wget-1.10.tar.gz 
cd wget-1.10/
<br />
# configure and build
./configure --with-ssl
make
<br />
# test
src/wget --version
<br />
# install
sudo make install</pre>

            <h4>pstree</h4>

            <p>
              When I went looking for the latest official version of
              <tt>pstree</tt> it seems that the website has packed up and gone
              forever. Luckily I still had a copy of a source archive for a
              recent version (2.27), possibly the latest. Seeing as it's
              redistributable under the GPL I have placed a copy
              <a href="https://wincent.com/gpl/pstree-2.27.tar.gz">here</a>. To
              build it, you would follow a procedure like this one:
            </p>

            <pre># get the source
wget https://wincent.com/gpl/pstree-2.27.tar.gz
<br />
# extract
tar zxvf pstree-2.27.tar.gz
cd pstree
<br />
# build
gcc -O -o pstree pstree.c
<br />
# install
sudo install pstree /usr/local/bin/pstree</pre>

            <p>
              Or a slight variation of this; building a Universal Binary by
              combining a previously built PowerPC executable, <tt>pstree</tt>,
              with a newly built Intel executable:
            </p>

            <pre>mv pstree pstree.ppc
<br />
# build
gcc -O -o pstree.i386 pstree.c
<br />
# make a Universal Binary
lipo -arch ppc pstree.ppc -arch i386 pstree.i386 -output pstree -create
file pstree
<br />
# install
sudo install pstree /usr/local/bin/pstree</pre>

            <h4>pwgen</h4>

            <pre># get the source
wget "http://ovh.dl.sourceforge.net/sourceforge/pwgen/pwgen-2.05.tar.gz"
<br />
# extract
tar xzvf pwgen-2.05.tar.gz 
cd pwgen-2.05
<br />
# configure and build
./configure
make
<br />
# test
./pwgen
<br />
# install
sudo make install</pre>

            <h4>ee</h4>

            <pre>
# get the source
wget http://www.users.qwest.net/~hmahon/sources/ee-1.4.2.src.tgz
<br />
# extract
tar xzvf ee-1.4.2.src.tgz 
cd easyedit/
<br />
# build
make
<br />
# install
sudo make install</pre>

            <h4>aee</h4>

            <pre>
# get the source
wget http://www.users.qwest.net/~hmahon/sources/aee-2.2.3.tar.gz
<br />
# extract
tar zxvf aee-2.2.3.tar.gz 
cd aee-2.2.3/
<br />
# make both aee (normal) and xae (for use in X11)
make both
<br />
# install
sudo make install</pre>

            <h4>Apache 2</h4>

            <pre># get the source
wget http://apache.gva.es/httpd/httpd-2.0.58.tar.bz2
<br />
# extract
tar xjvf httpd-2.0.58.tar.bz2 
cd httpd-2.0.58/
<br />
# workaround <a href="https://wincent.com/a/knowledge-base/archives/2005/07/upgrading_to_su_2.php">APR bug</a> (see Subversion 
ac_cv_func_poll=no; export ac_cv_func_poll
<br />
# configure and build
./configure --prefix=/usr/local/apache2 --enable-dav --enable-so --enable-ssl --enable-deflate
make
<br />
# install
sudo make install</pre>

            <h4>Subversion</h4>

            <pre>
# get the source
wget http://subversion.tigris.org/downloads/subversion-1.3.2.tar.bz2
<br />
# extract
tar xjvf subversion-1.3.2.tar.bz2 
cd subversion-1.3.2/
<br />
# set-up for access via Apache
sudo mkdir -p /usr/local/apache2/var/dav
echo 'svn::200:200::0:0:Subversion:/var/empty:/usr/bin/false' | sudo niload -v passwd /
echo 'svn:*:200:svn' | sudo niload -v group /
sudo chown svn:svn /usr/local/apache2/var/dav
<br />
# workaround <a href="https://wincent.com/a/knowledge-base/archives/2005/07/upgrading_to_su_2.php">APR bug</a> (see Subversion FAQ)
ac_cv_func_poll=no; export ac_cv_func_poll
<br />
# configure and build
sh ./autogen.sh
./configure --with-apxs=/usr/local/apache2/bin/apxs
make
<br />
# test
make check
<br />
# install
sudo make install</pre>

            <p>
              It's then necessary to make some changes to
              <tt>/usr/local/apache2/conf/httpd.conf</tt> so it will work with
              Subversion:
            </p>

            <pre>
219c219
&lt; Listen 80
---
&gt; Listen 8080
233a234,236
&gt; LoadModule dav_svn_module modules/mod_dav_svn.so
&gt; LoadModule authz_svn_module modules/mod_authz_svn.so
&gt; 
267,268c270,271
&lt; User nobody
&lt; Group #-1
---
&gt; User svn
&gt; Group svn
358,359c361,362
&lt;     Order allow,deny
&lt;     Allow from all
---
&gt;     Order deny,allow
&gt;     Deny from all
994a998,1007
&gt; &lt;Location /svnrep&gt;
&gt;     DAV svn
&gt;     SVNParentPath /Users/wincent/Developer/svnrep
&gt;     AuthType Basic
&gt;     AuthName "Subversion repository"
&gt;     AuthUserFile /Users/wincent/Developer/svnrep-auth
&gt;     Require valid-user
&gt;     Order deny,allow
&gt;     Allow from all
&gt; &lt;/Location&gt;</pre
            >

            <p>Finally we can start up Apache:</p>

            <pre>sudo /usr/local/apache2/bin/apachectl start</pre>

            <p>
              I found it was unnecessary to
              <a
                href="https://wincent.com/a/knowledge-base/archives/2005/05/disaster_recove.php"
                >set up a start-up item to launch Apache 2 at boot time</a
              >
              because it was correctly transferred across by the migration
              assistant. I did, however, need to add this line back into
              <tt>/etc/hostconfig</tt>:
            </p>

            <pre>WEBSERVER2=-YES-</pre>
          </div>
        </div>

        <p class="posted">Posted by wincent at June 2, 2006 04:20 AM</p>
      </div>
    </div>

    <div id="footer">
      <p>
        Copyright &copy; 1997-2009

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

    </div>
  </body>
</html>
