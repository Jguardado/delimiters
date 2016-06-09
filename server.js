var express = require('express');
var path = require('path');
var publicPath = path.resolve(__dirname, 'public');
var request = require('request');

var port = 3000;

var app = express();

//serving our index.html
app.use(express.static(publicPath));

console.log('what the heck');

app.get('/property:propertyName', function (req, ourResponse, next) {
  // set options
  console.log('FROM THE SERVER:', req.params);

  // once I figure out the correct API call then I can have the search
  // do the sorting for me
  var options = {
    url: 'https://api.github.com/search/code?q=' + req.params.propertyName + '+in:file+repo:unicode-cldr/cldr-misc-full',
    headers: {
      'User-Agent': 'jguardado',
    },
  };

  // Send a get request to github, notice that the response that we send in
  // the callback is the response from the outer-function passed in through closure.
  request(options, function (err, responseFromGithub, body) {
    console.log(JSON.parse(body));
    ourResponse.status(200).send(JSON.parse(body));
  });
});

app.get('/country:country', function (req, ourResponse, next) {
  // set options
  console.log('FROM THE SERVER:', req.params);

  var options = {
    url: 'https://api.github.com/repositories/32408393/contents/main/' + req.params.country + '/delimiters.json?ref=4f118b5a4ed21e7d79f26db591204ab865c28b57',
    headers: {
      'User-Agent': 'jguardado',
    },
  };

  // Send a get request to github, notice that the response that we send in
  // the callback is the response from the outer-function passed in through closure.
  request(options, function (err, responseFromGithub, body) {
    if (err) {
      console.error(err);
    }

    var newBody = JSON.parse(body);
    var buffered = new Buffer(newBody.content, 'base64');
    var string = buffered.toString();
    console.log(string);
    ourResponse.status(200).send(string);
  });
});

app.listen(port, function () {
  console.log('Server running on port ' + port);
});
