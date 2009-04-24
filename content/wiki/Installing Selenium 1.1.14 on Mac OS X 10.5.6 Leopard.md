---
tags: selenium
cache_breaker: 1
---

# Basic installation

    $ sudo gem install Selenium
    Password:
    Successfully installed Selenium-1.1.14
    1 gem installed
    Installing ri documentation for Selenium-1.1.14...
    Updating ri class cache with 4895 classes...
    Installing RDoc documentation for Selenium-1.1.14...

It's also necessary to install the selenium-client gem:

    $ sudo gem install selenium-client
    Password:
    Successfully installed selenium-client-1.2.14
    1 gem installed
    Installing ri documentation for selenium-client-1.2.14...
    Updating ri class cache with 4915 classes...
    Installing RDoc documentation for selenium-client-1.2.14...

# Fixing Firefox breakage

As [noted here](http://www.spacevatican.org/2008/9/27/selenium-and-firefox-3), the currently shipping version of the Selenium gem doesn't work with Firefox 3. As the [Selenium website](http://seleniumhq.org/) was down at the time of writing, I manually edited the "maximum version" limits of the jar file inside the gem:

    mkdir /tmp/selenium
    cd /tmp/selenium
    jar xf /Library/Ruby/Gems/1.8/gems/Selenium-1.1.14/lib/selenium/openqa/selenium-server.jar.txt 

    # could have used sed, but wanted to visually inspect the files:
    find . -name '*.rdf' -exec vim {} \;

    find . -name '*.rdf' -exec \
      sudo jar uf /Library/Ruby/Gems/1.8/gems/Selenium-1.1.14/lib/selenium/openqa/selenium-server.jar.txt {} \;

# See also

-   The reason why I'm installing this in the first place: [ticket \#1131](/issues/1131)

