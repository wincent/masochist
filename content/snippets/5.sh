---
title: New test failure under Git v1.7.3-rc2 on Mac OS X 10.6.4
tags: git snippets
---

$ sh -x t7003-filter-branch.sh 
+ test_description='git filter-branch'
+ . ./test-lib.sh
++ case "$GIT_TEST_TEE_STARTED, $* " in
++ ORIGINAL_TERM=xterm-color
++ LANG=C
++ LC_ALL=C
++ PAGER=cat
++ TZ=UTC
++ TERM=dumb
++ export LANG LC_ALL PAGER TERM TZ
++ EDITOR=:
++ unset VISUAL
++ unset GIT_EDITOR
++ unset AUTHOR_DATE
++ unset AUTHOR_EMAIL
++ unset AUTHOR_NAME
++ unset COMMIT_AUTHOR_EMAIL
++ unset COMMIT_AUTHOR_NAME
++ unset EMAIL
++ unset GIT_ALTERNATE_OBJECT_DIRECTORIES
++ unset GIT_AUTHOR_DATE
++ GIT_AUTHOR_EMAIL=author@example.com
++ GIT_AUTHOR_NAME='A U Thor'
++ unset GIT_COMMITTER_DATE
++ GIT_COMMITTER_EMAIL=committer@example.com
++ GIT_COMMITTER_NAME='C O Mitter'
++ unset GIT_DIFF_OPTS
++ unset GIT_DIR
++ unset GIT_WORK_TREE
++ unset GIT_EXTERNAL_DIFF
++ unset GIT_INDEX_FILE
++ unset GIT_OBJECT_DIRECTORY
++ unset GIT_CEILING_DIRECTORIES
++ unset SHA1_FILE_DIRECTORIES
++ unset SHA1_FILE_DIRECTORY
++ unset GIT_NOTES_REF
++ unset GIT_NOTES_DISPLAY_REF
++ unset GIT_NOTES_REWRITE_REF
++ unset GIT_NOTES_REWRITE_MODE
++ GIT_MERGE_VERBOSITY=5
++ export GIT_MERGE_VERBOSITY
++ export GIT_AUTHOR_EMAIL GIT_AUTHOR_NAME
++ export GIT_COMMITTER_EMAIL GIT_COMMITTER_NAME
++ export EDITOR
++ unset CDPATH
++ unset GREP_OPTIONS
++ case $(echo $GIT_TRACE |tr "[A-Z]" "[a-z]") in
+++ echo
+++ tr '[A-Z]' '[a-z]'
++ _x05='[0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f]'
++ _x40='[0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f]'
++ '[' xxterm-color '!=' xdumb ']'
++ TERM=xterm-color
++ export TERM
++ '[' -t 1 ']'
++ tput bold
++ tput setaf 1
++ tput sgr0
++ color=t
++ test 0 -ne 0
++ test -n t
++ test 'git filter-branch' '!=' ''
++ test '' = t
++ exec
++ test '' = t
++ exec
++ test_failure=0
++ test_count=0
++ test_fixed=0
++ test_broken=0
++ test_success=0
++ test_external_has_tap=0
++ GIT_EXIT_OK=
++ trap die EXIT
++ satisfied=' '
++ test -z ''
+++ pwd
++ TEST_DIRECTORY=/Users/wincent/trabajo/vendor/git/git.git/t
++ GIT_BUILD_DIR=/Users/wincent/trabajo/vendor/git/git.git/t/..
++ test -n ''
++ test -n ''
++ git_bin_dir=/Users/wincent/trabajo/vendor/git/git.git/t/../bin-wrappers
++ test -x /Users/wincent/trabajo/vendor/git/git.git/t/../bin-wrappers/git
++ PATH=/Users/wincent/trabajo/vendor/git/git.git/t/../bin-wrappers:/Users/wincent/.rvm/bin::/Users/wincent/.bundle/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/usr/texbin:/usr/X11/bin:/usr/local/sbin:/Users/wincent/bin:/usr/local/mysql/bin:/usr/local/jruby/bin:/Developer/Tools:/Users/wincent/bin/ec2-api-tools-1.3-46266/bin
++ GIT_EXEC_PATH=/Users/wincent/trabajo/vendor/git/git.git/t/..
++ test -n ''
++ GIT_TEMPLATE_DIR=/Users/wincent/trabajo/vendor/git/git.git/t/../templates/blt
++ unset GIT_CONFIG
++ GIT_CONFIG_NOSYSTEM=1
++ GIT_CONFIG_NOGLOBAL=1
++ export PATH GIT_EXEC_PATH GIT_TEMPLATE_DIR GIT_CONFIG_NOSYSTEM GIT_CONFIG_NOGLOBAL
++ . /Users/wincent/trabajo/vendor/git/git.git/t/../GIT-BUILD-OPTIONS
+++ SHELL_PATH=/bin/sh
+++ PERL_PATH=/usr/bin/perl
+++ DIFF=diff
+++ PYTHON_PATH=/usr/bin/python
+++ TAR=tar
+++ NO_CURL=
+++ NO_PERL=
+++ NO_PYTHON=
++ test -z ''
++ test -n ''
++ GIT_TEST_CMP='diff -u'
++ GITPERLLIB=/Users/wincent/trabajo/vendor/git/git.git/t/../perl/blib/lib:/Users/wincent/trabajo/vendor/git/git.git/t/../perl/blib/arch/auto/Git
++ export GITPERLLIB
++ test -d /Users/wincent/trabajo/vendor/git/git.git/t/../templates/blt
++ test -z ''
++ test -z ''
++ GITPYTHONLIB=/Users/wincent/trabajo/vendor/git/git.git/t/../git_remote_helpers/build/lib
++ export GITPYTHONLIB
++ test -d /Users/wincent/trabajo/vendor/git/git.git/t/../git_remote_helpers/build
++ test -x /Users/wincent/trabajo/vendor/git/git.git/t/../test-chmtime
+++ basename t7003-filter-branch.sh .sh
++ test='trash directory.t7003-filter-branch'
++ test -n ''
++ case "$test" in
++ TRASH_DIRECTORY='/Users/wincent/trabajo/vendor/git/git.git/t/trash directory.t7003-filter-branch'
++ test '!' -z ''
++ remove_trash='/Users/wincent/trabajo/vendor/git/git.git/t/trash directory.t7003-filter-branch'
++ rm -fr 'trash directory.t7003-filter-branch'
++ test_create_repo 'trash directory.t7003-filter-branch'
++ test 1 = 1
++ repo='trash directory.t7003-filter-branch'
++ mkdir -p 'trash directory.t7003-filter-branch'
++ cd 'trash directory.t7003-filter-branch'
++ /Users/wincent/trabajo/vendor/git/git.git/t/../git-init --template=/Users/wincent/trabajo/vendor/git/git.git/t/../templates/blt/
++ mv .git/hooks .git/hooks-disabled
++ cd -P 'trash directory.t7003-filter-branch'
+++ pwd
++ HOME='/Users/wincent/trabajo/vendor/git/git.git/t/trash directory.t7003-filter-branch'
++ export HOME
++ this_test=t7003-filter-branch.sh
++ this_test=t7003
++ case $(uname -s) in
+++ uname -s
++ test_set_prereq POSIXPERM
++ satisfied=' POSIXPERM '
++ test_set_prereq BSLASHPSPEC
++ satisfied=' POSIXPERM BSLASHPSPEC '
++ test_set_prereq EXECKEEPSPID
++ satisfied=' POSIXPERM BSLASHPSPEC EXECKEEPSPID '
++ test -z ''
++ test_set_prereq PERL
++ satisfied=' POSIXPERM BSLASHPSPEC EXECKEEPSPID PERL '
++ test -z ''
++ test_set_prereq PYTHON
++ satisfied=' POSIXPERM BSLASHPSPEC EXECKEEPSPID PERL PYTHON '
++ ln -s x y
++ test -h y
++ test_set_prereq SYMLINKS
++ satisfied=' POSIXPERM BSLASHPSPEC EXECKEEPSPID PERL PYTHON SYMLINKS '
++ rm -f y
++ test -w /
++ test_set_prereq SANITY
++ satisfied=' POSIXPERM BSLASHPSPEC EXECKEEPSPID PERL PYTHON SYMLINKS SANITY '
+ test_expect_success setup '
	make_commit A
	make_commit B
	git checkout -b branch B
	make_commit D
	mkdir dir
	make_commit dir/D
	make_commit E
	git checkout master
	make_commit C
	git checkout branch
	git merge C
	git tag F
	make_commit G
	make_commit H
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip setup '
	make_commit A
	make_commit B
	git checkout -b branch B
	make_commit D
	mkdir dir
	make_commit dir/D
	make_commit E
	git checkout master
	make_commit C
	git checkout branch
	git merge C
	git tag F
	make_commit G
	make_commit H
