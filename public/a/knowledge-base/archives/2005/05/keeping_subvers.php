<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="generator" content="http://www.movabletype.org/" />

    <title>
      Knowledge base: Keeping Subversion alive and other notes on the update to
      Mac OS X 10.4
    </title>

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
      href="https://wincent.com/a/knowledge-base/archives/2005/04/information_for.php"
      title="Information for beta testers"
    />

    <link
      rel="next"
      href="https://wincent.com/a/knowledge-base/archives/2005/05/mac_os_x_tiger.php"
      title="Mac OS X Tiger: Initial response"
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
          >2005</a
        >&nbsp;&gt;&nbsp;05
      </p>
    </div>

    <div id="container">
      <div class="content">
        <p align="right">
          <a
            href="https://wincent.com/a/knowledge-base/archives/2005/04/information_for.php"
            >&laquo; Information for beta testers</a
          >
          |

          <a href="https://wincent.com/a/knowledge-base/">Main</a>
          |
          <a
            href="https://wincent.com/a/knowledge-base/archives/2005/05/mac_os_x_tiger.php"
            >Mac OS X Tiger: Initial response &raquo;</a
          >
        </p>

        <h2>May 16, 2005</h2>

        <h3>
          Keeping Subversion alive and other notes on the update to Mac OS X
          10.4
        </h3>

        <p>
          It's now been a few weeks since I installed
          <a href="http://www.apple.com/macosx/">Tiger</a> and I wanted to post
          some notes on the move from 10.3 to 10.4. These contain a lot of
          material which is specific to my own set-up (hard coded paths,
          pre-existing folders etc) but they may be of interest to people who
          have read my previous articles on installing
          <a
            href="https://wincent.com/a/knowledge-base/archives/2005/04/upgrading_to_su_1.php#more"
            >Subversion</a
          >
          and some other tools on this site.
        </p>

        <div id="a000068more">
          <div id="more">
            <p>
              I first tried an upgrade install and had to perform several hard
              resets due to a conflict between
              <a href="http://usboverdrive.com/">USB Overdrive</a> and my
              <a href="http://apc.com/">APC UPS</a> (I suggest you download the
              latest version of USB Overdrive; it fixes the problem). Of course,
              at that point I didn't know the cause of the conflict. I tried
              again, doing an archive install instead, which meant that I then
              had to reinstall a lot of software...
            </p>

            <h4>Install Xcode 2.0</h4>

            <p>A simple point-and-click job off the Tiger DVD.</p>

            <h4>Update wget</h4>

            <p>
              As wget 1.10 is just around the corner I decided to install from
              the latest CVS sources again (see
              <a
                href="https://wincent.com/a/knowledge-base/archives/2004/11/building_wget_f.php"
                >previous article</a
              >).
            </p>

            <pre># change to my working directory
cd ~/trabajo/wget
mkdir cvs-2005-04-20
cd cvs-2005-04-20
 <br />
# cvs password is "cvs"
cvs -d :pserver:cvs@sunsite.dk:/pack/anoncvs login
cvs -d :pserver:cvs@sunsite.dk:/pack/anoncvs co wget
cd wget
make -f Makefile.cvs
./configure --with-ssl
make
src/wget --version
sudo make install</pre>

            <h4>Install pstree</h4>

            <p>
              Nothing much has changed since my
              <a
                href="https://wincent.com/a/knowledge-base/archives/2004/12/building_pstree.php"
                >original article</a
              >.
            </p>

            <pre># make working directory
mkdir pstree
cd pstree
 <br />
# fetch source, requires wget
wget http://www.thp.uni-duisburg.de/pstree/pstree.tar.gz
tar xzf pstree.tar.gz 
 <br />
# build, test and install
gcc -O -o pstree pstree.c
./pstree
sudo mv pstree /usr/local/bin/</pre>

            <h4>Install pwgen</h4>

            <p>
              Again, nothing much has changed since
              <a
                href="https://wincent.com/a/knowledge-base/archives/2004/11/building_pwgen.php"
                >last time</a
              >, so I used the source tree that I originally downloaded:
            </p>

            <pre>
# use previously downloaded
cd ~/trabajo/pwgen/pwgen-2.03
make clean
./configure
make
./pwgen
sudo make install</pre
            >

            <h4>Install aee and ee</h4>

            <p>
              Nothing much new to report since
              <a
                href="https://wincent.com/a/knowledge-base/archives/2004/11/building_eeaee.php"
                >last time</a
              >. Once again I decided to use the same source trees:
            </p>

            <pre>cd ~/trabajo/aee/aee-2.2.3
make clean
make && ./aee
sudo make install
 <br />
cd ~/trabajo/ee/easyedit/
make clean
make && ./ee
sudo make install</pre>

            <h4>Install BerkeleyDB</h4>

            <p>
              This one turned out to be unnecessary. In the end I ended up
              converting my Subversion repositories to use the new FSFS
              (filesystem) back-end.
            </p>

            <pre>
# use previously downloaded source
cd ~/trabajo/db/db-4.3.27
cd build_unix
make realclean
../dist/configure
make
sudo make install</pre
            >

            <h4>Install Apache 2</h4>

            <pre># change to my working directory
