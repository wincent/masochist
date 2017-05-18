---
tags: acl wiki
cache_breaker: 1
---

# [Linux](/wiki/Linux)

-   Example of [ACLs](/wiki/ACLs) in action on [Linux](/wiki/Linux): "[Git repository access control](/wiki/Git_repository_access_control)"

# [Mac OS X](/wiki/Mac_OS_X)

To show existing ACLs on an entity, e.g `foo`:

```shell
$ ls -le foo
```

To add an item to the ACL for `foo`:

```shell
$ chmod +a 'username:allow read,write' foo
```

For a full list of possible perimissions, see [the Mac OS X chmod man page](http://developer.apple.com/library/mac/#documentation/Darwin/Reference/ManPages/man1/chmod.1.html).

For a concerete example of setting up ACLs on Mac OS X, see "[Installing nginx 0.8.54 on Mac OS X 10.6.6 Snow Leopard](/wiki/Installing_nginx_0.8.54_on_Mac_OS_X_10.6.6_Snow_Leopard)".

## Links

-   Review of ACL functionality introduced in Mac OS X [Tiger](/wiki/Tiger): <http://arstechnica.com/apple/reviews/2005/04/macosx-10-4.ars/8>
-   Nice walkthrough of using ACLs on Mac OS X: <http://aplawrence.com/MacOSX/acl.html>

# See also

-   [Wikipedia](/wiki/Wikipedia) article on [ACLs](/wiki/ACLs): <http://en.wikipedia.org/wiki/Access_control_list>
