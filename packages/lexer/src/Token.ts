export default class Token {
  name: string;
  start: number;
  end: number;
  source: string;

  constructor(name: string, start: number, end: number, source: string) {
    // No validation, for speed; we trust the generated lexer to be flawless.
    this.name = name;
    this.start = start;
    this.end = end;
    this.source = source;
  }

  get contents() {
    const value = this.source.slice(this.start, this.end);
    Object.defineProperty(this, 'contents', {value});
    return value;
  }
}
