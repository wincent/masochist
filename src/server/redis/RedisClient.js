import EventEmitter from 'events';
import {createConnection} from 'net';

import ResponseParser from './ResponseParser';
import Queue from './Queue';

export default class RedisClient extends EventEmitter {
  static STATE = {
    NEW: 0, // Constructed but not yet ready.
    CONNECTING: 1, // Not yet connected.
    READY: 2, // Ready for a command.
    BUSY: 3, // Waiting for a reply.
    ERROR: 4, // Something went wrong.
    DESTROYED: 5, // Socket is gone.
  };

  constructor() {
    super();

    this._backoff = null;
    this._queue = new Queue();
    this._buffer = '';
    this._socket = null;
    this._state = RedisClient.STATE.NEW;

    this._connect();
  }

  command(name, ...args) {
    return new Promise((resolve, reject) => {
      this._queue.enqueue(() => {
        this._state = RedisClient.STATE.BUSY;
        const lines = this._lines();
        const parser = new ResponseParser(lines);
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
          })
          .finally(() => lines.dispose());
        this._socket.write(this._encodeCommand(name, ...args));
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

  multi(commands) {
    return new Promise((resolve, reject) => {
      this._queue.enqueue(() => {
        this._state = RedisClient.STATE.BUSY;
        const lines = this._lines();
        const parser = new ResponseParser(lines);
        const pipelinedCommands = [['MULTI'], ...commands, ['EXEC']]
          .map((command) => {
            return this._encodeCommand(...command);
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
          })
          .finally(() => lines.dispose());
        this._socket.write(pipelinedCommands);
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
    if (hadError) {
      console.log('RedisClient._onClose()');
    }
  }

  _onConnect() {
    this._backoff = null;
  }

  /**
   * Returns an async iterator.
   */
  _lines() {
    const queue = new Queue();
    let resolve = null;

    const callback = (line) => {
      queue.enqueue(line);
      if (resolve) {
        resolve();
        resolve = null;
      }
    };

    this.on('line', callback);

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

      // Callers must dispose of the iterator once they've finished with it in
      // order to avoid:
      //
      //    MaxListenersExceededWarning: Possible EventEmitter memory leak
      //    detected. 11 line listeners added to [RedisClient]. Use
      //    emitter.setMaxListeners() to increase limit
      //
      dispose: () => this.removeListener('line', callback),
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
    console.log('RedisClient._onError():', error);
    if (
      error.code === 'ECONNREFUSED' || // Couldn't connect (Redis not running?).
      error.code === 'EPIPE' // Redis went down.
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
