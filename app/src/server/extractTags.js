/**
 * @flow
 */

'use strict';

// NOTE: this will probably become a separate module, or at least a separate
// export
function extractHeaders(blob: string): ?string {
  // Simple approach would be to split on linebreaks and process line by line,
  // but blob may be quite large, so we make a RegExp-based scanner to avoid the
  // unnecessary allocations.
  const regExp = /([^\n]*)(?:\n|$)/g

  // Skip over initial header start marker.
  let match = regExp.exec(blob);
  if (match[1] !== '---') {
    return null;
  }

  // Consume lines until hitting header end marker.
  const start = match[0].length;
  while ((match = regExp.exec(blob))) {
    if (match[1] === '---\n' || match[1] === '---') {
      // Found end marker.
      const finish = regExp.lastIndex + match[0].length;
      return blob.substring(start, finish);
    } else if (!match[0].length) {
      // Got all the way to the end of the input without seeing the end marker.
      return null;
    }
  }
}

function parseHeaders(string: string): Object {
  const headers = {};
  const regExp = /(\w+)\s*:\s*([^\n]*)(?:\n|$)/g
  let match;
  while ((match = regExp.exec(string))) {
    headers[match[1]] = match[2].trim();
  }
  return headers;
}

export default function extractTags(blob: string): Array<string> {
  const headers = extractHeaders(blob);
  const tags = (headers && parseHeaders(headers)['tag_names']) || '';
  return tags.split(/\s+/);
}
