---
title: Tighten up exit status check in post-receive script (snippets, 2be9c00)
---

The post-receive script currently does a somewhat loose exitstatus check ($? == 0) which happens to work because the Process::Status class evidently overrides the == operator (or implements to\_int; I haven't actually looked at the source code to know why this works); rather than relying on this behaviour this commit explicitly compares the exit status ($?.exitstatus == 0) to guard against possible changes to the Ruby API in the future.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
