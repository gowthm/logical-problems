function EightQueens(strArr) { 
  // let firstStep = strArr.shift();
  let finalData;
  let secData;
  strArr.map(data => {
    if (strArr.indexOf(data) == 0 ) {
    } else {
     let currentIndex = strArr.indexOf(data);
     let preIndex = strArr.indexOf(data)-1;
    const t = Number(strArr[currentIndex][1]-strArr[preIndex][1]);
    const t1 = Number(strArr[currentIndex][3]- strArr[preIndex][3]);
   // console.log(strArr[currentIndex], strArr[preIndex], t, t1)
    if (t == t1) {
      finalData = strArr[preIndex];
    } else if (strArr[currentIndex][3] == strArr[preIndex][3]) {
      secData = strArr[preIndex];
    }
    }
   
  })
 return finalData ? finalData : secData ;

}
strArr =  ["(2,1)", "(4,3)", "(6,3)", "(8,4)", "(3,4)", "(1,6)", "(7,7)", "(5,8)"];
   
console.log(EightQueens(strArr));
