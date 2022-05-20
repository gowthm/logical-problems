let s = 'bgwdyygtmwhtwhusfedckrgybozfjaukgsngqvzftiypqukxypbkghjiwkphkjtsdizueaz';
console.log(Math.sqrt(s.length));
let a = Math.round(Math.sqrt(s.length));
let b = Math.ceil(Math.sqrt(s.length));
let tempArr = [];
for (let i = 0; i<s.length;) {
    tempArr.push((s.substring(i, i+b)));
    i = i + b;
}
let secondArr = [];
for (let k = 0;k<tempArr.length+1;k++) {
    let c = 0;
    for (let t=0;t<tempArr.length;t++) {
        let d = tempArr[t].charAt(k);
        c = c+d;
        
    }
    c= c.replace(/0/g, '').replace(/,/g, '');
    secondArr.push(c);
}
console.log(secondArr.join(' '));
console.log(tempArr);

