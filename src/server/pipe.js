/**
 * @flow
 */

import {spawn} from 'child_process';

import type {Invocation} from './run';

export class RunError extends Error {
  code: number;

  constructor(message: string, code: number) {
    super(`RunError: ${message}`);
    this.code = code;
  }
}

function getError(pipeline: string, code: number): RunError {
  return new RunError(`${pipeline}: exit ${code}`, code);
}

/**
 * Spawns multiple invocations and connects the stdout of each one into the
 * stdin of the next. For example:
 *
 *     return pipe(git('rev-list', '...'), git('diff-tree', '...'));
 *
 * is equivalent to this shell pipeline:
 *
 *     git rev-list ... | git diff-tree ...
 */
export default function pipe(
  ...invocations: Array<Invocation>
): Promise<string> {
  const pipeline = invocations
    .map(({command, args}) => `${command} ${args.join(' ')}`)
    .join(' | ');
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
          reject(getError(pipeline, code));
        } else {
          resolve(stdout);
        }
      }
    });

    while (invocations.length) {
      invocation = invocations.pop();
      last = (next => {
        const child = spawn(invocation.command, invocation.args);
        child.stderr.on('data', data => {
          // TODO: may want to log this
        });
        child.stdout.on('data', data => {
          next.stdin.write(data);
        });
        child.on('close', code => {
          if (isPending && code) {
            reject(getError(pipeline, code));
          }
          next.stdin.end();
        });
        return child;
      })(last);
    }
  });
}
