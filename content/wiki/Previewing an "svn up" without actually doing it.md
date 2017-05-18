---
tags: subversion wiki
---

Sometimes you have a working copy checked out and would like to see what would happen if you did an `svn up` without actually doing it.

# Example

I was reading the [rspec-users](/wiki/rspec-users) mailing list and saw in [this post](http://rubyforge.org/pipermail/rspec-users/2007-June/001957.html) that a fix for a bug I was interested in was apparently checked in at or before revision 2076. My local working copy was at revision 2068:

    svn info

Output:

    Path: .
    URL: svn://rubyforge.org/var/svn/rspec/trunk
    Repository Root: svn://rubyforge.org/var/svn/rspec
    Repository UUID: 410327ef-2207-0410-a325-f78bbcb22a5a
    Revision: 2068
    Node Kind: directory
    Schedule: normal
    Last Changed Author: dchelimsky
    Last Changed Rev: 2067
    Last Changed Date: 2007-06-01 01:39:00 +0200 (Fri, 01 Jun 2007)

To see what happened in the next changeset (the delta between revision 2068 and 2069):

    # see which files changed in a specific changeset
    svn diff -r 2068:2069 --summarize

Output:

    M      rspec_on_rails/lib/spec/rails/version.rb
    M      rspec/lib/spec/version.rb
    M      rspec/lib/spec/matchers/have.rb
    M      rspec/spec/spec/matchers/have_spec.rb

Or, to see the actual changes rather than a summary:

    # see content of changes in a specific changeset
    svn diff -r 2068:2069

To see the corresponding log message:

    svn log -r 2068:2069

Output:

    ------------------------------------------------------------------------
    r2069 | dchelimsky | 2007-06-02 20:51:43 +0200 (Sat, 02 Jun 2007) | 1 line

    added meaningful message to a rare failure case of have(n).items
    ------------------------------------------------------------------------

To see log messages up to the current `HEAD`:

    svn log -r 2068:HEAD

Other variants:

    # see all changed files
    svn diff -r 2068:HEAD --summarize

    # see all changes in detail
    svn diff -r 2068:HEAD

In the case of the specific bug under discussion here, the relevant entry is:

    ------------------------------------------------------------------------
    r2076 | dchelimsky | 2007-06-04 06:27:11 +0200 (Mon, 04 Jun 2007) | 1 line

    Fixed [#11337] autotest runs specs redundantly
    ------------------------------------------------------------------------

Changed files (`svn diff -r 2075:2076 --summarize`):

    M      rspec_on_rails/lib/spec/rails/version.rb
    M      rspec/lib/autotest/rspec.rb
    M      rspec/lib/spec/version.rb

Actual relevant changes (`svn diff -r 2075:2076 rspec/lib/autotest/rspec.rb`):

    Index: rspec/lib/autotest/rspec.rb
    ===================================================================
    --- rspec/lib/autotest/rspec.rb (revision 2075)
    +++ rspec/lib/autotest/rspec.rb (revision 2076)
    @@ -47,21 +47,7 @@
       end
     
       def make_test_cmd(files_to_test)
    -    cmds = []
    -    full, partial = files_to_test.partition { |k,v| v.empty? }
    -  
    -    unless full.empty? then
    -      files = full.map {|k,v| k}.flatten.join(' ')
    -      cmds << "#{ruby} -S #{@spec_command} #{add_options_if_present}#{files}"
    -    end
    -  
    -    partial.each do |f, methods|
    -      cmds.push(*methods.map { |meth|
    -        "#{ruby} -S #{@spec_command} #{add_options_if_present} #{f}"
    -      })
    -    end
    -  
    -    return cmds.join('; ')
    +    return "#{ruby} -S #{@spec_command} #{add_options_if_present} #{files_to_test.keys.flatten.join(' ')}"
       end
       
       def add_options_if_present
