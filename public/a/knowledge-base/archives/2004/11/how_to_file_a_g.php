<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="generator" content="http://www.movabletype.org/" />

    <title>Knowledge base: How to file a good bug report</title>

    <link rel="stylesheet" href="/a/styles.css" type="text/css" />

    <link
      rel="start"
      href="https://typechecked.net/a/knowledge-base/"
      title="Home"
    />
    <link
      rel="prev"
      href="https://typechecked.net/a/knowledge-base/archives/2004/11/building_wget_f.php"
      title="Building wget from CVS on Mac OS X 10.3"
    />

    <link
      rel="next"
      href="https://typechecked.net/a/knowledge-base/archives/2004/12/building_pstree.php"
      title="Building pstree 2.26 on Mac OS X 10.3.6"
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
          >2004</a
        >&nbsp;&gt;&nbsp;11
      </p>
    </div>

    <div id="container">
      <div class="content">
        <p align="right">
          <a
            href="https://typechecked.net/a/knowledge-base/archives/2004/11/building_wget_f.php"
            >&laquo; Building wget from CVS on Mac OS X 10.3</a
          >
          |

          <a href="https://typechecked.net/a/knowledge-base/">Main</a>
          |
          <a
            href="https://typechecked.net/a/knowledge-base/archives/2004/12/building_pstree.php"
            >Building pstree 2.26 on Mac OS X 10.3.6 &raquo;</a
          >
        </p>

        <h2>November 25, 2004</h2>

        <h3>How to file a good bug report</h3>

        <p>
          In this article I offer a few tips on how to file effective bug
          reports using the
          <a href="https://typechecked.net/a/support/bugs/"
            >Wincent bug tracking database</a
          >. If you take the time to file a well-written bug report then you'll
          be helping to get the problem fixed as quickly as possible. It's
          important that you follow these guidelines because incomplete or
          duplicate bug reports can be counter-productive and a waste of time
          for both the person that writes them and those that have to read them;
          I appreciate your efforts in filing quality reports.
        </p>

        <div id="a000031more">
          <div id="more">
            <p>
              The
              <a href="https://typechecked.net/a/support/bugs/"
                >Wincent bug tracking database</a
              >
              uses the industry standard
              <a href="http://www.bugzilla.org/">Bugzilla</a> software (as used
              by the <a href="http://www.mozilla.org/">Mozilla project</a>, the
              <a href="http://bugzilla.kernel.org/">Linux Kernel</a>,
              <a href="http://swsi.gsfc.nasa.gov/bugzilla/">NASA</a>,
              <a
                href="http://www-124.ibm.com/developerworks/oss/linux/bugzilla/"
                >IBM</a
              >
              and
              <a href="http://www.bugzilla.org/installation-list/"
                >many others</a
              >).
            </p>

            <p>
              There are a number of tutorials and guides out there on how to
              write good bug reports (for example,
              <a
                href="http://www.mozilla.org/quality/bug-writing-guidelines.html"
                >here</a
              >
              and
              <a
                href="http://blogs.msdn.com/productfeedback/archive/2004/09/27/235003.aspx"
                >here</a
              >). In this article I merely want to highlight some key points and
              offer some specific guidelines that apply to reporting bugs for
              Mac OS X software.
            </p>

            <h4>Search before reporting</h4>

            <p>
              Searching the database is very easy. On the front page of the
              database
              is a search field that's labeled "Enter a bug # or some search
              terms".
            </p>

            <p>
              Only file a new bug report if you cannot find an existing report
              that covers the same issue. The whole idea of the public database
              is that bugs will get squished more quickly when people share
              information. By comparing similarities and differences between the
              experiences of different users, common factors can be identified,
              and causes targeted.
            </p>

            <p>
              If you file a duplicate bug report it will be closed. The best way
              to draw attention to an issue is to add your comments to an
              existing bug; in fact you can even vote for bugs that you want
              prioritized. I receive copies via email of all new bug reports, as
              well as all comments added to existing bugs. For this reason using
              Bugzilla is the preferred form of reporting bugs, rather than
              emailing me. (With Bugzilla, I am going to get the email anyway,
              but the bug hunting effort becomes a collaborative and therefore
              more effective one.)
            </p>

            <h4>Perform basic troubleshooting prior to filing the report</h4>

            <p>
              There are some steps you should take to identify the causes that
              trigger the bug before filing a report. For example, if the
              software is malfunctioning because you have a corrupt preferences
              file, then you'll save yourself a lot of trouble by doing some
              investigation beforehand and you won't even have to file a bug
              report. You should also consult the FAQ (Frequently Asked
              Questions) before filing a bug report, just in case the issue has
              a solution that you've overlooked (each
              <a href="https://typechecked.net/a/products/">product</a> has its own
              FAQ section on the website).
            </p>

            <ul>
              <li>
                <em>Rule out preference file corruption</em> by shutting down
                the program, dragging the preferences file to the Desktop, and
                then restarting the program. Preference files are stored in
                "~/Library/Preferences/", and have names like
                "org.wincent.Synergy.plist" and "com.wincent.WinSwitch.plist".
                If the problem goes away, you know you had a corrupt preferences
                file. (<strong>Note:</strong> Your preferences file may contain
                your registration information so you should make sure that you
                have a copy of your license details before disposing of it
                entirely.)
              </li>
              <li>
                <em>Try an uninstall/reinstall cycle</em>. Sometimes in the
                day-to-day use of a system files get moved, deleted, and
                overwritten. You should try uninstalling the software (very easy
                if the software comes with an installer; just run the installer
                and click the "Uninstall" button) and then reinstalling it. If
                the problem goes away, you know that your previous installation
                was somehow damaged.
              </li>
              <li>
                <em>Eliminate potential conflicts with third-party software</em
                >. A good example of where third-party software can often cause
                problems is with
                <a href="https://typechecked.net/a/products/synergy-classic/"
                  >Synergy</a
                >, which talks to iTunes. Before reporting a bug in Synergy, you
                should review your system and see if you have any other
                third-party software installed that talks to iTunes and could be
                interferring. Try to reproduce the issue when the other software
                is uninstalled or disabled. If you can't reproduce it, then you
                know you've discovered a conflict.
              </li>
              <li>
                <em>Try from another user account</em>. If you don't have
                another user account on your machine, create one. If you can't
                reproduce the problem then you know something specific to your
                user account is triggering the problem, which narrows the scope
                of investigation.
              </li>
              <li>
                <em>Try on another machine</em>. If you have access to another
                machine try to reproduce the problem on that machine. This can
                help to identify factors which contribute to the problem (such
                as operating system versions on which the problem exists/don't
                exist; hardware and peripherals which appear related to the
                problem, and so forth).
              </li>
              <li>
                <em>Try rebooting</em>. Rebooting returns your machine to what
                is hopefully a "known good" state, something that may not be
                true if your machine has been running for hours, days or weeks.
                If the problem goes away then you know that something in the
                environment was triggering the issue.
              </li>
              <li>
                <em>Check for a corrupt disk</em>. If you are seeing generalized
                problems it may be a problem with a corrupt disk rather than an
                issue with a specific piece of software. To find out if this is
                the case try booting from the Mac OS X install disc (hold the
                "C" key while restarting with the disc in the drive) and choose
                "Disk Utility" from the Utilities menu; you can then click on
                the "First Aid" tab and try verifying and repairing your
                disk(s).
              </li>
            </ul>

            <h4>Include Crash Reporter logs</h4>

            <p>
              If your bug involves a program crash, look for a crash log in
              ~/Library/Logs/CrashReporter/. You don't need to include
              information about crashes that occurred last year or month; just
              look at the most recent crash. If the log entry is relatively
              short, you can paste it directly into your bug report. If the log
              is very long, you can add it to the bug report as an attachment.
            </p>

            <h4>Use the Activity Monitor</h4>

            <p>
              If the program is hung (stuck, or "beachballing") but hasn't
              crashed, you may be able to collect useful information by doing a
              sample with the Activity Monitor application (in
              /Application/Utilities/). Find the stuck process in the list,
              double-click it to get more information, and then click the
              "Sample" button. The output from the sample could prove useful in
              finding exactly where the program is stuck. If the sample output
              is very long, you should add it to the bug report as an attachment
              rather than pasting it in directly.
            </p>

            <h4>Include relevant system.log and console.log output</h4>

            <p>
              Use the Console application (in "/Applications/Utilities/") to see
              if anything relevant was printed to the system.log or console.log
              files at the time of the problem. Once again, if the amount of
              material is small you can paste it directly into the bug report,
              otherwise add it as a separate attachment.
            </p>

            <p>
              One way to easily catch all console output is to run the
              application from the Terminal instead of double-clicking it in the
              Finder. As an example, let's imagine that you want to run a copy
              of
              Synergy Advance installed
              in your <tt>/Applications/</tt> folder; you would enter the
              following commands (split across multiple lines for readability):
            </p>

            <pre>
