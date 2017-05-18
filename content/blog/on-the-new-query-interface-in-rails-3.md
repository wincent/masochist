---
title: On the new query interface in Rails 3
tags: ruby rails sql blog
---

There's no doubt that [the new query interface](http://m.onkey.org/2010/1/22/active-record-query-interface) in [Rails](/wiki/Rails) 3 is nice for simple queries. For example:

```ruby
new_users = User.order('users.id DESC').limit(20).includes(:items)
```

Reads a lot more nicely than:

```ruby
new_users = User.all :order => 'users.id DESC', :limit => 20, :include => :items
```

But I really don't see it as a compelling alternative for complex queries. For these, nothing will ever beat dropping down to raw [SQL](/wiki/SQL).

Take an example from [this weblog post](http://magicscalingsprinkles.wordpress.com/2010/01/28/why-i-wrote-arel/) by the mastermind of the new query system. He argues that this:

```ruby
photo_counts = photos.
group(photos[:user_id]).
project(photos[:user_id], photos[:id].count)
```

Followed by this:

```ruby
users.join(photo_counts).on(users[:id].eq(photo_counts[:user_id]))
```

Is better than this:

```sql
SELECT users.*, photos_aggregation.cnt
FROM users
LEFT OUTER JOIN (SELECT user_id, count(*) as cnt FROM photos GROUP BY user_id) AS photos_aggregation
ON photos_aggregation.user_id = users.id
```

I'm afraid I just can't agree with that. For me, when complex joins and subqueries are involved, the mental gymnastics required to convert the actual operations on the database (which are described with a perfect one-to-one correspondence by the SQL syntax) into the rather arcane, abstract Ruby equivalent, just aren't worth the effort, and I can't see how they ever will be.
