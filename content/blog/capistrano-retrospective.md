---
title: Capistrano retrospective
tags: capistrano blog
cache_breaker: 1
---

Back in September 2009 I wrote about [getting rid of Capistrano](/wiki/getting_rid_of_Capistrano), replacing about 6,000 lines of flakey, fragile [Ruby](/wiki/Ruby) code with a 268-line shell script. I finished that post with:

> This thing works and it'll be drop-dead easy to maintain. It took only a few hours to put together. If only I hadn't wasted all that time with Capistrano.

Having just moved from a dedicated hosting environment at [INetU](/wiki/INetU) to a rather different one in [the cloud](/wiki/the_cloud) ([AWS](/wiki/AWS)), did my my claim that it would be "drop-dead easy" stand up to the test?

The answer is a resounding yes. It really was just a matter of updating a small number of variables, and changing some of the commands to reflect new usernames and access credentials. Ironically, despite the fact that my hosting arrangement is now more complex (spread across multiple instances), the actual deployment script got a little simpler.

# The script

A got a few comments on my original article asking to see the script. At the time I said:

> There's really no point in publishing it seeing as it is completely specific to my deployment server (paths, repos etc).
>
> It is literally just the same commands that Capistrano would perform (using `rm`, `ln`, `cp`, `ssh`, `test` etc) with some "glue" stuff to echo some progress info to the console. You could make your own by looking at the output from your normal Capistrano run and just extracting the raw commands.

I still maintain that it's obviously not directly usable by others in other contexts, but I guess it may be instructive of what this kind of script might look like in other set-ups. So here is a copy, with some of the names changed to protect the innocent.

As you can see, if you strip away the comments, the usage, and the "glue" code that does things like processing command line arguments and invoking actions in the right order, the actual operations being performed are very simple indeed.

