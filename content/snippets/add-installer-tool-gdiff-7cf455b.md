---
title: Add installer tool (gdiff, 7cf455b)
---

Due to shortcomings in Apple's AuthorizationExecuteWithPrivileges API (namely, the fact that it doesn't return the exit code or the process id of the executed process) it is necessary to interpose an intermediary wrapper process that explicitly communicates its process id back to the parent process prior to executing the real installer.

Hideously cumbersome approach but it's the way the Apple sample code does it.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
