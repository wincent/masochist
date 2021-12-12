import pipe from './pipe';

/**
 * Convenience method to spawn a single invocation. For example:
 *
 *     return run(git('log', '...'));
 *
 * is equivalent to the shell invocation:
 *
 *     git log ...
 */
export default function run(invocation) {
  return pipe(invocation);
}
