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
 * @flow
 */

'use strict';

const {
  CodegenRunner,
  ConsoleReporter,
  DotGraphQLParser,
} = require('graphql-compiler');

const RelaySourceModuleParser = require('relay-compiler/lib/RelaySourceModuleParser');
const RelayFileWriter = require('relay-compiler').FileWriter;
const RelayIRTransforms = require('relay-compiler').IRTransforms;
const RelayLanguagePluginJavaScript = require('relay-compiler/lib/RelayLanguagePluginJavaScript');

const fs = require('fs');
const path = require('path');

const {
  buildASTSchema,
  buildClientSchema,
  parse,
  printSchema,
} = require('graphql');

const {
  commonTransforms,
  codegenTransforms,
  fragmentTransforms,
  printTransforms,
  queryTransforms,
  schemaExtensions,
} = RelayIRTransforms;

import type {GetWriterOptions} from 'graphql-compiler';
import type {GraphQLSchema} from 'graphql';
import type {
  PluginInitializer,
  PluginInterface,
} from 'relay-compiler/lib/RelayLanguagePluginInterface';

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

function getFilepathsFromGlob(
  baseDir,
  options: {
    extensions: Array<string>,
    include: Array<string>,
    exclude: Array<string>,
  },
): Array<string> {
  const {extensions, include, exclude} = options;
  const patterns = include.map(inc => `${inc}/*.+(${extensions.join('|')})`);

  const glob = require('fast-glob');
  return glob.sync(patterns, {
    cwd: baseDir,
    ignore: exclude,
  });
}

type LanguagePlugin = PluginInitializer | {default: PluginInitializer};

async function run() {
  const schemaPath = path.resolve(process.cwd(), 'schema.graphql');
  if (!fs.existsSync(schemaPath)) {
    throw new Error(`schema.graphql does not exist: ${schemaPath}.`);
  }
  const srcDir = path.resolve(process.cwd(), 'src');
  if (!fs.existsSync(srcDir)) {
    throw new Error(`source path does not exist: ${srcDir}.`);
  }

  const reporter = new ConsoleReporter({
    verbose: true,
    quiet: false,
  });

  const exclude = [
    '**/node_modules/**',
    '**/__mocks__/**',
    '**/__tests__/**',
    '**/__generated__/**',
  ];
  const include = ['**'];

  const schema = getSchema(schemaPath);

  const languagePlugin = RelayLanguagePluginJavaScript();

  const inputExtensions = languagePlugin.inputExtensions;
  const outputExtension = languagePlugin.outputExtension;

  const sourceParserName = inputExtensions.join('/');
  const sourceWriterName = outputExtension;

  const sourceModuleParser = RelaySourceModuleParser(
    languagePlugin.findGraphQLTags,
  );

  const artifactDirectory = null;

  const generatedDirectoryName = artifactDirectory || '__generated__';

  const sourceSearchOptions = {
    extensions: inputExtensions,
    include,
    exclude: ['**/*.graphql.*', ...exclude], // Do not include artifacts
  };
  const graphqlSearchOptions = {
    extensions: ['graphql'],
    include,
    exclude: [path.relative(srcDir, schemaPath)].concat(exclude),
  };

  const parserConfigs = {
    [sourceParserName]: {
      baseDir: srcDir,
      getFileFilter: sourceModuleParser.getFileFilter,
      getParser: sourceModuleParser.getParser,
      getSchema: () => schema,
      watchmanExpression: null,
      filepaths: getFilepathsFromGlob(srcDir, sourceSearchOptions),
    },
    graphql: {
      baseDir: srcDir,
      getParser: DotGraphQLParser.getParser,
      getSchema: () => schema,
      watchmanExpression: null,
      filepaths: getFilepathsFromGlob(srcDir, graphqlSearchOptions),
    },
  };
  const writerConfigs = {
    [sourceWriterName]: {
      getWriter: getRelayFileWriter(
        srcDir,
        languagePlugin,
        false,
        artifactDirectory,
        persistQuery,
      ),
      isGeneratedFile: (filePath: string) =>
        filePath.endsWith('.graphql.' + outputExtension) &&
        filePath.includes(generatedDirectoryName),
      parser: sourceParserName,
      baseParsers: ['graphql'],
    },
  };
  const codegenRunner = new CodegenRunner({
    reporter,
    parserConfigs,
    writerConfigs,
    onlyValidate: false,
    // TODO: allow passing in a flag or detect?
    sourceControl: null,
  });
  const result = await codegenRunner.compileAll();

  if (result === 'ERROR') {
    process.exit(100);
  }
}

function getRelayFileWriter(
  baseDir: string,
  languagePlugin: PluginInterface,
  noFutureProofEnums: boolean,
  outputDir?: ?string,
  persistQuery: (text: string) => Promise<string>,
) {
  return ({
    onlyValidate,
    schema,
    documents,
    baseDocuments,
    sourceControl,
    reporter,
  }: GetWriterOptions) =>
    new RelayFileWriter({
      config: {
        baseDir,
        compilerTransforms: {
          commonTransforms,
          codegenTransforms,
          fragmentTransforms,
          printTransforms,
          queryTransforms,
        },
        customScalars: {},
        formatModule: languagePlugin.formatModule,
        inputFieldWhiteListForFlow: [],
        schemaExtensions,
        useHaste: false,
        noFutureProofEnums,
        extension: languagePlugin.outputExtension,
        typeGenerator: languagePlugin.typeGenerator,
        outputDir,
        persistQuery,
      },
      onlyValidate,
      schema,
      baseDocuments,
      documents,
      reporter,
      sourceControl,
    });
}

function getSchema(schemaPath: string): GraphQLSchema {
  try {
    let source = fs.readFileSync(schemaPath, 'utf8');
    if (path.extname(schemaPath) === '.json') {
      source = printSchema(buildClientSchema(JSON.parse(source).data));
    }
    source = `
  directive @include(if: Boolean) on FRAGMENT_SPREAD | FIELD
  directive @skip(if: Boolean) on FRAGMENT_SPREAD | FIELD

  ${source}
  `;
    return buildASTSchema(parse(source), {assumeValid: true});
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
