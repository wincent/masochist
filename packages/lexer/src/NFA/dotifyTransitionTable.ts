import keyToTransition from './keyToTransition';
import stringifyTransition, {EPSILON} from './stringifyTransition';
import type {TransitionTable} from './TransitionTable';

/**
 * Creates a Graphviz representation of a TransitionTable, in the DOT language,
 * for debugging and illustration purposes.
 */
export default function dotifyTransitionTable(
  {acceptStates, startStates, transitions, labels}: TransitionTable,
  dark = false,
): string {
  const lines = [
    'digraph finite_state_machine {',
    '  bgcolor = "transparent";',
    '  rankdir = LR;',
    '  ratio = 0.5625; // 16:9.',
  ];

  const color = [
    `color = "${dark ? 'white' : 'black'}"`,
    `fontcolor = "${dark ? 'white' : 'black'}"`,
  ].join(', ');

  if (startStates.size) {
    const count = startStates.size;
    lines.push(
      '',
      `  // Invisible ${pluralize(
        count,
        'node',
      )} from which to draw start ${pluralize(
        count,
        'transition',
      )} to start ${pluralize(count, 'state')}.`,
    );
    const states = Array.from(startStates)
      .map((state) => -(state + 1)) // Offset by 1 to avoid ever having "-0".
      .join('; ');
    lines.push(`  node [style = invis]; ${states};`);
  }

  if (acceptStates.size) {
    const count = acceptStates.size;
    lines.push('', `  // Accept ${pluralize(count, 'state')}.`);

    for (const state of Array.from(acceptStates).sort()) {
      const xlabel = labels?.[state];
      if (xlabel) {
        const stringified = JSON.stringify(Array.from(xlabel).join(','));
        lines.push(
          `  node [${color}, style = "", shape = doublecircle, xlabel = ${stringified}]; ${state};`,
        );
      } else {
        lines.push(
          `  node [${color}, style = "", shape = doublecircle]; ${state};`,
        );
      }
    }
  }

  const delta = transitions.length - acceptStates.size;
  if (delta) {
    let emittedCount = 0;
    for (let i = 0; i < transitions.length; i++) {
      if (!acceptStates.has(i)) {
        const xlabel = labels?.[i];
        if (xlabel) {
          if (!emittedCount) {
            lines.push('', `  // Other ${pluralize(delta, 'state')}.`);
          }
          emittedCount++;
          const stringified = JSON.stringify(Array.from(xlabel).join(','));
          lines.push(
            `  node [${color}, style = "", shape = circle, xlabel = ${stringified}]; ${i};`,
          );
        }
      }
    }

    if (emittedCount < delta) {
      const count = delta - emittedCount;
      lines.push(
        '',
        `  // Catch-all (default) for remaining ${pluralize(count, 'state')}.`,
      );
      lines.push(`  node [${color}, style = "", shape = circle, xlabel = ""];`);
    }
  }

  lines.push('');
  for (const state of startStates) {
    lines.push(`  -${state + 1} -> ${state} [${color}];`);
  }

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

function pluralize(count: number, base: string): string {
  return count === 1 ? base : `${base}s`;
}
