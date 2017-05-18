---
tags: git gitweb wiki
cache_breaker: 1
---

# Overview

Once the initial set-up is done, adding new projects to an existing [Gitweb](/wiki/Gitweb) installation is very easy. Notes on the initial set-up appear below. To add an additional project, all that is required is:

    cd path_to_repo
    echo "Description of this repository" | sudo -u git tee description
    echo "repository.git owner@example.com" | sudo -u git tee -a /pub/git/conf/gitweb-projects

# Preparation

## Prerequisites

Check that the required [Perl](/wiki/Perl) modules are available:

    # should run without errors (exit code 0):
    perl -mCGI -mEncode -mFcntl -mFile::Find -mFile::Basename -e ""
    echo $?

Note that as of [Git 1.5.3.1](/wiki/Git_1.5.3.1) a newer version of the Encode module is required than that which ships with [Red Hat Enterprise Linux](/wiki/Red_Hat_Enterprise_Linux) 3 (see "[Fixing gitweb breakage on Red Hat Enterprise Linux 3](/wiki/Fixing_gitweb_breakage_on_Red_Hat_Enterprise_Linux_3)" for more information).

## Repository set-up

Edit `repository.git/description` for each repository that you want to be managed by [gitweb](/wiki/gitweb).

## Filesystem set-up

Assuming your `git` user (the owner of the [Git](/wiki/Git) repositories) has its home directory at `/pub/git/`:

    cd /pub/git
    sudo -u git mkdir conf
    sudo -u git mkdir logs

For security we'll run the `gitweb.cgi` script using [suEXEC](/wiki/suEXEC); in order for it to work we must install the script under the Apache docroot. A symbolic link is created back to the `git` user's home directory as well.

    sudo -u git mkdir path_to_apache_doc_root/git.example.com
    sudo ln -s path_to_apache_doc_root/git.example.com public_html

## Apache set-up

A `VirtualHost` block similar to the following needs to be added to the [Apache](/wiki/Apache) `httpd.conf`:

    <VirtualHost *:80>
      DocumentRoot "/pub/git/public_html"
      ServerName git.example.com
      SuexecUserGroup git git
      
      <Directory "/pub/git/public_html">
        Options Indexes FollowSymlinks ExecCGI
        AllowOverride None
        Order allow,deny
        Allow from all
        DirectoryIndex gitweb.cgi
        RewriteEngine on
        RewriteCond	%{REQUEST_FILENAME}	!-f
        RewriteCond	%{REQUEST_FILENAME}	!-d
        RewriteRule	^.*	/gitweb.cgi/$0 [L,PT]
      </Directory>
      
      # for debugging rewrite rules
      [/tags/RewriteLog #RewriteLog] /pub/git/logs/rewrite_log
      [/tags/RewriteLogLevel #RewriteLogLevel] 9
      
      ErrorLog /pub/git/logs/error_log
      LogLevel warn
      CustomLog /pub/git/logs/access_log "combined"
    </VirtualHost>

These were the directives that I arrived at via trial and error. For some reason on my system the `SetEnv` directive did not work (perhaps due to an interaction with [suEXEC](/wiki/suEXEC)?) and neither did the `RewriteRule` in the [gitweb](/wiki/gitweb) `README` file; this is why I temporarily added in the `RewriteLog` and `RewriteLogLevel` directives in order to troubleshoot (it turns out that the leading slash had to be removed).

## Building gitweb

This `make` invocation worked on my local system:

    # from top-level of Git source tree
    make prefix=/usr/local \
         GITWEB_PROJECTROOT=/pub/git/path_to_public_repos \
         GITWEB_LIST=/pub/git/conf/gitweb-projects \
         GITWEB_STRICT_EXPORT=1 \
         GITWEB_CSS="/gitweb.css" \
         GITWEB_LOGO="/git-logo.png" \
         GITWEB_FAVICON="/git-favicon.png" \
         GITWEB_CONFIG="/pub/git/conf/gitweb.conf" \
         gitweb/gitweb.cgi
    sudo -u git cp gitweb/gitweb.{cgi,css} \
                   gitweb/git-*.png \
                   /pub/git/public_html

## Configuring gitweb

Although some configuration is passed in during the `make` it is still necessary to perform some additional configuration that will be used at runtime.

For each repository that will be visible in [gitweb](/wiki/gitweb) we add an entry to the `gitweb-projects` list indicating the owner:

    echo "repository.git owner@example.com" | sudo -u git tee -a /pub/git/conf/gitweb-projects

We also prepare our `gitweb.conf` file:

    sudo -u git tee /pub/git/conf/gitweb.conf <<\EOF
    # turn off potentially CPU-intensive features
    $feature{'search'}{'default'} = [undef];
    $feature{'blame'}{'default'} = [undef];
    $feature{'pickaxe'}{'default'} = [undef];
    $feature{'grep'}{'default'} = [undef];
    $feature{'snapshot'}{'default'} = [undef];

    # nicer-looking URLs (requires Apache rewrite rules to be set up)
    $feature{'pathinfo'}{'default'} = [1];
    $my_uri = "http://git.example.com";
    $home_link = "http://git.example.com/";

    $site_name = "git.example.com";
    EOF

Note that seeing as this is my first [gitweb](/wiki/gitweb) installation I want to trial things conservatively at first and so turn off some of the more CPU-intensive features. Also note that in order to turn on the nicer-looking [URLs](/wiki/URLs) (the `pathinfo` feature) it is necessary to set up `my_uri` as well. These URLs work because of the `RewriteRule` in the `httpd.conf`. I also found that the `pathinfo` feature required me to explicitly set my `$home_link`, because otherwise the "projects" link didn't point to the true root (ie. it pointed to URLs like <http://git.example.com/repo.git> instead of <http://git.example.com/>).

## Troubleshooting

### suEXEC problems

One of the problems I encountered when trying to set this up was that in the web browser I was getting an internal server error and this in the `error_log`:

    Premature end of script headers: gitweb.cgi

But when running from the command line everything was working:

    ./gitweb.cgi

I temporarily set up [Apache](/wiki/Apache) `LogLevel` to `debug` but no additional output was produced, so this lead me to check the [suEXEC](/wiki/suEXEC) log (location may vary depending on your system; try `locate suexec.log`):

    [2007-07-15 11:26:28]: uid: (647/git) gid: (650/650) cmd: gitweb.cgi
    [2007-07-15 11:26:28]: command not in docroot (/pub/git/cgi-bin/gitweb.cgi)

This was what lead me to move the public [HTML](/wiki/HTML) folder for the `git` user under [Apache](/wiki/Apache)'s docroot, and then put a `public_html` symlink in the `git` user's home directory.

### MIME types

I also found that [Gitweb](/wiki/Gitweb) was serving `.sh` files stored in repositories using a MIME type that led browsers to download them rather than displaying them. This was due to the following line in `/etc/mime.types`:

    application/x-sh sh

This line causes these [HTTP](/wiki/HTTP) headers to be sent when trying to view an `.sh` file:

    Transfer-Encoding: chunked
    Content-Type: application/x-sh

Compare that to the headers sent trying to view an `.rb` file:

    Transfer-Encoding: chunked
    Content-Type: text/html; charset=utf-8

Commenting out the line in `/etc/mime.types` causes these headers to be sent instead:

    Transfer-Encoding: chunked
    Content-Type: text/plain; charset=ISO-8859-1

And the browser displays the file rather than downloading it.

# See also

-   [Migrating Subversion repositories to Git](/wiki/Migrating_Subversion_repositories_to_Git)
