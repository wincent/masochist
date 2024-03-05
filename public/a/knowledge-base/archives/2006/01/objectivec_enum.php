<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="generator" content="http://www.movabletype.org/" />

    <title>Knowledge base: Objective-C enumeration macro</title>

    <link rel="stylesheet" href="/a/styles.css" type="text/css" />

    <link
      rel="start"
      href="https://wincent.com/a/knowledge-base/"
      title="Home"
    />
    <link
      rel="prev"
      href="https://wincent.com/a/knowledge-base/archives/2006/01/security_notes.php"
      title="Security notes, Red Hat Enterprise Linux and rssh"
    />

    <link
      rel="next"
      href="https://wincent.com/a/knowledge-base/archives/2006/01/locking_doublec.php"
      title="Locking, double-checked locking and speed"
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
        >&nbsp;&gt;&nbsp;01
      </p>
    </div>

    <div id="container">
      <div class="content">
        <p align="right">
          <a
            href="https://wincent.com/a/knowledge-base/archives/2006/01/security_notes.php"
            >&laquo; Security notes, Red Hat Enterprise Linux and rssh</a
          >
          |

          <a href="https://wincent.com/a/knowledge-base/">Main</a>
          |
          <a
            href="https://wincent.com/a/knowledge-base/archives/2006/01/locking_doublec.php"
            >Locking, double-checked locking and speed &raquo;</a
          >
        </p>

        <h2>January 26, 2006</h2>

        <h3>Objective-C enumeration macro</h3>

        <p>
          I posted a
          <a
            href="https://wincent.com/a/about/wincent/weblog/archives/2006/01/locking_doublec.php"
            >short article the other day on double-checked locking</a
          >
          and in the process of trying to get to the bottom of the memory
          barrier question I found myself reading
          <a href="http://rentzsch.com/papers/atomicity">this article</a> by
          <a href="http://rentzsch.com/">Jonathan Rentzsch</a> (<a
            href="http://www-128.ibm.com/developerworks/library/pa-atom/"
            >also published on the IBM site in modified form</a
          >). One thing leads to another and I found myself reading his
          <a href="http://rentzsch.com/papers/loveHateObjC"
            >love/hate paper on Objective-C</a
          >, then this one on
          <a href="http://rentzsch.com/papers/improvingCocoaObjCEnumeration"
            >Objective-C enumeration</a
          >
          and finally that took me to Michael Tsai's
          <a href="http://mjtsai.com/blog/2003/12/08/cocoa_enumeration.html"
            >article on the same subject</a
          >.
        </p>

        <p>Well, I'll throw my hat in the ring too...</p>

        <div id="a000187more">
          <div id="more">
            <p>
              First up, I share Jonathan's and Michael's discontent with the
              standard enumeration idiom. It's always bugged me that I had to do
              stuff like this:
            </p>

            <pre>
NSEnumerator *outerEnumerator = [array objectEnumerator];
NSDictionary *dictionary = nil;
while ((dictionary = [outerEnumerator nextObject]))
{
    NSEnumerator *innerEnumerator = [dictionary keyEnumerator];
    id object = nil;
    while ((object = [innerEnumerator nextObject]))
        [self doSomethingWithObject:object];
}</pre
            >

            <p>
              I don't like having to worry about name clashes (<tt
                >outerEnumerator</tt
              >
              vs <tt>innerEnumerator</tt>). I don't like having to use three
              lines of code to set up the enumeration. I don't really care about
              the use of an assignment within a conditional expression (in the
              <tt>while</tt> statements) because I can tell GCC to warn me about
              places where it thinks I might have done it by accident, and I can
              explicitly suppress those warnings in places where I am sure
              that's what I want to do by using double parentheses as in the
              example above.
            </p>

            <p>
              So Jonathan has his
              <a href="http://rentzsch.com/share/nsenumerate.h"
                >own preprocessor macros to address his concerns</a
              >. Michael has a
              <a href="http://mjtsai.com/blog/2003/12/08/cocoa_enumeration.html"
                >different macro</a
              >. Here's my own take on the idea:
            </p>

            <pre>#define WOEnumerate(collection, object)                                     \
for (id enumerator = [collection objectEnumerator],                         \
     selector = (id)@selector(nextObject),                                  \
     method = (id)[enumerator methodForSelector:(SEL)selector],             \
     object = enumerator ? ((IMP)method)(enumerator, (SEL)selector) : nil;  \
     object != nil;                                                         \
     object = ((IMP)method)(enumerator, (SEL)selector))
<br />
#define WOKeyEnumerate(collection, object)                                  \
for (id enumerator = [collection keyEnumerator],                            \
     selector = (id)@selector(nextObject),                                  \
     method = (id)[enumerator methodForSelector:(SEL)selector],             \
     object = enumerator ? ((IMP)method)(enumerator, (SEL)selector) : nil;  \
     object != nil;                                                         \
     object = ((IMP)method)(enumerator, (SEL)selector))</pre>

            <p>These macros can be used like this in code:</p>

            <pre>
