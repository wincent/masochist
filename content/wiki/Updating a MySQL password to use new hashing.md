---
tags: mysql
---

    > SET SESSION old_passwords=0;
    > SET PASSWORD FOR 'foo'@'bar' = password('blah');
    > FLUSH PRIVILEGES;

# See also

-   <http://dev.mysql.com/doc/refman/5.0/en/password-hashing.html>
-   <http://code.openark.org/blog/mysql/upgrading-passwords-from-old_passwords-to-new-passwords>

