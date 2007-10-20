---
title: Refactor code from User model into Authentication module (wincent.com, f625239)
---

At the moment the authentication logic is spread across several sites: the User model, the ApplicationController (and by inheritance all its subclasses), and the Authentication module itself.

This commit tries to centralize as much of this code as possible inside the Authentication module with the goal of keeping the authentication code in one place. It is unavoidable that an authentication mechanism be involved with both controllers and models (and later views), but at least we can store the logic in a single file, clearly grouped using submodules (Authentication::Model, Authentication::Controller and so forth), and then incorporate it elsewhere using extend and include.

There still is quite a bit of explicit authentication logic in the user model itself (mostly validation and callback related), and I am not sure what to do about that. Although the idea of keeping authentication code bundled together in one place is superficially appealing, if taken to far it can actually make the code less readable. As such, the refactoring done in this commit is relatively conservative and I won't be taking it any further for the time-being.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
