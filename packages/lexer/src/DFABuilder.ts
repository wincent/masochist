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

// State-transition table: a two dimensional array where first dimension is the
// "from" state and the second dimension is the "to" state, with the value in
// each cell indicating the transition conditions.
//
// See: https://en.wikipedia.org/wiki/State-transition_table
type Conditions = Array<Atom | Range>;
type Table = Array<Array<Conditions>>;

// In other visitors we just call this "State" but I don't want anything that
// could be confused with an NFA/DFA state, so being more explicit.
type VisitorState = {
  currentState: number;
  table: Table;
};

export default class DFABuilder extends RegExpVisitor<VisitorState> {
  constructor(node: Node) {
    super(node);
  }

  build() {
    // Start off with a single starting state containing an empty conditions
    // array.
    const visitorState: VisitorState = {
      currentState: 0,
      table: [[[]]],
    };
    this.visit(visitorState);
    return visitorState.table;
  }

  visitAlternate(alternate: Alternate, visitorState: VisitorState) {
    // TODO: this one is going to visit children
    // we have to consolidate common transitions here
    // (actually, may have to consolidate common transitions in more places)
    // const {currentState} = visitorState;
    // let nextState: number | null = null;
    // const lastState = visitorState.table.length - 1;
    //
    // Might be running up against a wall here, as even if I create a new table
    // and then write it into place (rewriting all the indices), it is going to
    // get really messy... (Given that there may be a big recursive call graph
    // sprouting out from this loop.) Issue is that you don't really know what
    // the callee is going to do, and it could do a lot...

    for (let i = 0; i < alternate.children.length; i++) {
      const child = alternate.children[i];
      const nextVisitorState: VisitorState = {currentState: 0, table: [[[]]]};
      this.visitNode(child, nextVisitorState);

      // TODO: merge nextVisitorState into current actual state
      //
      // given currentState from visitorState
      // and state 0 from nextVisitorState
      // add transitions from nextVisitorState to visitorState
    }
  }

  visitAtom(atom: Atom, {currentState, table}: VisitorState) {
    const nextState = this.#addState(table);

    // Finally, record transition to new state.
    const conditions = table[currentState][nextState];
    conditions.push(atom);
    // TODO: merge/de-dupe conditions if necessary
  }

  visitCharacterClass(
    characterClass: CharacterClass,
    visitorState: VisitorState,
  ) {
    super.visitCharacterClass(characterClass, visitorState);
  }

  visitRepeat(repeat: Repeat, visitorState: VisitorState) {
    super.visitRepeat(repeat, visitorState);
  }

  visitSequence(sequence: Sequence, visitorState: VisitorState) {
    for (let i = 0; i < sequence.children.length; i++) {
      const child = sequence.children[i];
      this.visitNode(child, {
        ...visitorState,
        currentState: visitorState.currentState + i,
      });
    }
  }

  /**
   * Creates a new state, growing both dimensions. Returns the index of the new
   * state.
   */
  #addState(table: Table): number {
    // Add new row.
    const nextState = table.length;
    table.push(new Array(nextState + 1).fill(null).map(() => []));

    // Add new column to existing rows.
    for (let i = 0; i < nextState; i++) {
      table[i].push([]);
    }

    return nextState;
  }
}
