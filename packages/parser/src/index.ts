import getItemSets from './getItemSets';
import getParseTable from './getParseTable';
import itemSetsToTransitionTable from './itemSetsToTransitionTable';
import parseDSL from './parseDSL';

/**
 * Based on: https://spec.graphql.org/October2021/#sec-Document-Syntax
 */
const grammarDeclaration = `
  %token AMPERSAND
  %token AT
  %token BANG
  %token BAR
  %token COLON
  %token DOLLAR
  %token ELLIPSIS
  %token EQUALS
  %token NAME
  %token NUMBER
  %token OPENING_BRACE CLOSING_BRACE
  %token OPENING_BRACKET CLOSING_BRACKET
  %token OPENING_PAREN CLOSING_PAREN
  %token STRING_VALUE BLOCK_STRING_VALUE

  Document → DefinitionList
  DefinitionList → Definition { $$ = [$1]; }
  DefinitionList → DefinitionList Definition { $1.push($2); $$ = $1; }
  Definition → ExecutableDefinition
  ExecutableDefinition → OperationDefinition
  OperationDefinition → SelectionSet
  SelectionSet → OPENING_BRACE SelectionList CLOSING_BRACE { $$ = $2; }
  SelectionList → Selection { $$ = [$1]; }
  SelectionList → SelectionList Selection { $1.push($2); $$ = $1; }
  Selection → Field
  Field → NAME
`;

export const grammar = parseDSL(grammarDeclaration);
export const itemSets = getItemSets(grammar);
export const transitionTable = itemSetsToTransitionTable(itemSets, grammar);
export const table = getParseTable(itemSets, transitionTable, grammar);
