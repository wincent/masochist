---
tags:
---
#!/bin/sh -e
# Copyright 2009-2011 Wincent Colaiuta. All rights reserved.
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
DEPLOY=/data/rails/deploy
ENVIRONMENT=production

# clone source from:
REPO=git.example.com:/home/git/repos/rails.example.com.git
BRANCH=master

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

run() {
  REMOTE_USER=shift
  ssh $REMOTE_USER@$SERVER $@
}

usage() {
  echo "Usage:"
  echo "  $0 [options] command..."
  echo ""
  echo "Deployment commands:"
  echo "        unlock    loosen permissions to enable deployment"
  echo "         check    check dependencies and prerequisites"
  echo "        deploy    clone repo and deploy"
  echo "       disable    display a maintenance page"
  echo "       migrate    migrate all databases"
  echo "        switch    update the symlink to point to the latest deployment"
  echo "       restart    restart cluster (changes go live)"
  echo "        enable    remove maintenance page"
  echo "       summary    print Git commits since the last deployment"
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
  echo "     export STAGING_SERVER=ec2-10-10-0-1.compute-1.amazonaws.com"
  echo ""
  echo "     # note how commands can be chained together:"
  echo "     $0 staging unlock check deploy"
  echo "     $0 staging disable migrate switch restart enable summary lockdown"
  echo ""
  echo "     # now we repeat in the production environment:"
  echo "     $0 unlock check deploy"
  echo "     $0 disable migrate switch restart enable summary lockdown"
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
    summary)
      DO_SUMMARY=true
      ;;
    lock|lockdown)
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
      ;;
    finalize)
      DO_DISABLE=true
      DO_MIGRATE=true
      DO_SWITCH=true
      DO_RESTART=true
      DO_ENABLE=true
      DO_SUMMARY=true
      DO_LOCKDOWN=true
      ;;
    all)
      DO_UNLOCK=true
      DO_WAIT=true
      DO_CHECK=true
      DO_DEPLOY=true
      DO_DISABLE=true
      DO_MIGRATE=true
      DO_SWITCH=true
      DO_RESTART=true
      DO_ENABLE=true
      DO_SUMMARY=true
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
  -o -n "$DO_DISABLE" \
  -o -n "$DO_MIGRATE" \
  -o -n "$DO_SWITCH" \
  -o -n "$DO_STOP" \
  -o -n "$DO_START" \
  -o -n "$DO_RESTART" \
  -o -n "$DO_ENABLE" \
  -o -n "$DO_SUMMARY" \
  -o -n "$DO_UPLOAD" \
  -o -n "$DO_LOCKDOWN" || usage

trap 'test -n "$SUCCESS" || echo "  error: aborted"' EXIT

echo "Environment for this session: $ENVIRONMENT"

if [ -n "$DO_UNLOCK" ]; then
   echo "Processing command: unlock"
   ssh maint@$SERVER sudo chsh -s /bin/sh app > /dev/null
fi

# useful because remote system sometimes won't notice "unlock" immediately
if [ -n "$DO_WAIT" ]; then
  echo "Processing command: wait"
  sleep 15
fi

