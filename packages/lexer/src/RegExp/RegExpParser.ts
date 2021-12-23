import StringScanner from '../StringScanner';
import invariant from '../invariant';
import normalizeCharacterClass from './normalizeCharacterClass';
import sortAtoms from './sortAtoms';

// AST types.

export type Alternate = {
  kind: 'Alternate';
  children: Array<Node>;
};

// Represents ".", which matches anything (technically, it isn't supposed to
// match line terminators like "\n", "\r", "\u2028", and "\u2020", but we don't
// have to deal with those in our input so we act like they don't exist, making
// the code simpler and faster).
//
// We model this as a separate Node type rather than converting it to a
// CharacterClass so that we can generate simpler code that unconditionally
// advances an index rather than performing a pair of bounds checks or
// performing other comparisons. That is, in pseudo-code, we can write:
//
//    if (!atEnd) {
//      i = i + 1;
//    }
//
// instead of:
//
//    if (char >= 0x0000 && char <= 0xffff) {
//      // Do something.
//    }
//
// or if we were going to be strict about the meaning of ".", this:
//
//    if (
//      char !== '\n' &&
//      char !== '\r' &&
//      char !== '\u2028' &&
//      char !== '\u2029' &&
//    ) {
//      // Do something.
//    }
//
export type Anything = {
  kind: 'Anything';
};

export type Atom = {
  kind: 'Atom';
  value: string;
};

// Note that a CharacterClass may contain a nested CharacterClass such as `\d`,
// `\s`, or `\w`, which we represent using a flattened form:
//
//    [a-z\d] = "a to z, or any digit", flattens to: [a-z0-9]
//    [^a-z\d] = "anything except a to z and digits", flattens to [^a-z0-9]
//
// Negated forms (eg. `\D`, `\S`, or `\W`) also exist:
//
//    [1-5\D] = "1 to 5, or any non-digit"
//    [^a-z\D] = "anything except a to z and digits"
//
// Those are a bit harder to write out in flattened form, but we do flatten
// them.
export type CharacterClass = {
  kind: 'CharacterClass';
  children: Array<Atom | Range>;
  negated: boolean;
};

export type Node =
  | Alternate
  | Anything
  | Atom
  | CharacterClass
  | Range
  | Repeat
  | Sequence;

export type Range = {
  kind: 'Range';
  from: string;
  to: string;
};

export type Repeat = {
  kind: 'Repeat';
  child: Node;
  maximum: number;
  minimum: number;
};

export type Sequence = {
  kind: 'Sequence';
  children: Array<Node>;
};

// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
const BASE_SPECIAL_CLASSES: {[key: string]: CharacterClass | undefined} =
  freeze({
    d: {
      kind: 'CharacterClass',
      children: [{kind: 'Range', from: '0', to: '9'}],
      negated: false,
    } as CharacterClass,
    s: {
      kind: 'CharacterClass',
      children: [
        {kind: 'Atom', value: ' '},
        {kind: 'Atom', value: '\f'},
        {kind: 'Atom', value: '\n'},
        {kind: 'Atom', value: '\r'},
        {kind: 'Atom', value: '\t'},
        {kind: 'Atom', value: '\v'},
        {kind: 'Atom', value: '\u00a0'},
        {kind: 'Atom', value: '\u1680'},
        {kind: 'Range', from: '\u2000', to: '\u200a'},
        {kind: 'Atom', value: '\u2028'},
        {kind: 'Atom', value: '\u2029'},
        {kind: 'Atom', value: '\u202f'},
        {kind: 'Atom', value: '\u205f'},
        {kind: 'Atom', value: '\u3000'},
        {kind: 'Atom', value: '\ufeff'},
      ],
      negated: false,
    } as CharacterClass,
    w: {
      kind: 'CharacterClass',
      children: [
        {kind: 'Range', from: 'A', to: 'Z'},
        {kind: 'Range', from: 'a', to: 'z'},
        {kind: 'Range', from: '0', to: '9'},
        {kind: 'Atom', value: '_'},
      ],
      negated: false,
    } as CharacterClass,
  });

const SPECIAL_CLASSES: {[key: string]: CharacterClass | undefined} = freeze({
  ...BASE_SPECIAL_CLASSES,
  D: {...BASE_SPECIAL_CLASSES.d, negated: true} as CharacterClass,
  S: {...BASE_SPECIAL_CLASSES.s, negated: true} as CharacterClass,
  W: {...BASE_SPECIAL_CLASSES.w, negated: true} as CharacterClass,
});

