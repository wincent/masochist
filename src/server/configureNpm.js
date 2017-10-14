/**
 * @flow
 */

/**
 * Yarn doesn't handle npm_package_config yet:
 *
 *   https://github.com/yarnpkg/yarn/issues/2989
 *
 * As such, there are a few package.json scripts which *must* be run with `npm`
 * rather than `yarn`. This module detects running under `yarn` in those cases
 * and shells out to `npm` to do the equivalent setting of environment
 * variables.
 */

import {spawnSync} from 'child_process';

if (process.env.hasOwnProperty('YARN_SILENT')) {
  const result = spawnSync('npm', ['config', 'get', 'masochist:content-repo']);
  if (result.status !== 0 || result.error) {
    throw new Error('configureNpm: Failed to get config');
  }
  const contentRepo = result.stdout.toString().trim();
  process.env.MASOCHIST_CONTENT_REPO = contentRepo;
}
