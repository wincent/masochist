import type {Atom, Node, Range} from './RegExp/RegExpParser';

// Episilon transitions are represented with `null`.
type Transition = Atom | Range | null;

type NFA = {
  edges: Array<{
    on: Transition;
    to: NFA;
  }>;
  kind: 'Accept' | 'Internal' | 'Start';
};

export default function regExpToNFA(node: Node): NFA {
  if (node.kind === 'Atom') {
    return {
      edges: [
        {
          on: node,
          to: {
            edges: [],
            kind: 'Accept',
          },
        },
      ],
      kind: 'Start',
    };
  } else if (node.kind === 'Sequence') {
    // For each child, take every accept state and turn it into a non-final
    // state with an epsilon transition to the start state of the next child.
    const children = node.children.map(regExpToNFA);
    for (let i = children.length - 2; i >= 0; i--) {
      const child = children[i];
      const next = children[i + 1];
      next.kind = 'Internal';
      acceptStates(child).forEach((state) => {
        state.kind = 'Internal';
        state.edges.push({on: null, to: next});
      });
    }
    return children[0];
  }
}

function acceptStates(nfa: NFA): Array<NFA> {
  const seen = new Set<NFA>();
  const found: Array<NFA> = [];

  function visit(node: NFA) {
    seen.add(node);
    if (node.kind === 'Accept') {
      found.push(node);
    }
    for (const {to} of node.edges) {
      if (!seen.has(to)) {
        visit(to);
      }
    }
    return found;
  }

  return visit(nfa);
}