function freeze<T>(object: T): Readonly<T> {
  if (Array.isArray(object)) {
    object.forEach((item) => freeze(item));
    return Object.freeze<T>(object);
  } else if (typeof object === 'object') {
    for (const value of Object.values(object)) {
      freeze(value);
    }
    return Object.freeze(object);
  }
  return object;
}

/**
 * Returns the case-toggled version of a single-character string, or `null` if
 * there is no inverse.
 */
function toggleCase(input: string): string | null {
  if (input.length !== 1) {
    throw new Error(
      `toggleCase(): expected string to have length 1, had ${input.length}`,
    );
  }
  const lower = input.toLowerCase();
  if (lower !== input) {
    return lower;
  }
  const upper = input.toUpperCase();
  if (upper !== input) {
    return upper;
  }
  return null;
}

/**
 * Unwraps a node if it can done without altering the behavior of the RegExp.
 * For example, "(a)" is unwrapped to "a", as is "((a))" and so on. Likewise, a
 * character class with a single member is unwrapped (eg. "[a]" becomes "a");
 * but note that a negated character class does not (ie. "[^a]" remains "[^a]").
 */
function unwrap(node: Node): Node {
  switch (node.kind) {
    case 'Alternate':
      if (node.children.length === 1) {
        return unwrap(node.children[0]);
      }
      break;
    case 'Anything':
    case 'Atom':
      return node;
    case 'CharacterClass':
      if (!node.negated && node.children.length === 1) {
        return unwrap(node.children[0]);
      }
      break;
    case 'Range':
      if (node.from === node.to) {
        return {
          kind: 'Atom',
          value: node.from,
        };
      }
      break;
    case 'Repeat':
      if (node.minimum === 1 && node.maximum === 1) {
        return unwrap(node.child);
      }
      break;
    case 'Sequence':
      if (node.children.length === 1) {
        return unwrap(node.children[0]);
      }
      break;
  }
  return node;
}

/**
 * Parses a Regular expression into a simplified AST.
 *
 * Only simple patterns are supported (for example, no lookahead/lookbehind
 * assertions, no non-capturing groups, no non-ASCII source characters etc),
 * because that's all we need in order to tokenize the GraphQL language. We
 * don't even need to support "\b" (word boundaries) or "^"/"$" because those
 * apply lookahead/lookbehind.
 */
export default class RegExpParser {
  #ignoreCase: boolean;
  #scanner: StringScanner;

  constructor({ignoreCase, source}: RegExp) {
    this.#ignoreCase = ignoreCase;
    this.#scanner = new StringScanner(source);
  }

  // precedence high to low:
  // () grouping
  // */+/? repeat (postfix)
  // sequence abc (infix)
  // alternate a|b|c (infix)
  parse(): Node {
    const node = this.#parseNode();
    if (!this.#scanner.atEnd) {
      throw new Error(
        `Failed to consume all input (at index ${this.#scanner.index}`,
      );
    }
    return unwrap(node);
  }

