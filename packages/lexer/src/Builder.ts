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

    dedent() {
        this.#indentLevel--;
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

    // TODO: reduce duplication between elseIf and if
    elseIf(condition: string | Array<string>, body: () => void) {
        // TODO: fix unwanted newline
        if (Array.isArray(condition)) {
            this.line('else if (');

            this.indent();

            for (const expression of condition) {
                // TODO going to need something a bit more AST-ish here
                this.line(`${expression} ||`);
            }

            this.dedent();

            this.line(') }');
        } else {
            this.line(`else if (${condition}) {`);
        }

        this.indent();

        body();

        this.dedent();

        this.line('}');
    }

    if(condition: string | Array<string>, body: () => void) {
        if (Array.isArray(condition)) {
            this.line('if (');

            this.indent();

            for (const expression of condition) {
                this.line(`${expression} ||`);
            }

            this.dedent();

            this.line(') }');
        } else {
            this.line(`if (${condition}) {`);
        }

        this.indent();

        body();

        this.dedent();

        this.line('}');
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
