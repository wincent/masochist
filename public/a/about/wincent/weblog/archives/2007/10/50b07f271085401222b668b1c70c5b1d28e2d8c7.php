<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="generator" content="http://www.movabletype.org/" />

    <title>Wincent Colaiuta's weblog: Why distributed version control</title>

    <link rel="stylesheet" href="/a/styles.css" type="text/css" />

    <link
      rel="start"
      href="https://typechecked.net/a/about/wincent/weblog/"
      title="Home"
    />

    <link
      rel="prev"
      href="https://typechecked.net/a/about/wincent/weblog/archives/2007/10/ben_collinssuss.php"
      title='Ben Collins-Sussman doesn&apos;t "get" distributed version control'
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
          <a href="https://typechecked.net/a/about/wincent/weblog/"
            ><img
              src="/a/gfx/weblog-header.jpg"
              width="323"
              height="25"
              alt="Wincent Colaiuta's weblog"
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
                  src="/a/gfx/header/about-on.jpg"
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
              src="/a/gfx/header/knowledge-base-off.jpg"
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
          href="../../../../../"
          >About</a
        >&nbsp;&gt;&nbsp;<a href="../../../../">Wincent</a>&nbsp;&gt;&nbsp;<a
          href="../../../"
          >Weblog</a
        >&nbsp;&gt;&nbsp;<a href="../../">Archives</a>&nbsp;&gt;&nbsp;<a
          href="../"
          >2007</a
        >&nbsp;&gt;&nbsp;10
      </p>
    </div>

    <div id="container">
      <div class="content">
        <p align="right">
          <a
            href="https://typechecked.net/a/about/wincent/weblog/archives/2007/10/ben_collinssuss.php"
            >&laquo; Ben Collins-Sussman doesn't "get" distributed version
            control</a
          >
          |

          <a href="https://typechecked.net/a/about/wincent/weblog/">Main</a>
        </p>

        <h2>October 21, 2007</h2>

        <h3>Why distributed version control</h3>

        <p>
          I just got an email from
          <a href="http://www.zathras.de/angelweb/home.htm">Uli Kusterer</a>
          asking me to expand on my
          <a
            href="https://typechecked.net/a/about/wincent/weblog/archives/2007/10/ben_collinssuss.php"
            >comments the other day</a
          >
          that Ben Collins-Sussman doesn't &quot;get&quot; distributed version
          control:
        </p>
        <blockquote>
          Could you maybe elaborate on your reasons as to why distributed
          version control is great? You said it'd take pages, but even just a
          short rundown would be interesting. <br />Does it make feature
          branches easier? Does it encourage people to do more refactoring? Just
          curious to hear someone's opinion on this.
        </blockquote>
        <p>
          I'll answer this with specific reference to
          <a href="https://typechecked.net/wiki/Git">Git</a> seeing that's
          the
          <a
            href="https://typechecked.net/wiki/distributed%20version%20control"
            >distributed version control</a
          >
          system with which I have the most experience. Although I could rave on
          about how Git is the best thing since sliced bread for so many
          reasons, I'll try to limit myself specifically to its distributed
          nature.
        </p>

        <div id="a002824more">
          <div id="more">
            <a name="History"></a>
            <h3>History</h3>

            <p>
              Every &quot;checkout&quot; is actually a full copy of the entire
              remote repository (all its branches, all its history). After a
              while you just get used to the idea that you can rapidly look back
              at any previous tag (previous releases for example) and look at
              any of the branches that are currently under development (unlike
              Subversion where the typical workflow is to check out only the tip
              of the &quot;trunk&quot;). This also means that every checkout is
              a full backup of <em>everything</em> in the history of a project.
              And once you've done this initial &quot;checkout&quot; (called a
              &quot;clone&quot; in Git terminology for obvious reasons) you can
              do all this stuff (look at previous releases, switch branches,
              explore the history) without any network access.
            </p>
            <p>
              Worried about size and speed? Don't. Git has an extremely
              efficient network transfer protocol and repository format which
              makes checkouts comparable in terms of time and space to their
              Subversion counterparts; you'll often be surprised to see that an
              entire Git repository with <em>all</em> the history is as small or
              smaller than the equivalent Subversion checkout (which is just the
              tip of the development history).
            </p>
            <a name="Offline%20operations"></a>
            <h3>Offline operations</h3>

            <p>
              I already touched on this above, but the fact that your local
              &quot;checkout&quot; is a full-fledged repository means that you
              can do basically everything without a network connection: commit
              changes, create branches, perform diffs against any other point in
              the project history, merge, and so forth. You later make your
              changes available to the outside world when you are ready.
            </p>
            <p>
              The oft-cited example is that you can take your work with you on
              the road (in a plane with no network connectivity, for example),
              but you'll enjoy an enormous benefit in working offline even when
              you're in your office with your always-on net connection: the
              reasons are simple:
            </p>
            <ul>
              <li>Working offline is <em>fast</em>.</li>
              <li>
                Working offline provides you with an additional &quot;staging
                area&quot; (your local, private repository): if you commit
                something by mistake you can fix it up before anyone else sees
                it; this in turn means that you can make your history cleaner,
                keep the &quot;noise&quot; down, and can make your development
                easier to understand for others (and for yourself when you come
                back to look at it six months down the track). I use this
                functionality many times a day; you can fix a spelling error or
                add a file that you forget about and update the previous commit
                with <tt>git commit --amend</tt> (the commit message editor is
                conveniently populated with the original commit message so if
                you want you can just accept that and exit the editor).
              </li>
            </ul>
            <a name="Simplicity"></a>
            <h3>Simplicity</h3>

            <p>
              Setting up a Git repository is orders of magnitude simpler than
              setting up a Subversion one. It has to be that way, otherwise all
              this cloning would be tiresome.
            </p>
            <pre>
