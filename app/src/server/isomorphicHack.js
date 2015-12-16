/**
 * Similar to the hack in:
 *
 *   https://github.com/denvned/isomorphic-relay/blob/5ff053f16/src/fixFetch.js
 *
 * This enables us to import from "react-relay" without blowing up due to
 * missing `self`.
 *
 * Not intended to actually allow isomorphic rendering; that will be tackled as
 * part of:
 *
 *   https://github.com/wincent/masochist/issues/32
 */
if (typeof self === 'undefined') {
  global.self = {};
}