WOEnumerate(fileArray, fileName)
    NSLog(@"Filename: %@", filename);</pre
            >

            <p>Things to note about the solution:</p>

            <ul>
              <li>
                Like Michael, I do throw away compile-time type checking (the
                object is always of type <tt>id</tt>) for the sake of
                simplicity.
              </li>
              <li>
                Like Jonathan, I make all of the variables local to the loop so
                that I don't have to worry about clashes.
              </li>
              <li>
                I provide two macros, one for object enumeration (for example,
                for use with <tt>NSArray</tt> collections) and one for key
                enumeration (for example, for use with
                <tt>NSDictionary</tt> collections). It would be trivial to add a
                third macro, <tt>WOReverseEnumerate</tt>, that would use the
                <tt>reverseObjectEnumerator</tt> selector.
              </li>
              <li>
                Like Michael, I cache both the method selector and
                implementation pointer. In informal testing (enumerating over a
                10,000,000-item array ten times) the macro performed 49% faster
                than the standard idiom (averaging 3.6 million objects per
                second compared with 2.4 million per second). I tried other
                patterns but this one turned out to be the fastest.
              </li>
              <li>
                If passed a nil pointer instead of a valid collection no
                iterations at all are performed, matching the behaviour of the
                standard idiom.
              </li>
              <li>
                If passed an object which does not respond to the
                <tt>objectEnumerator</tt> selector (or
                <tt>keyEnumerator</tt> selector in the case of the
                <tt>WOKeyEnumerate</tt> macro) then an exception is raised,
                again matching the pattern of the standard idiom.
              </li>
              <li>
                Note that the compiler C dialect must be set to C99 or GNU99 in
                order to use this macro because of the declaration of variables
                inside the <tt>for</tt> statement.
              </li>
              <li>
                I have to use some casts between <tt>id</tt>, <tt>SEL</tt> and
                <tt>IMP</tt> types (in reality all just pointers) because C99
                only allows a single declaration in the first expression of the
                <tt>for</tt> statement. In other words, "<tt
                  >int i = 0, j = 0</tt
                >" (one declaration) is legal; "<tt
                  >int i = 0, unsigned j = 0</tt
                >" (multiple declarations) is not. The casts are necessary to
                silence compiler warnings.
              </li>
              <li>
                If you pass a collection object that responds to the
                <tt>objectEnumerator</tt> (or <tt>keyEnumerator</tt>) selector,
                but which returns an enumerator that does not respond to the
                <tt>nextObject</tt> selector then bad things will happen (in
                which case you probably deserve to crash for having passed such
                a collection).
              </li>
            </ul>

            <p>
              The one thing I don't like about this solution is that the macro
              looks like a function (name followed by parameters in parentheses)
              but behaves like a <tt>for</tt> statement (statement followed by
              expressions in parentheses followed by a block). That's probably
              while Michael named his macro <tt>foreach</tt> and swapped the
              order of the parameters (so that it reads like "<em>for each</em>
              item <em>in</em> collection". Nevertheless, I named my macros
              <tt>WOEnumerate</tt> and <tt>WOKeyEnumerate</tt> because I've made
              a habit of using the <tt>WO</tt> prefix to avoid namespace
              clashes, and I feel that the verb "enumerate" should appear in the
              macro.
            </p>

            <p>
              Of course, I probably should have stuck to my conventions and used
              the form <tt>WO_ENUMERATE</tt> (I like to use all capitals for
              macros so that they scream out in the source code, "I am a macro
              and not a function!"; in general I make exceptions only where I
              want the macro to appear like an existing and closely-related
              Cocoa macro or function: for example, I have an
              <tt>WOStringFromBool</tt> macro that is intended to augment
              <tt>NSStringFromSelector</tt> and friends, and a
              <tt>WOAssert</tt> macro that's intended to supplement the
              <tt>NSAssert</tt> family). What was I thinking when I wrote these
              macros?... I suppose that suitable alternative names for the
              macros would be <tt>enumerate</tt> and <tt>keyenumerate</tt>; if
              used like that the macros would look like these when used:
            </p>

            <pre>
enumerate (fileName, fileArray)
    NSLog(@"Filename: %@", filename);</pre
            >

            <p>
              So there you have it: three ways to improve upon the standard
              Objective-C enumeration idiom.
            </p>

            <h3>Update: 24 February 2006</h3>

            <p>Since my original post I've improved the macros in two ways:</p>

            <ol>
              <li>
                Firstly, I renamed the loop-local variables
                (<tt>enumerator</tt>, <tt>selector</tt> and <tt>method</tt>) to
                something more obscure so as to reduce the risk of namespace
                clashes.
              </li>
              <li>
                Later, used the GCC preprocessor macro concatentation operator
                (<tt>##</tt>) to further reduce the risk of namespace clashes by
                appending the value of <tt>object</tt> to those loop-local
                variable names. I use <tt>object</tt> because it has to be a
                simple scalar (unlike <tt>collection</tt> which could be
                something like "<tt>[thing message]</tt>").
              </li>
            </ol>

            <p>
              The sum effect of these changes is that you should be able to use
              the macros pretty much any (including nesting them) without
              feature of variable scoping issues or namespace clashes. If you
              want to check out the finished macros, now named
              <tt>WO_ENUMERATE</tt>, <tt>WO_KEY_ENUMERATE</tt> and
              <tt>WO_REVERSE_ENUMERATE</tt>, see the <tt>WOEnumerate.h</tt> file
              in WOTest.
            </p>
          </div>
        </div>

        <p class="posted">Posted by wincent at January 26, 2006 04:50 PM</p>
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

    </div>
  </body>
</html>
