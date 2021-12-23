import RegExpParser from '../RegExpParser';
import RegExpVisitor from '../RegExpVisitor';

import type {
  Alternate,
  Anything,
  Atom,
  CharacterClass,
  Node,
  Range,
  Repeat,
  Sequence,
} from '../RegExpParser';

type State = Array<string>;

class TestVisitor extends RegExpVisitor<State> {
  visit(state: State) {
    state.push('visit');
    super.visit(state);
  }

  visitAlternate(node: Alternate, state: State) {
    state.push('visitAlternate');
    super.visitAlternate(node, state);
  }

  visitAnything(node: Anything, state: State) {
    state.push('visitAnything');
    super.visitAnything(node, state);
  }

  visitAtom(node: Atom, state: State) {
    state.push(`visitAtom: ${JSON.stringify(node.value)}`);
    super.visitAtom(node, state);
  }

  visitCharacterClass(node: CharacterClass, state: State) {
    state.push('visitCharacterClass');
    super.visitCharacterClass(node, state);
  }

  visitNode(node: Node, state: State) {
    state.push('visitNode');
    super.visitNode(node, state);
  }

  visitRange(node: Range, state: State) {
    state.push(
      `visitRange: ${JSON.stringify(node.from)}-${JSON.stringify(node.to)}`,
    );
    super.visitRange(node, state);
  }

  visitRepeat(node: Repeat, state: State) {
    state.push(`visitRepeat {${node.minimum},${node.maximum}}`);
    super.visitRepeat(node, state);
  }

  visitSequence(node: Sequence, state: State) {
    state.push('visitSequence');
    super.visitSequence(node, state);
  }
}

describe('RegExpVisitor', () => {
  it('visits anything', () => {
    const state = visit(/./);

    expect(state).toEqual(['visit', 'visitNode', 'visitAnything']);
  });

  it('visits a sequence', () => {
    const state = visit(/foo/);

    expect(state).toEqual([
      'visit',
      'visitNode',
      'visitSequence',
      'visitNode',
      'visitAtom: "f"',
      'visitNode',
      'visitAtom: "o"',
      'visitNode',
      'visitAtom: "o"',
    ]);
  });

  it('visits a character class', () => {
    const state = visit(/[a-z0-9]/i);

    expect(state).toEqual([
      'visit',
      'visitNode',
      'visitCharacterClass',
      'visitNode',
      'visitRange: "0"-"9"',
      'visitNode',
      'visitRange: "A"-"Z"',
      'visitNode',
      'visitRange: "a"-"z"',
    ]);
  });

  it('visits a repeat', () => {
    const state = visit(/\w{6,8}/);

    expect(state).toEqual([
      'visit',
      'visitNode',
      'visitRepeat {6,8}',
      'visitNode',
      'visitCharacterClass',
      'visitNode',
      'visitRange: "A"-"Z"',
      'visitNode',
      'visitRange: "a"-"z"',
      'visitNode',
      'visitRange: "0"-"9"',
      'visitNode',
      'visitAtom: "_"',
    ]);
  });

  it('visits a "+"', () => {
    const state = visit(/(foo)+/);

    expect(state).toEqual([
      'visit',
      'visitNode',
      'visitRepeat {1,Infinity}',
      'visitNode',
      'visitSequence',
      'visitNode',
      'visitAtom: "f"',
      'visitNode',
      'visitAtom: "o"',
      'visitNode',
      'visitAtom: "o"',
    ]);
  });

  it('visits a "*"', () => {
    const state = visit(/(foo)*/);

    expect(state).toEqual([
      'visit',
      'visitNode',
      'visitRepeat {0,Infinity}',
      'visitNode',
      'visitSequence',
      'visitNode',
      'visitAtom: "f"',
      'visitNode',
      'visitAtom: "o"',
      'visitNode',
      'visitAtom: "o"',
    ]);
  });

  it('visits a "?"', () => {
    const state = visit(/(foo)?/);

    expect(state).toEqual([
      'visit',
      'visitNode',
      'visitRepeat {0,1}',
      'visitNode',
      'visitSequence',
      'visitNode',
      'visitAtom: "f"',
      'visitNode',
      'visitAtom: "o"',
      'visitNode',
      'visitAtom: "o"',
    ]);
  });

  it('visits alternates', () => {
    const state = visit(/foo|bar/);

    expect(state).toEqual([
      'visit',
      'visitNode',
      'visitAlternate',
      'visitNode',
      'visitSequence',
      'visitNode',
      'visitAtom: "f"',
      'visitNode',
      'visitAtom: "o"',
      'visitNode',
      'visitAtom: "o"',
      'visitNode',
      'visitSequence',
      'visitNode',
      'visitAtom: "b"',
      'visitNode',
      'visitAtom: "a"',
      'visitNode',
      'visitAtom: "r"',
    ]);
  });
});

function visit(regExp: RegExp): State {
  const node = new RegExpParser(regExp).parse();
  const state: State = [];
  const visitor = new TestVisitor(node);
  visitor.visit(state);
  return state;
}
