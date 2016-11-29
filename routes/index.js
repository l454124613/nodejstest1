var express = require('express');
var router = express.Router();
var fs = require('fs');
var b = require('bluebird');
var Go=require('../test/t2');
var sqlite3 = require('sqlite3').verbose();
var go=new Go();
var db = new sqlite3.Database('map/ndb.db');

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

  var arr=go.getarr(req.body.py,req.body.px);

    res.json(arr);


});
router.post('/c',function( req,res){

    db.all("SELECT value FROM keycode where ok=0 and name= "+req.body.name, function(err, row) {
        //console.log(row);
     var    res1= row[0].value;

        res.json(res1);
    });






});


module.exports = router;
