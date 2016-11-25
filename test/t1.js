/**
 * Created by lixuecheng on 2016/11/8.
 */

var fs = require('fs');
var b = require('bluebird');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('../map/ndb.db');
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

tt();



//                if (di[i][2 * j] == 0) {
//                    var r1 = get4(i, j);
//                    if (r1[0] == 2) {
//                        if (r1[1] == 2) {
//                            if (r1[2] == 2) {
//                              console.log('不可能');
//
//                            } else if (r1[2] == 1) {
//                                if (r1[3] == 2) {
//                                    console.log('不可能');
//
//                                } else if (r1[3] == 1) {
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/中20.jpg\'); "> </div>'
//
//                                } else {
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/左下20.jpg\'); "> </div>'
//
//                                }
//                            } else {
//                                if (r1[3] == 2) {
////bukeneng
//
//                                } else if (r1[3] == 1) {
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/右上20.jpg\'); "> </div>'
//
//
//                                } else {
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/中220.jpg\'); "> </div>'
//
//                                }
//                            }
//
//                        } else if (r1[1] == 1) {
//                            if (r1[2] == 2) {
//                                if (r1[3] == 2) {
////bukeneng
//
//                                } else if (r1[3] == 1) {
//                                    //bukeneng
//                                } else {
////bukeng
//                                }
//
//                            } else if (r1[2] == 1) {//211
//                                if (r1[3] == 2) {//2112
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/中220.jpg\'); "> </div>'
//
//
//                                } else if (r1[3] == 1) {//2111
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/中220.jpg\'); "> </div>'
//
//                                } else {//2110
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/右上20.jpg\'); "> </div>'
//
//                                }
//                            } else {//210
//                                if (r1[3] == 2) {//2102
//
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/中20.jpg\'); "> </div>'
//
//                                } else if (r1[3] == 1) {//2101
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/中20.jpg\'); "> </div>'
//
//
//                                } else {//2100
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/中20.jpg\'); "> </div>'
//
//
//                                }
//                            }
//                        } else {//20
//                            if (r1[2] == 2) {//202
//                                if (r1[3] == 2) {
//
//
//                                } else if (r1[3] == 1) {
//
//                                } else {
//
//                                }
//
//                            } else if (r1[2] == 1) {//201
//                                if (r1[3] == 2) {//2012
//
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/右下20.jpg\'); "> </div>'
//
//                                } else if (r1[3] == 1) {//2011
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/右下20.jpg\'); "> </div>'
//
//
//                                } else {//2010
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/中20.jpg\'); "> </div>'
//
//                                }
//                            } else {//200
//                                if (r1[3] == 2) {//2002
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/中20.jpg\'); "> </div>'
//
//
//                                } else if (r1[3] == 1) {//2001
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/中20.jpg\'); "> </div>'
//
//
//                                } else {//2000
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/中20.jpg\'); "> </div>'
//
//                                }
//                            }
//                        }
//
//                    } else if (r1[0] == 1) {//1
//                        if (r1[1] == 2) {//12
//                            if (r1[2] == 2) {//122
//                                if (r1[3] == 2) {//1222
//
//
//                                } else if (r1[3] == 1) {//1221
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/中220.jpg\'); "> </div>'
//
//                                } else {//1220
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/中20.jpg\'); "> </div>'
//
//                                }
//
//                            } else if (r1[2] == 1) {//121
//                                if (r1[3] == 2) {//1212
//
//
//                                } else if (r1[3] == 1) {//1211
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/中220.jpg\'); "> </div>'
//
//
//                                } else {//1210
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/中20.jpg\'); "> </div>'
//
//                                }
//                            } else {//120
//                                if (r1[3] == 2) {//1202
//
//
//                                } else if (r1[3] == 1) {//1201
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/左下20.jpg\'); "> </div>'
//
//                                } else {//1200
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/中20.jpg\'); "> </div>'
//
//
//                                }
//                            }
//
//                        } else if (r1[1] == 1) {//11
//                            if (r1[2] == 2) {//112
//                                if (r1[3] == 2) {//1122
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/中20.jpg\'); "> </div>'
//
//
//                                } else if (r1[3] == 1) {//1121
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/中220.jpg\'); "> </div>'
//
//
//                                } else {//1120
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/左上20.jpg\'); "> </div>'
//
//                                }
//
//                            } else if (r1[2] == 1) {//111
//                                if (r1[3] == 2) {//1112
//
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/中220.jpg\'); "> </div>'
//
//                                } else if (r1[3] == 1) {//1111
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/中220.jpg\'); "> </div>'
//
//
//                                } else {//1110
//                                    ree = ree + '   <div style=" width: 20px;height: 20px; background-image:url(\'images/中220.jpg\'); "> </div>'
//
//
//
//                                }
//                            } else {//TODO
//                                if (r1[3] == 2) {
//
//
//                                } else if (r1[3] == 1) {
//
//                                } else {
//
//                                }
//                            }
//                        } else {
//                            if (r1[2] == 2) {
//                                if (r1[3] == 2) {
//
//
//                                } else if (r1[3] == 1) {
//
//                                } else {
//
//                                }
//
//                            } else if (r1[2] == 1) {
//                                if (r1[3] == 2) {
//
//
//                                } else if (r1[3] == 1) {
//
//                                } else {
//
//                                }
//                            } else {
//                                if (r1[3] == 2) {
//
//
//                                } else if (r1[3] == 1) {
//
//                                } else {
//
//                                }
//                            }
//                        }
//                    } else {
//                        if (r1[1] == 2) {
//                            if (r1[2] == 2) {
//                                if (r1[3] == 2) {
//
//
//                                } else if (r1[3] == 1) {
//
//                                } else {
//
//                                }
//
//                            } else if (r1[2] == 1) {
//                                if (r1[3] == 2) {
//
//
//                                } else if (r1[3] == 1) {
//
//                                } else {
//
//                                }
//                            } else {
//                                if (r1[3] == 2) {
//
//
//                                } else if (r1[3] == 1) {
//
//                                } else {
//
//                                }
//                            }
//
//                        } else if (r1[1] == 1) {
//                            if (r1[2] == 2) {
//                                if (r1[3] == 2) {
//
//
//                                } else if (r1[3] == 1) {
//
//                                } else {
//
//                                }
//
//                            } else if (r1[2] == 1) {
//                                if (r1[3] == 2) {
//
//
//                                } else if (r1[3] == 1) {
//
//                                } else {
//
//                                }
//                            } else {
//                                if (r1[3] == 2) {
//
//
//                                } else if (r1[3] == 1) {
//
//                                } else {
//
//                                }
//                            }
//                        } else {
//                            if (r1[2] == 2) {
//                                if (r1[3] == 2) {
//
//
//                                } else if (r1[3] == 1) {
//
//                                } else {
//
//                                }
//
//                            } else if (r1[2] == 1) {
//                                if (r1[3] == 2) {
//
//
//                                } else if (r1[3] == 1) {
//
//                                } else {
//
//                                }
//                            } else {
//                                if (r1[3] == 2) {
//
//
//                                } else if (r1[3] == 1) {
//
//                                } else {
//
//                                }
//                            }
//                        }
//                    }
//



