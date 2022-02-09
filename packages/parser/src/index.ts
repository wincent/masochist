// Goal is to produce an LALR(1) parser from a grammar.

/**
 * Based on: https://spec.graphql.org/October2021/#sec-Document-Syntax
 */
const Grammar = {
  tokens: ['CLOSING_BRACE', 'NAME', 'OPENING_BRACE'],
  rules: {
    Document: [['DefinitionList', () => 'action 1']],
    DefinitionList: [
      ['Definition', () => 'action 2'],
      ['DefinitionList', 'Definition', () => 'action 3'],
    ],
    Definition: [['ExecutableDefinition', () => 'action 4']],
    ExecutableDefinition: [['OperationDefinition', () => 'action 5']],
    OperationDefinition: [['SelectionSet', () => 'action 6']],
    SelectionSet: [
      ['OPENING_BRACE', 'SelectionList', 'CLOSING_BRACE', () => 'action 7'],
    ],
    SelectionList: [
      ['Selection', () => 'action 8'],
      ['SelectionList', 'Selection', () => 'action 9'],
    ],
    Selection: [['Field', () => 'action 10']],
    Field: [['NAME', () => 'action 11']],
  },
};

export default function demo() {
  return `demo: ${Object.keys(Grammar.rules).length}`;
}
