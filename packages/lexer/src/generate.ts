import Builder from './Builder';

type Callback = (dsl: {
  ignored: (name: string, ...matchers: Array<Matcher>) => void;
  token: (name: string, ...matchers: Array<Matcher>) => void;
}) => void;

type Matcher = RegExp | string;

type Token = {
  ignored: boolean;
  name: string;
  matchers: Array<Matcher>;
};

function asciify(text: string): string {
  // Everything outside the printable ASCII range of 0x20 (Space) to 0x7e (~)
  // gets turned into a Unicode escape.
  return text.replace(/[^ -~]/g, (char) => {
    return `\\u${char.charCodeAt(0).toString(16).padStart(4, '0')}`;
  });
}

/**
 * @see https://tc39.es/ecma262/#sec-quotejsonstring
 */
function escape(
  text: string,
  options: {except: string} = {except: ''},
): string {
  return text.replace(/["\b\f\n\r\t\\]/g, (char) => {
    if (options.except.includes(char)) {
      return char;
    } else {
      return JSON.stringify(char).slice(1, -1);
    }
  });
}

function stringify(text: string): string {
  const hasDoubleQuote = text.includes('"');
  const hasSingleQuote = text.includes("'");

  if (!hasSingleQuote) {
    return `'${asciify(escape(text, {except: '"'}))}'`;
  } else if (!hasDoubleQuote) {
    return `"${asciify(escape(text))}"`;
  } else {
    return JSON.stringify(text);
  }
}

/**
 * Provides a DSL for generating a basic GraphQL lexer.
 */
export default function generate(callback: Callback): string {
  const TOKENS: Array<Token> = [];

  function ignored(name: string, ...matchers: Array<Matcher>) {
    TOKENS.push({
      ignored: true,
      name,
      matchers,
    });
  }

  function token(name: string, ...matchers: Array<Matcher>) {
    TOKENS.push({
      ignored: false,
      matchers,
      name,
    });
  }

  callback({ignored, token});

  const b = new Builder();

  b.generator('lex', [['input', 'string']], () => {
    b.for('let i = 0', 'i < input.length', 'i++', () => {
      b.line('const char = input[i];');
      b.blank();

      for (let i = 0; i < TOKENS.length; i++) {
        const token = TOKENS[i];

        const statement = i ? 'elseIf' : 'if';

        const {ignored, name, matchers} = token;

        const lookahead = matchers[0];
      }

      b.else(() => {
        // TODO: maybe include index here
        b.line("throw new Error('Unexpected character');");
      });
    });
  });

  return b.print();
}
