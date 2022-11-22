let s = "swiss";
let s2 = [];
function nonReapt(s) {
for (let i= 0; i<s.length; i++) {
let arr = s.match(new RegExp(s[i], 'g'));
  if (arr.length == 1) {
    s2.push(arr[0])
  }
}
  return s2[0] || []
}
console.log(nonReapt(s))
