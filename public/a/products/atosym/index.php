<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>atosym: dSYM address to symbol conversion</title>
    <link rel="stylesheet" href="/a/styles.css" type="text/css" />
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
          <!-- Begin: header content -->
          <a href="https://wincent.dev/"
            ><img
              src="/a/gfx/wincent-logo-small-gray-bg.jpg"
              width="43"
              height="41"
              alt="wincent"
              align="middle"
          /></a>
          <img
            src="/a/gfx/atosym-header.jpg"
            width="550"
            height="24"
            alt="atosym"
            align="middle"
          />
          <!-- End: header content -->
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
                  src="/a/gfx/header/products-on.jpg"
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
              src="/a/gfx/header/knowledge-base-off.jpg"
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
        <a href="https://wincent.dev/">Main</a>&nbsp;&gt;&nbsp;<a href="../"
          >Products</a
        >&nbsp;&gt;&nbsp;Atosym
      </p>
    </div>
    <div id="container">
      <div id="left">
        <div class="sidebar">
          <h2>atosym links</h2>
          <ul>
            <li>
              <a href="https://wincent.dev/a/products/atosym/">Information</a>
            </li>
            <li>
              <a
                href="https://wincent.dev/a/support/forums/ubbthreads.php?ubb=postlist&amp;Board=15&amp;page=1"
                >Discussion & support forums</a
              >
            </li>
          </ul>
          <h2>On this page</h2>
          <ul>
            <li><a href="#usage">Usage</a></li>
            <li><a href="#download">Download</a></li>
            <li><a href="#donations">Donations</a></li>
            <li><a href="#history">History</a></li>
          </ul>
          <p align="center">
            <a href="http://apple.com/universal/"
              ><img
                src="https://wincent.dev/a/gfx/MacOSX_Universal_60px.gif"
                width="95"
                height="60"
                alt="Universal"
                border="0"
            /></a>
          </p>
          <p align="center">
            <a href="http://www.apple.com/macosx/"
              ><img
                src="https://wincent.dev/a/gfx/tiger-compatible.jpg"
                width="128"
                height="128"
                alt="Tiger Compatible"
                border="0"
            /></a>
          </p>
        </div>
      </div>
      <div id="center">
        <div class="content">
          <h3>atosym</h3>

          <p>
            <tt>atosym</tt> is a command-line tool that I hacked together to
            serve as a replacement for <tt>atos(1)</tt> until Apple makes a
            version that is compatible with the dSYM debug information format
            (this was expected in Leopard but it appears to not be the case).
            Basically it calls on GDB, the only tool currently capable of
            parsing dSYM files, to do the work behind the scenes.
          </p>

          <h4><a id="usage" name="usage"></a>Usage</h4>

          <pre>
atosym -d dSYM-file [-arch i386|ppc] [-o offset] [address ...]</pre
          >

          <p>
            The only compulsory argument is a <tt>dSYM-file</tt> passed in via
            the <tt>-d</tt> switch.
          </p>

          <p>
            You may optionally specify an architecture with the
            <tt>-arch</tt> switch (<tt>i386</tt> or <tt>ppc</tt>; defaults to
            <tt>i386</tt>).
          </p>

          <p>
            If you specify an offset with the <tt>-o</tt> switch then it will be
            automatically added to any addresses before performing conversion to
            symbols; this is useful when working with loadable bundles which can
            be located different locations in memory.
          </p>

          <p>
            If you specify an address (or addresses) in either decimal or
            hexadecimal notation (preceded with "0x") then <tt>atosym</tt> will
            attempt the address to symbol conversion.
          </p>

          <p>
            If you do not specify any addresses then <tt>atosym</tt> will enter
            interactive mode (demonstrated below).
          </p>

          <h5>Example: non-interactive mode</h5>

          <pre>
$ atosym -d dSYMfile 0x1f70
Line 10 of "source.m" starts at address 0x1f70 &lt;main+78&gt; and
 ends at 0x1f78.</pre
          >

          <h5>Example: interactive mode</h5>

          <pre>
$ atosym -d dSYMfile 
Enter an address in hex, or quit to exit:
> 0x2300
No line number information available for address 0x2300
> 0x1f77
Line 10 of "source.m" starts at address 0x1f70 &lt;main+78&gt; and
 ends at 0x1f78.
