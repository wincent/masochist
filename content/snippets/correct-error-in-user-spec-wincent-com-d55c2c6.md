---
title: Correct error in User spec (typechecked.net, d55c2c6)
tags: snippets
---

Should have been using delete_all, not delete(:all); the delete method expects as a parameter the id of the row to be deleted.

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;
