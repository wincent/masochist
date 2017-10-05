#!/usr/bin/env node

/**
 * Fork of the Relay compiler that implements crude form of query persistence.
 */

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 * @providesModule RelayCompilerBin
 * @format
 */

'use strict';

const CodegenRunner = require('relay-compiler/lib/CodegenRunner');
const ConsoleReporter = require('relay-compiler/lib/GraphQLConsoleReporter');
const RelayFileWriter = require('relay-compiler/lib/RelayFileWriter');
const RelayIRTransforms = require('relay-compiler/lib/RelayIRTransforms');
const RelayJSModuleParser = require('relay-compiler/lib/RelayJSModuleParser');
const WatchmanClient = require('relay-compiler/lib/GraphQLWatchmanClient');
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
} = RelayIRTransforms;

import type {GraphQLSchema} from 'graphql';

function persistQuery(text: string): Promise<string> {
  const match = text.match(/^\s*query\s+(\w+Query)\b/);
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

async function run() {
  const schemaPath = path.resolve(process.cwd(), 'schema.graphql');
  if (!fs.existsSync(schemaPath)) {
    throw new Error(`schema.graphql does not exist: ${schemaPath}.`);
  }
  const srcDir = path.resolve(process.cwd(), 'src');
  if (!fs.existsSync(srcDir)) {
    throw new Error(`source path does not exist: ${srcDir}.`);
  }
  const reporter = new ConsoleReporter({verbose: true});

  const parserConfigs = {
    default: {
      baseDir: srcDir,
      getFileFilter: RelayJSModuleParser.getFileFilter,
      getParser: RelayJSModuleParser.getParser,
      getSchema: () => getSchema(schemaPath),
      watchmanExpression: buildWatchExpression(),
      filepaths: null,
    },
  };
  const writerConfigs = {
    default: {
      getWriter: getRelayFileWriter(srcDir, persistQuery),
      isGeneratedFile: (filePath: string) =>
        filePath.endsWith('.js') && filePath.includes('__generated__'),
      parser: 'default',
    },
  };
  const codegenRunner = new CodegenRunner({
    reporter,
    parserConfigs,
    writerConfigs,
    onlyValidate: false,
  });
  const result = await codegenRunner.compileAll();
  if (result === 'ERROR') {
    process.exit(100);
  }
}

function getRelayFileWriter(baseDir: string, persistQuery: fn) {
  return (onlyValidate, schema, documents, baseDocuments) =>
    new RelayFileWriter({
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
