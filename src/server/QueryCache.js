/**
 * @flow
 */

import {readFileSync, readdirSync} from 'fs';
import {join} from 'path';

type QueryMap = {
  [name: string]: any,
};

export default class QueryCache {
  _queries: QueryMap;

  constructor() {
    this._queries = this._cacheQueries();
  }

  _cacheQueries(): QueryMap {
    const path = join(__dirname, '..', '__generated__');
    const queries = {};
    readdirSync(path).map(file => {
      const match = file.match(/^(.+Query)\.txt/);
      if (match) {
        const name = match[1];
        const text = readFileSync(join(path, file)).toString();
        queries[name] = text;
      }
    });
    return queries;
  }

  getQuery(name: string): any {
    return this._queries[name];
  }
}
