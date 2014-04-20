---
tags: rails javascript browserify
---

I've been using [Browserify](/wiki/Browserify) in a [Rails](/wiki/Rails) side project of mine and am really enjoying the benefits. Specifically, I've converted my JS to modules and am bundling it using Browserify. The Rails JavaScript manifest becomes a one-liner which just references the Browserify bundle. I'm still letting the Rails pipeline handle minification, via the excellent Google Closure compiler.

Here are some advantages of this approach:

# Impose internal structure on JavaScript

If you put a lot of JS into the Rails asset pipeline, you have to carefully manage the dependencies yourself and the only tool you have at your disposal for this is to control the order of items in your manifests. When you add items to a manifest you have to be sure that you do so in a way that doesn't violate the dependencies. If you move items around, you have to be sure to keep the dependencies intact.

Because Browserify works with modules, it replaces that implicit dependency hierarchy with an explicit one, using an easy-to-use "DSL", and it takes care of all the heavy lifting of actually resolving those dependencies behind the scenes.

In short, it will enable you to produce a more robust product, structure your JS codebase in a more maintainable way, and all at a lower cost.

# Use familiar CommonJS module style

There are multiple ways of writing modular JS. The main ones of interest right now are CommonJS (used widely on the server side and with node.js), AMD (popular thanks to client-side libraries like require.js) and the upcoming ES6 modules standard. There is also UMD, which is intended to help people produce "write once, run anywhere" modules that will work with any of the packaging systems. (For more detail, [this article](https://spring.io/understanding/javascript-modules) provides a nice overview of the different systems.)

I like CommonJS because of its simplicity and ease of use. Browserify makes it easy for me to use it on the client side, which brings me one step closer to the "holy grail" of using exactly the same code to do rendering on the server and on the client. Additionally, I feel that the gap between CommonJS and the eventual ES6 modules standard is smaller, so it will require (no pun intended) only a small shift once the standard eventually becomes final.

\[On the subject of that "holy grail", the route I'm taking towards it is to gradually move more and more of the rendering into a separate node.js service, reducing the Rails app to an ORM and some business logic. Eventually almost everything will be in [React](/wiki/React), rendered server-side and made to "come to life" on the client side with a re-render by React. For the really critical bits that must work without JS, I'll put in the extra effort to make them progressively enhance in some sense (for example, forms should remain forms with POST actions that work if JS is turned off).\]

# Reduce dependency on Rails asset pipeline

Because we're doing the work of concatenating in Browserify, the Rails asset pipeline just has to hand off a single file to the Google Closure compiler for minification. This is a pretty simple task, and is less likely to have bugs, run into compatibility problems when the development and deployment platforms are different (ie. [OS X](/wiki/OS_X) vs [CentOS](/wiki/CentOS)), or lead to upgrade hassles. This is because of its very small footprint in the Gemfile. Specifically, we only need [the closure-compiler gem](http://rubygems.org/gems/closure-compiler), but not the execjs or therubyracer gems or any of their dependencies; therubyracer, in particular, depends on libv8, which can cause pain when caching gems into `vendor/cache` (to reduce the dependency on rubygems.org during deploys) because the gem contains platform-specific binaries.

I've often been frustrated with the fragile interdependencies among different gems, and the need to micromanage them, pin to specific versions, and apply patches, to maintain compatibility. Letting Browserify do as much of the work as possible (for example, by letting it handle React for me rather than relying on the react-rails gem) means I can reduce my exposure.

# Perks

Using Browserify brings some nice perks at great convenience. Specifically, I'm using [the reactify package](https://github.com/andreypopp/reactify) to provide me with easy JSX-to-JavaScript transpiling, and also access to ES6 features which browsers don't support yet (such as arrow functions and classes), via Facebook's jstransform. All of this is totally transparent, and comes by adding a single switch to my Browserify invocation.

# Flexible

Browserify does one thing and does it well — making it possible to use CommonJS modules on the client side — but it also does it with enough flexibility to permit some useful variations. For example, you can use the `--standalone` switch to export your main module globally, meaning that other clients can use it without even having to know that Browserify is even involved.

You can make modules available externally, which can enable useful workflows. For example, `-r jquery`, means that a `require()` function is exported client-side and any of you code can get jQuery with a quick `var $ = require('jquery');`.

You can speed up processing by specifying `--noparse` for large external modules that you depend on, but which themselves don't use `require()` calls (such as jQuery).

And you can of course use transforms, like the reactify one I already mentioned above. There are [a very large number](https://github.com/substack/node-browserify/wiki/list-of-transforms) of available transforms which can do everything from minification to performing ES6-to-ES5 transformation.

# Ease of use

With a couple of lines in your `package.json` file and the tools that already come with `npm`, you can easily set up command to build your bundle or watch it and live-update it as you develop. It's trivial to set up source maps in development with a `-d` switch too.

I have a somewhat complicated deploy set-up (in which I compute asset fingerprints locally and store assets for each fingerprint in a special Git branch, and I perform all the pre-compilation for production on my local box prior to the deploy in order to eliminate cross-platform headaches), but it was trivial to plug this new Browserify-based workflow into it.
