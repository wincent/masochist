---
tags: bash here.doc wiki
cache_breaker: 1
---

# Simple form

    cat <<HERE
    foo
    bar
    baz
    HERE

## Output

    foo
    bar
    baz

# Indenting

This can be useful in a shell script where you want to nest the here-doc (eg. inside an `if` block):

    cat <<-HERE
    <Tab><Tab>Stuff
    <Tab>HERE

# Echoing to a file

    cat > file.txt <<HERE
    blah
    blah
    blah
    HERE

# Piping output to another command

    cat <<HERE | sort
    foo
    bar
    baz
    HERE

## Output

    bar
    baz
    foo

# Avoiding variable substitution

    cat <<'HERE'
    $PATH
    HERE

## Output

    $PATH

# See also

-   [Here document](/wiki/Here_document) section from *Advanced Bash Scripting Guide* found at: <http://tldp.org/LDP/abs/html/here-docs.html>
