var express = require('express');
var router = express.Router();
var request = require('request');

var options = {
  uri: 'https://hooks.slack.com/services/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',
  method: 'POST',
  json: {	"text":"<@U8KBVL7ND> ЁПТА",
    "attachments": [
        {
            "fallback": "Required plain-text summary of the attachment.",
            "color": "#00ff00",
            "image_url": "https://lh3.googleusercontent.com/79GExvi6WvkQacZ0SNNCNzsvpMpcXpCD_rLD7r72bkvNu2GEKFFg9CZdp4UTaU09F43xrdhlIf96dddDiKnlNJ1NlXKgFJrTPHG2z9QcipsGf1xvIVl6k-bOCQlOvnkERANs9clwYsMDas1h-RA43xEcjHiTc8JiWnjD6YeDS_J52Lw0rh4nosmqKRMzOyY9EMn7GmOX6GP3nHY06uqsuIeN267PBqvyrGFwYyc8aa-ebEsy7vrQ3XAOKJDAGLqjMaj-qzdKoeMYdB0NG4Y57Zs89uxQrGfumGybEKolacaCpZyZS1M7rdOUtwaYNAaTuddtumVk4Joysz7XFEQbBI0O8SKbRfK1Kc-XwT32YW6MdmPHRD0VlaQTTunfoTZmpXYM8huEiQxoZfAX_kIBx8TO8nycvKpyYt4DQQNQS5nJW_IgtHkeXN5mcpF-4h-vNsISaLK-LkUBfs90n6xj_vUef87UtgTYL8tDYAXxB5CmlYR56rLLUfVEg8lwGmlf-hqdzSBVegQHecvB9OIZCJt8zvkphY4OVz0HcRLeKRjFVSxMTdzzGgZ2Q8vVlGCdCVARJPBw69hWo7EziZMLC0jUlvw1rdp1DzcTRiMK0WC1UWDyGfi4QoT5CudoFOeUsPAleljzkir8XG81wVLklQc8Xpv2wgzjBA=s580-no"
        }
    ]}
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

//   json: {"text":"ВСРАЛОСЬ"}