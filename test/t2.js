/**
 * Created by lixuecheng on 2016/11/24.
 */
//var a = [[1]];
//
//a.push(a[-1]);

//console.log(a[0][0]);




function ad(i, j,v,a) {
//console.log(1222);
i=Number(i);
    j=Number(j);
    if(a[i][j]>0){
        if (i == 0) {
//xia
            if(a[i+1][j]==0){
                a[i + 1][j] = red(v) ? 1 : 0;
                addarr((i+1)+','+j,a);
            }
//---------------------------------------------

            if (j == 0) {
                if(a[i][j+1]==0){
                    a[i][j+1]=red(v) ? 1 : 0;
                    addarr((i)+','+(j+1),a);
                }


            } else if(j==a[i].length-1){

                if(a[i][j-1]==0){
                    a[i][j-1] = red(v) ? 1 : 0;
                    addarr((i)+','+(j-1),a);
                }


            }else {


                if(a[i][j+1]==0){
                    a[i][j+1]=red(v) ? 1 : 0;
                    addarr((i)+','+(j+1),a);
                }


                if (a[i][j - 1] ==0) {
                    a[i][j - 1] = red(v) ? 1 : 0;
                    addarr((i)+','+(j-1),a);
                }
            }


        } else if(i+1== a.length){//di
            if( a[i-1][j]==0){//shang
                a[i-1][j]=red(v) ? 1 : 0;
                addarr((i-1)+','+(j)),a;
            }
            //-----------------------------
            if(j==0){

                if(a[i][j+1]==0){
                    a[i][j+1]=red(v) ? 1 : 0;
                    addarr((i)+','+(j+1),a);
                }
            }else  if(j+1==a[i].length){
                if (a[i][j - 1] ==0) {
                    a[i][j - 1] = red(v) ? 1 : 0;
                    addarr((i)+','+(j-1),a);
                }

            }else {
                if (a[i][j - 1] ==0) {
                    a[i][j - 1] = red(v) ? 1 : 0;
                    addarr((i)+','+(j-1),a);
                }

                if(a[i][j+1]==0){
                    a[i][j+1]=red(v) ? 1 : 0;
                    addarr((i)+','+(j+1),a);
                }
            }


        }else {
          //  console.log(a[3][8]);
         //   console.log( i+','+j);
            if(a[i+1][j]==0){
                a[i + 1][j] = red(v) ? 1 : 0;
                addarr((i+1)+','+(j),a);
            }

            if( a[i-1][j]==0){
                a[i-1][j]=red(v) ? 1 : 0;
                addarr((i-1)+','+(j),a);
            }

            if(j==0){

                if(a[i][j+1]==0){
                    a[i][j+1]=red(v) ? 1 : 0;
                    addarr((i)+','+(j+1),a);
                }
            }else  if(j+1==a[i].length){
                if (a[i][j - 1] ==0) {
                    a[i][j - 1] = red(v) ? 1 : 0;
                    addarr((i)+','+(j-1),a);
                }

            }else {
                if (a[i][j - 1] ==0) {
                    a[i][j - 1] = red(v) ? 1 : 0;
                    addarr((i)+','+(j-1),a);
                }

                if(a[i][j+1]==0){

                    a[i][j+1]=red(v) ? 1 : 0;
                    addarr((i)+','+(j+1),a);
                }
            }

        }


    }

}

var ca=[];
var cad=[];



function goo(){

   this.getarr=function (x,y){

       var aa=[];
       for (var i = 0; i < 8; i++) {
           aa.push([0]);
           for (var j = 0; j <15; j++) {
               aa[i].push(0);
           }
       }
     //  console.log(aa);
       var guo=go(aa,x,y);
      // console.log(11111);
      // console.log(guo);
       return  guo;
   };
}




function addarr(a,b){
    if(contains(cad,a)){

//if(b[Number(a.split(',')[0])][Number(a.split(',')[1])]==0){
//    ca.push(a);
//}


    }else {
        ca.push(a);
        cad.push(a);
    }

}
function  go(arr,i,j){
 //   console.log(arr);
 //   console.log(i+':'+j);
arr[i][j]=1;
cad=[];
    addarr(i+','+j);
    var vv=0.99;
while(ca.length>0){
    var g1=ca.pop();
//console.log(ca);
//    console.log(cad);

    ad(g1.split(',')[0],g1.split(',')[1],vv,arr);
    if(vv>0.3){
        vv=vv-0.02;
    }

}
   // ad(arr);
   //console.log(arr);
    return arr;


}
function contains(a, obj) {
    var i = a.length;
    while (i--) {
        //console.log(a[i]);
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
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


module .exports=goo;