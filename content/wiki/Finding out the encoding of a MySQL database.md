---
tags: mysql wiki
---

Once logged in to [MySQL](/wiki/MySQL) you can find out the text encoding of the current database as follows:

    mysql> SHOW VARIABLES LIKE "character\_set\_database";
    +------------------------+--------+
    | Variable_name          | Value  |
    +------------------------+--------+
    | character_set_database | latin1 |
    +------------------------+--------+
    1 row in set (0.00 sec)

Or more verbosely:

    mysql> SHOW VARIABLES LIKE 'character\_set\_%';
    +--------------------------+--------+
    | Variable_name            | Value  |
    +--------------------------+--------+
    | character_set_client     | latin1 |
    | character_set_connection | latin1 |
    | character_set_database   | latin1 |
    | character_set_results    | latin1 |
    | character_set_server     | latin1 |
    | character_set_system     | utf8   |
    +--------------------------+--------+
    6 rows in set (0.00 sec)

You can find out the character set on a specific table in a database as follows:

    mysql> SHOW CREATE TABLE the_table;

The output should include information such as:

    ENGINE=MyISAM DEFAULT CHARSET=utf8

# See also

-   [Setting the encoding of a MySQL database](/wiki/Setting_the_encoding_of_a_MySQL_database)
-   Official [MySQL](/wiki/MySQL) documentation for 4.1 series: <http://dev.mysql.com/doc/refman/4.1/en/charset-connection.html>
