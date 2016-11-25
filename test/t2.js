/**
 * Created by lixuecheng on 2016/11/24.
 */
//var a = [[1]];
//
//a.push(a[-1]);

//console.log(a[0][0]);

function ad(i, j,v,a) {
    if (i == 0) {
//xia
        if(a[i+1][j]==0){
            a[i + 1][j] = red(v) ? 1 : 0;
        }
//---------------------------------------------

        if (j == 0) {
            if(a[i][j+1]==0){
                a[i][j+1]=red(v) ? 1 : 0;
            }


        } else if(j==a[i].length-1){

            if(a[i][j-1]==0){
                a[i][j-1] = red(v) ? 1 : 0;
            }


        }else {


            if(a[i][j+1]==0){
                a[i][j+1]=red(v) ? 1 : 0;
            }


            if (a[i][j - 1] ==0) {
                a[i][j - 1] = red(v) ? 1 : 0;
            }
        }


    } else if(i== --a.length){//di
        if( a[i-1][j]==0){//shang
            a[i-1][j]=red(v) ? 1 : 0;
        }
        //-----------------------------
            if(j==0){

                if(a[i][j+1]==0){
                    a[i][j+1]=red(v) ? 1 : 0;
                }
}else  if(j==a[i].length-1){
                if (a[i][j - 1] ==0) {
                    a[i][j - 1] = red(v) ? 1 : 0;
                }

            }else {
                if (a[i][j - 1] ==0) {
                    a[i][j - 1] = red(v) ? 1 : 0;
                }

                if(a[i][j+1]==0){
                    a[i][j+1]=red(v) ? 1 : 0;
                }
            }


    }else {

        if(a[i+1][j]==0){
            a[i + 1][j] = red(v) ? 1 : 0;
        }

        if( a[i-1][j]==0){
            a[i-1][j]=red(v) ? 1 : 0;
        }

        if(j==0){

            if(a[i][j+1]==0){
                a[i][j+1]=red(v) ? 1 : 0;
            }
        }else  if(j==a[i].length-1){
            if (a[i][j - 1] ==0) {
                a[i][j - 1] = red(v) ? 1 : 0;
            }

        }else {
            if (a[i][j - 1] ==0) {
                a[i][j - 1] = red(v) ? 1 : 0;
            }

            if(a[i][j+1]==0){

                a[i][j+1]=red(v) ? 1 : 0;
            }
        }


    }

}

ca=[];
cad=[[1,2]];

ca.push([1,2]);
ca.push([3,3]);
console.log(ca.pop());
console.log(cad.contains([1,2]));


function  go(arr,i,j){
arr[i][j]=1;
    ad(i,j,0.9,arr);
    console.log(arr);


}
function red(a) {
    var g = Math.random() + 0.001 + a;
    if (g >= 1) {
        return true;
    } else {
        return false;
    }
}
//ad(0, 0,1);
var aa=[];
for (var i = 0; i < 10; i++) {
    aa.push([0]);
    for (var j = 0; j < 10; j++) {
        aa[i].push(0);
    }
}
go(aa,2,2);

