---
tags: rails wiki
---

According to the [instructions](http://weblog.rubyonrails.org/2007/9/30/rails-2-0-0-preview-release) on the official [Rails](/wiki/Rails) weblog all that's required to install the preview is:

    sudo gem install rails --source http://gems.rubyonrails.org

The output is as follows:

    Bulk updating Gem source index for: http://gems.rubyonrails.org
    Install required dependency activesupport? [Yn]  Y
    Install required dependency builder? [Yn]  Y
    Install required dependency activerecord? [Yn]  Y
    Install required dependency actionpack? [Yn]  Y
    Install required dependency actionmailer? [Yn]  Y
    Install required dependency activeresource? [Yn]  Y
    Successfully installed rails-1.2.4.7794
    Successfully installed activesupport-1.4.3.7794
    Successfully installed builder-2.1.2
    Successfully installed activerecord-1.15.4.7794
    Successfully installed actionpack-1.13.4.7794
    Successfully installed actionmailer-1.3.4.7794
    Successfully installed activeresource-0.9.0.7794
    Installing ri documentation for activesupport-1.4.3.7794...
    Installing ri documentation for builder-2.1.2...
    While generating documentation for builder-2.1.2
    ... MESSAGE:   Unhandled special: Special: type=17, text="<!-- HI -->"
    ... RDOC args: --ri --op /usr/local/lib/ruby/gems/1.8/doc/builder-2.1.2/ri --title Builder -- Easy XML Building --main README --line-numbers --quiet lib CHANGES Rakefile README doc/releases/builder-1.2.4.rdoc doc/releases/builder-2.0.0.rdoc doc/releases/builder-2.1.1.rdoc
    (continuing with the rest of the installation)
    Installing ri documentation for activerecord-1.15.4.7794...
    Installing ri documentation for actionpack-1.13.4.7794...
    Installing ri documentation for actionmailer-1.3.4.7794...
    Installing ri documentation for activeresource-0.9.0.7794...
    Installing RDoc documentation for activesupport-1.4.3.7794...
    Installing RDoc documentation for builder-2.1.2...
    Installing RDoc documentation for activerecord-1.15.4.7794...
    Installing RDoc documentation for actionpack-1.13.4.7794...
    Installing RDoc documentation for actionmailer-1.3.4.7794...
    Installing RDoc documentation for activeresource-0.9.0.7794...

Note that this is actually a second preview release that the Rails team obviously pushed out without making any public announcement after the 1.2.4 release.

At first I didn't think this worked because on issuing:

    rails --version

I got back:

    Rails 1.2.4

But on visually inspecting `/usr/local/lib/ruby/gems/1.8/gems/rails-1.2.4.7794/lib/rails/version.rb` I saw that it's merely because the Rail team doesn't bother to update these things.

I also did the usual [FastRI](/wiki/FastRI) index update:

    fastri-server -b

To see what would happen if you tried updating an existing Rails app you can do:

    rails -p PATH_TO_APP
