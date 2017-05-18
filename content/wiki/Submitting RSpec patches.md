---
tags: rspec wiki
---

The official instructions for contributing to [RSpec](/wiki/RSpec) can be found here:

-   <http://rspec.rubyforge.org/community/contribute.html>
-   <http://rspec.rubyforge.org/rdoc/files/README.html>

I already had most of the prerequisites for running [RSpec](/wiki/RSpec)'s pre-commit [specs](/wiki/specs), so I only had to do a small amount of additional set-up:

    sudo gem install webgen
    sudo gem install syntax
    sudo gem install meta_project
    svn co svn://rubyforge.org/var/svn/rspec/trunk rspec
    cd rspec

    # takes a long time... (checks out multiple versions of rails)
    rake install_dependencies

    cd example_rails_app
    export RSPEC_RAILS_VERSION=1.2.3
    rake rspec:generate_mysql_config

    # requires passwordless local access for root
    mysql -u root < db/mysql_setup.sql 
    cd ..

    # this failed the first time because of a not-yet-documented dependence on hpricot
    rake pre_commit

    # 
    sudo gem install hpricot

    # now it works
    rake pre_commit

# See also

-   [Passwordless local MySQL access](/wiki/Passwordless_local_MySQL_access)
-   [RSpec patches](/wiki/RSpec_patches)
