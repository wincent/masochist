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
    const dfa: DFA = {
      states: [{kind: 'Start'}],
      transitions: [],
    };
    this.visit(dfa);
    return dfa;
  }

  visitAlternate(alternate: Alternate, dfa: DFA) {
    super.visitAlternate(alternate, dfa);
  }

  visitAtom(atom: Atom, dfa: DFA) {
    dfa.states.push({kind: 'Accept'});
    dfa.transitions.push({start: 0, end: 1, conditions: [atom]});
  }

  visitCharacterClass(characterClass: CharacterClass, dfa: DFA) {
    super.visitCharacterClass(characterClass, dfa);
  }

  visitRepeat(repeat: Repeat, dfa: DFA) {
    super.visitRepeat(repeat, dfa);
  }

  visitSequence(sequence: Sequence, dfa: DFA) {
    super.visitSequence(sequence, dfa);
  }
}
