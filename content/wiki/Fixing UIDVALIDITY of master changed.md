---
tags: mbsync mutt exchange wiki
---

I was getting errors like this when trying to sync to an Exchange server (ugh):

```
C: 2/5  B: 2/4  M: +0/0 *0/0 #0/0  S: +64/64 *1/1 #0/0
Error: UIDVALIDITY of master changed (got 148, expected 92)
C: 4/5  B: 4/6  M: +0/0 *0/0 #0/0  S: +65/65 *1/1 #0/0
Error: UIDVALIDITY of master changed (got 117, expected 82)
C: 4/5  B: 5/6  M: +0/0 *0/0 #0/0  S: +65/65 *1/1 #0/0
Error: UIDVALIDITY of master changed (got 144, expected 89)
C: 5/5  B: 6/6  M: +0/0 *0/0 #0/0  S: +65/65 *1/1 #0/0
```

According to [this mailing list thread](https://www.mail-archive.com/isync-devel@lists.sourceforge.net/msg00783.html):

> yes, you can simply change it ... in principle (and it worked just fine for me, multipe times).
>
> make sure that the message UIDs still match despite the changed UIDVALIDITY - if they don't, you lose all messages. use some online-imap client which can display UIDs (i think i used thunderbird, because i had it set up anyway; i suspect mutt can do that as well) to take some random samples (if the UIDs changed, all of them
would).
>
> the lower-risk approach is deleting the state files, so mbsync propagates the messages both ways again. then use D~= in mutt to throw out the dupes.

Hm. "you lose all messages". Scary stuff. Nevertheless, I figured I'd give it a try:

```
$ cd ~/.mail
$ grep -R MasterUidValidity *
Work/.mbsyncstate:MasterUidValidity 14
Work.Archive/.mbsyncstate:MasterUidValidity 82
Work.Drafts/.mbsyncstate:MasterUidValidity 89
Work.Sent/.mbsyncstate:MasterUidValidity 11
Work.Spam/.mbsyncstate:MasterUidValidity 92
Work.Trash/.mbsyncstate:MasterUidValidity 12
```

So, I went in, changed the numbers, ran the sync again, and everything seemed to work fine.
