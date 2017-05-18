---
tags: ansible wiki
cache_breaker: 1
---

# Adding a `changed_when` to a script means that non-zero exit codes are not considered a failure

You need to add an explicit `failed_when` as well:

    - name: mysql | upgrade database
      script: upgrade-mysql.sh
      register: result
      changed_when: '"no change" not in result.stdout'
      failed_when: 'result.rc != 0'
      sudo: yes
      notify: mysql | restart

# Role dependencies may run multiple times

Force them to run once only with an explicit `set_fact` guard clause:

    ---
    # Make sure we only run once, even when multiple roles depend on us.
    - include: base.yml
      when: git_repo_role_done is not defined

    - set_fact: git_repo_role_done=true

# `sudo`, `become_user` and friends may not work with the `script` module

Reported [here](https://github.com/ansible/ansible/issues/11902).

For now, the workaround is to inline your `sudo` calls inside the scripts.
