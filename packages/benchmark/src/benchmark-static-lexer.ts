import lex from '@masochist/lexer';

import run from './benchmark-lexer';

run(lex).catch((error) => {
  console.log(error);
});
