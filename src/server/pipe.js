/**
 * @flow
 */

import {spawn} from 'child_process';

import type {Invocation} from './run';

function getError(invocations: Array<Invocation>, code: number): Error {
  const pipeline = invocations
    .map(({command, args}) => `${command} ${args.join(' ')}`)
    .join(' | ');
  const error = new Error(`${pipeline}: exit ${code}`);
  error.code = code;
  return error;
}

/**
 *     return pipe(git('rev-list', '...'), git('diff-tree', '...'));
 */
export default function pipe(
  ...invocations: Array<Invocation>
): Promise<string> {
  let isPending = true;
  return new Promise((resolve, reject) => {
    let invocation = invocations.pop();
    let last = spawn(invocation.command, invocation.args);
    let stderr = '';
    let stdout = '';

    last.stderr.on('data', data => (stderr += data));
    last.stdout.on('data', data => (stdout += data));

    last.on('close', code => {
      if (isPending) {
        isPending = false;
        if (code) {
          reject(getError(invocations, code));
        } else {
          resolve(stdout);
        }
      }
    });

    while ((invocation = invocations.pop())) {
      const child = spawn(invocation.command, invocation.args);
      child.stderr.on('data', data => {
        // TODO: may want to log this
      });
      child.stdout.on('data', data => {
        last.stdin.write(data);
      });
      child.on('close', code => {
        if (isPending && code) {
          reject(getError(invocations, code));
        }
        last.stdin.end();
      });
      last = child;
    }
  });
}
