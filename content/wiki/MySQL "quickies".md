---
tags: wiki
---

# Counting the rows in a table

    SELECT COUNT(*) FROM table;

# Using `COMMIT` and `ROLLBACK`

    START TRANSACTION;
    # do something...
    COMMIT;
    # or ROLLBACK;

See: <http://dev.mysql.com/doc/refman/4.1/en/commit.html>

# Printing lengthy query results vertically

For query results with many columns, or very wide columns, you can increase readability by terminating the query with a `\G` instead of a semi-colon:

    SELECT * FROM table\G
