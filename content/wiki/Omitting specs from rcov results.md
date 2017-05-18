---
tags: rspec rcov wiki
---

Spec::Rake::SpecTask.new("spec:rcov") do |t|
      t.spec_files = FileList["spec/**/*_spec.rb"]
      t.rcov = true
      t.rcov_opts = ['--exclude', "spec"] # <-- this is the critical line
    end

Source: <http://rubyforge.org/pipermail/rspec-users/2007-April/001149.html>

For an explanation in context, see [Behaviour-Driven Development with Rails](/wiki/Behaviour-Driven_Development_with_Rails).
