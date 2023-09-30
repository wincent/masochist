## Limitations

- Parses only a subset of the full TypeScript language; that is, not all JavaScript constructs can be parsed, nor all TypeScript type annotations. This is not intended to be a general purpose TypeScript parser but rather just enough to parse the snippets needed by Masochist itself.
- Unary minus is detected in the lexer, not the parser; that is, `10-1` will lex as two `NUMBER` tokens (`10` then `-1`) as opposed to a `NUMBER`, a `MINUS`, then a `NUMBER` token. To obtain the latter, one would need to input `10 - 1` instead. This limitation wouldn't be hard to overcome, but neither do I have a particularly strong incentive to do so.
- Identifiers must be ASCII alone (this is a lexer simplification; again, wouldn't be too hard to overcome, but nor is there any real need to).
- Relies on simplifying assumptions:
  - All statements should end with a semi-colon.
  - Anywhere a multi-statement block may appear (ie. `for`, `if`, `while` etc), it must be delimited by curly braces. This is true even when the block will contain only a single statement.
  - Comments only appear in statement positions (ie. not in between two expressions).
  - Speaking of comments, we assume only line comments (ie. `//`) _documentation_ comments (ie. `/** ... */`) exist.
