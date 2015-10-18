/**
 * @flow
 */

import DataLoader from 'dataloader';
import Tag from './Tag';
import loadContent from './loadContent';

async function loadTags(keys: Array<string>): Promise<Array<Object | Error>> {
  // TODO: actual impementation
}

export default function getTagLoader() {
  return new DataLoader(loadTags);
}
