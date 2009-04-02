---
title: What's the best UI for implementing comment previews?
tags: 
---

So I'm going to implement comment previews. I just wrote a [fairly lengthy reply](/forums/winswitch/topics/339#comment_4402) in the [forums](/forums) and noticed how much I would have appreciated the ability to preview before submitting.

The problem is, I am not sure on what the best [UI](/wiki/UI) is. The three main options I'm considering right now are:

-   an always-visible preview below the comment form, updated via [AJAX](/wiki/AJAX)
-   an on-demand preview opened up in a new pop-up window in response to the push of a button
-   retain the existing "Create" button, but add a new "Preview" button that will take you to new page which allows you to re-edit your submission if necessary and then continue by pressing "Create" or (again) "Preview"

There are other ways, but I think these are the main contenders. For the record the first option (the AJAX approach) is the one I use elsewhere in the application (when writing [blog](/blog) posts, for example), but I am not sure whether that's the best option for comments.

This is not a technical issue. The implementation of any of the above options would be fairly straightforward. I'm just stumped on the UI side of the problem. None of the options instantly leaps out at me as "the right thing to do". Usually what I do when I am faced by that kind of uncertainty is go off and work on something unrelated for a few days; the right answer usually comes to me in my sleep, or on the train, or in the shower...

If you have an opinion on the best UI, please add your comment to [ticket \#1267](/issues/1267).
