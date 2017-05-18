---
tags: bugzilla updates wiki
cache_breaker: 1
---

These notes were made while performing the upgrade from [Bugzilla 3.0.1](/wiki/Bugzilla_3.0.1) to [Bugzilla 3.0.2](/wiki/Bugzilla_3.0.2).

# Upgrade procedure

-   Run `sanitycheck.cgi` from within the browser.
-   In the "Parameters" section set `shutdownhtml` to a useful value:

<!-- -->

    Currently closed for maintenance, please check back again soon.

-   Start a screen session in case we lose our connection:

<!-- -->

    screen

-   Back up the database:

<!-- -->

    mysqldump -u database_user -p database_name | bzip2 -c > bugzilla-3.0.1.sql.bz2

-   Back up the installed files:

<!-- -->

    cd path_to_bugzilla_installation
    sudo tar -c -v . > ~/bugzilla-3.0.1.tar
    gzip --verbose -9 ~/bugzilla-3.0.1.tar

-   (Optional): Upgrade installed [CPAN](/wiki/CPAN) modules for which newer versions are available. As I wanted this to be a conservative, minimally disruptive upgrade I skipped this step. For examples of what to do see "[Bugzilla 2.22.2 to 3.0 upgrade notes](/wiki/Bugzilla_2.22.2_to_3.0_upgrade_notes)".
-   Perform the actual update using [CVS](/wiki/CVS) ([CVS](/wiki/CVS) password is "anonymous"):

<!-- -->

    sudo -s
    cvs login
    cvs update -rBugzilla_Stable -dP

