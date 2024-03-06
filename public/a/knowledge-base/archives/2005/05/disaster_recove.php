<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="generator" content="http://www.movabletype.org/" />

    <title>Knowledge base: Disaster recovery notes</title>

    <link rel="stylesheet" href="/a/styles.css" type="text/css" />

    <link
      rel="start"
      href="https://typechecked.net/a/knowledge-base/"
      title="Home"
    />
    <link
      rel="prev"
      href="https://typechecked.net/a/knowledge-base/archives/2005/05/building_subver_1.php"
      title="Building Subversion 1.2 on Mac OS X 10.4.1"
    />

    <link
      rel="next"
      href="https://typechecked.net/a/knowledge-base/archives/2005/07/upgrading_to_su_2.php"
      title="Upgrading to Subversion 1.2.1 on Mac OS X 10.4.2"
    />

    <script type="text/javascript" language="javascript">
      <!--

      var HOST = 'typechecked.net';

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
        You are currently looking at an older section of the typechecked.net
        website.<br />
        Please check the new version of the site at
        <a href="https://typechecked.net/">https://typechecked.net/</a> for updated
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
          <a href="https://typechecked.net/"
            ><img
              src="/a/gfx/wincent-logo-small-gray-bg.jpg"
              width="43"
              height="41"
              alt="wincent"
              align="middle"
          /></a>
          <a href="https://typechecked.net/a/knowledge-base/"
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
                href="https://typechecked.net/a/products/"
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
                    href="https://typechecked.net/products/synergy"
                    title="The original iTunes menu bar controller"
                    >Synergy &gt;</a
                  >
                  <ul>
                    <li>
                      <a
                        href="https://typechecked.net/products/synergy/download"
                        title="Download Synergy"
                        >Download</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://typechecked.net/a/products/synergy-classic/purchase/"
                        title="Purchase Synergy"
                        >Purchase</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://typechecked.net/products/synergy/help"
                        title="Frequently Asked Questions"
                        >FAQ</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://typechecked.net/a/products/synergy-classic/buttons/"
                        title="Free button sets"
                        >Button Sets</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://typechecked.net/a/products/synergy-advance/"
                    title="Multi-purpose audio companion"
                    >Synergy Advance &gt;</a
                  >
                  <ul>
                    <li>
                      <a
                        href="https://typechecked.net/a/products/synergy-advance/download/"
                        title="Download Synergy Advance"
                        >Download preview</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://typechecked.net/a/products/synergy-advance/purchase/"
                        title="Purchase Synergy Advance"
                        >Purchase</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://typechecked.net/a/products/synergy-advance/donate/"
                        title="Support development with a donation"
                        >Donate</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://typechecked.net/a/products/synergy-advance/donate/"
                        title="Support development by becoming a sponsor"
                        >Sponsor</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://typechecked.net/a/products/winswitch/"
                    title="Enhanced replacement for Apple's Fast User Switching menu"
                    >WinSwitch &gt;</a
                  >
                  <ul>
                    <li>
                      <a
                        href="https://typechecked.net/a/products/winswitch/download/"
                        title="Download WinSwitch"
                        >Download</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://typechecked.net/a/products/winswitch/donate/"
                        title="Support development with a donation"
                        >Donate</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://typechecked.net/a/products/winswitch/donate/"
                        title="Support development by becoming a sponsor"
                        >Sponsor</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://typechecked.net/a/products/winswitch/faq/"
                        title="Frequently Asked Questions"
                        >FAQ</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://typechecked.net/a/products/hextrapolate/"
                    title="Programmers number conversion tool"
                    >Hextrapolate &gt;</a
                  >
                  <ul>
                    <li>
                      <a
                        href="https://typechecked.net/a/products/hextrapolate/download/"
                        title="Download Hextrapolate"
                        >Download</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://typechecked.net/a/products/hextrapolate/purchase/"
                        title="Purchase Hextrapolate"
                        >Purchase</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://typechecked.net/a/products/hextrapolate/faq/"
                        title="Frequently Asked Questions"
                        >FAQ</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://typechecked.net/a/products/install/"
                    title="Installation and deployment solution for developers"
                    >Install &gt;</a
                  >
                  <ul>
                    <li>
                      <a
                        href="https://typechecked.net/a/products/install/download/"
                        title="Install downloads"
                        >Downloads</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://typechecked.net/a/products/install/purchase/"
                        title="Purchase Install"
                        >Purchase</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://typechecked.net/a/products/install/donate/"
                        title="Support development with a donation"
                        >Donate</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://typechecked.net/a/products/install/donate/"
                        title="Support development by becoming a sponsor"
                        >Sponsor</a
                      >
                    </li>
                    <li>
                      <a
                        href="https://typechecked.net/a/products/install/faq/"
                        title="Frequently Asked Questions"
                        >FAQ</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://typechecked.net/a/products/getsmart-pro/"
                    title="Intelligent download manager"
                    >GetSmart Pro &gt;</a
                  >
                  <ul>
                    <li>
                      <a
                        href="https://typechecked.net/a/products/getsmart-pro/donate/"
                        title="Support development with a donation"
                        >Donate</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://typechecked.net/a/products/"
                    title="Full product listing"
                    >Other products...</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </td>
        <td width="48" height="25">
          <a href="https://typechecked.net/a/store/" title="Wincent online store"
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
                href="https://typechecked.net/a/services/"
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
                    href="https://typechecked.net/a/services/custom-development/"
                    title="Custom software development"
                    >Custom Development</a
                  >
                </li>
                <li>
                  <a
                    href="https://typechecked.net/a/services/mac-consultancy/"
                    title="Apple and Mac OS X consultancy"
                    >Apple/Mac Consultancy</a
                  >
                </li>
                <li>
                  <a
                    href="https://typechecked.net/a/services/web-design/"
                    title="Web design services"
                    >Web Design</a
                  >
                </li>
                <li>
                  <a
                    href="https://typechecked.net/a/services/hosting/"
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
                href="https://typechecked.net/a/support/"
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
                    href="https://typechecked.net/a/support/registration/"
                    title="Retrieve lost license codes"
                    >Lost License Codes</a
                  >
                </li>
                <li>
                  <a
                    href="https://typechecked.net/a/support/bugs/"
                    title="Bug tracking and feature request database"
                    >Bugs and Feature Requests</a
                  >
                </li>
                <li>
                  <a
                    href="https://typechecked.net/a/support/demo-licenses/"
                    title="Obtain a demonstration license"
                    >Demonstration licenses</a
                  >
                </li>
                <li>
                  <a
                    href="https://typechecked.net/a/support/forums/"
                    title="Discussion and support forums"
                    >Forums</a
                  >
                </li>
                <li>
                  <a
                    href="https://typechecked.net/a/support/faq/"
                    title="Frequently Asked Questions"
                    >FAQ</a
                  >
                </li>
                <li>
                  <a
                    href="https://typechecked.net/a/support/activation/"
                    title="Product activation and information"
                    >Product Activation</a
                  >
                </li>
                <li>
                  <a
                    href="https://typechecked.net/a/support/tickets/"
                    title="Open or view a support ticket"
                    >Support Tickets</a
                  >
                </li>
                <li>
                  <a
                    href="https://typechecked.net/a/support/lists/"
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
              <a href="https://typechecked.net/a/about/" title="Company information"
                ><img
                  src="/a/gfx/header/about-off.jpg"
                  width="53"
                  height="25"
                  alt="About"
              /></a>
              <ul>
                <li>
                  <a
                    href="https://typechecked.net/a/about/wincent/"
                    title="About Wincent Colaiuta: the person"
                    >About Wincent Colaiuta</a
                  >
                </li>
                <li>
                  <a
                    href="https://typechecked.net/a/about/privacy/"
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
                href="https://typechecked.net/a/news/"
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
                    href="https://typechecked.net/a/news/archives/mac_os_x_news/"
                    title="Apple and Mac OS X-related news"
                    >Mac OS X News</a
                  >
                </li>
                <li>
                  <a
                    href="https://typechecked.net/a/news/archives/product_news/"
                    title="Wincent product news"
                    >Product News</a
                  >
                </li>
                <li>
                  <a
                    href="https://typechecked.net/a/news/archives/site_news/"
                    title="Site-related news"
                    >Site News</a
                  >
                </li>
                <li>
                  <a
                    href="https://typechecked.net/blog"
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
            href="https://typechecked.net/wiki"
            title="Categorized Mac OS X tips and information"
            ><img
              src="/a/gfx/header/knowledge-base-on.jpg"
              width="107"
              height="25"
              alt="Knowledge Base"
          /></a>
        </td>
        <td width="62" height="25">
          <a href="https://typechecked.net/a/contact/" title="Contact email form"
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
              <a href="https://typechecked.net/a/site-map/" title="Site overview"
                ><img
                  src="/a/gfx/header/site-map-off.jpg"
                  width="72"
                  height="25"
                  alt="Site Map"
              /></a>
              <ul>
                <li>
                  <a
                    href="https://typechecked.net/a/site-map/search/"
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
        <a href="https://typechecked.net/">Main</a>&nbsp;&gt;&nbsp;<a
          href="../../../"
          >Knowledge Base</a
        >&nbsp;&gt;&nbsp;<a href="../../">Archives</a>&nbsp;&gt;&nbsp;<a
          href="../"
          >2005</a
        >&nbsp;&gt;&nbsp;05
      </p>
    </div>

    <div id="container">
      <div class="content">
        <p align="right">
          <a
            href="https://typechecked.net/a/knowledge-base/archives/2005/05/building_subver_1.php"
            >&laquo; Building Subversion 1.2 on Mac OS X 10.4.1</a
          >
          |

          <a href="https://typechecked.net/a/knowledge-base/">Main</a>
          |
          <a
            href="https://typechecked.net/a/knowledge-base/archives/2005/07/upgrading_to_su_2.php"
            >Upgrading to Subversion 1.2.1 on Mac OS X 10.4.2 &raquo;</a
          >
        </p>

        <h2>May 30, 2005</h2>

        <h3>Disaster recovery notes</h3>

        <p>
          I've had a
          <a
            href="https://typechecked.net/a/about/wincent/weblog/archives/2005/05/1041_kernel_pan.php"
            >fairly bad run</a
          >
          lately (kernel panics, disk corruption, reinstalls). Here are some
          notes I made while configuring some UNIX tools &mdash; Apache 2,
          Subversion and the like &mdash; on the fresh install. These notes
          contain a lot of hard-coded paths that are specific to my installation
          but they may be of use to somebody out there...
        </p>

        <div id="a000086more">
          <div id="more">
            <pre># install wget
