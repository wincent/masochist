import {REDIS_WIKI_INDEX_KEY} from '../constants';
import readIndex from '../readIndex';

export default class Article {
  static async readIndex(count, offset) {
    const results = await readIndex(REDIS_WIKI_INDEX_KEY, count, offset);
    return results;
  }

  constructor(values) {
    this.id = values.id;
    this.title = values.title;
    this.body = values.body;
    this.description = values.description;
    this.format = values.format;
    this.createdAt = values.createdAt;
    this.updatedAt = values.updatedAt;
    this.redirect = values.redirect;
    this.tags = values.tags;
  }
}
