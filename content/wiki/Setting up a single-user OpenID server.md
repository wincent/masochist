---
tags: wiki
---

These are notes made while setting up my own single-user [OpenID](/wiki/OpenID) server. I wanted to set up my own server for the same reasons stated by [Christopher Niemira](/wiki/Christopher_Niemira), author of [phpMyID](/wiki/phpMyID), who [writes](http://siege.org/projects/phpMyID/):

> I really don't like the idea of coupling a theoretically decentralized framework to one of a handfull of third party providers (and giving them my account credentials).

I chose to use [phpMyID](/wiki/phpMyID) because it was a very simple implementation with no dependencies (not even a database).

# Preparation

Based on information found [here](http://www.openidenabled.com/openid/use-your-own-url-as-an-openid) and [here](https://www.siege.org/svn/oss/phpMyID/trunk/README) I proceeded to do the following:

Generate en [MD5](/wiki/MD5) hash of:

-   a username, `the_username`
-   realm, `OpenID`
-   password, `the_password`

<!-- -->

    echo -n "the_username:OpenID:the_password" | md5

# Installation

I then exported a copy of the latest version of the relevant files from [phpMyID](/wiki/phpMyID):

    cd path/to/web/directory
    sudo svn export https://www.siege.org/svn/oss/phpMyID/trunk/MyID.php id.php
    cd path/to/configuration/directory
    sudo svn export https://www.siege.org/svn/oss/phpMyID/trunk/MyID.config.php id_config.php

Three things to note:

-   Use of `sudo` because I wasn't running as a user with write privileges
-   Renaming the files to `id.php` and `id_config.php` for aesthetic reasons
-   Storing the configuration file, `id_config.php`, outside of the web root

This last point is just basic security practice whenever I'm forced to use [PHP](/wiki/PHP): passwords and other sensitive configuration should always be stored outside of the webroot, just in case there is ever a problem with the [Apache](/wiki/Apache)/[PHP](/wiki/PHP) configuration that might cause the files to be served up as raw text rather than executed as a [PHP](/wiki/PHP) script. In this case the risks are mitigated by the fact that the password is not stored in the configuration file (only a hash is stored) but it is basic security practice to adopt a multi-layered "onion" approach that implements multiple, separate barriers to guard against breaches. If an attacker were to access the configuration file brute-forcing a working password would be fairly easy because the user name wouldn't be hard to guess, the realm is publicly discoverable, and the hash isn't even generated using a salt.

# Configuration file changes

    22,23c22,24
    <       'auth_username' =>      'test',
    <       'auth_password' =>      '37fa04faebe5249023ed1f6cc867329b'
    ---
    >       'auth_username' =>      'example_username',
    >       'auth_password' =>      'example_hash',
    >       'auth_realm'    =>      'OpenID'
    38,40c39,41
    < #     'nickname'              => 'Joe',
    < #     'email'                 => 'joe@example.com',
    < #     'fullname'              => 'Joe Example',
    ---
    >       'nickname'              => 'Wincent',
    >       'email'                 => 'win@wincent.com',
    >       'fullname'              => 'Wincent Colaiuta',
    44,46c45,47
    < #     'country'               => 'US',
    < #     'language'              => 'en',
    < #     'timezone'              => 'America/New_York'
    ---
    >       'country'               => 'ES',
    >       'language'              => 'en',
    >       'timezone'              => 'Europe/Madrid'

# `id.php` changes

    779c779
    <               if (! @include('MyID.config.php'))
    ---
    >               if (! @include('/full_path_to_conf_dir/id_config.php'))

# Other set-up

The following [HTML](/wiki/HTML) needed to be added to the page residing at my "identity" [URL](/wiki/URL):

    <link rel="openid.server" href="https://secure.wincent.com/id.php" />
    <link rel="openid.delegate" href="https://secure.wincent.com/id.php" />
    <meta http-equiv="X-XRDS-Location" content="https://secure.wincent.com/id.php" />

In my case, this was <http://colaiuta.net/> (my [weblog](/wiki/weblog)).

# Results

To test the system I made my first post using [OpenID](/wiki/OpenID)-based authentication [here](http://chanson.livejournal.com/170068.html). There are two problems with the result:

1.  The "from" line reads as <http://wincent.com/a/about/wincent/weblog/>, which doesn't exactly make clear the identity of the poster; this is because <http://colaiuta.net/> just redirects to my [weblog](/wiki/weblog) at the other [URL](/wiki/URL).
2.  The [the user profile](http://www.livejournal.com/userinfo.bml?userid=12856127&t=I&mode=full) linked to from the comment doesn't include the extra information that I included in my configuration.

The second problem is probably a limitation of [LiveJournal](/wiki/LiveJournal) and there's not much that I can do about that. I decided to address the former problem by choosing a better [URL](/wiki/URL) for future identification. So I set up a simple page at <http://wincent.colaiuta.net/> with the following content:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
            "http://www.w3.org/TR/html4/loose.dtd">
    <html lang="en">
    <head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8">
      <title>wincent.colaiuta.net</title>
      <link rel="openid.server" href="https://secure.wincent.com/id.php">
      <link rel="openid.delegate" href="https://secure.wincent.com/id.php">
      <meta http-equiv="X-XRDS-Location" content="https://secure.wincent.com/id.php">
    </head>
    <body>
    <ul>
      <li>Wincent Colaiuta's personal weblog: <a href="http://colaiuta.net/">colaiuta.net</a></li>
      <li>Mac OS X software: <a href="http://wincent.com/">wincent.com</a></li>
    </ul>
    </body>
    </html>

From now on when I sign in using that [URL](/wiki/URL) the identity should be a much more intelligible, "wincent.colaiuta.net".
