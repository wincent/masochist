import StringScanner, {toAnchoredRegExp} from '../StringScanner';

describe('StringScanner', () => {
  describe('context()', () => {
    let scanner: StringScanner;

    beforeEach(() => {
      const sample = [
        'first line',
        'second line',
        'third line',
        'fourth line',
        'fifth line',
        'sixth line',
        'seventh line',
      ].join('\n');

      scanner = new StringScanner(sample);
    });

    it('shows nothing for an empty haystack', () => {
      const scanner = new StringScanner('');

      expect(scanner.context(1, 1)).toBe('');
    });

    it('shows context at the start of the haystack', () => {
      expect(scanner.context(1, 1)).toBe(
        '> 1 | first line\n' +
          '    | ^\n' +
          '  2 | second line\n' +
          '  3 | third line\n' +
          '  4 | fourth line\n',
      );
    });

    it('shows context on the first line', () => {
      expect(scanner.context(1, 5)).toBe(
        '> 1 | first line\n' +
          '    |     ^\n' +
          '  2 | second line\n' +
          '  3 | third line\n' +
          '  4 | fourth line\n',
      );
    });

    it('shows context on the last line', () => {
      expect(scanner.context(7, 5)).toBe(
        '  5 | fifth line\n' +
          '  6 | sixth line\n' +
          '> 7 | seventh line\n' +
          '    |     ^\n',
      );
    });

    it('shows context in the middle', () => {
      expect(scanner.context(4, 5)).toBe(
        '  2 | second line\n' +
          '  3 | third line\n' +
          '> 4 | fourth line\n' +
          '    |     ^\n' +
          '  5 | fifth line\n' +
          '  6 | sixth line\n' +
          '  7 | seventh line\n',
      );
    });
  });

  describe('expect()', () => {
    let scanner: StringScanner;

    beforeEach(() => {
      scanner = new StringScanner('+some stuff in here');
    });

    it('returns a match', () => {
      expect(scanner.expect(/\+some/)).toBe('+some');
    });

    it('throws when matching fails', () => {
      expect(() => scanner.expect(/nope/)).toThrow(
        'Expected /nope/ at line 1, column 1 of input string\n' +
          '\n' +
          '> 1 | +some stuff in here\n' +
          '    | ^\n',
      );
    });

    it('throws given an empty string argument', () => {
      expect(() => scanner.expect('')).toThrow('Invalid pattern ""');
    });

    it('matches a single-character string argument literally', () => {
      expect(scanner.expect('+')).toBe('+');
    });

    it('matches a multiple-character string argument literally', () => {
      expect(scanner.expect('+some')).toBe('+some');
    });

    it('includes a description in the failure message when provided', () => {
      expect(() => scanner.expect(/nope/, 'keyword')).toThrow(
        'Expected keyword at line 1, column 1 of input string\n' +
          '\n' +
          '> 1 | +some stuff in here\n' +
          '    | ^\n',
      );
    });
  });

  describe('fullContext', () => {
    it('includes line, column, description, and context', () => {
      const scanner = new StringScanner('my input string', 'file.txt');

      scanner.scan(/my /);

      expect(scanner.fullContext).toBe(
        'line 1, column 4 of file.txt\n' +
          '\n' +
          '> 1 | my input string\n' +
          '    |    ^\n' +
          '\n',
      );
    });
  });

  describe('peek()', () => {
    it('returns true when the pattern will match', () => {
      const scanner = new StringScanner('words and shit');

      expect(scanner.peek(/\w+/)).toBe(true);

      scanner.scan(/words\s+/);

      expect(scanner.peek(/and/)).toBe(true);
    });

    it('returns false when the pattern will not match', () => {
      const scanner = new StringScanner('words and shit');

      expect(scanner.peek(/\d+/)).toBe(false);

      scanner.scan(/words\s+/);

      expect(scanner.peek(/not a match/)).toBe(false);
    });

    it('throws given an empty string argument', () => {
      const scanner = new StringScanner('stuff');
      expect(() => scanner.peek('')).toThrow('Invalid pattern ""');
    });

    it('peeks for a single-character string argument literally', () => {
      const scanner = new StringScanner('*bold*');
      expect(scanner.peek('*')).toBe(true);
      expect(scanner.peek('x')).toBe(false);
    });

    it('peeks for a multiple-character string argument literally', () => {
      const scanner = new StringScanner('*bold*');
      expect(scanner.peek('*bo')).toBe(true);
      expect(scanner.peek('***')).toBe(false);
    });
  });

  describe('scan()', () => {
    it('scans regular expressions', () => {
      const scanner = new StringScanner('over 9000');

      expect(scanner.scan(/\w+/)).toBe('over');
      expect(scanner.scan(/\s+/)).toBe(' ');
      expect(scanner.scan(/\d+/)).toBe('9000');
    });

    it('returns null when there is no match', () => {
      const scanner = new StringScanner('something');

      expect(scanner.scan(/foo/)).toBe(null);
    });

    it('throws given an empty string argument', () => {
      const scanner = new StringScanner('stuff');
      expect(() => scanner.scan('')).toThrow('Invalid pattern ""');
    });

    it('scans a single-character string argument literally', () => {
      const scanner = new StringScanner('+100,000');
      expect(scanner.scan('+')).toBe('+');
      expect(scanner.scan('+')).toBe(null);
    });

    it('scans a multiple-character string argument literally', () => {
      const scanner = new StringScanner('+100,000');
      expect(scanner.scan('+100')).toBe('+100');
      expect(scanner.scan('+100')).toBe(null);
    });
  });

  describe('atEnd', () => {
    it('is always already at the end of an empty string', () => {
      const scanner = new StringScanner('');

      expect(scanner.atEnd).toBe(true);
    });

    it('does not start at the end of a non-empty string', () => {
      const scanner = new StringScanner('contents');

      expect(scanner.atEnd).toBe(false);
    });

    it('arrives at the end of a non-empty string after scanning it all', () => {
      const scanner = new StringScanner('stuff');

      scanner.scan(/.+/);

      expect(scanner.atEnd).toBe(true);
    });
  });

  describe('description', () => {
    it('defaults to "input string"', () => {
      const scanner = new StringScanner('');

      expect(scanner.description).toBe('input string');
    });

    it('uses the value passed to the constructor, if provided', () => {
      const scanner = new StringScanner('', '/etc/passwd');

      expect(scanner.description).toBe('/etc/passwd');
    });
  });

  describe('last', () => {
    it('is initially null', () => {
      const scanner = new StringScanner('');
      expect(scanner.last).toBe(null);
    });

    it('holds the most recent match', () => {
      const scanner = new StringScanner('foobar');
      scanner.scan(/f../);
      expect(scanner.last).toBe('foo');
      scanner.scan(/.../);
      expect(scanner.last).toBe('bar');
    });

    it('holds `null` if the last scan matched nothing', () => {
      const scanner = new StringScanner('foobar');
      scanner.scan(/qux/);
      expect(scanner.last).toBe(null);
    });
  });

  describe('index', () => {
    it('is zero before scanning starts', () => {
      expect(new StringScanner('hey').index).toBe(0);
    });

    it('reflects the portion of the string scanned so far', () => {
      const scanner = new StringScanner('stuff here');

      scanner.scan(/\w+/);

      expect(scanner.index).toBe(5);

      scanner.scan(/.+/);

      expect(scanner.index).toBe(10);
    });
  });

  describe('location', () => {
    it('is [1, 1] before scanning starts', () => {
      const scanner = new StringScanner('hey');

      expect(scanner.location).toEqual([1, 1]);
    });

    it('increments the column number as text is scanned', () => {
      const scanner = new StringScanner('stuff here');

      scanner.scan(/\w+/);

      expect(scanner.location).toEqual([1, 6]);
    });

    it('increments the line number as text is scanned', () => {
      const scanner = new StringScanner('food\nfight');

      scanner.scan(/food\n/);
      scanner.scan(/../);

      expect(scanner.location).toEqual([2, 3]);
    });

    describe('regressions', () => {
      it('reports locations in column 1', () => {
        const scanner = new StringScanner('food\nfight');

        scanner.scan(/food\n/);

        expect(scanner.location).toEqual([2, 1]);
      });

      it('reports locations at the end of the input', () => {
        const scanner = new StringScanner('hello');

        scanner.scan(/hello/);

        expect(scanner.location).toEqual([1, 6]);
      });

      it('reports locations at the end of a line', () => {
        const scanner = new StringScanner('food\nfight\n\nnow');

        scanner.scan(/food\nfight/);

        expect(scanner.location).toEqual([2, 6]);
      });
    });
  });
});

describe('toAnchoredRegExp()', () => {
  it('turns a non-anchored RegExp into an anchored one', () => {
    const anchored = toAnchoredRegExp(/stuff/);

    expect(anchored.source).toBe('^stuff');
  });

  it('preserves flags', () => {
    const anchored = toAnchoredRegExp(/stuff/gi);

    expect(anchored.flags).toBe('gi');
  });

  it('leaves an already-anchored RegExp unchanged', () => {
    const regExp = /^stuff/;

    expect(toAnchoredRegExp(regExp)).toBe(regExp);
  });
});
