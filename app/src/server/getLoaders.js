/**
 * @flow
 */

import getArticleLoader from './loaders/getArticleLoader';
import getPageLoader from './loaders/getPageLoader';
import getPostLoader from './loaders/getPostLoader';
import getSnippetLoader from './loaders/getSnippetLoader';
import getTagLoader from './loaders/getTagLoader';
import getUserLoader from './loaders/getUserLoader';
import getWikitextLoader from './loaders/getWikitextLoader';

export default function getLoaders() {
  return {
    Article: getArticleLoader(),
    Page: getPageLoader(),
    Post: getPostLoader(),
    Snippet: getSnippetLoader(),
    Tag: getTagLoader(),
    User: getUserLoader(),
    Wikitext: getWikitextLoader(),
  };
}
