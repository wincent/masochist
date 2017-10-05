/**
 * @noflow
 */

// Client-side code needs these, so we declare them outside the schema to avoid
// pulling that down into the bundle.
const markupExtensions = Object.freeze([
  'c',
  'html',
  'm',
  'md',
  'patch',
  'rb',
  'sh',
  'txt',
]);

export default markupExtensions;
