/**
 * @flow
 */

import {getClient} from '../../common/redis';

export default class Article {
  static async readIndex(count: number, offset: number): Array {
    const client = getClient();
    const results = await client.multi([
      [
        'zrevrange',
        'masochist:wiki-index',
        offset,
        offset + count - 1,
      ],
      [
        'zcard',
        'masochist:wiki-index',
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
