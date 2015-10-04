#!/usr/bin/env node

'use strict';

import 'babel-core/polyfill';

import schema from '../schema';
import Promise from 'bluebird';
import fs from 'fs';
import {graphql} from 'graphql';
import {introspectionQuery, printSchema} from 'graphql/utilities';
import path from 'path';

const writeFile = Promise.promisify(fs.writeFile);

process.on('unhandledRejection', reason => {
  throw reason;
});

function prettify(stringifiable) {
  return JSON.stringify(stringifiable, null, 2);
}

(async () => {
  const result = await graphql(schema, introspectionQuery);
  if (result.errors) {
    console.error(
      'error: schema introspection failure: ',
      prettify(result.errors)
    );
  } else {
    await writeFile(
      path.join(__dirname, '../../schema.json'),
      prettify(result)
    );
  }

  // Emit human-readable type system shorthand of schema.
  await writeFile(
    path.join(__dirname, '../../schema.graphql'),
    printSchema(schema)
  );
})();
