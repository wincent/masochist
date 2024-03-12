<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="generator" content="http://www.movabletype.org/" />

    <title>Knowledge base: Clamping down on spam</title>

    <link rel="stylesheet" href="/a/styles.css" type="text/css" />

    <link
      rel="start"
      href="https://wincent.dev/a/knowledge-base/"
      title="Home"
    />
    <link
      rel="prev"
      href="https://wincent.dev/a/knowledge-base/archives/2006/06/freshclam_probl.php"
      title='freshclam: "Problem with internal logger"'
    />

    <link
      rel="next"
      href="https://wincent.dev/a/knowledge-base/archives/2006/08/knowledge_base.php"
      title="Knowledge base in wiki format"
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
          >2006</a
        >&nbsp;&gt;&nbsp;06
      </p>
    </div>

    <div id="container">
      <div class="content">
        <p align="right">
          <a
            href="https://wincent.dev/a/knowledge-base/archives/2006/06/freshclam_probl.php"
            >&laquo; freshclam: "Problem with internal logger"</a
          >
          |

          <a href="https://wincent.dev/a/knowledge-base/">Main</a>
          |
          <a
            href="https://wincent.dev/a/knowledge-base/archives/2006/08/knowledge_base.php"
            >Knowledge base in wiki format &raquo;</a
          >
        </p>

        <h2>June 21, 2006</h2>

        <h3>Clamping down on spam</h3>

        <p>
          I run <a href="http://spamassassin.apache.org/">SpamAssassin</a> on my
          mail server (anti-spam). I also run
          <a href="http://clamav.net/">ClamAV</a> (anti-virus). After
          extensively trialing ClamAV I was convinced of its reliability and
          decided to have it automatically delete all detected incoming viruses.
          SpamAssassin still produces far too many false positives and false
          negatives for me to perform such deletion but I decided today that I
          wanted to tighten things up a little bit.
        </p>

        <div id="a000353more">
          <div id="more">
            <h3>Step 1: Getting tough on non-English messages</h3>

            <p>
              A huge proportion of the spam I receive is in non-English
              languages. I've often wondered why SpamAssassin has allowed waves
              of incoming messages to spill into my inbox consisting entirely of
              unreadable (at least for me) hieroglyphics when at other times it
              marks legitimate messages from my friends as spam. Almost all of
              my legitimate correspondence is in either English or Spanish.
              Very, very occasionally I get a customer inquiry written in French
              or German.
            </p>

            <p>
              So I am prepared to make SpamAssassin get tough on non-English
              (and non-Spanish) messages at the expensive of risking a few very
              rare false positives; and such false positives are easily
              distinguished from spam messages with subjects like
              "-6月23-24日（深-圳）开-讲-" and "Автомобильные шины и диски!
              Низкие цены!", thanks to familiar words like "<a
                href="http://wincent.dev/"
                >Synergy</a
              >" in their subject lines.
            </p>

            <p>
              So the first thing I did was add this to my
              <tt>~/.spamassassin/user_prefs</tt> file:
            </p>

            <pre># Mail using languages used in these country codes will not be marked
# as being possibly spam in a foreign language.
# - english spanish 
ok_languages            en es 
<br />
# Mail using locales used in these country codes will not be marked
# as being possibly spam in a foreign language.
# - en  Western character sets in general
ok_locales              en</pre>

            <p>
              This change immediately made a big difference; notice how many
              points were derived from the non-English aspects of the first
              incoming spam message that I received after making the changes:
            </p>

            <pre>
  Content analysis details:   (14.10 points, 5 required)
  UNDESIRED_LANGUAGE_BODY (4.0 points)  BODY: Written in an undesired language
  CHARSET_FARAWAY    (3.2 points)  BODY: Character set indicates a foreign language
  BODY_8BITS         (1.5 points)  BODY: Body includes 8 consecutive 8-bit characters
  MSG_ID_ADDED_BY_MTA_3 (0.7 points)  'Message-Id' was added by a relay (3)
  CHARSET_FARAWAY_HEADERS (2.1 points)  A foreign language charset used in headers
  DATE_IN_FUTURE_24_48 (2.6 points)  Date: is 24 to 48 hours after Received: date</pre
            >

            <p>
              Compare this with a similar, obviously spam message received prior
              to making the changes and which easily slipped past SpamAssassin
              without being tagged:
            </p>

            <pre>
