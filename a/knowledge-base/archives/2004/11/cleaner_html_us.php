<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="generator" content="http://www.movabletype.org/" />

    <title>Knowledge base: Cleaner HTML using CSS</title>

    <link rel="stylesheet" href="/a/styles.css" type="text/css" />

    <link
      rel="start"
      href="https://wincent.dev/a/knowledge-base/"
      title="Home"
    />

    <link
      rel="next"
      href="https://wincent.dev/a/knowledge-base/archives/2004/11/localization_on.php"
      title="Localization on Mac OS X"
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
        >&nbsp;&gt;&nbsp;11
      </p>
    </div>

    <div id="container">
      <div class="content">
        <p align="right">
          <a href="https://wincent.dev/a/knowledge-base/">Main</a>
          |
          <a
            href="https://wincent.dev/a/knowledge-base/archives/2004/11/localization_on.php"
            >Localization on Mac OS X &raquo;</a
          >
        </p>

        <h2>November 10, 2004</h2>

        <h3>Cleaner HTML using CSS</h3>

        <p>
          <a href="http://www.w3.org/Style/CSS/">CSS</a>, or Cascading Style
          Sheets, have been around for a while now, but I don't think I've ever
          truly "gotten" them, until this week that is... Years ago, back in the
          days of Netscape Navigator 4, I had a brief play with them. They
          promised to deliver a greater degree of control over the final
          appearance of the page. In fact, many even argued that you could throw
          out tables and use CSS to do layout (examples
          <a href="http://glish.com/css/">here</a> and
          <a href="http://www.bluerobot.com/web/layouts/">here</a>).
        </p>

        <p>
          The trouble was,
          <a href="http://www.microsoft.com/">one company in particular</a>
          didn't support CSS very well, requiring all sorts of
          <a href="http://www.positioniseverything.net/articles/hollyhack.html"
            >hacks</a
          >
          to get it to display correctly. This seemed like a travesty in the
          21st century with <a href="http://www.mozilla.org/">Mozilla</a> and
          others championing the cause of standards-compliance. It seemed that
          the ugly hacks required to get CSS to work on all browsers were not
          much better than the complicated nested tables that they replaced.
          Over the years I've periodically checked back to see what the state of
          play was in the realm of CSS. In general it was something that I
          tacked on to my pages where I thought it wouldn't break things, but it
          didn't really revolutionize the way I went about designing my pages.
        </p>

        <p>
          All that seems to be changing. Thanks to
          <a href="http://www.apple.com/safari/">Safari</a> and it's WebKit
          engine (also used in
          <a href="http://www.omnigroup.com/applications/omniweb/">OmniWeb</a>),
          and the host of browsers using the Mozilla Gecko engine (such as
          <a href="http://www.mozilla.org/products/camino/">Camino</a>,
          <a href="http://www.mozilla.org/products/firefox/">FireFox</a> and of
          course
          <a href="http://www.mozilla.org/products/mozilla1.x/"
            >Mozilla itself</a
          >), I can now write standards-compliant web pages and be confident
          that around 99% of my intended audience will see them as I intended
          them to be seen. <a href="http://www.opera.com/">Opera</a> also does a
          great job of compliance, and even Microsoft's browsers tend to display
          simple pages more or less correctly, even if they don't end up fully
          supporting every little touch and feature that you've added.
        </p>

        <p>
          I'm a Mac software developer, which puts me in a very special
          position. I know that most of my visitors will be using Macs, and
          they'll see what they should be seeing. Those who visit using Windows
          machines will see something reasonably close, because my pages are
          fairly clean and simple.
        </p>

        <p>It's a great time to be a web designer.</p>

        <p>
          With that lengthy preamble out the way, the rest of this article will
          talk about what I think is the real strength of well-prepared CSS:
          it's ability to help you write clean HTML.
        </p>

        <div id="a000018more">
          <div id="more">
            <h3>How to use (and not use) CSS</h3>

            <p>
              It's only in these last few days that I've finally "gotten" CSS.
              It's just like Object-Oriented Programming (OOP), in a way. In
              OOP, you minimize redundancy and maximize code re-use by moving
              common elements "up" the hierarchy. With CSS, you do the same: you
              move common styling information "up" (from the HTML into CSS
              styles), and in fact you can even move it right out into a
              separate file. That's what I've done with the current design for
              <a href="https://wincent.dev/">wincent.dev</a>; there's
              <a href="https://wincent.dev/a/styles.css"
                >only one style sheet</a
              >
              on the whole website, and every other page makes use of it.
            </p>

            <p>
              There's a clear advantage there in terms of style re-use. Change
              that one style sheet and everything else gets updated
              automatically.
            </p>

            <p>
              But it wasn't until I read this
              <a href="http://css.maxdesign.com.au/selectutorial/"
                >excellent tutorial on CSS selectors</a
              >
              by
              <a href="http://www.maxdesign.com.au/presentation/">Max Design</a>
              that I realized there was another benefit that I hadn't seen
              before. I suddenly realized how much cleaner my HTML could become
              if I just started using selectors wisely. Use selectors wisely and
              you'll not only move more styling information "up" and out of your
              HTML, but you'll get the corollary benefit that your HTML source
              is infinitely more readable and better looking.
            </p>

            <p>
              The key thing to bear in mind is this:
              <em
                >Override existing HTML elements to produce the look you
                want</em
              >.
            </p>

            <p>
              You can also think of this conversely, as:
              <em
                >Don't write special classes for each and every type of
                element</em
              >.
            </p>

            <p>
              Applied judiciously, these two little ideas will help you to write
              shorter, more compact style sheets, and much better looking HTML.
              Let's demonstrate this by looking at an example of what not to do.
              Imagine a web page that has the following content:
            </p>

            <pre>
