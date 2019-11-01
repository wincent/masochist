import {Token} from './Lexer';
import lex, {TokenName, Tokens, isIgnored} from './lex';

namespace GraphQL {
  export interface Document {
    definitions: Array<any>;
    kind: 'DOCUMENT';
  }

  export interface Operation {
    kind: 'OPERATION';
    name?: string;
    directives?: Array<any>;
    selections: Array<any>;
    type: 'MUTATION' | 'SUBSCRIPTION' | 'QUERY';
    variables?: Array<any>;
  }
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
      // TODO: decide whether to keep this "contents" paramter around; not sure
      // if it will be useful.
      return this._token.contents === contents;
    }

    return true;
  }

  private consume(name: TokenName): Token {
    // if can't consume, boom
    if (!this.at(name)) {
      throw new Error(`Expected ${name} at $LOCATION`);
    }

    return this._token!;
  }

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

  parse() {
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
  parseDocument() {
    const document: GraphQL.Document = {
      definitions: [],
      kind: 'DOCUMENT',
    };

    let definition;

    while ((definition = this.parseDefinition())) {
      document.definitions.push(definition);
    }

    return document;
  }

  /**
   * 2.2.
   */
  parseDefinition() {
    if (this.at(Tokens.OPENING_BRACE)) {
      return {
        kind: 'OPERATION',
        name: undefined,
        selections: this.parseSelectionSet(),
        type: 'QUERY',
      };
    } else if (this.at(Tokens.NAME, 'query')) {
      const name = this.consume(Tokens.NAME).contents;
      return {
        kind: 'OPERATION',
        name,
        selections: this.parseSelectionSet(),
        type: 'QUERY',
      };
    }
  }

  parseSelectionSet() {
    return [];
  }
}
