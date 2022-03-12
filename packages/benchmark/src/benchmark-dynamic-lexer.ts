import {lex} from '@masochist/legacy';

import run from './benchmark-lexer';

run(lex).catch((error) => {
  console.log(error);
});
