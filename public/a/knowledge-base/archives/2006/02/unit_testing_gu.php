<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="generator" content="http://www.movabletype.org/" />

    <title>Knowledge base: Unit testing guidelines</title>

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
      href="https://wincent.com/a/knowledge-base/archives/2006/01/lightweight_iss.php"
      title="Lightweight issue tracking"
    />

    <link
      rel="next"
      href="https://wincent.com/a/knowledge-base/archives/2006/03/avoiding_protoc.php"
      title="Avoiding protocol-related warnings"
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
        >&nbsp;&gt;&nbsp;02
      </p>
    </div>

    <div id="container">
      <div class="content">
        <p align="right">
          <a
            href="https://wincent.com/a/knowledge-base/archives/2006/01/lightweight_iss.php"
            >&laquo; Lightweight issue tracking</a
          >
          |

          <a href="https://wincent.com/a/knowledge-base/">Main</a>
          |
          <a
            href="https://wincent.com/a/knowledge-base/archives/2006/03/avoiding_protoc.php"
            >Avoiding protocol-related warnings &raquo;</a
          >
        </p>

        <h2>February 13, 2006</h2>

        <h3>Unit testing guidelines</h3>

        <p>
          Lately I've been spending a lot of time working on my unit testing
          framework,
          <a href="https://wincent.com/a/products/wotest/">WOTest</a>. In doing
          so I've had cause to think about unit testing "best practice", or at
          least what works best for me. In this article I summarize the
          guidelines that I've come up with that help me decide <em>when</em>,
          <em>how</em> and <em>where</em> to write
          <a href="http://en.wikipedia.org/wiki/Unit_testing">unit tests</a>:
        </p>

        <ol>
          <li>Write unit tests at all levels of your implementation</li>
          <li>Test your assumptions</li>
          <li>Base your unit tests on your documentation</li>
          <li>Base your unit tests on your code</li>
          <li>Base your unit tests on your expected results</li>
          <li>Write unit tests for your bugs</li>
        </ol>

        <div id="a000201more">
          <div id="more">
            <h3>1. Write unit tests at all levels of your implementation</h3>

            <p>
              If you have a low-level method for adding numbers which is used by
              a high-level method for calculating window geometry then you
              should write tests for the low-level method <em>and</em> tests for
              the high-level method. In this way it will be easier to isolate
              faults. If a flaw in the low-level method causes the high-level
              method to fail you'll see failures in the tests for both methods.
              If the low-level method passes all the tests but the high-level
              method is broken you'll know where to direct your attention (to
              the high-level method).
            </p>

            <p>
              In practice this means writing tests for every method of every
              class. It may sound like a lot of work but you'll appreciate the
              thoroughness of your tests if you later have to find a bug in a
              huge framework. Don't skip writing tests for simple methods that
              don't seem to need it; even the simplest-looking code can have
              bugs lurking in it.
            </p>

            <p>
              One side consequence of the decision to write units tests for
              every method of every class is that it makes sense to group your
              unit tests using the same class/method hierarchy: that is, all
              tests for a given class will be grouped together into a test
              class, and all tests for a given method will be grouped into a
              method in that test class. You can of course add other,
              higher-level tests to the test class: these higher-level tests
              don't just test that a single method works as expected; rather
              they test more complex interactions between methods, classes (and
              sometimes mocks). I tend not to worry <em>too</em> much about
              keeping my unit tests totally isolated from one another (ideally
              you would test each class in total isolation from others, using
              mock objects as stand-ins); in practice keeping the tests "fairly
              isolated" is enough.
            </p>

            <p>
              The highest level tests of all are sometimes called "<a
                href="http://en.wikipedia.org/wiki/Acceptance_test"
                >acceptance tests</a
              >". This basically means that you test that the program does what
              the user expects it to. Unit tests are lower-level, "atomic" tests
              that test the components (units) of the program. Acceptance tests
              are used to check the behavior of the program at the level at
              which the user interacts with it. They're called "acceptance"
              tests because they indicate whether the program will be acceptable
              to the user or not; that is, if it does what the user wants it to
              do. Unit tests are for programmers; acceptance tests are for
              users. In practice you write both kinds of tests using the same
              kinds of tools.
            </p>

            <h3>2. Test your assumptions</h3>

            <p>
              Sometimes you write code that takes advantage of some undocumented
              aspect of the Cocoa frameworks or the Objective-C runtime. I'm not
              talking here about using private or undocumented APIs; I'm
              referring to those places where the official documentation
              sometimes leaves things unsaid and taken for granted.
            </p>

            <p>
              In those cases you end up making assumptions about the operation
              and characteristics of the context in which your program runs:
              assumptions about the operating system, the APIs, the environment.
            </p>

            <p>
              Don't let these assumptions go untested. Write unit tests whenever
              your code rests upon an assumption you've made about something
              that isn't affirmed with 100% clarity in the official
              documentation. Use unit tests to eliminate potential ambiguity or
              uncertainty about the context in which your code is running.
            </p>

            <h3>3. Base your unit tests on your documentation</h3>

            <p>
              For me writing a working program consists of three simultaneous
              activities:
            </p>

            <ol>
              <li>Writing code-level documentation</li>
              <li>Writing unit tests</li>
              <li>Writing code</li>
            </ol>

            <p>
              Note that writing code is only one of the three parts of making a
              working program. You write the code so that the machine has a set
              of instructions to follow. You write the unit tests to ensure that
              the code works as you think it does and to give you added
              confidence when it comes to working quickly and making big
              changes. You write the documentation &mdash; even for
              closed-source code that nobody else will ever see &mdash; for two
              reasons: firstly, because it will be helpful to you if you ever
              have to revisit that same code months or years later; secondly,
              because it forces you to think about coming up with better designs
              that are more programmer-friendly (if you have trouble writing
              documentation for something it is a sure sign that you could have
              implemented things in a better, simpler way).
            </p>

            <p>
              So you write unit tests based on that documentation. For example,
              if your documentation says, "raises an exception when passed nil",
              you write a test that confirms that an exception is raised when
              you pass nil. If you documentation says, "returns NO if the
              receiver does not recognize the passed selector", you write a test
              that passes an unrecognized selector and checks to make sure that
              NO is returned. These unit tests confirm that your code conforms
              to the documentation.
            </p>

            <h3>4. Base your unit tests on your code</h3>

            <p>
              You'll then want to go though you code and look for every instance
              where you make an assertion, where an error can occur, or an
              exception can be thrown. You write unit tests for each of these
              places where the code can go off the rails. Basically you want to
              make sure that it goes off the rails when you expect it to. Use
              tests to ensure that assertions are correctly raised, that errors
              are reported, and that exceptions are thrown when appropriate.
            </p>

            <h3>5. Base your unit tests on your expected results</h3>

            <p>
              This is probably the most obvious basis for writing unit tests.
              You write tests that confirm that your methods return the expected
              results. Let's say you have a method that adds two numbers. You'll
              want to write tests that confirm that your method correctly
              returns that "2 plus 2 equals 4". There are three types of test to
              write here:
            </p>

            <ol>
              <li>Success conditions</li>
              <li>Failure conditions</li>
              <li>Boundary conditions</li>
            </ol>

            <p>
              In the first type of test you expect success. You check that "2
              plus 2" does indeed equal "4".
            </p>

            <p>
              In the second type of test you intentionally provoke a failure.
              For example, you provoke an overflow and check that the result is
              invalid.
            </p>

            <p>
              In the third type of test you pick the borderline between success
              and failure &mdash; that is, conditions that approach as close as
              possible to "failure" without actually getting there &mdash; and
              make sure that the actual behavior is as expected. For example, in
              code that loops through items in an array you will want to ensure
              that the code works properly with empty arrays (0 items) or
              single-item arrays. With code that works with strings you'll want
              to check that nil strings and empty strings are handled. With code
              that operates with buffers you'll want to check that things work
              correctly when the buffer is one-byte away from full, totally
              full, or not big enough (the failure case).
            </p>

            <p>
              What this generally means is that I almost never write a
              WO_TEST_TRUE test without pairing it with an inverse WO_TEST_FALSE
              case. Basically the pair of tests says, "I expect <em>this</em> to
              work but <em>this</em> to fail". Just because a method works when
              I expect it to work doesn't mean that it's correct; it must also
              <em>not work</em> when I expect it to not work. And by testing for
              boundary conditions as well as straightforward success and failure
              cases I can have more confidence that the method will work in all
              cases where I believe it should work and fail in all cases where I
              believe it should fail.
            </p>

            <h3>6. Write unit tests for your bugs</h3>

            <p>
              Each time you find a bug you should write a test that exposes it.
              In other words, you write a test that fails because of the bug,
              but which would pass if the bug didn't exist. You then fix the bug
              and the test passes. If the bug ever comes back your test will
              catch it straight away.
            </p>
          </div>
        </div>

        <p class="posted">Posted by wincent at February 13, 2006 02:38 AM</p>
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