'
+ test_count=1
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 
	make_commit A
	make_commit B
	git checkout -b branch B
	make_commit D
	mkdir dir
	make_commit dir/D
	make_commit E
	git checkout master
	make_commit C
	git checkout branch
	git merge C
	git tag F
	make_commit G
	make_commit H
'
+ say_color info 'expecting success: 
	make_commit A
	make_commit B
	git checkout -b branch B
	make_commit D
	mkdir dir
	make_commit dir/D
	make_commit E
	git checkout master
	make_commit C
	git checkout branch
	git merge C
	git tag F
	make_commit G
	make_commit H
'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 
	make_commit A
	make_commit B
	git checkout -b branch B
	make_commit D
	mkdir dir
	make_commit dir/D
	make_commit E
	git checkout master
	make_commit C
	git checkout branch
	git merge C
	git tag F
	make_commit G
	make_commit H
'
+ tput sgr0
+ echo
+ test_run_ '
	make_commit A
	make_commit B
	git checkout -b branch B
	make_commit D
	mkdir dir
	make_commit dir/D
	make_commit E
	git checkout master
	make_commit C
	git checkout branch
	git merge C
	git tag F
	make_commit G
	make_commit H
'
+ test_cleanup=:
+ eval '
	make_commit A
	make_commit B
	git checkout -b branch B
	make_commit D
	mkdir dir
	make_commit dir/D
	make_commit E
	git checkout master
	make_commit C
	git checkout branch
	git merge C
	git tag F
	make_commit G
	make_commit H
'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ setup
+ test_success=1
+ say_color '' 'ok 1 - setup'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 1 - setup'
ok 1 - setup+ tput sgr0
+ echo

+ echo ''
++ git rev-parse H
+ H=476c4839280c219c2317376b661d9d95c1727fc3
+ test_expect_success 'rewrite identically' '
	git filter-branch branch
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip 'rewrite identically' '
	git filter-branch branch
'
+ test_count=2
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 
	git filter-branch branch
'
+ say_color info 'expecting success: 
	git filter-branch branch
'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 
	git filter-branch branch
'
+ tput sgr0
+ echo
+ test_run_ '
	git filter-branch branch
'
+ test_cleanup=:
+ eval '
	git filter-branch branch
'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ 'rewrite identically'
+ test_success=2
+ say_color '' 'ok 2 - rewrite identically'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 2 - rewrite identically'
ok 2 - rewrite identically+ tput sgr0
+ echo

+ echo ''
+ test_expect_success 'result is really identical' '
	test $H = $(git rev-parse HEAD)
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip 'result is really identical' '
	test $H = $(git rev-parse HEAD)
'
+ test_count=3
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 
	test $H = $(git rev-parse HEAD)
'
+ say_color info 'expecting success: 
	test $H = $(git rev-parse HEAD)
'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 
	test $H = $(git rev-parse HEAD)
'
+ tput sgr0
+ echo
+ test_run_ '
	test $H = $(git rev-parse HEAD)
'
+ test_cleanup=:
+ eval '
	test $H = $(git rev-parse HEAD)
'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ 'result is really identical'
+ test_success=3
+ say_color '' 'ok 3 - result is really identical'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 3 - result is really identical'
ok 3 - result is really identical+ tput sgr0
+ echo

+ echo ''
+ test_expect_success 'rewrite bare repository identically' '
	(git config core.bare true && cd .git &&
	 git filter-branch branch > filter-output 2>&1 &&
	! fgrep fatal filter-output)
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip 'rewrite bare repository identically' '
	(git config core.bare true && cd .git &&
	 git filter-branch branch > filter-output 2>&1 &&
	! fgrep fatal filter-output)
'
+ test_count=4
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 
	(git config core.bare true && cd .git &&
	 git filter-branch branch > filter-output 2>&1 &&
	! fgrep fatal filter-output)
'
+ say_color info 'expecting success: 
	(git config core.bare true && cd .git &&
	 git filter-branch branch > filter-output 2>&1 &&
	! fgrep fatal filter-output)
'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 
	(git config core.bare true && cd .git &&
	 git filter-branch branch > filter-output 2>&1 &&
	! fgrep fatal filter-output)
'
+ tput sgr0
+ echo
+ test_run_ '
	(git config core.bare true && cd .git &&
	 git filter-branch branch > filter-output 2>&1 &&
	! fgrep fatal filter-output)
'
+ test_cleanup=:
+ eval '
	(git config core.bare true && cd .git &&
	 git filter-branch branch > filter-output 2>&1 &&
	! fgrep fatal filter-output)
'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ 'rewrite bare repository identically'
+ test_success=4
+ say_color '' 'ok 4 - rewrite bare repository identically'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 4 - rewrite bare repository identically'
ok 4 - rewrite bare repository identically+ tput sgr0
+ echo

+ echo ''
+ git config core.bare false
+ test_expect_success 'result is really identical' '
	test $H = $(git rev-parse HEAD)
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip 'result is really identical' '
	test $H = $(git rev-parse HEAD)
'
+ test_count=5
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 
	test $H = $(git rev-parse HEAD)
'
+ say_color info 'expecting success: 
	test $H = $(git rev-parse HEAD)
'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 
	test $H = $(git rev-parse HEAD)
'
+ tput sgr0
+ echo
+ test_run_ '
	test $H = $(git rev-parse HEAD)
'
+ test_cleanup=:
+ eval '
	test $H = $(git rev-parse HEAD)
'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ 'result is really identical'
+ test_success=5
+ say_color '' 'ok 5 - result is really identical'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 5 - result is really identical'
ok 5 - result is really identical+ tput sgr0
+ echo

+ echo ''
++ pwd
+ TRASHDIR='/Users/wincent/trabajo/vendor/git/git.git/t/trash directory.t7003-filter-branch'
+ test_expect_success 'correct GIT_DIR while using -d' '
	mkdir drepo &&
	( cd drepo &&
	git init &&
	test_commit drepo &&
	git filter-branch -d "$TRASHDIR/dfoo" \
		--index-filter "cp \"$TRASHDIR\"/dfoo/backup-refs \"$TRASHDIR\"" \
	) &&
	grep drepo "$TRASHDIR/backup-refs"
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip 'correct GIT_DIR while using -d' '
	mkdir drepo &&
	( cd drepo &&
	git init &&
	test_commit drepo &&
	git filter-branch -d "$TRASHDIR/dfoo" \
		--index-filter "cp \"$TRASHDIR\"/dfoo/backup-refs \"$TRASHDIR\"" \
	) &&
	grep drepo "$TRASHDIR/backup-refs"
'
+ test_count=6
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 
	mkdir drepo &&
	( cd drepo &&
	git init &&
	test_commit drepo &&
	git filter-branch -d "$TRASHDIR/dfoo" \
		--index-filter "cp \"$TRASHDIR\"/dfoo/backup-refs \"$TRASHDIR\"" \
	) &&
	grep drepo "$TRASHDIR/backup-refs"
'
+ say_color info 'expecting success: 
	mkdir drepo &&
	( cd drepo &&
	git init &&
	test_commit drepo &&
	git filter-branch -d "$TRASHDIR/dfoo" \
		--index-filter "cp \"$TRASHDIR\"/dfoo/backup-refs \"$TRASHDIR\"" \
	) &&
	grep drepo "$TRASHDIR/backup-refs"
'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 
	mkdir drepo &&
	( cd drepo &&
	git init &&
	test_commit drepo &&
	git filter-branch -d "$TRASHDIR/dfoo" \
		--index-filter "cp \"$TRASHDIR\"/dfoo/backup-refs \"$TRASHDIR\"" \
	) &&
	grep drepo "$TRASHDIR/backup-refs"
'
+ tput sgr0
+ echo
+ test_run_ '
	mkdir drepo &&
	( cd drepo &&
	git init &&
	test_commit drepo &&
	git filter-branch -d "$TRASHDIR/dfoo" \
		--index-filter "cp \"$TRASHDIR\"/dfoo/backup-refs \"$TRASHDIR\"" \
	) &&
	grep drepo "$TRASHDIR/backup-refs"
'
+ test_cleanup=:
+ eval '
	mkdir drepo &&
	( cd drepo &&
	git init &&
	test_commit drepo &&
	git filter-branch -d "$TRASHDIR/dfoo" \
		--index-filter "cp \"$TRASHDIR\"/dfoo/backup-refs \"$TRASHDIR\"" \
	) &&
	grep drepo "$TRASHDIR/backup-refs"
