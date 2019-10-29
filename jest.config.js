const {defaults} = require('jest-config');

module.exports = {
  "moduleNameMapper": {
    "@masochist/(.+)$": "<rootDir>packages/$1/src"
  },
  "testPathIgnorePatterns": [
    ...defaults.testPathIgnorePatterns,
    '<rootDir>/packages/[^/]+/lib/'
  ],
  "timers": 'fake',
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
};
