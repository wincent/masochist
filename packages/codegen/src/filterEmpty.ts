import type {Statement} from './ast';

export default function filterEmpty(
  ...statements: Array<Statement>
): Array<Statement> {
  return statements.filter((statement) => statement.kind !== 'EmptyStatement');
}
