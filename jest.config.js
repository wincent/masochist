const {defaults} = require('jest-config');

module.exports = {
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
  transform: {
    '\\.[jt]sx?$': ['ts-jest', {
      diagnostics: {
        warnOnly: true,
      },
    }],
  },
  fakeTimers: {
    enableGlobally: true,
  },
};
