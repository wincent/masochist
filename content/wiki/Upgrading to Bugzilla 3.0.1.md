---
tags: bugzilla updates
cache_breaker: 1
---

These notes were made while performing the upgrade from [Bugzilla](/wiki/Bugzilla) 3.0 to [Bugzilla 3.0.1](/wiki/Bugzilla_3.0.1).

# Preliminaries

Before beginning I used the script shown in "[Finding out which CPAN modules are installed](/wiki/Finding_out_which_CPAN_modules_are_installed)" to confirm that my installed [CPAN](/wiki/CPAN) modules met the requirements in the [Bugzilla 3.0.1](/wiki/Bugzilla_3.0.1) [release notes](http://www.bugzilla.org/releases/3.0.1/release-notes.html).

Although there were some newer versions of installed modules available, none of these were required upgrades so I left them untouched.

# Upgrade procedure

-   Run `sanitycheck.cgi` from within the browser.
-   In the "Parameters" section set `shutdownhtml` to a useful value:

<!-- -->

    Currently closed for maintenance, please check back again soon.

-   Back up the database:

<!-- -->

    mysqldump -u database_user -p database_name | bzip2 -c > bugzilla-3.0.sql.bz2

-   Back up the installed files:

<!-- -->

    cd path_to_bugzilla_installation
    sudo tar -c -v . > ~/bugzilla-2.22.2.tar
    gzip --verbose -9 ~/bugzilla-2.22.2.tar

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
    P Bugzilla.pm
    P QUICKSTART
    P buglist.cgi
    P chart.cgi
    P collectstats.pl
    P duplicates.cgi
    P editcomponents.cgi
    P editparams.cgi
    P editproducts.cgi
    P email_in.pl
    cvs update: conflict: globals.pl is modified but no longer in the repository
    C globals.pl
    P process_bug.cgi
    P sanitycheck.cgi
    P showdependencygraph.cgi
    P userprefs.cgi
    P votes.cgi
    P whineatnews.pl
    cvs update: Updating Bugzilla
    P Bugzilla/Attachment.pm
    P Bugzilla/Bug.pm
    P Bugzilla/Constants.pm
    P Bugzilla/DB.pm
    P Bugzilla/Error.pm
    P Bugzilla/Flag.pm
    P Bugzilla/Mailer.pm
    P Bugzilla/Template.pm
    P Bugzilla/User.pm
    cvs update: Updating Bugzilla/Attachment
    cvs update: Updating Bugzilla/Auth
    cvs update: Updating Bugzilla/Auth/Login
    cvs update: Updating Bugzilla/Auth/Login/CGI
    cvs update: Updating Bugzilla/Auth/Login/WWW
    cvs update: Updating Bugzilla/Auth/Login/WWW/CGI
    cvs update: Updating Bugzilla/Auth/Persist
    cvs update: Updating Bugzilla/Auth/Verify
    cvs update: Updating Bugzilla/Config
    P Bugzilla/Config/Common.pm
    P Bugzilla/Config/MTA.pm
    P Bugzilla/Config/Query.pm
    cvs update: Updating Bugzilla/DB
    P Bugzilla/DB/Pg.pm
    P Bugzilla/DB/Schema.pm
    cvs update: Updating Bugzilla/DB/Schema
    cvs update: Updating Bugzilla/Install
    P Bugzilla/Install/DB.pm
    P Bugzilla/Install/Filesystem.pm
    cvs update: Updating Bugzilla/Search
    P Bugzilla/Search/Quicksearch.pm
    P Bugzilla/Search/Saved.pm
    cvs update: Updating Bugzilla/Template
    cvs update: Updating Bugzilla/Template/Plugin
    cvs update: Updating Bugzilla/User
    cvs update: Updating Bugzilla/User/Setting
    P Bugzilla/User/Setting/Skin.pm
    cvs update: Updating Bugzilla/WebService
    P Bugzilla/WebService/Bug.pm
    cvs update: Updating Conf
    cvs update: Updating Conf/Supplies
    cvs update: Updating contrib
    P contrib/bz_webservice_demo.pl
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
    P docs/xml/about.xml
    P docs/xml/administration.xml
    P docs/xml/customization.xml
    cvs update: docs/xml/dbschema.mysql is no longer in the repository
    P docs/xml/faq.xml
    cvs update: docs/xml/filetemp.patch is no longer in the repository
    P docs/xml/introduction.xml
    P docs/xml/patches.xml
    P docs/xml/using.xml
    cvs update: Updating images
    cvs update: Updating js
    cvs update: Updating oracle
    cvs update: Updating skins
    cvs update: move away skins/.cvsignore; it is in the way
    C skins/.cvsignore
    cvs update: Updating skins/contrib
    cvs update: Updating skins/contrib/Dusk
    cvs update: Updating skins/standard
    P skins/standard/global.css
    cvs update: Updating skins/standard/dependency-tree
    cvs update: Updating skins/standard/global
    cvs update: Updating skins/standard/index
    cvs update: Updating t
    P t/009bugwords.t
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
    P template/en/default/filterexceptions.pl
    RCS file: /cvsroot/mozilla/webtools/bugzilla/template/en/default/index.html.tmpl,v
    retrieving revision 1.33.2.3
    retrieving revision 1.33.2.4
    Merging differences between 1.33.2.3 and 1.33.2.4 into index.html.tmpl
    M template/en/default/index.html.tmpl
    P template/en/default/sidebar.xul.tmpl
    cvs update: Updating template/en/default/account
    cvs update: Updating template/en/default/account/auth
    P template/en/default/account/auth/login-small.html.tmpl
    P template/en/default/account/auth/login.html.tmpl
    cvs update: Updating template/en/default/account/email
    cvs update: Updating template/en/default/account/password
    cvs update: Updating template/en/default/account/prefs
    P template/en/default/account/prefs/email.html.tmpl
    P template/en/default/account/prefs/saved-searches.html.tmpl
    P template/en/default/account/prefs/settings.html.tmpl
    cvs update: Updating template/en/default/admin
    cvs update: Updating template/en/default/admin/attachstatus
    cvs update: Updating template/en/default/admin/classifications
    cvs update: Updating template/en/default/admin/common
    cvs update: Updating template/en/default/admin/components
    P template/en/default/admin/components/edit.html.tmpl
    cvs update: Updating template/en/default/admin/custom_fields
    P template/en/default/admin/custom_fields/create.html.tmpl
    P template/en/default/admin/custom_fields/edit.html.tmpl
    P template/en/default/admin/custom_fields/list.html.tmpl
    cvs update: Updating template/en/default/admin/fieldvalues
    cvs update: Updating template/en/default/admin/flag-type
    cvs update: Updating template/en/default/admin/groups
    cvs update: Updating template/en/default/admin/keywords
    P template/en/default/admin/keywords/list.html.tmpl
    cvs update: Updating template/en/default/admin/milestones
    cvs update: Updating template/en/default/admin/params
    P template/en/default/admin/params/core.html.tmpl
    P template/en/default/admin/params/mta.html.tmpl
    P template/en/default/admin/params/query.html.tmpl
    cvs update: Updating template/en/default/admin/products
    cvs update: Updating template/en/default/admin/products/groupcontrol
    cvs update: Updating template/en/default/admin/request-type
    cvs update: Updating template/en/default/admin/sanitycheck
    cvs update: Updating template/en/default/admin/settings
    P template/en/default/admin/settings/updated.html.tmpl
    cvs update: Updating template/en/default/admin/users
    P template/en/default/admin/users/confirm-delete.html.tmpl
    P template/en/default/admin/users/userdata.html.tmpl
    cvs update: Updating template/en/default/admin/versions
    cvs update: Updating template/en/default/admin/workflow
    cvs update: Updating template/en/default/attachment
    cvs update: Updating template/en/default/bug
    P template/en/default/bug/edit.html.tmpl
    cvs update: Updating template/en/default/bug/activity
    cvs update: Updating template/en/default/bug/create
    P template/en/default/bug/create/create-guided.html.tmpl
    cvs update: Updating template/en/default/bug/process
    P template/en/default/bug/process/verify-new-product.html.tmpl
    cvs update: Updating template/en/default/bug/votes
    cvs update: Updating template/en/default/email
    P template/en/default/email/newchangedmail.txt.tmpl
    P template/en/default/email/sudo.txt.tmpl
    cvs update: Updating template/en/default/flag
    P template/en/default/flag/list.html.tmpl
    cvs update: Updating template/en/default/global
    M template/en/default/global/banner.html.tmpl
    P template/en/default/global/code-error.html.tmpl
    RCS file: /cvsroot/mozilla/webtools/bugzilla/template/en/default/global/header.html.tmpl,v
    retrieving revision 1.49
    retrieving revision 1.49.2.1
    Merging differences between 1.49 and 1.49.2.1 into header.html.tmpl
    M template/en/default/global/header.html.tmpl
    P template/en/default/global/messages.html.tmpl
    P template/en/default/global/setting-descs.none.tmpl
    P template/en/default/global/useful-links.html.tmpl
    P template/en/default/global/user-error.html.tmpl
    M template/en/default/global/variables.none.tmpl
    cvs update: Updating template/en/default/list
    P template/en/default/list/list.csv.tmpl
    cvs update: Updating template/en/default/pages
    P template/en/default/pages/bug-writing.html.tmpl
    P template/en/default/pages/release-notes.html.tmpl
    cvs update: Updating template/en/default/reports
    P template/en/default/reports/chart.png.tmpl
    P template/en/default/reports/report-simple.html.tmpl
    P template/en/default/reports/report-table.html.tmpl
    cvs update: Updating template/en/default/request
    P template/en/default/request/email.txt.tmpl
    cvs update: Updating template/en/default/search
    P template/en/default/search/knob.html.tmpl
    P template/en/default/search/search-help.html.tmpl
    P template/en/default/search/search-report-graph.html.tmpl
    P template/en/default/search/search-specific.html.tmpl
    cvs update: Updating template/en/default/setup
    cvs update: Updating template/en/default/whine
    P template/en/default/whine/schedule.html.tmpl
    cvs update: Updating template/en/extension
    cvs update: Updating template/en/extension/hook

-   Watch for conflicts during update; in the current case the following conflict was reported:

<!-- -->

    cvs update: conflict: globals.pl is modified but no longer in the repository
    C globals.pl

-   Fix conflicts; in the example case:

<!-- -->

    rm globals.pl

-   Remove auxiliary files created due to the merge conflict:

<!-- -->

    # this step not actually necessary this time around
    # but this is what you would do if you had substantive conflicts
    find . -name "\.#*" -and -type f
    find . -name "\.#*" -and -type f -ok rm "{}" \;

-   Run `checksetup.pl` from the command line:

<!-- -->

    ./checksetup.pl

Partial output:

    The following variables are no longer used in ./localconfig, and
    should be removed: contenttypes

So, after removing that:

-   Use my custom `repair-bugzilla.sh` to repair the ownership and permissions on the installed files.
-   In the "Parameters" section empty the `shutdownhtml` field. Like last time (see "[Bugzilla 2.22.2 to 3.0 upgrade notes](/wiki/Bugzilla_2.22.2_to_3.0_upgrade_notes)"), this failed due to permissions on the parent directory, so I manually did the following, and updated the `repair-bugzilla.sh` script to take care of this in the future:

<!-- -->

    chmod 755 .

-   Run `sanitycheck.cgi` from within the browser.
-   Update parameters.
-   Test the installation.

# Future improvements

This process could be largely automated via a shell script.

# See also

-   [Bugzilla 3.0.1](/wiki/Bugzilla_3.0.1) release notes: <http://www.bugzilla.org/releases/3.0.1/release-notes.html>
