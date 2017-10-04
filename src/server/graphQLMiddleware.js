/**
 * @flow
 */

import queryCache from './queryCache';
import runQuery from './runQuery';

export default (async function graphQLMiddleware(request, response, next) {
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
    response.status(500).send('Internal Server Error');
    return;
  }

  response.json(result);
});
