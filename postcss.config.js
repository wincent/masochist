const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    autoprefixer,
    cssnano({
      // NOTE: with cssnano >= 4, this will need to become:
      // preset: ['default', {discardComments: {removeAll: true}}]
      discardComments: {
        removeAll: true,
      },
    }),
  ],
};
