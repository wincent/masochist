---
tags: rails wiki
cache_breaker: 1
---

As of the time of writing, the default Rack middleware stack for [Rails](/wiki/Rails) ([Rails 3](/wiki/Rails_3) to be precise) looks like this (generated using `rake middleware`):

    use ActionDispatch::Static
    use Rack::Lock
    use ActiveSupport::Cache::Strategy::LocalCache
    use Rack::Runtime
    use Rails::Rack::Logger
    use ActionDispatch::ShowExceptions
    use ActionDispatch::RemoteIp
    use Rack::Sendfile
    use ActionDispatch::Callbacks
    use ActiveRecord::ConnectionAdapters::ConnectionManagement
    use ActiveRecord::QueryCache
    use ActionDispatch::Cookies
    use ActionDispatch::Session::CookieStore
    use ActionDispatch::Flash
    use ActionDispatch::ParamsParser
    use Rack::MethodOverride
    use ActionDispatch::Head
    use ActionDispatch::BestStandardsSupport
    run *::Application.routes

Additional middleware can be inserted with directives like `insert_after`:

```ruby
Rails.application.config.middleware.insert_after \
  ActionDispatch::Flash, CacheFriendlyFlash
```

# Order of execution

Note that directives like `insert_after` insert middleware "after" the preceding items in the list.

This "before" and "after" language is actually a little misleading however, as the stack is traversed in two directions:

-   each layer in the stack calls the next layer (ie. set-up performed in "earlier" layers can be passed through to "later" layers)
-   as layers finish processing, their responses are made visible to the layers which called them (ie. modifications performed by "later" layers are passed back to "earlier" layers)

This can be quite confusing, and it may appear at times that *the effective execution order is reversed*, depending on how you look at it. This is because each piece of middleware is being called by the item before it in the stack, and ends up doing a `call` on the next item in the stack. So while "earlier" items in the stack *start* before "later" items, "later" items *finish* before "earlier" ones.

As an example, the `ÀctionDispatch::Cookies` middleware:

-   appears *before* the `ActionDispatch::Session::CookieStore` middleware in the list
-   *begins* executing *before* the `CookieStore` middleware
-   *but* effectively does nothing important before calling the `CookieStore` middleware

The `CookieStore` middleware, on the other hand:

-   is called *after* the `Cookies`middleware
-   but *finishes* execution *before* the `Cookies` middleware
-   then returns control to the `Cookies` middleware

Note that any changes made to the environment by the `CookieStore` middleware will be "visible" to the `Cookies` middleware.

So taking a look at this part of the middleware stack:

-   `ActionDispatch::Cookies`
-   `ActionDispatch::Session::CookieStore`
-   `ActionDispatch::Flash`

At least on one level, the order in which things actually happen is reversed, seeing as the changes made at the "later" levels are visible to the "earlier" ones:

-   first, the `Flash` middleware stores the flash messages in the session
-   second, the `CookieStore` middleware stores the session data in a cookie
-   third, the `Cookies` middleware translates the cookie into the appropriate HTTP headers
