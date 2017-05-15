/**
 * @flow
 */

import common from '../../../../shared/common';
import readIndex from '../readIndex';

import type {IndexResult} from '../readIndex';

const WIKI_INDEX = common.redisKeys.wikiIndex;

export default class Article {
  id: string;
  title: string;
  body: ?string;
  description: ?string;
  format: string;
  createdAt: ?Date;
  updatedAt: ?Date;
  redirect: ?string;
  tags: Array<string>;

  static async readIndex(count: number, offset: number): Promise<IndexResult> {
    const results = await readIndex(WIKI_INDEX, count, offset);
    return results;
  }

  constructor(values: Object) {
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
