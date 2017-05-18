---
tags: subversion version.control svk wiki
---

[Tagging](/wiki/Tagging) is the process of assigning a meaningful label to a particular version of a source tree using a [version control](/wiki/version_control) system. [Tags](/wiki/Tags) are like [branches](/wiki/branches), except they are read-only.

# Tagging with [SVK](/wiki/SVK)

## Tagging the HEAD of the trunk

    svk cp //mirrors/project/trunk //mirrors/project/tags/tag_name \
           -m "Tagging the x.y release of z"

# Tagging with [Subversion](/wiki/Subversion)

## Tagging the HEAD of the trunk

    svn cp svn+ssh://svn.example.com/project-name/trunk svn+ssh://svn.example.com/project-name/tags/the_tag
