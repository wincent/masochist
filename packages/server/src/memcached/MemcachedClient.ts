import {nullthrows} from '@masochist/common';
import Client from '../Client';

const CRLF = '\r\n';
const MAXIMUM_KEY_LENGTH = 250;
const PRINTABLE = /^[\x21-\x7e]+$/;
const WHITESPACE = /\s/;

/**
 * Validates key has no whitespace or control characters (additionally, we
 * choose to limit to ASCII) and is no more than 250 characters long.
 */
function validateKey(key: string) {
  if (key.length > MAXIMUM_KEY_LENGTH) {
    throw new Error(
      `validateKey(): key ${
        JSON.stringify(key)
      } length ${key.length} exceeds maximum ${MAXIMUM_KEY_LENGTH}`,
    );
  }
  if (WHITESPACE.test(key)) {
    throw new Error(
      `validateKey(): key ${JSON.stringify(key)} contains whitespace`,
    );
  }
  if (!PRINTABLE.test(key)) {
    throw new Error(
      `validateKey(): key ${
        JSON.stringify(key)
      } contains non-printable characters`,
    );
  }
}
export default class MemcachedClient extends Client {
  _readLine: () => Promise<string> = async () => {
    const next = await this._iterable[Symbol.asyncIterator]().next();
    if (!next.value.endsWith(CRLF)) {
      throw new Error(
        `_readLine(): no trailing \\r\\n at end of string ${
          JSON.stringify(next.value)
        }`,
      );
    }
    return next.value.slice(0, -2);
  };

  // get foo\r\n
  // VALUE foo 0 13\r\n
  // Hello, world!\r\n
  // END\r\n
  //
  // get bar\r\n
  // END\r\n
  get(key: string): Promise<string | void> {
    validateKey(key);
    return new Promise((resolve, reject) => {
      this._commands.enqueue(async () => {
        this._state = Client.STATE.BUSY;
        const command = `get ${key}${CRLF}`;
        nullthrows(this._socket).write(command);
        const line = await this._readLine();
        if (line === 'END') {
          resolve();
          return;
        } else if (line.startsWith('VALUE ')) {
          const [_value, reportedKey, flags, length] = line.split(/\s+/);
          if (reportedKey !== key) {
            console.warn(
              `get(): reported key (${
                JSON.stringify(reportedKey)
              }) did not match stored key (${JSON.stringify(key)})`,
            );
          }
          if (parseInt(flags, 10) !== 0) {
            console.warn(
              `get(): unexpected non-zero flags value ${JSON.stringify(flags)}`,
            );
          }
          const value = await this._readLine();
          const end = await this._readLine();
          if (end !== 'END') {
            reject(`get(): expected END but got ${JSON.stringify(end)}`);
          } else {
            if (value.length !== parseInt(length, 10)) {
              console.warn(
                `get(): value length (${value.length}) does not match expected value (${
                  JSON.stringify(length)
                })`,
              );
            }
            resolve(value);
          }
        } else {
          reject(`get(): unexpected response ${JSON.stringify(line)}`);
        }
      });
      this._runQueue();
    });
  }

  // set foo 0 0 13\r\n
  // Hello, world!\r\n
  // STORED\r\n
  set(key: string, value: string): Promise<void> {
    validateKey(key);
    return new Promise((resolve, reject) => {
      this._commands.enqueue(async () => {
        this._state = Client.STATE.BUSY;
        const flags = 0;
        const expiry = 0; // Never expire.
        const command = `set ${key} ${flags} ${expiry} ${value.length}${CRLF}` +
          `${value}${CRLF}`;
        nullthrows(this._socket).write(command);
        const line = await this._readLine();
        if (line === 'STORED') {
          resolve();
        } else {
          reject(`set(): unexpected response ${JSON.stringify(line)}`);
        }
      });
      this._runQueue();
    });
  }
}
