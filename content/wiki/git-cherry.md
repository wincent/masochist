---
tags: git wiki
---

You can use `git cherry` to see which commits on a topic branch have been merged into its upstream branch.

For example:

```shell
$ git cherry -v master rails3
+ d79d68dc1c48c7b75abed19d1f322aa90bb084e4 Update to Rails 3.0.8.rc1
+ 29518629e13e340a225fc9403f48cb69e2f3f7f3 Update to Rails 3.0.8.rc2
- a9ba88195322e60d20b001abf0a5bc1eaac1a002 Fix commit timestamp offsets
+ dea0ffbf2a40f48360d566cbb1a4975d412fca18 Update to Rails 3.0.8.rc4
+ 7d952440c52b48db0532a57fc481d65cfdd75eed Update to Rails 3.0.9.rc1
- a7938f9da538c31efd251dfbad035530f04a7e47 Rails 3.1.0.rc3: can no longer mutate an ActiveSupport::SafeBuffer
- d67ea068392d580887faefa0ec24f3a28521cbc3 Fix whitespace bug in field_error_proc
+ e2e4a10748ccf6cf3db3d642281438ecc0bd8fd2 Rails 3.0.9.rc1: fix some SafeBuffer-related breakage
+ a4cb4e0170329cf658de990f6d08c854aacd0103 Update to Rails 3.0.9.rc3
```

Notes:

-   without the `-v` (verbose) option, the output it not so useful to the human reader, as you only see the hashes, not the commit subject lines
-   the list comprises all commits which exist on the topic (`rails3`) and do not exist on the upstream (`master`)
-   commits whose equivalent change exists upstream are prefixed with a `-` (each change-set or diff has a patch ID; if a commit with the same patch ID exists upstream but has a different SHA-1 hash, it will be labelled like this)
-   commits with no equivalent upstream are prefixed with a `+`
