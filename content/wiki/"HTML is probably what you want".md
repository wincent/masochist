---
tags: wiki
---

# Notes from this excellent post over at the WebKit log

<http://webkit.org/blog/?p=68>

-   "**The one and only thing** that controls whether a document is HTML or XHTML is the MIME type \[emphasis mine\]"
-   "If the document is served with a text/html MIME type, it is treated as HTML"
-   "If it is served as application/xhtml+xml or text/xml, it gets treated as XHTML"

In other words, things like "Using an XHTML doctype declaration", "Putting an XML declaration at the top", "Using XHTML-specific syntax like self-closing tags", and "Validating it as XHTML" **are not** sufficient to make a user agent treat a document as [XHTML](/wiki/XHTML).

-   "\[T\]he vast majority of supposedly XHTML documents on the internet are served as text/html. Which means they are not XHTML at all, but actually invalid HTML that’s getting by on the error handling of HTML parsers."

## Options

-   "Serve your content as application/xhtml+xml ... Microsoft Internet Explorer will not handle XHTML at all, and serving it such a MIME type will lead it to download."
-   "Serve as text/html to IE, but as application/xhtml+xml to other browsers ... Your documents will be processed in entirely different ways in IE vs other browsers. A construct that may be perfectly valid HTML could totally break XML parsing, due to the strict error handling rules."
-   "Stick with the status quo ... You may have heard a lot of hype about \[XHTML\], experts may have told you it's the next big thing, but what kind of benefits do you get if in the end it's just treated as HTML tag soup?"
-   "Serve valid HTML ... serve valid HTML documents with a text/html MIME type. This way you'll be using the best-tested mode of web browsers, won't have to worry as much about weird compatibility issues, and will get the most benefit out of HTML-based toolchains."

In short, "HTML is probably what you want".

## Best practices

-   "Use an HTML4 doctype declaration, ideally one that will trigger 'standards mode' in web browsers."
-   "Serve your content with the text/html MIME type"
-   "[Validate](http://validator.w3.org/) your content as HTML, not as XHTML"
