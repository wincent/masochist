<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="generator" content="http://www.movabletype.org/" />

    <title>Knowledge base: Mac OS X Tiger: Initial response</title>

    <link rel="stylesheet" href="/a/styles.css" type="text/css" />

    <link
      rel="start"
      href="https://typechecked.net/a/knowledge-base/"
      title="Home"
    />
    <link
      rel="prev"
      href="https://typechecked.net/a/knowledge-base/archives/2005/05/keeping_subvers.php"
      title="Keeping Subversion alive and other notes on the update to Mac OS X 10.4"
    />

    <link
      rel="next"
      href="https://typechecked.net/a/knowledge-base/archives/2005/05/building_subver_1.php"
      title="Building Subversion 1.2 on Mac OS X 10.4.1"
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
            href="https://typechecked.net/a/knowledge-base/archives/2005/05/keeping_subvers.php"
            >&laquo; Keeping Subversion alive and other notes on the update to
            Mac OS X 10.4</a
          >
          |

          <a href="https://typechecked.net/a/knowledge-base/">Main</a>
          |
          <a
            href="https://typechecked.net/a/knowledge-base/archives/2005/05/building_subver_1.php"
            >Building Subversion 1.2 on Mac OS X 10.4.1 &raquo;</a
          >
        </p>

        <h2>May 16, 2005</h2>

        <h3>Mac OS X Tiger: Initial response</h3>

        <p>
          I've now had a few weeks to play with Tiger and wanted to post some
          brief comments about it. In many ways it's the best operating system
          ever to come out of Cupertino (or anywhere else in the world) but
          there are still some problems with it and I hope Apple can correct
          them in the forthcoming point updates.
        </p>

        <div id="a000069more">
          <div id="more">
            <h4>Spotlight</h4>

            <p>
              Wow. What a lot of potential. Unfortunately, it's still mostly
              unrealized potential and hasn't been capitalized upon yet.
            </p>

            <p>
              Thanks to Spotlight you should never have to navigate to the
              Applications folder again. At least, that's the theory. Spotlight
              is so slow that I can easily type the entire name of an
              application before it appears in the search results list. For
              example, if I want to launch the Keychain Access application I can
              type "Acceso a Llaves" (that's what it's called on my Spanish
              system) and watch as it takes nearly a full minute to return any
              meaningful results. Sadly in almost all cases its quicker to
              launch an application by navigating to it in the Finder using your
              trusty old mouse.
            </p>

            <p>
              It doesn't prioritize results on the basis of the ordering I've
              set in the Spotlight preferences either. For example, I've dragged
              "Applications" to near the top of the list but Application search
              results are often the very last to be returned in a search.
            </p>

            <p>
              The general slowness of the Spotlight UI can be a problem in other
              ways. Even moderately fast typers will often see Spotlight failing
              to keep up with their typing. Hit Command-Space (that's the
              shortcut I have to open the Spotlight search bar) and immediately
              start typing and you'll often find that only the second half of
              the word you type appear in the search bar appears. The first half
              is simply lost. Goodness knows where it gets sent. When this is
              combined with the fact that the search only matches items where
              the beginning of your query string matches the beginning of a word
              in the file name and you often don't get results (for example,
              "ystem Preferences" does not return the System Preferences
              application but "System Preferences" does). I often see beachballs
              in the Spotlight search bar as well.
            </p>

            <p>
              I
              <a href="http://bugreporter.apple.com/"
                >filed a number of bugs with Apple</a
              >
              because I want Spotlight to fulfill its potential. I suggest you
              do the same; it's the only way they'll listen. Here are some
              suggested things you could file bug reports about:
            </p>

            <p><em>How do you search inside bundles?</em> Answer: you can't.</p>

            <p>
              <em
                >Why does Apple explicitly exclude the Developer documentation
                from Spotlight searches?</em
              >
              It would seem one of the most logical places in the world that one
              would want to search.
            </p>

            <p>
              <em
                >Why can't you use the Finder to find files on your disk when
                you <strong>know</strong> that they exist?</em
              >
              For example, try to find "httpd.conf" using the Finder. You can't.
              The only way to find it is to go to the Terminal and use the
              "find" or "locate" commands. It seems that the "Finder" isn't
              living up to its name. There's no way to correct this shortcoming,
              even using advanced search criteria.
            </p>

            <p>
              <em
                >Why can't you create smart folders or search based on full
                paths (the kMDItemPath attribute)?</em
              >
              Answer: because Apple's metadata importers don't set this
              attribute on any files at all. My bug report for this one
              (4112685) was immediately closed as a duplicate.
            </p>

            <p>
              <em>How do you distinguish between extremely similar results?</em>
              What do you do when you get a lot of results with the same name?
              The Spotlight search bar provides you with no help at all and the
              "Show all" window is in dire need of a better preview mechanism
              and path display (as well as type-ahead find). You currently have
              to click a tiny "i" button or use the cursor keys to expose
              preview information when moving the selection should be enough to
              display a preview. The same problem occurs when using the search
              facility inside file dialogs. Type in a file name: how do you
              distinguish between multiple copies with the same name?
            </p>

            <p>
              But like I said, Spotlight has a lot of potential.
              <a
                href="http://www.macosxhints.com/article.php?story=20050501190159752"
                >This hint</a
              >
              shows how you can do raw queries in the Finder to find just about
              anything at all, including complicated boolean searches.
              Unfortunately, this too is of limited use because I find that most
              such queries crash the Finder or give me the spinning beachball.
              One guaranteed beachballer is to try searching for files of type
              "Xcode project files" and then add another criterion or two. Watch
              as the Finder CPU usage approaches 100%, beachballs and finally
              dies.
            </p>

            <h4>Mail</h4>

            <p>
              There have been lots of improvements here. I'm a big fan of the
              better control over signatures, the better handling of incorrect
              password attempts when signing or encrypting messages, and the
              unbelievable search speed. Some have reported that the new Mail is
              too slow, but for me its faster exactly where it needs to be: in
              searches. Not only is it fast, it's also robust. Previous versions
              of Mail would refuse to find mails even when I knew they were in
              the corpus and could navigate to them manually. Another nice touch
              is that the mailboxes list scrolls orders of magnitude faster.
            </p>

            <h4>Xcode</h4>

            <p>
              Most of the counter-intuitive splitter behaviour bugs have been
              fixed, invisible characters in text are now shown (hooray), the
              user interface is faster and more stable, you can now open
              multiple dependent projects at once without the whole thing
              getting exponentially slower, the SCM integration seems more
              robust, the autoupdating of the documentation is fabulous, and the
              progress bar in Dock icon is useful. There is a serious bug with
              dependent projects in which you can't open more than one project
              at a time unless you open in the right order (another work around
              is to make some non-project window such as the build results
              window frontmost before trying to open the dependent project); my
              report for this (4103756) was immediately closed as a duplicate.
            </p>

            <h4>Interface Builder</h4>

            <p>
              The UI is more polished and as a whole the application seems more
              stable.
            </p>

            <h4>General comments</h4>

            <p>
              The optimizations to Quartz in Tiger are fabulous. Window resizing
              is much more responsive and the new QuickTime Player is very
              slick. There is no doubt that Tiger is much, much faster at many
              things. Dashboard is neat and is even more useful when you know
              that you can close any
              <a
                href="http://www.macosxhints.com/article.php?story=20050425041434294"
                >dashboard widget by holding the option key</a
              >, or
              <a
                href="http://www.macosxhints.com/article.php?story=20050422172929402"
                >detach widgets from the dashboard</a
              >
              at will.
            </p>

            <p>
              Mac OS X Hints is a valuable resource right now for tips
              <a
                href="http://www.macosxhints.com/article.php?story=20050424201429961"
                >like this one</a
              >, but the sad truth is that you shouldn't have to resort to these
              kinds of measures to oblige Spotlight (kicking and screaming) to
              do what you want. The Spotlight preferences panel needs a lot of
              work... On the bright side, things can only get better from here.
            </p>
          </div>
        </div>

        <p class="posted">Posted by wincent at May 16, 2005 12:06 PM</p>
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
