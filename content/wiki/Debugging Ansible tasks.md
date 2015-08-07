---
tags: ansible
---

# Tips

-   Set `ANSIBLE_KEEP_REMOTE_FILES=1` to prevent Ansible from deleting temporary files, enabling you to inspect them.
-   Limit a run to a specific task or set of tasks with the `--tags` and `--start-at-task` options.
-   Make Ansible pause before running each task with `--step`.
-   Use `-v` multiple times to dump extra debug info.
-   Use the `debug` module to dump variables.

# Examples

## Invocation

```shell
$ ANSIBLE_KEEP_REMOTE_FILES=1 ansible-playbook \
  -i production site.yml \
  --tags git \
  --step \
  --start-at-task='git-replicator | set-up bitbucket remotes' \
  -vvvvv
```

## `debug` module

    - name: debug-this
      debug: var=result
