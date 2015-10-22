#!/usr/bin/env node

'use strict';

import 'babel-core/polyfill';
import '../common/unhandledRejection';

import schema from '../server/schema';
import Promise from 'bluebird';
import fs from 'fs';
import {graphql} from 'graphql';
import {introspectionQuery, printSchema} from 'graphql/utilities';
import path from 'path';

const writeFile = Promise.promisify(fs.writeFile);

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
    process.exit(1);
  } else {
    await writeFile(
      path.join(__dirname, '../../schema.json'),
      prettify(result)
    );
    console.log('Wrote schema.json.');
  }

  // Emit human-readable type system shorthand of schema.
  await writeFile(
    path.join(__dirname, '../../schema.graphql'),
    printSchema(schema)
  );
  console.log('Wrote schema.graphql.');
  process.exit(0);
})();
