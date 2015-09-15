var express = require('express');
var router = express.Router();
var ls = require('list-directory-contents');
var Walker = require('walker');

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log('here');

  var dirs = [];
  Walker('./public/')
  .on('dir', function(dir, stat) {
    //console.log(dir);
    var arr = dir.split('/');
    if(arr.length >= 1 && arr[1] !== 'public' && arr[1] !== 'tearsheet-template' && arr[2] === 'dist' && arr[3] === 'index.html'){
      console.log('got ',dirs);
      dirs.push(arr[1]);
    }
  })
  .on('file', function(file, stat) {
    console.log(file);
    var arr = file.split('/');
    if(arr.length >= 1 && arr[1] !== 'public' && arr[1] !== 'tearsheet-template' && arr[2] === 'dist' && arr[3] === 'index.html'){
      console.log('got ',dirs);
      dirs.push(arr[1]);
    }
  })
  .on('error', function(er, entry, stat) {
    next(err);
  })
  .on('end', function() {
    dirs = dirs.filter(function(elem, pos) {
      return dirs.indexOf(elem) == pos;
    });
    res.render('index', { title: 'ETRADE Tearsheets', tearsheets: dirs });
  });

});

module.exports = router;