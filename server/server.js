var express = require('express');
var http = require('http');

var app = express();

app.get('/', function(request, response) {
  var wikitext = http.request(
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
    function(r) {
      r.setEncoding('utf8');
      r.on('data', function(chunk) {
        console.log('BODY: ' + chunk);
        response.send(chunk);
      });
      r.on('end', function() {
        console.log('No more data in response.')
      })
    }
  );
  wikitext.write(JSON.stringify([
    {wikitext: '= What ='},
  ]));
  wikitext.end();

});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
