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
    condition: string | Array<string> | Set<string>,
    body: () => void,
  ) {
    const isArray = Array.isArray(condition);
    if (isArray || condition instanceof Set) {
      // BUG: ideally, `else if` wouldn't appear on new line
      // (and neither would `else`)
      this.line(`${kind} (`);

      this.indent();

      const operator = isArray ? '&&' : '||';
      const lastIndex = (isArray ? condition.length : condition.size) - 1;
      Array.from(condition).forEach((expression, i) => {
        // TODO going to need something a bit more AST-ish here?
        if (i < lastIndex) {
          this.line(`${expression} ${operator}`);
        } else {
          this.line(expression);
        }
      });

      this.dedent();

      this.line(') }');
    } else {
      this.line(`${kind} (${condition}) {`);
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
    this.line('else {');
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

  elseIf(condition: string | Array<string> | Set<string>, body: () => void) {
    this.conditional('else if', condition, body);
  }

  if(condition: string | Array<string> | Set<string>, body: () => void) {
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
