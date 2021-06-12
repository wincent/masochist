<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="generator" content="http://www.movabletype.org/" />

<title>Knowledge base: Security notes, Red Hat Enterprise Linux and rssh</title>

<link rel="stylesheet" href="/a/styles.css" type="text/css" />
<link rel="alternate" type="application/rss+xml" title="RSS" href="https://wincent.com/a/knowledge-base/index.rdf" />
<link rel="alternate" type="application/atom+xml" title="Atom" href="https://wincent.com/a/knowledge-base/atom.xml" />

<link rel="start" href="https://wincent.com/a/knowledge-base/" title="Home" />
<link rel="prev" href="https://wincent.com/a/knowledge-base/archives/2006/01/upgrading_to_su_3.php" title="Upgrading to Subversion 1.3.0" />

<link rel="next" href="https://wincent.com/a/knowledge-base/archives/2006/01/objectivec_enum.php" title="Objective-C enumeration macro" />

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

    <div style="text-align: center; font-family: 'Lucida Grande'; margin: 5px 250px 5px 250px; padding: 5px; font-size: x-small; border: 2px solid silver; -webkit-border-radius: 0.5em; -moz-border-radius: 0.5em; background: #fefefe;">
      <p>
        You are currently looking at an older section of the wincent.com website.<br />
        Please check the new version of the site at <a href="https://wincent.com/">https://wincent.com/</a> for updated content.<br />
      </p>
      </div>    <table border="0" align="center" cellspacing="0" cellpadding="0" width="832">
      <tr>
        <td width="32" height="29"><img src="/a/gfx/header/top-left-corner.jpg" width="32" height="29" alt="" /></td>
        <td style="background-image: url(/a/gfx/header/top-edge.jpg); background-repeat: repeat-x;" width="768" height="29" colspan="11"><img src="/a/gfx/header/top-edge.jpg" width="768" height="29" alt="" /></td>
        <td width="32" height="29"><img src="/a/gfx/header/top-right-corner.jpg" width="32" height="29" alt="" /></td>
      </tr>
      <tr>
        <td style="background-image: url(/a/gfx/header/left-side.jpg); background-repeat: repeat-y;" width="32"><img src="/a/gfx/header/left-side.jpg" width="32" height="71" alt="" /></td>
        <td style="background-image: url(/a/gfx/header/center-background.jpg); background-repeat: repeat;" colspan="11" align="center" valign="middle">
  <a href="https://wincent.com/"><img src="/a/gfx/wincent-logo-small-gray-bg.jpg" width="43" height="41" alt="wincent" align="middle" /></a>
  <a href="https://wincent.com/a/knowledge-base/"><img src="/a/gfx/knowledge-base-header.jpg" width="309" height="25" alt="knowledge base" align="middle"/></a>

        </td>
        <td style="background-image: url(/a/gfx/header/right-side.jpg); background-repeat: repeat-y;" width="32"><img src="/a/gfx/header/right-side.jpg" width="32" height="71" alt="" /></td>
      </tr>
      <tr id="menu-bar">
        <td width="32" height="25"><img src="/a/gfx/header/bottom-left-corner.jpg" width="32" height="25" alt="" /></td>
        <td style="background-image: url(/a/gfx/header/spacer-bottom-left.jpg); background-repeat: repeat-x;" width="89" height="25"><img src="/a/gfx/header/spacer-bottom-left.jpg" width="89" height="25" alt="" /></td>
        <td width="73" height="25">
          <ul style="width: 73px; height: 25px;">
            <li class="menu">
              <a href="https://wincent.com/a/products/" title="Full products listing"><img src="/a/gfx/header/products-off.jpg" width="73" height="25" alt="Products" /></a>
              <ul>
                <li><a href="https://wincent.com/products/synergy" title="The original iTunes menu bar controller">Synergy &gt;</a>
                  <ul>
                    <li><a href="https://wincent.com/products/synergy/download" title="Download Synergy">Download</a></li>
                    <li><a href="https://wincent.com/a/products/synergy-classic/purchase/" title="Purchase Synergy">Purchase</a></li>
                    <li><a href="https://wincent.com/products/synergy/help" title="Frequently Asked Questions">FAQ</a></li>
                    <li><a href="https://wincent.com/a/products/synergy-classic/buttons/" title="Free button sets">Button Sets</a></li>
                  </ul>
                </li>
                <li><a href="https://wincent.com/a/products/synergy-advance/" title="Multi-purpose audio companion">Synergy Advance &gt;</a>
                  <ul>
                    <li><a href="https://wincent.com/a/products/synergy-advance/download/" title="Download Synergy Advance">Download preview</a></li>
                    <li><a href="https://wincent.com/a/products/synergy-advance/purchase/" title="Purchase Synergy Advance">Purchase</a></li>
                    <li><a href="https://wincent.com/a/products/synergy-advance/donate/" title="Support development with a donation">Donate</a></li>
                    <li><a href="https://wincent.com/a/products/synergy-advance/donate/" title="Support development by becoming a sponsor">Sponsor</a></li>
                  </ul>
                </li>
                <li><a href="https://wincent.com/a/products/winswitch/" title="Enhanced replacement for Apple's Fast User Switching menu">WinSwitch &gt;</a>
                  <ul>
                    <li><a href="https://wincent.com/a/products/winswitch/download/" title="Download WinSwitch">Download</a></li>
                    <li><a href="https://wincent.com/a/products/winswitch/donate/" title="Support development with a donation">Donate</a></li>
                    <li><a href="https://wincent.com/a/products/winswitch/donate/" title="Support development by becoming a sponsor">Sponsor</a></li>
                    <li><a href="https://wincent.com/a/products/winswitch/faq/" title="Frequently Asked Questions">FAQ</a></li>
                  </ul>
                </li>
                <li><a href="https://wincent.com/a/products/hextrapolate/" title="Programmers number conversion tool">Hextrapolate &gt;</a>
                  <ul>
                    <li><a href="https://wincent.com/a/products/hextrapolate/download/" title="Download Hextrapolate">Download</a></li>
                    <li><a href="https://wincent.com/a/products/hextrapolate/purchase/" title="Purchase Hextrapolate">Purchase</a></li>
                    <li><a href="https://wincent.com/a/products/hextrapolate/faq/" title="Frequently Asked Questions">FAQ</a></li>
                  </ul>
                </li>
                <li><a href="https://wincent.com/a/products/install/" title="Installation and deployment solution for developers">Install &gt;</a>
                  <ul>
                    <li><a href="https://wincent.com/a/products/install/download/" title="Install downloads">Downloads</a></li>
                    <li><a href="https://wincent.com/a/products/install/purchase/" title="Purchase Install">Purchase</a></li>
                    <li><a href="https://wincent.com/a/products/install/donate/" title="Support development with a donation">Donate</a></li>
                    <li><a href="https://wincent.com/a/products/install/donate/" title="Support development by becoming a sponsor">Sponsor</a></li>
                    <li><a href="https://wincent.com/a/products/install/faq/" title="Frequently Asked Questions">FAQ</a></li>
                  </ul>
                </li>
                <li><a href="https://wincent.com/a/products/getsmart-pro/" title="Intelligent download manager">GetSmart Pro &gt;</a>
                  <ul>
                    <li><a href="https://wincent.com/a/products/getsmart-pro/donate/" title="Support development with a donation">Donate</a></li>
                  </ul>
                </li>
                <li><a href="https://wincent.com/a/products/" title="Full product listing">Other products...</a></li>
              </ul>
            </li>
          </ul>
        </td>
        <td width="48" height="25"><a href="https://wincent.com/a/store/" title="Wincent online store"><img src="/a/gfx/header/store-off.jpg" width="48" height="25" alt="Store" /></a></td>
        <td width="63" height="25">
          <ul style="width: 63px; height: 25px;">
            <li class="menu">
              <a href="https://wincent.com/a/services/" title="Full services listing"><img src="/a/gfx/header/services-off.jpg" width="63" height="25" alt="Services" /></a>
              <ul>
                <li><a href="https://wincent.com/a/services/custom-development/" title="Custom software development">Custom Development</a></li>
                <li><a href="https://wincent.com/a/services/mac-consultancy/" title="Apple and Mac OS X consultancy">Apple/Mac Consultancy</a></li>
                <li><a href="https://wincent.com/a/services/web-design/" title="Web design services">Web Design</a></li>
                <li><a href="https://wincent.com/a/services/hosting/" title="Internet web and email hosting">Hosting</a></li>
              </ul>
            </li>
          </ul>
        </td>
        <td width="62" height="25">
          <ul style="width: 62px; height: 25px;">
            <li class="menu">
              <a href="https://wincent.com/a/support/" title="Support resources and links"><img src="/a/gfx/header/support-off.jpg" width="62" height="25" alt="Support" /></a>
              <ul>
                <li><a href="https://wincent.com/a/support/registration/" title="Retrieve lost license codes">Lost License Codes</a></li>
                <li><a href="https://wincent.com/a/support/bugs/" title="Bug tracking and feature request database">Bugs and Feature Requests</a></li>
                <li><a href="https://wincent.com/a/support/demo-licenses/" title="Obtain a demonstration license">Demonstration licenses</a></li>
                <li><a href="https://wincent.com/a/support/forums/" title="Discussion and support forums">Forums</a></li>
                <li><a href="https://wincent.com/a/support/faq/" title="Frequently Asked Questions">FAQ</a></li>
                <li><a href="https://wincent.com/a/support/activation/" title="Product activation and information">Product Activation</a></li>
                <li><a href="https://wincent.com/a/support/tickets/" title="Open or view a support ticket">Support Tickets</a></li>
                <li><a href="https://wincent.com/a/support/lists/" title="Subscribe/unsubscribe to/from a mailing list">Mailing lists</a></li>
              </ul>
            </li>
          </ul>
        </td>
        <td width="53" height="25">
          <ul style="width: 53px; height: 25px;">
            <li class="menu">
              <a href="https://wincent.com/a/about/" title="Company information"><img src="/a/gfx/header/about-off.jpg" width="53" height="25" alt="About" /></a>
              <ul>
                <li><a href="https://wincent.com/a/about/wincent/" title="About Wincent Colaiuta: the person">About Wincent Colaiuta</a></li>
                <li><a href="https://wincent.com/a/about/privacy/" title="About the Wincent Privacy Policy">Privacy Policy</a></li>
              </ul>
           </li>
         </ul>
         </td>
        <td width="49" height="25">
          <ul style="width: 49px; height: 25px;">
            <li class="menu">
              <a href="https://wincent.com/a/news/" title="Latest news items in weblog format"><img src="/a/gfx/header/news-off.jpg" width="49" height="25" alt="News" /></a>
              <ul>
                <li><a href="https://wincent.com/a/news/archives/mac_os_x_news/" title="Apple and Mac OS X-related news">Mac OS X News</a></li>
                <li><a href="https://wincent.com/a/news/archives/product_news/" title="Wincent product news">Product News</a></li>
                <li><a href="https://wincent.com/a/news/archives/site_news/" title="Site-related news">Site News</a></li>
                <li><a href="http://colaiuta.net/" title="Development and other notes from Wincent">Wincent Colaiuta's weblog</a></li>
              </ul>
            </li>
          </ul>
        </td>
        <td width="107" height="25"><a href="http://kbase.wincent.com/" title="Categorized Mac OS X tips and information"><img src="/a/gfx/header/knowledge-base-on.jpg" width="107" height="25" alt="Knowledge Base" /></a></td>
        <td width="62" height="25"><a href="https://wincent.com/a/contact/" title="Contact email form"><img src="/a/gfx/header/contact-off.jpg" width="62" height="25" alt="Contact" /></a></td>
        <td width="72" height="25">
          <ul style="width: 72px; height: 25px;">
            <li class="menu">
              <a href="https://wincent.com/a/site-map/" title="Site overview"><img src="/a/gfx/header/site-map-off.jpg" width="72" height="25" alt="Site Map" /></a>
              <ul>
                <li><a href="https://wincent.com/a/site-map/search/" title="Site search">Search</a></li>
              </ul>
            </li>
          </ul>
        </td>
        <td style="background-image: url(/a/gfx/header/spacer-bottom-right.jpg); background-repeat: repeat-x;" width="90" height="25"><img src="/a/gfx/header/spacer-bottom-right.jpg" width="90" height="25" alt="" /></td>
        <td width="32" height="25"><img src="/a/gfx/header/bottom-right-corner.jpg" width="32" height="25" alt="" /></td>
      </tr>
    </table>
  <div id="breadcrumbs">
    <p><a href="https://wincent.com/">Main</a>&nbsp;&gt;&nbsp;<a href="../../../">Knowledge Base</a>&nbsp;&gt;&nbsp;<a href="../../">Archives</a>&nbsp;&gt;&nbsp;<a href="../">2006</a>&nbsp;&gt;&nbsp;01    </p>
  </div>


