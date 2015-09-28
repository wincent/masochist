'use strict';

import Promise from 'bluebird';
import express from 'express';

// Non-Relay demo.
import {graphql} from 'graphql';
import schema from './schema';

const app = express();

app.get('/', (request, response) => {
  const query = '{ hello }';
  graphql(schema, query)
    .then(result => response.send(JSON.stringify(result)));
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