X-Spam-Status: No, hits=1.6 required=5.0
	tests=HTML_60_70,HTML_FONT_BIG,HTML_FONT_COLOR_BLUE,
	      HTML_FONT_COLOR_RED,HTML_MESSAGE,MANY_EXCLAMATIONS,
	      MIME_HTML_ONLY</pre
            >

            <p>
              These changes mean that foreign language spam will be caught much
              more often by SpamAssassin from here on, and being a user-level
              preference setting I can make the change without affecting other
              users on the same mail server.
            </p>

            <h3>Step 2: Diverting spam into a separate mailbox</h3>

            <p>
              The next thing I did was automatically divert messages that are
              very likely to be spam (those that score 15 or over) into a
              separate mailbox on the server. Messages that score between 5 and
              15 continue to be tagged by SpamAssassin and I filter them on my
              local machine using
              <a href="http://c-command.com/spamsieve/">SpamSieve</a>.
            </p>

            <p>
              This is done by creating a <tt>~/.procmailrc</tt> file with the
              following contents:
            </p>

            <pre>
# mail very likely to be spam (&gt;= 15) quarantined in "spam" folder
:0
* ^X-Spam-Level: \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
spam
#/dev/null</pre
            >

            <p>
              Ideally, messages in the less-than-5 range will be legitimate and
              contain very few false negatives. Messages in the 15-and-greater
              range will hopefully be spam 100% of the time and if an extended
              trial supports this then I'll mark them for automatic deletion.
              The remaining messages (in the 5 to 15 range) should be mostly
              spam with very few false positives which I can manually check with
              a quick visual scan in Mail.app. The truth is that SpamSieve does
              such an excellent job (much better than SpamAssassin) that I don't
              use SpamAssassin's score as a basis for sorting my mail; I just
              let SpamSieve do its job and SpamAssassin's role is reduced to a
              simple message tagger.
            </p>

            <h3>Step 3: Automatically deleting spam</h3>

            <p>
              Once I am convinced that the set-up works I'll change my
              <tt>.procmailrc</tt> file to this:
            </p>

            <pre>
# mail very likely to be spam (&gt;= 15) quarantined in "spam" folder
:0
* ^X-Spam-Level: \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
#spam
/dev/null</pre
            >

            <p>
              Now the only remaining issue for me with SpamAssassin is
              <a
                href="http://issues.apache.org/SpamAssassin/show_bug.cgi?id=4065"
                >this bug</a
              >, long ago fixed but probably never to be backported to the older
              version that comes with Red Hat Enterprise Linux ES 3. I find that
              I can't override the weighting of the defective
              <tt>FORGED_MUA_OUTLOOK</tt> rule because it would allow too much
              spam to slip under the radar; so the workaround is to instead use
              <tt>whitelist_from</tt> directives in my user preferences file to
              handle the few cases in which this bug actually causes legitimate
              email to be misclassified as spam.
            </p>

            <p>
              So that auto-deleted messages don't just disappear into the ether
              without a trace you could add logging for them like this:
            </p>

            <pre>LOGFILE=$HOME/procmail.log
VERBOSE=off
LOGABSTRACT=all
<br />
# mail very likely to be spam (>= 15) piped directly to /dev/null
:0
* ^X-Spam-Level: \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
/dev/null
<br />
# clean the environment before continuing
LOGFILE=
LOGABSTRACT=
VERBOSE=</pre>

            <p>
              This will produce log messages like this in the
              <tt>procmail.log</tt> file for each auto-deleted spam:
            </p>

            <pre>
From yuumi_basel0903@grate.half-time.info  Tue Jun 27 10:24:03 2006
 Subject: [SPAM] 
  Folder: /dev/null                                                       14890</pre
            >

            <p>
              Needless to say it is probably a good idea to check this log file
              frequently to be sure that legitimate messages and getting blown
              away.
            </p>

            <h3>Update: Step 4: Enabling auto-whitelisting</h3>

            <p>
              The old version of SpamAssassin that comes with Red Hat Enterprise
              Linux ES 3 doesn't have the auto-whitelisting feature enabled by
              default. I've decided to turn it on to see if improves
              SpamAsssasin's abysmal accuracy. Overnight I received 213 spam
              messages; of these:
            </p>

            <ul>
              <li>
                None crossed the 15 point threshhold, not even the "spammiest"
                ones.
              </li>
              <li>
                SpamSieve identified all 213 messages correctly as spam (100%
                accuracy, 0 false positives, 0 false negatives).
              </li>
              <li>
                Only 92 were tagged as spam by SpamAssassin (43% as accurate as
                SpamSieve).
              </li>
            </ul>

            <p>So I changed my procmail recipe from:</p>

            <pre>
