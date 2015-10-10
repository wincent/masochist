/**
 * @flow
 */

import DataLoader from 'dataloader';
import wikify from './wikify';

type WikitextSpec = {
  wikitext: string;
  baseHeadingLevel?: ?number;
};

async function loadWikitext(keys: Array<WikitextSpec>): Promise<Array<?string>> {
  const response = await wikify(keys);
  return JSON.parse(response).results;
}

export default function getWikitextLoader() {
  return new DataLoader(loadWikitext, {cache: false});
}
