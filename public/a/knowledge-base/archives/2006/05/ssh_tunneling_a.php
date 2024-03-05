<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="generator" content="http://www.movabletype.org/" />

    <title>Knowledge base: SSH tunneling and secure IMAP, POP3 and SMTP</title>

    <link rel="stylesheet" href="/a/styles.css" type="text/css" />

    <link
      rel="start"
      href="https://wincent.com/a/knowledge-base/"
      title="Home"
    />
    <link
      rel="prev"
      href="https://wincent.com/a/knowledge-base/archives/2006/05/pstree_mirror.php"
      title="pstree mirror"
    />

    <link
      rel="next"
      href="https://wincent.com/a/knowledge-base/archives/2006/06/upgrading_to_my.php"
      title="Upgrading to MySQL 4.1.20 on Red Hat Enterprise Linux 3"
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
        >&nbsp;&gt;&nbsp;05
      </p>
    </div>

    <div id="container">
      <div class="content">
        <p align="right">
          <a
            href="https://wincent.com/a/knowledge-base/archives/2006/05/pstree_mirror.php"
            >&laquo; pstree mirror</a
          >
          |

          <a href="https://wincent.com/a/knowledge-base/">Main</a>
          |
          <a
            href="https://wincent.com/a/knowledge-base/archives/2006/06/upgrading_to_my.php"
            >Upgrading to MySQL 4.1.20 on Red Hat Enterprise Linux 3 &raquo;</a
          >
        </p>

        <h2>May 31, 2006</h2>

        <h3>SSH tunneling and secure IMAP, POP3 and SMTP</h3>

        <p>
          During the time in which I was totally without Internet access last
          week I used iStumbler to see if there were any open, public wireless
          networks around which I could use to get on the Net.
        </p>

        <p>
          Turns out that there was one which was occasionally available, but
          with a very weak signal and I could only ever get a pitiful few bytes
          per second over it.
        </p>

        <p>
          When I first found this network I foolishly decided to check my email
          despite the fact that it uses inherently insecure protocols which
          transmit usernames and passwords in plaintext. I realized that the
          person running this open network could easily snoop them, so I decided
          to log into my server securely via SSH, immediately change the email
          passwords that had been transmitted as plaintext, and not try checking
          my email again until I had worked out a way to secure the protocols.
        </p>

        <div id="a000337more">
          <div id="more">
            <p>
              It turns out that the open network never gave me enough
              performance to actually make checking my email possible, but at
              least it prompted me to tighten things up. There are three
              principal ways to secure email traffic: SSH tunneling; using
              secure protocols like IMAPS, POP3S and SMTP with SSL; and using
              the <tt>stunnel</tt> tool. None of these provide end-to-end
              encryption for the content of your emails &mdash; you'll need to
              encrypt them before sending them in order to get that &mdash; but
              they do secure the connection between your machine and your local
              mailserver, thus protecting your passwords and preventing them
              from being snooped by a casual attacker.
            </p>

            <h3>SSH tunneling</h3>

            <p>
              This is the easiest of the three methods, but it requires you to
              have an SSH account on your mailserver. Basically all you have to
              do is use the <tt>-L</tt> switch to <tt>ssh</tt> to tunnel the
              appropriate ports. You would execute a command like this on your
              local machine:
            </p>

            <pre>
sudo ssh -L 143:wincent.com:143 \
         -L 110:wincent.com:110 \
         -L 25:wincent.com:25   \
         robinson@example.com</pre
            >

            <p>
              The <tt>sudo</tt> is necessary because root privileges are
              required to open any ports below 1024. The port numbers above are
              the standard port numbers for IMAP, POP3 and SMTP respectively. If
              you don't want to run the <tt>ssh</tt> process with root
              privileges you'll need to choose local port numbers that are
              higher than 1024; for example, you could just add 10000 to each of
              the numbers:
            </p>

            <pre>