'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ 'correct GIT_DIR while using -d'
+ test_success=6
+ say_color '' 'ok 6 - correct GIT_DIR while using -d'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 6 - correct GIT_DIR while using -d'
ok 6 - correct GIT_DIR while using -d+ tput sgr0
+ echo

+ echo ''
+ test_expect_success 'Fail if commit filter fails' '
	test_must_fail git filter-branch -f --commit-filter "exit 1" HEAD
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip 'Fail if commit filter fails' '
	test_must_fail git filter-branch -f --commit-filter "exit 1" HEAD
'
+ test_count=7
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 
	test_must_fail git filter-branch -f --commit-filter "exit 1" HEAD
'
+ say_color info 'expecting success: 
	test_must_fail git filter-branch -f --commit-filter "exit 1" HEAD
'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 
	test_must_fail git filter-branch -f --commit-filter "exit 1" HEAD
'
+ tput sgr0
+ echo
+ test_run_ '
	test_must_fail git filter-branch -f --commit-filter "exit 1" HEAD
'
+ test_cleanup=:
+ eval '
	test_must_fail git filter-branch -f --commit-filter "exit 1" HEAD
'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ 'Fail if commit filter fails'
+ test_success=7
+ say_color '' 'ok 7 - Fail if commit filter fails'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 7 - Fail if commit filter fails'
ok 7 - Fail if commit filter fails+ tput sgr0
+ echo

+ echo ''
+ test_expect_success 'rewrite, renaming a specific file' '
	git filter-branch -f --tree-filter "mv d doh || :" HEAD
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip 'rewrite, renaming a specific file' '
	git filter-branch -f --tree-filter "mv d doh || :" HEAD
'
+ test_count=8
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 
	git filter-branch -f --tree-filter "mv d doh || :" HEAD
'
+ say_color info 'expecting success: 
	git filter-branch -f --tree-filter "mv d doh || :" HEAD
'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 
	git filter-branch -f --tree-filter "mv d doh || :" HEAD
'
+ tput sgr0
+ echo
+ test_run_ '
	git filter-branch -f --tree-filter "mv d doh || :" HEAD
'
+ test_cleanup=:
+ eval '
	git filter-branch -f --tree-filter "mv d doh || :" HEAD
'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ 'rewrite, renaming a specific file'
+ test_success=8
+ say_color '' 'ok 8 - rewrite, renaming a specific file'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 8 - rewrite, renaming a specific file'
ok 8 - rewrite, renaming a specific file+ tput sgr0
+ echo

+ echo ''
+ test_expect_success 'test that the file was renamed' '
	test d = "$(git show HEAD:doh --)" &&
	! test -f d &&
	test -f doh &&
	test d = "$(cat doh)"
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip 'test that the file was renamed' '
	test d = "$(git show HEAD:doh --)" &&
	! test -f d &&
	test -f doh &&
	test d = "$(cat doh)"
'
+ test_count=9
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 
	test d = "$(git show HEAD:doh --)" &&
	! test -f d &&
	test -f doh &&
	test d = "$(cat doh)"
'
+ say_color info 'expecting success: 
	test d = "$(git show HEAD:doh --)" &&
	! test -f d &&
	test -f doh &&
	test d = "$(cat doh)"
'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 
	test d = "$(git show HEAD:doh --)" &&
	! test -f d &&
	test -f doh &&
	test d = "$(cat doh)"
'
+ tput sgr0
+ echo
+ test_run_ '
	test d = "$(git show HEAD:doh --)" &&
	! test -f d &&
	test -f doh &&
	test d = "$(cat doh)"
'
+ test_cleanup=:
+ eval '
	test d = "$(git show HEAD:doh --)" &&
	! test -f d &&
	test -f doh &&
	test d = "$(cat doh)"
'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ 'test that the file was renamed'
+ test_success=9
+ say_color '' 'ok 9 - test that the file was renamed'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 9 - test that the file was renamed'
ok 9 - test that the file was renamed+ tput sgr0
+ echo

+ echo ''
+ test_expect_success 'rewrite, renaming a specific directory' '
	git filter-branch -f --tree-filter "mv dir diroh || :" HEAD
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip 'rewrite, renaming a specific directory' '
	git filter-branch -f --tree-filter "mv dir diroh || :" HEAD
'
+ test_count=10
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 
	git filter-branch -f --tree-filter "mv dir diroh || :" HEAD
'
+ say_color info 'expecting success: 
	git filter-branch -f --tree-filter "mv dir diroh || :" HEAD
'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 
	git filter-branch -f --tree-filter "mv dir diroh || :" HEAD
'
+ tput sgr0
+ echo
+ test_run_ '
	git filter-branch -f --tree-filter "mv dir diroh || :" HEAD
'
+ test_cleanup=:
+ eval '
	git filter-branch -f --tree-filter "mv dir diroh || :" HEAD
'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ 'rewrite, renaming a specific directory'
+ test_success=10
+ say_color '' 'ok 10 - rewrite, renaming a specific directory'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 10 - rewrite, renaming a specific directory'
ok 10 - rewrite, renaming a specific directory+ tput sgr0
+ echo

+ echo ''
+ test_expect_success 'test that the directory was renamed' '
	test dir/d = "$(git show HEAD:diroh/d --)" &&
	! test -d dir &&
	test -d diroh &&
	! test -d diroh/dir &&
	test -f diroh/d &&
	test dir/d = "$(cat diroh/d)"
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip 'test that the directory was renamed' '
	test dir/d = "$(git show HEAD:diroh/d --)" &&
	! test -d dir &&
	test -d diroh &&
	! test -d diroh/dir &&
	test -f diroh/d &&
	test dir/d = "$(cat diroh/d)"
'
+ test_count=11
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 
	test dir/d = "$(git show HEAD:diroh/d --)" &&
	! test -d dir &&
	test -d diroh &&
	! test -d diroh/dir &&
	test -f diroh/d &&
	test dir/d = "$(cat diroh/d)"
'
+ say_color info 'expecting success: 
	test dir/d = "$(git show HEAD:diroh/d --)" &&
	! test -d dir &&
	test -d diroh &&
	! test -d diroh/dir &&
	test -f diroh/d &&
	test dir/d = "$(cat diroh/d)"
'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 
	test dir/d = "$(git show HEAD:diroh/d --)" &&
	! test -d dir &&
	test -d diroh &&
	! test -d diroh/dir &&
	test -f diroh/d &&
	test dir/d = "$(cat diroh/d)"
'
+ tput sgr0
+ echo
+ test_run_ '
	test dir/d = "$(git show HEAD:diroh/d --)" &&
	! test -d dir &&
	test -d diroh &&
	! test -d diroh/dir &&
	test -f diroh/d &&
	test dir/d = "$(cat diroh/d)"
'
+ test_cleanup=:
+ eval '
	test dir/d = "$(git show HEAD:diroh/d --)" &&
	! test -d dir &&
	test -d diroh &&
	! test -d diroh/dir &&
	test -f diroh/d &&
	test dir/d = "$(cat diroh/d)"
'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ 'test that the directory was renamed'
+ test_success=11
+ say_color '' 'ok 11 - test that the directory was renamed'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 11 - test that the directory was renamed'
ok 11 - test that the directory was renamed+ tput sgr0
+ echo

+ echo ''
+ git tag oldD HEAD~4
+ test_expect_success 'rewrite one branch, keeping a side branch' '
	git branch modD oldD &&
	git filter-branch -f --tree-filter "mv b boh || :" D..modD
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip 'rewrite one branch, keeping a side branch' '
	git branch modD oldD &&
	git filter-branch -f --tree-filter "mv b boh || :" D..modD
'
+ test_count=12
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 
	git branch modD oldD &&
	git filter-branch -f --tree-filter "mv b boh || :" D..modD
'
+ say_color info 'expecting success: 
	git branch modD oldD &&
	git filter-branch -f --tree-filter "mv b boh || :" D..modD
'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 
	git branch modD oldD &&
	git filter-branch -f --tree-filter "mv b boh || :" D..modD
'
+ tput sgr0
+ echo
+ test_run_ '
	git branch modD oldD &&
	git filter-branch -f --tree-filter "mv b boh || :" D..modD
'
+ test_cleanup=:
+ eval '
	git branch modD oldD &&
	git filter-branch -f --tree-filter "mv b boh || :" D..modD
'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ 'rewrite one branch, keeping a side branch'
+ test_success=12
+ say_color '' 'ok 12 - rewrite one branch, keeping a side branch'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 12 - rewrite one branch, keeping a side branch'
ok 12 - rewrite one branch, keeping a side branch+ tput sgr0
+ echo