<div id="container">

<div class="content">

<p align="right">
<a href="https://wincent.com/a/knowledge-base/archives/2006/01/upgrading_to_su_3.php">&laquo; Upgrading to Subversion 1.3.0</a> |

<a href="https://wincent.com/a/knowledge-base/">Main</a>
| <a href="https://wincent.com/a/knowledge-base/archives/2006/01/objectivec_enum.php">Objective-C enumeration macro &raquo;</a>

</p>

<h2>January 21, 2006</h2>

<h3>Security notes, Red Hat Enterprise Linux and rssh</h3>

<p>When the old server died I switched to <a href="http://service.bfast.com/bfast/click?bfmid=30735717&amp;siteid=41506187&amp;bfpage=hosting_headaches">Rackspace</a> because I wanted to forget hosting problems once and for all. At the same time I switched to <a href="http://www.redhat.com/">Red Hat</a> <a href="http://www.redhat.com/apps/redirect.apm/en_us/USA/rhel/?rhpage=/index.html/home_mainnav**">Enterprise Linux</a> not because I disliked <a href="http://www.freebsd.org/">FreeBSD</a> (in fact, I still love it) but because Red Hat was the "most supported" option offered by Rackspace, as far as I could tell. "Most supported" in the sense that the Rackspace staff seemed to have much more experience with Red Hat, and that would hopefully mean better tech support. Like I said, I didn't want any more hosting problems ever again.</p>

