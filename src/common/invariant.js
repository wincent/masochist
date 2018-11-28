/**
 * @flow strict
 */

let invariant;

if (__DEV__) {
  invariant = function invariant(
    condition: mixed,
    format: string,
    ...args: Array<mixed>
  ): void {
    if (condition == null || condition === false) {
      const replacements = args.map(String);
      throw new Error(format.replace(/%s/g, () => replacements.shift()));
    }
  };
} else {
  invariant = function invariant(condition: mixed): void {
    if (condition == null || condition === false) {
      throw new Error('Invariant failed');
    }
  };
}

export default invariant;
