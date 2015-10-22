/**
 * @flow
 */

import Promise from 'bluebird';
import http from 'http';
import nodegit from 'nodegit';
import path from 'path';

type WikiRequest = {
  wikitext: string;
  autolink?: boolean;
  baseHeadingLevel?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  externalLinkClass?: string;
  externalLinkRel?: string;
  imgPrefix?: string;
  internalLinkPrefix?: string;
  lineEnding?: string;
  mailtoClass?: string;
  minimumFulltextTokenLength?: number;
  outputStyle?: 'html' | 'xml';
  spaceToUnderscore?: boolean;
};

let contentDigest = null;
(async () => {
  const repo = await nodegit.Repository.open(path.resolve(__dirname, '../../../.git'));
  contentDigest = (await repo.getReferenceCommit('content')).sha();
})();

export default function wikify(objects: Array<WikiRequest>) {
  return new Promise(
    (resolve, reject) => {
      // TODO: make this configurable, maybe
      const headers = {
        'Content-Type': 'application/json',
      };
      if (contentDigest) {
        headers['X-Wikitext-Corpus-Digest'] = contentDigest;
      }
      const request = http.request(
        {
          hostname: 'localhost',
          port: 8080,
          path: '/wikitext',
          method: 'POST',
          headers,
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
