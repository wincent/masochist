---
title: ActiveRecord goodness
tags: rails blog
---

For once, ActiveRecord actually surprised me *in a good way* tonight. I'm used to pretty much the opposite happening: ActiveRecord is great for doing extremely simple stuff, but as soon as you need to do anything mildly sophisticated you find yourself dropping down to raw [SQL](/wiki/SQL):

    SELECT topics.id, topics.title, topics.comments_count, topics.view_count, topics.updated_at, topics.last_comment_id,
           users.id AS last_active_user_id,
           users.display_name AS last_active_user_display_name
    FROM topics
    LEFT OUTER JOIN users ON (users.id = topics.last_commenter_id)
    WHERE topics.forum_id = ? AND public = TRUE AND awaiting_moderation = FALSE AND spam = FALSE
    ORDER BY topics.updated_at DESC
    LIMIT ?, ?

Well, tonight the unexpected happened and ActiveRecord actually did something I'd never really expected it to do before. I had an "N+1 `SELECT`" problem (a page which was performing an additional database query for each record shown on the page), and was thinking about how I would solve the problem by manually fetching all the required records in one hit.

I had a model that looked something like this:

    class Post < ActiveRecord::Base
      has_many                :comments,
                              :as         => :commentable,
                              :extend     => Commentable,
                              :order      => 'comments.created_at',
                              :dependent  => :destroy
    ...

And the `Commentable` extension referenced above had methods like this:

    module Commentable
      def published
        find :all, :conditions => { :awaiting_moderation => false, :spam => false, :public => true }
      end
    end

And finally, a view which accessed those comments by referencing `@post.comments.published`. On rendering the view there would be one query to get the comments:

    SELECT * FROM `comments`
    WHERE (`comments`.commentable_id = 10 AND `comments`.commentable_type = 'Post' AND
        (`comments`.`public` = 1 AND `comments`.`awaiting_moderation` = 0 AND `comments`.`spam` = 0))
    ORDER BY comments.created_at

And then one query like the following to retrieve the user for each and every comment:

    SELECT * FROM `users` WHERE (`users`.`id` = 23)

So for 10 comments that would be 10 additional queries; and for 20 comments it would be 20 queries.

Imagine my delight when on adding an `:include` parameter to my `Post`/`Comment` association ActiveRecord automatically did the right thing, transforming those multiple `user` queries into a single:

    SELECT * FROM `users` WHERE (`users`.`id` IN (23,1,19,54))

Which is pretty much exactly what I would have done manually. I think this is the first time I've been in "N+1" `SELECT` situation and Rails has done what I would have done myself!
