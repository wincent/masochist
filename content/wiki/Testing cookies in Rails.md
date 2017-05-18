---
tags: rails wiki
---

# Resources

My initial attempts at testing cookies while doing [Behaviour-Driven Development with Rails](/wiki/Behaviour-Driven_Development_with_Rails) were not successful so I started to look for resources to investigate the problem:

-   Recipe 7.14 of the [Rails Cookbook](/wiki/Rails_Cookbook), "Examining the Contents of a Cookie", goes into great details about how to test cookies in controller tests.
    -   I was lead to the [Rails Cookbook](/wiki/Rails_Cookbook) by this post, "Assert Cookie", (<http://blog.testingrails.com/2006/8/28/testing-tidbits-what-s-interesting-lately-in-testing-ruby-on-rails>)
-   This article, "Rails Cookies Mangles the Hash Interface" (<http://www.40withegg.com/2007/1/5/rails-cookies-mangles-the-hash-interface/>) -- also noted in [Rails "gotchas"](/wiki/Rails_%22gotchas%22) -- explains why you can't easily test the values set in `cookies`.
    -   The [Rails](/wiki/Rails) [API](/wiki/API) [documentation itself](http://api.rubyonrails.org/classes/ActionController/Cookies.html) actually recognizes this, but it's easy to overlook:

> The cookies being read are what were received along with the request, the cookies being written are what will be sent out with the response.

-   <http://blog.codefront.net/2006/09/03/some-functional-testing-gotchas-in-ruby-on-rails/>
    -   Which in turn lead me to: <http://www.pluitsolutions.com/2006/08/02/rails-functional-test-with-cookie/>

> Use a string for \[the\] cookie name, symbol \[sic\] somehow returns nil in functional test.

-   <http://www.robbyonrails.com/articles/2006/08/28/testing-cookies-in-ruby-on-rails>
    -   <http://blog.brightredglow.com/articles/2006/08/27/assert_cookie-for-ooey-gooey-fun>

# Summary

Adapting the available information for use with [RSpec](/wiki/RSpec), we have:

## Setting up a request cookie before a spec

    before do
      request.cookies['foo'] = CGI::Cookie.new('name' => 'foo', 'value' => '12')
      
      # shorter alternative
      request.cookies['foo'] = CGI::Cookie.new('foo', '12')
    end

Note that:

-   You *must* use `request.cookies`, not `cookies`
-   You *must* use a `String` key, not a `Symbol`
-   You *must* set a `CGI::Cookie` value, not just a `String`

If you get any of those things wrong then your controller won't be able to get the cookies that you've set in your [specs](/wiki/specs).

To confirm that you really did set the cookie you can check it; unlike the normal `cookie`, `request.cookies` does allow key look-ups:

    request.cookies['foo'].should == '12'

## Firing a controller method

You may then fire off a controller method:

    # example: getting the "show" action
    get 'show'

Directly calling a method using `send`, for example, will not work because the cookies will not be set up for the controller.

## In the controller

Inside the controller itself you can read and write cookies as normal. Note the use of `Symbol` keys:

    # reading
    cookies[:foo]

    # writing
    cookies[:foo] = 'hello world'

    # deleting (clears cookie from user's browser as well
    cookies.delete :foo

## Checking a response cookie is set in a spec

After firing off the controller you can confirm that it set or unset any cookies before sending the result back to the user:

    cookies['user_id'].should be_blank

Note that:

-   This time we use `cookies` and not `request.cookies`
-   Again it is compulsory to use a `String` as a key, not a `Symbol`
-   Use the `blank?` method because it [handles more cases](http://dev.rubyonrails.org/browser/trunk/activesupport/lib/active_support/core_ext/blank.rb) than `empty?`
