/**
 * @flow
 */

import {getClient} from '../../common/redis';

export default class Snippet {
  // TODO: haul this up to a superclass?
  // or just an entirely separate module (better)
  // could stick this in an snippetIndexer class or function
  static async readIndex(count: number, offset: number): Array {
    const client = getClient();
    const results = await client.multi([
      [
        'zrevrange',
        // TODO: centralize this (we have something similar in bin/updateIndices)
        'masochist:snippets-index',
        offset,
        offset + count - 1,
      ],
      [
        'zcard',
        'masochist:snippets-index',
      ]
    ]).execAsync();

    // Results is not an array, so we can't destructure it (although we can make
    // it into an array for the benefit of our callers).
    return [results[0], results[1]];
  }

  constructor(values) {
    this.id = values.id;
    this.title = values.title;
    this.body = values.body;
    this.format = values.format;
    this.createdAt = values.createdAt;
    this.updatedAt = values.updatedAt;
    this.tags = values.tags;
  }
}

