/**
 * @flow strict
 */

import pipe from './pipe';

export type Invocation = {
  command: string,
  args: Array<string>,
};

/**
 * Convenience method to spawn a single invocation. For example:
 *
 *     return run(git('log', '...'));
 *
 * is equivalent to the shell invocation:
 *
 *     git log ...
 */
export default function run(invocation: Invocation): Promise<string> {
  return pipe(invocation);
}
