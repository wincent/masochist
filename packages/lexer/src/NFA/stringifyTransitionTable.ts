import type {TransitionTable} from './TransitionTable';

/**
 * Creates a printable form of a TransitionTable, for debugging purposes.
 */
export default function stringifyTransitionTable({
  acceptStates,
  startStates,
  transitions,
  labels,
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
        const on = quote(Array.from(transition.keys())[0]);
        const targets = formatTargets(Array.from(transition.values())[0]);
        lines.push(`    /* ${i} */ new Map([[${on}, ${targets}]]),`);
      } else {
        lines.push(`    /* ${i} */ new Map([`);
        for (const [key, value] of transition) {
          const on = quote(key);
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

  if (labels?.length) {
    lines.push('  labels: [');
    for (let i = 0; i < transitions.length; i++) {
      const label = labels[i];
      if (label?.size && label.size > 1) {
        lines.push(`    /* ${i} */ new Set([`);
        for (const text of label) {
          lines.push(`      ${quote(text)},`);
        }
        lines.push('    ]),');
      } else if (label?.size === 1) {
        lines.push(`    /* ${i} */ new Set([${quote(Array.from(label)[0])}]),`);
      } else {
        lines.push(`    /* ${i} */ undefined,`);
      }
    }
    lines.push('  ],');
  }

  lines.push('}');

  return lines.join('\n');
}

/**
 * Replaces non-ASCII characters, unprintable characters and non-space
 * whitespace characters with escapes.
 *
 * Note: this may not be totally robust, but it works for the input domain used
 * in this project. For edge cases that could trip this up (eg. octal escapes
 * etc), see: https://mathiasbynens.be/notes/javascript-escapes
 */
function escape(key: string): string {
  return key
    .replace('\\', '\\\\')
    .replace('\0', '\\0')
    .replace('\b', '\\b')
    .replace('\f', '\\f')
    .replace('\n', '\\n')
    .replace('\r', '\\r')
    .replace('\t', '\\t')
    .replace('\v', '\\v')
    .replace(/[\s\S]/g, (match) => {
      const c = match.charCodeAt(0);
      if (c >= 0x20 && c <= 0x7e) {
        return match;
      } else {
        return `\\u${c.toString(16).padStart(4, '0')}`;
      }
    });
}

function quote(unquoted: string): string {
  if (unquoted.includes("'")) {
    // Use double-quoted string.
    const escaped = escape(unquoted).replace('"', '\\"');
    return `"${escaped}"`;
  } else {
    // Use single-quoted string.
    const escaped = escape(unquoted).replace("'", "\\'");
    return `'${escaped}'`;
  }
}

function formatTargets(targets: Set<number>): string {
  return `new Set([${Array.from(targets)
    .sort()
    .map((id) => id.toString())
    .join(', ')}])`;
}