Output:

    ? padlock.png
    ? secpatch
    ? service
    ? docs/html
    ? skins/contrib
    cvs update: Updating .
    P buglist.cgi
    P email_in.pl
    cvs update: warning: globals.pl is not (any longer) pertinent
    cvs update: Updating Bugzilla
    P Bugzilla/Constants.pm
    P Bugzilla/Template.pm
    cvs update: Updating Bugzilla/Attachment
    cvs update: Updating Bugzilla/Auth
    cvs update: Updating Bugzilla/Auth/Login
    cvs update: Updating Bugzilla/Auth/Login/CGI
    cvs update: Updating Bugzilla/Auth/Login/WWW
    cvs update: Updating Bugzilla/Auth/Login/WWW/CGI
    cvs update: Updating Bugzilla/Auth/Persist
    cvs update: Updating Bugzilla/Auth/Verify
    cvs update: Updating Bugzilla/Config
    cvs update: Updating Bugzilla/DB
    cvs update: Updating Bugzilla/DB/Schema
    cvs update: Updating Bugzilla/Install
    cvs update: Updating Bugzilla/Search
    cvs update: Updating Bugzilla/Template
    cvs update: Updating Bugzilla/Template/Plugin
    cvs update: Updating Bugzilla/User
    cvs update: Updating Bugzilla/User/Setting
    cvs update: Updating Bugzilla/WebService
    P Bugzilla/WebService/Constants.pm
    P Bugzilla/WebService/User.pm
    cvs update: Updating Conf
    cvs update: Updating Conf/Supplies
    cvs update: Updating contrib
    P contrib/README
    P contrib/bzdbcopy.pl
    cvs update: Updating contrib/bug-bugzilla
    cvs update: Updating contrib/bugzilla-submit
    cvs update: Updating contrib/cmdline
    cvs update: Updating contrib/gnatsparse
    cvs update: Updating css
    cvs update: Updating docs
    P docs/rel_notes.txt
    cvs update: Updating docs/html
    cvs update: move away docs/html/.cvsignore; it is in the way
    C docs/html/.cvsignore
    cvs update: Updating docs/html/api
    cvs update: move away docs/html/api/.cvsignore; it is in the way
    C docs/html/api/.cvsignore
    cvs update: move away docs/html/api/style.css; it is in the way
    C docs/html/api/style.css
    cvs update: Updating docs/images
    cvs update: Updating docs/images/callouts
    cvs update: Updating docs/lib
    cvs update: Updating docs/lib/Pod
    cvs update: Updating docs/lib/Pod/Simple
    cvs update: Updating docs/lib/Pod/Simple/HTML
    cvs update: Updating docs/lib/Pod/Simple/HTMLBatch
    cvs update: Updating docs/pdf
    cvs update: Updating docs/sgml
    cvs update: Updating docs/txt
    cvs update: Updating docs/xml
    P docs/xml/Bugzilla-Guide.xml
    P docs/xml/faq.xml
    P docs/xml/glossary.xml
    P docs/xml/security.xml
    cvs update: Updating images
    cvs update: Updating js
    cvs update: Updating oracle
    cvs update: Updating skins
    cvs update: move away skins/.cvsignore; it is in the way
    C skins/.cvsignore
    cvs update: Updating skins/contrib
    cvs update: Updating skins/contrib/Dusk
    cvs update: Updating skins/standard
    cvs update: Updating skins/standard/dependency-tree
    cvs update: Updating skins/standard/global
    cvs update: Updating skins/standard/index
    cvs update: Updating t
    cvs update: Updating t/Support
    cvs update: Updating template
    cvs update: Updating template/default
    cvs update: Updating template/default/account
    cvs update: Updating template/default/admin
    cvs update: Updating template/default/admin/common
    cvs update: Updating template/default/admin/resolutions
    cvs update: Updating template/default/attachment
    cvs update: Updating template/default/attachstatus
    cvs update: Updating template/default/bug
    cvs update: Updating template/default/buglist
    cvs update: Updating template/default/config
    cvs update: Updating template/default/entry
    cvs update: Updating template/default/global
    cvs update: Updating template/default/info
    cvs update: Updating template/default/prefs
    cvs update: Updating template/default/process
    cvs update: Updating template/default/query
    cvs update: Updating template/default/report
    cvs update: Updating template/default/request
    cvs update: Updating template/default/requestdef
    cvs update: Updating template/default/requesttype
    cvs update: Updating template/default/show
    cvs update: Updating template/default/sidebar
    cvs update: Updating template/default/token
    cvs update: Updating template/default/voting
    cvs update: Updating template/en
    cvs update: Updating template/en/default
    M template/en/default/index.html.tmpl
    cvs update: Updating template/en/default/account
    cvs update: Updating template/en/default/account/auth
    cvs update: Updating template/en/default/account/email
    cvs update: Updating template/en/default/account/password
    cvs update: Updating template/en/default/account/prefs
    cvs update: Updating template/en/default/admin
    cvs update: Updating template/en/default/admin/attachstatus
    cvs update: Updating template/en/default/admin/classifications
    P template/en/default/admin/classifications/edit.html.tmpl
    cvs update: Updating template/en/default/admin/common
    cvs update: Updating template/en/default/admin/components
    cvs update: Updating template/en/default/admin/custom_fields
    cvs update: Updating template/en/default/admin/fieldvalues
    cvs update: Updating template/en/default/admin/flag-type
    cvs update: Updating template/en/default/admin/groups
    cvs update: Updating template/en/default/admin/keywords
    cvs update: Updating template/en/default/admin/milestones
    cvs update: Updating template/en/default/admin/params
    cvs update: Updating template/en/default/admin/products
    cvs update: Updating template/en/default/admin/products/groupcontrol
    cvs update: Updating template/en/default/admin/request-type
    cvs update: Updating template/en/default/admin/sanitycheck
    cvs update: Updating template/en/default/admin/settings
    cvs update: Updating template/en/default/admin/users
    cvs update: Updating template/en/default/admin/versions
    cvs update: Updating template/en/default/admin/workflow
    cvs update: Updating template/en/default/attachment
    P template/en/default/attachment/edit.html.tmpl
    cvs update: Updating template/en/default/bug
    P template/en/default/bug/summarize-time.html.tmpl
    cvs update: Updating template/en/default/bug/activity
    cvs update: Updating template/en/default/bug/create
    cvs update: Updating template/en/default/bug/process
    cvs update: Updating template/en/default/bug/votes
    P template/en/default/bug/votes/list-for-user.html.tmpl
    cvs update: Updating template/en/default/email
    cvs update: Updating template/en/default/flag
    cvs update: Updating template/en/default/global
    M template/en/default/global/banner.html.tmpl
    M template/en/default/global/header.html.tmpl
    P template/en/default/global/user-error.html.tmpl
    M template/en/default/global/variables.none.tmpl
    cvs update: Updating template/en/default/list
    P template/en/default/list/table.html.tmpl
    cvs update: Updating template/en/default/pages
    P template/en/default/pages/release-notes.html.tmpl
    cvs update: Updating template/en/default/reports
    cvs update: Updating template/en/default/request
    P template/en/default/request/email.txt.tmpl
    cvs update: Updating template/en/default/search
    cvs update: Updating template/en/default/setup
    cvs update: Updating template/en/default/whine
    cvs update: Updating template/en/extension
    cvs update: Updating template/en/extension/hook

-   Watch for conflicts during update; fix as required.
-   Run `checksetup.pl` from the command line:

<!-- -->

    ./checksetup.pl

-   Use my custom `repair-bugzilla.sh` to repair the ownership and permissions on the installed files.
-   In the "Parameters" section empty the `shutdownhtml` field.
-   Run `sanitycheck.cgi` from within the browser.
-   Update parameters.
-   Test the installation.
-   End root/screen sessions:

<!-- -->

    exit
    exit

# Future improvements

More of this process could be largely automated via a shell script.