```shell
#!/bin/sh -e
# Copyright 2009-2010 Wincent Colaiuta. All rights reserved.
#
# Redistribution and use in source and binary forms, with or without
# modification, are permitted provided that the following conditions are met:
#
# 1. Redistributions of source code must retain the above copyright notice,
#    this list of conditions and the following disclaimer.
# 2. Redistributions in binary form must reproduce the above copyright notice,
#    this list of conditions and the following disclaimer in the documentation
#    and/or other materials provided with the distribution.
#
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
# AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
# IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
# ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDERS OR CONTRIBUTORS BE
# LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
# CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
# SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
# INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
# CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
# ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
# POSSIBILITY OF SUCH DAMAGE.

# deploy to:
SERVER=rails.example.com
DEPLOY=/path/to/rails/deploy
ENVIRONMENT=production

# clone source from:
REPO=git.example.com:/path/to/app.git
BRANCH=master

# other config
RAILS_USER=rails_user
MONIT_USER=monit_user

staging_environment_overrides() {
  if [ -z "$STAGING_SERVER" ]; then
    bail 'STAGING_SERVER environment variable not set'
  fi
  SERVER=$STAGING_SERVER
  ENVIRONMENT=staging
}

bail() {
  echo "  failed: $1"
  exit 1
}

warn() {
  echo "  warning: $1"
}

usage() {
  echo "Usage:"
  echo "  $0 [options] command..."
  echo ""
  echo "Deployment commands:"
  echo "        unlock    loosen permissions to enable deployment"
  echo "         check    check dependencies and prerequisites"
  echo "        deploy    clone repo and deploy"
  echo "  migrate_test    migrate test database only"
  echo "          spec    run specs"
  echo "       disable    display a maintenance page"
  echo "       migrate    migrate all databases"
  echo "        switch    update the symlink to point to the latest deployment"
  echo "       restart    restart cluster (changes go live)"
  echo "        enable    remove maintenance page"
  echo "      lockdown    tighten permissions after deployment"
  echo ""
  echo "Other commands:"
  echo "        upload    upload comma-separated files specified in FILES environment variable"
  echo ""
  echo "Options:"
  echo "     --staging    deploy to staging environment (can abbreviate to \"staging\")"
  echo "     --rev=REF    deploy tag (eg. \"0.7\"), branch (eg. \"origin/maint\"), commit (SHA1)"
  echo "                  by default the HEAD of the master branch is deployed"
  echo ""
  echo "Example workflow:"
  echo "     # set an environment variable to indicate the staging server"
  echo "     STAGING_SERVER=ec2-10-20-40-60.compute-1.amazonaws.com"
  echo ""
  echo "     # note how commands can be chained together:"
  echo "     $0 staging unlock check deploy migrate_test spec"
  echo "     $0 staging disable migrate switch restart enable lockdown"
  echo ""
  echo "     # now we repeat in the production environment:"
  echo "     $0 unlock check deploy migrate_test spec"
  echo "     $0 disable migrate switch restart enable lockdown"
  echo ""
  echo "     # the \"prep/finalize\" shorthand encapsulates the above patterns:"
  echo "     $0 staging prep"
  echo "     $0 staging finalize"
  echo "     $0 prep"
  echo "     $0 finalize"
  echo ""
  echo "     # the \"all\" shorthand is the same as \"prep\" then \"finalize\""
  echo "     $0 staging all"
  echo "     $0 all"
  exit
}

#
# main
#

# process arguments
while test $# != 0; do
  case "$1" in
    -h|--help|help)
      usage
      ;;
    --staging|staging|--stage|stage)
      staging_environment_overrides
      ;;
    --rev=*)
      test -z "$REF" || warn 'multiple revision arguments passed'
      REF="${1#--rev=}"
      ;;
    --revision=*)
      test -z "$REF" || warn 'multiple revision arguments passed'
      REF="${1#--revision=}"
      ;;
    unlock)
      DO_UNLOCK=true
      ;;
    wait) # undocumented but helpful to wait for "unlock" to take effect
      DO_WAIT=true
      ;;
    check)
      DO_CHECK=true
      ;;
    deploy)
      DO_DEPLOY=true
      ;;
    migrate_test)
      DO_MIGRATE_TEST=true
      ;;
    spec)
      DO_SPEC=true
      ;;
    disable)
      DO_DISABLE=true
      ;;
    migrate)
      DO_MIGRATE=true
      ;;
    switch)
      DO_SWITCH=true
      ;;
    stop)  # not advertised in usage
      DO_STOP=true
      ;;
    start) # not advertised in usage
      DO_START=true
      ;;
    restart)
      DO_RESTART=true
      ;;
    enable)
      DO_ENABLE=true
      ;;
    lockdown)
      DO_LOCKDOWN=true
      ;;
    upload)
      DO_UPLOAD=true
      ;;
    prep)
      DO_UNLOCK=true
      DO_WAIT=true
      DO_CHECK=true
      DO_DEPLOY=true
      DO_MIGRATE_TEST=true
      DO_SPEC=true
      ;;
    finalize)
      DO_DISABLE=true
      DO_MIGRATE=true
      DO_SWITCH=true
      DO_RESTART=true
      DO_ENABLE=true
      DO_LOCKDOWN=true
      ;;
    all)
      DO_UNLOCK=true
      DO_WAIT=true
      DO_CHECK=true
      DO_DEPLOY=true
      DO_MIGRATE_TEST=true
      DO_SPEC=true
      DO_DISABLE=true
      DO_MIGRATE=true
      DO_SWITCH=true
      DO_RESTART=true
      DO_ENABLE=true
      DO_LOCKDOWN=true
      ;;
    *)
      usage
      ;;
  esac
  shift
done

# make sure the user asked us to at least do something
test -n "$DO_UNLOCK" \
  -o -n "$DO_WAIT" \
  -o -n "$DO_CHECK" \
  -o -n "$DO_DEPLOY" \
  -o -n "$DO_MIGRATE_TEST" \
  -o -n "$DO_SPEC" \
  -o -n "$DO_DISABLE" \
  -o -n "$DO_MIGRATE" \
  -o -n "$DO_SWITCH" \
  -o -n "$DO_STOP" \
  -o -n "$DO_START" \
  -o -n "$DO_RESTART" \
  -o -n "$DO_ENABLE" \
  -o -n "$DO_UPLOAD" \
  -o -n "$DO_LOCKDOWN" || usage

trap 'test -n "$SUCCESS" || echo "  error: aborted"' EXIT

echo "Environment for this session: $ENVIRONMENT"

if [ -n "$DO_UNLOCK" ]; then
   echo "Processing command: unlock"
   ssh $RAILS_USER@$SERVER chsh -s /bin/sh $RAILS_USER
fi

# useful because remote system sometimes won't notice "unlock" immediately
if [ -n "$DO_WAIT" ]; then
  echo "Processing command: wait"
  sleep 15
fi

if [ -n "$DO_CHECK" ]; then
  echo "Processing command: check"
  echo "  checking: JavaScript is correctly minimized"
  COMPRESSOR=/usr/local/bin/closure/compiler.jar
  test -f $COMPRESSOR || bail "compressor not found at $COMPRESSOR"
  test -r $COMPRESSOR || bail "compressor not readable at $COMPRESSOR"
  TMPDIR=$(mktemp -q -d /private/tmp/deploy.XXXXXX) || bail "could not create temporary directory"
  if [ -z "$REF" ]; then
    LOCAL_REF=$BRANCH
  else
    LOCAL_REF=$REF
  fi
  for JS in $(ls public/javascripts/*.max.js); do
    git show $LOCAL_REF:$JS > $TMPDIR/max.js
    git show $LOCAL_REF:${JS/.max.js/.min.js} > $TMPDIR/min.js
    java -jar $COMPRESSOR --js=$TMPDIR/max.js --js_output_file=$TMPDIR/out.js
    diff -q $TMPDIR/min.js $TMPDIR/out.js > /dev/null || bail "$JS is not minimized in $LOCAL_REF"
  done
  echo "  checking: directories exist and are writable"
  ssh $RAILS_USER@$SERVER "sh -c '(test -d $DEPLOY          || (echo \"  failed -d: $DEPLOY\" && exit 1)) && \
                                  (test -d $DEPLOY/shared   || (echo \"  failed -d: $DEPLOY/shared\" && exit 1)) && \
                                  (test -d $DEPLOY/releases || (echo \"  failed -d: $DEPLOY/releases\" && exit 1)) && \
                                  (test -w $DEPLOY          || (echo \"  failed -w: $DEPLOY\" && exit 1)) && \
                                  (test -w $DEPLOY/releases || (echo \"  failed -w: $DEPLOY/releases\" && exit 1))'"
  echo "  checking: executables exist"
  ssh $RAILS_USER@$SERVER "sh -l -c 'which gem git > /dev/null'"
  echo "  checking: gem versions"
  ssh $RAILS_USER@$SERVER "sh -c 'gem specification --version \">= 0.6\"   hpricot > /dev/null && \
                                  gem specification --version \">= 1.0.0\" rack > /dev/null && \
                                  gem specification --version \">= 1.0\" mkdtemp > /dev/null'"
  echo "  checking: local branch vs remote branch"
  git diff --exit-code --quiet $BRANCH origin/$BRANCH || \
    warn "local $BRANCH differs from remote origin/$BRANCH: did you remember to 'git push'?"
  echo "  checking: currently checked out branch"
  CURRENT_BRANCH=$(git symbolic-ref HEAD 2> /dev/null)
  CURRENT_BRANCH=${CURRENT_BRANCH#refs/heads/}
  test "$CURRENT_BRANCH" = "$BRANCH" || \
    warn "currently on branch $CURRENT_BRANCH (expected $BRANCH) -- sure you're working on the right branch?"
fi

if [ -n "$DO_DEPLOY" ]; then
  echo "Processing command: deploy"
  TIMESTAMP=$(date '+%Y%m%d%H%M%S')
  echo "  timestamp: $TIMESTAMP"
  SHARED=$DEPLOY/shared
  CHECKOUT=$DEPLOY/releases/$TIMESTAMP
  if [ -z "$REF" ]; then
    REMOTE_REF=origin/$BRANCH
  else
    REMOTE_REF=$REF
  fi
  ssh $RAILS_USER@$SERVER "sh -l -c '(test ! -e $TIMESTAMP || (echo \"  failed: $CHECKOUT already exists\" && exit 1)) && \
                                      git clone --quiet $REPO $CHECKOUT && \
                                      cd $CHECKOUT && \
                                      git checkout --quiet -b deploy $REMOTE_REF && \
                                      (git rev-parse HEAD > $CHECKOUT/REVISION) && \
                                      rm -rf $CHECKOUT/log \
                                             $CHECKOUT/public/system \
                                             $CHECKOUT/tmp/pids && \
                                      ln -s $SHARED/log    $CHECKOUT/log && \
                                      ln -s $SHARED/system $CHECKOUT/public/system && \
                                      ln -s $SHARED/pids   $CHECKOUT/tmp/pids && \
                                      find $CHECKOUT/public/images \
                                           $CHECKOUT/public/stylesheets \
                                           $CHECKOUT/public/javascripts \
                                           -exec touch {} + && \
                                      ln -s $SHARED/database.yml    $CHECKOUT/config/database.yml && \
                                      ln -s $SHARED/app_config.yml  $CHECKOUT/config/app_config.yml && \
                                      rm -f $DEPLOY/latest && \
                                      ln -s $CHECKOUT $DEPLOY/latest && \
                                      cd $CHECKOUT && \
                                      rake --silent gems:clean && \
                                      rake --silent gems:build && \
                                      rake --silent js:minify:deploy > /dev/null'"
fi

if [ -n "$DO_MIGRATE_TEST" ]; then
  echo "Processing command: migrate_test"
  ssh $RAILS_USER@$SERVER "sh -c 'cd $DEPLOY/latest && rake --silent RAILS_ENV=test db:migrate'"
fi

if [ -n "$DO_SPEC" ]; then
  echo "Processing command: spec"
  ssh $RAILS_USER@$SERVER "sh -c 'cd $DEPLOY/latest && rake --silent RAILS_ENV=test spec'"
fi

if [ -n "$DO_DISABLE" ]; then
  echo "Processing command: disable"
  ssh $RAILS_USER@$SERVER cp $DEPLOY/current/public/maintenance.html \
                             $DEPLOY/shared/system/maintenance.html
fi

if [ -n "$DO_MIGRATE" ]; then
  echo "Processing command: migrate"
  ssh $RAILS_USER@$SERVER "sh -c 'cd $DEPLOY/latest && \
                                  rake --silent RAILS_ENV=test         db:migrate && \
                                  rake --silent RAILS_ENV=development  db:migrate && \
                                  rake --silent RAILS_ENV=migrations   db:migrate'"
fi

if [ -n "$DO_SWITCH" ]; then
  echo "Processing command: switch"
  LATEST=$DEPLOY/latest
  CURRENT=$DEPLOY/current
  ssh $RAILS_USER@$SERVER "sh -c '(test -d $LATEST || (echo \"  failed: no deployment found at $LATEST\" && exit 1)) && \
                                   rm -f $CURRENT && \
                                   ln -s \$(readlink $LATEST) $CURRENT'"
  REVISION=$(ssh $RAILS_USER@$SERVER cat $LATEST/REVISION)
  if [ ! $(git describe --exact-match $REVISION 2> /dev/null) ]; then
    TAG=$(git describe $(git rev-list --tags --max-count=1) | awk -F . '{ printf "%d.%d", $1, $2 + 1}')
    warn "deployed version $REVISION is not yet tagged; tagging now as $TAG"
    git tag -s -m "Deployed $(LANG=en_GB.UTF-8; date '+%d %B %Y')." $TAG
  fi
fi

if [ -n "$DO_STOP" ]; then
  echo "Processing command: stop"
  ssh $RAILS_USER@$SERVER monit stop unicorn
fi

if [ -n "$DO_RESTART" ]; then
  echo "Processing command: restart"
  ssh $RAILS_USER@$SERVER monit restart unicorn
fi

if [ -n "$DO_START" ]; then
  echo "Processing command: start"
  ssh $RAILS_USER@$SERVER monit start unicorn
fi

if [ -n "$DO_ENABLE" ]; then
  echo "Processing command: enable"
  ssh $RAILS_USER@$SERVER rm -f $DEPLOY/shared/system/maintenance.html
fi

if [ -n "$DO_UPLOAD" ]; then
  echo "Processing command: upload"
  test -n "$FILES" || warn "nothing specified in FILES environment variable"
  (IFS=","
  for FILE in $FILES; do
    echo "  file: $FILE"
    if [[ "$FILE" =~ ' ' ]]; then
      warn "\"$FILE\" contains a space; skipping"
    else
      scp $FILE $RAILS_USER@$SERVER:$DEPLOY/current/$FILE
    fi
  done)
fi

if [ -n "$DO_LOCKDOWN" ]; then
  echo "Processing command: lockdown"
  ssh $RAILS_USER@$SERVER chsh -s /sbin/nologin $RAILS_USER
fi

SUCCESS=true
```
