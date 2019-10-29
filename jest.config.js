const {defaults} = require('jest-config');

module.exports = {
  moduleNameMapper: {
    '@masochist/(.+)$': '<rootDir>packages/$1/src',
  },
  preset: 'ts-jest',
  testPathIgnorePatterns: [
    ...defaults.testPathIgnorePatterns,
    '<rootDir>/packages/[^/]+/lib/',
  ],
  timers: 'fake',
};
