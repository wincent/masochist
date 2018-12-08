module.exports = function(api) {
  api.cache(false);

  return {
    plugins: [
      [
        'minify-replace',
        {
          replacements: [
            {
              identifierName: '__DEV__',
              replacement: {
                type: 'booleanLiteral',
                value: true,
              },
            },
          ],
        },
      ],
      [
        './scripts/babel/invariant',
        {
          strip: false,
        },
      ],
      'relay',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator',
    ],
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: '10.13.0',
          },
        },
      ],
      '@babel/preset-flow',
      '@babel/preset-react',
    ],
  };
};
