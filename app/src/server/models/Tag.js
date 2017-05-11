/**
 * @flow
 */

import redis from '../../common/redis';

import type {IndexResult} from '../readIndex';
import type {Taggable} from '../schema/fields/connections/taggableConnection';

export default class Tag {
  id: string;
  name: string;
  count: number;
  taggables: Array<Taggable>;

  static async readIndex(
    count: number,
    offset: number
  ): Promise<[Array<Tag>, number]> {
    const key = 'tags-index';
    const results = await redis.multi([
      [
        'ZREVRANGE',
        key,
        offset,
        offset + count - 1,
        'WITHSCORES',
      ],
      [
        'ZCARD',
        key,
      ]
    ]);

    // Results is not an array, so we can't destructure it (although we can make
    // it into an array for the benefit of our callers).
    const tagsAndCounts: Array<mixed> = (results: any)[0];
    const cardinality: number = (results: any)[1];

    // Because we asked for the items WITHSCORES, we doubled the number of rows
    // we got back.
    const tags = [];
    for (let i = 0; i < tagsAndCounts.length; i = i + 2) {
      const name = tagsAndCounts[i];
      const count = tagsAndCounts[i + 1];
      const id = name;
      tags.push(new Tag({id, name, count}));
    }

    return [tags, cardinality];
  }

  constructor(values: Object) {
    this.id = values.id;
    this.name = values.name;
    this.count = values.count;
    this.taggables = values.taggables;
  }
}
