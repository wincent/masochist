import EventEmitter from 'node:events';
import {createConnection} from 'node:net';

import {Queue, nullthrows} from '@masochist/common';

export type Config = {
  host: string;
  port: number;
};

type StateName = keyof typeof STATE;
type StateCode = typeof STATE[StateName];

const STATE = {
  NEW: 0, // Constructed but not yet ready.
  CONNECTING: 1, // Not yet connected.
  READY: 2, // Ready for a command.
  BUSY: 3, // Waiting for a reply.
  ERROR: 4, // Something went wrong.
  DESTROYED: 5, // Socket is gone.
} as const;

/**
 * Not really a "Semaphore" in the classic sense (which would manage a count of
 * resources for sharing across threads), but I can't think of a better name.
 *
 * Instances provide an awaitable property (`ready`) and a mechanism for
 * resetting it. A consumer can repeatedly `await` the next unit of work, and
 * a producer can reset the semaphore to effectively "notify" (unblock) the
 * consumer.
 *
 * See: https://en.wikipedia.org/wiki/Semaphore_(programming)
 */
class Semaphore {
  _awaitable: ReturnType<typeof Promise.withResolvers<void>>;

  constructor() {
    // `Promise.withResolvers` is currently at Stage 4, but implemented in Bun
    // (and easily polyfilled for NodeJS).
    // See: https://github.com/tc39/proposal-promise-with-resolvers
    this._awaitable = Promise.withResolvers();
  }

  get ready(): Promise<void> {
    return this._awaitable.promise;
  }

  notify() {
    this._awaitable.resolve();
    this._awaitable = Promise.withResolvers();
  }
}

export default class Client extends EventEmitter {
  _backoff: number | null;
  _commands: Queue<() => void>;
  _config: Config;
  _buffer: string;
  _lines: Queue<string>;
  _iterable: AsyncIterable<string>;
  _semaphore: Semaphore;
  _socket: ReturnType<typeof createConnection> | null;
  _state: StateCode;

  static STATE = STATE;

  constructor(config: Config) {
    super();

    this._backoff = null;
    this._buffer = '';
    this._config = config;
    this._commands = new Queue();
    this._lines = new Queue();
    this._semaphore = new Semaphore();
    this._socket = null;
    this._state = Client.STATE.NEW;

    const lines = this._lines;
    const semaphore = this._semaphore;

    this._iterable = {
      [Symbol.asyncIterator]: async function* () {
        while (true) {
          if (lines.empty) {
            await semaphore.ready;
          }
          yield nullthrows(lines.dequeue());
        }
      },
    };

    this._connect();
  }

  destroy() {
    if (this._socket) {
      this._socket.destroy();
      this._socket = null;
    }
    this._state = Client.STATE.DESTROYED;
    this.emit('destroy', this);
    this.removeAllListeners();
  }

  _connect() {
    this._state = Client.STATE.CONNECTING;
    this._socket = createConnection(this._config)
      .on('close', (hadError) => this._onClose(hadError))
      .on('connect', () => this._onConnect())
      .on('data', (data) => this._onData(data))
      .on('error', (error) => this._onError(error))
      .on('ready', () => this._onReady())
      .on('timeout', () => this._onTimeout())
      .setNoDelay();
  }

  _runQueue() {
    if (this._state === Client.STATE.READY) {
      const callback = this._commands.dequeue();
      if (callback) {
        callback();
      }
    }
  }

  _onClose(hadError: boolean) {
    if (hadError) {
      console.log('Client._onClose()');
    }
  }

  _onConnect() {
    this._backoff = null;
  }

  _onData(data: Buffer) {
    this._buffer += data.toString();

    while (true) {
      // Note that it's safe to use `\r\n` as a delimiter, even in a memcached
      // client (where responses may contain embedded `\r\n` sequences) because
      // we know our input corpus never contains them (see the output of `git
      // grep -l $'\r'` on the `content` branch).
      const index = this._buffer.indexOf('\r\n');
      if (index === -1) {
        // No more lines to process for now.
        break;
      }
      const line = this._buffer.slice(0, index + 2);
      this._lines.enqueue(line);
      this._buffer = this._buffer.slice(index + 2);
    }

    if (!this._lines.empty) {
      this._semaphore.notify();
    }
  }

  _onError(error: Error) {
    if (
      isNetError(error) && (
        error.code === 'ECONNREFUSED' || // Couldn't connect (server not running?).
        error.code === 'EPIPE' // Server went down.
      )
    ) {
      if (error.code !== 'ECONNREFUSED' || process.env.NODE_ENV !== 'test') {
        // Avoid console spam in tests for expected error (while throwaway Redis
        // instance is booting).
        console.log('Client._onError():', error);
      }
      this._state = Client.STATE.ERROR;
      this._backoff = (this._backoff ? this._backoff : 0.1) *
        (1 + Math.random());
      setTimeout(() => {
        if (this._state === Client.STATE.ERROR) {
          this._connect();
        }
      }, this._backoff * 1000);
    } else {
      console.log('Client._onError():', error);
      this.destroy();
    }
  }

  _onReady() {
    this._state = Client.STATE.READY;
    this._runQueue();
  }

  _onTimeout() {
    console.log('Client._onTimeout()');
    this.destroy();
  }
}

/**
 * > The error.code property is a string label that identifies the kind of
 * > error. error.code is the most stable way to identify an error. It will only
 * > change between major versions of Node.js. In contrast, error.message
 * > strings may change between any versions of Node.js.
 *
 * See: https://nodejs.org/api/errors.html#errorcode
 *
 * It appears that Bun's "node:net" compatibility module also returns `Error`
 * objects with `code` properties on them.
 */
interface NetError extends Error {
  code?: string;
}

function isNetError(error: Error): error is NetError {
  return Object.hasOwn(error, 'code');
}
