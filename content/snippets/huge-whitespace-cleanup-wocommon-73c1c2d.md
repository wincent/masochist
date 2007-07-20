---
title: Huge whitespace cleanup (WOCommon, 73c1c2d)
---

This is a massive whitespace cleanup of the entire tree (more than 25,000 lines in the diff) consisting of: converting of mixed tabs/spaces to all spaces where appropriate (in source files, for example); the reverse case, converting spaces to tabs where appropriate (in property list files); removal of trailing whitespace on the end of lines; removal of invisible (non-printable) characters that had snuck into comments; conversion of Windows line-endings on some RSpec-generated files to UNIX line-endings.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
