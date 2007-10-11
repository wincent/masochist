---
title: Bad UI design in Rails
---

A minor peeve about the `rails` commandline tool.

When trying to upgrade an existing app using the new Rails 2.0 preview release you'll inevitably be presented with a choice like this:

          exists  vendor/plugins
          exists  tmp/sessions
          exists  tmp/sockets
          exists  tmp/cache
          exists  tmp/pids
       identical  Rakefile
    overwrite README? [Ynaqd]

What do the options mean here? `Y` most likely means "**y**es", `n` "**n**o", and `a` probably means "overwrite **a**ll". But `q` and `d`? It turns out that they mean "**q**uit" and "show a **d**iff" respectively. Perhaps I could have guessed this, but I had to dig into the Rails source code to find out, and you just shouldn't have to do that.

This is bad UI design. My first attempt at finding out what the options meant was doing a `man rails` but Rails doesn't have a man page. My next try was `rails --help` but that provides no information about the abbreviations that might crop up. Finally the `README` that is installed with new Rails apps doesn't appear to make any mention of this either.

I wondered if `h` might provide "**h**elp", so I tried it and boom, what do I see?

           force  README

So `h` forces an overwrite. Not very helpful.

So one is forced to dig into `/usr/local/lib/ruby/gems/1.8/gems/rails-1.2.4.7794/lib/rails_generator/commands.rb` and inspect the source code in order to figure out what's going on.





Here's the code:

    def force_file_collision?(destination, src, dst, file_options = {}, &block)
      $stdout.print "overwrite #{destination}? [Ynaqd] "
      case $stdin.gets
        when /d/i
          Tempfile.open(File.basename(destination), File.dirname(dst)) do |temp|
            temp.write render_file(src, file_options, &block)
            temp.rewind
            $stdout.puts `#{diff_cmd} #{dst} #{temp.path}`
          end
          puts "retrying"
          raise 'retry diff'
        when /a/i
          $stdout.puts "forcing #{spec.name}"
          options[:collision] = :force
        when /q/i
          $stdout.puts "aborting #{spec.name}"
          raise SystemExit
        when /n/i then :skip
        else :force
      end
    rescue
      retry
    end

So here we see what the various options do and we also see why `h` caused things to be overwritten: the *default* action is to force an overwrite. Whoever thought that *that* was a bright idea? Good thing we all use version control, eh? Also note that the regular expressions used in the `case` statement will match the letters *anywhere* they appear in the input string, so if you type "xxxazzz" then that's equivalent to typing "a".

How could this have been done better? Well, first up it should display a more helpful prompt:

    overwrite README? (enter "h" for help) [Ynaqdh]

Secondly it should show detailed help for unknown options instead of just forcing the overwrite:

    Y - yes, overwrite
    n - no, do not overwrite
    a - all, overwrite this and all others
    q - quit, abort
    d - diff, show the differences between the old and the new
    h - help, show this help
    overwrite README? (enter "h" for help) [Ynaqdh]

And thirdly it shouldn't use such sloppy regexes.

I've submitted [a patch](http://dev.rubyonrails.org/ticket/9842) with these fixes which has now been [applied](http://dev.rubyonrails.org/changeset/7837) to the trunk.