&lt;div id="container"&gt;
  &lt;p class="subheading"&gt;Acknowledgements&lt;/p&gt;
  &lt;p class="body-paragraph"&gt;Thanks to everybody at WorkCo, my family, and my lovely children.&lt;/p&gt;
&lt;/div&gt;</pre
            >

            <p>Imagine that it also has some other content in a sidebar:</p>

            <pre>
&lt;div id="sidebar"&gt;
  &lt;p class="sidebar-subheading">Links&lt;/p&gt;
  &lt;p class="link-group-heading">Webmail providers&lt;/p&gt;
  &lt;ul class="sidebar-link-list"&gt;
    &lt;li class="sidebar-link-list-item"&gt;&lt;a href="http://mac.com/">mac.com&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</pre
            >

            <p>
              This is an atrocious example of CSS gone wrong. You can imagine
              the entire site peppered with hundreds of different styles, and
              the accompanying, gargantuan, style sheet. It's true that the
              author has moved lots of HTML attributes out of the HTML, but it's
              been only to replace them with a myriad of CSS class names. All of
              this looks very difficult to maintain; the class names are hard to
              remember and easy to misspell. There are too many of them.
            </p>

            <p>
              With intelligent use of selectors the same examples could be
              written like this:
            </p>

            <pre>
&lt;div id="container"&gt;
  &lt;h3&gt;Acknowledgements&lt;/h3&gt;
  &lt;p&gt;Thanks to everybody at WorkCo, my family, and my lovely children.&lt;/p&gt;
&lt;/div&gt;
&lt;div id="sidebar"&gt;
  &lt;h3&gt;Links&lt;/h3&gt;
  &lt;h4&gt;Webmail providers&lt;/h4&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="http://mac.com/">mac.com&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</pre
            >

            <p>
              Notice how the result is much cleaner. The only CSS visible now
              are the two ids, "container" and "sidebar". The use of standard
              HTML elements like &lt;h3&gt; means that even in ancient browsers
              which don't support CSS, the logical structure of the page will at
              least be visible, even if the exact appearance is not. The example
              in question is very short, but if you imagine it applied to a page
              with a complicated structure or lots of styles, then the benefits
              soon become evident.
            </p>

            <p>
              The key to writing clean HTML like this is to use CSS selectors
              intelligently. In the example above, we can control the style of
              the various elements using CSS like the following. I haven't
              actually shown the style information, but I've indicated the
              selectors we could define to target the element we wish to
              control:
            </p>

            <pre>
#container { /* appearance of things in "container" */ }
#container h3 { /* what do headings look like in "container"? */ }
#container p { /* what do paragraphs look like? */ }
#sidebar { /* appearance of things in "sidebar" */ }
#sidebar h3 { /* major headings in "sidebar" */ }
#sidebar h4 { /* minor headings in "sidebar" */ }
#sidebar ul { /* lists in "sidebar" */ }
#sidebar li { /* list items in "sidebar" */ }</pre
            >

            <p>
              In keeping with what I said about moving things "up" the
              hierarchy, you can use selectors to define the look of things in
              higher-level elements of the page, like the "body" element, or
              something fundamental like the "p" element. By doing this you
              minimize the amount of repetitious styles you need to define in
              your style sheet. And you're not forfeiting any control; notice
              that even though you use the same ("h3") tag in two different
              places, you can still independently control the appearance of each
              instance.
            </p>

            <p>
              Selectors are incredibly powerful things. You're not just limited
              to saying "class X should look like this", nor even things like in
              our example above, "element Y should look like this whenever it
              appears inside Z". You can define targets like "element A should
              look like this whenever it appears inside a B, which appears
              inside a C, which appears inside a D", or "element E should look
              like this whenever it is immediately preceded by element F", or
              "element G should look like this only when its immediate parent is
              element H", and so forth. The level of control possible is truly
              impressive. It's this kind of control that makes the dynamic menus
              that you see above in the navigation bar possible (see
              <a href="http://www.meyerweb.com/eric/css/edge/menus/demo.html"
                >this article</a
              >
              by Eric Meyer for a description of the idea that's behind the
              effect); all of this is down without any JavaScript whatsoever,
              and it's pretty much guaranteed to work in your browser (you're
              not using Internet Explorer, are you?...)
            </p>

            <h4>Conclusion</h4>

            <p>
              The core thing to take from this article is that piece of two-side
              advice:
            </p>

            <ul>
              <li>
                Override existing HTML elements to produce the look you want.
              </li>
              <li>
                Don't write special classes for each and every type of element.
              </li>
            </ul>

            <p>
              And <em>do</em> visit the
              <a href="http://css.maxdesign.com.au/selectutorial/"
                >select tutorial</a
              >
              referred to above so you can learn about the all the ways in which
              you can use selectors to write better CSS.
            </p>
          </div>
        </div>

        <p class="posted">Posted by wincent at November 10, 2004 10:31 AM</p>
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
