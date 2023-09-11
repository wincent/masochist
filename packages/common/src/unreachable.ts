export default function unreachable(_value: never): never {
  throw new Error('unreachable(): Unreachable code was reached');
}
