var express = require('express');
var router = express.Router();

const updateJsonFile = require('update-json-file')
const filePath = './brands.json'


/* POST data updates */
router.post('/', function(req, res, next) {
  var versionToInsert = JSON.stringify(req.body.OTC.BOProdVersion, null, 2)
  console.log('Updated version: ' + versionToInsert)
  updateJsonFile(filePath, (data) => {
  data.OTC.BOProdVersion = versionToInsert
  return data
})

// does not work for updating data //  res.redirect('/')  
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))

});


module.exports = router;

//for workig with TFS hook
//need to see real hook example
/*
  var brandName = JSON.stringify(req.body.blah.blah.environmentName, null, 2)
  var versionNumber = JSON.stringify(req.body.blah.blah.environmentName.versionNumber, null, 2)
  updateJsonFile(filePath, (data) => {
  data.brandName.versionNumber = versionNumber //?????
  return data
})
*/