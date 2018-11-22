/**
 * @flow
 */

import pipe from './pipe';

export type Invocation = {
  command: string,
  args: Array<string>,
};

/**
 * If given a single invocation, run
 *
 *     return run(git('log', '...'));
 */
export default function run(invocation: Invocation): Promise<string> {
  return pipe(invocation);
}