+ echo ''
+ test_expect_success 'common ancestor is still common (unchanged)' '
	test "$(git merge-base modD D)" = "$(git rev-parse B)"
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip 'common ancestor is still common (unchanged)' '
	test "$(git merge-base modD D)" = "$(git rev-parse B)"
'
+ test_count=13
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 
	test "$(git merge-base modD D)" = "$(git rev-parse B)"
'
+ say_color info 'expecting success: 
	test "$(git merge-base modD D)" = "$(git rev-parse B)"
'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 
	test "$(git merge-base modD D)" = "$(git rev-parse B)"
'
+ tput sgr0
+ echo
+ test_run_ '
	test "$(git merge-base modD D)" = "$(git rev-parse B)"
'
+ test_cleanup=:
+ eval '
	test "$(git merge-base modD D)" = "$(git rev-parse B)"
'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ 'common ancestor is still common (unchanged)'
+ test_success=13
+ say_color '' 'ok 13 - common ancestor is still common (unchanged)'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 13 - common ancestor is still common (unchanged)'
ok 13 - common ancestor is still common (unchanged)+ tput sgr0
+ echo

+ echo ''
+ test_expect_success 'filter subdirectory only' '
	mkdir subdir &&
	touch subdir/new &&
	git add subdir/new &&
	test_tick &&
	git commit -m "subdir" &&
	echo H > a &&
	test_tick &&
	git commit -m "not subdir" a &&
	echo A > subdir/new &&
	test_tick &&
	git commit -m "again subdir" subdir/new &&
	git rm a &&
	test_tick &&
	git commit -m "again not subdir" &&
	git branch sub &&
	git branch sub-earlier HEAD~2 &&
	git filter-branch -f --subdirectory-filter subdir \
		refs/heads/sub refs/heads/sub-earlier
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip 'filter subdirectory only' '
	mkdir subdir &&
	touch subdir/new &&
	git add subdir/new &&
	test_tick &&
	git commit -m "subdir" &&
	echo H > a &&
	test_tick &&
	git commit -m "not subdir" a &&
	echo A > subdir/new &&
	test_tick &&
	git commit -m "again subdir" subdir/new &&
	git rm a &&
	test_tick &&
	git commit -m "again not subdir" &&
	git branch sub &&
	git branch sub-earlier HEAD~2 &&
	git filter-branch -f --subdirectory-filter subdir \
		refs/heads/sub refs/heads/sub-earlier
'
+ test_count=14
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 
	mkdir subdir &&
	touch subdir/new &&
	git add subdir/new &&
	test_tick &&
	git commit -m "subdir" &&
	echo H > a &&
	test_tick &&
	git commit -m "not subdir" a &&
	echo A > subdir/new &&
	test_tick &&
	git commit -m "again subdir" subdir/new &&
	git rm a &&
	test_tick &&
	git commit -m "again not subdir" &&
	git branch sub &&
	git branch sub-earlier HEAD~2 &&
	git filter-branch -f --subdirectory-filter subdir \
		refs/heads/sub refs/heads/sub-earlier
'
+ say_color info 'expecting success: 
	mkdir subdir &&
	touch subdir/new &&
	git add subdir/new &&
	test_tick &&
	git commit -m "subdir" &&
	echo H > a &&
	test_tick &&
	git commit -m "not subdir" a &&
	echo A > subdir/new &&
	test_tick &&
	git commit -m "again subdir" subdir/new &&
	git rm a &&
	test_tick &&
	git commit -m "again not subdir" &&
	git branch sub &&
	git branch sub-earlier HEAD~2 &&
	git filter-branch -f --subdirectory-filter subdir \
		refs/heads/sub refs/heads/sub-earlier
'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 
	mkdir subdir &&
	touch subdir/new &&
	git add subdir/new &&
	test_tick &&
	git commit -m "subdir" &&
	echo H > a &&
	test_tick &&
	git commit -m "not subdir" a &&
	echo A > subdir/new &&
	test_tick &&
	git commit -m "again subdir" subdir/new &&
	git rm a &&
	test_tick &&
	git commit -m "again not subdir" &&
	git branch sub &&
	git branch sub-earlier HEAD~2 &&
	git filter-branch -f --subdirectory-filter subdir \
		refs/heads/sub refs/heads/sub-earlier
'
+ tput sgr0
+ echo
+ test_run_ '
	mkdir subdir &&
	touch subdir/new &&
	git add subdir/new &&
	test_tick &&
	git commit -m "subdir" &&
	echo H > a &&
	test_tick &&
	git commit -m "not subdir" a &&
	echo A > subdir/new &&
	test_tick &&
	git commit -m "again subdir" subdir/new &&
	git rm a &&
	test_tick &&
	git commit -m "again not subdir" &&
	git branch sub &&
	git branch sub-earlier HEAD~2 &&
	git filter-branch -f --subdirectory-filter subdir \
		refs/heads/sub refs/heads/sub-earlier
'
+ test_cleanup=:
+ eval '
	mkdir subdir &&
	touch subdir/new &&
	git add subdir/new &&
	test_tick &&
	git commit -m "subdir" &&
	echo H > a &&
	test_tick &&
	git commit -m "not subdir" a &&
	echo A > subdir/new &&
	test_tick &&
	git commit -m "again subdir" subdir/new &&
	git rm a &&
	test_tick &&
	git commit -m "again not subdir" &&
	git branch sub &&
	git branch sub-earlier HEAD~2 &&
	git filter-branch -f --subdirectory-filter subdir \
		refs/heads/sub refs/heads/sub-earlier
'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ 'filter subdirectory only'
+ test_success=14
+ say_color '' 'ok 14 - filter subdirectory only'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 14 - filter subdirectory only'
ok 14 - filter subdirectory only+ tput sgr0
+ echo

+ echo ''
+ test_expect_success 'subdirectory filter result looks okay' '
	test 2 = $(git rev-list sub | wc -l) &&
	git show sub:new &&
	test_must_fail git show sub:subdir &&
	git show sub-earlier:new &&
	test_must_fail git show sub-earlier:subdir
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip 'subdirectory filter result looks okay' '
	test 2 = $(git rev-list sub | wc -l) &&
	git show sub:new &&
	test_must_fail git show sub:subdir &&
	git show sub-earlier:new &&
	test_must_fail git show sub-earlier:subdir
'
+ test_count=15
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 
	test 2 = $(git rev-list sub | wc -l) &&
	git show sub:new &&
	test_must_fail git show sub:subdir &&
	git show sub-earlier:new &&
	test_must_fail git show sub-earlier:subdir
'
+ say_color info 'expecting success: 
	test 2 = $(git rev-list sub | wc -l) &&
	git show sub:new &&
	test_must_fail git show sub:subdir &&
	git show sub-earlier:new &&
	test_must_fail git show sub-earlier:subdir
'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 
	test 2 = $(git rev-list sub | wc -l) &&
	git show sub:new &&
	test_must_fail git show sub:subdir &&
	git show sub-earlier:new &&
	test_must_fail git show sub-earlier:subdir
'
+ tput sgr0
+ echo
+ test_run_ '
	test 2 = $(git rev-list sub | wc -l) &&
	git show sub:new &&
	test_must_fail git show sub:subdir &&
	git show sub-earlier:new &&
	test_must_fail git show sub-earlier:subdir
'
+ test_cleanup=:
+ eval '
	test 2 = $(git rev-list sub | wc -l) &&
	git show sub:new &&
	test_must_fail git show sub:subdir &&
	git show sub-earlier:new &&
	test_must_fail git show sub-earlier:subdir
'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ 'subdirectory filter result looks okay'
+ test_success=15
+ say_color '' 'ok 15 - subdirectory filter result looks okay'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 15 - subdirectory filter result looks okay'
ok 15 - subdirectory filter result looks okay+ tput sgr0
+ echo

+ echo ''
+ test_expect_success 'more setup' '
	git checkout master &&
	mkdir subdir &&
	echo A > subdir/new &&
	git add subdir/new &&
	test_tick &&
	git commit -m "subdir on master" subdir/new &&
	git rm a &&
	test_tick &&
	git commit -m "again subdir on master" &&
	git merge branch
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip 'more setup' '
	git checkout master &&
	mkdir subdir &&
	echo A > subdir/new &&
	git add subdir/new &&
	test_tick &&
	git commit -m "subdir on master" subdir/new &&
	git rm a &&
	test_tick &&
	git commit -m "again subdir on master" &&
	git merge branch
'
+ test_count=16
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 
	git checkout master &&
	mkdir subdir &&
	echo A > subdir/new &&
	git add subdir/new &&
	test_tick &&
	git commit -m "subdir on master" subdir/new &&
	git rm a &&
	test_tick &&
	git commit -m "again subdir on master" &&
	git merge branch
