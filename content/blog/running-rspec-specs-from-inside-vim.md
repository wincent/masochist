---
title: Running RSpec specs from inside Vim
tags: rspec vim blog
cache_breaker: 1
---

Continuing in my experiment with [Vim](/wiki/Vim), I was looking for a way to run [RSpec](/wiki/RSpec) specs from inside vim.

Turns out you can do this with Tim Pope's [rails.vim](http://rails.vim.tpope.net/) plug-in, but in a way that is pretty nasty compared to the [TextMate](/wiki/TextMate) equivalent.

With `rails.vim` installed, you can use the `:Rake` command to fire off the specs for the model, controller or view that you are editing. Output like the following will appear in the command buffer at the bottom of the window:

    :!rake spec SPEC="/Users/wincent/trabajo/unversioned/wincent.com/src/spec/models/issue_spec.rb" SPEC_OPTS= 2>&1| tee /var/folders/mh/mhvu4vHPGiGR1PpCmIscX++++TI/-Tmp-/v867081/0
    (in /Users/wincent/trabajo/unversioned/wincent.com/src)
    .............................................................

    Finished in 3.334807 seconds

    61 examples, 0 failures
    (1 of 1): (in /Users/wincent/trabajo/unversioned/wincent.com/src)

But this isn't quite what I was looking for. There are no hyperlinks for failing spec names for, example. And it's a temporary buffer as well, so it gets dismissed as soon as you hit ENTER (not very useful if you have multiple failures).

