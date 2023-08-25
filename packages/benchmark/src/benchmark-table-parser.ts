import {grammar, lex, table} from '@masochist/graphql';
import {makeNode, parseWithTable} from '@masochist/parser';

import run from './benchmark-parser';

function parse(source: string) {
  const tokens = [...lex(source)];
  return parseWithTable(table, tokens, grammar, makeNode);
}

run(parse).catch((error) => {
  console.log(error);
});
