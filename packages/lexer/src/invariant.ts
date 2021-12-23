export default function invariant(
  condition: unknown,
  message?: string,
): asserts condition {
  if (!condition) {
    throw new Error(`invariant(): ${message || 'condition failed'}`);
  }
}