> quit</pre
          >

          <h4><a id="download" name="download"></a>Downloads</h4>

          <p>
            Version 1.0 is available for
            <a href="https://wincent.dev/download.php?item=atosym.zip"
              >download here</a
            >
            (20KB, source and Universal Binary executable included).
          </p>

          <p>
            You can also check out the latest version of the source via Git:
          </p>

          <pre>git clone git://git.wincent.dev/atosym.git</pre>

          <h4><a id="donations" name="donations"></a>Donations</h4>

          <p>
            <tt>atosym</tt> is free software released under the BSD license.
          </p>

          <h4>Links</h4>

          <ul>
            <li>
              <a href="http://www.softedge.se/dSymbolizer/">dSymbolizer</a> is a
              GUI-based tool for performing address to symbol conversion on
              entire crash logs at once.
            </li>
          </ul>

          <h4><a id="history" name="history"></a>History</h4>

          <h5>Version 1.0.1 (not yet released)</h5>

          <ul>
            <li>
              Use <tt>/usr/bin/gdb</tt> script with <tt>-arch</tt> flag instead
              of manually selecting and launching a GDB executable.
            </li>
          </ul>

          <h5>Version 1.0 (16 August 2006)</h5>

          <ul>
            <li>Initial release</li>
          </ul>
        </div>
      </div>
      <div id="right">
        <div class="sidebar">
          <h2>Latest News</h2>

          <p class="quick-links-date">25 Mar 2008</p>
          <ul>
            <li>
              <h4>Final server migration this week</h4>
              I've been working on moving to the new server for nearly a month
              now, a process which has been quite slow because all the data has
              to be exported from a number of &quot;legacy&quot; applications
              and imported into a brand... [<a
                href="https://wincent.dev/a/news/archives/2008/03/final_server_mi.php"
                >More...</a
              >]
            </li>
          </ul>

          <p class="quick-links-date">26 Feb 2008</p>
          <ul>
            <li>
              <h4>Server migration in progress</h4>
              The server migration from Rackspace to INetU is currently
              underway. My aim is do this very carefully, service by service,
              and keep downtime to a minimum; hopefully minutes rather than
              hours. Just in case there is any interruption during the... [<a
                href="https://wincent.dev/a/news/archives/2008/02/server_migratio.php"
                >More...</a
              >]
            </li>
          </ul>

          <p class="quick-links-date">21 Feb 2008</p>
          <ul>
            <li>
              <h4>Call for Bansshee donations</h4>
              Bansshee is a free, open-source tool to thwart dictionary-based
              SSH attacks. As a convenience to users there are three domains
              that resolve to the
              Bansshee project page. These are coming up for renewal soon (they
              expire... [<a
                href="https://wincent.dev/a/news/archives/2008/02/call_for_banssh.php"
                >More...</a
              >]
            </li>
          </ul>

          <p class="quick-links-date">7 Feb 2008</p>
          <ul>
            <li>
              <h4>Upcoming DNS changes</h4>
              In preparation for the server move at the end of this month I'll
              soon be migrating DNS servers. I'll be doing everything I can to
              minimize downtime, and hopefully come close to eliminating it
              entirely as there will be a... [<a
                href="https://wincent.dev/a/news/archives/2008/02/upcoming_dns_ch.php"
                >More...</a
              >]
            </li>
          </ul>

          <p class="quick-links-date">23 Jan 2008</p>
          <ul>
            <li>
              <h4>Synergy 3.5a5 released</h4>
              I'm pleased to announce the availability of version 3.5a5 of
              Synergy, the fifth alpha release in the brand new 3.5 series. The
              last release, version 3.2, was Leopard-compatible but would also
              run on all versions of Mac OS X from... [<a
                href="https://wincent.dev/a/news/archives/2008/01/synergy_35a5_re.php"
                >More...</a
              >]
            </li>
          </ul>

          <p class="more">
            <a href="https://wincent.dev/a/news/">More news articles...</a>
          </p>
        </div>
      </div>
    </div>
    <div id="footer">
      <p>
        Copyright &copy; 1997-2009

      </p>
      <p>Page last updated 00:30:11, 19 February 2010.</p>
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
