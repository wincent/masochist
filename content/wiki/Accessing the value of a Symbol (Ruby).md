---
tags: ruby ruby.recipes wiki
---

# Short version

    eval(:symbol_name.id2name)

Is the same as:

    symbol_name

# Longer demo

    irb(main):001:0> a = "this is a String object"
    => "this is a String object"
    irb(main):002:0> :a
    => :a
    irb(main):003:0> :a.id2name
    => "a"
    irb(main):004:0> eval(:a.id2name)
    => "this is a String object"
    irb(main):005:0> b = eval(:a.id2name)
    => "this is a String object"
    irb(main):006:0> a.object_id == b.object_id
    => true
