let s = "6DWV95HzxTCHP85dvv3NY2crzt1aO8j6g2zSDvFUiJj6XWDlZvNNr";
let k = 87;
let tempArr = [];
let alpha = '0abcdefghijklmnopqrstuvwxyz'.split('');
let alphaLength = alpha.length-1;
console.log(alphaLength, 'k')
for (let i =0 ;i <s.length; i++) {
  // console.log(typeof al.indexOf(s[i].toLowerCase()))
  if(alpha.indexOf(s[i].toLowerCase()) > 0) {
    let index = alpha.indexOf(s[i].toLowerCase());
    
    let t = index+k > alphaLength-1 ? index+k-alphaLength : index+k;
    if (t > 26) {
      t = t -26;
    }
   console.log(t)
    // if (s[i] == alpha[alpha.indexOf(s[i])]) {
    //   tempArr.push(alpha[t]);
    // } else {
    //   tempArr.push(alpha[t].toUpperCase())
    // }
    
  } else {
    tempArr.push(s[i])
  }
}
console.log(tempArr.join(''))