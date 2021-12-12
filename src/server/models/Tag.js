import {array, number} from '../../common/checks';
import {REDIS_TAGS_INDEX_KEY} from '../constants';
import redis from '../redis';

export default class Tag {
  static async readIndex(count, offset) {
    const key = REDIS_TAGS_INDEX_KEY;
    const results = await redis.multi([
      ['ZRANGE', key, offset, offset + count - 1, 'REV', 'WITHSCORES'],
      ['ZCARD', key],
    ]);

    const [tagsAndCounts, cardinality] = results;

    const tags = tagsAndCounts.map(([name, count]) => {
      const id = name;
      return new Tag({id, name, count});
    });

    return [tags, cardinality];
  }

  constructor(values) {
    this.id = values.id;
    this.name = values.name;
    this.count = values.count;
    this.taggables = values.taggables;
  }
}
