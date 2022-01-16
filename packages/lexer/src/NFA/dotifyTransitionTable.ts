import keyToTransition from './keyToTransition';
import stringifyTransition, {EPSILON} from './stringifyTransition';
import type {TransitionTable} from './TransitionTable';

/**
 * Creates a Graphviz representation of a TransitionTable, in the DOT language,
 * for debugging and illustration purposes.
 */
export default function dotifyTransitionTable(
  {acceptStates, startStates, transitions}: TransitionTable,
  dark = false,
): string {
  const lines = [
    'digraph finite_state_machine {',
    '  bgcolor = "transparent";',
    '  rankdir = LR;',
    '  ratio = 0.5625; // 16:9.',
    '  size = "11,8.5"; // US Letter size (Landscape).',
  ];

  const color = [
    `color = "${dark ? 'white' : 'black'}"`,
    `fontcolor = "${dark ? 'white' : 'black'}"`,
  ].join(', ');

  if (startStates.size) {
    lines.push(
      '',
      '  // Invisible node from which to draw start transitions to start states.',
    );
    const states = Array.from(startStates)
      .map((state) => -(state + 1)) // Offset by 1 to avoid ever having "-0".
      .join('; ');
    lines.push(`  node [style = invis]; ${states};`);
  }

  if (acceptStates.size) {
    lines.push('', '  // Accept states.');
    const states = Array.from(acceptStates).join('; ');
    lines.push(
      `  node [${color}, style = "", shape = doublecircle]; ${states};`,
    );
  }
  lines.push(
    '',
    '  // Other states.',
    `  node [${color}, style = "", shape = circle];`,
    '',
  );

  for (const state of startStates) {
    lines.push(`  -${state + 1} -> ${state} [${color}];`);
  }

  // TODO: show edge labels, if any
  transitions.forEach((transition, i) => {
    for (const [key, targets] of transition) {
      for (const to of targets) {
        const on = stringifyTransition(keyToTransition(key));
        const escaped = escape(on).replace('"', '\\"');
        lines.push(`  ${i} -> ${to} [${color}, label = "${escaped}"];`);
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
      if (c === 0x20) {
        // Special case for space, would use "SYMBOL FOR SPACE" (\u2420), but
        // few fonts have it.
        return 'SP';
      } else if (c > 0x20 && c <= 0x7e) {
        // Any printable ASCII, except for space (handled above).
        return match;
      } else if (c === EPSILON) {
        // Special case for "GREEK SMALL LETTER EPSILON".
        return match;
      } else {
        return `\\\\u${c.toString(16).padStart(4, '0')}`;
      }
    });
}
