/**
 * @flow
 */

import {readFileSync, existsSync} from 'fs';
import {join} from 'path';

type QueryMap = {
  [name: string]: any,
};

export default class QueryCache {
  _queries: QueryMap;

  constructor() {
    this._queries = {};
  }

  getQuery(name: string): any {
    if (!this._queries[name]) {
      if (name.match(/^\w+Query$/)) {
        const path = join(__dirname, '..', '__generated__', name + '.txt');
        if (existsSync(path)) {
          const text = readFileSync(path).toString();
          this._queries[name] = text;
        }
      }
    }
    return this._queries[name];
  }
}
