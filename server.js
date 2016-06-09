var express = require('express');
var path = require('path');
var publicPath = path.resolve(__dirname, 'public');
var request = require('request');

var port = 3000;

var app = express();

app.use(express.static(publicPath));

app.get('/property:propertyName', function (req, ourResponse, next) {
  var options = {
    url: 'https://api.github.com/search/code?q=' + req.params.propertyName + '+in:file+repo:unicode-cldr/cldr-misc-full',
    headers: {
      'User-Agent': 'jguardado',
    },
  };

  request(options, function (err, responseFromGithub, body) {
    ourResponse.status(200).send(JSON.parse(body));
  });
});

app.get('/country:country', function (req, ourResponse, next) {
  var options = {
    url: 'https://api.github.com/repositories/32408393/contents/main/' + req.params.country + '/delimiters.json?ref=4f118b5a4ed21e7d79f26db591204ab865c28b57',
    headers: {
      'User-Agent': 'jguardado',
    },
  };

  request(options, function (err, responseFromGithub, body) {
    if (err) {
      console.error(err);
    }

    var newBody = JSON.parse(body);
    var buffered = new Buffer(newBody.content, 'base64');
    var string = buffered.toString();
    ourResponse.status(200).send(string);
  });
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});
