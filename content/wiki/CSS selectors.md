---
tags: wiki
---

This is not an exhaustive list of [CSS selectors](/wiki/CSS_selectors) but it shows the basic patterns that are useful:

# ID selectors

`#foo`: selects the element whose `id` is `foo`.

Example:

    <div id="foo">hello world</div>

# Class selectors

`.bar`: matches all elements whose `class` is `bar`.

`h2.baz`: matches all `h2` elements whose `class` is `baz`.

Examples:

    <p class="bar">hello world</p>

    <h2 class="baz">hello world</h2>

# Universal selectors

`*`: selects all elements on the page.

# Adjacent selectors

`h2 + h3`: selects any `h3` element which follows an `h2`

# Child selectors

`div.foo>div.bar`: selects any `div` element of class `bar` that is an immediate child of a `div` element of class `foo`

# Descendant selectors

`div table`: selects any `table` element that is a descendant of a `div` element; note that unlike the case of child selectors it need not be an immediate child.
