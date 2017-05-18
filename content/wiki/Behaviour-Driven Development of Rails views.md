---
tags: rspec rails wiki
cache_breaker: 1
---

**Note:** This article was originally written in early 2007; for a more up-to-date overview of Rails view testing, see [Rails view testing cheatsheet](/wiki/Rails_view_testing_cheatsheet).

# Introduction

Like [models](/wiki/models), [views](/wiki/views) are fairly easy to test independently. Despite the fact that they depend on their [controllers](/wiki/controllers) to feed them data, well-designed [views](/wiki/views) contain very little code and merely reference [model](/wiki/model) attributes in simple ways. At most, the most complicated logic in a [view](/wiki/view) should be limited to iterating over a collection, or conditionally including content.

# How much testing is appropriate?

Take the following piece of [HTML](/wiki/HTML) as an example:

    <div id="userlist">
      <div class="odd">
        <div class="label">Login name:</div>
        <div class="info">user1</div>
        <div class="label">Display name:</div>
        <div class="info">user1</div>
        <div class="label">Email address:</div>
        <div class="info">user1@example.com</div>
      </div>
      <div class="even">
        <div class="label">Login name:</div>
        <div class="info">user2</div>
        <div class="label">Display name:</div>
        <div class="info">user2</div>
        <div class="label">Email address:</div>
        <div class="info">user2@example.com</div>
      </div>
    </div>

The high-level specifications that led to this [HTML](/wiki/HTML) are:

-   Users should be displayed in a list
-   The list should have alternating "odd" and "even" rows
-   Each row should show the login name, display name and email address for the user
-   The login name, display name and email address should each have corresponding labels
-   Each element should have an appropriate class or ID so that the output can be styled using [CSS](/wiki/CSS)

The [Rails](/wiki/Rails) view that generates this view is:

    <% for user in @users %>
      <div id="userlist">
        <div class="<%= cycle('odd', 'even') %>">
          <div class="label">Login name:</div>
          <div class="info"><%=h user.login_name %></div>
          <div class="label">Display name:</div>
          <div class="info"><%=h user.display_name %></div>
          <div class="label">Email address:</div>
          <div class="info"><%=h user.email_address %></div>
        </div>
      </div>
    <% end %>

The question is, how many [specs](/wiki/specs) should we employ while going from our high-level goals to the final implementation? If we take a pure [Behaviour-Driven](/wiki/Behaviour-Driven) approach then we won't add anything to the [view](/wiki/view) at all without first writing a failing [spec](/wiki/spec) that requires that something be added to the view in order to pass.

For example, we might start with a spec that states:

-   A user list with 2 users
    -   Should display an odd and even row

And begin with this view code:

    <% for user in @users %>
      <div class="<%= cycle('odd', 'even') %>"></div>
    <% end %>

And then successively add [specs](/wiki/specs) and additions to the [view](/wiki/view) until we have the final result. A final spec might look like this:

      it 'should display the login name, displays name and email address in each row' do
        response.should have_tag('div.odd>div', 6) do
          with_tag('div.label', 'Login name:')
          with_tag('div.info', 'user1')
          with_tag('div.label', 'Display name:')
          with_tag('div.info', 'user1')
          with_tag('div.label', 'Email address:')
          with_tag('div.info', 'user1@example.com')
        end
        response.should have_tag('div.even>div', 6) do
          with_tag('div.label', 'Login name:')
          with_tag('div.info', 'user2')
          with_tag('div.label', 'Display name:')
          with_tag('div.info', 'user2')
          with_tag('div.label', 'Email address:')
          with_tag('div.info', 'user2@example.com')
        end
      end

The problem with this approach is that we now have a [spec](/wiki/spec) which is extremely tightly bound to our [view](/wiki/view) implementation, so tightly bound that changing the [view](/wiki/view) in any way will almost certainly break the [spec](/wiki/spec). This is good in the sense that mistakes introduced in the [view](/wiki/view) will not likely escape our attention, but bad in the sense that it impedes change (and possible improvement) in the view.

It is also very duplicative: the [view](/wiki/view) is the embodiment of the specification, written in [ERB](/wiki/ERB), and the [spec](/wiki/spec) is effectively identical but written in another language. If we are going to perform this level of pedantic, duplicative specification then we may as well just compare the output to a pre-computed string representation and require them to match.

It is my opinion that pure [BDD](/wiki/BDD) shouldn't apply to [views](/wiki/views); or to put it another way, adding text to a view shouldn't necessarily require you to first write a failing [spec](/wiki/spec) that requires it. That kind of rigorous, line-by-line [BDD](/wiki/BDD) is for code, in my opinion. Views are not code, or at least, if they are well written they shouldn't be code (for example, see [Terence Parr](/wiki/Terence_Parr)'s article, "[Enforcing Strict Model-View Separation in Template Engines](http://www.cs.usfca.edu/~parrt/papers/mvc.templates.pdf)").

My rule of thumb is that you should write [specs](/wiki/specs) for everything in your view that involves code. The specs are there to help you catch errors in your code. So, in the example above, the items in the view that should be checked include:

-   That the list of users is produced (that the `for` construct works)
-   That the table rows alternate (that the `cycle` method has been correctly applied)
-   That the `user` attributes are shown

It would also be possible to check things such as:

-   That all the elements appear in the expected order
-   That each element has the appropriate identification for \[\[CSS\]

But I think that going that far is not a wise investment of programmer time; such visual aspects are easily checked by inspection and automating their verification comes at a high cost because it makes future change more difficult.

# See also

-   [Behaviour-Driven Development with Rails](/wiki/Behaviour-Driven_Development_with_Rails)
-   [Independently testing models, views and controllers](/wiki/Independently_testing_models%2c_views_and_controllers)
