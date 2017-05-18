---
title: Move session reset up into controller (wincent.com, ab81739)
tags: snippets
---

We must reset the session from inside the controller and not in authentication.rb (the current\_user= method).

If we try the latter then we get ActionController::InvalidAuthenticityToken exceptions during login because the code is run in a before filter (specifically, we go to our sessions "new" action, this calls the session "create" action, the before filter runs and login\_with\_cookies is called and fails because we are not logged in yet, so the current\_user is set to nil, which in turn resets the session and the filters continue running, eventually getting to the "protect\_from\_forgery" one which fails and throws an exception because just cleared our session).

We must only clear the session after the before filters run, and the correct place to do that is in the sessions controller "destroy" (logout) action.

Signed-off-by: Wincent Colaiuta &lt;win@wincent.com&gt;
