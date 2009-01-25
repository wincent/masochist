---
title: Ruby "in" method
tags: ruby
---

Do you ever find yourself writing:

    if foo == x or foo == y
      ...
    end

And wishing you could write:

    if foo == x or y
      ...
    end

Of course, that won't work, even though it reads nicely as English ("if foo is x or y"), because what it's actually saying is "if foo is x, or failing that, if y is neither false nor nil".

The first alternative does do what we want, but it doesn't read as nicely in English ("if foo is x or foo is y"); no native English speaker would ever use such a repetitive construction.

Of course, programming is *not* about speaking English, although it is sometimes tempting to make our code "read nicely" when spoken out loud.

So perhaps you consider this alternative to get rid of the reptition:

    if [x, y].include? foo
      ...
    end

That gets rid of the repetition by it still doesn't sound so great when spoken ("if 'x and y' include foo"). More "rubyesque" seeing as it uses a method defined on an enumerable; but also smells of unjustified complexity because in reality all we want to do is check a pair of expressions, not enumerate over a sizeable collection.

Next try: let's add a new method to `Object` to put things back in a more natural order:

    class Object
      def in ary
        ary.include? self
      end
    end

    # now we can do:
    if foo.in [x, y]
     ....
    end

So that's a little better but still doesn't sound perfect when read out loud ("if foo is in 'x and y'"), and we still have that "unjustified complexity" smell; it's just that it's hidden now one level down inside a method on `Object`. (Does burying it like that make the smell better or worse?)

At this point I'm about ready to give up and just keep on writing `foo == x or foo == y`.

## Update

[Sho Fukamachi](/wiki/Sho_Fukamachi) mailed me reminding me of this alternative:

    case foo
    when x, y, z
      ...
    end

As he says, "I find that nice and neat, obviously it's a line longer than a simple if but can look very nice and clean if you got a number of them to do".

Doesn't address the "reads nicely out loud" criterion but it does avoid the smell of using a temporary array. The Ruby parser will also accept it without the extra newline anyway, so it is not necessarily longer:

    case foo when x, y, z
       ...
    end

But still, doesn't help much in the case where you want the `if` at the end of the line so that you can put the entire thing on one line:

    ... if foo == x or foo == y

## Update 2: 26 January 2009

Another suggestion from Sho:

    def in *arr
      arr.include? self
    end

Then you can do things like:

    >> 1.in 1, 2
    => true
    >> 1.in 2, 3
    => false
