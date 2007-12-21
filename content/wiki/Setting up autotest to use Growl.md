---
tags: zentest growl
---

# Introduction

This information based on the following three articles:

-   <http://blog.labratz.net/articles/2006/09/13/growl-autotest-rails-with-zentest-3-4-0>
-   <http://blog.internautdesign.com/2006/11/12/autotest-growl-goodness>
-   <http://blog.codefront.net/2007/04/01/get-your-testing-results-via-growl-notifications/>

# Get `GrowlNotify`

-   Download and install the latest version of the [Growl](/wiki/Growl) disk image from: <http://growl.info/>

## Growl 1.1.2

    wget http://growl.info/files/Growl-1.1.2.dmg
    open Growl-1.1.2.dmg 
    cd /Volumes/Growl\ 1.1.2/Extras/growlnotify
    less install.sh
    sudo ./install.sh 
    cd
    hdiutil detach /Volumes/Growl\ 1.1.2

## Growl 0.7.6

    wget http://growl.info/files/Growl-0.7.6.dmg
    open Growl-0.7.6.dmg
    cd /Volumes/Growl/Extras/growlnotify
    sudo ./install.sh
    cd
    hdiutil detach /Volumes/Growl

# Grab the failure/success graphics

    cd ~
    wget http://blog.internautdesign.com/files/rails_fail.png
    wget http://blog.internautdesign.com/files/rails_ok.png
    mv rails_fail.png .rails_fail.png
    mv rails_ok.png .rails_ok.png

# Customize `~/.autotest`

(Last updated 21 December 2007 to handle new [RSpec](/wiki/RSpec) "pending" notifications):

    module Autotest::Growl
      
      def self.growl title, msg, img, pri=0, sticky=""
        system "growlnotify -n autotest --image #{img} -p #{pri} -m #{msg.inspect} #{title} #{sticky}"
      end

      Autotest.add_hook :ran_command do |at|
        results = [at.results].flatten.join("\n")
        output = results.slice(/(\d+)\s+examples?,\s*(\d+)\s+failures?(,\s*(\d+)\s+pending)?/)
        if output
          if $~[2].to_i > 0
            growl "Test Results", "#{output}", "~/.rails_fail.png", 2
          else
            growl "Test Results", "#{output}", "~/.rails_ok.png"
          end
        end
      end
        
    end

# Configure [Growl](/wiki/Growl)

-   Configure notifications from [autotest](/wiki/autotest) to display using the "Smoke" display.
-   Set the "Emergency" color scheme for "Smoke" to show a red background.