curl -O ftp://ftp.deepspace6.net/pub/ds6/sources/wget/wget-1.10-beta1.tar.bz2
tar xjf wget-1.10-beta1.tar.bz2 
cd wget-1.10-beta1/
./configure --with-ssl
make
src/wget --version
sudo make install
<br />
# install pstree
wget ftp://ftp.thp.Uni-Duisburg.de/pub/source/pstree.tar.gz
tar xzf pstree.tar.gz 
gcc -O -o pstree pstree.c
./pstree
sudo install pstree /usr/local/bin/pstree
<br />
# install pwgen
wget http://kent.dl.sourceforge.net/sourceforge/pwgen/pwgen-2.03.tar.gz
tar xzf pwgen-2.03.tar.gz 
cd pwgen-2.03/
./configure
make
./pwgen -h
sudo make install
<br />
# install aee
wget http://www.users.qwest.net/~hmahon/sources/aee-2.2.3.tar.gz
tar xzf aee-2.2.3.tar.gz 
cd aee-2.2.3/
make
sudo make install
<br />
# install ee
wget http://www.users.qwest.net/~hmahon/sources/ee-1.4.2.src.tgz
tar xzf ee-1.4.2.src.tgz 
cd easyedit/
make
sudo make install
<br />
# install Apache 2
wget http://apache.rediris.es/httpd/httpd-2.0.54.tar.bz2
tar xjf httpd-2.0.54.tar.bz2 
cd httpd-2.0.54/
./buildconf 
./configure --prefix=/usr/local/apache2 --enable-dav --enable-so --enable-ssl --enable-deflate
make
sudo make install
<br />
# Subversion support
sudo mkdir -p /usr/local/apache2/var/dav
echo 'svn::200:200::0:0:Subversion:/var/empty:/usr/bin/false' |sudo niload -v passwd /
echo 'svn:*:200:svn' | sudo niload -v group /
sudo chown svn:svn /usr/local/apache2/var/dav
<br />
# autolaunch Apache 2 on booting
sudo cp -R /System/Library/StartupItems/Apache /Library/StartupItems/Apache2
sudo mv /Library/StartupItems/Apache2/Apache /Library/StartupItems/Apache2/Apache2
<br />
# install Subversion
wget http://subversion.tigris.org/downloads/subversion-1.2.0.tar.bz2
tar xjf subversion-1.2.0.tar.bz2 
cd subversion-1.2.0/
sh ./autogen.sh && ./configure && make
make check
sudo make install</pre>

            <p>
              Make edits to "/usr/local/apache2/conf/httpd.conf" as indicated
              below:
            </p>

            <pre>