I found [this post](http://cassiomarques.wordpress.com/2009/01/09/running-rspec-files-from-vim-showing-the-results-in-firefox/) which describes how to run specs from Vim and show the results in Firefox. That's somewhat pretty but there's still no way of clicking on failed specs to jump to the corresponding location in the source.

I really wanted to use the "quickfix" list feature that's built into Vim and which is specifically designed for this kind of thing (jumping to locations in different files):

    spec/views/support/index.html.haml_spec.rb|17| Expected at least 1 element matching "a[href='/forums']", found 0. <false> is not true.
    spec/views/support/index.html.haml_spec.rb|31| Expected at least 1 element matching "a[href='/issues']", found 0. <false> is not true.
    spec/views/support/index.html.haml_spec.rb|47| Expected at least 1 element matching "a[href='/issues/new']", found 0. <false> is not true.

Here we see the filename on the left, which is a clickable hyperlink, and the description of the failing spec on the right. Because this is a quickfix list, you can jump from error to error using the `:cn`, `:cp`, `:cnf`, `:cpf` and related commands, and you can also of course bind that to a key mapping if you want to do it really quickly.

So how to get this working?

# Versions of RSpec prior to 2.0

**Note:** *when I originally wrote this post I was using an older version of RSpec — I am not sure whether it was 1.3.x or 1.2.x or perhaps even older. For an updated version for RSpec 2.4.0 see further down.*

First we need a custom RSpec formatter class to emit the results in a format suitable for display in the quicklist buffer. Here's my first shot at it:

```ruby
require 'spec/runner/formatter/base_text_formatter'
require 'pathname'

# Format spec results for display in the Vim quickfix window
module Spec
  module Runner
    module Formatter
      class VimFormatter < BaseTextFormatter
        def dump_failure counter, failure
          path = failure.exception.backtrace.find do |frame|
            frame =~ %r{\bspec/.*_spec\.rb:\d+\z}
          end
          message = failure.exception.message.gsub("\n", ' ')
          @output.puts "#{relativize_path(path)}: #{message}" if path
        end

        def dump_pending; end

        def dump_summary duration, example_count, failure_count, pending_count
        end

      private

        def relativize_path path
          @wd ||= Pathname.new Dir.getwd
          begin
            return Pathname.new(path).relative_path_from(@wd)
          rescue ArgumentError
            # raised unless both paths relative, or both absolute
            return path
          end
        end
      end # class VimFormatter
    end # module Formatter
  end # module Runner
end # module Spec
```

So that's in a file called `vim_formatter.rb` in my `spec` directory. I can try it out from the [command line](/wiki/command_line) like this:

    spec -r spec/vim_formatter.rb -f Spec::Runner::Formatter::VimFormatter spec

Voila. It works. Now a Vim function in my `~/.vimrc` so that we can use this conveniently.

    function! RunSpec(command)
      if a:command == ''
        let dir = 'spec'
      else
        let dir = a:command
      endif
      cexpr system("spec -r spec/vim_formatter -f Spec::Runner::Formatter::VimFormatter " . dir)
      cw
    endfunction

I'm still a Vim newbie, so that may be a horrible function, but it gets the job done. If no parameters are supplied it will assume you want to run everything under the "spec" directory; otherwise it will scope the spec run to whatever you passed in.

Now we add a `:Spec` command so that we can call the function with an optional argument and path completion:

    command! -nargs=? -complete=file Spec call RunSpec(<q-args>)

Finally, a mapping (in my case `,s`) to pull the command up quickly:

    map <leader>s :Spec<space>

So now you can run all specs just by hitting `,s` then return, or a specific subset of specs with something like `,s spec/views`.

Thanks to the use of the quickfix buffer this is already nicer than the output that you get from rails.vim. Once I learn a bit more Vim-fu I'd like to update the function to somehow show a progress bar while waiting for the spec run to finish. I'll also need to show something for pending specs. But for the timebeing this works fairly well.

# RSpec 2.4.0

**Update:** Since writing the above post I've update my install of [RSpec](/wiki/RSpec) and so the formatter requires some tweaks. Here's the version that I'm currently using; it seems to work well with RSpec 2.4.0.

Note also that I've added some code for displaying a Growl notification at the end of the spec run. This will only work if you have the `growlnotify` executable installed on your system. It expects to find icon graphics called `pass.png`, `fail.png` and `pending.png` in the `.autotest` directory at the project root.

```ruby
# this file: spec/support/vim_formatter.rb 
require 'rspec/core/formatters/base_text_formatter'

# Format spec results for display in the Vim quickfix window
# Use this custom formatter like this:
#   bin/rspec -r spec/support/vim_formatter -f RSpec::Core::Formatters::VimFormatter spec
module RSpec
  module Core
    module Formatters
      class VimFormatter < BaseTextFormatter

        # TODO: vim-side function for printing progress (if that's even possible)

        def example_failed example
          exception = example.execution_result[:exception]
          path = exception.backtrace.find do |frame|
            frame =~ %r{\bspec/.*_spec\.rb:\d+\z}
          end
          message = format_message exception.message
          path    = format_caller path
          output.puts "#{path}: [FAIL] #{message}" if path
        end

        def example_pending example
          message = format_message example.execution_result[:pending_message]
          path    = format_caller example.location
          output.puts "#{path}: [PEND] #{message}" if path
        end

        def dump_failures *args; end

        def dump_pending *args; end

        # suppress messages like:
        #   Run filtered using {:focus=>true}
        def message msg; end

        # like BaseFormatter
        def dump_summary duration, example_count, failure_count, pending_count
          @duration = duration
          @example_count = example_count
          @failure_count = failure_count
          @pending_count = pending_count
        end

        def close
          super
          summary = summary_line example_count, failure_count, pending_count
          if failure_count > 0
            growlnotify "--image ./autotest/fail.png -p Emergency -m '#{summary}' -t 'Spec failure detected'"
          elsif pending_count > 0
            growlnotify "--image ./autotest/pending.png -p High -m '#{summary}' -t 'Pending spec(s) present'"
          else
            growlnotify "--image ./autotest/pass.png -p 'Very Low' -m '#{summary}' -t 'All specs passed'"
          end
        end

      private

        def format_message msg
          # NOTE: may consider compressing all whitespace here
          msg.gsub("\n", ' ')[0,40]
        end

        def growlnotify str
          system 'which growlnotify > /dev/null'
          if $?.exitstatus == 0
            system "growlnotify -n autotest #{str}"
          end
        end
      end # class VimFormatter
    end # module Formatter
  end # module Runner
end # module Spec
```

I've also had to update my `~/.vimrc`:

    function! RunSpec(command)
      " TODO: handle args such as --tag focus here, or make a separate command for it
      if a:command == ''
        let dir = 'spec'
      else
        let dir = a:command
      endif
      cexpr system("bin/rspec -r spec/support/vim_formatter -f RSpec::Core::Formatters::VimFormatter " . dir)
      cw
    endfunction
    command! -nargs=? -complete=file Spec call RunSpec(<q-args>)
    map <leader>s :Spec<space>
