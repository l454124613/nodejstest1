var express = require('express');
var router = express.Router();
var fs = require('fs');
var b = require('bluebird');

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.json({a:{b:1,c:2}});
  //  tt();
 res.render('index', { title: 'what' });
});

router.get('/a', function(req, res, next) {
    var readf = b.promisify(fs.readFile);
    readf('map/tu1.csv').then(function (d) {
        //  var d1=d.toString().split('\r\n');
        return b.all(d.toString().split('\r\n'));

    }).then(function (da) {
        return b.all(da.toString().split(','));
        //  console.log(da);
    }).then(function (db) {
        //console.log(db);
       // dd1 = db;
       // console.log(db[200]);
        res.json(db);
       // return b.resolve(2);
    }).catch(function (e) {
        console.log(e);
    });
 // res.render('index', { title: 'what2' });

});
router.post('/b',function( req,res){
    var readf = b.promisify(fs.readFile);
    readf('map/tu1.csv').then(function (d) {
        //  var d1=d.toString().split('\r\n');
        return b.all(d.toString().split('\r\n'));

    }).then(function (da) {
        res.json(da);

        //  console.log(da);
    }).catch(function (e) {
        console.log(e);
    });
});


module.exports = router;
