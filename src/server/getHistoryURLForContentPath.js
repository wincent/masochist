import getURLForContentPath from './getURLForContentPath';

export default function getHistoryURLForContentPath(path) {
  return getURLForContentPath('commits', path);
}
