---
tags: google adsense
---

I started off from [this article](http://www.dankohn.com/archives/000338.html) which offers an out-of-date but still helpful summary of one way of adding [Google AdSense](/wiki/Google_AdSense) to a [MediaWiki](/wiki/MediaWiki) installation.

The basic claim is that as [AdSense](/wiki/AdSense) requires [JavaScript](/wiki/JavaScript) you can't add it to your articles and templates directly. You must instead edit the [MediaWiki](/wiki/MediaWiki) source files.

# Creating the [JavaScript](/wiki/JavaScript)

I began by logging into my [AdSense](/wiki/AdSense) account and creating the [JavaScript](/wiki/JavaScript) required to display a 125 by 125 "button" advertisement:

    <!-- Google AdSense "button" block (125x125) -->
    <script type="text/javascript"><!--
    google_ad_client = "pub-3544007006233860";
    google_ad_width = 125;
    google_ad_height = 125;
    google_ad_format = "125x125_as";
    google_ad_type = "text";
    google_ad_channel = "";
    //--></script>
    <script type="text/javascript"
      src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
    </script>

And a 125 by 600 vertical "skyscraper" advertisement:

    <!-- Google AdSense "skyscaper" block (125x600) -->
    <script type="text/javascript"><!--
    google_ad_client = "pub-3544007006233860";
    google_ad_width = 120;
    google_ad_height = 600;
    google_ad_format = "120x600_as";
    google_ad_type = "text";
    google_ad_channel = "";
    google_color_border = "FFFFFF";
    google_color_bg = "FFFFFF";
    google_color_link = "0000FF";
    google_color_text = "000000";
    google_color_url = "008000";
    //--></script>
    <script type="text/javascript"
      src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
    </script>

I chose text-only ads with a very unobtrusive color scheme because I don't want these ads to distract people from the content. The actual [JavaScript](/wiki/JavaScript) generated will be different depending on the settings you choose and obviously your `google_ad_client` id will be different than mine.

I saved these two snippets into two files, `adsense-button.php` and `adsense-skyscraper.php` respectively and put them at the top level of my site.

# Customizing the MonoBook template

I then made the following changes to the MonoBook template (in `skins/MonoBook.php`:

    Index: skins/MonoBook.php
    ===================================================================
    --- skins/MonoBook.php  (revision 20020)
    +++ skins/MonoBook.php  (working copy)
    @@ -169,6 +169,12 @@
                            </div></form>
                    </div>
            </div>
    +        <div class="portlet">
    +                <h5>Advertisement</h5>
    +                <div class="pBody">
    +                        <?php include("/full_path_to/adsense-button.php"); ?>
    +                </div>
    +        </div>
            <div class="portlet" id="p-tb">
                    <h5><?php $this->msg('toolbox') ?></h5>
                    <div class="pBody">
    @@ -222,6 +228,12 @@
                            </ul>
                    </div>
            </div>
    +        <div class="portlet">
    +                <h5>Advertisement</h5>
    +                <div class="pBody">
    +                        <?php include("/full_path_to/adsense-skyscraper.php"); ?>
    +                </div>
    +        </div>
     <?php
                    if( $this->data['language_urls'] ) { ?>
            <div id="p-lang" class="portlet">

As you can see, this adds a button ad just below the search box on the left and a skyscraper ad below the "toolbox". Like the author of [the earlier referenced article](http://www.dankohn.com/archives/000338.html) I decided to make these changes only to the default skin as this wiki receives only modest traffic and my deployment of [AdSense](/wiki/AdSense) ads here is really just an experiment (first time I've ever used [AdSense](/wiki/AdSense)). I don't plan to put [AdSense](/wiki/AdSense) on the commercial parts of my website (see "[Wincent products](/wiki/Wincent_products)") but I do think it's fine to put it on this wiki as it is a free resource.

Given that I perform my [MediaWiki](/wiki/MediaWiki) updates using [Subversion](/wiki/Subversion) these changes should be automatically merged whenever I perform an upgrade.

## Other modifications to the MonoBook template

Seeing as I was editing the template I decided to address a long-standing annoyance with the clickable Wincent logo in the top-left corner of every page on the wiki.

The problem is that clicking on the logo takes you to the top of the wiki (<http://kbase.wincent.com/>) instead of the top of the domain (<http://wincent.com/>). I think this is confusing to users. If they want to go to the top page of the wiki they can click the "Main Page" link (the first item in the "navigation" portal on the left). I think most users would expect that clicking on the logo, however, should take them to the principal page of the entire site which in this case is the top of the domain, not the top of the wiki. So one more change was in order:

    --- skins/MonoBook.php  (revision 20020)
    +++ skins/MonoBook.php  (working copy)
    @@ -137,7 +137,7 @@
            </div>
            <div class="portlet" id="p-logo">
                    <a style="background-image: url(<?php $this->text('logopath') ?>);" <?php
    -                       ?>href="<?php echo htmlspecialchars($this->data['nav_urls']['mainpage']['href'])?>" <?php
    +                       ?>href="http://wincent.com/" <?php
                            ?>title="<?php $this->msg('mainpage') ?>"></a>
            </div>
            <script type="<?php $this->text('jsmimetype') ?>"> if (window.isMSIE55) fixalpha(); </script>
