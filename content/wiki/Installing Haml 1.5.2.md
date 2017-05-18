---
tags: haml wiki
---

These notes were made while installing [Haml](/wiki/Haml) for the first time.

# Installing

The [official Haml download page](http://haml.hamptoncatlin.com/download/) states that [Haml](/wiki/Haml) can be installed from the top-level of an existing [Rails](/wiki/Rails) application by executing this command:

    script/plugin install http://svn.hamptoncatlin.com/haml/tags/stable

This command, however, results in the plug-in being installed in a folder called `stable` when it really should be called `haml`. So I instead installed as follows:

    svn export http://svn.hamptoncatlin.com/haml/tags/stable vendor/plugins/haml

My bug report for this posted to the [Haml Google group](http://groups.google.com/group/haml) can be found [here](http://groups.google.com/group/haml/t/9852907f142ebd8d). [This page](http://unspace.ca/discover/haml/) suggests that an alternative which might work would be:

    # use undocumented optional target name parameter
    script/plugin install http://svn.hamptoncatlin.com/haml/tags/stable haml

Out of curiosity I tried that out and as of [Rails](/wiki/Rails) 1.2.3 it no longer works:

    Plugin not found: ["http://svn.hamptoncatlin.com/haml/tags/stable", "haml"]

# First template conversion

I started off by taking a simple [view](/wiki/view) template, `index.rhtml`:

    <% for user in @users %>
    <div id="userlist">
      <div class="<%= cycle('odd', 'even') %>">
        <div class="label"><%= _('Login name:') %></div>
        <div class="info"><%=h user.login_name %></div>
        <div class="label"><%= _('Display name:') %></div>
        <div class="info"><%=h user.display_name %></div>
        <div class="label"><%= _('Email address:') %></div>
        <div class="info"><%=h user.email_address %></div>
      </div>
    </div>
    <% end %>

And converting it to [Haml](/wiki/Haml):

    - for user in @users
      [/tags/userlist #userlist]
        %div{:class => cycle('odd', 'even')}
          .label= _('Login name:')
          .info= h user.login_name
          .label= _('Display name:')
          .info= h user.display_name
          .label= _('Email address:')
          .info= h user.email_address

The [Haml](/wiki/Haml) version is 3 lines shorter, and its character count is 269 (compared with 439 for the original version).

It is easy to migrate to [Haml](/wiki/Haml) because [Haml](/wiki/Haml) templates coexist with [RHTML](/wiki/RHTML) templates. In the current example the `index.haml` file will be used, if present, otherwise [Rails](/wiki/Rails) will fall back to `index.rhtml`. If the changes don't work out, you can easily switch back to [RHTML](/wiki/RHTML).

Because I'm doing [Behaviour-Driven Development](/wiki/Behaviour-Driven_Development) using [RSpec](/wiki/RSpec) I was able to immediately confirm that the output continues to pass all [specs](/wiki/specs); this is again confirmed by visual inspection of the output:

    <div id='userlist'>
      <div class='odd'>
        <div class='label'>Login name:</div>
        <div class='info'>example login name 1</div>
        <div class='label'>Display name:</div>
        <div class='info'>example display name 1</div>
        <div class='label'>Email address:</div>
        <div class='info'>example email address 1</div>
      </div>
    </div>
    <div id='userlist'>
      <div class='even'>
        <div class='label'>Login name:</div>
        <div class='info'>example login name 2</div>
        <div class='label'>Display name:</div>
        <div class='info'>example display name 2</div>
        <div class='label'>Email address:</div>
        <div class='info'>example email address 2</div>
      </div>
    </div>

# See also

-   [Installing the Haml TextMate bundle](/wiki/Installing_the_Haml_TextMate_bundle)
