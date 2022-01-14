import keyToTransition from './keyToTransition';
import stringifyTransition, {EPSILON} from './stringifyTransition';
import type {TransitionTable} from './toTransitionTable';

/**
 * Creates a Graphviz representation of a TransitionTable, in the DOT language,
 * for debugging and illustration purposes.
 */
export default function dotifyTransitionTable({
  acceptStates,
  startStates,
  transitions,
}: TransitionTable): string {
  const lines = ['digraph finite_state_machine {', '  rankdir = LR;'];

  if (startStates.size) {
    lines.push(
      '',
      '  // Invisible node from which to draw start transitions to start states.',
    );
    const states = Array.from(startStates)
      .map((state) => -state)
      .join('; ');
    lines.push(`  node [style = invis]; ${states};`);
  }

  if (acceptStates.size) {
    lines.push('', '  // Accept states.');
    const states = Array.from(acceptStates).join('; ');
    lines.push(`  node [style = "", shape = doublecircle]; ${states};`);
  }
  lines.push(
    '',
    '  // Other states.',
    '  node [style = "", shape = circle];',
    '',
  );

  for (const state of startStates) {
    lines.push(`  -${state} -> ${state};`);
  }

  transitions.forEach((transition, i) => {
    for (const [key, targets] of transition) {
      for (const to of targets) {
        const on = stringifyTransition(keyToTransition(key));
        const escaped = escape(on).replace('"', '\\"');
        lines.push(`  ${i} -> ${to} [label = "${escaped}"];`);
      }
    }
  });
  lines.push('}');

  return lines.join('\n');
}

function escape(key: string): string {
  return key
    .replace('\\', '\\\\\\\\')
    .replace('\0', '\\\\0')
    .replace('\b', '\\\\b')
    .replace('\f', '\\\\f')
    .replace('\n', '\\\\n')
    .replace('\r', '\\\\r')
    .replace('\t', '\\\\t')
    .replace('\v', '\\\\v')
    .replace(/[\s\S]/g, (match) => {
      const c = match.charCodeAt(0);
      if (c >= 0x20 && c <= 0x7e) {
        // Printable ASCII.
        return match;
      } else if (c === EPSILON) {
        // Special case for "GREEK SMALL LETTER EPSILON".
        return match;
      } else {
        return `\\u${c.toString(16).padStart(4, '0')}`;
      }
    });
}
