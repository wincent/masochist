/**
 * @flow
 */

import {readdirSync} from 'fs';
import {join} from 'path';

type QueryMap = {
  [name: string]: any,
};

export default class QueryCache {
  _queries: QueryMap;

  constructor(paths: Array<string>) {
    this._queries = this._cacheQueriesFromPaths(paths);
  }

  _cacheQueriesFromPaths(paths: Array<string>): QueryMap {
    return paths.reduce((queries, path) => {
      readdirSync(path).forEach(file => {
        const match = file.match(/^.+Query\.graphql\.js$/);
        if (match) {
          const {name, text} = require(join(path, file));
          queries[name] = text;
        }
      });
      return queries;
    }, {});
  }

  getQuery(name: string): any {
    return this._queries[name];
  }
}
