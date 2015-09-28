'use strict';

import Promise from 'bluebird';
import http from 'http';

// TODO: flow types
export default function wikify(objects) {
  return new Promise(
    (resolve, reject) => {
      // TODO: make this configurable, maybe
      const request = http.request(
        {
          hostname: 'localhost',
          port: 8080,
          path: '/wikitext',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // TODO: use actual digest here
            'X-Wikitext-Corpus-Digest': 'foo',
          },
        },
        response => {
          const chunks = [];
          response.setEncoding('utf8');
          response.on('data', chunk => chunks.push(chunk));
          response.on('end', () => resolve(chunks.join()));
        }
      );
      request.on('error', error => reject(error));
      request.write(JSON.stringify(objects));
      request.end();
    });
}
