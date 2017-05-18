---
tags: bash wiki
---

Counter to your intuition, you would not escape:

     That's cool

like:

    'That\'s cool'

in [Bash](/wiki/Bash).

Rather, you would have to do:

     'That'\''s cool'

ie:

-   close the first part of the string (That)
-   insert a backslashed single quote (\\')
-   re-open and terminate the rest of the string (s cool)