cd project
git init</pre
            >
            <p>
              That's all you need to set up a repository in the
              <tt>project</tt> directory. Point your webserver at that directory
              and you've just made a publicly-accessible Git repository that
              people can reach via HTTP. Copy the repository onto a USB stick
              and you can take it with you wherever you go. And remember: the
              thing you're carrying around on the USB stick isn't just a working
              copy, it's the entire repository with all of its branches and all
              history.
            </p>
            <p>
              You can also publish repositories over the native Git protocol
              using the <tt>git-daemon</tt> that comes with Git; setting it up
              is dead simple. This is a very efficient access method if you want
              to make your repository available to the public. For private
              repositories SSH access is again dead simple to set up.
            </p>
            <p>
              Finally, you need not &quot;publish&quot; your local repository at
              all if you don't want. Git provides a <tt>git push</tt> command
              that you can use to transmit your changes to remote repositories.
            </p>
            <a name="Collaboration"></a>
            <h3>Collaboration</h3>

            <p>
              This is the point I took special exception with with
              Collins-Sussman the other day.
            </p>
            <blockquote>
              DVCS ... encourages anti-social behavior ... In a nutshell: with a
              centralized system, people are forced to collaborate and review
              each other's work; in a decentralized system, the default behavior
              is for each developer to privately fork the project. They have to
              put in some extra effort to share code and organize themselves
              into some sort of collaborative structure. Yes, I'm aware that a
              DVCS is able to emulate a centralized system; but defaults matter.
              The default action is to fork, not to collaborate! This encourages
              people to crawl into caves and write huge new features, then
              &quot;dump&quot; these code-bombs on their peers, at which point
              the code is unreviewable.
            </blockquote>
            <p>
              His point is totally bogus. Centralized systems don't force people
              to collaborate and review; good policies do. You can work well
              with others with a centralized <em>or</em> distributed system,
              just like you can have a terrible community process with a
              centralized or distributed system.
            </p>
            <p>
              The default isn't to &quot;privately fork&quot; at all. That's
              nonsense. The default is to <em>clone</em>, and all that means is
              that you get a free copy of all the history and branches. At the
              end of the day the way you interact with &quot;upstream&quot; is
              still most likely to be <tt>git diff</tt> and sending a patch to
              the maintainer (although Git actually makes it easier than that by
              providing you with the <tt>git format-patch</tt> and
              <tt>git send-email</tt> tools; you can set-up custom per-user or
              per-repository aliases that make it totally easy to send patches
              to different projects without having to think about who should be
              in the &quot;To:&quot; field and who in the &quot;CC:&quot;).
            </p>
            <p>
              Putting in extra effort to share code? Collins-Sussman has
              evidently never seriously tried out a DVCS. Git in particular
              provides a host of mechanisms that actually make it easier to
              share code &quot;upstream&quot;.
            </p>
            <ul>
              <li>
                Unlike Subversion, Git allows all contributors to be first class
                citizens. With Subversion you can only commit if you have commit
                privileges. With Git you can do anything &quot;the
                maintainer&quot; can do. You can develop your code in small
                steps, committing along the way, reverting changes if necessary,
                ensure its correctness, and then when it's ready for publication
                prepare a patch series that shows the logical steps you took;
                this will be much easier to understand than the monolithic
                &quot;all-at-once&quot; patch that you'd have to send if you
                were working with Subversion. The people upstream are more
                likely to accept your change simply because it will be in a more
                reviewable form, and your code will be of higher quality because
                your source control system enabled you to work in incremental
                steps; in fact, you'll code with more confidence because you
                know that you make commits along the way which serve as
                &quot;snapshots&quot; that you can revert to if the ideas that
                you try out don't work.
              </li>
              <li>
                What do you do if you're working on a feature in Subversion and
                by the time you've finished it and are ready to submit the tip
                of the trunk has already moved along? &quot;Your patch doesn't
                apply cleanly&quot;, say the maintainers, &quot;Please
                resubmit.&quot; Git, on the other hand, was designed with
                collaboration in mind from the outset; it provides the
                <tt>git rebase</tt> command for precisely this purpose. With Git
                you can spend a week working on a change, and prior to
                submitting just do a <tt>git rebase</tt>; Git unwinds your
                changes, pulls down the changes from upstream, then reapplies
                your changes on top of the new &quot;tip of trunk&quot;. Once
                again, your changes are more likely to be accepted because the
                reviewers don't have to look at code which was designed to be
                applied only on last week's trunk.
              </li>
              <li>
                That's really just scratching the surface:
                <tt>git rebase</tt> also allows you to re-order your commits
                before publishing if you want;
                <tt>git add --interactive</tt> allows you to commit hunks of
                file instead of the whole thing, thus allowing you to split up
                unrelated changes into different commits, again facilitating
                review and increasing the likelihood of acceptance.
              </li>
            </ul>
            <p>
              Finally, if you want to use Git as though it were centralized it's
              perfectly easy and natural to do so. Can Collins-Sussman actually
              cite any projects that are using Git without a central
              &quot;authoritative&quot; repository that all other developers use
              as a reference point?
            </p>
            <a name="Flexibility"></a>
            <h3>Flexibility</h3>

            <p>
              You're not limited to just cloning &quot;the upstream&quot;
              repository. Just say you start working on a feature and later
              learn that someone else is doing related work. You can
              <tt>git fetch</tt> from that person's repository into your own
              (that is, you can pull from multiple different repositories into a
              single local one) and merge in his or her changes. This is great
              on large projects where someone works as an integrator or filterer
              before sending changes upstream.
            </p>
            <p>
              Or take what's happening in the Git community right now: the
              maintainer, Junio Humano, is away due to unexpected personal
              circumstances, and so the intermin maintainer, Shawn Pearce, is
              taking over seamlessly using his own clone of the central
              repository which Junio controls. When Junio gets back he can
              simply merge in the patches which Shawn has been collecting,
              filtering, and ordering. This kind of smooth hand-over of control
              is much more difficult with a centralized model. If you're
              curious, you can see how all of this is happening, because it's
              happening out in the open on the Git mailing list.
            </p>
            <a name="Feature%20branches"></a>
            <h3>Feature branches</h3>

            <p>
              As you alluded to, branching is a big feature of Git, and more
              importantly, merging (without proper merging the ability to branch
              is next to useless; even Subversion can branch like a champ, it's
              just its merging which sucks).
            </p>
            <p>
              Because Git is so good at branching and merging, it's dead easy to
              maintain separate &quot;experimental&quot; and
              &quot;maintenance&quot; branches. But even more so, branching and
              merging is so easy that you find yourself making feature branches
              (&quot;topic branches&quot; seems to be the dominant term in the
              Git community) where you work on a single feature in isolation.
            </p>
            <p>
              This keeps your development efforts organized, makes it easier for
              you to group related changes together for submission upstream, and
              once again makes it more likely that your patches will be
              accepted. For the upstream maintainers too, having great branching
              and merging makes integrating your patches much easier: the
              maintainer can easily have a bunch of topic branches in his or her
              repository, one for each topic submitted by a community member.
              Based on feedback he/she can ask for changes and additional
              patches from the submitter, add them to that topic branch, and
              then merge the topic branch in to the main master branch when its
              ready.
            </p>
            <p>
              Branching and merging in Git is about as easy as copying a file.
            </p>
            <a name="Refactoring"></a>
            <h3>Refactoring</h3>

            <p>
              You asked about refactoring, but I'm not sure that there's
              anything specific to the distributed nature of systems like Git
              that makes a difference here. All you can really say is that the
              ease with which you can set up topic branches encourages you to
              engage in experimental refactoring (of the &quot;let's just try
              this and see if it looks better&quot; variety).
            </p>
            <a name="Sliced%20bread"></a>
            <h3>Sliced bread</h3>

            <p>
              I've tried to restrict my points above to the aspects in which
              distributed version control can be superior to centralized
              systems.
            </p>
            <p>
              To finish up I'll just briefly mention some points about Git that
              don't really have anything to do with its distributed nature but
              which make it a great version control system.
            </p>
            <ul>
              <li>
                Speed: <em>apart</em> from the fast offline access already
                mentioned, Git itself is a speed-demon. Most of it is written in
                lean-and-mean
                <a href="https://typechecked.net/wiki/C">C</a> code, with
                some high-level user-interface stuff written using scripting
                languages. This isn't just a coincidence; from the very
                beginning it was designed to be quick and it's one of the things
                that will most impact you when you try it out.
              </li>
              <li>
                Simplicity: repositories use a simple data model (four object
                types, history represented as a directed acyclic graph) that you
                can grok with a few minutes of study; this means that you can
                actually understand how Git works under the covers.
              </li>
              <li>
                Robustness: The simplicity makes for fewer bugs and a codebase
                that you can really trust.
              </li>
              <li>Maturity: Git's already at 1.5+ and it shows...</li>
              <li>
                Innovation: ...but not ready to sit back and rest on its laurels
                the Git community is blazing ahead with constant innovations
                (the recently added <tt>git stash</tt>,
                <a
                  href="https://typechecked.net/a/about/wincent/weblog/archives/2007/09/stash.php"
                  >for example</a
                >).
              </li>
              <li>
                Community: The Git community is highly active and has some
                impressively competent programmers in it. Subscribe to the
                mailing list and look at what must be one of the most impressive
                development processes in the open source world. I have learnt a
                lot from this inspiring community in the last few months and
                have changed a lot of my own practices for the better.
              </li>
              <li>
                Interface: Git is a pleasure to use from the command line
                (automatic paging, colorized output) but also comes with some
                excellent cross-platform GUI tools for visualizing history
                (gitk), preparing commits (git-gui), and web-based repository
                browsing (gitweb).
              </li>
              <li>
                Documentation: There is a wealth of high-quality documentation.
                Basic use can be learnt in only a few minutes, but if you want
                to delve deeper there is as much material as you could possibly
                want. Even if you don't want to become a Git expert the man
                pages are a great reference to consult whenever you want to do
                something out of the ordinary.
              </li>
              <li>
                Clean working copies: When you clone a repository everything
                goes into a single <tt>.git</tt> subdirectory; no more
                <tt>.svn</tt> metadata littering the entire repository hierarchy
                and causing problems inside Mac OS X bundles.
              </li>
              <li>
                Philosophy: Git avoids the entire metadata arms race entirely by
                tracking content and nothing more. In other words, it doesn't
                bother trying to remember things like when you renamed one file
                to another, it merely remembers what the tree looked like before
                and after. It can look at the tree whenever necessary to infer
                whether or not a rename occurred. I
                <a
                  href="https://typechecked.net/a/about/wincent/weblog/archives/2007/07/a_look_back_bra.php"
                  >previously tried to explain</a
                >
                why this particular design decision was a flash of genius.
              </li>
            </ul>
          </div>
        </div>

        <p class="more-categories"></p>

        <p class="posted">Posted by wincent at October 21, 2007 12:39 PM</p>
      </div>
    </div>

    <div id="footer">
      <p>
        Copyright &copy; 1997-2009

      </p>
      <p>Page last updated 00:30:54, 19 February 2010.</p>
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
