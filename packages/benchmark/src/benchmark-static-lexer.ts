import {lex} from '@masochist/graphql';

import run from './benchmark-lexer';

run(lex).catch((error) => {
  console.log(error);
});
