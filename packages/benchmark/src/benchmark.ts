type Table = {
  [label: string]:
    | MemoryUsageObject
    | {
      [category: string]: number | undefined;
    };
};

function mb(bytes: number): string {
  return `${(bytes / (1024 * 1024)).toFixed(2)}MB`;
}

const print = (text: string) => process.stdout.write(text);

function printTable(data: Table, formatter: (value: number) => string): void {
  const table: {[key: string]: {[key: string]: string}} = {};
  const columnWidths: {[key: string]: number} = {
    '': 0, // Empty cell in top left.
  };

  Object.entries(data).forEach(([label, measurement]) => {
    const subtable: {[key: string]: string} = {};
    columnWidths[''] = Math.max(columnWidths[''], label.length);

    Object.entries(measurement).forEach(([category, value]) => {
      subtable[category] = formatter(value);
      if (!columnWidths[category]) {
        columnWidths[category] = category.length;
      }
      columnWidths[category] = Math.max(
        columnWidths[category],
        subtable[category].length,
      );
    });

    table[label] = subtable;
  });

  // Now we have an object suitable for passing to `console.table()`, but Bun's
  // implementation doesn't print tables yet, so we do it ourselves:
  print('|');
  for (const [header, width] of Object.entries(columnWidths)) {
    print(header.padStart(width + 1) + ' |');
  }
  print('\n');
  print('|');
  for (const width of Object.values(columnWidths)) {
    print('-'.repeat(width + 2) + '|');
  }
  print('\n');
  for (const [column, values] of Object.entries(table)) {
    print('|');
    print(column.padStart(columnWidths[''] + 1) + ' |');
    for (const [header, value] of Object.entries(values)) {
      print(value.padStart(columnWidths[header] + 1) + ' |');
    }
    print('\n');
  }
}

const DEFAULT_ITERATIONS = process.env['DEFAULT_ITERATIONS'] || '100';
const WARMUP_ITERATIONS = parseInt(
  process.env['WARMUP_ITERATIONS'] || DEFAULT_ITERATIONS,
  10,
);
const BENCHMARK_ITERATIONS = parseInt(
  process.env['BENCHMARK_ITERATIONS'] || DEFAULT_ITERATIONS,
  10,
);

export default async function benchmark(callback: () => void) {
  const memory: Table = {
    start: process.memoryUsage(),
  };

  // Warm-up.
  const a = performance.now();
  for (let i = 0; i < WARMUP_ITERATIONS; i++) {
    callback();
  }
  const b = performance.now();
  memory['warm-up'] = process.memoryUsage();

  const c = performance.now();
  for (let i = 0; i < BENCHMARK_ITERATIONS; i++) {
    callback();
  }
  const d = performance.now();
  memory['finish'] = process.memoryUsage();

  const time = {
    'warm-up': {duration: b - a},
    'run': {duration: d - c},
  };

  print('\nMemory usage:\n\n');
  printTable(memory, mb);

  print('\nTiming:\n\n');
  printTable(time, (duration) => `${duration}ms`);
}