cd "/Applications/Synergy Advance.app"
cd Contents/MacOS
"./Synergy Advance"</pre
            >

            <p>
              Another way of doing this is to type <tt>cd</tt>
              <em>followed by a space</em>, then drag-and-drop the application
              icon onto the Terminal window and press the Enter key. This will
              change into the directory that corresponds to the application's
              bundle. You then could just type:
            </p>

            <pre>"Contents/MacOS/Synergy Advance"</pre>

            <p>
              Yet another way is to right-click or control-click on the
              application bundle in the Finder, choose "Show package contents"
              from the contextual menu, navigate to the "Contents/MacOS/"
              folder, and then drag the application's executable file (the file
              inside "Contents/MacOS/") into the Terminal and press the Enter
              key.
            </p>

            <h4>Attach System Profiler reports</h4>

            <p>
              I do all my development using hardware and software that is as
              stock-standard as possible. I minimize the number of third-party
              products installed on the computer and I do my best not to connect
              any exotic hardware or peripherals. I do this because I want to
              know that my software is going to work on the from-the-factory
              hardware that 90 or 95% of Mac users have on their desktops.
            </p>

            <p>
              By attaching a System Profiler report you can help me to identify
              differences between my stock-standard machine and yours,
              differences which may help to troubleshoot the problem.
            </p>

            <p>
              To produce a report, open the System Profiler (in
              "/Applications/Utilities/"; alternatively, you can choose "About
              this Mac" from the Apple menu and then click the button for more
              information). In System Profiler, choose "Export" (as plain text)
              from the "File" menu. These reports are often quite large in size,
              so you should generally attach them to the bug rather than pasting
              them directly into the bug. In addition, the reports can contain
              large and irrelevant chunks of logs. It's generally fine to open
              the report in a text editor and cut out all the logs. The parts of
              interest are the hardware configuration and the installed
              software.
            </p>

            <p>
              Even if you don't attach a report, at the very least your bug
              report should include information about which version of Mac OS X
              you are running, on what hardware, and whether you have any
              peripherals connected or third-party software that might conflict.
            </p>

            <h4>
              Distinguish between bug reports, crashes and feature requests
            </h4>

            <p>
              The bugzilla database is used not only for bug reports but also
              for feature requests. If you are making a feature request, make
              sure the summary begins with "REQUEST: ", so as to distinguish it
              from the bug reports. If you are reporting a crashing bug, start
              the summary with "CRASH: ", so as to make it stand out from
              non-crashing bugs.
            </p>

            <h4>Reproducibility is paramount</h4>

            <p>
              If you've read the bug writing guides I mentioned above like
              <a
                href="http://www.mozilla.org/quality/bug-writing-guidelines.html"
                >this one</a
              >, then you'll know that the reproducibility is <em>the</em> most
              important factor in getting a bug squished. In contrast, the
              enemies of getting bugs fixed are vagueness and imprecision.
              Here's an example of the latter:
            </p>

            <blockquote>
              The app stuffs up half the time whenever I try to skip tracks. I
              can't remember this happening with the last version.
            </blockquote>

            <p>
              It's very unlikely that such a bug will be fixed because it's not
              reproducable. Furthermore, the description is vague and imprecise,
              because the reporter doesn't define what is meant by "stuff up".
              Does it mean that the software crashes? Freezes? Does nothing?
              Does something, but not what was expected? And here is the same
              issue, written well:
            </p>

            <blockquote>
              Since upgrading from 1.3 I get the spinning beachball cursor
              whenever I try to skip tracks using the mouse. This happens 100%
              of the time. After a minute or two the beachball goes away. The
              problem doesn't occur at all when I use the hot keys to skip
              tracks.
            </blockquote>

            <p>
              This reporter will get bonus marks if he or she also includes some
              background information like this:
            </p>

            <blockquote>
              This is on Mac OS X 10.3.4, iMac G5, no third-party hardware or
              peripherals connected. I am running iPod2iTunes as well. Have
              tried reinstalling, rebooting, and running from other user
              accounts, but it keeps happening.
            </blockquote>

            <h4>One issue per bug report</h4>

            <p>
              And one final pointer: make sure that your bug reports only
              contain one issue per report. Multiple issues in the same report
              make the process of zeroing in on the causes more difficult, and
              they hinder collaboration. If you file a report with multiple
              issues you'll be asked to file separate reports for each issue.
            </p>

            <p>
              Thanks for taking the time to read this guide, and thanks for
              contributing to the effort to squish those bugs!
            </p>
          </div>
        </div>

        <p class="posted">Posted by wincent at November 25, 2004 7:26 PM</p>
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
