'use strict';

import schema from './schema';
import Promise from 'bluebird';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import path from 'path';

const app = express();

// curl /
app.get('/', (request, response) => {
  response.send('root');
});

// curl 'localhost:3000/graphql?query=query+Query\{hello\}'
app.use('/graphql', graphqlHTTP(request => ({schema})));

// nginx normally handles this, but as a fallback for development:
app.use(express.static(path.join(__dirname, '..', 'public')));

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
