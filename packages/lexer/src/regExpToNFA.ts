import type {Anything, Atom, Node, Range} from './RegExp/RegExpParser';

// Episilon transitions are represented with `null`.
type Transition = Anything | Atom | Range | null;

export const NONE = 0;
export const START = 1;
export const ACCEPT = 2;

const START_OR_ACCEPT = START | ACCEPT;

type Edge = {
  on: Transition;
  to: NFA;
};

export type Flags =
  | typeof ACCEPT
  | typeof NONE
  | typeof START
  | typeof START_OR_ACCEPT;

export type NFA = {
  id: number;
  edges: Array<Edge>;
  flags: Flags;
};

export default function regExpToNFA(
  node: Node,
  genId: () => number = defaultGenId(),
): NFA {
  if (node.kind === 'Alternate' || node.kind === 'CharacterClass') {
    // CharacterClass is just syntax sugar for an Alternate, so we handle them
    // together.
    if (node.kind === 'CharacterClass' && node.negated) {
      throw new Error('regExpToNFA(): Cannot process negated CharacterClass');
    }

    const children = node.children.map((child) => {
      return regExpToNFA(child, genId);
    });

    // Return a new start node with epsilon transitions to start nodes of each child.
    return {
      id: genId(),
      edges: children.flatMap((child) => {
        return startStates(child).map((start) => {
          start.flags = clearFlag(start.flags, START);
          return epsilonTo(start);
        });
      }),
      flags: START,
    };
  } else if (
    node.kind === 'Anything' ||
    node.kind === 'Atom' ||
    node.kind === 'Range'
  ) {
    return {
      id: genId(),
      edges: [
        {
          on: node,
          to: {
            id: genId(),
            edges: [],
            flags: ACCEPT,
          },
        },
      ],
      flags: START,
    };
  } else if (node.kind === 'Repeat') {
    const child = regExpToNFA(node.child, genId);

    if (node.minimum === 0 && node.maximum === 1) {
      // "?" quantifier.
      return {
        id: genId(),
        edges: startStates(child).map((start) => {
          start.flags = clearFlag(start.flags, START);
          return epsilonTo(start);
        }),
        flags: (START | ACCEPT) as Flags,
      };
    } else if (node.minimum === 0 && node.maximum === Infinity) {
      // "*" quantifier (AKA Kleene star).
      const start = {
        id: genId(),
        edges: startStates(child).map((start) => {
          start.flags = clearFlag(start.flags, START);
          return epsilonTo(start);
        }),
        flags: (START | ACCEPT) as Flags,
      };
      acceptStates(child).forEach((child) => {
        child.edges.push(epsilonTo(start));
      });
      return start;
    } else if (node.minimum === 1 && node.maximum === Infinity) {
      // "+" quantifier.
      acceptStates(child).forEach((accept) => {
        startStates(child).forEach((start) => {
          // TODO avoid pushing duplicate edges here
          accept.edges.push(epsilonTo(start));
        });
      });
      return child;
    } else {
      // {3} or {3,6} etc quantifier.

      // "Clone" child by creating additional NFAs (same shape, different state
      // `id`s).
      const children: Array<NFA> = [child];
      for (let i = 0; i < node.maximum - 1; i++) {
        children.push(regExpToNFA(node.child, genId));
      }

      // For required items, link to next item by taking every accept state and
      // turning it into a non-final state with an epsilon transition to the
      // start state fo the next (ie. same as 'Sequence').
      for (let i = 0; i < node.minimum - 1; i++) {
        const child = children[i];
        const next = children[i + 1];
        next.flags = clearFlag(next.flags, START);
        acceptStates(child).forEach((state) => {
          state.flags = clearFlag(state.flags, ACCEPT);
          state.edges.push(epsilonTo(next));
        });
      }

      // For optional items, allow intermediate accept states to remain,
      // and link them together using epsilon transitions.
      for (let i = node.minimum - 1; i < node.maximum - 1; i++) {
        const child = children[i];
        const next = children[i + 1];
        next.flags = clearFlag(next.flags, START);
        acceptStates(child).forEach((state) => {
          state.edges.push(epsilonTo(next));
        });
      }

      return children[0];
    }
  } else if (node.kind === 'Sequence') {
    // For each child, take every accept state and turn it into a non-final
    // state with an epsilon transition to the start state of the next child.
    const children = node.children.map((child) => {
      return regExpToNFA(child, genId);
    });
    for (let i = children.length - 2; i >= 0; i--) {
      const child = children[i];
      const next = children[i + 1];
      next.flags = clearFlag(next.flags, START);
      acceptStates(child).forEach((state) => {
        state.flags = clearFlag(state.flags, ACCEPT);
        state.edges.push(epsilonTo(next));
      });
    }
    return children[0];
  } else {
    throw new Error('regExpToNFA(): Unexpected `node.kind`');
  }
}

function acceptStates(nfa: NFA): Array<NFA> {
  const found: Array<NFA> = [];
  visit(nfa, (node) => {
    if (testFlag(node.flags, ACCEPT)) {
      found.push(node);
    }
  });
  return found;
}

function clearFlag(flags: Flags, clear: Flags): Flags {
  return (flags ^ clear) as Flags;
}

function defaultGenId() {
  let id = 0;
  return () => id++;
}

function epsilonTo(to: NFA): Edge {
  return {
    on: null,
    to,
  };
}

function startStates(nfa: NFA): Array<NFA> {
  const found: Array<NFA> = [];
  visit(nfa, (node) => {
    if (testFlag(node.flags, START)) {
      found.push(node);
    }
  });
  return found;
}

function testFlag(flags: Flags, test: Flags): boolean {
  return !!(flags & test);
}

function visit(
  node: NFA,
  callback: (node: NFA) => void,
  seen: Set<NFA> = new Set<NFA>(),
) {
  seen.add(node);
  callback(node);
  for (const {to} of node.edges) {
    if (!seen.has(to)) {
      visit(to, callback, seen);
    }
  }
}
