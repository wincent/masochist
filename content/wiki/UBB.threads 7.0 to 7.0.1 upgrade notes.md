---
tags: ubb.threads wiki
---

-   In control panel, close the forums
-   Backup database
-   Backup installed files
-   Upload all files/folders except for the `includes`, `styles` and `cache_builders/custom` directories.

In reality, this step wasn't so easy as I was prevented performing the upload due to permissions errors. I then tried manually deleting the old files but was again thwarted by permissions errors. Finally, I had to [SSH](/wiki/SSH) into the server and remove the directories using root privileges.

    cd path_to_UBB_install
    sudo rm -rf admin images languages libs scripts templates ubb_js
    sudo rm cache_builders/*.php

I also had to temporarily relax the permissions of the installation directory in order for the upload to succeed:

    sudo chmod 777 .

These problems are all caused by the fact that [UBB.threads](/wiki/UBB.threads) does not play nicely with [PHP's](/wiki/PHP) [Safe Mode](/wiki/Safe_Mode). This is partly PHP's fault (the design limitations of Safe Mode) and partly the fault of [UBB.Threads](/wiki/UBB.Threads) (failure to work around the limitations of Safe Mode.

So after uploading it is necessary to re-establish the ownership and permissions to how [UBB.Threads](/wiki/UBB.Threads) wants them:

    sudo chmod 755 .
    sudo chmod 777 includes
    sudo chmod 666 includes/*
    sudo chmod 777 sessions
    sudo chmod 777 templates/compile
    sudo chmod 777 templates
    sudo chmod 777 cache
    sudo chmod 777 cache_builders
    sudo chmod 777 cache_builders/custom
    sudo chmod 666 cache_builders/custom/*
    sudo chmod 777 styles
    sudo chmod 666 styles/*.php styles/*.css
    sudo chown -R apache_user:apache_group *

-   Run the upgrade script `install/upgrade.php` from within the browser
-   Remove the `install` directory from the server

<!-- -->

    sudo rm -rf install

-   Open the forums again

# See also

-   Upgrade notes for 7.0 series: <http://www.ubbcentral.com/doc_upgrade7.php>
-   Permissions notes: <http://www.ubbcentral.com/doc_install.php>