# Filter messages through SpamAssassin:
# - use a lock file to reduce load
# - only filter files less than 256KB in size (save CPU/memory)
:0fw: spamassassin.lock
* &lt; 256000
| /usr/bin/spamassassin</pre
            >

            <p>To:</p>

            <pre>
# Filter messages through SpamAssassin:
# - use a lock file to reduce load
# - only filter files less than 256KB in size (save CPU/memory)
# - the "-a" switch enables the auto-whitelisting feature of SpamAssassin
:0fw: spamassassin.lock
* &lt; 256000
| /usr/bin/spamassassin -a</pre
            >

            <h3>Update: Step 5: Bayesian training</h3>

            <p>
              In an effort to improve on SpamAssassin's poor accuracy (only 43%
              as accurate as SpamSieve even with auto-whitelisting turned on) I
              decided to do some Bayesian training. It is necessary to train the
              filter using both spam and ham (non-spam) messages.
            </p>

            <p>
              I had 1558 recent spams on hand that had been sent to my business
              account, and 547 sent to my personal account. I moved these into a
              new IMAP mailbox called "train-spam" in each account.
            </p>

            <p>
              I then grabbed the 1558 most recent ham messages for my business
              account using Mail.app's powerful search facility (which allows
              you to select multiple mailboxes and sort search results by date).
              I did the same to locate 547 ham messages sent to my personal
              account. I copied (not moved) these messages to a new IMAP mailbox
              called "train-ham" in each account. Copying can be achieved in
              Mail.app just like in the Finder by holding down the Option key
              while dragging.
            </p>

            <p>
              My first attempts at using <tt>sa-learn</tt> on the server were
              problematic because the training has to be run as the user to whom
              the account belongs, but on my server such accounts do not have
              shell access. I tried using <tt>sudo</tt> but this didn't work:
            </p>

            <pre>
$ sudo -u john%example.com sa-learn --showdots --spam --mbox /home/john%example.com/mail/train-spam
Password: [enter password of admin account]
Failed to create default user preference file /home/xxxxxx/.spamassassin/user_prefs
lock: 12345 cannot create tmp lockfile /home/xxxxxx/.spamassassin/bayes.lock.x.12345 for /home/xxxxxx/.spamassassin/bayes.lock: Permission denied</pre
            >

            <p>
              As you can see this allowed the command to run as the correct user
              but it still tried writing to files in another home directory. I
              then tried using <tt>su</tt> but that didn't work because the
              email accounts do not have login shells.
            </p>

            <pre>
$ su john%example.com ls
Password: [enter password of email account]
This account is currently not available.</pre
            >

            <p>
              My first workaround was to temporarily enable login shells for
              those accounts and <tt>su</tt> to them before training, but I then
              went in search of a better solution. It turns out that the
              <tt>-H</tt> switch to <tt>sudo</tt> was what was needed; this sets
              the <tt>HOME</tt> environment variable before executing the
              command:
            </p>

            <pre>
$ sudo -u john%example.com -H sa-learn --showdots --spam --mbox /home/john%example.com/mail/train-spam</pre
            >

            <p>
              There was still one problem to solve. Training using this command
              produced lots of messages about problems untainting paths:
            </p>

            <pre>
