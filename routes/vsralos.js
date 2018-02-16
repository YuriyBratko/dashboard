var express = require('express');
var router = express.Router();
var request = require('request');

var options = {
  uri: 'https://hooks.slack.com/services/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',
  method: 'POST',
  json: {	"text":"ВСРАЛОСЬ",
    "attachments": [
        {
            "fallback": "Required plain-text summary of the attachment.",
            "color": "#ff0000",
            "image_url": "https://lh3.googleusercontent.com/PwHTsZZUMRejXN8YEgdDEWDFHTLr1RDJTu05QFEcrw92uObvo0My3dnDwCyPWXWMvOrSafQIrPuhvlND7QEMP48yJT0icuIQj3-QFqWmETqMfmdpCmNNz81yuR3ZBj95EH26k7BgS9U0ialmJKH2ChTZOwLMD7h35TzPLe4CURO0QXQ1JE2ybQ7CbjlHEIv7xl6RrmU523Gw_x0iSf4xbjH02yu1KT9vj1tmFQW7VoSP17bbB8WPcn93jqpLu-xviHxoB6gJOCWmU57HxGoFxMdPwnYR6CB4eWFsbwY9z8q4wnh5FBnPtrFBtMt82ib3wf2QXitujwsNdw_NxL00I36tFhkUPlYEGZRXdDA3QzFRB-z0pkqBk2HsD4r7gKkCXI9lrTbrreEpAS62hftbItEGNNKePcFNb2X_Eh6DmUqhvPOLidk_fv-YHlqScf_gepQFMPIxAyOY142zvIyawMmzCdmjDruzDX4wfNvFOckHhGHKQCHGFl_xA-M3SVHhu7XWqcgt-q_S9fSMdrbZRk_4xBFoM_gStqA07u-N1KnwKlBM8VRtH91PXErQtbeWxgXKB_i48E8KR5XSfcz1soG6MwZDX3TfzWrj6cyBS9ZOgsLJIfITuQjwJ_gFq32lfmu6ABCsxYaCLBk7ZZPmRXOuDEDrmskwFw=w289-h363-no"
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