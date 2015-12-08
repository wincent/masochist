/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE-fbjs file in this file's directory in the source tree. An additional
 * grant of patent rights can be found in the PATENTS-fbjs file in the same
 * directory.
 */

var t = require('babel-types');

module.exports = function() {
  var DEV_EXPRESSION = t.binaryExpression(
    '!==',
    t.memberExpression(
      t.memberExpression(
        t.identifier('process'),
        t.identifier('env'),
        false
      ),
      t.identifier('NODE_ENV'),
      false
    ),
    t.stringLiteral('production')
  );

  return {
    visitor: {
      Identifier: function(path) {
        var node = path.node;

        // Do nothing when testing.
        if (process.env.NODE_ENV === 'test') {
          return;
        }

        // Replace __DEV__ with process.env.NODE_ENV !== 'production'.
        if (t.isIdentifier({name: '__DEV__'})) {
          path.replaceWith(DEV_EXPRESSION);
        }
      },
    },
  };
};
