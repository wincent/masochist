// Set __DEV__ if started with `babel-node src/server/main.js` (or `npm run
// start`).
if (process.env.NODE_ENV !== 'production') {
  // Use `[]` syntax here to prevent devBabelPlugin from transforming this into
  // invalid code:
  //
  //   global.process.env.NODE_ENV !== 'production' = true;
  //
  // (which would produce "ReferenceError: Invalid left-hand side in
  // assignment").
  global['__DEV__'] = true
}