cd ~/trabajo/httpd/
 <br />
# there is now a newer version available
wget http://apache.org.es/httpd/httpd-2.0.54.tar.gz
tar xzvf httpd-2.0.54.tar.gz
cd httpd-2.0.54
./configure --prefix=/usr/local/apache2 \
            --enable-dav --enable-so --enable-ssl
make
sudo make install</pre>

            <h4>Install Subversion</h4>

            <pre>
# use last downloaded version
cd ~/trabajo/subversion/subversion-1.1.4
make clean
sh ./autogen.sh
./configure
make
sudo make install</pre
            >

            <h4>Configure Apache for use with Subversion</h4>

            <p>
              I made the following changes to
              /usr/local/apache2/conf/httpd.conf. Your local setup will no doubt
              be different, especially the directory paths. This configuration
              also depends on the svn user and group that I created when I
              <a
                href="https://wincent.com/a/knowledge-base/archives/2004/11/building_subver.php"
                >first installed</a
              >
              Subversion on this machine (which survived even though I did an
              archive install because users and groups in the NetInfo database
              are preserved).
            </p>

            <pre>
219c219
&lt; Listen 80
---
&gt; Listen 8080
267,268c267,268
&lt; User nobody
&lt; Group #-1
---
&gt; User svn
&gt; Group svn
358,359c358,359
&lt;     Order allow,deny
&lt;     Allow from all
---
&gt;     Order deny,allow
&gt;     Deny from all
1032a1033,1045
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

            <p>I then create necessary directory:</p>

            <pre>
sudo mkdir -p /usr/local/apache2/var/dav
sudo chown svn:svn /usr/local/apache2/var/dav</pre
            >

            <p>And set up startup item:</p>

            <pre>
sudo cp -R /System/Library/StartupItems/Apache \
/Library/StartupItems/Apache2</pre
            >

            <p>
              Inside the newly created Apache2 folder I made these changes to
              the file Apache and renamed it to Apache2:
            </p>

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
28,31d18
&lt;     if [ -x /usr/sbin/webperfcachectl ]; then
&lt;         echo "Stopping web performance cache server"
&lt;         /usr/sbin/webperfcachectl stop
&lt;     fi
33c20
&lt;     apachectl stop 
---
&gt;     /usr/local/apache2/bin/apachectl stop 
38c25
&lt;     if [ "${WEBSERVER:=-NO-}" = "-YES-" ]; then
---
&gt;     if [ "${WEBSERVER2:=-NO-}" = "-YES-" ]; then
40,46c27
&lt;         apachectl restart
&lt;         if [ "${WEBPERFCACHESERVER:=-NO-}" = "-YES-" ]; then
&lt;             if [ -x /usr/sbin/webperfcachectl ]; then
&lt;                 echo "Restarting web performance cache server"
&lt;                 /usr/sbin/webperfcachectl restart
&lt;             fi
&lt;         fi
---
&gt;         /usr/local/apache2/bin/apachectl restart</pre
            >

            <p>
              /etc/hostconfig already contained the line WEBSERVER2=-YES- from
              the previous install. On rebooting the Apache2 webserver will
              automatically run thanks to the startup item.
            </p>

            <h4>Converting the Subversion repositories to the FSFS backend</h4>

            <p>
              I then ran into an unfortunate situation. I was getting commit
              errors due to database version mismatch. It appears the even
              though my last version of svn was linked against BerkeleyDB 4.3,
              my previous Apache installed had been linked against 4.2 and so I
              couldn't touch my repository.
            </p>

            <p>
              My "solution" was to use 10-day old dump and recreate
              repositories, this time using FSFS. I suppose that I could have
              tried recompiling everything all over again with an older version
              of BerkeleyDB, but I just didn't feel up to it. This underlines
              the need to always, always keep good backups, and if you're
              running Subversion make regular repository dumps. I think future
              upgrades will be a lot more painless now that I've switched to
              FSFS:
            </p>

            <pre>cd ~/Developer/svnrep
sudo mv Synergy Synergy.old
 <br />
sudo svnadmin create Synergy --fs-type fsfs
sudo svnadmin load Synergy &lt; ~/svndumps/last/Synergy.dump
sudo chown -R svn:svn *
<br />
sudo /usr/local/apache2/bin/apachectl start</pre>

            <h4>Tweak the Subversion configuration file</h4>

            <p>
              Seeing as have done some Perl work lately I decide to add the
              following to the autoprops section of my svn configuration file
              (~/.subversion/config):
            </p>

            <pre>*.pm = svn:keywords=Id</pre>

            <p>
              I also decided to put an end to the endless commit hassles I've
              been suffering thanks to Interface Builder creating backup nib
              files which end with "~.nib". I uncommented:
            </p>

            <pre>
global-ignores = *.o *.lo *.la #*# .*.rej *.rej .*~ *~ .#* .DS_Store</pre
            >

            <p>And added these to it:</p>

            <pre>*~.nib *_.nib *.bak</pre>
          </div>
        </div>

        <p class="posted">Posted by wincent at May 16, 2005 11:05 AM</p>
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
