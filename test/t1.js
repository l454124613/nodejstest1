/**
 * Created by lixuecheng on 2016/11/8.
 */

var fs = require('fs');
var b = require('bluebird');

function tt() {

    var readf = b.promisify(fs.readFile);
    readf('../map/tu1.csv').then(function (d) {
        //  var d1=d.toString().split('\r\n');
        return b.all(d.toString().split('\r\n'));

    }).then(function (da) {
        return b.all(da.toString().split(','));
        //  console.log(da);
    }).then(function (db) {
        //console.log(db);
        dd1 = db;
        console.log(db[200]);
        return b.resolve(2);
    }).catch(function (e) {
        console.log(e);
    });


}


var dd1=[];


function tt1(){
    tt();
   var i1= setInterval(function(){
        if(dd1.length!=0){
            clearInterval(i1);
return dd1;
        }
    },100);

}
console.log(tt1());



