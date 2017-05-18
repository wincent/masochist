---
tags: nokia 5130 wiki
cache_breaker: 1
---

# Resetting the code

There are sites out there which purport to give you a 10-digit "master" code, derived from your phone's IMEI (serial number), which you can use in lieu of your actual security code if you ever forget it:

-   <http://www.unlockme.co.uk/master.php>
-   <http://nfader.su/>

You enter your IMEI (which you can most likely find on your phone's packaging, or by entering `*#06#`), and it spits out a master code in return.

This didn't work for me, nor did Nokia's default code of 12345.

I couldn't perform a factory reset either, either from the phone menus or by entering a `*#7380#`, as that just asked me for the security code before proceeding.

This was supposedly a "soft reset". I didn't try the "hard reset" procedure [described here](http://en.kioskea.net/faq/470-how-to-reset-your-nokia).

# Retrieving the code

Following the instructions in [this YouTube video](http://www.youtube.com/watch?v=Oe79ml0Dr4w) I was able to not only reset my code, but also read the current code.

You need Nemesis Service Suite (NSS), downloadable from [here](http://www.b-phreaks.co.uk/NSSDownloadLanding.htm). My understanding of [their website](http://www.b-phreaks.co.uk/index.php?main_page=page_2) is that they are the creators of NSS, but as they are essentially an unknown vendor to me I ran the software inside a virtual machine (a Windows XP SP 3 machine running in Parallels), just in case.

It seems that you also need the Nokia PC Suite, which you can get from Nokia itself for free. For example, here in Spain, searching for "Nokia PC Suite" on [Google](/wiki/Google) turned up [this page](http://www.nokia.es/soporte/software/pc-suites) as the first result. 7.1 is the current version, and is compatible with the 5130.

Note that the NSS installer talks about drivers, but I didn't need to install any drivers afterwards. I presume that any drivers that are needed get installed by the Nokia PC Suite, and that's why you need to install it.

From there it's just a case of following the instructions in the video. I personally found that I kept getting an error message during the "Scan for product" step. This was when I had at first only installed NSS. I then installed the Nokia PC Suite and continued to get the error. Finally, I was able to get the error to go away by exiting the Nokia PC Suite, NSS, and also unplugging the phone and plugging it in again both before, during and after the "Scan" step. I'm afraid I can't be more precise than that, but finally, the scan worked. If it doesn't work for you, keep trying.

So here's the basic procedure:

-   Run NSS
-   Click "Search"
-   Click "Phone Info"
-   Click "Scan"; I basically just kept plugging in the phone in "PC Suite" mode before, during and after the "Scan" until I finally got it to get past the "Scan for product" message without reporting an error
-   Click "Permanent Memory"
-   Click "Read"
-   Note the path to `.pm` file, open it in Notepad
-   Scroll down to entry \[308\]
-   Look at the 5th line below that (5=x)
-   Your 5-digit security code can be determined by removing the 3s in odd spots (position 1,3,5 etc) and deleting the trailing zeros (for example, if the line reads `5=31323334350000000000`, then the security code is 12345)

You can then use the extracted security code in the phone to, for example, set a new code.
