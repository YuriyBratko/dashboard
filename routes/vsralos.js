var express = require('express');
var router = express.Router();
var request = require('request');

var options = {
  uri: 'https://hooks.slack.com/services/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',
  method: 'POST',
  json: {"text":"ВСРАЛОСЬ"}
};

router.post('/', function(req, res, next) {

request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // Print out the response body
        console.log(body)
    }
})
  
  
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))

});

module.exports = router;

//"\"text\":\"ВСРАЛОСЬ\""
//  body: "\"text\":\"ВСРАЛОСЬ\""