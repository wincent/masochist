export type Condition =
  | AndCondition
  | ExpressionCondition
  | OrCondition
  | StarCondition;

export type AndCondition = {
  conditions: Array<Condition>;
  kind: 'AndCondition';
};

export type ExpressionCondition = {
  conditions: string;
  kind: 'ExpressionCondition';
};

export type OrCondition = {
  conditions: Array<Condition>;
  kind: 'OrCondition';
};

export type StarCondition = {
  conditions: Condition;
  kind: 'StarCondition';
};

/**
 * Allows callers to build up a TS output file in a procedural fashion.
 */
export default class Builder {
  #indentLevel: number;
  #output: string;
  #tabWidth: number;

  constructor({tabWidth} = {tabWidth: 4}) {
    this.#indentLevel = 0;
    this.#output = '';
    this.#tabWidth = tabWidth;
  }

  append(contents: string) {
    this.#output += contents;
  }

  blank() {
    this.endLine();
  }

  /**
   * Helper method for constructing `if`/`else if` conditonal statements.
   *
   * If `condition` is an Array, that implies an `&&` expression.
   * If it is a Set, that implies an `||` expression.
   * If it is a string, that implies simple equality (`===`).
   */
  conditional(
    kind: 'if' | 'else if',
    condition: Condition,
    body: () => void,
  ) {
    // May backtrack so as to appear on same line as preceeding `}`.
    const sameLine = kind === 'else if';
    if (sameLine) {
      this.#output = this.#output.replace(/\}\s+$/, '} ');
    }
    if (
      condition.kind === 'AndCondition' ||
      condition.kind === 'OrCondition'
    ) {
      if (sameLine) {
        this.endLine(`${kind} (`);
      } else {
        this.line(`${kind} (`);
      }

      this.indent();

      const operator = condition.kind === 'AndCondition' ? '&&' : '||';
      const lastIndex = condition.conditions.length - 1;
      condition.conditions.forEach((subcondition, i) => {
        if (i < lastIndex) {
          if (subcondition.kind === 'ExpressionCondition') {
            // TODO: condsider wrapping in parens here if precendence demands it
            this.line(`${subcondition.conditions} ${operator}`);
          } else {
            // TODO: recurse to deal with nested expressions
          }
        } else {
          if (subcondition.kind === 'ExpressionCondition') {
            this.line(subcondition.conditions);
          } else {
            // TODO: recurse to deal with nested expressions
          }
        }
      });

      this.dedent();

      this.line(') {');
    } else if (sameLine) {
      if (condition.kind === 'ExpressionCondition') {
        this.endLine(`${kind} (${condition.conditions}) {`);
      } else {
        // TODO recurse
      }
    } else {
      if (condition.kind === 'ExpressionCondition') {
        this.line(`${kind} (${condition.conditions}) {`);
      } else {
        // TODO recurse
      }
    }

    this.indent();

    body();

    this.dedent();

    this.line('}');
  }

  dedent() {
    this.#indentLevel--;
  }

  else(body: () => void) {
    this.#output = this.#output.replace(/\}\s+$/, '} ');
    this.endLine('else {');
    this.indent();
    body();
    this.dedent();
    this.line('}');
  }

  endLine(contents: string = '') {
    this.#output += `${contents}\n`;
  }

  for(
    init: string = '',
    condition: string = '',
    finalizer: string = '',
    body: () => void,
  ) {
    this.line(`for (${init}; ${condition}; ${finalizer}) {`);

    this.indent();

    body();

    this.dedent();

    this.line('}');
  }

  elseIf(condition: Condition, body: () => void) {
    this.conditional('else if', condition, body);
  }

  if(condition: Condition, body: () => void) {
    this.conditional('if', condition, body);
  }

  indent() {
    this.#indentLevel++;
  }

  // TODO: print return type info
  generator(name: string, args: Array<[string, string]>, body: () => void) {
    this.startLine(`*function ${name}(`);

    // TODO: maybe wrap this if overlength
    this.append(args.map(([arg, type]) => `${arg}: ${type}`).join(', '));

    this.endLine(') {');

    this.indent();

    body();

    this.dedent();

    this.line('}');
  }

  line(contents: string) {
    this.startLine();
    this.endLine(contents);
  }

  object(obj: {[key: string]: string}) {
    this.endLine('{');

    this.indent();

    for (const [key, value] of Object.entries(obj)) {
      this.line(`${key}: ${value},`);
    }

    this.dedent();

    this.startLine('}');
  }

  print() {
    return this.#output;
  }

  startLine(contents: string = '') {
    this.#output += ' '.repeat(this.#indentLevel * this.#tabWidth);
    this.#output += contents;
  }

  yield(value: () => void) {
    this.startLine('yield ');

    value();

    this.endLine(';');
  }
}
