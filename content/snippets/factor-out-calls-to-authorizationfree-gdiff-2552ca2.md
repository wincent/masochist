---
title: Factor out calls to AuthorizationFree (gdiff, 2552ca2)
tags: snippets
---

This commit creates a new method that handles the call to AuthorizationFree and prints a diagnostic message as appropriate. This cleans up some repetition in the code (AuthorizationFree was previously called in three places) and enables for cleaner program flow around the call to AuthorizationExecuteWithPrivileges; specifically, we now handle one error as a special case (failure to execute the tool), then all other errors (general authorization failures) and finally the success case.

This commit also fixes a bug wherein the failure cases did not result in the early termination of the method.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