sudo ssh -L 10143:wincent.com:143 \
         -L 10110:wincent.com:110 \
         -L 10025:wincent.com:25   \
         robinson@example.com</pre
            >

            <p>
              These commands basically say, "Log in via SSH to my account,
              <tt>robinson</tt> on the host <tt>wincent.com</tt>; forward any
              network traffic that's sent to the local ports on this machine to
              the remote ports on the host". The traffic is encrypted over the
              SSH connection. (Needless to say, the account
              "robinson@example.com" doesn't actually exist; I'm just using it
              for illustration purposes. I guess it'll only be a question of a
              few weeks before I start seeing spam directed to that non-existent
              address...)
            </p>

            <p>
              You then need to change the settings in your local email client.
              Instead of connecting to <tt>wincent.com</tt> port 143, it will
              need to connect to <tt>localhost</tt> port 143 (or port 10143 if
              you followed the second example above). The forwarding is
              transparent and the email client doesn't need to know anything
              more; to the email client it looks just like a normal, plaintext
              IMAP, POP3 or SMTP connection.
            </p>

            <p>
              The advantages of this method are that it is easy to set up and
              requires no modifications to the server. The downside is that it
              requires each email user to have an SSH account on the server and
              you have to make sure SSH is up and running with port forwarding
              activated before firing up your email client.
            </p>

            <p>
              See the <tt>ssh</tt> man page for more information about SSH
              tunneling.
            </p>

            <h3>Using <tt>stunnel</tt></h3>

            <p>
              I didn't actually try using this method but it seems like a viable
              option. Basically, the <tt>stunnel</tt> process serves as a
              wrapper for the insecure protocol. For example, you fire up
              <tt>stunnel</tt> on the server and get it to listen to port 993
              (the standard port for IMAPS), and it forwards incoming, encrypted
              connections to the real IMAP process running on the server (not
              encrypted). You then set up your local mail client to communicate
              with SSL to the appropriate ports.
            </p>

            <p>
              I chose not to use this method because I didn't want to have to
              meddle too much with the server configuration (for example,
              configuring the <tt>stunnel</tt>-wrapped servers to automatically
              start up at the correct runlevels). Furthermore, it is not clear
              to me whether it is possible to offer both secure
              <em>and</em> insecure access at the same time (which would be
              useful, for example, if you wanted to allow users to access via
              either IMAP or IMAPS during the transition period).
            </p>

            <p>
              See the <tt>stunnel</tt> man page on your server (if it has one)
              for more information.
            </p>

            <h4>Update: February 2007</h4>

            <p>
              I later went ahead to explore the use of
              <a
                href="https://wincent.com/wiki/Using_Stunnel_to_secure_SMTP_transport"
                >Stunnel</a
              >. It co-exists peacefully with the <tt>STARTTLS</tt> solution.
            </p>

            <h3>Secure protocols: IMAPS, POP3S and SMTP with SSL</h3>

            <p>
              In the end this is the way I chose to go. It doesn't require users
              to have SSH accounts on the server, and it allows you to run both
              IMAPS and IMAP, POP3S and POP3, at the same time during a period
              of transition.
            </p>

            <p>
              Basically, you set up an IMAPS server listening on port 993, a
              POP3S server running on port 995, and an SMTP server on port 25
              which is capable of providing encrypted transport using TLS.
            </p>

            <p>
              It is the most difficult to set-up, but also the most
              architecturally elegant. On the whole, I think it's worth the
              extra effort. The following summary applies to Red Hat Enterprise
              Linux ES 3.
            </p>

            <h4>Setting up the certificates</h4>

            <p>
              I already had an SSL certificate for use with Apache and my server
              running at <tt>wincent.com</tt> (actually the same machine as the
              mail server). I wasn't interested in using a self-signed
              certificate (self-signed certificates are free but not trusted by
              connecting clients; they do serve to encrypt your mail transport
              but they cause unsightly warning messages that don't exactly
              inspire trust). I was curious to know whether the same certificate
              could be used for email transport. The answer is yes.
            </p>

            <p>I needed to assemble three components for this to work:</p>

            <ol>
              <li>
                The private key for the certificate (most likely stored
                alongside the certificate).
              </li>
              <li>
                The certificate itself (most likely stored in
                <tt>/etc/httpd/</tt> or one of its subdirectories).
              </li>
              <li>
                The certificate of the signing certificate authority (also most
                likely stored alongside the other certificate).
              </li>
            </ol>

            <p>
              The order of these components is important. All three must be
              pasted, in order, into a file at
              <tt>/usr/share/ssl/certs/imapd.pem</tt>. The file should be owned
              by root and readable only by root.
            </p>

            <p>
              The need to include the signing certificate authority's
              certificate is explained
              <a
                href="http://gagravarr.org/writing/openssl-certs/personal.shtml"
                >here</a
              >:
            </p>

            <blockquote>
              Now for a small caveat - this all assumes your certificate was
              signed by a root certificate authority. In some cases, the CA
              which signed your certificate is not a root CA, but is a CA signed
              by a CA (or signed by a CA who was signed by a CA who is a root
              CA, etc.) This is often known as a chained certificate, or a
              ca-bundle.<br />
              <br />
              What makes things tricky is that the remote client will look at
              your certificate, and try to verify it against the root CAs it
              knows about. If there is an intermediate CA between you and the CA
              the client knows about, it will need this certificate to
              sucessfully verify your certificate. As such, the server needs to
              not only provide clients with its own certificate, but also those
              of the intermediate CAs.<br />
              <br />
              In the UW-IMAP server, this is achieved by appending all
              intermediate certificates to the file containing your own
              certificate, with the highest-level certificate last. (The root
              certificate is not required, as the client already has it.)
            </blockquote>

            <p>
              You can confirm that the certificate is valid and verifiable by
              running a command like this:
            </p>

            <pre>sudo openssl verify imapd.pem</pre>

            <p>
              If it is valid and the certificate chain can be successfully
              resolved you'll see a message like this:
            </p>

            <pre>imapd.pem: OK</pre>

            <p>Otherwise you'll see something like this:</p>

            <pre>
