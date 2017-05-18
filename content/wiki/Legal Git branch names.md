---
tags: git wiki
cache_breaker: 1
---

# Overview

A [Git](/wiki/Git) branch name can not:

-   Have a path component that begins with "."
-   Have a double dot ".."
-   Have an ASCII control character, "\~", "\^", ":" or SP, anywhere
-   End with a "/"
-   End with ".lock"
-   Contain a "\\" (backslash)

Source: <http://www.spinics.net/lists/git/msg133704.html>

# Source code

The definitive reference for what is a legal ref name (ie. applies to both tags and branches) is the implementation of the `check_ref_format()` function in `refs.c`, along with `bad_ref_char()` in the same file. At the current time of writing (19 September 2010) they read as follows:

```c
static inline int bad_ref_char(int ch)
{
        if (((unsigned) ch) <= ' ' ||
            ch == '~' || ch == '^' || ch == ':' || ch == '\\')
                return 1;
        /* 2.13 Pattern Matching Notation */
        if (ch == '?' || ch == '[') /* Unsupported */
                return 1;
        if (ch == '*') /* Supported at the end */
                return 2;
        return 0;
}

int check_ref_format(const char *ref)
{
        int ch, level, bad_type, last;
        int ret = CHECK_REF_FORMAT_OK;
        const char *cp = ref;

        level = 0;
        while (1) {
                while ((ch = *cp++) == '/')
                        ; /* tolerate duplicated slashes */
                if (!ch)
                        /* should not end with slashes */
                        return CHECK_REF_FORMAT_ERROR;

                /* we are at the beginning of the path component */
                if (ch == '.')
                        return CHECK_REF_FORMAT_ERROR;
                bad_type = bad_ref_char(ch);
                if (bad_type) {
                        if (bad_type == 2 && (!*cp || *cp == '/') &&
                            ret == CHECK_REF_FORMAT_OK)
                                ret = CHECK_REF_FORMAT_WILDCARD;
                        else
                                return CHECK_REF_FORMAT_ERROR;
                }

                last = ch;
                /* scan the rest of the path component */
                while ((ch = *cp++) != 0) {
                        bad_type = bad_ref_char(ch);
                        if (bad_type)
                                return CHECK_REF_FORMAT_ERROR;
                        if (ch == '/')
                                break;
                        if (last == '.' && ch == '.')
                                return CHECK_REF_FORMAT_ERROR;
                        if (last == '@' && ch == '{')
                                return CHECK_REF_FORMAT_ERROR;
                        last = ch;
                }
                level++;
                if (!ch) {
                        if (ref <= cp - 2 && cp[-2] == '.')
                                return CHECK_REF_FORMAT_ERROR;
                        if (level < 2)
                                return CHECK_REF_FORMAT_ONELEVEL;
                        if (has_extension(ref, ".lock"))
                                return CHECK_REF_FORMAT_ERROR;
                        return ret;
                }
        }
}
```

So in addition to the summary posted above, we can also add that:

-   the sequence `@{` is not allowed
-   `?` and `[` are not allowed
-   `*` is allowed only if it constitutes an entire path component (eg. `foo/*` or `bar/*/baz`), in which case it is interpreted as a wildcard and not as part of the actual ref name
