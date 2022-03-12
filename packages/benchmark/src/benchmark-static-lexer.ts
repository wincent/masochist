import lex from '@masochist/lexer';

import run from './benchmark-lexer';

run((source: string) => [...lex(source)]).catch((error) => {
  console.log(error);
});
