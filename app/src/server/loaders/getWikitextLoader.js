/**
 * @flow
 */

import DataLoader from 'dataloader';
import wikify from '../wikify';

import type {WikitextSpec} from '../wikify';

async function loadWikitext(
  keys: Array<WikitextSpec>
): Promise<Array<?string | Error>> {
  const response = await wikify(keys);
  return JSON.parse(response).results;
}

export default function getWikitextLoader() {
  return new DataLoader(loadWikitext, {cache: false});
}