imapd.pem: /C=GB/O=Comodo Limited/OU=Comodo Trust Network/OU=Terms and Conditions of use: 
http://www.comodo.net/repository/OU=(c)2002 Comodo Limited/CN=Comodo Class 3 Security Services CA
error 2 at 1 depth lookup:unable to get issuer certificate</pre
            >

            <p>
              If you get the order of the certificates in the file wrong then
              you'll see messages like this in your
              <tt>/var/log/maillog</tt> when you try to connect to your IMAPS
              server:
            </p>

            <pre>
Unable to load private key from /usr/share/ssl/certs/imapd.pem</pre
            >

            <p>
              These errors are evidently caused because the ordering confuses
              the server and it is no longer sure to which certificate the
              private key applies to, and it ends up guessing incorrectly. As
              stated in
              <a href="http://www.linux.com/howtos/SSL-RedHat-HOWTO-5.shtml"
                >this page</a
              >:
            </p>

            <blockquote>
              If you get the error messages above, chances are the key and
              certificate do not match. Make sure you aren't using the default
              server.key file. You should also check the httpd.conf file to make
              sure that the directives are pointing to the correct private key
              and certificate.<br />
              <br />
              You can check to make sure that you your private key and
              certificate are in the correct format and match each other. To do
              this, give the commands below to decrypt the private key in one
              terminal window and decrypt the certificate in the other. What you
              will be comparing are the Modulus and the Exponent of each key. If
              the modulus and exponent from the key matches the set from the
              certificate, you have just confirmed that your certificate and key
              are correctly paired.
            </blockquote>

            <p>
              After checking the modulus and exponent of my key and certificate
              I was sure that I was using the right components, so I tried
              changing the order of elements in the file and it started working.
            </p>

            <p>You can use the same file for POP3S:</p>

            <pre>
touch ipop3d.pem
chmod 400 ipop3d.pem
cp imapd.pem ipop3d.pem</pre
            >

            <p>
              For secure SMTP you can use the same file as a base, but you'll
              need to make some alterations:
            </p>

            <pre>
