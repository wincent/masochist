/**
 * @flow
 */

/**
 * Older versions of Yarn didn't handle npm_package_config:
 *
 *   https://github.com/yarnpkg/yarn/issues/2989
 *
 * We have a new version installed under vendor/bin/, but it's possible people
 * may invoke their globally installed, potentially older version of
 * yarn instead.
 *
 * As such, for the few package.json scripts which *must* be run with `npm`
 * rather than `yarn`, this module detects running under `yarn` in those cases
 * and shells out to `npm` to do the equivalent setting of environment
 * variables.
 */

import {spawnSync} from 'child_process';

const agent = process.env.npm_config_user_agent || '';
if (agent.match(/\byarn\b/)) {
  const result = spawnSync('npm', ['config', 'get', 'masochist:content-repo']);
  if (result.status !== 0 || result.error) {
    throw new Error('configureNpm: Failed to get config');
  }
  const contentRepo = result.stdout.toString().trim();
  process.env.MASOCHIST_CONTENT_REPO = contentRepo;
}
