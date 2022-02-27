export default function keyForRule(lhs: string, rhs: Array<string>): string {
  return `${lhs}:${rhs.join('-')}`;
}
