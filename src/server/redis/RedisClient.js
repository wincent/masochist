import EventEmitter from 'events';
import {createConnection} from 'net';

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
        const parser = new ResponseParser();
        parser.parseResponse(this._lines()).then((result) => {
          resolve(result);
          this._state = RedisClient.STATE.READY;
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
        const parser = new ResponseParser();
        const pipelinedCommands = [['MULTI'], ...commands, ['EXEC']]
          .map((command) => {
            return this._encodeCommand(...command);
          })
          .join('');
        const lines = this._lines();
        parser.parseResponse(lines).then(async (result) => {
          if (result === 'OK') {
            for (let i = 0; i < commands.length; i++) {
              const status = await parser.parseResponse(lines);
              if (status !== 'QUEUED') {
                reject('Expected QUEUED');
                return;
              }
            }
            const results = await parser.parseResponse(lines);
            resolve(results);
            this._state = RedisClient.STATE.READY;
            this._runQueue();
          } else {
            reject('Expected OK');
          }
        });
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
    console.log('close', hadError);
  }

  _onConnect() {
    // TODO... maybe nothing...
    console.log('connect');
  }

  /**
   * Returns an async iterator.
   */
  _lines() {
    const queue = new Queue();
    let resolve = null;

    this.on('line', (line) => {
      queue.enqueue(line);
      if (resolve) {
        resolve();
        resolve = null;
      }
    });

    return {
      [Symbol.asyncIterator]: async function* () {
        while (true) {
          if (queue.isEmpty()) {
            await new Promise((fn) => {
              resolve = fn;
            });
          }
          yield queue.dequeue();
        }
      },
    };
  }

  _onData(data) {
    this._buffer += data.toString();

    while (true) {
      const index = this._buffer.indexOf('\r\n');
      if (index === -1) {
        // No more lines to process for now.
        return;
      }
      const line = this._buffer.slice(0, index + 2);
      this.emit('line', line);
      this._buffer = this._buffer.slice(index + 2);
    }
  }

  _onError(error) {
    // TODO
    console.log('error', error);
  }

  _onReady() {
    console.log('ready');
    this._state = RedisClient.STATE.READY;
    this._runQueue();
  }

  _onTimeout() {
    // TODO
    console.log('timeout');
  }

  // TODO: probably remove this; doesn't need to be public
  get state() {
    return this._state;
  }
}