<p>I am a security freak. Red Hat Enterprise Linux (RHEL) is pretty secure out of the box. Their <a href="http://www.redhat.com/en_us/USA/rhn/rhndetails/update/">automatic update system</a> allows servers to check once per day for packages with security fixes in them which are then automatically downloaded and installed, including any dependencies. One of the reasons RHEL costs money is that Red Hat stands behind this system and certifies it. Red Hat is basically saying, "We're not only going to fix individual security issues, but we'll take care of all the quality assurance and testing and ensure that the system as a whole continues to function no matter how many patches we apply". You're not just paying for "Linux with a bunch of open source packages thrown on top of it"; you're paying for a total "server solution" which if you can overlook the nauseating marketing language for a second translates to the expectation that the thing will work as a well-integrated whole, not just as the sum of a bunch of components that happen to work too. It's <em>only</em> because of this guarantee that I'm happy to place my trust in an automatic self-update system. (That and the fact that if something ever did go wrong, Rackspace's monitoring system would alert their staff straight away and they'd fix it even if I was asleep on the other side of the world or flying across the Pacific Ocean in a jumbo jet.)</p>

<h4>Plugging the FTP security and shell access holes</h4>

<p>Being a security freak, I didn't want users on the machine uploading files via the insecure <a href="http://en.wikipedia.org/wiki/File_Transfer_Protocol">FTP</a> protocol. But in order to give them access via the superior and secure <a href="http://en.wikipedia.org/wiki/SSH_file_transfer_protocol">SFTP</a> protocol it appeared that I would have to give them shell access, unlike on my old server where it was easy to set up "virtual", non-shell accounts for the purposes of SFTP and email only. I wasn't about to give out shell access. To me, granting shell access on a system is like owning a jewellery store, leaving the store unattended and the door unlocked and letting people come in at will, resting on the assumption that the gold and diamonds will be safe because they're in locked glass display cabinets. As soon as you grant shell access you make yourself vulnerable to all of those security problems in which "local users" can "escalate their privileges" and gain root. Without local access none of these vulnerabilities are directly exploitable; the only attack vector available then is for users to try indirectly, uploading a PHP or CGI script which targets the vulnerability, and there are things we can do to make that more difficult (more on this later...).</p>

