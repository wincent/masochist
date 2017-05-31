#!/usr/bin/env node

/**
 * Fork of the Relay compiler that implements query persistence. Eventually will
 * make a PR to make existing Relay compiler support this workflow without
 * forking.
 */

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 * @providesModule RelayCompilerBin
 * @format
 */

'use strict';

require('babel-polyfill');

const {
  Runner,
  FileIRParser,
  FileWriter,
  IRTransforms,
} = require('relay-compiler');
const formatGeneratedModule = require('relay-compiler/lib/formatGeneratedModule');

const fs = require('fs');
const path = require('path');

const {
  buildASTSchema,
  buildClientSchema,
  parse,
  printSchema,
} = require('graphql');

const {
  codegenTransforms,
  fragmentTransforms,
  printTransforms,
  queryTransforms,
  schemaExtensions,
} = IRTransforms;

import type {GraphQLSchema} from 'graphql';

function buildWatchExpression() {
  return [
    'allof',
    ['type', 'f'],
    ['anyof', ['suffix', 'js']],
    ['not', ['match', '**/node_modules/**', 'wholename']],
    ['not', ['match', '**/__mocks__/**', 'wholename']],
    ['not', ['match', '**/__tests__/**', 'wholename']],
    ['not', ['match', '**/__generated__/**', 'wholename']],
  ];
}

/* eslint-disable no-console-disallow */

function persistQuery(text: string): Promise<string> {
  const match = text.match(/^query\s+(\w+Query)\(/);
  if (!match) {
    console.error('Failed to find query name in text:\n' + text);
    throw new Error('Failed to find query name in text');
  }
  const name = match[1];
  const queryDir = path.resolve(process.cwd(), 'src/__generated__');
  if (!fs.existsSync(queryDir)) {
    fs.mkdirSync(queryDir);
  }
  fs.writeFileSync(path.join(queryDir, name + '.txt'), text);
  return Promise.resolve(name);
}

async function run() {
  const schemaPath = path.resolve(process.cwd(), 'schema.graphql');
  if (!fs.existsSync(schemaPath)) {
    throw new Error(`--schema path does not exist: ${schemaPath}.`);
  }
  const srcDir = path.resolve(process.cwd(), 'src');
  if (!fs.existsSync(srcDir)) {
    throw new Error(`--source path does not exist: ${srcDir}.`);
  }
  const parserConfigs = {
    default: {
      baseDir: srcDir,
      getFileFilter: FileIRParser.getFileFilter,
      getParser: FileIRParser.getParser,
      getSchema: () => getSchema(schemaPath),
      watchmanExpression: buildWatchExpression(),
    },
  };
  const writerConfigs = {
    default: {
      getWriter: getRelayFileWriter(srcDir),
      parser: 'default',
    },
  };
  const codegenRunner = new Runner({
    parserConfigs,
    writerConfigs,
    onlyValidate: false,
  });
  await codegenRunner.compileAll();
}

function getRelayFileWriter(baseDir: string) {
  return (onlyValidate, schema, documents, baseDocuments) =>
    new FileWriter({
      config: {
        formatModule: formatGeneratedModule,
        compilerTransforms: {
          codegenTransforms,
          fragmentTransforms,
          printTransforms,
          queryTransforms,
        },
        baseDir,
        persistQuery,
        schemaExtensions,
      },
      onlyValidate,
      schema,
      baseDocuments,
      documents,
    });
}

function getSchema(schemaPath: string): GraphQLSchema {
  try {
    let source = fs.readFileSync(schemaPath, 'utf8');
    if (path.extname(schemaPath) === '.json') {
      source = printSchema(buildClientSchema(JSON.parse(source).data));
    }
    source = `
  directive @include(if: Boolean) on FRAGMENT | FIELD
  directive @skip(if: Boolean) on FRAGMENT | FIELD

  ${source}
  `;
    return buildASTSchema(parse(source));
  } catch (error) {
    throw new Error(
      `
Error loading schema. Expected the schema to be a .graphql or a .json
file, describing your GraphQL server's API. Error detail:

${error.stack}
    `.trim(),
    );
  }
}

run().catch(error => {
  console.error(String(error.stack || error));
  process.exit(1);
});
