// Goal is to produce an LALR(1) parser from a grammar.

// TODO: Apart from the augmented rule, could avoid storing `lhs`/`rhs` and instead just store index of rule in original grammar.
export type Item = {
  lhs: string;
  rhs: Array<string>;
  dot: number;
};

export type ItemSet = {
  items: Array<Item>; transitions: {[symbol: string]: number};
};

/**
 * Based on: https://spec.graphql.org/October2021/#sec-Document-Syntax
 */
/*
export const grammar: Grammar = {
  tokens: new Set(['CLOSING_BRACE', 'NAME', 'OPENING_BRACE']),
  rules: [
    {lhs: 'Document', rhs: ['DefinitionList']},
    {lhs: 'DefinitionList', rhs: ['Definition']},
    {
      lhs: 'DefinitionList',
      rhs: ['DefinitionList', 'Definition'],
      action: '{ $$ = [...$1, $2] }',
    },
    {lhs: 'Definition', rhs: ['ExecutableDefinition']},
    {lhs: 'ExecutableDefinition', rhs: ['OperationDefinition']},
    {lhs: 'OperationDefinition', rhs: ['SelectionSet']},
    {
      lhs: 'SelectionSet',
      rhs: ['OPENING_BRACE', 'SelectionList', 'CLOSING_BRACE'],
    },
    {lhs: 'SelectionList', rhs: ['Selection']},
    {
      lhs: 'SelectionList',
      rhs: ['SelectionList', 'Selection'],
      action: '{ $$ = [...$1, $2] }',
    },
    {lhs: 'Selection', rhs: ['Field']},
    {lhs: 'Field', rhs: ['NAME']},
  ],
};
*/

/*
export const grammarDeclaration = `
    %token CLOSING_BRACE NAME OPENING_BRACE

    Document → DefinitionList
    DefinitionList → Definition
    DefinitionList → DefinitionList Definition { $$ = [...$1, $2] }
    Definition → ExecutableDefinition
    ExecutableDefinition → OperationDefinition
    OperationDefinition → SelectionSet
    SelectionSet → OPENING_BRACE SelectionList CLOSING_BRACE
    SelectionList → Selection
    SelectionList → SelectionList Selection { $$ = [...$1, $2] }
    Selection → Field
    Field → NAME
`;
*/
