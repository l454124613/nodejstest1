/**
 * Created by lixuecheng on 2016/11/8.
 */

var fs = require('fs');
var b = require('bluebird');
var sqlite3 = require('sqlite3').verbose();

//db.serialize(function() {
//
//    db.each("SELECT * FROM t1", function(err, row) {
//        console.log(row.t1 );
//    });
//})
////db.close;
//db.all("SELECT * FROM t1", function(err, row) {
//        console.log(row);
//    });
//
//db.close;


function tt() {

    var readf = b.promisify(fs.readFile);
    readf('../map/tu1.csv').then(function (d) {
        //  var d1=d.toString().split('\r\n');
       var dd= d.toString().replace(/,/g,'').replace(/\t/g,'').replace(/ /g,'');
        //console.log(dd);
        var stmt = db.prepare("INSERT INTO map ('name', 'data', 'pic', 'used') VALUES (?, ?, ?, 0)");
        stmt.run('t2',dd,'1.jpg');

        stmt.finalize();

    }).catch(function (e) {
        console.log(e);
    });


}

function go(){
    this.ins=function(v,n){
        var db = new sqlite3.Database('../map/ndb.db');
        var stmt = db.prepare("INSERT INTO keycode ('value', 'name') VALUES (?, ?)");
        stmt.run(v,n);

        stmt.finalize();
    }

}



module.exports=go;




