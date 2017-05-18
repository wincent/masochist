---
tags: haml wiki
---

# `%` (elements)

    %p thing

Yields:

    <p>thing</p>

# `{}` (attributes)

    %meta{'http-equiv' => 'Content-Type', :content => 'text/html; charset=utf-8'}/

Yields:

    <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />

Note that this example also shows how to produce a self-closing tag; more on this below.

# `/` (comments and self-closing tags)

    %br/
    / a comment

Yields:

    <br />
    <!-- a comment -->

# `.` (class)

    %p.date foo
    %p.article.body baz

Yields:

    <p class="date">foo</p>
    <p class="article body">baz</p>

# `#` (id)

    %p#banner bing

Yields:

    <p id="banner">bing</p>

# Implicit divs

If no element is specified with a class (`.`) or id (`#`) then `div` is implicitly assumed:

    #foo bar
    .baz bing

Yields:

    <div id="foo">bar</div>
    <div class="baz">bing>/div>

# `[]` ("SimplyHelpful" syntax)

    %div[@model_object] foo

Yields:

    <div class="class_of_model" id="class_of_model_id">foo</div>

# See also

-   Official [Haml](/wiki/Haml) documentation: <http://haml.hamptoncatlin.com/docs/haml>
