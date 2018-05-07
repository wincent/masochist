/**
 * @flow
 */

import queryCache from './queryCache';
import runQuery from './runQuery';

import type {$Response, $Request} from 'express';

export default (async function graphQLMiddleware(
  request: $Request,
  response: $Response,
) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    response.status(405).send('Method Not Allowed');
    return;
  }

  const {body} = request;
  let id = body && body.id;
  if (!id || !queryCache.getQuery(id)) {
    // We only accept persisted queries (to prevent abuse).
    response.status(400).send('Bad Request');
    return;
  }

  const result = await runQuery(id, body.variables);
  if (!result || result.data === null) {
    if (result && result.errors) {
      result.errors.forEach(error => console.log(error));
    }
    response.status(500).send('Internal Server Error');
    return;
  }

  response.json(result);
});