  #parseAlternate(): Alternate {
    const children /*: Array<Node>*/ = [];
    // TODO: handle empty implicit subgroup; eg: (a|b|)
    while (!this.#scanner.atEnd) {
      const sequence = this.#parseSequence();
      children.push(unwrap(sequence));
      if (!this.#scanner.scan('|')) {
        break;
      }
    }
    return {
      kind: 'Alternate',
      children,
    };
  }

  #parseAnything(): Anything {
    this.#scanner.expect('.');
    return {kind: 'Anything'};
  }

  // Note that despite its name, this method doesn't always return a bare
  // `Atom` (when `ignoreCase` is `true`, it may return a `CharacterClass` if
  // appropriate).
  #parseAtom(): Atom | CharacterClass {
    const value = this.#scanner.expect(/./);
    if (value === '^' || value === '$') {
      throw new Error(
        'RegExpParser.parseAtom(): "^" and "$" boundary assertions are not supported',
      );
    }
    const atom: Atom = {kind: 'Atom', value};
    if (this.#ignoreCase) {
      let other = toggleCase(value);
      if (other) {
        return {
          kind: 'CharacterClass',
          children: sortAtoms([atom, {kind: 'Atom', value: other}]),
          negated: false,
        };
      }
    }
    return atom;
  }

  #parseCharacterClass(): CharacterClass {
    let children: Array<Atom | Range> = [];
    this.#scanner.expect('[');
    const negated = !!this.#scanner.scan('^');
    while (!this.#scanner.atEnd) {
      if (this.#scanner.peek(']')) {
        break;
      } else if (this.#scanner.scan('-')) {
        // - If preceded and followed by an atom, this is a range.
        // - At edges it is just a literal `-`.
        // - `[a--z]` is a syntax error that we don't have to worry about.
        if (children.length === 0) {
          children.push({kind: 'Atom', value: '-'});
        } else if (this.#scanner.peek(']')) {
          children.push({kind: 'Atom', value: '-'});
          break;
        } else {
          // Don't have to worry about `[a-\z]` (that's also a syntax error).
          // BUG: `[\w-z]` and `[a-\w]` are not syntax errors, but we don't
          // handle them yet (`[a-\w]` means "a" or "-" or "A-Za-z0-9_").
          // BUG: `[a-j-z]` also not handled; means "a-j" or "-" or "z".
          const previous = children.pop()!;
          invariant(previous.kind !== 'Range');
          // TODO: figure out what to do with stuff like /[\s-z]/
          // (I literally have no idea what that is supposed to match).

          // To illustrate how we should handle `ignoreCase`, consider the
          // characters from "X" (\x58) to "c" (\x63); ie:
          //
          //    X Y Z [ \ ] ^ _ ` a b c
          //
          // - /[X-c]/ matches all of the above.
          // - /[X-c]/i matches all of the above, plus: A B C x y z
          //
          // ie.
          //
          // - Without "i", character class is equivalent to [\x58-\x63].
          // - With "i", it is equivalent to the above plus the alternate case
          //   versions of all toggleable letters in the range; eg:
          //   [\x41\x42\x43\x58-\x63\x78\x79\x7a] (equivalent to
          //   [\x41-\x43\x58-\x63\x78-\x7a]).
          //
          // For simplicity, we do the "dumb" inlining of the extra letters
          // here, and rely on a simplification pass to minimize the class.
          const {value: from} = previous;
          const to = this.#scanner.expect(/./);
          children.push({
            kind: 'Range',
            from,
            to,
          });
        }
      } else if (this.#scanner.scan('.')) {
        // Special case: "." means literal "." inside a character class.
        children.push({kind: 'Atom', value: '.'});
      } else if (this.#scanner.peek('\\')) {
        // Note that some escapes are different inside character classes; eg.
        // \b means backspace, not word boundary.
        if (this.#scanner.scan('\\b')) {
          children.push({kind: 'Atom', value: '\b'});
        } else {
          const escape = this.#parseEscape();
          if (escape.kind === 'Atom') {
            children.push(escape);
          } else if (escape.negated) {
            // Before flattening the children, need them in non-negated form.
            children.push(...normalizeCharacterClass(escape).children);
          } else {
            children.push(...escape.children);
          }
        }
      } else if (this.#scanner.scan(/./)) {
        children.push({kind: 'Atom', value: this.#scanner.last!});
      }
    }
    this.#scanner.expect(']');
    if (this.#ignoreCase) {
      children = children.flatMap((child): typeof children => {
        if (child.kind === 'Atom') {
          const other = toggleCase(child.value);
          if (other) {
            return sortAtoms([child, {kind: 'Atom', value: other}]);
          }
        } else if (child.kind === 'Range') {
          const start = child.from.charCodeAt(0);
          const finish = child.to.charCodeAt(0);
          const extras: Array<Atom> = [];
          for (let i = start; i <= finish; i++) {
            const other = toggleCase(String.fromCharCode(i));
            if (other) {
              extras.push({kind: 'Atom', value: other});
            }
          }
          return [child, ...extras];
        }
        return [child];
      });
    }
    return normalizeCharacterClass({
      kind: 'CharacterClass',
      children,
      negated,
    });
  }

  // Handles the common escaped characters, but not the more exotic ones (eg.
  // `\cX`, `p{...}` etc), listed here:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
  #parseEscape(): Atom | CharacterClass {
    this.#scanner.expect('\\');
    const value = this.#scanner.expect(/./);
    switch (value) {
      case '\\':
        return {kind: 'Atom', value: '\\'};
      case '0':
        return {kind: 'Atom', value: '\0'};
      case 'f':
        return {kind: 'Atom', value: '\f'};
      case 'n':
        return {kind: 'Atom', value: '\n'};
      case 'r':
        return {kind: 'Atom', value: '\r'};
      case 't':
        return {kind: 'Atom', value: '\t'};
      case 'u':
        return {
          kind: 'Atom',
          value: String.fromCharCode(
            parseInt(this.#scanner.expect(/[\da-f]{4}/i), 16),
          ),
        };
      case 'v':
        return {kind: 'Atom', value: '\v'};
      case 'x':
        return {
          kind: 'Atom',
          value: String.fromCharCode(
            parseInt(this.#scanner.expect(/[\da-f]{2}/i), 16),
          ),
        };
      case 'B':
      case 'P':
      case 'b':
      case 'c':
      case 'p':
        throw new Error(
          `RegExpParser.#parseEscape: Unsupported escape: \\${value}`,
        );
    }
    const characterClass: CharacterClass | undefined = SPECIAL_CLASSES[value];
    if (characterClass) {
      return characterClass;
    } else {
      return {
        kind: 'Atom',
        value,
      };
    }
  }

  #parseGroup(): Node {
    this.#scanner.expect('(');
    const node = this.#parseNode();
    this.#scanner.expect(')');
    return node;
  }

  #parseNode(): Node {
    return this.#parseAlternate();
  }

  // As the only postfix operator in the RegExp language, this method is the
  // only one to take a current `node` as a parameter. It wraps it in a `Repeat`
  // node if the operator is present.
  #parseRepeat(node: Node): Node {
    // TODO: see if there is any crazy edge case to handle like "foo+*?" or such
    if (this.#scanner.scan('*')) {
      return {
        kind: 'Repeat',
        child: unwrap(node),
        minimum: 0,
        maximum: Infinity,
      };
    } else if (this.#scanner.scan('+')) {
      return {
        kind: 'Repeat',
        child: unwrap(node),
        minimum: 1,
        maximum: Infinity,
      };
    } else if (this.#scanner.scan('?')) {
      return {
        kind: 'Repeat',
        child: unwrap(node),
        minimum: 0,
        maximum: 1,
      };
    } else if (this.#scanner.peek(/\{\d+(,(\d+)?)?\}/)) {
      // We have to peek here in order to detect only valid quantifiers:
      //
      //    {1,} = one or more
      //    {1,1} = exactly one
      //    {1} = exactly one
      //    {0,1} = zero or 1
      //
      // but not invalid ones:
      //
      //    {,} = invalid, so matches literal "{,}"
      //    {,1} = invalid, so matches literal "{,1}"
      //
      // Whitespace is not allowed.
      //
      // TODO: decide whether _where_ we should those invalid ones; maybe here
      // we should be returning a Sequence of `node` + the invalid characters
      this.#scanner.expect('{');
      const minimum = parseInt(this.#scanner.expect(/\d+/), 10);
      let maximum = Infinity;
      if (this.#scanner.scan('}')) {
        maximum = minimum;
      } else {
        this.#scanner.expect(',');
        if (this.#scanner.scan(/\d+/)) {
          maximum = parseInt(this.#scanner.last!, 10);
        }
        this.#scanner.expect('}');
      }
      return {
        kind: 'Repeat',
        child: node,
        minimum,
        maximum,
      };
    } else {
      return node;
    }
  }

  #parseSequence(): Sequence {
    const children: Array<Node> = [];
    const sequence = {
      kind: 'Sequence',
      children,
    } as const;
    while (!this.#scanner.atEnd) {
      if (this.#scanner.peek('[')) {
        children.push(this.#parseRepeat(unwrap(this.#parseCharacterClass())));
      } else if (this.#scanner.peek(']')) {
        break;
      } else if (this.#scanner.peek('(')) {
        children.push(this.#parseRepeat(unwrap(this.#parseGroup())));
      } else if (this.#scanner.peek(')')) {
        break;
      } else if (this.#scanner.peek('|')) {
        break;
      } else if (this.#scanner.peek('\\')) {
        children.push(this.#parseRepeat(this.#parseEscape()));
      } else if (this.#scanner.peek('.')) {
        children.push(this.#parseRepeat(this.#parseAnything()));
      } else {
        children.push(this.#parseRepeat(this.#parseAtom()));
      }
    }
    return sequence;
  }
}
