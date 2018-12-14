/**
 * @flow strict-local
 */

/**
 * Via `useBuiltIns: 'entry'` in our @babel/preset-env settings in the
 * webpack configs, the following `require` call should get transformed into
 * individual requires into core-js, reducing our bundle size.
 *
 * See: https://babeljs.io/docs/en/babel-preset-env
 */
import "@babel/polyfill";
