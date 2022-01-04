// TODO: probably move this to @masochist/common, as soon as demand for it from
// multiple packages arises.
export default function invariant(
  condition: unknown,
  message?: string,
): asserts condition {
  if (!condition) {
    throw new Error(`invariant(): ${message || 'condition failed'}`);
  }
}
