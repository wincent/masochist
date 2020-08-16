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
    testPathIgnorePatterns: [
        ...defaults.testPathIgnorePatterns,
        '<rootDir>/packages/[^/]+/lib/',
    ],
    timers: 'fake',
};
