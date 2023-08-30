import {Lexer, Source} from 'graphql';

import run from './benchmark-lexer';

function* lex(input: string) {
  const lexer = new Lexer(new Source(input));
  while (true) {
    const token = lexer.advance();
    if (token.kind === '<EOF>') {
      break;
    }
    yield token;
  }
}

async function main() {
  await run(lex);
}

main().catch((error) => {
  console.log(error);
});
