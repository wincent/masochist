/**
 * Maps over an object with values of type `T`, applying callback to each
 * `[key, value]` pair to produce a new object with values of type `U`.
 */
export default function objectMap<T, U>(
  object: {[key: string]: T},
  callback: (
    pair: [key: string, value: T],
    index?: number,
  ) => [key: string, value: U],
): {[key: string]: U} {
  return Object.fromEntries(Object.entries(object).map(callback));
}
