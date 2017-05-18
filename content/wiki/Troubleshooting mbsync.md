---
tags: mbsync wiki
---

# Example

I had a sync run failing with the following (debug) output:

```
propagating new messages
>>> 4133 APPEND "[Gmail]/All Mail" {153284}
+ go ahead
* BYE Invalid character in literal
IMAP error: unexpected BYE response: Invalid character in literal
```

To make debugging easy, set:

    PipelineDepth 1

Run with full debug flags (may produce a *lots* of output):

    mbsync -V -DCmMNs $ACCOUNT_NAME

There only clue as to which message was at fault was the size (153284), so I searched with:

    find . -size +145k -and -size -155k

And printed file information with:

    find . -size +145k -and -size -155k -exec file {} \;

Sanity checked the sizes with:

    find . -size +145k -and -size -155k -exec ls -lS {} \;

But there was no exact size match.

Checked available encodings with:

    iconv -l

And then confirmed that all the files that were supposedly ASCII-encoded really were:

    find . -size +145k -and -size -155k \
      -exec iconv -f ASCII -t UTF-8 {} \; > /dev/null

Eventually broadened the search and found 3 files of encoding "data". Visually inspected each and determined that they were disposable, so deleted locally and from server too, then the sync worked.

## See also

- [Corresponding mailing list thread](https://sourceforge.net/p/isync/mailman/message/35628449/) on [isync-devel](https://lists.sourceforge.net/lists/listinfo/isync-devel).
