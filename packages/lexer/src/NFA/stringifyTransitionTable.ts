import type {TransitionTable} from './toTransitionTable';

/**
 * Creates a printable form of a TransitionTable, for debugging purposes.
 */
export default function stringifyTransitionTable({
  acceptStates,
  startStates,
  transitions,
}: TransitionTable): string {
  const lines = ['{'];

  if (acceptStates.size) {
    const states = Array.from(acceptStates).join(', ');
    lines.push(`  acceptStates: new Set([${states}]),`);
  } else {
    lines.push(`  acceptStates: new Set(),`);
  }

  if (startStates.size) {
    const states = Array.from(startStates).join(', ');
    lines.push(`  startStates: new Set([${states}]),`);
  } else {
    lines.push(`  startStates: new Set(),`);
  }

  if (transitions.length) {
    lines.push('  transitions: [');
    transitions.forEach((transition, i) => {
      if (transition.size === 0) {
        lines.push(`    /* ${i} */ new Map(),`);
      } else if (transition.size === 1) {
        const on = formatKey(Array.from(transition.keys())[0]);
        const targets = formatTargets(Array.from(transition.values())[0]);
        lines.push(`    /* ${i} */ new Map([[${on}, ${targets}]]),`);
      } else {
        lines.push(`    /* ${i} */ new Map([`);
        for (const [key, value] of transition) {
          const on = formatKey(key);
          const targets = formatTargets(value);
          lines.push(`      [${on}, ${targets}],`);
        }
        lines.push('    ]),');
      }
    });
    lines.push('  ],');
  } else {
    lines.push('  transitions: [],');
  }

  lines.push('}');

  return lines.join('\n');
}

function formatKey(key: string): string {
  if (key.includes("'")) {
    // Use double-quoted string.
    const escaped = key.replace('\\', '\\\\').replace('"', '\\"');
    return `"${escaped}"`;
  } else {
    // Use single-quoted string.
    const escaped = key.replace('\\', '\\\\').replace("'", "\\'");
    return `'${escaped}'`;
  }
}

function formatTargets(targets: Set<number>): string {
  return `new Set([${Array.from(targets)
    .sort()
    .map((id) => id.toString())
    .join(', ')}])`;
}
