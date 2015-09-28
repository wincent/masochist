require('babel/polyfill');

var fs = require('fs');
var path = require('path');

process.on('unhandledRejection', function(reason, promise) {
  throw reason;
});

global.expect = require('expect');

require('babel/register')(
  JSON.parse(
    fs.readFileSync(
      path.join(__dirname, '..', '.babelrc')
    )
  )
);
