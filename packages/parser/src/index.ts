import fs from 'fs';
import path from 'path';

import getItemSets from './getItemSets';
import getParseTable from './getParseTable';
import itemSetsToTransitionTable from './itemSetsToTransitionTable';
import parseDSL from './parseDSL';

const grammarDeclaration = fs.readFileSync(
  path.join(__dirname, 'graphql.grammar'),
  'utf8',
);

export const grammar = parseDSL(grammarDeclaration);
export const itemSets = getItemSets(grammar);
export const transitionTable = itemSetsToTransitionTable(itemSets, grammar);
export const table = getParseTable(itemSets, transitionTable, grammar);
