---
title: Skip preambles before starting diff matching (gdiff, 6c21acf)
tags: snippets
---

In setting up the test sample files I inadvertently included a sample file generated using "git-show COMMIT\_ID", thus producing a commit description including the commit message and other preamble prior to the diff (in contrast to the "naked" output that you would get from "git-diff").

This commit modifies the state machine to skip over any such preamble prior to attempting to recognize the "meat" of the diff. This means that gdiff will be able to operate not only on the bare diff output of "git-diff" but also on that of "git-show" and potentially other sources as well (patch emails are a possibility, for example, although they may require some pre-processing if they are encoded using a transport encoding).

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
