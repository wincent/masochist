---
title: On the hideousness of AppleScript
tags: applescript blog
cache_breaker: 1
---

In my various interactions with AppleScript over the last decade, I haven't ever had a single interaction with it in which I thought "gee, that was neat!". On the contrary, every time I reluctantly accept using it — invariably because there is no other choice — I find myself grimacing at just how clumsy, painful and awkward it is to use. It is frankly hideous.

Case in point: I was yesterday [complaining](/twitter/337) about how MailTemplate doesn't work on [Snow Leopard](/wiki/Snow_Leopard), so today decided to whip up a quick AppleScript to fill in the missing functionality.

# Substring extraction

Once again I was reminded how AppleScript doesn't even have the most basic functionality for doing things like extracting substrings from within a string. Forget about regular expressions; the only built-in way to search for content within a string is using the `offset` keyword, and the only way to extract substrings is by using the painful `thru` syntax.

As an example, given the body of a mail message I wanted to find a dollar amount that appears on a line like this:

> Total Amount Paid: AUD 15

While other scripting languages would permit this in a one-line regular expression, in AppleScript you have to jump through these utterly horrible hoops:

```applescript
set amountPaid to ""
set searchString to "Total Amount Paid: "
set lineStart to offset of searchString in msgContent
if lineStart is not equal to 0 then
  set lineContent to text (lineStart + (count of characters in searchString)) ¬
    thru ((count of characters in msgContent) - 1) ¬
    of msgContent
  set lineEnd to offset of ASCII character 10 in lineContent
  if lineEnd is not equal to 0 then
    set amountPaid to text 1 thru (lineEnd - 1) of lineContent
  end if
end if
```

Note how we are forced to use a painful four step process:

1.  Find starting offset of marker string
2.  Extract substring from end of marker string through to end of original string
3.  Search within the extracted string for the offset of a newline
4.  Extract substring from new string

Note also how in order to search for a newline we have to express it as `ASCII character 10` unless we want to have a literal newline in our search string; if you try searching for `"\n"` the AppleScript editor with "helpfully" reformat it as a literal newline:

```applescript
set lineEnd to offset of "
" in lineContent
```

# String interpolation

All actually-used scripting languages ([Ruby](/wiki/Ruby), [Perl](/wiki/Perl), [Python](/wiki/Python), [PHP](/wiki/PHP), [Bash](/wiki/Bash) etc) feature string interpolation... except for AppleScript, of course. Instead, it offers string concatenation, and like all things in AppleScript, it does it the wrong way (in this case by using the `&` operator, which is never used for string concatenation by any sensible language). Combine this with the appalling verbosity of AppleScript code, look at how ugly the code is for embedding a date and time into a string (the explicit date formatting is required here because I want to force International date formatting rather than the default Spanish formatting that would otherwise appear on my system):

```applescript
"TITLE HERE
			
Date: " & (day of (current date)) & "/" & (month of (current date) as integer) & "/" & (year of (current date)) & "
Time: " & (time string of (current date)) & "
			
Rest of content here..."
```

# Conclusion

I could go on and on about the horrible warts that pepper the face of AppleScript, but it doesn't seem a very worthwhile investment of my time. I can't help but wondering though, if the people responsible for the design and the implementation of language are as ashamed of it as I hope they are.