touch sendmail.pem
chmod 400 sendmail.pem
cp imapd.pem sendmail.pem</pre
            >

            <p>
              Specifically, you'll need to prepare a separate file (call it
              <tt>ca.crt</tt>) containing only the certificate authority's
              certificate. You can then remove that portion from the
              <tt>sendmail.pem</tt> file. Sendmail will look for the certificate
              authority certificate in a separate file.
            </p>

            <h4>Switching on IMAPS support</h4>

            <p>
              Red Hat Enterprise Linux already has built-in IMAPS support. Now
              that your certificate is in place all you have to do is turn it
              on:
            </p>

            <pre>sudo chkconfig imaps on</pre>

            <p>
              You can verify that both IMAP and IMAPS are turned on (via
              <tt>xinetd</tt>) using:
            </p>

            <pre>sudo chkconfig --list</pre>

            <h4>Switching on POP3S support</h4>

            <p>
              The same is true for POP3S. Support is already in place; you just
              have to turn it on:
            </p>

            <pre>sudo chkconfig pop3s on</pre>

            <p>
              You can verify that both the pop3s and ipop3 services are turned
              on (via <tt>xinetd</tt>) using:
            </p>

            <pre>sudo chkconfig --list</pre>

            <h4>Configuring Sendmail to support TLS</h4>

            <p>
              Unlike IMAPS and POP3S, adding TLS support to SMTP requires a bit
              more work. First of all, you must make sure that your domain name
              MX records are updated to point to the correct host name (in this
              case, <tt>wincent.com</tt>). This is because third parties
              connecting to your mail server may issue a STARTTLS command and it
              is important that the host name matches the name in the
              certificate. And being an MX record, you have to make sure that
              your host name is a proper A record (pointing to an IP address)
              and not just a CNAME alias (pointing to a domain name).
            </p>

            <p>The basic sequence of events looks like this:</p>

            <ol>
              <li>
                Make sure that your secure host is a proper A record and not a
                CNAME alias in your DNS.
              </li>
              <li>
                If you're extra cautious, you'll wait for this change to
                propagate through the DNS and confirm that you existing secure
                access (HTTPS, IMAPS, POP3S) continues to work.
              </li>
              <li>
                Update MX records for all of your hosted domains to point to the
                secure host.
              </li>
              <li>
                Wait for the change to propagate through the DNS and confirm
                that incoming and outgoing mail delivery still work.
              </li>
              <li>Install your Sendmail certificate (described above).</li>
              <li>Configure Sendmail (see below).</li>
              <li>
                Restart Sendmail with <tt>sudo service sendmail restart</tt>.
              </li>
              <li>
                Use telnet to confirm that STARTTLS is offered by the mail
                server.
              </li>
              <li>
                Test that incoming and outgoing mail delivery still work (try
                with and without SSL).
              </li>
            </ol>

            <p>
              The items you'll need to add to your Sendmail configuration are
              the following:
            </p>

            <pre>
define(`confCACERT_PATH',`/usr/share/ssl/certs')dnl	
define(`confCACERT',`/usr/share/ssl/certs/ca.crt')dnl
define(`confSERVER_CERT',`/usr/share/ssl/certs/sendmail.pem')dnl
define(`confSERVER_KEY',`/usr/share/ssl/certs/sendmail.pem')dnl</pre
            >

            <p>
              To test that STARTTLS is correctly offered by the mail server you
              can do a <tt>telnet wincent.com 25</tt> and see if it lists
              STARTTLS in response to <tt>ehlo wincent.com</tt>. When testing
              mail delivery it is a good idea to watch the mail log with
              <tt>sudo tail -f /var/log/maillog</tt> to make sure that SSL is
              being applied when you expect.
            </p>

            <p>
              For more information about STARTTLS see
              <a href="http://www.sendmail.org/m4/starttls.html">these</a>
              <a href="http://www.sendmail.org/~ca/email/starttls.html"
                >documents</a
              >
              from the Sendmail website, as well as the text for
              <a href="ftp://ftp.isi.edu/in-notes/rfc2487.txt">RFC 2487</a>.
            </p>

            <h4>Configuring your mail client</h4>

            <p>
              Now you just need to point your email client to the new host name
              (in my case, <tt>wincent.com</tt>), the new ports (993 and 995),
              and turn on SSL support for SMTP (no change to the port). It is
              important to change the host name as well as the ports because the
              certificate is tied to the host name.
            </p>
          </div>
        </div>

        <p class="posted">Posted by wincent at May 31, 2006 8:17 PM</p>
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