<div id="a000178more"><div id="more">
<p>So I found out about a need little shell called <a href="http://www.pizzashack.org/rssh/">rssh</a> by Derek Martin. You grant the users shell access, and set their shell to <tt>/usr/local/bin/rssh</tt>. But rssh is no normal shell; it will allow users to execute only one command, <tt>/usr/libexec/openssh/sftp-server</tt> (you can also allow other commands &mdash; <tt>scp</tt>, <tt>cvs</tt>, <tt>rdist</tt> and <tt>rsync</tt> &mdash; if you want). So that's two security problems eliminated (insecure FTP and shell access for users). With rssh it will be very difficult for users to obtain escalated privileges. The server now becomes a jewellery store in which authorized people can visit but only with their hands tied behind their back.</p>

<h4>Total filesystem access</h4>

<p>But the story doesn't end there. The problem with the <a href="http://www.openssh.org/">OpenSSH</a> implementation of SFTP is that it does not restrict users to their home directories. Once logged in, users can browse the entire file system, or at least the parts of which for which they have access. It <em>is</em> true that your file system permissions should be set in a way that prevents users from accessing stuff that they shouldn't have access to (like sensitive configuration files, logs which could reveal information that would be useful to an attacker looking for a weakness, or other people's email) but even so allowing free reign to explore the file system seems to be unnecessarily liberal and is simply asking for trouble.</p>

<p>When I was on FreeBSD I addressed this by using the <a href="http://ssh.com/products/tectia/server/">commercial SFTP server</a> from <a href="http://ssh.com/">ssh.com</a>, which allows you to "chroot" users to their directories upon logging in, thus preventing them from moving outside their home directories. When you "chroot" you are effectively "changing the root" of the file system. The user's home directory might be at <tt>/home/johnsmith/</tt> but when logged in via SFTP that folder becomes the new "root" of the file system (in other words, to the user, <tt>/home/johnsmith/</tt> looks to be <tt>/</tt> and he cannot <tt>cd</tt> "up" and out of that directory). For this reason this configuration is sometimes referred to as a "chroot jail"; the idea is that the user can't escape from it.</p>

<p>Now that I'm using RHEL I wanted to stick with the default OpenSSH install rather than resort to third-party tools; RHEL really manifests its strength, security and ease of maintenance when you keep things as close to the standard base installation as possible.</p>

<p>The good news is that rssh allows you to set up a chroot jail and confine users to it. The bad news is that it can be tricky to set up. But once it is set up, your jewellery store is even more secure: it's now a jewellery store in which each customer has their own private booth and it's physically impossible for them to break out of it and look at other customers' booths.</p>

<p>Why is setting up a chroot jail so hard? The main reason is that applications running inside the jail (in our case, <tt>/usr/libexec/openssh/sftp-server</tt>) often dynamically link to library files and those files need to be inside the jail too otherwise the applications cannot access them and will fail to run. When I run the <tt>ldd</tt> tool on the <tt>sftp-server</tt> application it gives me a list of libraries that will need to be made available inside the jail:</p>

<pre>libresolv.so.2
libutil.so.1
libz.so.1
libnsl.so.1
libcrypto.so.4
libkrb5.so.3
libk5crypto.so.3
libcom_err.so.3
libc.so.6
libgssapi_krb5.so.2
libdl.so.2
ld-linux.so.2</pre>

<p>I could copy these files to the jail but that would take up a lot of disk space if I had to do it for every single jail on the system. I could alternatively put all the users inside a single jail to save a bit of disk space; that would stop them from searching for sensitive configuration and log files but it still wouldn't prevent them from at worst seeing each other's data or at best finding out what other users have accounts on the system.</p>

<p>The solution is to use "hard links" ("symbolic" links won't work across the jail boundary). Inside the jail you can set up a "hard link" reference to each of the necessary library files. The reference takes up effectively no space on the disk and to the jailed user it looks, feels and acts just like the original file. If the user were to delete the link, the original file would be untouched. On my system the use of hard links saves about 3.6MB of disk space per jail (compared with simply copying the required files).</p>

<p>In addition to hard-linking the library files listed by <tt>ldd</tt>, you also need to provide hard links to the <tt>sftp-server</tt> application itself and the <tt>rssh_chroot_helper</tt> executable (along with all the libraries to which the latter links). If either of these executables makes use of the dynamic linker you also should provide links to the dynamic linker support files, <tt>/etc/ld.so.cache</tt> and <tt>/etc/ld.so.conf</tt>. Finally, you'll find that you'll need an appropriate <tt>/etc/passwd</tt> inside the jail itself in order for authentication to succeed.</p>

<p>There are some technical hurdles to be overcome in doing all this:</p>

<ol>
  <li>It's time consuming to manually set this all up; an automated method for setting up a chroot jail needs to be developed. That means we need to write a shell script.</li>
  <li>Prior to creating any links we need to ensure that the appropriate directories are in place; for example, if we need to link to libraries in <tt>/usr/lib/</tt> then each chroot jail must contain <tt>usr/lib/</tt> subdirectories.</li>
  <li>Most of the library files listed by <tt>ldd</tt> are actually symbolic links themselves, and if you try to create a hard link that points to a symbolic link you'll get a warning and it won't work properly.</li>
  <li>It can be cumbersome to find out in an automated way what the name of the real file (the target of the symbolic link) really is.</li>
  <li>Once you know the name of the target file and the name of the symbolic link you'll need to create a hard link to the real target file <em>and</em> a relative symbolic link to your newly created hard link.</li>
  <li>One of the goals of using the chroot jail is to prevent users from knowing what other user accounts are on the system: this means that instead of just hard-linking to the <tt>/etc/passwd</tt> file you should create a new one for each user inside the user's jail which contains <em>only</em> the entry for that user.</li>
  <li>You should be able to run the script and then re-run it at a later date (for example, let's say you update your OpenSSH or rssh installations and want to "refresh" the jails).</li>
  <li>You need to set directory and permissions carefully so that a user logged in to a chroot jail can't inadvertently delete, move or rename any of these important files, break the jail and effectively lock themselves out.</li>
  <li>The script needs to run with root privileges to do all this, and giving that it is both automatic and making lots of changes to the file system it needs to implement lots of error checking, bail out on the first sign that things might be going wrong, and be used with extreme caution.</li>
  <li>Bonus points for automatically appending per-user configuration entries to the <tt>/usr/local/etc/rssh.conf</tt> file.
</ol>

<p>The rssh distribution includes a script called <tt>mkchroot.sh</tt> which does a lot of this set-up for you if you're running the right kind of Red Hat distribution. I wanted to write my own script from scratch, however, because there are a few things I felt I could do better. For example: <tt>mkchroot.sh</tt> doesn't create hard links, it copies all of the libraries, taking up a lot of disk space unnecessarily; it also copies tools (for example <tt>scp</tt>) and libraries (such as name service resolution libraries) which I don't want or need inside my jails; finally, it copies the entire <tt>/etc/passwd</tt> file rather than a subset of it.</p>

<p>Now, I'm by no means a shell scripting expert. In fact, I feel very uncomfortable writing shell scripts, but I've managed to come up with something that seems to work. It meets all of the goals I listed above and addresses the issues I have with the <tt>mkchroot.sh</tt> script. It's main distinguishing features are: the use of variables to identify commandline executables (this is a habit of mine which ensures that the script will work regardless of what the PATH setting is, and it allows me to change all references to a tool in the script by changing a single variable); and the definition of a number of functions &mdash; <tt>die()</tt>, <tt>createdir()</tt>, <tt>checkbase()</tt> and <tt>link()</tt> &mdash; to handle commonly performed operations and make the code more readable</p>

<p>Here's the first version of my script which has performed fine in my own testing on RHEL3. If you choose to use this script or any part of it you do so at your own risk:</p>

<pre>#!/bin/sh
# mkrsshjail.sh
# Copyright 2006 Wincent Colaiuta
# Version 1.0 (20 January 2006)
<br />
#
# Constants
#
<br />
# Tools/executables:
AWK="/usr/bin/awk"
BASENAME="/bin/basename"
CAT="/bin/cat"
CHOWN="/bin/chown"
DIRNAME="/usr/bin/dirname"
EGREP="/bin/egrep"
FIND="/usr/bin/find"
GREP="/bin/grep"
LDD="/usr/bin/ldd"
LN="/bin/ln"
LS="/bin/ls"
MKDIR="/bin/mkdir"
RSSHHELPER="/usr/local/libexec/rssh_chroot_helper"
SFTPSERVER="/usr/libexec/openssh/sftp-server"
WC="/usr/bin/wc"
WHOAMI="/usr/bin/whoami"
<br />
# Support files:
LDCACHE="/etc/ld.so.cache"
LDCONF="/etc/ld.so.conf"
PASSWD="/etc/passwd" 
RSSHCONF="/usr/local/etc/rssh.conf"
<br />
#
# Functions
#
<br />
die ()
{
  SCRIPT=`"${BASENAME}" "$0"`
  echo "${SCRIPT}: error: $1" &gt;&amp;2
  exit 1
}
<br />
createdir ()
{
  if [ $# -ne 1 ]; then
    die "createdir() requires exactly one argument"
  fi 
  if [ ! -d "$1" ]; then
   if [ -e "$1" ]; then
     die "createdir(): $1 already exists and is not a directory"
   else 
    "${MKDIR}" -p -v "$1" || die "createdir() failed for path: $1"
   fi
  fi
}
<br />
checkbase ()
{
  if [ $# -ne 1 ]; then
    die "checkbase() requires exactly one argument"
  fi
  BASE="$1"
  COUNT=`echo "${BASE}" | "${EGREP}" -c "\/$"`
  if [ $COUNT -ne 0 ]; then
    die "checkbase() requires base directory to have no trailing slash"
  fi
}
<br />
link ()
{
  if [ $# -ne 2 ]; then
    die "link() requires exactly two arguments"
  fi
  FILE="$1"
  BASE="$2"
  DIR=`"${DIRNAME}" "${FILE}"`
  checkbase "${BASE}"
  createdir "${BASE}${DIR}"
  if [ ! -f "${FILE}" ]; then
    die "link(): ${FILE} is not a regular file"
  fi
  if [ -L "$1" ]; then
    NAME=`"${BASENAME}" "${FILE}"`
    TARGET=`"${FIND}" "${DIR}" -name "${NAME}" -printf "%l\n"`
    TRUENAME="${DIR}/${TARGET}"
    echo "${FILE} is a symbolic link with target ${TRUENAME}"
    "${LN}" -v -f "${TRUENAME}" "${BASE}${TRUENAME}"  || \
      die "link() failed for file: ${TRUENAME}" 
    pushd "${BASE}${DIR}"
    "${LN}" -v -f -s "${TARGET}" "${NAME}" || \
      die "link() (symbolic) failed for file: ${BASE}${FILE}"
    popd
  else
    "${LN}" -v -f "${FILE}" "${BASE}${FILE}" || \
      die "link() failed for file: ${FILE}"
  fi
}
<br />
#
# Main
#
<br />
if [ `"${WHOAMI}"` != "root" ]; then
  die "this tool must be run as root"
fi
<br />
if [ $# -ne 2 ]; then
  die "exactly two arguments required ('path to chroot' and 'username')"
fi
<br />
BASE="$1"
USER="$2"
checkbase "${BASE}"
<br />
# create relevant /etc/passwd entry
DIR=`"${DIRNAME}" "${PASSWD}"`
createdir "${BASE}${DIR}"
"${CAT}" "${PASSWD}" | "${EGREP}" "^${USER}:" &gt; "${BASE}${PASSWD}"
COUNT=`"${WC}" -l "${BASE}${PASSWD}" | "${AWK}" ' { print $1 } '`
if [ $COUNT -ne 1 ]; then
  die "error creating ${BASE}${PASSWD} from ${PASSWD}"
fi 
<br />
# Get an up-to-date list of libraries linked to by sftp-server:
LIBS=`"${LDD}" "${SFTPSERVER}" | "${AWK}" ' { print $3 } '`
for LIB in ${LIBS}; do
  link "${LIB}" "${BASE}"
done
<br />
LIBS=`"${LDD}" "${RSSHHELPER}" | "${AWK}" ' { print $3 } '`
for LIB in ${LIBS}; do
  link "${LIB}" "${BASE}"
done
<br />
# hardlink support files
link "${LDCACHE}" "${BASE}"
link "${LDCONF}" "${BASE}"
<br />
# hardlink tools
link "${RSSHHELPER}" "${BASE}"
link "${SFTPSERVER}" "${BASE}"
<br />
# append to rssh config
CONFIG="user=${USER}:022:00010:\"${BASE}\""
COUNT=`"${CAT}" "${RSSHCONF}" | "${EGREP}" -c "${CONFIG}"`
if [ $COUNT -eq 0 ]; then
  echo "Appending line to ${RSSHCONF}"
  echo "${CONFIG}"
  echo "${CONFIG}" &gt;&gt; "${RSSHCONF}"
fi
<br />
# tighten ownership on chroot jail dir
"${CHOWN}" -v root:root "${BASE}"
<br />
exit 0</pre>

<p>The only shortcoming of the per-user chroot jail approach is that logging via the syslog facility is broken. It is possible to modify your start-up scripts to start syslog with additional "FIFOs" inside each jail, but there are problems with this approach; as the rssh CHROOT documentation says:</p>

<blockquote>... in order to log chroot activity, you need to create a socket for syslog to log to (i.e. /dev/log, see above) in each of the chroot jails.  However, the number of sockets syslog can listen to is generally limited.  On most Linux systems, that limit is a maximum of 20, though it can be changed by editing the source code to syslogd. On other platforms, this may not even be possible.  So if you go with individual chroot jails, you either need to be satisfied without logging for most of your users, or recompile syslogd and manually configure it to open a socket in each of your users' jails.  And while I haven't done it, I suspect creating large numbers of sockets for syslogd to listen to will make logging to syslog somewhat painful.</blockquote>

<p>For the time being, I'll just have to be "satisfied without logging", although the truth is that I am not sure exactly what kind of stuff would be logged by <tt>sftp-server</tt> and <tt>rssh</tt> anyway...</p>

<h4>Hardening Apache CGI and PHP</h4>

<p>So the combination of SFTP, rssh and per-user chroot provides quite a good degree of security. We now have a jewellery store in which customers can only enter with their hands tied behind their backs, they are confined to their own private booths, and they have no way of knowing what other customers have booths at the store.</p>

<p>That leaves us with the "shared server" security problems which have long plagued <a href="http://httpd.apache.org/">Apache</a>. These are not a security "hole" in the formal sense but rather a consequence of the fact that Apache generally runs as user "apache" (or "nobody" or "www") and that means that <em>everybody</em> with a virtual host on the server ends up running with same privileges. That means that a user can write a CGI or PHP script, and that script will be able to read/write any file for which the webserver has privileges. Malicious users could sniff for database passwords and other sensitive information. This is like providing all of our jewellery store customers with equally-capable remote control robots which can move around outside of their private booths.</p>

<p>There are ways around this but they are generally not all that compatible with the idea of mass shared/virtual hosting. For example, you could run one Apache process for every user on the system but that's not viable for large numbers of virtual hosts. You could also try to set up a private virtual server for each user using software like <a href="http://www.xensource.com/">Xen</a> but again scalability is a problem.</p>

<p>When I was on FreeBSD I used the <a href="http://www.freebsd.org/doc/en_US.ISO8859-1/books/arch-handbook/jail.html">inbuilt jail subsystem</a> (<a href="http://docs.freebsd.org/44doc/papers/jail/jail.html">see also</a>) which allowed me to create relatively lightweight virtual private servers. In theory no user could break out of his or her jail nor see or touch other users' data. But, still, there were limits to how many I could comfortably fit on a single host machine. Each one required its own IP address and considerable disk space. Furthermore, every time that I had to patch the host operating system I had to patch it inside each of the jailed systems as well. Even with automation it was a time consuming and complicated process.</p>

<p>With the move to Rackspace I was moving to a system with a single IP address and with no OS-level support for anything like FreeBSD's jail solution. So I had to do the best I could to lock things down without resorting to virtualization.</p>

<p>CGI scripts are fairly elegantly handled by the <a href="http://httpd.apache.org/docs/2.0/suexec.html">Apache's suEXEC support</a>. With suEXEC, when "johnsmith" uploads a CGI script to the server Apache will run that script as user "johnsmith", not as user "apache". Another user, "henrykrinkle", will find that his scripts run as user "henrykrinkle". When this is combined with appropriate file permissions, the is no way that "johnsmith" can use a CGI script to read or alter the files of "henrykrinkle" and vice versa.</p>

<p><a href="http://www.php.net/">PHP</a> is not so easily handled. It has a thing called <a href="http://www.php.net/features.safe-mode">"Safe Mode"</a> which is designed to partially address the shared server security problem. I say partially because the PHP documentation itself admits that the solution is not ideal:</p>

<blockquote>It is architecturally incorrect to try to solve this problem at the PHP level, but since the alternatives at the web server and OS levels aren't very realistic, many people, especially ISP's, use safe mode for now.</blockquote>

<p>The problem is that PHP is generally used as an Apache module so by definition PHP scripts run with the same user, group and privileges as the webserver itself. You can try installing <a href="http://www.php.net/security.cgi-bin">PHP as a CGI binary</a> but you may find that not all existing PHP software plays nicely with it, it may have security risks of its own, and in any case PHP-as-cgi is not a standard part of RHEL so you lose the benefit of any automatic updates provided by Red Hat.</p>

<p>Safe Mode is pretty much your only option in this case. It won't make your scripts run with the user and group of the user that owns the scripts, but it will perform additional checks before executing code and opening files, it allows you to restrict access to certain parts of the file system (such as a user's home directory) and it allows you to disallow the use of certain functions. It is not perfect, impossible-to-circumvent security, but it is better than none at all.</p>

<p>To turn on suEXEC and Safe Mode protection for "johnsmith" you'd add something like this to his <a href="http://httpd.apache.org/docs/2.0/vhosts/examples.html">VirtualHost</a> entry in your Apache configuration:</p>

<pre>SuexecUserGroup johnsmith johnsmith
php_admin_value safe_mode "1"
php_admin_value open_basedir "/home/johnsmith/public_html/"</pre>

<p>One of the most annoying things about Safe Mode is that files created by PHP scripts will be owned by the Apache process itself and not by the user running the scripts. This can make it difficult for scripts to delete files which they themselves created. There is also a lot of PHP software out there that doesn't work properly with Safe Mode and in those cases you may have to turn off Safe Mode on a per-directory basis. If you do this, try to disable Safe Mode in the smallest possible region of the file system that will enable the software to work (in other words, turn it off in the sub-directory where the software is installed rather than turning it off for the user's entire home directory). You can also often leave the <tt>open_basedir</tt> directive in effect, at least providing some degree of protection from casual snooping.</p>

<p>So to take our jewellery store analogy to its ultimate, contorted extreme, what we now have is a jewellery store in which persons who provide the appropriate identification are allowed to enter into their own private booths with their hands tied behind their backs, and with no way of knowing what other customers might have private booths of their own. Each customer has a remote control robot that could conceivably be used to snoop around outside their booth, but it's a disabled robot that's programmed to not move outside certain boundaries and is unlikely to be of much use to all but the most skillful and determined attacker. And if that's the kind of user you're giving accounts to perhaps you should think twice about it.</p>
</div></div>

<p class="posted">Posted by wincent at January 21, 2006 03:19 PM</p>





</div>
</div>


<div id="footer">
  <p>Copyright &copy; 1997-2009 <a href="mailto:win@wincent.com">Wincent Colaiuta</a>.</p>
  <p>Page last updated 00:30:12, 19 February 2010.</p>
  <p>
    <a href="http://jigsaw.w3.org/css-validator/"><img style="border:0;width:88px;height:31px" src="/a/gfx/vcss.gif" alt="Valid CSS!" align="middle"/></a>
    <a href="http://validator.w3.org/check?uri=referer"><img style="border:0;width:88px;height:31px" src="/a/gfx/valid-xhtml10.png" alt="Valid XHTML 1.0!" align="middle" /></a>
  </p>
  <p><a href="mailto:win@wincent.com">Report broken link</a></p>
</div>

</body>
</html>
