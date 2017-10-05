/**
 * @noflow
 */

import {REDIS_SNIPPETS_INDEX_KEY} from '../constants';
import readIndex from '../readIndex';

import type {IndexResult} from '../readIndex';

export default class Snippet {
  id: string;
  title: string;
  body: string;
  description: ?string;
  format: string;
  createdAt: ?Date;
  updatedAt: ?Date;
  tags: Array<string>;

  static async readIndex(count: number, offset: number): Promise<IndexResult> {
    const results = await readIndex(REDIS_SNIPPETS_INDEX_KEY, count, offset);
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
    this.tags = values.tags;
  }
}
