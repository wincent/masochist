import type {Anything, Atom, Node, Range} from './RegExp/RegExpParser';

// Episilon transitions are represented with `null`.
type Transition = Anything | Atom | Range | null;

export const NONE = 0;
export const START = 1;
export const ACCEPT = 2;

type Flags = 0 | 1 | 2 | 3;

type NFA = {
  id: number;
  edges: Array<{
    on: Transition;
    to: NFA;
  }>;
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
    const accept: NFA = {
      id: genId(),
      edges: [],
      flags: ACCEPT,
    };

    // Return a new start node with epsilon transitions to start nodes of each child.
    return {
      id: genId(),
      edges: children.flatMap((child) => {
        // All accept states get epsilon transitions to a new accept state.
        acceptStates(child).forEach((state) => {
          state.flags = clearFlag(state.flags, ACCEPT);
          state.edges.push({on: null, to: accept});
        });
        return startStates(child).map((start) => {
          start.flags = clearFlag(start.flags, START);
          return {
            on: null,
            to: start,
          };
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
        state.edges.push({on: null, to: next});
      });
    }
    return children[0];
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

function setFlag(flags: Flags, set: Flags): Flags {
  return (flags | set) as Flags;
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
