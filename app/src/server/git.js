/**
 * @flow
 */

import Promise from 'bluebird';
import {spawn} from 'child_process';
import path from 'path';
import config from '../../config';

// Why subclassing built-ins is hard:
//   http://www.2ality.com/2011/12/subtyping-builtins.html
//
// How to fake it:
//   https://coderwall.com/p/m3-cqw/subclassing-error-in-javascript-is-harder-than-it-seems
export function GitError(message: string, code: number) {
  this.message = message;
  this.code = code;
  this.stack = new Error(message).stack;
}
GitError.prototype = Object.create(Error.prototype);
GitError.prototype.constructor = GitError;

// TODO: expose streamy version of this
function run(command, ...args: Array<string>): Promise<string> {
  const promise = new Promise((resolve, reject) => {
    const child = spawn(command, args);
    let stdout = '';

    child.stdout.on('data', data => (stdout += data));

    child.on('error', error => {
      if (promise.isPending()) {
        reject(error);
      }
    });

    child.on('close', code => {
      if (code) {
        if (promise.isPending()) {
          reject(new GitError(`git error code (${code})`, code));
        }
      } else {
        resolve(stdout);
      }
    });
  });

  return promise;
}

export default function git(...args: Array<string>): Promise {
  const repoPath = path.resolve(__dirname, '../../..', config.repo);
  return run('git', '-C', repoPath, ...args);
}