'
+ say_color info 'expecting success: 
	git checkout master &&
	mkdir subdir &&
	echo A > subdir/new &&
	git add subdir/new &&
	test_tick &&
	git commit -m "subdir on master" subdir/new &&
	git rm a &&
	test_tick &&
	git commit -m "again subdir on master" &&
	git merge branch
'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 
	git checkout master &&
	mkdir subdir &&
	echo A > subdir/new &&
	git add subdir/new &&
	test_tick &&
	git commit -m "subdir on master" subdir/new &&
	git rm a &&
	test_tick &&
	git commit -m "again subdir on master" &&
	git merge branch
'
+ tput sgr0
+ echo
+ test_run_ '
	git checkout master &&
	mkdir subdir &&
	echo A > subdir/new &&
	git add subdir/new &&
	test_tick &&
	git commit -m "subdir on master" subdir/new &&
	git rm a &&
	test_tick &&
	git commit -m "again subdir on master" &&
	git merge branch
'
+ test_cleanup=:
+ eval '
	git checkout master &&
	mkdir subdir &&
	echo A > subdir/new &&
	git add subdir/new &&
	test_tick &&
	git commit -m "subdir on master" subdir/new &&
	git rm a &&
	test_tick &&
	git commit -m "again subdir on master" &&
	git merge branch
'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ 'more setup'
+ test_success=16
+ say_color '' 'ok 16 - more setup'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 16 - more setup'
ok 16 - more setup+ tput sgr0
+ echo

+ echo ''
+ test_expect_success 'use index-filter to move into a subdirectory' '
	git branch directorymoved &&
	git filter-branch -f --index-filter \
		 "git ls-files -s | sed \"s-	-&newsubdir/-\" |
	          GIT_INDEX_FILE=\$GIT_INDEX_FILE.new \
			git update-index --index-info &&
		  mv \"\$GIT_INDEX_FILE.new\" \"\$GIT_INDEX_FILE\"" directorymoved &&
	git diff --exit-code HEAD directorymoved:newsubdir
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip 'use index-filter to move into a subdirectory' '
	git branch directorymoved &&
	git filter-branch -f --index-filter \
		 "git ls-files -s | sed \"s-	-&newsubdir/-\" |
	          GIT_INDEX_FILE=\$GIT_INDEX_FILE.new \
			git update-index --index-info &&
		  mv \"\$GIT_INDEX_FILE.new\" \"\$GIT_INDEX_FILE\"" directorymoved &&
	git diff --exit-code HEAD directorymoved:newsubdir
'
+ test_count=17
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 
	git branch directorymoved &&
	git filter-branch -f --index-filter \
		 "git ls-files -s | sed \"s-	-&newsubdir/-\" |
	          GIT_INDEX_FILE=\$GIT_INDEX_FILE.new \
			git update-index --index-info &&
		  mv \"\$GIT_INDEX_FILE.new\" \"\$GIT_INDEX_FILE\"" directorymoved &&
	git diff --exit-code HEAD directorymoved:newsubdir
'
+ say_color info 'expecting success: 
	git branch directorymoved &&
	git filter-branch -f --index-filter \
		 "git ls-files -s | sed \"s-	-&newsubdir/-\" |
	          GIT_INDEX_FILE=\$GIT_INDEX_FILE.new \
			git update-index --index-info &&
		  mv \"\$GIT_INDEX_FILE.new\" \"\$GIT_INDEX_FILE\"" directorymoved &&
	git diff --exit-code HEAD directorymoved:newsubdir
'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 
	git branch directorymoved &&
	git filter-branch -f --index-filter \
		 "git ls-files -s | sed \"s-	-&newsubdir/-\" |
	          GIT_INDEX_FILE=\$GIT_INDEX_FILE.new \
			git update-index --index-info &&
		  mv \"\$GIT_INDEX_FILE.new\" \"\$GIT_INDEX_FILE\"" directorymoved &&
	git diff --exit-code HEAD directorymoved:newsubdir
'
+ tput sgr0
+ echo
+ test_run_ '
	git branch directorymoved &&
	git filter-branch -f --index-filter \
		 "git ls-files -s | sed \"s-	-&newsubdir/-\" |
	          GIT_INDEX_FILE=\$GIT_INDEX_FILE.new \
			git update-index --index-info &&
		  mv \"\$GIT_INDEX_FILE.new\" \"\$GIT_INDEX_FILE\"" directorymoved &&
	git diff --exit-code HEAD directorymoved:newsubdir
'
+ test_cleanup=:
+ eval '
	git branch directorymoved &&
	git filter-branch -f --index-filter \
		 "git ls-files -s | sed \"s-	-&newsubdir/-\" |
	          GIT_INDEX_FILE=\$GIT_INDEX_FILE.new \
			git update-index --index-info &&
		  mv \"\$GIT_INDEX_FILE.new\" \"\$GIT_INDEX_FILE\"" directorymoved &&
	git diff --exit-code HEAD directorymoved:newsubdir
'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ 'use index-filter to move into a subdirectory'
+ test_success=17
+ say_color '' 'ok 17 - use index-filter to move into a subdirectory'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 17 - use index-filter to move into a subdirectory'
ok 17 - use index-filter to move into a subdirectory+ tput sgr0
+ echo

+ echo ''
+ test_expect_success 'stops when msg filter fails' '
	old=$(git rev-parse HEAD) &&
	test_must_fail git filter-branch -f --msg-filter false HEAD &&
	test $old = $(git rev-parse HEAD) &&
	rm -rf .git-rewrite
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip 'stops when msg filter fails' '
	old=$(git rev-parse HEAD) &&
	test_must_fail git filter-branch -f --msg-filter false HEAD &&
	test $old = $(git rev-parse HEAD) &&
	rm -rf .git-rewrite
'
+ test_count=18
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 
	old=$(git rev-parse HEAD) &&
	test_must_fail git filter-branch -f --msg-filter false HEAD &&
	test $old = $(git rev-parse HEAD) &&
	rm -rf .git-rewrite
'
+ say_color info 'expecting success: 
	old=$(git rev-parse HEAD) &&
	test_must_fail git filter-branch -f --msg-filter false HEAD &&
	test $old = $(git rev-parse HEAD) &&
	rm -rf .git-rewrite
'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 
	old=$(git rev-parse HEAD) &&
	test_must_fail git filter-branch -f --msg-filter false HEAD &&
	test $old = $(git rev-parse HEAD) &&
	rm -rf .git-rewrite
'
+ tput sgr0
+ echo
+ test_run_ '
	old=$(git rev-parse HEAD) &&
	test_must_fail git filter-branch -f --msg-filter false HEAD &&
	test $old = $(git rev-parse HEAD) &&
	rm -rf .git-rewrite
'
+ test_cleanup=:
+ eval '
	old=$(git rev-parse HEAD) &&
	test_must_fail git filter-branch -f --msg-filter false HEAD &&
	test $old = $(git rev-parse HEAD) &&
	rm -rf .git-rewrite
'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ 'stops when msg filter fails'
+ test_success=18
+ say_color '' 'ok 18 - stops when msg filter fails'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 18 - stops when msg filter fails'
ok 18 - stops when msg filter fails+ tput sgr0
+ echo

+ echo ''
+ test_expect_success 'author information is preserved' '
	: > i &&
	git add i &&
	test_tick &&
	GIT_AUTHOR_NAME="B V Uips" git commit -m bvuips &&
	git branch preserved-author &&
	git filter-branch -f --msg-filter "cat; \
			test \$GIT_COMMIT != $(git rev-parse master) || \
			echo Hallo" \
		preserved-author &&
	test 1 = $(git rev-list --author="B V Uips" preserved-author | wc -l)
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip 'author information is preserved' '
	: > i &&
	git add i &&
	test_tick &&
	GIT_AUTHOR_NAME="B V Uips" git commit -m bvuips &&
	git branch preserved-author &&
	git filter-branch -f --msg-filter "cat; \
			test \$GIT_COMMIT != $(git rev-parse master) || \
			echo Hallo" \
		preserved-author &&
	test 1 = $(git rev-list --author="B V Uips" preserved-author | wc -l)
'
+ test_count=19
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 
	: > i &&
	git add i &&
	test_tick &&
	GIT_AUTHOR_NAME="B V Uips" git commit -m bvuips &&
	git branch preserved-author &&
	git filter-branch -f --msg-filter "cat; \
			test \$GIT_COMMIT != $(git rev-parse master) || \
			echo Hallo" \
		preserved-author &&
	test 1 = $(git rev-list --author="B V Uips" preserved-author | wc -l)