if [ -n "$DO_CHECK" ]; then
  echo "Processing command: check"
  TMPDIR=$(mktemp -q -d /private/tmp/deploy.XXXXXX) || bail "could not create temporary directory"
  if [ -z "$REF" ]; then
    LOCAL_REF=$BRANCH
  else
    LOCAL_REF=$REF
  fi
  echo "  checking: generated static HTML files up-to-date"
  for HAML in $(ls app/views/public/*.html.haml); do
    git show $LOCAL_REF:$HAML > $TMPDIR/src.html.haml
    STATIC=${HAML%.haml}        # trim extension
    STATIC=${STATIC#app/views/} # trim leading directories
    git show $LOCAL_REF:$STATIC > $TMPDIR/static.html
    script/static $TMPDIR/src.html.haml $TMPDIR/out.html
    diff -q $TMPDIR/out.html $TMPDIR/static.html > /dev/null || bail "static version of $HAML not up-to-date in $LOCAL_REF"
  done
  echo "  checking: directories exist and are writable"
  ssh app@$SERVER "sh -c '(test -d $DEPLOY          || (echo \"  failed -d: $DEPLOY\" && exit 1)) && \
                            (test -d $DEPLOY/shared   || (echo \"  failed -d: $DEPLOY/shared\" && exit 1)) && \
                            (test -d $DEPLOY/releases || (echo \"  failed -d: $DEPLOY/releases\" && exit 1)) && \
                            (test -w $DEPLOY          || (echo \"  failed -w: $DEPLOY\" && exit 1)) && \
                            (test -w $DEPLOY/releases || (echo \"  failed -w: $DEPLOY/releases\" && exit 1))'"
  echo "  checking: executables exist"
  ssh app@$SERVER "sh -l -c 'which gem git > /dev/null'"
  echo "  checking: gem versions"
  ssh app@$SERVER "sh -c 'gem specification --version \"~> 1.0.10\" bundler > /dev/null'"
  echo "  checking: local branch vs remote branch"
  git diff --exit-code --quiet $BRANCH origin/$BRANCH || \
    warn "local $BRANCH differs from remote origin/$BRANCH -- did you remember to 'git push'?"
  echo "  checking: currently checked out branch"
  CURRENT_BRANCH=$(git symbolic-ref HEAD 2> /dev/null)
  CURRENT_BRANCH=${CURRENT_BRANCH#refs/heads/}
  test "$CURRENT_BRANCH" = "$BRANCH" || \
    warn "currently on branch $CURRENT_BRANCH (expected $BRANCH) -- sure you're working on the right branch?"
  echo "  checking: schema is up-to-date"
  env SCHEMA=$TMPDIR/schema.HEAD.rb bin/rake --silent db:schema:dump
  git show $LOCAL_REF:db/schema.rb > $TMPDIR/schema.REF.rb
  diff -q -b $TMPDIR/schema.REF.rb $TMPDIR/schema.HEAD.rb > /dev/null || \
    warn "current schema does not match $LOCAL_REF:db/schema.rb -- did you remember to run rake 'db:schema:dump' and check in the result?"
  echo "  checking: worktree is clean"
  git diff --quiet || \
    warn "worktree has uncommitted changes -- did the specs really pass against what you're going to deploy?"
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
  ssh app@$SERVER "sh -l -c '(test ! -e $TIMESTAMP || (echo \"  failed: $CHECKOUT already exists\" && exit 1)) && \
                                git clone --quiet $REPO $CHECKOUT && \
                                cd $CHECKOUT && \
                                git checkout --quiet -b deploy $REMOTE_REF > /dev/null && \
                                git submodule --quiet init && \
                                git submodule --quiet update > /dev/null && \
                                (git rev-parse HEAD > $CHECKOUT/REVISION) && \
                                rm -rf $CHECKOUT/log \
                                       $CHECKOUT/public/assets \
                                       $CHECKOUT/public/system \
                                       $CHECKOUT/tmp/pids && \
                                ln -s $SHARED/log             $CHECKOUT/log && \
                                ln -s $SHARED/assets          $CHECKOUT/public/assets && \
                                ln -s $SHARED/system          $CHECKOUT/public/system && \
                                ln -s $SHARED/pids            $CHECKOUT/tmp/pids && \
                                ln -s $SHARED/database.yml    $CHECKOUT/config/database.yml && \
                                ln -s $SHARED/app_config.yml  $CHECKOUT/config/app_config.yml && \
                                rm -f $DEPLOY/latest && \
                                ln -s $CHECKOUT $DEPLOY/latest && \
                                cd $CHECKOUT && \
                                bundle install --quiet --deployment --local --binstubs \
                                       --path $DEPLOY/shared/bundle \
                                       --without test && \
                                bin/rake --silent assets:precompile &> /dev/null'"
fi

if [ -n "$DO_DISABLE" ]; then
  echo "Processing command: disable"
  ssh app@$SERVER cp $DEPLOY/current/public/maintenance.html \
                       $DEPLOY/shared/system/maintenance.html
fi

if [ -n "$DO_MIGRATE" ]; then
  # we migrate all databases, not just production, as a sanity check
  echo "Processing command: migrate"
  ssh app@$SERVER "sh -c 'cd $DEPLOY/latest && \
                            bin/rake --silent RAILS_ENV=test         db:migrate && \
                            bin/rake --silent RAILS_ENV=development  db:migrate && \
                            bin/rake --silent RAILS_ENV=migrations   db:migrate && \
                            bin/rake --silent RAILS_ENV=production   db:schema:dump && \
                            (git diff --quiet --ignore-space-change -- db/schema.rb || \
                            (echo \"  failed: db/schema.rb out of sync with checked-in version\" && exit 1))'"
fi

if [ -n "$DO_SWITCH" ]; then
  echo "Processing command: switch"
  LATEST=$DEPLOY/latest
  CURRENT=$DEPLOY/current
  ssh app@$SERVER "sh -c '(test -d $LATEST || (echo \"  failed: no deployment found at $LATEST\" && exit 1)) && \
                             rm -f $CURRENT && \
                             ln -s \$(readlink $LATEST) $CURRENT'"
  REVISION=$(ssh app@$SERVER cat $LATEST/REVISION)
  if [ ! $(git describe --exact-match $REVISION 2> /dev/null) ]; then
    TAG=$(git describe $(git rev-list --tags --max-count=1) | awk -F . '{ printf "%d.%d", $1, $2 + 1}')
    if [ $ENVIRONMENT = staging ]; then
      warn "deployed version $REVISION is not yet tagged; would tag now as $TAG"
      echo "  skipping: no tagging is performed in the staging environment"
    else
      warn "deployed version $REVISION is not yet tagged; tagging now as $TAG"
      git tag -s -m "Deployed $(LANG=en_GB.UTF-8; date '+%d %B %Y')." $TAG $REVISION
    fi
  fi
fi

if [ -n "$DO_STOP" ]; then
  echo "Processing command: stop"
  ssh maint@$SERVER sudo monit stop unicorn
fi

if [ -n "$DO_RESTART" ]; then
  # TODO: make this a zero-downtime restart using USR2 and friends
  echo "Processing command: restart"
  ssh maint@$SERVER sudo monit restart unicorn
fi

if [ -n "$DO_START" ]; then
  echo "Processing command: start"
  ssh maint@$SERVER sudo monit start unicorn
fi

if [ -n "$DO_ENABLE" ]; then
  echo "Processing command: enable"
  ssh app@$SERVER rm -f $DEPLOY/shared/system/maintenance.html
fi

if [ -n "$DO_SUMMARY" ]; then
  echo "Processing command: summary"
  REVISION=$(ssh app@$SERVER cat $DEPLOY/latest/REVISION)
  if [ $(git describe --exact-match $REVISION 2> /dev/null) ]; then
    # common case: latest deployed revision is tagged
    LAST_TAG=$(git for-each-ref --sort=-taggerdate --format='%(refname:short)' --count=2 refs/tags | tail -1)
  else
    # rare case (probably only staging): latest deployed revision is not tagged
    LAST_TAG=$(git describe $(git rev-list --tags --max-count=1))
  fi
  CURRENT_TAG=$(git describe $REVISION)
  echo "----- start: changes from $LAST_TAG..$CURRENT_TAG -----"
  PAGER=cat git log --oneline --no-color --no-decorate --reverse $LAST_TAG..$REVISION
  echo "-----   end: changes from $LAST_TAG..$CURRENT_TAG -----"
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
      scp $FILE app@$SERVER:$DEPLOY/current/$FILE
    fi
  done)
fi

if [ -n "$DO_LOCKDOWN" ]; then
  echo "Processing command: lockdown"
  ssh maint@$SERVER sudo chsh -s /sbin/nologin app > /dev/null
fi

SUCCESS=true
