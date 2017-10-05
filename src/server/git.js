/**
 * @noflow
 */

import Promise from 'bluebird';
import {spawn} from 'child_process';
import path from 'path';
import createErrorClass from '../common/createErrorClass';
import {REPO} from './constants';

export const GitError = createErrorClass('GitError', function(
  message: string,
  code: number,
) {
  return {message, code};
});

// TODO: expose streamy version of this
function run(command, ...args: Array<string>): Promise<string> {
  const promise = new Promise((resolve, reject) => {
    const child = spawn(command, args);
    let stderr = '';
    let stdout = '';

    child.stderr.on('data', data => (stderr += data));
    child.stdout.on('data', data => (stdout += data));

    child.on('error', error => {
      if (promise.isPending()) {
        reject(error);
      }
    });

    child.on('close', code => {
      if (code) {
        if (promise.isPending()) {
          const commandString = [command, ...args].join(' ');
          const message = [
            `git error code (${code}) running \`${commandString}\``,
            stdout,
            stderr,
          ].join('\n');
          reject(new GitError(message, code));
        }
      } else {
        resolve(stdout);
      }
    });
  });

  return promise;
}

export default function git(...args: Array<string>): Promise {
  const repoPath = path.resolve(__dirname, '../..', REPO);
  return run('git', '-C', repoPath, ...args);
}
