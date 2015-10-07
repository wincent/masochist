'use strict'; // eslint-disable-line

// BUG: I shouldn't have to do this.
import 'babel-runtime/regenerator/runtime';

import getArticleLoader from './getArticleLoader';
import getSnippetLoader from './getSnippetLoader';
import schema from './schema';
import Promise from 'bluebird';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import path from 'path';

const APP_PORT = 3000;

const app = express();

// curl /
app.use(
  '/',
  express.static(path.join(__dirname, '..', '..', 'public', 'index.html'))
);

// curl 'localhost:3000/graphql?query=query+Query\{hello\}'
app.use('/graphql', (request, response, next) => {
  const options = {
    rootValue: {
      loaders: {
        articleLoader: getArticleLoader(),
        // postLoader: new DataLoader(ids => []),
        snippetLoader: getSnippetLoader(),
      },
    },
    graphiql: __DEV__,
    schema,
  };

  return graphqlHTTP(request => options)(request, response, next);
});

// nginx normally handles this, but as a fallback for development:
app.use(express.static(path.join(__dirname, '..', '..', 'public')));

const server = app.listen(APP_PORT, () => {
  console.log('Listening at http://localhost:%s', APP_PORT);
});