'
+ say_color info 'expecting success: 
	: > i &&
	git add i &&
	test_tick &&
	GIT_AUTHOR_NAME="B V Uips" git commit -m bvuips &&
	git branch preserved-author &&
	git filter-branch -f --msg-filter "cat; \
			test \$GIT_COMMIT != $(git rev-parse master) || \
			echo Hallo" \
		preserved-author &&
	test 1 = $(git rev-list --author="B V Uips" preserved-author | wc -l)
'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 
	: > i &&
	git add i &&
	test_tick &&
	GIT_AUTHOR_NAME="B V Uips" git commit -m bvuips &&
	git branch preserved-author &&
	git filter-branch -f --msg-filter "cat; \
			test \$GIT_COMMIT != $(git rev-parse master) || \
			echo Hallo" \
		preserved-author &&
	test 1 = $(git rev-list --author="B V Uips" preserved-author | wc -l)
'
+ tput sgr0
+ echo
+ test_run_ '
	: > i &&
	git add i &&
	test_tick &&
	GIT_AUTHOR_NAME="B V Uips" git commit -m bvuips &&
	git branch preserved-author &&
	git filter-branch -f --msg-filter "cat; \
			test \$GIT_COMMIT != $(git rev-parse master) || \
			echo Hallo" \
		preserved-author &&
	test 1 = $(git rev-list --author="B V Uips" preserved-author | wc -l)
'
+ test_cleanup=:
+ eval '
	: > i &&
	git add i &&
	test_tick &&
	GIT_AUTHOR_NAME="B V Uips" git commit -m bvuips &&
	git branch preserved-author &&
	git filter-branch -f --msg-filter "cat; \
			test \$GIT_COMMIT != $(git rev-parse master) || \
			echo Hallo" \
		preserved-author &&
	test 1 = $(git rev-list --author="B V Uips" preserved-author | wc -l)
'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ 'author information is preserved'
+ test_success=19
+ say_color '' 'ok 19 - author information is preserved'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 19 - author information is preserved'
ok 19 - author information is preserved+ tput sgr0
+ echo

+ echo ''
+ test_expect_success 'remove a certain author'\''s commits' '
	echo i > i &&
	test_tick &&
	git commit -m i i &&
	git branch removed-author &&
	git filter-branch -f --commit-filter "\
		if [ \"\$GIT_AUTHOR_NAME\" = \"B V Uips\" ];\
		then\
			skip_commit \"\$@\";
		else\
			git commit-tree \"\$@\";\
		fi" removed-author &&
	cnt1=$(git rev-list master | wc -l) &&
	cnt2=$(git rev-list removed-author | wc -l) &&
	test $cnt1 -eq $(($cnt2 + 1)) &&
	test 0 = $(git rev-list --author="B V Uips" removed-author | wc -l)
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip 'remove a certain author'\''s commits' '
	echo i > i &&
	test_tick &&
	git commit -m i i &&
	git branch removed-author &&
	git filter-branch -f --commit-filter "\
		if [ \"\$GIT_AUTHOR_NAME\" = \"B V Uips\" ];\
		then\
			skip_commit \"\$@\";
		else\
			git commit-tree \"\$@\";\
		fi" removed-author &&
	cnt1=$(git rev-list master | wc -l) &&
	cnt2=$(git rev-list removed-author | wc -l) &&
	test $cnt1 -eq $(($cnt2 + 1)) &&
	test 0 = $(git rev-list --author="B V Uips" removed-author | wc -l)
'
+ test_count=20
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 
	echo i > i &&
	test_tick &&
	git commit -m i i &&
	git branch removed-author &&
	git filter-branch -f --commit-filter "\
		if [ \"\$GIT_AUTHOR_NAME\" = \"B V Uips\" ];\
		then\
			skip_commit \"\$@\";
		else\
			git commit-tree \"\$@\";\
		fi" removed-author &&
	cnt1=$(git rev-list master | wc -l) &&
	cnt2=$(git rev-list removed-author | wc -l) &&
	test $cnt1 -eq $(($cnt2 + 1)) &&
	test 0 = $(git rev-list --author="B V Uips" removed-author | wc -l)
'
+ say_color info 'expecting success: 
	echo i > i &&
	test_tick &&
	git commit -m i i &&
	git branch removed-author &&
	git filter-branch -f --commit-filter "\
		if [ \"\$GIT_AUTHOR_NAME\" = \"B V Uips\" ];\
		then\
			skip_commit \"\$@\";
		else\
			git commit-tree \"\$@\";\
		fi" removed-author &&
	cnt1=$(git rev-list master | wc -l) &&
	cnt2=$(git rev-list removed-author | wc -l) &&
	test $cnt1 -eq $(($cnt2 + 1)) &&
	test 0 = $(git rev-list --author="B V Uips" removed-author | wc -l)
'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 
	echo i > i &&
	test_tick &&
	git commit -m i i &&
	git branch removed-author &&
	git filter-branch -f --commit-filter "\
		if [ \"\$GIT_AUTHOR_NAME\" = \"B V Uips\" ];\
		then\
			skip_commit \"\$@\";
		else\
			git commit-tree \"\$@\";\
		fi" removed-author &&
	cnt1=$(git rev-list master | wc -l) &&
	cnt2=$(git rev-list removed-author | wc -l) &&
	test $cnt1 -eq $(($cnt2 + 1)) &&
	test 0 = $(git rev-list --author="B V Uips" removed-author | wc -l)
'
+ tput sgr0
+ echo
+ test_run_ '
	echo i > i &&
	test_tick &&
	git commit -m i i &&
	git branch removed-author &&
	git filter-branch -f --commit-filter "\
		if [ \"\$GIT_AUTHOR_NAME\" = \"B V Uips\" ];\
		then\
			skip_commit \"\$@\";
		else\
			git commit-tree \"\$@\";\
		fi" removed-author &&
	cnt1=$(git rev-list master | wc -l) &&
	cnt2=$(git rev-list removed-author | wc -l) &&
	test $cnt1 -eq $(($cnt2 + 1)) &&
	test 0 = $(git rev-list --author="B V Uips" removed-author | wc -l)
'
+ test_cleanup=:
+ eval '
	echo i > i &&
	test_tick &&
	git commit -m i i &&
	git branch removed-author &&
	git filter-branch -f --commit-filter "\
		if [ \"\$GIT_AUTHOR_NAME\" = \"B V Uips\" ];\
		then\
			skip_commit \"\$@\";
		else\
			git commit-tree \"\$@\";\
		fi" removed-author &&
	cnt1=$(git rev-list master | wc -l) &&
	cnt2=$(git rev-list removed-author | wc -l) &&
	test $cnt1 -eq $(($cnt2 + 1)) &&
	test 0 = $(git rev-list --author="B V Uips" removed-author | wc -l)
'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ 'remove a certain author'\''s commits'
+ test_success=20
+ say_color '' 'ok 20 - remove a certain author'\''s commits'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 20 - remove a certain author'\''s commits'
ok 20 - remove a certain author's commits+ tput sgr0
+ echo

+ echo ''
+ test_expect_success 'barf on invalid name' '
	test_must_fail git filter-branch -f master xy-problem &&
	test_must_fail git filter-branch -f HEAD^
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip 'barf on invalid name' '
	test_must_fail git filter-branch -f master xy-problem &&
	test_must_fail git filter-branch -f HEAD^
'
+ test_count=21
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 
	test_must_fail git filter-branch -f master xy-problem &&
	test_must_fail git filter-branch -f HEAD^
'
+ say_color info 'expecting success: 
	test_must_fail git filter-branch -f master xy-problem &&
	test_must_fail git filter-branch -f HEAD^
'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 
	test_must_fail git filter-branch -f master xy-problem &&
	test_must_fail git filter-branch -f HEAD^
'
+ tput sgr0
+ echo
+ test_run_ '
	test_must_fail git filter-branch -f master xy-problem &&
	test_must_fail git filter-branch -f HEAD^
'
+ test_cleanup=:
+ eval '
	test_must_fail git filter-branch -f master xy-problem &&
	test_must_fail git filter-branch -f HEAD^
'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ 'barf on invalid name'
+ test_success=21
+ say_color '' 'ok 21 - barf on invalid name'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 21 - barf on invalid name'
ok 21 - barf on invalid name+ tput sgr0
+ echo

