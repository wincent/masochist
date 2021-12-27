import RegExpVisitor from './RegExp/RegExpVisitor';

import type {
  Alternate,
  Atom,
  CharacterClass,
  Node,
  Range,
  Repeat,
  Sequence,
} from './RegExp/RegExpParser';

type State = Accept | Internal | Start;

type Accept = {kind: 'Accept'};
type Internal = {kind: 'Internal'};
type Start = {kind: 'Start'};

type Transition = {
  start: number;
  end: number;
  conditions: Array<Atom | Range>;
};

type DFA = {
  states: Array<State>;
  transitions: Array<Transition>;
};

export default class DFABuilder extends RegExpVisitor<DFA> {
  constructor(node: Node) {
    super(node);
  }

  build() {
    const dfa = createDFA();
    this.visit(dfa);
    const last = dfa.states[dfa.states.length - 1];
    if (last.kind !== 'Accept') {
      (last.kind as any) = 'Accept';
    }
    return dfa;
  }

  visitAlternate(alternate: Alternate, dfa: DFA) {
    super.visitAlternate(alternate, dfa);
  }

  visitAtom(atom: Atom, dfa: DFA) {
    const start = dfa.states.length - 1;
    const end = start + 1;
    dfa.states.push({kind: 'Accept'});
    dfa.transitions.push({start, end, conditions: [atom]});
  }

  visitCharacterClass(characterClass: CharacterClass, dfa: DFA) {
    super.visitCharacterClass(characterClass, dfa);
  }

  visitRepeat(repeat: Repeat, dfa: DFA) {
    super.visitRepeat(repeat, dfa);
  }

  visitSequence(sequence: Sequence, dfa: DFA) {
    // Solve sub-problem.
    const next = createDFA();
    super.visitSequence(sequence, next);

    // Merge back into current state.
    const offset = dfa.states.length - 1;
    dfa.states.push(
      ...next.states.slice(1).map(({kind}) => {
        return {
          kind: kind === 'Accept' ? 'Internal' : kind,
        };
      }),
    );
    dfa.transitions.push(
      ...next.transitions.map(({start, end, conditions}) => {
        return {
          start: start + offset,
          end: end + offset,
          conditions,
        };
      }),
    );
  }
}

function createDFA(): DFA {
  return {
    states: [{kind: 'Start'}],
    transitions: [],
  };
}
