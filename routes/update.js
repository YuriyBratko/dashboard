var express = require('express');
var router = express.Router();

const updateJsonFile = require('update-json-file')
const filePath = './brands.json'


/* POST data updates */
router.post('/', function(req, res, next) {


//  var versionToInsert = JSON.stringify(req.body.OTC.BOProdVersion, null, 2)
//  console.log('Updated version: ' + versionToInsert)
//  updateJsonFile(filePath, (data) => {
//  data.OTC.BOProdVersion = versionToInsert
//  return data
//})

//Extract release definition id to match brand
//  var releaseDefinitionId = JSON.stringify(req.body.resource.environment.releaseDefinition.id, null, 2)
  var releaseDefinitionId = JSON.stringify(req.body.resource.environment.releaseDefinition.id)
  console.log('Release Definition Id: ' + releaseDefinitionId)

//Extract version that has been deployed
  var versionNumber = JSON.stringify(req.body.resource.deployment.release.artifacts[0].definitionReference.version.name)
  console.log('Release Version Number: ' + versionNumber)

//Update file with new version
  updateJsonFile(filePath, (data) => {
  data.OTC.BOProdVersion = versionNumber
  return data
})
  
  
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

//.definitionReference.version.name