import path from 'path';
import {REPO} from './constants';

// TODO: expose streamy version of this
export default function git(...args) {
  const repoPath = path.resolve(__dirname, '../..', REPO);
  return {
    command: 'git',
    args: ['-C', repoPath, ...args],
  };
}
