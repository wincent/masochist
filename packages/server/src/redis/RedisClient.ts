import {nullthrows} from '@masochist/common';
import Client from '../Client';
import ResponseParser from './RedisResponseParser';

import type {Response} from './RedisResponseParser';

// Not a full list of Redis commands, just the ones I use.
export type Command =
  | 'EXEC'
  | 'GET' // string
  | 'HELLO'
  | 'MULTI'
  | 'PING'
  | 'SET' // string string
  | 'ZADD' // key, timestamp-as-string, file
  | 'ZCARD' // key
  | 'ZINCRBY' // key, number, string
  | 'ZRANGE' // key, offset, end, 'REV', 'WITHSCORES'?
  | 'ZREM' // key,file
  | 'ZREMRANGEBYSCORE'; // key -inf number

export default class RedisClient extends Client {
  command(name: Command, ...args: Array<string | number>): Promise<Response> {
    return new Promise((resolve, reject) => {
      this._commands.enqueue(() => {
        this._state = Client.STATE.BUSY;
        const parser = new ResponseParser(this._iterable);
        parser
          .parse()
          .then((result) => {
            resolve(result);
            this._state = Client.STATE.READY;
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

  multi(
    commands: Array<[Command, ...Array<string | number>]>,
  ): Promise<Response> {
    return new Promise((resolve, reject) => {
      this._commands.enqueue(() => {
        this._state = Client.STATE.BUSY;
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
              this._state = Client.STATE.READY;
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
    super._connect();

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
}
