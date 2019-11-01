import {Token} from './Lexer';
import lex, {TokenName, Tokens, isIgnored} from './lex';

namespace GraphQL {
  export type Definition = Operation; // | ... | ...

  export interface Document {
    definitions: Array<any>;
    kind: 'DOCUMENT';
  }

  export interface Field {
    kind: 'FIELD';
    name: string;
  }

  export interface Operation {
    kind: 'OPERATION';
    name?: string;
    directives?: Array<any>;
    selections: Array<any>;
    type: 'MUTATION' | 'SUBSCRIPTION' | 'QUERY';
    variables?: Array<any>;
  }

  export type Selection = Field; // | ... | ...
}

/**
 * @see https://graphql.github.io/graphql-spec/draft/
 */
export default function parse(input: string) {
  const parser = new Parser(input);

  return parser.parse();
}

class Parser {
  private _iterator: Generator<Token>;
  private _token: Token | null;

  constructor(input: string) {
    this._iterator = lex(input);
    this._token = null;
  }

  private advance(name: TokenName, contents?: string): Token | null {
    if (this.at(name, contents)) {
      const token = this._token;

      this._token = null;

      return token!;
    }

    return null;
  }

  /**
   * Returns true if the current token is of the type indicated by `name`, and
   * optionally verifies that its contents match the specified `contents` value.
   */
  private at(name: TokenName, contents?: string): boolean {
    if (this._token === null) {
      this._token = this.next();
    }

    if (!this._token) {
      return false;
    }

    if (this._token.name !== name) {
      return false;
    }

    if (contents) {
      return this._token.contents === contents;
    }

    return true;
  }

  /**
   * Attempt to consume the current token.
   *
   * Throws if the current token does not match the type specified by `name`.
   */
  private consume(name?: TokenName): Token {
    if (name && !this.at(name)) {
      throw new Error(`Expected ${name} at $LOCATION`);
    }

    const token = this._token;

    this._token = null;

    return token!;
  }

  /**
   * Returns the current token.
   */
  private current(): Token | null {
    return this._token || this.next();
  }

  /**
   * Returns the next lexical (non-ignored) Token, or `null` if there isn't one.
   */
  private next(): Token | null {
    while (true) {
      const {done, value} = this._iterator.next();

      if (done) {
        return null;
      }

      if (isIgnored(value)) {
        continue;
      }

      return value;
    }
  }

  parse(): GraphQL.Document {
    const document = this.parseDocument();

    if (!document.definitions.length) {
      throw new Error('Document must contain at least one definition');
    }

    let anonymous = 0;
    let operations = 0;

    document.definitions.forEach(definition => {
      if (definition.kind === 'OPERATION') {
        operations++;

        if (definition.name === undefined) {
          anonymous++;
        }
      }
    });

    if (anonymous && operations > 1) {
      throw new Error(
        'Anonymous operation must be the only operation in the document',
      );
    }

    return document;
  }

  /**
   * 2.2
   */
  parseDocument(): GraphQL.Document {
    const document: GraphQL.Document = {
      definitions: [],
      kind: 'DOCUMENT',
    };

    // BUG: this has type "any"
    let definition;

    while ((definition = this.parseDefinition())) {
      document.definitions.push(definition);
    }

    return document;
  }

  /**
   * 2.2.
   */
  parseDefinition(): GraphQL.Definition | null {
    if (this.at(Tokens.OPENING_BRACE)) {
      return {
        kind: 'OPERATION',
        name: undefined,
        selections: this.parseSelectionSet(),
        type: 'QUERY',
      };
    } else if (this.advance(Tokens.NAME, 'mutation')) {
      const name = this.consume(Tokens.NAME).contents;

      return {
        kind: 'OPERATION',
        name,
        selections: this.parseSelectionSet(),
        type: 'MUTATION',
      };
    } else if (this.advance(Tokens.NAME, 'query')) {
      const name = this.consume(Tokens.NAME).contents;

      return {
        kind: 'OPERATION',
        name,
        selections: this.parseSelectionSet(),
        type: 'QUERY',
      };
    } else if (this.advance(Tokens.NAME, 'subscription')) {
      const name = this.consume(Tokens.NAME).contents;

      return {
        kind: 'OPERATION',
        name,
        selections: this.parseSelectionSet(),
        type: 'SUBSCRIPTION',
      };
    }

    return null;
  }

  parseSelectionSet(): Array<GraphQL.Selection> {
    this.consume(Tokens.OPENING_BRACE);

    const selections = [];

    let selection;

    while ((selection = this.parseSelection())) {
      selections.push(selection);
    }

    this.consume(Tokens.CLOSING_BRACE);

    return selections;
  }

  parseSelection() {
    if (this.at(Tokens.NAME)) {
      return this.parseField();
    } else if (this.at(Tokens.ELLIPSIS)) {
      this.consume();
    }
  }

  parseField(): GraphQL.Field {
    const name = this.consume(Tokens.NAME).contents;

    return {
      kind: 'FIELD',
      name,
    };
  }
}
