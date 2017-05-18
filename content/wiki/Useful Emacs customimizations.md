---
tags: emacs wiki
---

## Keeping commit messages under length limits

Posted to the [Git](/wiki/Git) mailing list by Adeodato Simó:

    (add-to-list 'auto-mode-alist
                '("/\\.git/\\(COMMIT\\|TAG\\)_EDITMSG\\'" .
                  vcs-message-mode))

    (define-derived-mode vcs-message-mode text-mode "VCS-message"
     "Major mode for editing commit and tag messages." 
     (auto-fill-mode 1)
     (set (make-local-variable 'tab-stop-list)
          (number-sequence 4 100 4))
     (setq indent-tabs-mode nil
           fill-column 72
           truncate-lines t))
