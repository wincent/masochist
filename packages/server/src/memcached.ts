import MemcachedClientPool from './memcached/MemcachedConnectionPool';

// https://github.com/memcached/memcached/wiki/Protocols
// https://github.com/memcached/memcached/blob/master/doc/protocol.txt
//
// keys <= 250 chars
//
// errors:
// ERROR\r\n # non-existent command name
// CLIENT_ERROR <error>\r\n
// SERVER_ERROR <error>\r\n # server closes connection
//
// set <key> <arbitrary-flags> <expiry> <byte-count>\r\n
// <data>\r\n
//
// set <key> 0 0 <byte-count>\r\n
// <data>\r\n
//
// STORED\r\n # success
//
// get <key>...\r\n
//
// VALUE <key> <arbitrary-flags> <byte-count>\r\n
// <data>\r\n
// ...
// END\r\n
//
// could use flags to indicate type of data
// 0 = text
// 1 = number
// 2 = JSON
// 3 = binary
// or something like that

/**
 * A JavaScript value that can be encoded as JSON.
 */
type JSONValue =
  | Array<JSONValue>
  | {[key: string]: JSONValue}
  | string
  | number
  | boolean
  | null;

const pool = new MemcachedClientPool();

/**
 * Convenience singleton memcached instance with some affordances:
 *
 * - `get()` offers an optional callback to implement the
 *   "get-and-set-fallback-if-needed" pattern.
 * - Both `get()` and `set()` transparently handle JSON stringification and
 *   parsing.
 */
export default {
  async get(
    key: string,
    callback?: () => JSONValue | Promise<JSONValue>,
  ): Promise<JSONValue | undefined> {
    const value = await pool.client.get(key);
    if (value === undefined) {
      if (callback) {
        const computed = await callback();
        pool.client.set(key, JSON.stringify(computed));
        return computed;
      } else {
        return; // Avoid "TS7030: Not all code paths return a value."
      }
    } else {
      return JSON.parse(value);
    }
  },

  set(key: string, value: JSONValue) {
    return pool.client.set(key, JSON.stringify(value));
  },
};