/conf/httpd.conf
219c219
&lt; Listen 80
---
&gt; Listen 8080
231a232,233
&gt; LoadModule dav_svn_module     modules/mod_dav_svn.so
&gt; LoadModule authz_svn_module   modules/mod_authz_svn.so
267,268c269,270
&lt; User nobody
&lt; Group #-1
---
&gt; User svn
&gt; Group svn
358,359c360,361
&lt;     Order allow,deny
&lt;     Allow from all
---
&gt;     Order deny,allow
&gt;     Deny from all
1032a1035,1047
&gt; 
&gt; DavLockDB /usr/local/apache2/var/dav/DavLock
&gt; 
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

            <p>Make edits to "/Library/StartupItems/Apache2/Apache2":</p>

            <pre>
11,22c11,13
&lt;     if [ "${WEBSERVER:=-NO-}" = "-YES-" ]; then
&lt;         echo "Starting Apache web server"
&lt;         if [ ! -e /etc/httpd/httpd.conf ] ; then
&lt;                 cp -p /etc/httpd/httpd.conf.default /etc/httpd/httpd.conf
&lt;         fi
&lt;         apachectl start
&lt;         if [ "${WEBPERFCACHESERVER:=-NO-}" = "-YES-" ]; then
&lt;             if [ -x /usr/sbin/webperfcachectl ]; then
&lt;                 echo "Starting web performance cache server"
&lt;                 /usr/sbin/webperfcachectl start
&lt;             fi
&lt;         fi
---
&gt;     if [ "${WEBSERVER2:=-NO-}" = "-YES-" ]; then
&gt;         echo "Starting Apache 2 web server"
&gt;         /usr/local/apache2/bin/apachectl start
28,33c19,20
&lt;     if [ -x /usr/sbin/webperfcachectl ]; then
&lt;         echo "Stopping web performance cache server"
&lt;         /usr/sbin/webperfcachectl stop
&lt;     fi
&lt;     echo "Stopping Apache web server"
&lt;     apachectl stop 
---
&gt;     echo "Stopping Apache 2 web server"
&gt;     /usr/local/apache2/bin/apachectl stop
38,52c25,33
&lt;     if [ "${WEBSERVER:=-NO-}" = "-YES-" ]; then
&lt;         echo "Restarting Apache web server"
&lt;         apachectl restart
&lt;         if [ "${WEBPERFCACHESERVER:=-NO-}" = "-YES-" ]; then
&lt;             if [ -x /usr/sbin/webperfcachectl ]; then
&lt;                 echo "Restarting web performance cache server"
&lt;                 /usr/sbin/webperfcachectl restart
&lt;             fi
&lt;         fi
&lt;     else
&lt;         StopService
&lt;     fi
&lt; }
&lt; 
&lt; RunService "$1"
---
&gt;     if [ "${WEBSERVER2:=-NO-}" = "-YES-" ]; then
&gt;         echo "Restarting Apache 2 web server"
&gt;         /usr/local/apache2/bin/apachectl restart
&gt;     else                               
&gt;         StopService                    
&gt;     fi                                 
&gt; }                                      
&gt;                                        
&gt; RunService "$1"</pre
            >

            <p>Make edits to "/etc/hostconfig":</p>

            <pre>
13a14
&gt; WEBSERVER2=-YES-</pre
            >

            <p>
              Make edits to
              "/Library/StartupItems/Apache2/StartupParameters.plist":
            </p>

            <pre>
2,3c2,3
&lt;   Description     = "Apache web server";
&lt;   Provides        = ("Web Server");
---
&gt;   Description     = "Apache Subversion server";
&gt;   Provides        = ("Apache Subversion Server");</pre
            >

            <p>
              And finally fire up Apache 2. I had to reset my repository
              password for some reason but after doing that everything works
              fine.
            </p>

            <pre>
sudo /usr/local/apache2/bin/apachectl start
/usr/local/apache2/bin/htpasswd -m ~/Developer/svnrep-auth wincent</pre
            >
          </div>
        </div>

        <p class="posted">Posted by wincent at May 30, 2005 12:14 PM</p>
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
