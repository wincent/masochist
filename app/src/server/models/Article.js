/**
 * @flow
 */

import common from '../../../../shared/common';
import readIndex from '../readIndex';

const WIKI_INDEX = common.redisKeys.wikiIndex;

export default class Article {
  static async readIndex(count: number, offset: number): Array {
    const results = await readIndex(
      WIKI_INDEX,
      count,
      offset
    );
    return results;
  }

  constructor(values) {
    this.id = values.id;
    this.title = values.title;
    this.body = values.body;
    this.format = values.format;
    this.createdAt = values.createdAt;
    this.updatedAt = values.updatedAt;
    this.redirect = values.redirect;
    this.tags = values.tags;
  }
}
