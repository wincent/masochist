/**
 * @flow
 */

import Promise from 'bluebird';
import {spawn} from 'child_process';

// TODO: expose streamy version of this
function run(command, ...args: Array<string>): Promise<string> {
  const promise = new Promise((resolve, reject) => {
    const child = spawn(command, args);
    let stdout = '';

    child.stdout.on('data', data => stdout += data);

    child.on('error', error => {
      if (promise.isPending()) {
        reject(error);
      }
    });

    child.on('close', code => {
      if (code) {
        if (promise.isPending()) {
          reject(code);
        }
      } else {
        resolve(stdout);
      }
    });

  });

  return promise;
}

export default function git(...args: Array<string>): Promise {
  return run('git', ...args);
}