+ echo ''
+ test_expect_success '"map" works in commit filter' '
	git filter-branch -f --commit-filter "\
		parent=\$(git rev-parse \$GIT_COMMIT^) &&
		mapped=\$(map \$parent) &&
		actual=\$(echo \"\$@\" | sed \"s/^.*-p //\") &&
		test \$mapped = \$actual &&
		git commit-tree \"\$@\";" master~2..master &&
	git rev-parse --verify master
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip '"map" works in commit filter' '
	git filter-branch -f --commit-filter "\
		parent=\$(git rev-parse \$GIT_COMMIT^) &&
		mapped=\$(map \$parent) &&
		actual=\$(echo \"\$@\" | sed \"s/^.*-p //\") &&
		test \$mapped = \$actual &&
		git commit-tree \"\$@\";" master~2..master &&
	git rev-parse --verify master
'
+ test_count=22
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 
	git filter-branch -f --commit-filter "\
		parent=\$(git rev-parse \$GIT_COMMIT^) &&
		mapped=\$(map \$parent) &&
		actual=\$(echo \"\$@\" | sed \"s/^.*-p //\") &&
		test \$mapped = \$actual &&
		git commit-tree \"\$@\";" master~2..master &&
	git rev-parse --verify master
'
+ say_color info 'expecting success: 
	git filter-branch -f --commit-filter "\
		parent=\$(git rev-parse \$GIT_COMMIT^) &&
		mapped=\$(map \$parent) &&
		actual=\$(echo \"\$@\" | sed \"s/^.*-p //\") &&
		test \$mapped = \$actual &&
		git commit-tree \"\$@\";" master~2..master &&
	git rev-parse --verify master
'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 
	git filter-branch -f --commit-filter "\
		parent=\$(git rev-parse \$GIT_COMMIT^) &&
		mapped=\$(map \$parent) &&
		actual=\$(echo \"\$@\" | sed \"s/^.*-p //\") &&
		test \$mapped = \$actual &&
		git commit-tree \"\$@\";" master~2..master &&
	git rev-parse --verify master
'
+ tput sgr0
+ echo
+ test_run_ '
	git filter-branch -f --commit-filter "\
		parent=\$(git rev-parse \$GIT_COMMIT^) &&
		mapped=\$(map \$parent) &&
		actual=\$(echo \"\$@\" | sed \"s/^.*-p //\") &&
		test \$mapped = \$actual &&
		git commit-tree \"\$@\";" master~2..master &&
	git rev-parse --verify master
'
+ test_cleanup=:
+ eval '
	git filter-branch -f --commit-filter "\
		parent=\$(git rev-parse \$GIT_COMMIT^) &&
		mapped=\$(map \$parent) &&
		actual=\$(echo \"\$@\" | sed \"s/^.*-p //\") &&
		test \$mapped = \$actual &&
		git commit-tree \"\$@\";" master~2..master &&
	git rev-parse --verify master
'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ '"map" works in commit filter'
+ test_success=22
+ say_color '' 'ok 22 - "map" works in commit filter'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 22 - "map" works in commit filter'
ok 22 - "map" works in commit filter+ tput sgr0
+ echo

+ echo ''
+ test_expect_success 'Name needing quotes' '

	git checkout -b rerere A &&
	mkdir foo &&
	name="れれれ" &&
	>foo/$name &&
	git add foo &&
	git commit -m "Adding a file" &&
	git filter-branch --tree-filter "rm -fr foo" &&
	test_must_fail git ls-files --error-unmatch "foo/$name" &&
	test $(git rev-parse --verify rerere) != $(git rev-parse --verify A)

'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip 'Name needing quotes' '

	git checkout -b rerere A &&
	mkdir foo &&
	name="れれれ" &&
	>foo/$name &&
	git add foo &&
	git commit -m "Adding a file" &&
	git filter-branch --tree-filter "rm -fr foo" &&
	test_must_fail git ls-files --error-unmatch "foo/$name" &&
	test $(git rev-parse --verify rerere) != $(git rev-parse --verify A)

'
+ test_count=23
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 

	git checkout -b rerere A &&
	mkdir foo &&
	name="れれれ" &&
	>foo/$name &&
	git add foo &&
	git commit -m "Adding a file" &&
	git filter-branch --tree-filter "rm -fr foo" &&
	test_must_fail git ls-files --error-unmatch "foo/$name" &&
	test $(git rev-parse --verify rerere) != $(git rev-parse --verify A)

'
+ say_color info 'expecting success: 

	git checkout -b rerere A &&
	mkdir foo &&
	name="れれれ" &&
	>foo/$name &&
	git add foo &&
	git commit -m "Adding a file" &&
	git filter-branch --tree-filter "rm -fr foo" &&
	test_must_fail git ls-files --error-unmatch "foo/$name" &&
	test $(git rev-parse --verify rerere) != $(git rev-parse --verify A)

'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 

	git checkout -b rerere A &&
	mkdir foo &&
	name="れれれ" &&
	>foo/$name &&
	git add foo &&
	git commit -m "Adding a file" &&
	git filter-branch --tree-filter "rm -fr foo" &&
	test_must_fail git ls-files --error-unmatch "foo/$name" &&
	test $(git rev-parse --verify rerere) != $(git rev-parse --verify A)

'
+ tput sgr0
+ echo
+ test_run_ '

	git checkout -b rerere A &&
	mkdir foo &&
	name="れれれ" &&
	>foo/$name &&
	git add foo &&
	git commit -m "Adding a file" &&
	git filter-branch --tree-filter "rm -fr foo" &&
	test_must_fail git ls-files --error-unmatch "foo/$name" &&
	test $(git rev-parse --verify rerere) != $(git rev-parse --verify A)

'
+ test_cleanup=:
+ eval '

	git checkout -b rerere A &&
	mkdir foo &&
	name="れれれ" &&
	>foo/$name &&
	git add foo &&
	git commit -m "Adding a file" &&
	git filter-branch --tree-filter "rm -fr foo" &&
	test_must_fail git ls-files --error-unmatch "foo/$name" &&
	test $(git rev-parse --verify rerere) != $(git rev-parse --verify A)

'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ 'Name needing quotes'
+ test_success=23
+ say_color '' 'ok 23 - Name needing quotes'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 23 - Name needing quotes'
ok 23 - Name needing quotes+ tput sgr0
+ echo

+ echo ''
+ test_expect_success 'Subdirectory filter with disappearing trees' '
	git reset --hard &&
	git checkout master &&

	mkdir foo &&
	touch foo/bar &&
	git add foo &&
	test_tick &&
	git commit -m "Adding foo" &&

	git rm -r foo &&
	test_tick &&
	git commit -m "Removing foo" &&

	mkdir foo &&
	touch foo/bar &&
	git add foo &&
	test_tick &&
	git commit -m "Re-adding foo" &&

	git filter-branch -f --subdirectory-filter foo &&
	test $(git rev-list master | wc -l) = 3
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip 'Subdirectory filter with disappearing trees' '
	git reset --hard &&
	git checkout master &&

	mkdir foo &&
	touch foo/bar &&
	git add foo &&
	test_tick &&
	git commit -m "Adding foo" &&

	git rm -r foo &&
	test_tick &&
	git commit -m "Removing foo" &&

	mkdir foo &&
	touch foo/bar &&
	git add foo &&
	test_tick &&
	git commit -m "Re-adding foo" &&

	git filter-branch -f --subdirectory-filter foo &&
	test $(git rev-list master | wc -l) = 3
'
+ test_count=24
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 
	git reset --hard &&
	git checkout master &&

	mkdir foo &&
	touch foo/bar &&
	git add foo &&
	test_tick &&
	git commit -m "Adding foo" &&

	git rm -r foo &&
	test_tick &&
	git commit -m "Removing foo" &&

	mkdir foo &&
	touch foo/bar &&
	git add foo &&
	test_tick &&
	git commit -m "Re-adding foo" &&

	git filter-branch -f --subdirectory-filter foo &&
	test $(git rev-list master | wc -l) = 3
'
+ say_color info 'expecting success: 
	git reset --hard &&
	git checkout master &&

	mkdir foo &&
	touch foo/bar &&
	git add foo &&
	test_tick &&
	git commit -m "Adding foo" &&

	git rm -r foo &&
	test_tick &&
	git commit -m "Removing foo" &&

	mkdir foo &&
	touch foo/bar &&
	git add foo &&
	test_tick &&
	git commit -m "Re-adding foo" &&

	git filter-branch -f --subdirectory-filter foo &&
	test $(git rev-list master | wc -l) = 3
'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 
	git reset --hard &&
	git checkout master &&

	mkdir foo &&
	touch foo/bar &&
	git add foo &&
	test_tick &&
	git commit -m "Adding foo" &&

	git rm -r foo &&
	test_tick &&
	git commit -m "Removing foo" &&

	mkdir foo &&
	touch foo/bar &&
	git add foo &&
	test_tick &&
	git commit -m "Re-adding foo" &&

	git filter-branch -f --subdirectory-filter foo &&
	test $(git rev-list master | wc -l) = 3
'
+ tput sgr0
+ echo
+ test_run_ '
	git reset --hard &&
	git checkout master &&

	mkdir foo &&
	touch foo/bar &&
	git add foo &&
	test_tick &&
	git commit -m "Adding foo" &&

	git rm -r foo &&
	test_tick &&
	git commit -m "Removing foo" &&

	mkdir foo &&
	touch foo/bar &&
	git add foo &&
	test_tick &&
	git commit -m "Re-adding foo" &&

	git filter-branch -f --subdirectory-filter foo &&
	test $(git rev-list master | wc -l) = 3
'
+ test_cleanup=:
+ eval '
	git reset --hard &&
	git checkout master &&

	mkdir foo &&
	touch foo/bar &&
	git add foo &&
	test_tick &&
	git commit -m "Adding foo" &&

	git rm -r foo &&
	test_tick &&
	git commit -m "Removing foo" &&

	mkdir foo &&
	touch foo/bar &&
	git add foo &&
	test_tick &&
	git commit -m "Re-adding foo" &&

	git filter-branch -f --subdirectory-filter foo &&
	test $(git rev-list master | wc -l) = 3
'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ 'Subdirectory filter with disappearing trees'
+ test_success=24
+ say_color '' 'ok 24 - Subdirectory filter with disappearing trees'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 24 - Subdirectory filter with disappearing trees'
ok 24 - Subdirectory filter with disappearing trees+ tput sgr0
+ echo

+ echo ''
+ test_expect_success 'Tag name filtering retains tag message' '
	git tag -m atag T &&
	git cat-file tag T > expect &&
	git filter-branch -f --tag-name-filter cat &&
	git cat-file tag T > actual &&
	test_cmp expect actual
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip 'Tag name filtering retains tag message' '
	git tag -m atag T &&
	git cat-file tag T > expect &&
	git filter-branch -f --tag-name-filter cat &&
	git cat-file tag T > actual &&
	test_cmp expect actual
'
+ test_count=25
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 
	git tag -m atag T &&
	git cat-file tag T > expect &&
	git filter-branch -f --tag-name-filter cat &&
	git cat-file tag T > actual &&
	test_cmp expect actual
'
+ say_color info 'expecting success: 
	git tag -m atag T &&
	git cat-file tag T > expect &&
	git filter-branch -f --tag-name-filter cat &&
	git cat-file tag T > actual &&
	test_cmp expect actual
'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 
	git tag -m atag T &&
	git cat-file tag T > expect &&
	git filter-branch -f --tag-name-filter cat &&
	git cat-file tag T > actual &&
	test_cmp expect actual
'
+ tput sgr0
+ echo
+ test_run_ '
	git tag -m atag T &&
	git cat-file tag T > expect &&
	git filter-branch -f --tag-name-filter cat &&
	git cat-file tag T > actual &&
	test_cmp expect actual
'
+ test_cleanup=:
+ eval '
	git tag -m atag T &&
	git cat-file tag T > expect &&
	git filter-branch -f --tag-name-filter cat &&
	git cat-file tag T > actual &&
	test_cmp expect actual
'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ 'Tag name filtering retains tag message'
+ test_success=25
+ say_color '' 'ok 25 - Tag name filtering retains tag message'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 25 - Tag name filtering retains tag message'
ok 25 - Tag name filtering retains tag message+ tput sgr0
+ echo

+ echo ''
+ faux_gpg_tag='object XXXXXX
type commit
tag S
tagger T A Gger <tagger@example.com> 1206026339 -0500

This is a faux gpg signed tag.
-----BEGIN PGP SIGNATURE-----
Version: FauxGPG v0.0.0 (FAUX/Linux)

gdsfoewhxu/6l06f1kxyxhKdZkrcbaiOMtkJUA9ITAc1mlamh0ooasxkH1XwMbYQ
acmwXaWET20H0GeAGP+7vow=
=agpO
-----END PGP SIGNATURE-----
'
+ test_expect_success 'Tag name filtering strips gpg signature' '
	sha1=$(git rev-parse HEAD) &&
	sha1t=$(echo "$faux_gpg_tag" | sed -e s/XXXXXX/$sha1/ | git mktag) &&
	git update-ref "refs/tags/S" "$sha1t" &&
	echo "$faux_gpg_tag" | sed -e s/XXXXXX/$sha1/ | head -n 6 > expect &&
	git filter-branch -f --tag-name-filter cat &&
	git cat-file tag S > actual &&
	test_cmp expect actual
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip 'Tag name filtering strips gpg signature' '
	sha1=$(git rev-parse HEAD) &&
	sha1t=$(echo "$faux_gpg_tag" | sed -e s/XXXXXX/$sha1/ | git mktag) &&
	git update-ref "refs/tags/S" "$sha1t" &&
	echo "$faux_gpg_tag" | sed -e s/XXXXXX/$sha1/ | head -n 6 > expect &&
	git filter-branch -f --tag-name-filter cat &&
	git cat-file tag S > actual &&
	test_cmp expect actual
'
+ test_count=26
+ to_skip=
+ test -z ''
+ test -n ''
+ case "$to_skip" in
+ false
+ say 'expecting success: 
	sha1=$(git rev-parse HEAD) &&
	sha1t=$(echo "$faux_gpg_tag" | sed -e s/XXXXXX/$sha1/ | git mktag) &&
	git update-ref "refs/tags/S" "$sha1t" &&
	echo "$faux_gpg_tag" | sed -e s/XXXXXX/$sha1/ | head -n 6 > expect &&
	git filter-branch -f --tag-name-filter cat &&
	git cat-file tag S > actual &&
	test_cmp expect actual
'
+ say_color info 'expecting success: 
	sha1=$(git rev-parse HEAD) &&
	sha1t=$(echo "$faux_gpg_tag" | sed -e s/XXXXXX/$sha1/ | git mktag) &&
	git update-ref "refs/tags/S" "$sha1t" &&
	echo "$faux_gpg_tag" | sed -e s/XXXXXX/$sha1/ | head -n 6 > expect &&
	git filter-branch -f --tag-name-filter cat &&
	git cat-file tag S > actual &&
	test_cmp expect actual
'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ tput setaf 3
+ shift
+ printf %s 'expecting success: 
	sha1=$(git rev-parse HEAD) &&
	sha1t=$(echo "$faux_gpg_tag" | sed -e s/XXXXXX/$sha1/ | git mktag) &&
	git update-ref "refs/tags/S" "$sha1t" &&
	echo "$faux_gpg_tag" | sed -e s/XXXXXX/$sha1/ | head -n 6 > expect &&
	git filter-branch -f --tag-name-filter cat &&
	git cat-file tag S > actual &&
	test_cmp expect actual
'
+ tput sgr0
+ echo
+ test_run_ '
	sha1=$(git rev-parse HEAD) &&
	sha1t=$(echo "$faux_gpg_tag" | sed -e s/XXXXXX/$sha1/ | git mktag) &&
	git update-ref "refs/tags/S" "$sha1t" &&
	echo "$faux_gpg_tag" | sed -e s/XXXXXX/$sha1/ | head -n 6 > expect &&
	git filter-branch -f --tag-name-filter cat &&
	git cat-file tag S > actual &&
	test_cmp expect actual
'
+ test_cleanup=:
+ eval '
	sha1=$(git rev-parse HEAD) &&
	sha1t=$(echo "$faux_gpg_tag" | sed -e s/XXXXXX/$sha1/ | git mktag) &&
	git update-ref "refs/tags/S" "$sha1t" &&
	echo "$faux_gpg_tag" | sed -e s/XXXXXX/$sha1/ | head -n 6 > expect &&
	git filter-branch -f --tag-name-filter cat &&
	git cat-file tag S > actual &&
	test_cmp expect actual
'
+ eval_ret=0
+ eval :
+ test '' = t
+ return 0
+ '[' 0 = 0 -a 0 = 0 ']'
+ test_ok_ 'Tag name filtering strips gpg signature'
+ test_success=26
+ say_color '' 'ok 26 - Tag name filtering strips gpg signature'
+ TERM=xterm-color
+ export TERM
+ case "$1" in
+ test -n ''
+ shift
+ printf %s 'ok 26 - Tag name filtering strips gpg signature'
ok 26 - Tag name filtering strips gpg signature+ tput sgr0
+ echo

+ echo ''
+ test_expect_success 'Tag name filtering allows slashes in tag names' '
	git tag -m tag-with-slash X/1 &&
	git cat-file tag X/1 | sed -e s,X/1,X/2, > expect &&
	git filter-branch -f --tag-name-filter "echo X/2" &&
	git cat-file tag X/2 > actual &&
	test_cmp expect actual
'
+ test 2 = 3
+ prereq=
+ test 2 = 2
+ test_skip 'Tag name filtering allows slashes in tag names' '
	git tag -m tag-with-slash X/1 &&
	git cat-file ta
