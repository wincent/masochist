import parseDSL from '../parseDSL';

/**
 * Grammar that generates sentences like:
 *
 *    BAR { FOO }
 *    BAR { FOO FOO }
 *    { FOO }
 *    { FOO FOO }
 */
export const epsilonGrammar = parseDSL(`
  %token FOO BAR OPEN_BRACKET CLOSE_BRACKET

  S → Program
  Program → BarOpt OPEN_BRACKET FooList CLOSE_BRACKET
  FooList → FooList FOO
  FooList → FOO
  BarOpt → BAR
  BarOpt → ε
`);

/**
 * Small subset of the full GraphQL grammar.
 */
export const subsetGrammarDeclaration = `
  %token CLOSING_BRACE NAME OPENING_BRACE

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

export const subsetGrammar = parseDSL(subsetGrammarDeclaration);

// Based on grammar used in:
// http://web.archive.org/web/20211216015406/https://web.cs.dal.ca/~sjackson/lalr1.html
export const toyGrammarDeclaration = `
  %token eq star x

  S → N
  N → V eq E
  N → E
  E → V
  V → x
  V → star E
`;

export const toyGrammar = parseDSL(toyGrammarDeclaration);
