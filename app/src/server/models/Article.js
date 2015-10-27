/**
 * @flow
 */

import readIndex from '../readIndex';

export default class Article {
  static async readIndex(count: number, offset: number): Array {
    const results = await readIndex(
      'masochist:wiki-index',
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
