let b = 'AASSDDFF'
let b1 = b.split('')
let r = 'YES';
let t = []
let condition = true;
for (let i=1; i<b1.length;i++) {
    if (b1[i+1]) {
        if (b1[i] != b1[i-1] && b1[i] != b1[i+1]) {
        console.log(b1[i], b[i+1],  b[i], b[i-1])
        condition = false;
        break;
    }
}    
    }

console.log(condition);
for (let i=0;i<b1.length;i++) {
const c = [...b].reduce((a, c) => c === b1[i] ? ++a : a, 0);
if (c == 1 && b1[i] != '_') {
    r = 'NO';
    condition = false;
    break;
}
}
if (!condition) {
  if (b1.indexOf('_') == -1) {
  r = 'NO';
}  
 }


console.log(r)

