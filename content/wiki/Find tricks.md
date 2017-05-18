---
tags: unix wiki
---

# find files with these exact permissions
    find . -perm 755

    # find files with any executable bit set (note the minus sign)
    find . -perm -111

    # rid yourself of annoyances
    find . -name .DS_Store
    find . -name .DS_Store -exec rm {} \;

    # but not directories
    find . -perm -111 -and -not -type d

    # fix PNG files with executable bits set on them
    find . -perm -111 -and -name '*.png'
    find . -perm -111 -and -name '*.png' -exec chmod 644 {} \;

# See also

-   [Automated moving of files using find](/wiki/Automated_moving_of_files_using_find)

# External resources

-   <http://www.grymoire.com/Unix/Find.html>