security: cannot untaint path: "/home/john%example.com/.spamassassin"
security: cannot untaint path: "/home/john%example.com/.spamassassin/user_prefs"
security: cannot untaint path: "/home/john%example.com/.spamassassin"
security: cannot untaint path: "/home/john%example.com/.spamassassin/bayes"
security: cannot untaint path: "/home/john%example.com/.spamassassin"
security: cannot untaint path: "/home/john%example.com/.spamassassin/bayes"</pre
            >

            <p>
              I filed
              <a
                href="http://issues.apache.org/SpamAssassin/show_bug.cgi?id=4968"
                >a bug report</a
              >
              with the SpamAssassin team and it looks like the problem will be
              fixed for version 3.2.0 of SpamAssassin. I also made the
              <a
                href="http://issues.apache.org/SpamAssassin/attachment.cgi?id=3560"
                >necessary changes</a
              >
              on my local install.
            </p>

            <p>
              My plan is to use the initial training run as a base and from here
              on do mistake based training. This means feeding only false
              positives and false negatives back to SpamAssassin back for
              training.
              <a
                href="http://crm114.sourceforge.net/Plateau99.pdf"
                title="The Spam Filtering Plateau at 99.9% Accuracy and How to Get Past It."
                >My reading</a
              >
              indicates that mistake based training is the best in the long run.
              Here is a short script I threw together to automate future runs of
              the training process:
            </p>

            <pre>#!/bin/sh
<br />
USERS="john%example.com barry%example.com"
<br />
echo "Starting SpamAssassin training run: will use sudo to run sa-learn as appropriate user(s)."
sudo -v
<br />
for USER in ${USERS}
do
  echo "Spam training for user ${USER}:"
  sudo -u "${USER}" -H sa-learn --showdots --spam --mbox "/home/${USER}/mail/train-spam" 
  echo "Ham training for user ${USER}:"
  sudo -u "${USER}" -H sa-learn --showdots --ham --mbox "/home/${USER}/mail/train-ham" 
done
<br />
echo "Training run complete: you should now empty the train-spam and train-ham folders for these users:"
echo "  ${USERS}"</pre>

            <p>
              So after training for a few days accuracy is greatly improved but
              there is still a long way to go before SpamAssassin catches up
              with SpamSieve. It seems that without Bayesian training,
              SpamAssassin is next to useless. We'll see how accurate it can
              become after more training.
            </p>

            <p>
              Last night in an approximately 12 hour period I obtained the
              following results:
            </p>

            <ul>
              <li>86 spams received in total</li>
              <li>
                100% correct identification rate by SpamSieve; 0 false
                positives, 0 false negatives
              </li>
              <li>
                SpamAssassin was 64% as accurate as SpamSieve (55 messages
                classified as spam); 0 false positives, 31 false negatives
              </li>
            </ul>

            <h3>Update: Performance after one week</h3>

            <ul>
              <li>
                The total incoming message count was approximately 1904
                messages.
              </li>
              <li>
                Approximately 1020 ham messages made it through to the client.
              </li>
              <li>Approximately 884 spam messages were received in all.</li>
              <li>
                That figure includes the 332 messages that SpamAssassin gave a
                score higher than 15 and auto-deleted them at the server (8
                messages sent to my personal address, 324 messages sent to my
                business address); these messages were never downloaded to the
                client and were never seen by SpamSieve.
              </li>
              <li>
                SpamSieve incorrectly classified 4 spam messages as ham (4 false
                negatives).
              </li>
              <li>
                SpamSieve incorrectly classified 2 ham messages as spam (2 false
                positives).
              </li>
              <li>
                SpamSieve's overall accuracy rate was 99.68% (6 errors in
                total).
              </li>
              <li>
                Of the spam messages that made it through to the client,
                SpamAssassin correctly labelled 464 as spam (163 sent to my
                personal address and 301 sent to my business address).
              </li>
              <li>
                In other words, SpamAssassin failed to label about 420 spam
                messages as spam.
              </li>
              <li>
                SpamAssassin's accuracy rate was approximately 78% overall.
              </li>
              <li>
                SpamAssassin's error rate for false negatives was 70 times worse
                than SpamSieve's.
              </li>
            </ul>

            <p>
              So, I will continue to train SpamAssassin on its errors, but it
              seems unlikely that it will ever catch up with SpamSieve. Seems
              like I'm approaching the limit of possible accuracy using the
              SpamSieve/SpamAssassin pair, so I have a few more steps in mind
              that I can use to reduce the amount of spam that gets to the
              filters in the first place... watch this space for more details.
            </p>
          </div>
        </div>

        <p class="posted">Posted by wincent at June 21, 2006 3:40 PM</p>
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
