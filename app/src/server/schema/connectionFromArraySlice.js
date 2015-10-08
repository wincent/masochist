/**
 * @flow
 */

type ArraySliceMetaInfo = {
  sliceStart: number;
  arrayLength: number;
};

type Base64String = string;

const CURSOR_PREFIX = 'offset:';

/**
 * Decodes Base64-encoded text.
 */
function atob(base64Text: Base64String): string {
  return new Buffer(base64Text, 'base64').toString('ascii');
}

/**
 * Encodes as Base64-encoded text.
 */
function btoa(encodable: string): Base64String {
  return new Buffer(encodable).toString('base64');
}

function offsetToCursor(offset: number): Base64String {
  return btoa(CURSOR_PREFIX + offset);
}

export function cursorToOffset(cursor: Base64String): number {
  return parseInt(
    atob(cursor).slice(CURSOR_PREFIX.length),
    10,
  );
}

function getOffset(cursor: ?ConnectionCursor, defaultOffset: number): number {
  if (cursor == null) {
    return defaultOffset;
  }
  const offset = cursorToOffset(cursor);
  return isNaN(offset) ? defaultOffset : offset;
}

/**
 * Given a (Promise of a) slice (subset) of an array, returns a connection.
 */
export async function connectionFromArraySlice<T>(
  arraySlice: Promise<Array<T>>,
  args: ConnectionArguments,
  meta: ArraySliceMetaInfo,
): Promise<Connection<T>> {
  return arraySlice.then(slice => {
    const {after, before, first, last} = args;
    const {sliceStart, arrayLength} = meta;
    const sliceEnd = sliceStart + slice.length;

    const startOffset = Math.max(
      sliceStart - 1,
      getOffset(after, -1),
      -1,
    ) + 1;
    const endOffset = Math.min(
      sliceEnd,
      getOffset(before, meta.arrayLength),
      meta.arrayLength,
    );

    // If supplied slice is too large, trim it down before mapping over it.
    if (sliceStart < startOffset || sliceEnd > endOffset) {
      slice = slice.slice(
        startOffset - sliceStart,
        endOffset - sliceEnd,
      );
    }

    const edges = slice.map((value, index) => ({
      cursor: offsetToCursor(startOffset + index),
      node: value,
    }));

    const firstEdge = edges[0];
    const lastEdge = edges[edges.length - 1];
    return {
      edges,
      pageInfo: {
        startCursor: firstEdge ? firstEdge.cursor : null,
        endCursor: lastEdge ? lastEdge.cursor : null,
        hasPreviousPage: startOffset,
        hasNextPage: meta.arrayLength > endOffset,
      },
    };
  });
}
