const {defaults} = require('jest-config');

module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: {
        warnOnly: true,
      },
    },
  },
  moduleNameMapper: {
    '@masochist/(.+)$': '<rootDir>packages/$1/src',
  },
  preset: 'ts-jest',
  prettierPath: require.resolve('prettier-v2-for-jest-inline-snapshots'),
  testMatch: ['**/__tests__/**/*-test.[jt]s?(x)'],
  testPathIgnorePatterns: [
    ...defaults.testPathIgnorePatterns,
    '<rootDir>/packages/[^/]+/lib/',
  ],
  fakeTimers: {
    enableGlobally: true,
  },
};
