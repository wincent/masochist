let invariant;

if (__DEV__) {
  invariant = function invariant(condition, format, ...args) {
    if (condition == null || condition === false) {
      const replacements = args.map(String);
      throw new Error(format.replace(/%s/g, () => replacements.shift()));
    }
  };
} else {
  invariant = function invariant(condition) {
    if (condition == null || condition === false) {
      throw new Error('Invariant failed');
    }
  };
}

export default invariant;
