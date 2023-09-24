import {ACCEPT, START} from './NFA';
import clearFlag from './clearFlag';
import getAcceptStates from './getAcceptStates';
import getStartStates from './getStartStates';

import type {Node} from '../RegExp/RegExpParser';
import type {Edge, Flags, NFA} from './NFA';
import setFlag from './setFlag';

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
        return getStartStates(child).map((start) => {
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
      getStartStates(child).forEach((child) => {
        child.flags = setFlag(child.flags, ACCEPT);
      });
      return child;
    } else if (node.minimum === 0 && node.maximum === Infinity) {
      // "*" quantifier (AKA Kleene star).
      const start = {
        id: genId(),
        edges: getStartStates(child).map((start) => {
          start.flags = clearFlag(start.flags, START);
          return epsilonTo(start);
        }),
        flags: (START | ACCEPT) as Flags,
      };
      getAcceptStates(child).forEach((child) => {
        child.edges.push(epsilonTo(start));
      });
      return start;
    } else if (node.minimum === 1 && node.maximum === Infinity) {
      // "+" quantifier.
      const startStates = getStartStates(child);
      getAcceptStates(child).forEach((accept) => {
        startStates.forEach((start) => {
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
        const startStates = getStartStates(next);
        getAcceptStates(child).forEach((state) => {
          state.flags = clearFlag(state.flags, ACCEPT);
          startStates.forEach((start) => {
            start.flags = clearFlag(start.flags, START);
            state.edges.push(epsilonTo(start));
          });
        });
      }

      // For optional items, allow intermediate accept states to remain,
      // and link them together using epsilon transitions.
      for (let i = node.minimum - 1; i < node.maximum - 1; i++) {
        const child = children[i];
        const next = children[i + 1];
        const startStates = getStartStates(next);
        getAcceptStates(child).forEach((state) => {
          startStates.forEach((start) => {
            start.flags = clearFlag(start.flags, START);
            state.edges.push(epsilonTo(start));
          });
        });
      }

      return children[0];
    }
  } else if (node.kind === 'Sequence') {
    // For each child, take every accept state and turn it into a non-final
    // state with an epsilon transition to the start states of the next child.
    const children = node.children.map((child) => {
      return regExpToNFA(child, genId);
    });
    for (let i = children.length - 2; i >= 0; i--) {
      const child = children[i];
      const next = children[i + 1];
      const startStates = getStartStates(next);
      startStates.forEach((start) => {
        start.flags = clearFlag(start.flags, START);
      });
      getAcceptStates(child).forEach((accept) => {
        accept.flags = clearFlag(accept.flags, ACCEPT);
        startStates.forEach((start) => {
          accept.edges.push(epsilonTo(start));
        });
      });
    }
    return children[0];
  } else {
    throw new Error('regExpToNFA(): Unexpected `node.kind`');
  }
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
