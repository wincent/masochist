---
tags: bugzilla updates wiki
cache_breaker: 1
---

These notes were made during the upgrade of my [Bugzilla](/wiki/Bugzilla) install (at <http://bugs.wincent.com/>) from [Bugzilla](/wiki/Bugzilla) 2.22.2 to 3.0.

# Preliminaries

This is an important major upgrade with plenty of scope for things to go wrong, so it is important to carefully revise the release notes and other supporting materials before proceeding:

-   Release notes: <http://www.bugzilla.org/releases/3.0/release-notes.html>
-   What's new: <http://www.bugzilla.org/releases/3.0/new-features.html>
-   Full change listing: <http://www.bugzilla.org/status/changes.html>

Key points for my install:

-   [Perl](/wiki/Perl) version 5.8.0 is now required
-   A newer version of the DBI [CPAN](/wiki/CPAN) module is now required (1.41)
-   Two other [CPAN](/wiki/CPAN) modules, Email::Send and Email::MIME::Modifier, are now required for the first time
-   A number of other [CPAN](/wiki/CPAN) modules have been added to the list of "optional" modules
-   Outbound emails are now controlled by templates instead of parameters: this is important for me because my outbound emails are slightly customized

To see which modules are installed see "[Finding out which CPAN modules are installed](/wiki/Finding_out_which_CPAN_modules_are_installed)".

Finally, the release notes state:

> If you upgrade by CVS, there are several `.cvsignore` files that are now in CVS instead of being locally created by `checksetup.pl`. This means that you will have to delete those files when CVS tells you there's a conflict, and then run `cvs update` again.

# Upgrade procedure

-   Run `sanitycheck.cgi` from within the browser.
-   In the "Parameters" section set `shutdownhtml` to a useful value:

<!-- -->

    Currently closed for maintenance, please check back again soon.

-   Back up the database:

<!-- -->

    mysqldump -u database_user -p database_name | bzip2 -c > bugzilla-2.22.2.sql.bz2

-   Back up the installed files:

<!-- -->

    cd path_to_bugzilla_installation
    sudo tar -c -v . > ~/bugzilla-2.22.2.tar
    gzip --verbose -9 ~/bugzilla-2.22.2.tar

-   Upgrade installed [CPAN](/wiki/CPAN) modules for which newer versions are available:

This step isn't strictly necessary, but seeing as this is a fairly disruptive upgrade anyway I may as well take the opportunity to get these modules up to date at the same time.

    # upgrade CPAN from 1.87 to 1.9102
    sudo -H cpan CPAN

    # upgrade DBI from 1.48 to 1.55
    sudo -H cpan DBI

The first attempt failed miserably but part of the output included the following:

    *** Your LANG environment variable is set to 'en_US.UTF-8'
    *** This is known to cause problems for some perl installations.
    *** If you get test failures please try again eith LANG unset.

So I did the following before trying again.

    unset LANG

This worked, so I proceded with the other modules:

    # upgrade File::Spec from 3.16 to 3.24
    sudo -H cpan File::Spec

    # upgrade Template from 2.14 to 2.19
    sudo -H cpan Template

-   Install required [CPAN](/wiki/CPAN) modules which are not yet installed on the system:

<!-- -->

    sudo -H cpan Email::Send
    sudo -H cpan Email::MIME::Modifier

-   Install some optional [CPAN](/wiki/CPAN) modules not yet installed on the system:

<!-- -->

    sudo -H cpan Email::MIME::Attachment::Stripper
    sudo -H cpan Email::Reply
    sudo -H cpan HTML::Scrubber

-   Upgrade some optional [CPAN](/wiki/CPAN) modules already installed on the system:

<!-- -->

    # HTML::Parser 3.45 to 3.56
    sudo -H cpan HTML::Parser

This didn't work:

    Parser.xs: In function `dup_pstate':
    Parser.xs:290: `CLONEf_JOIN_IN' undeclared (first use in this function)
    Parser.xs:290: (Each undeclared identifier is reported only once
    Parser.xs:290: for each function it appears in.)
    make: *** [Parser.o] Error 1

A [Google](/wiki/Google) search yielded [this message](http://www.issociate.de/board/post/404840/HTML::Parser_on_older_perl_versions.html) indicating that 3.56 won't work with [Perl](/wiki/Perl) 5.8.0. So I manually installed 3.55:

    wget http://search.cpan.org/CPAN/authors/id/G/GA/GAAS/HTML-Parser-3.55.tar.gz
    tar xzvf HTML-Parser-3.55.tar.gz 
    cd HTML-Parser-3.55
    perl Makefile.PL
    make
    make test
    sudo make install

-   Perform the actual update using [CVS](/wiki/CVS) ([CVS](/wiki/CVS) password is "anonymous"):

<!-- -->

    sudo -s
    cvs login
    cvs update -rBugzilla_Stable -dP

Output:

    ? padlock.png
    ? secpatch
    ? service
    cvs update: Updating .
    P .cvsignore
    P Bugzilla.pm
    P attachment.cgi
    P buglist.cgi
    P bugzilla.dtd
    P chart.cgi
    P checksetup.pl
    P colchange.cgi
    P collectstats.pl
    P config.cgi
    P createaccount.cgi
    P describecomponents.cgi
    P describekeywords.cgi
    P duplicates.cgi
    P editclassifications.cgi
    P editcomponents.cgi
    U editfields.cgi
    P editflagtypes.cgi
    P editgroups.cgi
    P editkeywords.cgi
    P editmilestones.cgi
    P editparams.cgi
    P editproducts.cgi
    P editsettings.cgi
    P editusers.cgi
    P editvalues.cgi
    P editversions.cgi
    P editwhines.cgi
    U email_in.pl
    P enter_bug.cgi
    cvs update: conflict: globals.pl is modified but no longer in the repository
    C globals.pl
    P importxml.pl
    P index.cgi
    U mod_perl.pl
    P page.cgi
    P post_bug.cgi
    P process_bug.cgi
    P query.cgi
    P quips.cgi
    P relogin.cgi
    P report.cgi
    P reports.cgi
    P request.cgi
    P sanitycheck.cgi
    U search_plugin.cgi
    P show_activity.cgi
    P show_bug.cgi
    P showattachment.cgi
    P showdependencygraph.cgi
    P showdependencytree.cgi
    P sidebar.cgi
    P summarize_time.cgi
    P testagent.cgi
    P testserver.pl
    P token.cgi
    P userprefs.cgi
    P votes.cgi
    P whine.pl
    P whineatnews.pl
    U xmlrpc.cgi
    cvs update: Updating Bugzilla
    P Bugzilla/Attachment.pm
    P Bugzilla/Auth.pm
    P Bugzilla/Bug.pm
    P Bugzilla/BugMail.pm
    P Bugzilla/CGI.pm
    P Bugzilla/Chart.pm
    P Bugzilla/Classification.pm
    P Bugzilla/Component.pm
    P Bugzilla/Config.pm
    P Bugzilla/Constants.pm
    P Bugzilla/DB.pm
    P Bugzilla/Error.pm
    P Bugzilla/Field.pm
    P Bugzilla/Flag.pm
    P Bugzilla/FlagType.pm
    P Bugzilla/Group.pm
    U Bugzilla/Hook.pm
    U Bugzilla/Install.pm
    U Bugzilla/Keyword.pm
    U Bugzilla/Mailer.pm
    P Bugzilla/Milestone.pm
    U Bugzilla/Object.pm
    P Bugzilla/Product.pm
    P Bugzilla/Search.pm
    P Bugzilla/Series.pm
    P Bugzilla/Template.pm
    P Bugzilla/Token.pm
    U Bugzilla/Update.pm
    P Bugzilla/User.pm
    P Bugzilla/Util.pm
    P Bugzilla/Version.pm
    U Bugzilla/WebService.pm
    cvs update: Updating Bugzilla/Attachment
    U Bugzilla/Attachment/PatchReader.pm
    cvs update: Updating Bugzilla/Auth
    U Bugzilla/Auth/Login.pm
    cvs update: Bugzilla/Auth/README is no longer in the repository
    U Bugzilla/Auth/Verify.pm
    cvs update: Updating Bugzilla/Auth/Login
    U Bugzilla/Auth/Login/CGI.pm
    U Bugzilla/Auth/Login/Cookie.pm
    U Bugzilla/Auth/Login/Env.pm
    U Bugzilla/Auth/Login/Stack.pm
    cvs update: Bugzilla/Auth/Login/WWW.pm is no longer in the repository
    cvs update: Updating Bugzilla/Auth/Login/CGI
    cvs update: Updating Bugzilla/Auth/Login/WWW
    cvs update: Bugzilla/Auth/Login/WWW/CGI.pm is no longer in the repository
    cvs update: Bugzilla/Auth/Login/WWW/Env.pm is no longer in the repository
    cvs update: Updating Bugzilla/Auth/Login/WWW/CGI
    cvs update: Bugzilla/Auth/Login/WWW/CGI/Cookie.pm is no longer in the repository
    cvs update: Updating Bugzilla/Auth/Persist
    U Bugzilla/Auth/Persist/Cookie.pm
    cvs update: Updating Bugzilla/Auth/Verify
    P Bugzilla/Auth/Verify/DB.pm
    P Bugzilla/Auth/Verify/LDAP.pm
    U Bugzilla/Auth/Verify/Stack.pm
    cvs update: Updating Bugzilla/Config
    P Bugzilla/Config/Attachment.pm
    P Bugzilla/Config/Auth.pm
    P Bugzilla/Config/BugFields.pm
    P Bugzilla/Config/Common.pm
    P Bugzilla/Config/Core.pm
    P Bugzilla/Config/GroupSecurity.pm
    P Bugzilla/Config/L10n.pm
    P Bugzilla/Config/LDAP.pm
    P Bugzilla/Config/MTA.pm
    cvs update: Updating Bugzilla/DB
    P Bugzilla/DB/Mysql.pm
    P Bugzilla/DB/Pg.pm
    P Bugzilla/DB/Schema.pm
    cvs update: Updating Bugzilla/DB/Schema
    P Bugzilla/DB/Schema/Mysql.pm
    P Bugzilla/DB/Schema/Pg.pm
    cvs update: Updating Bugzilla/Install
    U Bugzilla/Install/DB.pm
    U Bugzilla/Install/Filesystem.pm
    U Bugzilla/Install/Localconfig.pm
    U Bugzilla/Install/Requirements.pm
    cvs update: Updating Bugzilla/Search
    P Bugzilla/Search/Quicksearch.pm
    U Bugzilla/Search/Saved.pm
    cvs update: Updating Bugzilla/Template
    cvs update: Updating Bugzilla/Template/Plugin
    P Bugzilla/Template/Plugin/Hook.pm
    cvs update: Updating Bugzilla/User
    P Bugzilla/User/Setting.pm
    cvs update: Updating Bugzilla/User/Setting
    U Bugzilla/User/Setting/Skin.pm
    cvs update: Updating Bugzilla/WebService
    U Bugzilla/WebService/Bug.pm
    U Bugzilla/WebService/Bugzilla.pm
    U Bugzilla/WebService/Constants.pm
    U Bugzilla/WebService/Product.pm
    U Bugzilla/WebService/User.pm
    cvs update: Updating Conf
    cvs update: Updating Conf/Supplies
    cvs update: Updating contrib
    cvs update: contrib/BugzillaEmail.pm is no longer in the repository
    cvs update: contrib/README.Mailif is no longer in the repository
    cvs update: contrib/bug_email.pl is no longer in the repository
    cvs update: contrib/bugmail_help.html is no longer in the repository
    cvs update: contrib/bugzilla.procmailrc is no longer in the repository
    cvs update: contrib/bugzilla_email_append.pl is no longer in the repository
    U contrib/bz_webservice_demo.pl
    P contrib/bzdbcopy.pl
    P contrib/gnats2bz.pl
    P contrib/merge-users.pl
    U contrib/recode.pl
    P contrib/sendbugmail.pl
    P contrib/sendunsentbugmail.pl
    P contrib/syncLDAP.pl
    cvs update: Updating contrib/bug-bugzilla
    cvs update: Updating contrib/bugzilla-submit
    cvs update: Updating contrib/cmdline
    cvs update: Updating contrib/gnatsparse
    P contrib/gnatsparse/gnatsparse.py
    cvs update: Updating css
    cvs update: Updating docs
    P docs/.cvsignore
    P docs/makedocs.pl
    P docs/rel_notes.txt
    cvs update: Updating docs/html
    U docs/html/.cvsignore
    cvs update: Updating docs/html/api
    U docs/html/api/.cvsignore
    U docs/html/api/style.css
    cvs update: Updating docs/images
    U docs/images/bzLifecycle.png
    P docs/images/bzLifecycle.xml
    cvs update: Updating docs/images/callouts
    cvs update: Updating docs/lib
    cvs update: Updating docs/lib/Pod
    cvs update: Updating docs/lib/Pod/Simple
    cvs update: Updating docs/lib/Pod/Simple/HTML
    U docs/lib/Pod/Simple/HTML/Bugzilla.pm
    cvs update: Updating docs/lib/Pod/Simple/HTMLBatch
    U docs/lib/Pod/Simple/HTMLBatch/Bugzilla.pm
    cvs update: Updating docs/pdf
    cvs update: Updating docs/sgml
    cvs update: Updating docs/txt
    cvs update: Updating docs/xml
    U docs/xml/.cvsignore
    P docs/xml/Bugzilla-Guide.xml
    P docs/xml/about.xml
    P docs/xml/administration.xml
    P docs/xml/conventions.xml
    P docs/xml/customization.xml
    P docs/xml/faq.xml
    P docs/xml/gfdl.xml
    P docs/xml/glossary.xml
    P docs/xml/index.xml
    P docs/xml/installation.xml
    P docs/xml/integration.xml
    P docs/xml/modules.xml
    P docs/xml/patches.xml
    P docs/xml/requiredsoftware.xml
    P docs/xml/security.xml
    P docs/xml/troubleshooting.xml
    P docs/xml/using.xml
    cvs update: Updating images
    cvs update: Updating js
    U js/attachment.js
    U js/expanding-tree.js
    cvs update: Updating oracle
    cvs update: Updating skins
    cvs update: move away skins/.cvsignore; it is in the way
    C skins/.cvsignore
    cvs update: Updating skins/standard
    U skins/standard/IE-fixes.css
    P skins/standard/buglist.css
    U skins/standard/create_attachment.css
    U skins/standard/dependency-tree.css
    P skins/standard/editusers.css
    P skins/standard/global.css
    P skins/standard/index.css
    P skins/standard/params.css
    U skins/standard/release-notes.css
    P skins/standard/show_multiple.css
    cvs update: Updating skins/standard/dependency-tree
    U skins/standard/dependency-tree/bug-item.png
    U skins/standard/dependency-tree/tree-closed.png
    U skins/standard/dependency-tree/tree-open.png
    U skins/standard/dependency-tree/tree.png
    cvs update: Updating skins/standard/global
    cvs update: Updating skins/standard/index
    cvs update: Updating t
    P t/001compile.t
    P t/004template.t
    P t/007util.t
    P t/008filter.t
    P t/009bugwords.t
    U t/010dependencies.t
    P t/012throwables.t
    cvs update: Updating t/Support
    P t/Support/Files.pm
    P t/Support/Templates.pm
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
    P template/en/default/config.js.tmpl
    P template/en/default/config.rdf.tmpl
    P template/en/default/filterexceptions.pl
    RCS file: /cvsroot/mozilla/webtools/bugzilla/template/en/default/index.html.tmpl,v
    retrieving revision 1.24
    retrieving revision 1.33.2.3
    Merging differences between 1.24 and 1.33.2.3 into index.html.tmpl
    rcsmerge: warning: conflicts during merge
    cvs update: conflicts found in template/en/default/index.html.tmpl
    C template/en/default/index.html.tmpl
    P template/en/default/sidebar.xul.tmpl
    U template/en/default/welcome-admin.html.tmpl
    cvs update: Updating template/en/default/account
    P template/en/default/account/cancel-token.txt.tmpl
    P template/en/default/account/create.html.tmpl
    P template/en/default/account/created.html.tmpl
    cvs update: template/en/default/account/exists.html.tmpl is no longer in the repository
    U template/en/default/account/profile-activity.html.tmpl
    cvs update: Updating template/en/default/account/auth
    cvs update: template/en/default/account/auth/ldap-error.html.tmpl is no longer in the repository
    P template/en/default/account/auth/login-small.html.tmpl
    P template/en/default/account/auth/login.html.tmpl
    cvs update: Updating template/en/default/account/email
    P template/en/default/account/email/change-new.txt.tmpl
    P template/en/default/account/email/change-old.txt.tmpl
    U template/en/default/account/email/confirm-new.html.tmpl
    P template/en/default/account/email/confirm.html.tmpl
    U template/en/default/account/email/request-new.txt.tmpl
    cvs update: Updating template/en/default/account/password
    P template/en/default/account/password/forgotten-password.txt.tmpl
    P template/en/default/account/password/set-forgotten-password.html.tmpl
    cvs update: Updating template/en/default/account/prefs
    P template/en/default/account/prefs/account.html.tmpl
    P template/en/default/account/prefs/email.html.tmpl
    P template/en/default/account/prefs/permissions.html.tmpl
    P template/en/default/account/prefs/prefs.html.tmpl
    P template/en/default/account/prefs/saved-searches.html.tmpl
    P template/en/default/account/prefs/settings.html.tmpl
    cvs update: Updating template/en/default/admin
    P template/en/default/admin/confirm-action.html.tmpl
    P template/en/default/admin/sudo.html.tmpl
    P template/en/default/admin/table.html.tmpl
    cvs update: Updating template/en/default/admin/attachstatus
    cvs update: Updating template/en/default/admin/classifications
    P template/en/default/admin/classifications/add.html.tmpl
    P template/en/default/admin/classifications/del.html.tmpl
    P template/en/default/admin/classifications/edit.html.tmpl
    P template/en/default/admin/classifications/reclassify.html.tmpl
    P template/en/default/admin/classifications/select.html.tmpl
    P template/en/default/admin/classifications/update.html.tmpl
    cvs update: Updating template/en/default/admin/common
    cvs update: Updating template/en/default/admin/components
    P template/en/default/admin/components/confirm-delete.html.tmpl
    P template/en/default/admin/components/create.html.tmpl
    P template/en/default/admin/components/created.html.tmpl
    P template/en/default/admin/components/deleted.html.tmpl
    P template/en/default/admin/components/edit.html.tmpl
    P template/en/default/admin/components/footer.html.tmpl
    P template/en/default/admin/components/list.html.tmpl
    P template/en/default/admin/components/select-product.html.tmpl
    P template/en/default/admin/components/updated.html.tmpl
    cvs update: Updating template/en/default/admin/custom_fields
    U template/en/default/admin/custom_fields/create.html.tmpl
    U template/en/default/admin/custom_fields/edit.html.tmpl
    U template/en/default/admin/custom_fields/list.html.tmpl
    cvs update: Updating template/en/default/admin/fieldvalues
    P template/en/default/admin/fieldvalues/confirm-delete.html.tmpl
    P template/en/default/admin/fieldvalues/create.html.tmpl
    P template/en/default/admin/fieldvalues/created.html.tmpl
    P template/en/default/admin/fieldvalues/deleted.html.tmpl
    P template/en/default/admin/fieldvalues/edit.html.tmpl
    P template/en/default/admin/fieldvalues/footer.html.tmpl
    P template/en/default/admin/fieldvalues/list.html.tmpl
    P template/en/default/admin/fieldvalues/select-field.html.tmpl
    P template/en/default/admin/fieldvalues/updated.html.tmpl
    cvs update: Updating template/en/default/admin/flag-type
    P template/en/default/admin/flag-type/confirm-delete.html.tmpl
    P template/en/default/admin/flag-type/edit.html.tmpl
    P template/en/default/admin/flag-type/list.html.tmpl
    cvs update: Updating template/en/default/admin/groups
    U template/en/default/admin/groups/change.html.tmpl
    P template/en/default/admin/groups/create.html.tmpl
    P template/en/default/admin/groups/delete.html.tmpl
    P template/en/default/admin/groups/deleted.html.tmpl
    P template/en/default/admin/groups/edit.html.tmpl
    P template/en/default/admin/groups/list.html.tmpl
    P template/en/default/admin/groups/remove.html.tmpl
    cvs update: Updating template/en/default/admin/keywords
    P template/en/default/admin/keywords/confirm-delete.html.tmpl
    P template/en/default/admin/keywords/create.html.tmpl
    P template/en/default/admin/keywords/edit.html.tmpl
    P template/en/default/admin/keywords/list.html.tmpl
    P template/en/default/admin/keywords/rebuild-cache.html.tmpl
    cvs update: Updating template/en/default/admin/milestones
    P template/en/default/admin/milestones/confirm-delete.html.tmpl
    P template/en/default/admin/milestones/create.html.tmpl
    P template/en/default/admin/milestones/created.html.tmpl
    P template/en/default/admin/milestones/deleted.html.tmpl
    P template/en/default/admin/milestones/edit.html.tmpl
    P template/en/default/admin/milestones/footer.html.tmpl
    P template/en/default/admin/milestones/list.html.tmpl
    P template/en/default/admin/milestones/select-product.html.tmpl
    P template/en/default/admin/milestones/updated.html.tmpl
    cvs update: Updating template/en/default/admin/params
    U template/en/default/admin/params/admin.html.tmpl
    P template/en/default/admin/params/attachment.html.tmpl
    P template/en/default/admin/params/bugchange.html.tmpl
    U template/en/default/admin/params/bugfields.html.tmpl
    P template/en/default/admin/params/bugmove.html.tmpl
    U template/en/default/admin/params/core.html.tmpl
    P template/en/default/admin/params/editparams.html.tmpl
    P template/en/default/admin/params/groupsecurity.html.tmpl
    P template/en/default/admin/params/ldap.html.tmpl
    P template/en/default/admin/params/mta.html.tmpl
    P template/en/default/admin/params/patchviewer.html.tmpl
    cvs update: Updating template/en/default/admin/products
    P template/en/default/admin/products/confirm-delete.html.tmpl
    P template/en/default/admin/products/create.html.tmpl
    P template/en/default/admin/products/edit-common.html.tmpl
    P template/en/default/admin/products/edit.html.tmpl
    P template/en/default/admin/products/footer.html.tmpl
    P template/en/default/admin/products/list-classifications.html.tmpl
    P template/en/default/admin/products/list.html.tmpl
    P template/en/default/admin/products/updated.html.tmpl
    cvs update: Updating template/en/default/admin/products/groupcontrol
    P template/en/default/admin/products/groupcontrol/confirm-edit.html.tmpl
    P template/en/default/admin/products/groupcontrol/edit.html.tmpl
    cvs update: Updating template/en/default/admin/request-type
    cvs update: Updating template/en/default/admin/sanitycheck
    cvs update: Updating template/en/default/admin/settings
    P template/en/default/admin/settings/edit.html.tmpl
    cvs update: Updating template/en/default/admin/users
    P template/en/default/admin/users/confirm-delete.html.tmpl
    P template/en/default/admin/users/create.html.tmpl
    P template/en/default/admin/users/edit.html.tmpl
    P template/en/default/admin/users/list.html.tmpl
    P template/en/default/admin/users/search.html.tmpl
    P template/en/default/admin/users/userdata.html.tmpl
    cvs update: Updating template/en/default/admin/versions
    P template/en/default/admin/versions/confirm-delete.html.tmpl
    P template/en/default/admin/versions/create.html.tmpl
    P template/en/default/admin/versions/created.html.tmpl
    P template/en/default/admin/versions/deleted.html.tmpl
    P template/en/default/admin/versions/edit.html.tmpl
    P template/en/default/admin/versions/footer.html.tmpl
    P template/en/default/admin/versions/list.html.tmpl
    P template/en/default/admin/versions/select-product.html.tmpl
    P template/en/default/admin/versions/updated.html.tmpl
    cvs update: Updating template/en/default/attachment
    P template/en/default/attachment/choose.html.tmpl
    U template/en/default/attachment/confirm-delete.html.tmpl
    P template/en/default/attachment/create.html.tmpl
    P template/en/default/attachment/created.html.tmpl
    U template/en/default/attachment/createformcontents.html.tmpl
    U template/en/default/attachment/delete_reason.txt.tmpl
    P template/en/default/attachment/diff-header.html.tmpl
    P template/en/default/attachment/edit.html.tmpl
    P template/en/default/attachment/list.html.tmpl
    P template/en/default/attachment/show-multiple.html.tmpl
    P template/en/default/attachment/updated.html.tmpl
    cvs update: Updating template/en/default/bug
    P template/en/default/bug/choose.html.tmpl
    P template/en/default/bug/comments.html.tmpl
    P template/en/default/bug/dependency-graph.html.tmpl
    P template/en/default/bug/dependency-tree.html.tmpl
    P template/en/default/bug/edit.html.tmpl
    U template/en/default/bug/field.html.tmpl
    RCS file: /cvsroot/mozilla/webtools/bugzilla/template/en/default/bug/knob.html.tmpl,v
    retrieving revision 1.19.2.1
    retrieving revision 1.28.2.2
    Merging differences between 1.19.2.1 and 1.28.2.2 into knob.html.tmpl
    rcsmerge: warning: conflicts during merge
    cvs update: conflicts found in template/en/default/bug/knob.html.tmpl
    C template/en/default/bug/knob.html.tmpl
    P template/en/default/bug/navigate.html.tmpl
    P template/en/default/bug/show-multiple.html.tmpl
    P template/en/default/bug/show.html.tmpl
    P template/en/default/bug/show.xml.tmpl
    P template/en/default/bug/summarize-time.html.tmpl
    cvs update: Updating template/en/default/bug/activity
    P template/en/default/bug/activity/show.html.tmpl
    P template/en/default/bug/activity/table.html.tmpl
    cvs update: Updating template/en/default/bug/create
    P template/en/default/bug/create/comment-guided.txt.tmpl
    P template/en/default/bug/create/comment.txt.tmpl
    U template/en/default/bug/create/confirm-create-dupe.html.tmpl
    P template/en/default/bug/create/create-guided.html.tmpl
    P template/en/default/bug/create/create.html.tmpl
    P template/en/default/bug/create/make-template.html.tmpl
    cvs update: Updating template/en/default/bug/process
    P template/en/default/bug/process/bugmail.html.tmpl
    P template/en/default/bug/process/confirm-duplicate.html.tmpl
    P template/en/default/bug/process/header.html.tmpl
    P template/en/default/bug/process/midair.html.tmpl
    P template/en/default/bug/process/results.html.tmpl
    P template/en/default/bug/process/verify-new-product.html.tmpl
    cvs update: Updating template/en/default/bug/votes
    P template/en/default/bug/votes/delete-all.html.tmpl
    P template/en/default/bug/votes/list-for-bug.html.tmpl
    P template/en/default/bug/votes/list-for-user.html.tmpl
    cvs update: Updating template/en/default/email
    U template/en/default/email/newchangedmail.txt.tmpl
    P template/en/default/email/sudo.txt.tmpl
    U template/en/default/email/votes-removed.txt.tmpl
    U template/en/default/email/whine.txt.tmpl
    cvs update: Updating template/en/default/flag
    P template/en/default/flag/list.html.tmpl
    cvs update: Updating template/en/default/global
    RCS file: /cvsroot/mozilla/webtools/bugzilla/template/en/default/global/banner.html.tmpl,v
    retrieving revision 1.8
    retrieving revision 1.10
    Merging differences between 1.8 and 1.10 into banner.html.tmpl
    rcsmerge: warning: conflicts during merge
    cvs update: conflicts found in template/en/default/global/banner.html.tmpl
    C template/en/default/global/banner.html.tmpl
    P template/en/default/global/choose-classification.html.tmpl
    P template/en/default/global/choose-product.html.tmpl
    P template/en/default/global/code-error.html.tmpl
    U template/en/default/global/common-links.html.tmpl
    P template/en/default/global/confirm-user-match.html.tmpl
    U template/en/default/global/docslinks.html.tmpl
    P template/en/default/global/field-descs.none.tmpl
    P template/en/default/global/footer.html.tmpl
    RCS file: /cvsroot/mozilla/webtools/bugzilla/template/en/default/global/header.html.tmpl,v
    retrieving revision 1.40.2.1
    retrieving revision 1.49
    Merging differences between 1.40.2.1 and 1.49 into header.html.tmpl
    M template/en/default/global/header.html.tmpl
    P template/en/default/global/hidden-fields.html.tmpl
    U template/en/default/global/js-products.html.tmpl
    P template/en/default/global/message.txt.tmpl
    P template/en/default/global/messages.html.tmpl
    P template/en/default/global/per-bug-queries.html.tmpl
    P template/en/default/global/select-menu.html.tmpl
    P template/en/default/global/setting-descs.none.tmpl
    P template/en/default/global/site-navigation.html.tmpl
    P template/en/default/global/tabs.html.tmpl
    U template/en/default/global/textarea.html.tmpl
    P template/en/default/global/useful-links.html.tmpl
    P template/en/default/global/user-error.html.tmpl
    RCS file: /cvsroot/mozilla/webtools/bugzilla/template/en/default/global/variables.none.tmpl,v
    retrieving revision 1.3
    retrieving revision 1.4
    Merging differences between 1.3 and 1.4 into variables.none.tmpl
    M template/en/default/global/variables.none.tmpl
    cvs update: Updating template/en/default/list
    P template/en/default/list/change-columns.html.tmpl
    P template/en/default/list/edit-multiple.html.tmpl
    P template/en/default/list/list-simple.html.tmpl
    P template/en/default/list/list.atom.tmpl
    P template/en/default/list/list.html.tmpl
    P template/en/default/list/list.ics.tmpl
    P template/en/default/list/quips.html.tmpl
    RCS file: /cvsroot/mozilla/webtools/bugzilla/template/en/default/list/table.html.tmpl,v
    retrieving revision 1.28.2.1
    retrieving revision 1.32
    Merging differences between 1.28.2.1 and 1.32 into table.html.tmpl
    rcsmerge: warning: conflicts during merge
    cvs update: conflicts found in template/en/default/list/table.html.tmpl
    C template/en/default/list/table.html.tmpl
    cvs update: Updating template/en/default/pages
    P template/en/default/pages/bug-writing.html.tmpl
    P template/en/default/pages/fields.html.tmpl
    P template/en/default/pages/linkify.html.tmpl
    P template/en/default/pages/quicksearch.html.tmpl
    P template/en/default/pages/quicksearchhack.html.tmpl
    U template/en/default/pages/release-notes.html.tmpl
    P template/en/default/pages/voting.html.tmpl
    cvs update: Updating template/en/default/reports
    P template/en/default/reports/chart.html.tmpl
    P template/en/default/reports/components.html.tmpl
    P template/en/default/reports/create-chart.html.tmpl
    P template/en/default/reports/duplicates-table.html.tmpl
    P template/en/default/reports/duplicates.html.tmpl
    P template/en/default/reports/edit-series.html.tmpl
    P template/en/default/reports/keywords.html.tmpl
    P template/en/default/reports/menu.html.tmpl
    U template/en/default/reports/old-charts.html.tmpl
    P template/en/default/reports/report-bar.png.tmpl
    P template/en/default/reports/report-line.png.tmpl
    P template/en/default/reports/report-pie.png.tmpl
    P template/en/default/reports/report-table.csv.tmpl
    P template/en/default/reports/report-table.html.tmpl
    P template/en/default/reports/report.html.tmpl
    P template/en/default/reports/series-common.html.tmpl
    P template/en/default/reports/series.html.tmpl
    cvs update: Updating template/en/default/request
    P template/en/default/request/email.txt.tmpl
    P template/en/default/request/queue.html.tmpl
    cvs update: Updating template/en/default/search
    P template/en/default/search/boolean-charts.html.tmpl
    P template/en/default/search/form.html.tmpl
    P template/en/default/search/knob.html.tmpl
    P template/en/default/search/search-advanced.html.tmpl
    P template/en/default/search/search-create-series.html.tmpl
    P template/en/default/search/search-help.html.tmpl
    U template/en/default/search/search-plugin.xml.tmpl
    P template/en/default/search/search-report-graph.html.tmpl
    P template/en/default/search/search-report-table.html.tmpl
    P template/en/default/search/search-specific.html.tmpl
    P template/en/default/search/tabs.html.tmpl
    cvs update: Updating template/en/default/setup
    cvs update: Updating template/en/default/whine
    P template/en/default/whine/mail.html.tmpl
    P template/en/default/whine/mail.txt.tmpl
    P template/en/default/whine/multipart-mime.txt.tmpl
    P template/en/default/whine/schedule.html.tmpl
    cvs update: Updating template/en/extension
    P template/en/extension/filterexceptions.pl
    cvs update: Updating template/en/extension/hook

-   Watch for conflicts during update; in the current case the following conflicts were reported:

<!-- -->

    cvs update: conflict: globals.pl is modified but no longer in the repository
    C globals.pl

    RCS file: /cvsroot/mozilla/webtools/bugzilla/template/en/default/index.html.tmpl,v
    retrieving revision 1.24
    retrieving revision 1.33.2.3
    Merging differences between 1.24 and 1.33.2.3 into index.html.tmpl
    rcsmerge: warning: conflicts during merge
    cvs update: conflicts found in template/en/default/index.html.tmpl
    C template/en/default/index.html.tmpl

    RCS file: /cvsroot/mozilla/webtools/bugzilla/template/en/default/bug/knob.html.tmpl,v
    retrieving revision 1.19.2.1
    retrieving revision 1.28.2.2
    Merging differences between 1.19.2.1 and 1.28.2.2 into knob.html.tmpl
    rcsmerge: warning: conflicts during merge
    cvs update: conflicts found in template/en/default/bug/knob.html.tmpl
    C template/en/default/bug/knob.html.tmpl

    RCS file: /cvsroot/mozilla/webtools/bugzilla/template/en/default/global/banner.html.tmpl,v
    retrieving revision 1.8
    retrieving revision 1.10
    Merging differences between 1.8 and 1.10 into banner.html.tmpl
    rcsmerge: warning: conflicts during merge
    cvs update: conflicts found in template/en/default/global/banner.html.tmpl
    C template/en/default/global/banner.html.tmpl

    RCS file: /cvsroot/mozilla/webtools/bugzilla/template/en/default/list/table.html.tmpl,v
    retrieving revision 1.28.2.1
    retrieving revision 1.32
    Merging differences between 1.28.2.1 and 1.32 into table.html.tmpl
    rcsmerge: warning: conflicts during merge
    cvs update: conflicts found in template/en/default/list/table.html.tmpl
    C template/en/default/list/table.html.tmpl

-   Fix conflicts; in the example case:

<!-- -->

    cd template/en/default
    cvs status index.html.tmpl
    # (shows "File had conflicts on merge")
    ee index.html.tmpl
    cvs status index.html.tmpl
    # (shows "Locally modified")
    cd ../../..

-   Remove auxiliary files created due to the merge conflict:

<!-- -->

    find . -name "\.#*" -and -type f
    find . -name "\.#*" -and -type f -ok rm "{}" \;

-   Run `checksetup.pl` from the command line:

<!-- -->

    ./checksetup.pl

Partial output:

    WARNING: We are about to convert your table storage format to UTF8. This
             allows Bugzilla to correctly store and sort international characters.
             However, if you have any non-UTF-8 data in your database,
             it ***WILL BE DELETED*** by this process. So, before
             you continue with checksetup.pl, if you have any non-UTF-8
             data (or even if you're not sure) you should press Ctrl-C now
             to interrupt checksetup.pl, and run contrib/recode.pl to make all 
             the data in your database into UTF-8. You should also back up your
             database before continuing. This will affect every single table
             in the database, even non-Bugzilla tables.

             If you ever used a version of Bugzilla before 2.22, we STRONGLY
             recommend that you stop checksetup.pl NOW and run contrib/recode.pl.

             Press Enter to continue or Ctrl-C to exit...

So:

    contrib/recode.pl --charset=iso-8859-1 --dry-run
    contrib/recode.pl --charset=iso-8859-1

Output:

    Converting attachments.description...
    Converting attachments.filename...
    Converting attachments.mimetype...
    Converting bug_severity.value...
    Converting bug_status.value...
    Converting bugs.priority...
    Converting bugs.keywords...
    Converting bugs.bug_file_loc...
    Converting bugs.rep_platform...
    Converting bugs.short_desc...
    Converting bugs.status_whiteboard...
    Converting bugs.bug_severity...
    Converting bugs.bug_status...
    Converting bugs.version...
    Converting bugs.resolution...
    Converting bugs.target_milestone...
    Converting bugs.alias...
    Converting bugs.op_sys...
    Converting bugs_activity.added...
    Converting bugs_activity.removed...
    Converting classifications.name...
    Converting classifications.description...
    Converting components.name...
    Converting components.description...
    Converting fielddefs.name...
    Converting fielddefs.description...
    Converting flags.status...
    Converting flagtypes.cc_list...
    Converting flagtypes.target_type...
    Converting flagtypes.name...
    Converting flagtypes.description...
    Converting groups.userregexp...
    Converting groups.name...
    Converting groups.description...
    Converting keyworddefs.name...
    Converting keyworddefs.description...
    Converting logincookies.ipaddr...
    Converting logincookies.cookie...
    Converting longdescs.thetext...
    Converting milestones.value...
    Converting namedqueries.query...
    Converting namedqueries.name...
    Converting op_sys.value...
    Converting priority.value...
    Converting products.defaultmilestone...
    Converting products.milestoneurl...
    Converting products.name...
    Converting products.description...
    Converting profile_setting.setting_name...
    Converting profile_setting.setting_value...
    Converting profiles.cryptpassword...
    Converting profiles.realname...
    Converting profiles.disabledtext...
    Converting profiles.login_name...
    Converting profiles.extern_id...
    Converting profiles_activity.newvalue...
    Converting profiles_activity.oldvalue...
    Converting quips.quip...
    Converting rep_platform.value...
    Converting resolution.value...
    Converting series.query...
    Converting series.name...
    Converting series_categories.name...
    Converting setting.name...
    Converting setting.default_value...
    Converting setting_value.name...
    Converting setting_value.value...
    Converting tokens.eventdata...
    Converting tokens.token...
    Converting tokens.tokentype...
    Converting versions.value...
    Converting whine_events.subject...
    Converting whine_events.body...
    Converting whine_queries.query_name...
    Converting whine_queries.title...
    Converting whine_schedules.run_day...
    Converting whine_schedules.run_time...

Before running `contrib/recode.pl` I had to find out the encoding in use by the database (see "[Finding out the encoding of a MySQL database](/wiki/Finding_out_the_encoding_of_a_MySQL_database)"), which turned out to be `latin1`, the [MySQL](/wiki/MySQL) default. I then used the following command line to get a listing of all encodings and figure out the [Perl](/wiki/Perl) equivalent, `iso-8859-1` (see <http://en.wikipedia.org/wiki/ISO/IEC_8859-1>):

    perl -MEncode -e 'print join("\n", Encode->encodings(":all"))'

I could then run `checksetup.pl` again:

    ./checksetup.pl

Partial output:

    Converting table storage format to UTF-8. This may take a while.
    Converting attachments.description to be stored as UTF-8...
    Converting attachments.mimetype to be stored as UTF-8...
    Converting attachments.filename to be stored as UTF-8...
    Converting bug_severity.value to be stored as UTF-8...
    Converting bug_status.value to be stored as UTF-8...
    Converting bugs.bug_file_loc to be stored as UTF-8...
    Converting bugs.bug_severity to be stored as UTF-8...
    Converting bugs.bug_status to be stored as UTF-8...
    Removing index 'bugs_short_desc_idx' from the bugs table...
    Converting bugs.short_desc to be stored as UTF-8...
    Converting bugs.op_sys to be stored as UTF-8...
    Converting bugs.priority to be stored as UTF-8...
    Converting bugs.rep_platform to be stored as UTF-8...
    Converting bugs.version to be stored as UTF-8...
    Converting bugs.resolution to be stored as UTF-8...
    Converting bugs.target_milestone to be stored as UTF-8...
    Converting bugs.status_whiteboard to be stored as UTF-8...
    Converting bugs.keywords to be stored as UTF-8...
    Converting bugs.alias to be stored as UTF-8...
    Converting bugs_activity.added to be stored as UTF-8...
    Converting bugs_activity.removed to be stored as UTF-8...
    Converting classifications.name to be stored as UTF-8...
    Converting classifications.description to be stored as UTF-8...
    Converting components.name to be stored as UTF-8...
    Converting components.description to be stored as UTF-8...
    Converting fielddefs.name to be stored as UTF-8...
    Converting fielddefs.description to be stored as UTF-8...
    Converting flags.status to be stored as UTF-8...
    Converting flagtypes.name to be stored as UTF-8...
    Converting flagtypes.description to be stored as UTF-8...
    Converting flagtypes.cc_list to be stored as UTF-8...
    Converting flagtypes.target_type to be stored as UTF-8...
    Converting groups.name to be stored as UTF-8...
    Converting groups.description to be stored as UTF-8...
    Converting groups.userregexp to be stored as UTF-8...
    Converting keyworddefs.name to be stored as UTF-8...
    Converting keyworddefs.description to be stored as UTF-8...
    Converting logincookies.cookie to be stored as UTF-8...
    Converting logincookies.ipaddr to be stored as UTF-8...
    Removing index 'longdescs_thetext_idx' from the longdescs table...
    Converting longdescs.thetext to be stored as UTF-8...
    Converting milestones.value to be stored as UTF-8...
    Converting namedqueries.name to be stored as UTF-8...
    Converting namedqueries.query to be stored as UTF-8...
    Converting op_sys.value to be stored as UTF-8...
    Converting priority.value to be stored as UTF-8...
    Converting products.name to be stored as UTF-8...
    Converting products.description to be stored as UTF-8...
    Converting products.milestoneurl to be stored as UTF-8...
    Converting products.defaultmilestone to be stored as UTF-8...
    Converting profile_setting.setting_name to be stored as UTF-8...
    Converting profile_setting.setting_value to be stored as UTF-8...
    Converting profiles.login_name to be stored as UTF-8...
    Converting profiles.cryptpassword to be stored as UTF-8...
    Converting profiles.realname to be stored as UTF-8...
    Converting profiles.disabledtext to be stored as UTF-8...
    Converting profiles.extern_id to be stored as UTF-8...
    Converting profiles_activity.oldvalue to be stored as UTF-8...
    Converting profiles_activity.newvalue to be stored as UTF-8...
    Converting quips.quip to be stored as UTF-8...
    Converting rep_platform.value to be stored as UTF-8...
    Converting resolution.value to be stored as UTF-8...
    Converting series.name to be stored as UTF-8...
    Converting series.query to be stored as UTF-8...
    Converting series_categories.name to be stored as UTF-8...
    Converting setting.name to be stored as UTF-8...
    Converting setting.default_value to be stored as UTF-8...
    Converting setting_value.name to be stored as UTF-8...
    Converting setting_value.value to be stored as UTF-8...
    Converting tokens.token to be stored as UTF-8...
    Converting tokens.tokentype to be stored as UTF-8...
    Converting tokens.eventdata to be stored as UTF-8...
    Converting versions.value to be stored as UTF-8...
    Converting whine_events.subject to be stored as UTF-8...
    Converting whine_events.body to be stored as UTF-8...
    Converting whine_queries.query_name to be stored as UTF-8...
    Converting whine_queries.title to be stored as UTF-8...
    Converting whine_schedules.run_day to be stored as UTF-8...
    Converting whine_schedules.run_time to be stored as UTF-8...
    Creating ./extensions directory...
    Creating skins/contrib directory...
    Creating skins/custom/IE-fixes.css...
    Creating skins/custom/create_attachment.css...
    Creating skins/custom/dependency-tree.css...
    Creating skins/custom/release-notes.css...
    New parameter: allow_attachment_deletion
    New parameter: docs_urlbase
    New parameter: announcehtml
    New parameter: proxy_url
    New parameter: upgrade_notification
    New parameter: querysharegroup
    New parameter: LDAPstarttls
    New parameter: mailfrom
    New parameter: globalwatchers
    The following parameters are no longer used in Bugzilla, and so have been
    moved from your parameters file into old-params.txt:
    voteremovedmail, whinemail, passwordmail, newchangedmail
    Removing existing compiled templates ...
    Precompiling templates...
    Fixing file permissions...
    Adding new column 'type' to the 'fielddefs' table...
    Adding new column 'custom' to the 'fielddefs' table...
    Adding new column 'enter_bug' to the 'fielddefs' table...
    Renaming column 'fielddefs.fieldid' to 'fielddefs.id'...
    Populating quips table from ./data/comments...

    Quips are now stored in the database, rather than in an external file.
    The quips previously stored in ./data/comments have been copied into
    the database, and that file has been renamed to ./data/comments.bak
    You may delete the renamed file once you have confirmed that all your
    quips were moved successfully.

    Updating column creator in table series ...
    Old: mediumint NOT NULL
    New: mediumint
    Adding new index 'longdescs_thetext_idx' to the longdescs table ...
    Adding new column 'comment_id' to the 'longdescs' table...
    Updating column id in table flags ...
    Old: mediumint NOT NULL PRIMARY KEY
    New: mediumint auto_increment NOT NULL PRIMARY KEY
    Deleting the 'is_active' column from the 'flags' table...
    Updating column short_desc in table bugs ...
    Old: mediumtext NOT NULL
    New: varchar(255) NOT NULL
    Adding new column 'id' to the 'namedqueries' table...
    Deleting the 'linkinfooter' column from the 'namedqueries' table...
    Adding new column 'sortkey' to the 'classifications' table...
    Adding new column 'disable_mail' to the 'profiles' table...
    Found a data/nomail file.  Moving nomail entries into DB...
    Updating column milestoneurl in table products ...
    Old: tinytext NOT NULL
    New: tinytext DEFAULT '' NOT NULL
    Updating column disallownew in table products ...
    Old: tinyint NOT NULL
    New: tinyint DEFAULT 0 NOT NULL
    Updating column votesperuser in table products ...
    Old: smallint NOT NULL
    New: smallint DEFAULT 0 NOT NULL
    Updating column votestoconfirm in table products ...
    Old: smallint NOT NULL
    New: smallint DEFAULT 0 NOT NULL
    Deleting the 'refreshed_when' column from the 'profiles' table...
    Deleting the 'last_changed' column from the 'groups' table...
    Updating column id in table flagtypes ...
    Old: smallint NOT NULL PRIMARY KEY
    New: smallint auto_increment NOT NULL PRIMARY KEY
    Updating column id in table keyworddefs ...
    Old: smallint NOT NULL PRIMARY KEY
    New: smallint auto_increment NOT NULL PRIMARY KEY
    Updating column userid in table tokens ...
    Old: mediumint NOT NULL
    New: mediumint
    Updating column disabledtext in table profiles ...
    Old: mediumtext NOT NULL
    New: mediumtext DEFAULT '' NOT NULL
    Updating column realname in table profiles ...
    Old: varchar(255)
    New: varchar(255) DEFAULT '' NOT NULL
    Removing index 'longdescs_who_idx' from the longdescs table...
    Adding new index 'longdescs_who_idx' to the longdescs table ...
    Adding new column 'subclass' to the 'setting' table...
    Updating column thetext in table longdescs ...
    Old: mediumtext
    New: mediumtext NOT NULL
    Adding new column 'editcomponents' to the 'group_control_map' table...
    Adding new column 'editbugs' to the 'group_control_map' table...
    Adding new column 'canconfirm' to the 'group_control_map' table...
    Adding new column 'type' to the 'longdescs' table...
    Adding new column 'extra_data' to the 'longdescs' table...
    Adding new column 'id' to the 'versions' table...
    Adding new column 'id' to the 'milestones' table...
    Adding a new user setting called 'skin'
    Adding a new user setting called 'lang'
    Adding a new user setting called 'zoom_textareas'
    Adding a new user setting called 'state_addselfcc'

Finally I ran `checksetup.pl` one more time so as to recompile the templates:

    ./checksetup.pl

Partial output:

    Removing existing compiled templates ...
    Precompiling templates...
    Fixing file permissions...

-   Use my custom `repair-bugzilla.sh` to repair the ownership and permissions on the installed files.
-   In the "Parameters" section empty the `shutdownhtml` field; in order to get there you need explicitly navigate to `editparams.cgi` and log in.

My first attempt to do this failed yielding messages like this in the [Apache](/wiki/Apache) error log:

    [Fri May 11 12:29:00 2007] [crit] [client 10.0.0.1] (13)Permission denied: /path/to/a/support/bugs/.htaccess pcfg_openfile: unable to check htaccess file, ensure it is readable

The `.htaccess` file, however, is world-readable. It turns out that the error message is slightly misleading (see [this bug report](http://mail-archives.apache.org/mod_mbox/httpd-bugs/200507.mbox/%3C20050707174643.4D01713@ajax.apache.org%3E)) and that the real problem is the permissions of the parent directory:

    chmod 755 .

-   Run `sanitycheck.cgi` from within the browser.
-   Update parameters.
-   Test the installation.

# Future improvements

This process could be largely automated via a shell script.
