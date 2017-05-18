---
title: An attack of over-engineering
tags: ruby blog
---

I just had a horrible attack of over-engineering. Thankfully, I managed to pull out of it before it went too far. It was like a glimpse into the life of an fully-indoctrinated Java programmer (you know, the ones with hammer-shaped copies of the "[Design Patterns](http://en.wikipedia.org/wiki/Design_Patterns)" book by the Gang of Four, to whom every software problem looks like a nail).

Ironically, I started a new script precisely because I wanted to replace a piece of over-engineered code ([Capistrano](/wiki/Capistrano)) with something simple (a single script that deploys my [Rails](/wiki/Rails) application).

**First step.** Write a method for forking an external command, capturing its output and exit status, and returning the result. This was something I've done quite a few times over the years, so I just did a copy-and-paste from the last project where I did it.

**Second step.** Look at `inspect` output from returned object (an `OpenStruct` instance), and decide that you don't like how the word "OpenStruct" is visible in the output. This is where the madness began. I had chosen to use `OpenStruct` precisely because it provided a nicer-looking interface for the object containing the returned results (nicer than a `Hash`, I mean) and because it was already written for me. But worrying about what the *debugging* output looked like when I was certain that once written, the script would never need to be debugged again? I should have perceived the signs of pending insanity.

**Third step.** Create a custom class to encapsulate the results. Decide, for some unfathomable reason, that you want the attributes to be readable freely, but writable only once. Why? I still don't know why I care about this.

**Fourth step.** Do some meta-programming (dynamically adding methods via `class_eval`) to add special accessor methods to your custom class, methods which enforce the desired read/write behaviour. Why meta-programming? To keep things [DRY](/wiki/DRY), of course; we're talking about four attributes here! More madness of course as the whole thing shouldn't have even been done *once*, let alone *repeated*. (I guess I really needed to DOY, or "Don't Once Yourself!").

**Fifth step.** Look at your new custom object and decide that you don't like *that* object's `inspect` output *either*, because the internal variables you've set up to make sure that attributes only get written once appear and you'd rather they not. Refactor to use one private variable only (an `Array` for keeping a list of attributes), and generate your `inspect` output by introspecting the `Array`.

I'm ashamed to post this hideous thing, but I will so that others may learn from my stupidity. Here's what the code is looking like by now:

    class ExecRecord
      def initialize
        # keep track of attributes for making inspect pretty
        @attributes = []
      end

      # define accessors for an attribute that can be written once, read many times
      def self.define_accessor *args
        args.each do |arg|
          arg = arg.to_s
          class_eval <<-DEF
            # def foo
            #   @foo
            # end
            def #{arg}
              @#{arg}
            end

            # def foo= val
            #   if @attributes.include? 'foo'
            #     raise "attempt to modify write-once attribute, foo"
            #   end
            #   @foo = val
            #   @attributes << 'foo'
            # end
            def #{arg}= val
              if @attributes.include? '#{arg}'
                raise "attempt to modify write-once attribute, #{arg}"
              end
              @#{arg} = val
              @attributes << '#{arg}'
            end
          DEF
        end
      end
      define_accessor :stderr, :stdout, :status, :command_string

      def inspect
        content = @attributes.collect do |attr|
          ivar = instance_variable_get("@#{attr}")
          "@#{attr}=#{ivar.inspect}"
        end
        content.unshift "#{self.class.to_s}:#{'0x%x' % object_id}"
        "\#<#{content.join(' ')}>"
      end
    end # class ExecRecord

The original method which uses this abomination looks like this. You can see the `OpenStruct` creation, where the horrible `ExecRecord` would be slotted in:

    def run cmd, *args
      result = OpenStruct.new
      result.stdout = ''
      result.stderr = ''
      Wopen3.popen3(*([cmd] + args)) do |stdin, stdout, stderr|
        threads = []
        threads << Thread.new(stdout) do |out|
          out.each { |line| result.stdout << line }
        end
        threads << Thread.new(stderr) do |err|
          err.each { |line| result.stderr << line }
        end
        threads.each { |thread| thread.join }
      end
      result.status = $?.exitstatus
      result.command_string = ([cmd] + args).join(' ')
      result
    end

**Sixth step.** By now you're starting to realize that all this is probably misguided but you're almost falling asleep so you continue for long enough to jot down some "TODO" notes for tomorrow. Things like, "send `freeze` to attribute storage to stop callers from modifying contents" (why the hell was I worried about this?).

Or, "move execution method inside record class to keep everything encapsulated"... So this helper class that I decided to whip up for use in a method has started to become such a protagonist that I'm looking at swallowing up the *original* method into the helper method. This is surely a sign that this thing has started to grow at a tumour-pace.

Or, "set up top-level `run` method as convenience for creating new instances"... But wasn't that what I started with? A top-level convenience method for running external commands? I'm going in circles here. Time to stop.

I really shouldn't be playing with code when I'm sleep-deprived like this.
