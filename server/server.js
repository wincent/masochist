var Promise = require('bluebird');
var express = require('express');
var http = require('http');

var app = express();

function wikify(objects) {
  return new Promise(
    function(resolve, reject) {
      var request = http.request(
        {
          hostname: 'localhost',
          port: 8080,
          path: '/wikitext',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Wikitext-Corpus-Digest': 'foo',
          },
        },
        function(response) {
          var chunks = [];
          response.setEncoding('utf8');
          response.on('data', function(chunk) {
            chunks.push(chunk);
          });
          response.on('end', function() {
            resolve(chunks.join());
          })
        }
      );
      request.on('error', function(error) {
        reject(error);
      });
      request.write(JSON.stringify(objects));
      request.end();
    });
}

app.get('/', function(request, response) {
  wikify([{wikitext: '= What ='}])
    .then(function(result) {
      response.send(JSON.stringify(result));
    });
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
