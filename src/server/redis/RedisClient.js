import EventEmitter from 'events';
import {createConnection} from 'net';

// Run with: yarn run babel-node src/server/redis/RedisClient.js

import ResponseParser from './ResponseParser';
import Queue from './Queue';

export default class RedisClient extends EventEmitter {
  static STATE = {
    NEW: 0, // Constructed but not yet ready.
    BUSY: 1, // Waiting for a reply.
    READY: 2, // Ready for a command.
  };

  constructor() {
    super();

    this._queue = new Queue();
    this._buffer = '';
    this._state = RedisClient.STATE.NEW;

    this.socket = createConnection({
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
    // TODO: implement retry logic

    // Switch to RESP3 Protocol before any caller enqueues a command.
    this.command('HELLO', 3); // TODO: .catch() error-handling (add ERROR state)
  }

  close() {
    this.socket.end();
  }

  command(name, ...args) {
    return new Promise((resolve, reject) => {
      this._queue.enqueue(() => {
        this._state = RedisClient.STATE.BUSY;
        this.once('response', (result) => {
          // TODO: handle error case (eg. check `result` and call `reject`)
          resolve(result);
          this._runQueue();
        });
        this.socket.write(this._encodeCommand(name, ...args));
      });
      this._runQueue();
    });
  }

  multi(commands) {
    return new Promise((resolve, reject) => {
      this._queue.enqueue(() => {
        this._state = RedisClient.STATE.BUSY;
        this.once('response', (result) => {
          // TODO: handle error case (eg. check `result` and call `reject`)
          // console.log(result);
          if (
            !Array.isArray(result) ||
            result.length !== commands.length + 2 ||
            result[0] !== 'OK' ||
            !result
              .slice(1, commands.length + 1)
              .every((item) => item === 'QUEUED') ||
            !Array.isArray(result[result.length - 1])
          ) {
            reject(new Error('Invalid response'));
          } else {
            resolve(result[result.length - 1]);
          }
          this._runQueue();
        });
        const pipelinedCommands = [['MULTI'], ...commands, ['EXEC']]
          .map((command) => {
            return this._encodeCommand(...command);
          })
          .join('');
        this.socket.write(pipelinedCommands);
      });
      this._runQueue();
    });
  }

  _encodeCommand(name, ...args) {
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
    if (this._state === RedisClient.STATE.READY && !this._queue.isEmpty()) {
      const callback = this._queue.dequeue();
      callback();
    }
  }

  _onClose(hadError) {
    // TODO
  }

  _onConnect() {
    // TODO... maybe nothing...
  }

  _onData(data) {
    this._buffer += data.toString();

    if (!this._buffer.endsWith('\r\n')) {
      // Don't bother trying to parse result until we have at least a full line.
      return;
    }

    // In this app, we expect all responses to be small enough to fit in a
    // single `data` payload. So, in the event that we ever see what looks to be
    // a partial payload, we give up and allow it to be reprocessed on the next
    // call. This _would_ be inefficient, if it ever happened...
    const responses = [];
    const parser = new ResponseParser(this._buffer);
    while (true) {
      try {
        // BUG: this is flaky; if I run a lot of `multi` batches I don't always
        // get the same results back (because we actually may get things in
        // chunks...)
        const result = parser.parse();
        if (result === undefined) {
          break; // We got to the end of the input; no more responses.
        } else {
          responses.push(result);
        }
      } catch (error) {
        // Will try again on next call.
        break;
      }
    }
    this._buffer = '';
    this._state = RedisClient.STATE.READY;

    if (responses.length === 1) {
      // Hackily assume that a single response means we're not pipelining.
      this.emit('response', responses[0]);
    } else {
      this.emit('response', responses);
    }
  }

  _onError(error) {
    // TODO
  }

  _onReady() {
    this._state = RedisClient.STATE.READY;
    this._runQueue();
  }

  _onTimeout() {
    // TODO
  }

  get state() {
    return this._state;
  }
}
