---
tags: perl movabletype wiki
---

# The script

Here's the first version of my first [MovableType](/wiki/MovableType) plugin:

    #!/usr/bin/perl
    # $Id: wikitext.pl 66 2007-03-13 16:09:23Z wincent $

    # If you do not have Text::MediawikiFormat installed:
    #
    #   sudo perl -MCPAN -e 'install "Text::MediawikiFormat"'
    #
    #

    package WikiText;
    use strict;
    use warnings;

    use vars qw($VERSION);
    $VERSION = '0.1';

    require MT;
    import MT;

    require MT::Plugin;
    import MT::Plugin;
    MT->add_plugin(
        new MT::Plugin({
            name        => 'WikiText',
            description => "MediaWiki-to-HTML formatting plugin. (Version: $VERSION)"
            }));

    MT->add_text_filter('wikitext' => {
        label       => 'WikiText',
        on_format   => sub {
            require Text::MediawikiFormat;
            my $text        = shift;
            my $context     = shift;
            my $converted   = Text::MediawikiFormat::format($text, {}, { prefix => 'http://wincent.com/knowledge-base/' });
            $converted; 
        }
    });

# Installation

1.  Install into `plugins`
2.  Activate in the [MovableType](/wiki/MovableType) control panel

# Usage

1.  Select "WikiText" from the Text Formatting pop-up menu while composing your entry.
2.  Publish.

# See also

-   [MovableType](/wiki/MovableType) API documentation: <http://www.sixapart.com/movabletype/docs/mtapi_mt.html>
-   "How to Write a Plugin": <http://www.sixapart.com/movabletype/docs/plugin-tut>
-   Accompanying article on weblog: <http://wincent.com/a/about/wincent/weblog/archives/2007/03/using_mediawiki.php>
