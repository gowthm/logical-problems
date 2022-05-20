let arr = [10,27,9,10,100,38,30,32,45,29,27,29,32,38,32,38,14,38,29,30,63,29,63,91 ,54,10,63];
// let arr = [35,65,69,28,12,69,37,80,80,50,80,50,15,57,79,69,57,65,15,69,57,50,65,2,14,64,15,65,65,5,15,64,57,37,50,12,64,37,28,20,80,80,50]
 let arrData = new Array(101);
    arrData.fill(0);
   //  console.log(arrData[9])
    for(let i=0;i<arr.length;i++) {
        arrData[arr[i]]++;
    }
    let m = [];
    let g = Math.max(...arrData);
   console.log(arrData[38])
    if(g<=1){
        return arr.length;
    }
    for (let r = 0;r<arrData.length;r++){
        if(g===arrData[r]){
            m.push(r);
        }
    }
    console.log(m)
    arr = arr.filter( function( el ) {
  return m.indexOf( el ) < 0;
} );
if(m.length>1){
    for(let b=0;b<m.length;b++){
        arr.push(m[b]);
    }
    }
console.log(arr.length);
