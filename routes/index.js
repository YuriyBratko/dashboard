var express = require('express');
var router = express.Router();
var fs = require('fs');


//var size = Object.keys(brands).length;
//console.log('size of my object is: ' + size);

// returns array of keys
//var brandList = Object.keys(brands);
// keys.length is ...
//console.log(brandList, brandList.length);

// iterating through values in our json
/*
brandList.forEach(function(brand) {
  var items = Object.keys(brands[brand]);
  items.forEach(function(item) {
    var value = brands[brand][item];
    console.log(brand+': '+item+' = '+value);
  });
});
*/


//var targetBrandName = "ABC";
//console.log('variable targetBrandName: ' + targetBrandName);
//if(brands.ABC) {
//  console.log('true', brands.ABC.WebsiteProdVersion);
// }




/* GET home page. */
router.get('/', function(req, res, next) {
  var data = fs.readFileSync('brands.json');
  var brands = JSON.parse(data);
  console.log(brands);
  res.render('index', { json: brands });
});

module.exports = router;
