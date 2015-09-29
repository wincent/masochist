'use strict';

import Promise from 'bluebird';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import path from 'path';

// Non-Relay demo.
import schema from './schema';

const app = express();

// curl /
app.get('/', (request, response) => {
  response.send('root');
});

// curl 'localhost:3000/graphql?query=query+Query\{hello\}'
app.use('/graphql', graphqlHTTP(request => ({schema})));

app.use(express.static(path.join(__dirname, '..', 'public')));

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
