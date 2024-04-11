import EventEmitter from 'node:events';
import {createConnection} from 'node:net';

import {Queue, nullthrows} from '@masochist/common';
import ResponseParser from './ResponseParser';

import type {Response} from './ResponseParser';

// Not a full list of Redis commands, just the ones I use.
export type Command =
  | 'EXEC'
  | 'GET' // string
  | 'HELLO'
  | 'MULTI'
  | 'SET' // string string
  | 'ZADD' // key, timestamp-as-string, file
  | 'ZCARD' // key
  | 'ZINCRBY' // key, number, string
  | 'ZRANGE' // key, offset, end, 'REV', 'WITHSCORES'?
  | 'ZREM' // key,file
  | 'ZREMRANGEBYSCORE'; // key -inf number

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

export default class RedisClient extends EventEmitter {
  _backoff: number | null;
  _commands: Queue<() => void>;
  _buffer: string;
  _lines: Queue<string>;
  _iterable: AsyncIterable<string>;
  _semaphore: Semaphore;
  _socket: ReturnType<typeof createConnection> | null;
  _state: StateCode;

  static STATE = STATE;

  constructor() {
    super();

    this._backoff = null;
    this._buffer = '';
    this._commands = new Queue();
    this._lines = new Queue();
    this._semaphore = new Semaphore();
    this._socket = null;
    this._state = RedisClient.STATE.NEW;

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

  command(name: Command, ...args: Array<string | number>): Promise<Response> {
    return new Promise((resolve, reject) => {
      this._commands.enqueue(() => {
        this._state = RedisClient.STATE.BUSY;
        const parser = new ResponseParser(this._iterable);
        parser
          .parse()
          .then((result) => {
            resolve(result);
            this._state = RedisClient.STATE.READY;
            this._runQueue();
          })
          .catch((error) => {
            console.log('command() error:', error, 'command:', name, ...args);
            reject(error);
          });
        nullthrows(this._socket).write(this._encodeCommand(name, ...args));
      });
      this._runQueue();
    });
  }

  destroy() {
    if (this._socket) {
      this._socket.destroy();
      this._socket = null;
    }
    this._state = RedisClient.STATE.DESTROYED;
    this.emit('destroy', this);
    this.removeAllListeners();
  }

  multi(
    commands: Array<[Command, ...Array<string | number>]>,
  ): Promise<Response> {
    return new Promise((resolve, reject) => {
      this._commands.enqueue(() => {
        this._state = RedisClient.STATE.BUSY;
        const parser = new ResponseParser(this._iterable);
        const batch: Array<[Command, ...Array<string | number>]> = [
          ['MULTI'],
          ...commands,
          ['EXEC'],
        ];
        const encodedCommands = batch
          .map(([command, ...args]) => {
            return this._encodeCommand(command, ...args);
          })
          .join('');
        parser
          .parse()
          .then(async (result) => {
            if (result === 'OK') {
              for (let i = 0; i < commands.length; i++) {
                const status = await parser.parse();
                if (status !== 'QUEUED') {
                  reject('Expected QUEUED');
                  return;
                }
              }
              const results = await parser.parse();
              resolve(results);
              this._state = RedisClient.STATE.READY;
              this._runQueue();
            } else {
              reject('Expected OK');
            }
          })
          .catch((error) => {
            console.log('multi() error:', error, 'commands:', commands);
            reject(error);
          });
        nullthrows(this._socket).write(encodedCommands);
      });
      this._runQueue();
    });
  }

  _connect() {
    this._state = RedisClient.STATE.CONNECTING;
    this._socket = createConnection({
      host: '127.0.0.1',
      port: 6379,
    })
      .on('close', (hadError) => this._onClose(hadError))
      .on('connect', () => this._onConnect())
      .on('data', (data) => this._onData(data))
      .on('error', (error) => this._onError(error))
      .on('ready', () => this._onReady())
      .on('timeout', () => this._onTimeout())
      .setNoDelay();

    // Switch to RESP3 Protocol before any caller enqueues a command.
    this.command('HELLO', 3);
  }

  _encodeCommand(name: Command, ...args: Array<string | number>) {
    let command = '*' + (args.length + 1) + '\r\n';
    command += [name, ...args]
      .map((value) => {
        const string = value.toString();
        return '$' + string.length + '\r\n' + string + '\r\n';
      })
      .join('');
    return command;
  }

  _runQueue() {
    if (this._state === RedisClient.STATE.READY) {
      const callback = this._commands.dequeue();
      if (callback) {
        callback();
      }
    }
  }

  _onClose(hadError: boolean) {
    if (hadError) {
      console.log('RedisClient._onClose()');
    }
  }

  _onConnect() {
    this._backoff = null;
  }

  _onData(data: Buffer) {
    this._buffer += data.toString();

    while (true) {
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
    console.log('RedisClient._onError():', error);
    if (
      isNetError(error) && (
        error.code === 'ECONNREFUSED' || // Couldn't connect (Redis not running?).
        error.code === 'EPIPE' // Redis went down.
      )
    ) {
      this._state = RedisClient.STATE.ERROR;
      this._backoff = (this._backoff ? this._backoff : 1) * (1 + Math.random());
      setTimeout(() => {
        if (this._state === RedisClient.STATE.ERROR) {
          this._connect();
        }
      }, this._backoff * 1000);
    } else {
      this.destroy();
    }
  }

  _onReady() {
    this._state = RedisClient.STATE.READY;
    this._runQueue();
  }

  _onTimeout() {
    console.log('RedisClient._onTimeout()');
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
