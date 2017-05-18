---
tags: css wiki
cache_breaker: 1
---

# Type selectors

Style all `p` elements:

    p { ... }

# Class selectors

Style all elements of class foo:

    .foo { ... }

Note that an element may contain multiple space-separated classes; for example, you could apply classes `foo` and `bar` to a `p` element with:

    <p class="foo bar">baz</p>

# Combined type/class selectors

Style all `li` elements of class `foo`:

    li.foo { ... }

# ID selectors

Style the element with ID `foo` (must be only one such element on the page):

    #foo { ... }

# Combined class/ID selectors

Style the `div` element with ID `foo` (must be only one such element on the page):

    div#foo { ... }

# Descendant selectors

Style all `em` elements that are descendants (direct or indirect) of a `p` element:

    p em { ... }

# Child selectors

Style all `em` elements that are immediate children of a `p` element:

    p > em { ... }

# Universal selectors

Style all elements on the page:

    * { ... }

# Adjacent sibling selectors

Style any `h3` element that immediately follows an `h2` element:

    h2 + h3 { ... }

# Attribute selectors

Style any `img` element that has an `alt` attribute:

    img[alt] { ... }

Style any `img` element whose `alt` attribute has the exact value `foo`:

    img[alt="foo"] { ... }

Style any `img` element whose `alt` attribute *contains* the space-delimited word `foo`:

    img[alt~="foo"] { ... }

Style any `img` element whose `alt` attribute *contains* the hyphen-delimited word `foo` (in other words, the attribute must contain the substring, `foo-`):

    img[alt|="foo"] { ... }

Other selectors:

-   `a[href^="http:"]`: attribute *starts with* "http:"
-   `a[href$=".png"]`: attribute *ends with* ".png"
-   `a[href*="foo"]`: attribute *contains* "foo"

Note that selectors can be combined; eg:

-   `a[href^="http:"][href$=".png"]`: attribute *starts with* "http:" and *ends with* ".png"

See also:

-   <http://reference.sitepoint.com/css/css3attributeselectors>

# Pseudo-class selectors

    a { ... }
    a:link { ... }
    a:visited { ... }
    a:hover { ... }
    a:active { ... }

The order is important, because if multiple possible matches are found the last-specified selector will be applied in the event of a conflict. So, for example, if combining the style declarations in pairs the ordering (`link`/`visited` followed by `hover`/`active`) should be maintained:

    a:link, a:visited { ... }
    a:hover, a:active { ... }

Other pseudo-class selectors:

-   `:first-child`
-   `:focus`
-   `:lang(n)`

# Pseudo-element selectors

Style the first line of the `p` element:

    p:first-line { ... }

Style the first letter of the `p` element:

    p:first-letter

Other pseudo-element selectors:

-   `:before`
-   `:after`

# See also

-   The best [CSS](/wiki/CSS) selector tutorial on the web: <http://css.maxdesign.com.au/selectutorial/index.htm>
