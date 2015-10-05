/**
 * @flow
 */

function measureHeaderLength(blob: string): number {
  // Simple approach would be to split on linebreaks and process line by line,
  // but blob may be quite large, so we make a RegExp-based scanner to avoid the
  // unnecessary allocations.
  const regExp = /([^\n]*)(?:\n|$)/g

  // Skip over initial header start marker.
  let match = regExp.exec(blob);
  if (match[1] !== '---') {
    return 0;
  }

  // Consume lines until hitting header end marker.
  while ((match = regExp.exec(blob))) {
    if (match[1] === '---\n' || match[1] === '---') {
      // Found end marker.
      return regExp.lastIndex;
    } else if (!match[0].length) {
      // Got all the way to the end of the input without seeing the end marker.
      return 0;
    }
  }
}

export default function stripMetadata(blob: string): string {
  return blob.slice(measureHeaderLength(blob));
}
