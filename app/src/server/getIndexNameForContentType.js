/**
 * @flow
 */

/**
 * Produce index names of the form: blog-index, snippets-index, tags-index,
 * wiki-index.
 */
export default function getIndexNameForContentType(contentType: string): string {
  return `${contentType}-index`;
}
