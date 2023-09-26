import type {Statement} from '@masochist/types';

export default function filterEmpty(
  ...statements: Array<Statement>
): Array<Statement> {
  return statements.filter((statement) => statement.kind !== 'EmptyStatement');
}
