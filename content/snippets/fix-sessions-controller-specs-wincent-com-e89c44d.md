---
title: Fix sessions controller specs (typechecked.net, e89c44d)
tags: snippets
---

This was a tricky one, who to simulate a user login in the specs. The problem is that the testing machinery assumes one request per spec, so you can't do the obvious easy solution of doing a real login and then following it up with other specs.

The next most obvious option is just calling the "current_user=" method but that won't work either. That method sets stuff in cookies and the session and those aren't set up yet prior to doing a post in your specs.

So in the end we just reach in and set the "@current_user" instance variable directly. Note that we have to intercept the call to the "login_before" before filter otherwise it will proceed to clear the instance variable as soon as we initiate an actual request.

Signed-off-by: Greg Hurrell &lt;greg@hurrell.net&gt;
