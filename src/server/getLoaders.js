/**
 * @noflow
 */

import getArticleLoader from './loaders/getArticleLoader';
import getPageLoader from './loaders/getPageLoader';
import getPostLoader from './loaders/getPostLoader';
import getSnippetLoader from './loaders/getSnippetLoader';
import getTagLoader from './loaders/getTagLoader';

export default function getLoaders() {
  return {
    Article: getArticleLoader(),
    Page: getPageLoader(),
    Post: getPostLoader(),
    Snippet: getSnippetLoader(),
    Tag: getTagLoader(),
  };
}
