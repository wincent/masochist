/**
 * @flow strict-local
 */

import path from 'path';
import {REPO} from './constants';

import type {Invocation} from './run';

// TODO: expose streamy version of this
export default function git(...args: Array<string>): Invocation {
  const repoPath = path.resolve(__dirname, '../..', REPO);
  return {
    command: 'git',
    args: ['-C', repoPath, ...args],
  };
}
