/**
 * @flow
 */

'use strict';

import Memcached from 'memcached';

const memcached = new Memcached('localhost:11211');

// TODO: degrade more gracefully if memcached goes down (currently we just wait
// forever(?))
const Cache = {
  get(key: string, missCallback: Promise<value, Error>): Promise<value, Error> {
    return new Promise((resolve, reject) => {
      memcached.get(key, (error, data) => {
        if (error) {
          reject(error);
        } else if (data) {
          resolve(data);
        } else {
          missCallback(key).then(
            result => {
              memcached.set(key, result, 0, error => {
                if (error) {
                  reject(error);
                } else {
                  resolve(result);
                }
              });
            },
            reject,
          );
        }
      });
    });
  },
};

export default Cache;
