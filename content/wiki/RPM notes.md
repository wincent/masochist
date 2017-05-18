---
tags: red.hat wiki
---

[RPM](/wiki/RPM) recipes.

# Get a full list of RPMs installed

    rpm -qa

# Get a list of custom [Rackspace](/wiki/Rackspace) RPMs installed

    rpm -qa | grep "RS$"

# List files installed by a package

    rpm -ql cyrus-sasl-2.1.15-10

# See what would happen if you installed a package

    rpm -i --test package.rpm

# Freshen (upgrade) an existing package

    sudo rpm -F squirrelmail-1.4.5-1.noarch.rpm

# Verifying

Meaning of output flags:

    5 - MD5 checksum
    S - file size
    L - link
    T - mod time
    D - device
    U - user
    G - group
    M - mode (perms, file type)
    ? - unreadable file

## Verifying all installed packages

    rpm -Va

## Verifying a specific installed package

    rpm -V httpd

# Read info for a not-yet-installed package

    rpm --query --info --package package.rpm

# View a changelog for a not-yet-installed package

    rpm --query --info --changelog --package MySQL-server-standard-4.1.19-0.rhel3.i386.rpm

# Remove/erase a package

    sudo rpm -e --test package-name
    sudo rpm -e package-name
