/**
 * @flow
 */

import {getClient} from '../common/redis';

export default class Tag {
  static async readIndex(count: number, offset: number): Array {
    const client = getClient();
    const results = await client.multi([
      [
        'zrevrange',
        'masochist:tags-index',
        offset,
        offset + count - 1,
        'WITHSCORES',
      ],
      [
        'zcard',
        'masochist:tags-index',
      ]
    ]).execAsync();

    // Results is not an array, so we can't destructure it (although we can make
    // it into an array for the benefit of our callers).
    const tagsAndCounts = results[0];
    const cardinality = results[1];

    // Because we asked for the items WITHSCORES, we doubled the number of rows
    // we got back.
    const tags = [];
    for (let i = 0; i < tagsAndCounts.length; i = i + 2) {
      const name = tagsAndCounts[i];
      const count = tagsAndCounts[i + 1];
      const id = name; // TODO
      tags.push(new Tag({id, name, count}));
    }

    return [tags, cardinality];
  }

  constructor(values) {
    this.id = values.id;
    this.name = values.name;
    this.count = values.count;
    this.taggables = values.taggables;
  }
}

