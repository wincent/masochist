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

  Document → DefinitionList {
    $$ = {
      kind: 'DOCUMENT',
      definitions: $1,
    };
  }

  DefinitionList → Definition { $$ = [$1]; }
  DefinitionList → DefinitionList Definition { $1.push($2); $$ = $1; }

  Definition → ExecutableDefinition { $$ = $1; }

  ExecutableDefinition → OperationDefinition { $$ = $1; }

  # TODO: also VariableDefinitionsOpt
  OperationDefinition → OperationType OperationNameOpt DirectivesOpt SelectionSet {
    $$ = {
      kind: 'OPERATION',
      name: $2,
      directives: $3,
      selections: $4,
      type: $1,
    };
  }
  OperationDefinition → SelectionSet {
    $$ = {
      kind: 'OPERATION',
      name: null,
      directives: null,
      selections: $1,
      type: 'QUERY',
    };
  }

  OperationType → NAME {{
    const {contents} = $1;
    if (contents === 'query') {
      $$ = 'QUERY';
    } else if (contents === 'mutation') {
      $$ = 'MUTATION';
    } else if (contents === 'subscription') {
      $$ = 'SUBSCRIPTION';
    } else {
      throw new Error('Unsupported operation type: ' + contents);
    }
  }}

  OperationNameOpt → NAME { $$ = $1.contents; }
  OperationNameOpt → ε { $$ = null; }

  SelectionSet → OPENING_BRACE SelectionList CLOSING_BRACE { $$ = $2; }

  SelectionSetOpt → SelectionSet { $$ = $1; }
  SelectionSetOpt → ε { $$ = null; }

  SelectionList → Selection { $$ = [$1]; }
  SelectionList → SelectionList Selection { $1.push($2); $$ = $1; }

  Selection → Field { $$ = $1; }

  # TODO: add DirectivesOpt to these
  Field → NAME SelectionSetOpt {
    $$ = {
      kind: 'FIELD',
      alias: null,
      directives: null,
      name: $1.contents,
      selections: $2,
    };
  }
  Field → Alias NAME SelectionSetOpt {
    $$ = {
      kind: 'FIELD',
      alias: $1,
      directives: null,
      name: $2.contents,
      selections: $3,
    };
  }

  Alias → NAME COLON { $$ = $1.contents; }

  DirectivesOpt → DirectiveList { $$ = $1; }
  DirectivesOpt → ε { $$ = null; }

  DirectiveList → Directive { $$ = [$1]; }
  DirectiveList → DirectiveList Directive { $1.push($2); $$ = $1; }

  # TODO: add arguments
  Directive → AT NAME {
    $$ = {
      kind: 'DIRECTIVE',
      name: $2.contents,
    };
  }
`;

export const grammar = parseDSL(grammarDeclaration);
export const itemSets = getItemSets(grammar);
export const transitionTable = itemSetsToTransitionTable(itemSets, grammar);
export const table = getParseTable(itemSets, transitionTable, grammar);
