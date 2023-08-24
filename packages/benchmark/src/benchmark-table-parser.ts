import {lex} from '@masochist/graphql';
import {grammar, makeNode, parseWithTable, table} from '@masochist/parser';

import run from './benchmark-parser';

function parse(source: string) {
  const tokens = [...lex(source)];
  return parseWithTable(table, tokens, grammar, makeNode);
}

run(parse).catch((error) => {
  console.log(error);
});
