/**
 * @flow strict
 */

// Prepared regular expressions to eek out a couple % more perf; see:
// https://jsperf.com/escaping
const ampersandRegExp = /&/g;
const lessThanRegExp = /</g;
const greaterThanRegExp = />/g;
const doubleQuoteRegExp = /"/g;
const singleQuoteRegExp = /'/g;

export default function escapeHTML(html: string): string {
  return html
    .replace(ampersandRegExp, '&amp;')
    .replace(lessThanRegExp, '&lt;')
    .replace(greaterThanRegExp, '&gt;')
    .replace(doubleQuoteRegExp, '&quot;')
    .replace(singleQuoteRegExp, '&#39;');
}
